"use strict";
const products = [
  {
    id: "mychron",
    name: "MyChron 6 2T",
    brand: "AiM",
    category: "Karting",
    use: ["Karting"],
    price: 759,
    tag: "FOR THE KART GRID",
    image: "mychron",
    short: "A clearer view of every lap. Start your kart data journey here.",
    desc: "Bring lap data into your driving routine. Explore a MyChron setup and choose your temperature-sensor configuration with help from a data expert.",
    options: [
      "Select a sensor configuration",
      "CHT package — expert review required",
      "EGT package — expert review required",
      "No sensor — demo configuration",
    ],
    facts: [
      ["Product family", "MyChron 6"],
      ["Application", "Karting"],
      ["Configuration", "2T"],
      ["Sensor package", "Select and verify before purchase"],
    ],
    compat:
      "Sensor connector, lead length and temperature-input configuration need to match your installation. A matching connector alone does not confirm compatibility.",
  },
  {
    id: "mxs",
    name: "MXS 1.3 Dash Logger",
    brand: "AiM",
    category: "Dashes & loggers",
    use: ["Club racing"],
    price: 2899,
    tag: "BUILD AROUND YOUR DATA",
    image: "mxs-detail",
    short:
      "Your data, front and center. A foundation for your race-car system.",
    desc: "Bring your important channels into one view. Start with the dash, then plan the sensors, harness and connections around your car and goals.",
    options: [
      "Select a configuration",
      "Dash only — demo configuration",
      "System planning — hardware review required",
    ],
    facts: [
      ["Product family", "MXS"],
      ["Listed generation", "1.3"],
      ["Application", "Race-car data system"],
      ["Harness / sensors", "Confirm separately"],
    ],
    compat:
      "Confirm the exact dash revision, ECU protocol, harness and sensor inputs before assembling a system. Wiring and firmware requirements require expert review.",
  },
  {
    id: "tpms",
    name: "TPMS Unlimited",
    brand: "TrailBrake",
    category: "Sensors & wiring",
    use: ["Club racing", "Track days"],
    price: 256.75,
    tag: "TRAILBRAKE ORIGINAL",
    image: "tpms",
    short: "Make tire pressure part of the conversation, lap after lap.",
    desc: "Plan tire-pressure monitoring around the data system you already use. Choose the hardware and integration with an expert before purchase.",
    options: [
      "Select a configuration",
      "Starter configuration — review required",
      "Multi-sensor system — request planning",
    ],
    facts: [
      ["Brand", "TrailBrake"],
      ["Product family", "TPMS Unlimited"],
      ["Price display", "Starting price snapshot"],
      ["Integration", "Verify receiver and data-system requirements"],
    ],
    compat:
      "Receiver, sensor count and data-system integration affect the final package and price. This starting-price demo is not a complete-system quote.",
  },
  {
    id: "trackkit",
    name: "Solo 2 DL + SmartyCam 4 Kit",
    brand: "AiM",
    category: "Dashes & loggers",
    use: ["Track days"],
    price: 2875,
    tag: "START WITH A SYSTEM",
    image: "trackkit",
    short: "Lap data and video. A starting point for your next track day.",
    desc: "The observed TrailBrake Track Day Kit combines Solo 2 DL, SmartyCam 4 Corsa, a Track Day Mount and associated cables. Confirm the correct ECU connection for your vehicle.",
    options: [
      "Select a connection plan",
      "Connection to be confirmed with an expert",
      "Existing connection — expert review required",
    ],
    facts: [
      ["Data unit", "Solo 2 DL"],
      ["Camera", "SmartyCam 4 Corsa"],
      ["Listed kit", "Track Day Mount and associated cables"],
      ["Vehicle / ECU fitment", "Not yet verified"],
    ],
    compat:
      "Your vehicle, ECU and available connection determine the correct installation. This prototype does not verify vehicle fitment.",
  },
  {
    id: "pressure",
    name: "1/8″ NPT Pressure Sensor",
    brand: "AiM",
    category: "Sensors & wiring",
    use: ["Club racing"],
    price: 165,
    tag: "MEASURE WHAT MATTERS",
    image: "pressure",
    short: "Choose the pressure range and connection your system needs.",
    desc: "Start with what you need to measure, then select the pressure range and electrical interface. Your measurement goal determines the right sensor.",
    options: [
      "Select a measurement goal",
      "Oil pressure — range to be confirmed",
      "Fuel pressure — range to be confirmed",
      "Other application — expert review",
    ],
    facts: [
      ["Brand", "AiM"],
      ["Thread in listing", "1/8″ NPT"],
      ["Pressure range", "Must be selected for application"],
      ["Electrical interface", "Verify against your harness"],
    ],
    compat:
      "Check range, fluid compatibility, voltage, output signal, connector and logger input. Thread size only describes the mechanical connection.",
  },
  {
    id: "cable",
    name: "719 to 719 Patch Cable",
    brand: "AiM",
    category: "Sensors & wiring",
    use: ["Karting", "Club racing"],
    price: 32,
    tag: "THE RIGHT CONNECTION",
    image: "cable",
    short: "The small detail that keeps your system connected.",
    desc: "A 4-pin patch-cable listing from the reference catalog. Confirm both end connections, signal requirements and installed cable length before ordering.",
    options: [
      "Select a planning option",
      "Length and connector review required",
    ],
    facts: [
      ["Connector family in listing", "719 to 719"],
      ["Listed pin count", "4"],
      ["Cable length", "Confirm before purchase"],
      ["Compatibility", "Not inferred from connector name"],
    ],
    compat:
      "Verify pin count, gender, keying, pin assignment and required cable length at both ends. Similar-looking plugs can carry different signals.",
  },
];
const articles = [
  {
    id: "pressure",
    title: "Pressure sensors: start with the right question.",
    category: "SENSOR FUNDAMENTALS",
    time: "4 MIN READ",
    intro:
      "Before you choose a sensor, decide what you want the number to tell you.",
    source: "https://trailbrake.com/data-analysis-tips/",
    parts: [
      [
        "What are you measuring?",
        "Oil, fuel and tire pressure are different measurement problems. Begin with the application and operating conditions, rather than a connector or price.",
      ],
      [
        "Gauge, absolute or differential?",
        "These measurements use different references. Make sure the specification matches the question you are trying to answer. A useful conversation with your data expert starts with the pressure source and how you intend to use the reading.",
      ],
      [
        "Build a complete connection path",
        "Record the sensor’s range, mechanical thread, electrical output, supply requirements and connector. Then check the logger input and harness. This is a planning checklist, not a substitute for the sensor manual.",
      ],
    ],
  },
  {
    id: "first-session",
    title: "Your first data session. Keep it simple.",
    category: "GETTING STARTED",
    time: "3 MIN READ",
    intro:
      "A useful first session starts with a small, repeatable question—not every channel on the screen.",
    source: "https://www.youtube.com/@TrailBrakeData",
    parts: [
      [
        "Start with a question",
        "Choose something you want to understand about consistency. Compare similar laps and write down the conditions so you know what changed.",
      ],
      [
        "Check the data before the conclusion",
        "Confirm units, timestamps and channel quality. A flat line or unexpected jump can be a recording problem. Don’t turn a missing measurement into a confident diagnosis.",
      ],
      [
        "Bring context to the conversation",
        "When asking for help, share the hardware model, recording setup, session conditions and the question you are trying to answer. Use the TrailBrake video library for model-specific instruction.",
      ],
    ],
  },
  {
    id: "connections",
    title: "The right sensor. The right connection.",
    category: "SYSTEM PLANNING",
    time: "3 MIN READ",
    intro:
      "A connector that fits physically is only one part of compatibility.",
    source: "https://trailbrake.com/data-analysis-tips/",
    parts: [
      [
        "Name every component",
        "List your exact logger or dash model, hardware revision, sensor part number and harness. “An MXS” or “a CAN sensor” is not enough detail to verify a connection.",
      ],
      [
        "Check both sides",
        "Connector family, pin count, gender, keying, voltage and signal type all matter. CAN devices also need compatible communication settings. Use a reviewed manufacturer document, not connector appearance.",
      ],
      [
        "Leave room for an expert check",
        "If a pinout, adapter or revision is unclear, stop short of calling the system complete. Ask for a reviewed bill of materials before purchasing or connecting hardware.",
      ],
    ],
  },
];
const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );
let cart = [];
try {
  const stored = JSON.parse(
    localStorage.getItem("trailbrake-demo-cart") || "[]",
  );
  if (Array.isArray(stored))
    cart = stored
      .filter(
        (x) =>
          products.some((p) => p.id === x.id) &&
          Number.isInteger(x.qty) &&
          x.qty > 0 &&
          x.qty <= 99 &&
          typeof x.option === "string",
      )
      .map((x) => ({ id: x.id, qty: x.qty, option: x.option.slice(0, 200) }));
} catch {}
let builder = {
  step: 1,
  use: "",
  hardware: "",
  vehicle: "",
  engine: "",
  logger: "",
  ecuStatus: "Not sure",
  ecu: "",
  existing: "",
  sensors: [],
  notes: "",
};
function saveCart() {
  try {
    localStorage.setItem("trailbrake-demo-cart", JSON.stringify(cart));
  } catch {}
  $(".cart-count").textContent = cart.reduce((n, x) => n + x.qty, 0);
  $(".cart-link").setAttribute(
    "aria-label",
    `Demo cart, ${cart.reduce((n, x) => n + x.qty, 0)} items`,
  );
}
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(
    () => $("#toast").classList.remove("show"),
    3500,
  );
}
function addCart(id, option, qty) {
  const found = cart.find((x) => x.id === id && x.option === option);
  if (found) found.qty = Math.min(99, found.qty + qty);
  else cart.push({ id, option, qty });
  saveCart();
  toast("Added to your demo cart. No order has been placed.");
}
function image(p, loading = "lazy") {
  return `<img src="assets/${p.image}.${p.image === "trackkit" ? "webp" : "jpg"}" alt="${esc(p.brand + " " + p.name)}" loading="${loading}" width="640" height="480">`;
}
function card(p) {
  return `<article class="product-card"><a class="product-image" href="#/product/${p.id}" aria-label="View ${esc(p.name)}"><span class="product-tag">${p.tag}</span>${image(p)}</a><span class="brand-name">${p.brand}</span><h3><a href="#/product/${p.id}">${p.name}</a></h3><p>${p.short}</p><div class="product-bottom"><span>${p.id === "tpms" ? "From " : ""}${money(p.price)}</span><a class="round-link" href="#/product/${p.id}" aria-label="Explore ${esc(p.name)}">↗</a></div></article>`;
}
function art(i) {
  const paths = [
    `<path d="M20 105h280M20 105V10M35 92l22-4 17-35 26 11 30-32 30 10 20-27 30 12 22-10 35 6"/><path d="M35 98l45-8 34-22 40 5 45-18 36 8 37-13" stroke="#c94435"/><path d="M20 40h280M20 72h280" stroke="#152744" opacity=".15"/>`,
    `<path d="M68 75c-30-42 17-67 50-42 20 15 30 13 48-6 38-36 97 18 51 52-17 13-39 7-57 4-34-5-67 26-92-8Z" stroke-width="4"/><path d="m110 77 15 4-6 14" stroke="#c94435"/><circle cx="74" cy="47" r="5" fill="#c94435" stroke="none"/>`,
    `<rect x="36" y="32" width="55" height="54" rx="8"/><rect x="214" y="32" width="55" height="54" rx="8"/><path d="M91 49h38c22 0 22 29 44 29h41M91 68h38c22 0 22-29 44-29h41"/><circle cx="53" cy="50" r="3"/><circle cx="73" cy="68" r="3"/><circle cx="234" cy="50" r="3"/><circle cx="253" cy="68" r="3"/>`,
  ];
  return `<div class="article-art"><span>TRAILBRAKE FIELD NOTES / 0${i + 1}</span><svg viewBox="0 0 320 120" aria-hidden="true">${paths[i]}</svg></div>`;
}
function articleCard(a, i) {
  return `<article class="article-card"><a href="#/article/${a.id}" aria-label="Read ${esc(a.title)}">${art(i)}</a><span class="eyebrow">${a.category} · ${a.time}</span><h3><a href="#/article/${a.id}">${a.title}</a></h3><p>${a.intro}</p><a class="text-link" href="#/article/${a.id}">Read the guide <span>↗</span></a></article>`;
}
function bread(label) {
  return `<div class="wrap breadcrumb"><a href="#/">Home</a> &nbsp; / &nbsp; ${esc(label)}</div>`;
}
function banner() {
  return `<div class="system-banner"><div><span class="eyebrow">LESS GUESSWORK. MORE TRACK TIME.</span><h2>Good systems start with a plan.</h2><p>Tell us what you drive and what you want to learn. We’ll help map the next step.</p></div><a class="btn btn-white" href="#/builder">Build your system <span>↗</span></a></div>`;
}
function home() {
  return `<section class="hero wrap"><div class="hero-copy"><span class="eyebrow">MOTORSPORT DATA. HUMAN EXPERTISE.</span><h1>Find your<br>next <em>tenth.</em></h1><p>The right data changes how you drive. Find your AiM system, connect the right sensors, and turn every session into a step forward.</p><div class="buttons"><a class="btn btn-red" href="#/shop">Explore the shop <span>↗</span></a><a class="btn btn-outline" href="#/builder">Build your system <span>→</span></a></div><div class="hero-foot"><span class="aim">AiM</span><span>Your data partner. From the first lap onward.</span></div></div><div class="hero-visual"><div class="grid-bg"></div><div class="visual-top"><span>THE DRIVER’S POINT OF VIEW</span><span>● DATA IN FOCUS</span></div>${image(products[1], "eager")}<div class="visual-label">AiM MXS FAMILY<strong>Every channel. One clear view.</strong></div><div class="telemetry"><div><small>ILLUSTRATIVE LAP DELTA</small><b>−0.248<span class="delta">↘ SEC</span></b><small>FIND THE STORY IN YOUR DATA</small></div><svg viewBox="0 0 220 65" aria-label="Illustrative telemetry trace"><path d="M0 50h220M0 25h220" stroke="#465777" fill="none"/><path d="M0 45 14 42 29 49 40 24 50 20 64 44 79 32 91 35 105 10 118 15 130 40 145 29 155 35 168 13 185 20 200 8 220 13" fill="none" stroke="#b4d88b" stroke-width="2"/><path d="M0 52 20 45 40 48 60 39 80 42 100 31 120 35 140 25 160 29 180 19 200 24 220 18" fill="none" stroke="#6881ae" stroke-width="1.5"/></svg></div></div></section><div class="trust-bar"><div class="wrap trust-items"><div><span class="trust-icon">◎</span><span><strong>AiM-focused expertise</strong><small>Hardware, software, and setup</small></span></div><div><span class="trust-icon">↗</span><span><strong>Built around your goals</strong><small>From karting to club racing</small></span></div><div><span class="trust-icon">⌁</span><span><strong>Connections that make sense</strong><small>Plan the whole system</small></span></div><div><span class="trust-icon">◉</span><span><strong>A real person in your corner</strong><small>Manchester, New Hampshire</small></span></div></div></div><section class="wrap section"><div class="section-head"><div><span class="eyebrow">YOUR TRACK. YOUR STARTING POINT.</span><h2>What do you drive?</h2></div><a class="text-link" href="#/shop">Shop all products <span>↗</span></a></div><div class="routes">${["Karting", "Track days", "Club racing"].map((use, i) => `<a class="route-card" href="#/shop?use=${encodeURIComponent(use)}"><span class="route-number">0${i + 1} / ${["KART", "TRACK", "RACE"][i]}</span><span class="route-arrow">↗</span><h3>${use}</h3><p>${["Make every lap a lesson.", "Turn seat time into insight.", "Build a system that goes deeper."][i]}</p><svg viewBox="0 0 150 110" aria-hidden="true"><path d="M25 85c-27-26-2-65 29-57 21 5 21-16 43-13 38 4 39 44 20 57-29 20-50-8-64 17-7 12-20 7-28-4Z"/><path d="m40 28 4 10 10-3"/></svg></a>`).join("")}</div></section><section class="wrap section spacer-top"><div class="section-head"><div><span class="eyebrow">PURPOSE-BUILT FOR YOUR NEXT SESSION</span><h2>Start with the right equipment.</h2></div><a class="text-link" href="#/shop">Explore the range <span>↗</span></a></div><div class="product-grid">${products.slice(0, 4).map(card).join("")}</div></section><section class="wrap section spacer-top">${banner()}</section><section class="wrap section spacer-top"><div class="section-head"><div><span class="eyebrow">KNOW MORE. GET MORE FROM YOUR DATA.</span><h2>Knowledge is a performance part.</h2></div><a class="text-link" href="#/learn">All guides <span>↗</span></a></div><div class="learning-grid">${articles.map(articleCard).join("")}</div></section><section class="expert-band"><div class="wrap"><div><h2>Not sure what connects to what?</h2><p>That’s a good place to start. Talk through your system with a data expert.</p></div><a class="btn btn-outline" href="#/support">Let’s figure it out <span>↗</span></a></div></section>`;
}
function shop(params) {
  const q = (params.get("q") || "").trim(),
    category = params.get("category") || "All products",
    use = params.get("use") || "",
    sort = params.get("sort") || "featured";
  const aliases = {
    sender: "sensor",
    719: "719",
    logger: "logger",
    camera: "smartycam",
    video: "smartycam",
  };
  const words = q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => aliases[w] || w);
  let items = products.filter(
    (p) =>
      (category === "All products" || p.category === category) &&
      (!use || p.use.includes(use)) &&
      words.every((w) =>
        (
          p.name +
          " " +
          p.brand +
          " " +
          p.category +
          " " +
          p.short +
          " " +
          p.use.join(" ")
        )
          .toLowerCase()
          .includes(w),
      ),
  );
  if (sort === "price-low") items.sort((a, b) => a.price - b.price);
  if (sort === "price-high") items.sort((a, b) => b.price - a.price);
  return `${bread(q ? "Search" : use || "Shop")}<section class="wrap page-heading"><span class="eyebrow">THE TRAILBRAKE DEMO COLLECTION</span><h1>${q ? `Results for “${esc(q)}”` : use || "Find your next advantage."}</h1><p>${use ? "A curated starting point. Choose a product to explore options and plan compatibility." : "Dashes, sensors and the connections between them. Start with your goal, then build the right system."}</p></section><section class="wrap section spacer-top"><div class="shop-toolbar"><div class="filters" role="group" aria-label="Product categories">${["All products", "Dashes & loggers", "Karting", "Sensors & wiring"].map((c) => `<button class="chip ${category === c ? "active" : ""}" data-category="${esc(c)}" aria-pressed="${category === c}">${esc(c)}</button>`).join("")}${use ? '<button class="chip" data-clear-use>Clear driving filter ×</button>' : ""}</div><div class="sort-row"><label class="sr-only" for="sort">Sort products</label><select id="sort"><option value="featured" ${sort === "featured" ? "selected" : ""}>Featured</option><option value="price-low" ${sort === "price-low" ? "selected" : ""}>Price: low to high</option><option value="price-high" ${sort === "price-high" ? "selected" : ""}>Price: high to low</option></select></div></div><p class="results-count">${items.length} ${items.length === 1 ? "product" : "products"} · Sample catalog · Snapshot pricing, no live stock</p>${items.length ? `<div class="product-grid shop-grid">${items.map(card).join("")}</div>` : `<div class="empty-state"><h2>No products found.</h2><p>Try “MXS”, “pressure”, “kart” or clear the filters.</p><a class="btn" href="#/shop">View all products →</a></div>`}</section><section class="wrap section spacer-top">${banner()}</section>`;
}
function product(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return notFound();
  return `${bread(p.name)}<section class="wrap product-detail"><div><div class="detail-image">${image(p, "eager")}</div><p class="image-caption">Reference catalog photograph. Confirm current hardware and included items before purchase.</p></div><div class="detail-info"><span class="eyebrow">${p.brand} / ${p.category}</span><h1>${p.name}</h1><p class="detail-subtitle">${p.desc}</p><div class="detail-price">${p.id === "tpms" ? "From " : ""}${money(p.price)}</div><div class="demo-price">Demo price snapshot · Stock and final package price not verified</div><form id="add-form" data-product="${p.id}"><label class="field-label" for="product-option">Plan your configuration <span aria-hidden="true">*</span></label><select id="product-option" required>${p.options.map((o, i) => `<option value="${i ? esc(o) : ""}">${esc(o)}</option>`).join("")}</select><div class="compat-note"><strong>Check the connection, not just the product name.</strong><p>${p.compat}</p></div><div class="purchase-row"><label class="sr-only" for="quantity">Quantity</label><input id="quantity" type="number" min="1" max="99" value="1" required><button class="btn btn-red" type="submit">Add to demo cart <span>→</span></button></div></form><a class="text-link" href="#/support">Check my system with an expert <span>↗</span></a></div></section><section class="wrap detail-panels"><div><h2>The details that matter.</h2><table class="specs"><tbody>${p.facts.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join("")}</tbody></table></div><div><h2>Before you add it to your system.</h2><p>This prototype shows the information a guided buying experience should bring together. It does not certify fitment.</p><ul><li>Confirm your exact device model and revision.</li><li>Verify sensors, connectors and cables against current documentation.</li><li>Check what is included in the selected package.</li></ul><a href="#/article/connections" class="text-link">Read the connection checklist <span>↗</span></a></div></section><section class="wrap section"><div class="section-head"><div><span class="eyebrow">EXPLORE THE REST OF YOUR SYSTEM</span><h2>Keep the big picture in view.</h2></div></div><p class="results-count">Related categories to explore — compatibility is not implied.</p><div class="product-grid">${products
    .filter((x) => x.id !== id)
    .slice(0, 4)
    .map(card)
    .join("")}</div></section>`;
}
function cartPage() {
  const total = cart.reduce(
    (n, x) => n + products.find((p) => p.id === x.id).price * x.qty,
    0,
  );
  return `${bread("Demo cart")}<section class="wrap page-heading"><span class="eyebrow">YOUR NEXT SESSION STARTS HERE</span><h1>Your demo cart.</h1><p>Explore a potential setup. No order, payment or inventory reservation is created.</p></section><section class="wrap cart-layout">${
    cart.length
      ? `<div>${cart
          .map((x, i) => {
            const p = products.find((p) => p.id === x.id);
            return `<article class="cart-item">${image(p)}<div><h2><a href="#/product/${p.id}">${p.name}</a></h2><p>${esc(x.option)}</p><div class="qty-control"><button data-qty="${i}" data-delta="-1" aria-label="Decrease ${esc(p.name)} quantity" ${x.qty === 1 ? "disabled" : ""}>−</button><span aria-label="Quantity ${x.qty}">${x.qty}</span><button data-qty="${i}" data-delta="1" aria-label="Increase ${esc(p.name)} quantity" ${x.qty === 99 ? "disabled" : ""}>+</button></div><button class="remove" data-remove="${i}" aria-label="Remove ${esc(p.name)}">Remove</button></div><strong>${money(p.price * x.qty)}</strong></article>`;
          })
          .join(
            "",
          )}<div class="buttons"><a class="text-link" href="#/shop">← Continue exploring</a></div></div><aside class="cart-total"><h2>Your planning summary</h2><div class="total-line"><span>Items (${cart.reduce((n, x) => n + x.qty, 0)})</span><span>${money(total)}</span></div><div class="total-line"><span>Shipping & tax</span><span>Not calculated</span></div><div class="total-line big"><span>Demo subtotal</span><span>${money(total)}</span></div><div class="note">Configurations and final prices need review. This cart cannot place orders.</div><button class="btn btn-red" id="download-plan">Download your parts list ↓</button><a class="btn btn-outline" href="#/support">Talk through this setup ↗</a></aside>`
      : `<div class="empty-state" style="grid-column:1/-1"><span class="eyebrow">ROOM FOR YOUR NEXT IDEA</span><h2>Your cart is ready when you are.</h2><p>Explore the demo collection, or let your driving goals guide the way.</p><div class="buttons" style="justify-content:center"><a class="btn btn-red" href="#/shop">Explore products →</a><a class="btn btn-outline" href="#/builder">Build your system ↗</a></div></div>`
  }</section>`;
}
const sensorChoices = [
  {
    id: "oil",
    name: "Oil pressure",
    part: "Oil-pressure sensor",
    check:
      "Pressure range, thread, fluid suitability, supply and output signal",
  },
  {
    id: "fuel",
    name: "Fuel pressure",
    part: "Fuel-pressure sensor",
    check: "Fuel suitability, pressure range, thread, supply and output signal",
  },
  {
    id: "coolant",
    name: "Coolant temperature",
    part: "Coolant-temperature sensor",
    check:
      "Thread, temperature range and resistance/calibration or signal type",
  },
  {
    id: "cht",
    name: "Cylinder-head temperature (CHT)",
    part: "CHT probe",
    check: "Engine mounting, probe type, input compatibility and lead length",
  },
  {
    id: "egt",
    name: "Exhaust temperature (EGT)",
    part: "EGT probe",
    check:
      "Probe mounting, thermocouple type, temperature input and extension cable",
  },
  {
    id: "brake",
    name: "Brake pressure",
    part: "Brake-pressure sensor",
    check:
      "Pressure range, plumbing, electrical interface and expert installation review",
  },
  {
    id: "tires",
    name: "Tire pressure / temperature",
    part: "TPMS sensors and receiver",
    check:
      "Wheel count, sensor/receiver pairing and supported data-system protocol",
  },
  {
    id: "position",
    name: "Steering / suspension position",
    part: "Position sensor(s)",
    check:
      "Measurement location, travel/angle, mounting, quantity and input channels",
  },
];
function planRows() {
  const existing = builder.hardware === "Keep my existing logger";
  const foundation = products.find(
    (p) =>
      p.id ===
      ({ Karting: "mychron", "Track days": "trackkit", "Club racing": "mxs" }[
        builder.use
      ] || "mxs"),
  );
  const rows = [
    {
      name: existing
        ? `Existing logger: ${builder.logger || "model not provided"}`
        : foundation.name,
      qty: existing ? "Existing" : "1 candidate",
      kind: existing ? "CUSTOMER-SUPPLIED" : "CATALOG CANDIDATE",
      check: existing
        ? "Verify exact model, revision, firmware, available ports and channel capacity."
        : "Starting point only. Check exact package, channel capacity and suitability for the vehicle and selected measurements.",
      product: existing ? null : foundation,
    },
  ];
  rows.push({
    name: existing
      ? "Existing main harness / breakout"
      : "Main harness / breakout assembly",
    qty: existing ? "Inspect existing" : "TBD",
    kind: "UNVERIFIED",
    check:
      "Confirm the logger connector, pin assignments, power/ground requirements and included kit contents. Reuse only after inspection; avoid duplicating an included harness.",
  });
  if (builder.ecuStatus !== "No ECU connection planned")
    rows.push({
      name: "ECU-to-logger interface cable / adapter",
      qty: "TBD",
      kind: "UNVERIFIED",
      check: `${builder.ecuStatus === "ECU present" ? builder.ecu || "ECU model not provided" : "ECU details unknown"}: verify supported protocol, bus settings, connector and wiring. ECU data availability is not assumed.`,
    });
  for (const id of builder.sensors) {
    const s = sensorChoices.find((s) => s.id === id);
    if (!s) continue;
    rows.push({
      name: s.part,
      qty: id === "tires" || id === "position" ? "TBD" : "1 planning allowance",
      kind: "UNVERIFIED",
      check:
        s.check +
        ". Check whether an existing sensor or verified ECU channel already supplies this measurement before buying.",
    });
    rows.push({
      name:
        id === "tires"
          ? "TPMS receiver power / data cable"
          : `${s.name} extension / patch cable`,
      qty: "TBD",
      kind: "UNVERIFIED",
      check:
        id === "tires"
          ? "Confirm receiver connector, power, protocol and logger connection."
          : "Confirm both connector ends, pinout, signal type, cable length and routing. CHT/EGT extensions must match the probe and input; do not substitute a generic 719 cable.",
    });
  }
  rows.push({
    name: "Expansion module / data hub, if required",
    qty: "Conditional",
    kind: "UNVERIFIED",
    check:
      "Only add if reviewed channel count, input types, bus capacity or available ports require it. Selected measurements alone do not establish that expansion is needed.",
  });
  return rows;
}
function builderField(key, label, placeholder) {
  return `<label class="builder-field">${label}<input data-builder-field="${key}" maxlength="160" value="${esc(builder[key])}" placeholder="${placeholder}"></label>`;
}
function builderSummary() {
  return `${builder.use} · ${builder.vehicle || "Vehicle details not provided"} · ${builder.engine || "Engine details not provided"}\nLogger plan: ${builder.hardware}; ${builder.logger || "model not provided"}\nECU: ${builder.ecuStatus}; ${builder.ecu || "model not provided"}\nExisting harness / sensors: ${builder.existing || "not provided"}\nDesired measurements: ${
    builder.sensors
      .map((id) => sensorChoices.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ") || "None selected — expert guidance requested"
  }\nInstallation notes: ${builder.notes || "not provided"}`;
}
function builderPage() {
  let content = "";
  if (builder.step === 1)
    content = `<h2>Tell us about your car or kart.</h2><p class="detail-subtitle">Choose your driving, then add the vehicle and engine details you know. Unknown details remain visible in your draft.</p><div class="builder-options">${["Karting", "Track days", "Club racing"].map((u) => `<button class="choice ${builder.use === u ? "selected" : ""}" data-use="${u}" aria-pressed="${builder.use === u}"><strong>${u}</strong><small>${u === "Karting" ? "Kart-focused data planning." : "Plan data around your car and driving goals."}</small></button>`).join("")}</div><div class="builder-fields">${builderField("vehicle", "Car or kart — make, model, year / chassis", "e.g. 2018 Mazda MX-5 or kart chassis and year")}${builderField("engine", "Engine / class / modifications", "e.g. engine model, racing class, ECU changes")}</div>`;
  if (builder.step === 2)
    content = `<h2>What hardware is already there?</h2><p class="detail-subtitle">Record exact model numbers where possible. We won’t treat an existing connection as verified compatibility.</p><div class="builder-options hardware-options">${["Starting fresh", "Keep my existing logger", "Not sure yet"].map((u) => `<button class="choice ${builder.hardware === u ? "selected" : ""}" data-hardware="${u}" aria-pressed="${builder.hardware === u}"><strong>${u}</strong><small>${u === "Keep my existing logger" ? "Plan around your hardware; do not suggest a replacement." : "Use the draft to identify what needs confirming."}</small></button>`).join("")}</div><div class="builder-fields">${builderField("logger", "Existing logger / dash and revision", "e.g. AiM MXS 1.3; firmware if known")}<label class="builder-field">ECU connection plan<select data-builder-field="ecuStatus">${["Not sure", "ECU present", "No ECU connection planned"].map((x) => `<option ${builder.ecuStatus === x ? "selected" : ""}>${x}</option>`).join("")}</select></label>${builderField("ecu", "ECU make, model and firmware", "e.g. factory ECU or aftermarket model")}${builderField("existing", "Existing harnesses and sensors", "Part numbers, available ports, installed sensors")}</div>`;
  if (builder.step === 3)
    content = `<h2>What do you want to measure?</h2><p class="detail-subtitle">Choose your goals. Each adds a sensor requirement and its connection to the draft—not a verified SKU.</p><fieldset class="sensor-fieldset"><legend class="sr-only">Desired sensor measurements</legend><div class="sensor-grid">${sensorChoices.map((s) => `<label class="sensor-choice"><input type="checkbox" data-sensor="${s.id}" ${builder.sensors.includes(s.id) ? "checked" : ""}><span><strong>${s.name}</strong><small>${s.check}</small></span></label>`).join("")}</div></fieldset>${builderField("notes", "Installation notes / channels / cable lengths", "e.g. four wheels, two suspension channels, approximate cable runs")}<p class="results-count">You can continue with no sensors selected if you want help deciding.</p>`;
  if (builder.step === 4) {
    const rows = planRows();
    content = `<h2>Your draft parts list.</h2><p class="detail-subtitle">A planning brief for an expert—not a fitment approval, wiring instruction or complete quote.</p><div class="plan-summary"><span class="eyebrow">YOUR INPUTS</span><p>${esc(builderSummary()).replace(/\n/g, "<br>")}</p><button class="text-link edit-plan" data-edit-step="1">Edit vehicle</button><button class="text-link edit-plan" data-edit-step="2">Edit hardware</button><button class="text-link edit-plan" data-edit-step="3">Edit sensors</button></div><div class="note"><strong>Compatibility is unverified for every line.</strong> No harness or cable SKU is selected until connectors, pinouts, signal types and lengths are reviewed. Quantities are planning allowances; sensor choices do not prove available channels.</div><div class="draft-parts">${rows.map((r) => `<article class="draft-part"><div class="draft-part-head"><h3>${esc(r.name)}</h3><span class="status-pill">UNVERIFIED</span></div><p class="part-meta">${esc(r.kind)} · Quantity: ${esc(r.qty)} · ${r.product ? "Catalog snapshot: " + money(r.product.price) + "; final configuration unpriced" : "Price: not quoted"}</p><p>${esc(r.check)}</p>${r.product ? `<a class="text-link" href="#/product/${r.product.id}">Explore candidate only ↗</a>` : ""}</article>`).join("")}</div><div class="note"><strong>System total: not quoted.</strong> Harnesses, cables, sensor variants, expansion and installation have not been priced. Nothing from this draft is automatically added to the cart.</div><div class="buttons"><button class="btn btn-red" id="download-builder">Download draft parts list ↓</button><a class="btn btn-outline" href="#/support">Request an expert review ↗</a></div>`;
  }
  return `${bread("Build your system")}<section class="wrap page-heading"><span class="eyebrow">FROM A GOAL TO A PLAN</span><h1>Let’s connect the dots.</h1><p>Your vehicle, your hardware, your measurements—one draft to review together.</p></section><section class="builder"><div class="progress" aria-label="Planner progress">${["Vehicle", "Hardware", "Sensors", "Draft parts"].map((s, i) => `<div class="step ${builder.step === i + 1 ? "active" : ""}" ${builder.step === i + 1 ? 'aria-current="step"' : ""}>0${i + 1} / ${s}</div>`).join("")}</div>${content}<div class="builder-actions"><button class="btn btn-outline" id="builder-back">${builder.step === 1 ? "Back to shop" : "← Previous step"}</button>${builder.step < 4 ? `<button class="btn" id="builder-next" ${(builder.step === 1 && !builder.use) || (builder.step === 2 && !builder.hardware) ? "disabled" : ""}>${builder.step === 3 ? "Show draft parts list" : "Next step"} →</button>` : ""}</div></section>`;
}

