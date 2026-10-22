const fs = require("fs");
const { chromium } = require("playwright");
const { default: AxeBuilder } = require("@axe-core/playwright");
(async () => {
  fs.mkdirSync("prototype-qa", { recursive: true });
  const b = await chromium.launch({
    ...(process.env.CHROME_PATH
      ? { executablePath: process.env.CHROME_PATH }
      : {}),
    headless: true,
  });
  const context = await b.newContext();
  const page = await context.newPage();
  const errors = [];
  const external = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("request", (r) => {
    if (!r.url().startsWith("http://127.0.0.1:4173")) external.push(r.url());
  });
  const results = [];
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/shop",
      "/product/mychron",
      "/cart",
      "/builder",
      "/learn",
      "/support",
    ]) {
      await page.goto("http://127.0.0.1:4173/#" + route);
      await page.waitForTimeout(150);
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      results.push({
        width,
        route,
        overflow: await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        axe: axe.violations.map((x) => ({
          id: x.id,
          nodes: x.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
      if (route === "/") {
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 50));
          }
          window.scrollTo(0, 0);
        });
        await page.waitForTimeout(200);
      }
      if (route === "/")
        await page.screenshot({
          path: `prototype-qa/home-${width}.png`,
          fullPage: true,
        });
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:4173/#/shop");
  await page
    .getByRole("button", { name: "Sensors & wiring", exact: true })
    .click();
  await page.waitForTimeout(100);
  if ((await page.locator(".product-card").count()) !== 3)
    throw Error("Sensor filter failed");
  await page.locator("#site-search").fill("MXS");
  await page.locator(".search button").click();
  await page.waitForTimeout(100);
  if ((await page.locator(".product-card").count()) !== 1)
    throw Error("Search failed");
  await page.goto("http://127.0.0.1:4173/#/product/mychron");
  await page.locator("#product-option").selectOption({ index: 1 });
  await page.locator("#quantity").fill("2");
  await page.getByRole("button", { name: /Add to demo cart/ }).click();
  await page.goto("http://127.0.0.1:4173/#/cart");
  if (!(await page.locator(".cart-total").innerText()).includes("$1,518.00"))
    throw Error("Cart total failed");
  await page.reload();
  if ((await page.locator(".cart-item").count()) !== 1)
    throw Error("Cart persistence failed");
  await page.getByRole("button", { name: /Increase .* quantity/ }).click();
  if (!(await page.locator(".cart-total").innerText()).includes("$2,277.00"))
    throw Error("Quantity failed");
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#download-plan").click();
  const download = await downloadPromise;
  await download.saveAs("prototype-qa/parts-list.txt");
  await page.screenshot({
    path: "prototype-qa/cart-populated.png",
    fullPage: true,
  });
  await page.getByRole("button", { name: /Remove MyChron/ }).click();
  if (await page.locator(".cart-item").count()) throw Error("Remove failed");
  await page.goto("http://127.0.0.1:4173/#/builder");
  await page.getByRole("button", { name: /Track days/ }).click();
  await page.locator("#builder-next").click();
  await page.getByRole("button", { name: /Starting fresh/ }).click();
  await page.getByLabel("ECU connection plan").selectOption("ECU present");
  await page.getByLabel("ECU make, model and firmware").fill("Example ECU");
  await page.locator("#builder-next").click();
  await page.locator('[data-sensor="oil"]').check();
  await page.locator('[data-sensor="egt"]').check();
  await page.locator("#builder-next").click();
  if (!(await page.locator(".builder").innerText()).includes("Solo 2 DL"))
    throw Error("Builder failed");
  const plan = await page.locator(".builder").innerText();
  for (const expected of [
    "Oil-pressure sensor",
    "EGT probe",
    "Main harness",
    "ECU-to-logger",
    "Oil pressure extension / patch cable",
    "UNVERIFIED",
    "System total: not quoted",
  ])
    if (!plan.includes(expected))
      throw Error("Missing draft requirement: " + expected);
  const planDownloadPromise = page.waitForEvent("download");
  await page.locator("#download-builder").click();
  const planDownload = await planDownloadPromise;
  await planDownload.saveAs("prototype-qa/system-plan.txt");
  if (
    !fs
      .readFileSync("prototype-qa/system-plan.txt", "utf8")
      .includes("Example ECU")
  )
    throw Error("Export omitted ECU");
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    results.push({
      width,
      route: "/builder/result",
      overflow: await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      axe: axe.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
  }
  await page
    .getByRole("button", { name: "Edit hardware", exact: true })
    .click();
  await page.getByRole("button", { name: /Keep my existing logger/ }).click();
  await page
    .getByLabel("Existing logger / dash and revision")
    .fill("<img src=x onerror=alert(1)>");
  await page
    .getByLabel("ECU connection plan")
    .selectOption("No ECU connection planned");
  await page.locator("#builder-next").click();
  if (!(await page.locator('[data-sensor="oil"]').isChecked()))
    throw Error("Sensor selection lost");
  await page.locator('[data-sensor="egt"]').uncheck();
  await page.locator("#builder-next").click();
  const existingPlan = await page.locator(".builder").innerText();
  if (
    existingPlan.includes("Solo 2 DL") ||
    existingPlan.includes("ECU-to-logger") ||
    existingPlan.includes("EGT probe")
  )
    throw Error("Stale or redundant recommendation");
  if (!existingPlan.includes("<img src=x onerror=alert(1)>"))
    throw Error("Input escaping failed");
  if (await page.locator(".plan-summary img").count())
    throw Error("Unsafe HTML input");
  await page.screenshot({
    path: "prototype-qa/builder-result.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("http://127.0.0.1:4173/#/");
  await page.locator(".menu-toggle").click();
  if (
    (await page.locator(".menu-toggle").getAttribute("aria-expanded")) !==
    "true"
  )
    throw Error("Menu failed");
  await page.keyboard.press("Escape");
  if (
    (await page.locator(".menu-toggle").getAttribute("aria-expanded")) !==
    "false"
  )
    throw Error("Menu Escape failed");
  fs.writeFileSync(
    "prototype-qa/results.json",
    JSON.stringify(
      {
        results,
        errors,
        external,
        functional:
          "PASS: filters, search, variant selection, cart totals, quantity, persistence, remove, file download, builder, mobile menu and Escape",
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      {
        failures: results.filter((x) => x.overflow || x.axe.length),
        errors,
        external,
        functional: "PASS",
      },
      null,
      2,
    ),
  );
  await b.close();
  if (
    results.some((x) => x.overflow || x.axe.length) ||
    errors.length ||
    external.length
  )
    process.exitCode = 1;
})();
