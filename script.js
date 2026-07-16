// Content lives in data.js (window.NaviData); site settings in config.js
// (window.SiteConfig). Both load before this file. Rendering/logic stays here.
const { products, productCategories, services, references, news, industriesHome, industries } = window.NaviData;
const config = window.SiteConfig || {};

// A section is enabled unless config.sections explicitly turns it off.
const sectionFlags = config.sections || {};
const isEnabled = (name) => sectionFlags[name] !== false;
const navLabels = config.navLabels || {};
const navLabel = (slug, fallback) => navLabels[slug] || fallback;

// Pages that make up the router. Optional sections are only included when
// enabled, so disabling one also removes it from routing, breadcrumbs and search.
const pages = new Map(
  [
    ["home", "Home"],
    ["products", navLabel("products", "Products")],
    ["services", navLabel("services", "Services")],
    ["industries", navLabel("industries", "Industries")],
    ["about", navLabel("about", "About")],
    ["careers", "Careers"],
    ["references", navLabel("references", "References")],
    ["news", navLabel("news", "News")],
    ["contact", navLabel("contact", "Contact")]
  ].filter(([slug]) => isEnabled(slug))
);

const searchIndex = [
  ...[...pages].map(([slug, title]) => ({
    type: "Page",
    title,
    summary: `Navigate to the ${title.toLowerCase()} page.`,
    url: `#${slug}`
  })),
  ...products.map((item) => ({
    type: "Product",
    title: item.title,
    summary: item.summary,
    url: `#product/${item.slug}`
  })),
  ...(isEnabled("services") ? services : []).map((item) => ({
    type: "Service",
    title: item.title,
    summary: item.summary,
    url: `#service/${item.slug}`
  })),
  ...(isEnabled("news") ? news : []).map((item) => ({
    type: item.category.includes("Document") ? "Document" : "News",
    title: item.title,
    summary: item.summary,
    url: `#news/${item.slug}`
  }))
];

const pageEls = document.querySelectorAll("[data-page]");
const breadcrumbEl = document.querySelector("[data-breadcrumbs]");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileToggle = document.querySelector(".mobile-toggle");
const backToTop = document.querySelector("[data-back-to-top]");
const searchInput = document.querySelector("#global-search");
const searchPanel = document.querySelector("#search-suggestions");
const mobileSearch = document.querySelector("#mobile-search-input");
const mobileSearchPanel = document.querySelector("#mobile-search-suggestions");

// ---------------------------------------------------------------------------
// Site configuration (config.js) applied to the existing static HTML on load.
// This only fills in or removes existing elements — it never builds markup.
// ---------------------------------------------------------------------------
function applyConfig() {
  if (!Object.keys(config).length) return;

  // Company name -> text hooks, logo alt, brand aria-label, page title, meta.
  const name = config.companyName;
  if (name) {
    document.querySelectorAll("[data-site-name]").forEach((node) => { node.textContent = name; });
    document.querySelector(".brand")?.setAttribute("aria-label", `${name} home`);
    document.title = `${name} | Corporate Technology Website`;
    setMeta('meta[property="og:site_name"]', name);
  }

  // Logo -> src + alt on every [data-site-logo] image.
  if (config.logo) {
    document.querySelectorAll("[data-site-logo]").forEach((img) => {
      if (config.logo.src) img.src = config.logo.src;
      img.alt = config.logo.alt || name || img.alt;
    });
  }

  // Tagline (footer).
  if (config.tagline) {
    document.querySelectorAll("[data-site-tagline]").forEach((node) => { node.textContent = config.tagline; });
  }

  // Contact details (Contact page + contact strip + footer).
  const contact = config.contact || {};
  document.querySelectorAll('[data-contact="address"]').forEach((node) => setLines(node, contact.addressLines));
  document.querySelectorAll('[data-contact="hours"]').forEach((node) => setLines(node, contact.hoursLines));
  document.querySelectorAll('[data-contact="email"]').forEach((node) => setContactValue(node, contact.email, "mailto:"));
  document.querySelectorAll('[data-contact="phone"]').forEach((node) => setContactValue(node, contact.phone, "tel:"));
  document.querySelectorAll('[data-contact="office"]').forEach((node) => { if (contact.office) node.textContent = contact.office; });

  // Social links: set each URL; an empty value hides that channel.
  document.querySelectorAll("[data-social]").forEach((link) => {
    const url = (config.social || {})[link.dataset.social];
    if (url) link.href = url;
    else link.remove();
  });

  // Navigation labels (desktop, mobile, footer).
  document.querySelectorAll("[data-nav-label]").forEach((node) => {
    const label = navLabels[node.dataset.navLabel];
    if (label) node.textContent = label;
  });

  // Optional sections: remove every element tagged for a disabled section.
  Object.keys(sectionFlags).forEach((sectionName) => {
    if (!isEnabled(sectionName)) {
      document.querySelectorAll(`[data-optional="${sectionName}"]`).forEach((node) => node.remove());
    }
  });
}

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute("content", value);
}