function learn() {
  return `${bread("Learning center")}<section class="wrap page-heading"><span class="eyebrow">THE TRAILBRAKE LEARNING CENTER</span><h1>Understand more.<br>Get more from every lap.</h1><p>Start with practical questions. Build a better understanding of your equipment, your data and what to explore next.</p></section><section class="wrap section spacer-top"><div class="learning-grid">${articles.map(articleCard).join("")}</div><div class="callout"><strong>Prototype editorial collection</strong>These are introductory planning guides. For original TrailBrake articles and model-specific videos, visit the linked source resources.</div></section><section class="wrap section spacer-top">${banner()}</section>`;
}
function article(id) {
  const a = articles.find((x) => x.id === id);
  if (!a) return notFound();
  return `${bread("Learning center")}<article class="article"><span class="eyebrow">${a.category} · ${a.time}</span><h1>${a.title}</h1><p>${a.intro}</p>${art(articles.indexOf(a))}${a.parts.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join("")}<div class="callout"><strong>Introductory prototype guide</strong>Use current manufacturer documentation and expert review for installation decisions.</div><div class="buttons"><a class="btn" href="${a.source}" target="_blank" rel="noreferrer">Explore TrailBrake’s original resources ↗</a><a class="btn btn-outline" href="#/shop">Explore the equipment →</a></div></article>`;
}
function support() {
  return `${bread("Expert support")}<section class="wrap page-heading"><span class="eyebrow">GOOD QUESTIONS MAKE BETTER SYSTEMS</span><h1>A real person.<br>In your corner.</h1><p>TrailBrake’s expertise is the connection between the equipment and what you want to achieve with it.</p></section><section class="wrap support-grid"><div class="support-card"><span class="eyebrow">TALK TO TRAILBRAKE</span><h2>Let’s talk data.</h2><a class="phone text-link" href="tel:+16032329096">603-232-9096 ↗</a><p>500 Harvey Road, Unit 103<br>Manchester, NH 03103</p><p>This is the business contact listed on the reference store. Calling opens your phone app; this prototype sends no messages.</p><a class="text-link" href="https://trailbrake.com/about-us/" target="_blank" rel="noreferrer">Read about Matt & TrailBrake ↗</a></div><div class="support-card"><span class="eyebrow">MAKE THE CONVERSATION COUNT</span><h2>Bring the useful details.</h2><ul><li>Your car or kart, and how you use it.</li><li>Exact dash/logger and sensor model numbers.</li><li>ECU, harness and connection details.</li><li>The question you want your data to answer.</li><li>Your draft parts list, if you’ve started one.</li></ul><div class="buttons"><a class="btn" href="#/builder">Create a system plan →</a><a class="text-link" href="#/cart">Review demo cart ↗</a></div></div></section>`;
}
function notFound() {
  return `<section class="wrap section"><div class="empty-state"><h1>That page isn’t in the demo.</h1><p>Start with the collection or head back to the homepage.</p><a class="btn" href="#/">Back to TrailBrake →</a></div></section>`;
}
function download(name, text) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([text], { type: "text/plain;charset=utf-8" }),
  );
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Your planning file has been downloaded.");
}
function getParams() {
  return new URLSearchParams(location.hash.split("?")[1] || "");
}
function updateShop(key, value) {
  const p = getParams();
  if (value) p.set(key, value);
  else p.delete(key);
  location.hash = "/shop" + (p.size ? "?" + p.toString() : "");
}
function render(keepScroll = false) {
  const route = (location.hash.slice(1) || "/").split("?")[0];
  const params = getParams();
  let html, title;
  if (route === "/") {
    html = home();
    title = "Find your next tenth.";
  } else if (route === "/shop") {
    html = shop(params);
    title = "Shop the demo collection";
  } else if (route.startsWith("/product/")) {
    html = product(route.split("/")[2]);
    title =
      products.find((x) => x.id === route.split("/")[2])?.name || "Product";
  } else if (route === "/cart") {
    html = cartPage();
    title = "Your demo cart";
  } else if (route === "/builder") {
    html = builderPage();
    title = "Build your system";
  } else if (route === "/learn") {
    html = learn();
    title = "Learning center";
  } else if (route.startsWith("/article/")) {
    html = article(route.split("/")[2]);
    title =
      articles.find((x) => x.id === route.split("/")[2])?.title || "Guide";
  } else if (route === "/support") {
    html = support();
    title = "Expert support";
  } else {
    html = notFound();
    title = "Page not found";
  }
  $("#main").innerHTML = html;
  document.title = `${title} | TrailBrake Prototype`;
  $("#site-search").value = params.get("q") || "";
  $("#main-nav").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  $(".menu-toggle").setAttribute("aria-label", "Open navigation");
  saveCart();
  bindPage();
  if (!keepScroll) {
    window.scrollTo(0, 0);
    $("#main").focus({ preventScroll: true });
  }
}
function bindPage() {
  document
    .querySelectorAll("[data-category]")
    .forEach(
      (b) =>
        (b.onclick = () =>
          updateShop(
            "category",
            b.dataset.category === "All products" ? "" : b.dataset.category,
          )),
    );
  if ($("#sort"))
    $("#sort").onchange = (e) => updateShop("sort", e.target.value);
  if ($("[data-clear-use]"))
    $("[data-clear-use]").onclick = () => updateShop("use", "");
  if ($("#add-form"))
    $("#add-form").onsubmit = (e) => {
      e.preventDefault();
      const qty = Number($("#quantity").value);
      if (!Number.isInteger(qty) || qty < 1 || qty > 99) return;
      addCart(e.target.dataset.product, $("#product-option").value, qty);
    };
  document.querySelectorAll("[data-qty]").forEach(
    (b) =>
      (b.onclick = () => {
        cart[Number(b.dataset.qty)].qty += Number(b.dataset.delta);
        saveCart();
        render(true);
      }),
  );
  document.querySelectorAll("[data-remove]").forEach(
    (b) =>
      (b.onclick = () => {
        cart.splice(Number(b.dataset.remove), 1);
        saveCart();
        render(true);
        toast("Item removed from your demo cart.");
      }),
  );
  if ($("#download-plan"))
    $("#download-plan").onclick = () =>
      download(
        "trailbrake-demo-parts-list.txt",
        "TRAILBRAKE — DEMO PARTS LIST\nNot an order. Compatibility, inventory, tax, shipping and final prices require review.\n\n" +
          cart
            .map((x) => {
              const p = products.find((p) => p.id === x.id);
              return `${x.qty} × ${p.brand} ${p.name}\nConfiguration: ${x.option}\nSnapshot subtotal: ${money(p.price * x.qty)}\nCompatibility: ${p.compat}`;
            })
            .join("\n\n"),
      );
  document.querySelectorAll("[data-use]").forEach(
    (b) =>
      (b.onclick = () => {
        builder.use = b.dataset.use;
        render(true);
        $(`[data-use="${builder.use}"]`).focus();
      }),
  );
  document.querySelectorAll("[data-hardware]").forEach(
    (b) =>
      (b.onclick = () => {
        builder.hardware = b.dataset.hardware;
        render(true);
        $(`[data-hardware="${builder.hardware}"]`).focus();
      }),
  );
  if ($("#builder-next"))
    $("#builder-next").onclick = () => {
      if (
        (builder.step === 1 && !builder.use) ||
        (builder.step === 2 && !builder.hardware)
      )
        return;
      builder.step++;
      render();
    };
  if ($("#builder-back"))
    $("#builder-back").onclick = () => {
      if (builder.step === 1) location.hash = "/shop";
      else {
        builder.step--;
        render();
      }
    };
  document.querySelectorAll("[data-builder-field]").forEach((input) => {
    input.oninput = () => {
      builder[input.dataset.builderField] = input.value.slice(0, 160);
    };
  });
  document.querySelectorAll("[data-sensor]").forEach((input) => {
    input.onchange = () => {
      builder.sensors = input.checked
        ? [...new Set([...builder.sensors, input.dataset.sensor])]
        : builder.sensors.filter((id) => id !== input.dataset.sensor);
    };
  });
  document.querySelectorAll("[data-edit-step]").forEach((button) => {
    button.onclick = () => {
      builder.step = Number(button.dataset.editStep);
      render();
    };
  });
  if ($("#download-builder"))
    $("#download-builder").onclick = () =>
      download(
        "trailbrake-draft-parts-list.txt",
        "TRAILBRAKE — DRAFT PARTS LIST\nAll compatibility UNVERIFIED. Not an order, wiring instruction or complete quote.\n\n" +
          builderSummary() +
          "\n\n" +
          planRows()
            .map(
              (r, i) =>
                `${i + 1}. ${r.name}\nStatus: UNVERIFIED | ${r.kind}\nQuantity: ${r.qty}\n${r.product ? "Catalog snapshot: " + money(r.product.price) + "; final configuration unpriced" : "Price: not quoted"}\nReview: ${r.check}`,
            )
            .join("\n\n") +
          "\n\nSYSTEM TOTAL: NOT QUOTED. Nothing has been added to the cart.\nTrailBrake: 603-232-9096",
      );
}
$(".search").onsubmit = (e) => {
  e.preventDefault();
  location.hash =
    "/shop?q=" + encodeURIComponent($("#site-search").value.trim());
};
$(".menu-toggle").onclick = () => {
  const open = $("#main-nav").classList.toggle("open");
  $(".menu-toggle").setAttribute("aria-expanded", String(open));
  $(".menu-toggle").setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $("#main-nav").classList.contains("open")) {
    $("#main-nav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
    $(".menu-toggle").setAttribute("aria-label", "Open navigation");
    $(".menu-toggle").focus();
  }
});
window.addEventListener("hashchange", () => render());
render(true);