// Replace an element's contents with text lines separated by <br>.
function setLines(target, lines) {
  if (!target || !Array.isArray(lines)) return;
  target.replaceChildren();
  lines.forEach((line, index) => {
    if (index > 0) target.append(document.createElement("br"));
    target.append(line);
  });
}

// Set a contact value; if the element is a link, also build its mailto:/tel: href.
function setContactValue(target, value, scheme) {
  if (!target || !value) return;
  target.textContent = value;
  if (target.tagName === "A") target.href = scheme + value.replace(/\s+/g, "");
}

// Put nodes into a container only if it exists (a container may be absent when
// its section is disabled via config).
function fill(selector, nodes) {
  const container = document.querySelector(selector);
  if (container) container.replaceChildren(...nodes);
}

// Small DOM builder used across renderers. Interpolated values are inserted
// as text nodes (never parsed as HTML), so rendering is safe by default.
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (key === "class") node.className = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) {
    if (child == null) continue;
    node.append(child);
  }
  return node;
}

function createCard(item, type) {
  const href = type === "product" ? `#product/${item.slug}` : type === "service" ? `#service/${item.slug}` : "#references";
  const link = type === "reference" ? "Read more" : "View details";
  const visualLabel = type === "product" ? "Product Image / 3D Render" : type === "service" ? "Service Illustration" : "Reference Image";
  const body = item.summary;

  return el("article", { class: "card" }, [
    el("div", { class: "visual-placeholder visual-placeholder--card" }, [el("span", {}, [visualLabel])]),
    el("div", { class: "card__meta" }, [el("span", {}, [item.category])]),
    el("h3", {}, [item.title]),
    el("p", {}, [body]),
    el("a", { class: "card__link", href }, [link])
  ]);
}

function createNewsItem(item) {
  const date = new Date(`${item.date}T00:00:00`);
  const formatted = date.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
  return el("article", { class: "news-item" }, [
    el("div", { class: "visual-placeholder visual-placeholder--news" }, [el("span", {}, ["News Image"])]),
    el("time", { datetime: item.date }, [formatted]),
    el("div", {}, [
      el("span", {}, [item.category]),
      el("h3", {}, [item.title]),
      el("p", {}, [item.summary])
    ]),
    el("a", { class: "card__link", href: `#news/${item.slug}` }, ["Read"])
  ]);
}

function createIndustry(item, index, variant) {
  return el("article", {}, [
    el("div", { class: `visual-placeholder visual-placeholder--${variant}` }, [el("span", {}, ["Industry Image"])]),
    el("span", {}, [String(index + 1).padStart(2, "0")]),
    el("h3", {}, [item.title]),
    el("p", {}, [item.summary])
  ]);
}

function renderStaticLists() {
  // fill() is a no-op when a container is missing (e.g. a section disabled in config).
  fill("[data-featured-products]", products.slice(0, 3).map((item) => createCard(item, "product")));
  fill("[data-featured-services]", services.slice(0, 3).map((item) => createCard(item, "service")));
  fill("[data-reference-preview]", references.map((item) => createCard(item, "reference")));
  fill("[data-references-grid]", references.map((item) => createCard(item, "reference")));
  fill("[data-news-preview]", news.slice(0, 2).map(createNewsItem));
  fill("[data-news-grid]", news.map(createNewsItem));
  fill("[data-services-grid]", services.map((item) => createCard(item, "service")));
  fill("[data-industries-home]", industriesHome.map((item, i) => createIndustry(item, i, "thumb")));
  fill("[data-industries]", industries.map((item, i) => createIndustry(item, i, "card")));
  renderProducts("All");
  renderFilters();
  renderProductMenu();
}

// Header product mega-menu + footer product list, generated from
// data.js productCategories (filtered to categories that actually have
// products), so they can never drift out of sync with the product data.
function renderProductMenu() {
  const activeCategories = new Set(products.map((item) => item.category));
  const categories = productCategories.filter((entry) => activeCategories.has(entry.key));

  fill("[data-products-menu]", [
    el("a", { href: "#products" }, [el("strong", {}, ["All products"]), el("span", {}, ["Browse the full portfolio"])]),
    ...categories.map((entry) =>
      el("a", { href: `#products/${encodeURIComponent(entry.key)}` }, [
        el("strong", {}, [entry.label]),
        el("span", {}, [entry.menuBlurb])
      ])
    )
  ]);

  fill("[data-products-footer]", categories.map((entry) =>
    el("a", { href: `#products/${encodeURIComponent(entry.key)}` }, [entry.label])
  ));
}

function renderFilters() {
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const buttons = categories.map((category) =>
    el("button", { type: "button", class: category === "All" ? "is-active" : null, "data-filter": category }, [category])
  );
  document.querySelector("[data-product-filters]").replaceChildren(...buttons);
}

function renderProducts(category) {
  const filtered = category === "All" ? products : products.filter((item) => item.category === category);
  document.querySelector("[data-products-grid]").replaceChildren(...filtered.map((item) => createCard(item, "product")));
}

function showPage(page, detailTitle = "") {
  const activeRoute = page === "detail" ? inferParent(detailTitle).toLowerCase() : page;
  pageEls.forEach((el) => el.classList.toggle("page--active", el.dataset.page === page));
  document.querySelectorAll("[data-route].is-active").forEach((link) => link.classList.remove("is-active"));
  document.querySelectorAll(".desktop-nav > a, .nav-item > a").forEach((link) => {
    const route = link.dataset.route;
    link.classList.toggle("is-active", route === activeRoute);
  });
  document.querySelectorAll(".mobile-menu nav a").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === activeRoute);
  });
  renderBreadcrumbs(page, detailTitle);
  // The Contact page already lists full details, so hide the site-wide strip there.
  document.querySelector(".site-contact-strip")?.classList.toggle("is-hidden", page === "contact");
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderBreadcrumbs(page, detailTitle) {
  if (page === "home") {
    breadcrumbEl.classList.remove("is-visible");
    breadcrumbEl.replaceChildren();
    return;
  }

  const label = page === "detail" ? detailTitle : pages.get(page);
  const parent = page === "detail" ? inferParent(detailTitle) : "";
  breadcrumbEl.classList.add("is-visible");
  const trail = [
    el("a", { href: "#home" }, ["Home"]),
    el("span", {}, ["/"])
  ];
  if (parent) {
    trail.push(el("a", { href: `#${parent.toLowerCase()}` }, [parent]));
    trail.push(el("span", {}, ["/"]));
  }
  trail.push(el("span", {}, [label]));
  breadcrumbEl.replaceChildren(...trail);
}

function inferParent(title) {
  if (products.some((item) => item.title === title)) return "Products";
  if (services.some((item) => item.title === title)) return "Services";
  if (news.some((item) => item.title === title)) return "News";
  return "";
}

// Shared figure for the optional supporting images in overview/operationalUse.
// Always lazy-loaded since these sit further down the page than the main image.
function detailFigure(image) {
  return el("div", { class: "detail-figure" }, [
    el("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, loading: "lazy" })
  ]);
}

function renderDetail(kind, slug) {
  const collection = kind === "product" ? products : kind === "service" ? services : news;
  const item = collection.find((entry) => entry.slug === slug);

  if (!item) {
    location.hash = "#home";
    return;
  }

  const related = item.related || item.relatedProducts || ["Related content coming soon"];
  const detailSummary = item.summary;
  const fallbackHighlight = ["Additional product highlights will be added soon."];
  const detailBullets = kind === "product"
    ? (item.highlights && item.highlights.length ? item.highlights : fallbackHighlight)
    : kind === "service"
      ? ["Scope and deliverables", "Related products", "How to get in touch"]
      : ["Article overview", "Publishing details", "Related links"];
  const checklistHeading = kind === "product" ? "Key capabilities" : "What you'll find here";
  const visualLabel = kind === "product" ? "Product Image / 3D Render" : kind === "service" ? "Service Illustration" : "News Image";

  const panelChildren = [
    el("p", { class: "eyebrow" }, ["Overview"]),
    el("h2", {}, ["Key information"])
  ];
  if (kind !== "product") {
    panelChildren.push(el("p", {}, ["Detailed specifications and documentation will be available here soon."]));
  }
  if (item.sourceUrl) {
    panelChildren.push(el("a", { class: "text-link", href: item.sourceUrl, target: "_blank", rel: "noopener" }, ["Original product page"]));
  }
  panelChildren.push(
    el("h3", {}, [checklistHeading]),
    el("ul", { class: "detail-checklist" }, detailBullets.map((entry) => el("li", {}, [entry]))),
    el("ul", { class: "tag-list" }, (item.tags || [item.category]).map((tag) => el("li", {}, [tag]))),
    el("h3", {}, ["Related"]),
    el("ul", { class: "tag-list" }, related.map((tag) => el("li", {}, [tag])))
  );

  const detailVisual = kind === "product" && item.image
    ? el("div", { class: "visual-placeholder visual-placeholder--detail visual-placeholder--photo" }, [
        el("img", { src: item.image.src, alt: item.image.alt, width: item.image.width, height: item.image.height })
      ])
    : el("div", { class: "visual-placeholder visual-placeholder--detail" }, [el("span", {}, [visualLabel])]);

  const copyChildren = [
    el("p", { class: "eyebrow" }, [kind === "product" ? item.category : kind]),
    el("h1", {}, [item.title]),
    detailVisual
  ];

  // Optional, product-only long-form sections. Each renders only when the
  // corresponding field is present, so products without them look exactly
  // like today's short detail page.
  if (kind === "product" && item.overview && item.overview.length) {
    item.overview.forEach((paragraph) => copyChildren.push(el("p", {}, [paragraph])));
    if (item.overviewImage) {
      copyChildren.push(detailFigure(item.overviewImage));
    }
  } else {
    copyChildren.push(el("p", {}, [detailSummary]));
  }

  if (kind === "product" && item.operationalUse && item.operationalUse.length) {
    copyChildren.push(el("h3", {}, ["Operational use"]));
    item.operationalUse.forEach((entry) => {
      const paragraphChildren = entry.heading ? [el("strong", {}, [`${entry.heading}: `]), entry.text] : [entry.text];
      copyChildren.push(el("p", {}, paragraphChildren));
      if (entry.image) {
        copyChildren.push(detailFigure(entry.image));
      }
    });
  }

  if (kind === "product" && item.typicalApplications && item.typicalApplications.length) {
    copyChildren.push(
      el("h3", {}, ["Typical applications"]),
      el("ul", { class: "tag-list" }, item.typicalApplications.map((entry) => el("li", {}, [entry])))
    );
  }

  if (kind === "product" && item.integration && item.integration.length) {
    copyChildren.push(el("h3", {}, ["Integration"]));
    item.integration.forEach((paragraph) => copyChildren.push(el("p", {}, [paragraph])));
  }

  if (kind !== "product") {
    copyChildren.push(el("p", {}, [`A detailed overview, use cases and integration notes for this ${kind} will be added here.`]));
  }
  copyChildren.push(el("a", { class: "button button--primary", href: "#contact" }, [`Contact about this ${kind}`]));

  const shell = el("article", { class: "detail-shell" }, [
    el("div", { class: "detail-copy" }, copyChildren),
    el("aside", { class: "detail-panel" }, panelChildren)
  ]);

  document.querySelector("#detail").replaceChildren(shell);
  showPage("detail", item.title);
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "") || "home";
  const [kind, slug] = hash.split("/");

  if (kind === "product" || kind === "service" || kind === "news") {
    const section = kind === "product" ? "products" : kind === "service" ? "services" : "news";
    if (!isEnabled(section)) {
      location.hash = "#home";
      return;
    }
    renderDetail(kind, slug);
    return;
  }

  showPage(pages.has(kind) ? kind : "home");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileToggle.setAttribute("aria-expanded", "false");
  mobileToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
  if (mobileSearch) mobileSearch.value = "";
  if (mobileSearchPanel) {
    mobileSearchPanel.classList.remove("is-open");
    mobileSearchPanel.replaceChildren();
  }
}

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  mobileToggle.setAttribute("aria-expanded", "true");
  mobileToggle.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
}

// Keeps aria-expanded on each dropdown trigger in sync with the CSS-driven
// :hover / :focus-within visibility (true while the nav-item is hovered or
// contains focus, false only once both have left it). Escape moves focus
// back to the trigger link without forcing aria-expanded to a value that
// would contradict the still-visible :focus-within panel; the existing
// focus handlers settle it to the correct state. Does not alter link
// click/navigation behaviour (Enter still activates the link; Space is
// left unbound).
function bindDropdownAccessibility() {
  document.querySelectorAll(".nav-item.has-menu").forEach((navItem) => {
    const trigger = navItem.querySelector(":scope > a");
    if (!trigger) return;

    const setExpanded = (value) => trigger.setAttribute("aria-expanded", String(value));

    navItem.addEventListener("mouseenter", () => setExpanded(true));
    navItem.addEventListener("mouseleave", () => {
      if (!navItem.contains(document.activeElement)) setExpanded(false);
    });
    navItem.addEventListener("focusin", () => setExpanded(true));
    navItem.addEventListener("focusout", (event) => {
      if (!navItem.contains(event.relatedTarget) && !navItem.matches(":hover")) setExpanded(false);
    });
    navItem.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        // Moving focus back to the trigger re-fires focusin (or, if focus was
        // already on the trigger, leaves its already-correct state alone) —
        // no explicit aria-expanded write needed here.
        trigger.focus();
      }
    });
  });
}

function renderSearchResults(query, targetPanel = searchPanel, controlInput = searchInput) {
  const term = query.trim().toLowerCase();
  if (!term) {
    targetPanel.classList.remove("is-open");
    targetPanel.replaceChildren();
    controlInput?.setAttribute("aria-expanded", "false");
    return;
  }

  const results = searchIndex
    .filter((item) => `${item.type} ${item.title} ${item.summary}`.toLowerCase().includes(term))
    .slice(0, 8);

  if (results.length) {
    targetPanel.replaceChildren(...results.map((item) =>
      el("a", { class: "search-result", href: item.url, role: "option" }, [
        el("span", {}, [item.type]),
        el("strong", {}, [item.title]),
        el("small", {}, [item.summary])
      ])
    ));
  } else {
    targetPanel.replaceChildren(
      el("div", { class: "search-result" }, [
        el("strong", {}, ["No matching content"]),
        el("small", {}, ["Try products, services, documents or news."])
      ])
    );
  }

  targetPanel.classList.add("is-open");
  controlInput?.setAttribute("aria-expanded", "true");
}

applyConfig();
renderStaticLists();
bindDropdownAccessibility();
route();

document.querySelector("[data-year]").textContent = new Date().getFullYear();

window.addEventListener("hashchange", route);

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("is-active"));
    filter.classList.add("is-active");
    renderProducts(filter.dataset.filter);
  }

  if (event.target.matches(".mobile-menu a")) closeMobileMenu();

  if (!event.target.closest(".header-search")) {
    searchPanel.classList.remove("is-open");
    searchInput?.setAttribute("aria-expanded", "false");
  }
});

mobileToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("is-open");
  isOpen ? closeMobileMenu() : openMobileMenu();
});

searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
searchInput.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = searchPanel.querySelector("a");
  if (first) location.hash = first.getAttribute("href");
});

mobileSearch.addEventListener("input", (event) => renderSearchResults(event.target.value, mobileSearchPanel, mobileSearch));
mobileSearch.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = mobileSearchPanel.querySelector("a");
  if (first) location.hash = first.getAttribute("href");
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 560);
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
