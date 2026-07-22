// Content lives in data.js (window.NaviData); site settings in config.js
// (window.SiteConfig). Both load before this file. Rendering/logic stays here.
const { heroSlides, products, productCategories, services, references, news, industriesHome, industries } = window.NaviData;
const config = window.SiteConfig || {};

function productCategoryLabel(key) {
  return productCategories.find((entry) => entry.key === key)?.label || key;
}

// Archived products keep their full data.js entry (and remain reachable by direct
// URL) but are excluded from every public-facing listing, menu and search index.
const publicProducts = products.filter((item) => item.status !== "archived");

// Product hero assets use very different compositions: photography often
// places the subject at an edge, while diagrams need their full canvas kept
// visible. These focal settings preserve each subject as the shared hero frame
// changes shape across desktop, tablet and mobile.
const PRODUCT_HERO_TREATMENTS = {
  "atak-integration": { fit: "contain" },
  aton: { desktop: "38% center", tablet: "34% center", mobile: "28% center" },
  cise: { desktop: "70% center", tablet: "74% center", mobile: "78% center" },
  "deployed-soldier": { desktop: "38% center", tablet: "36% center", mobile: "34% center" },
  gmdss: { fit: "contain" },
  jadis: { desktop: "60% center", tablet: "64% center", mobile: "68% center" },
  madis: { desktop: "54% center", tablet: "57% center", mobile: "60% center" },
  maritas: { desktop: "54% center", tablet: "56% center", mobile: "58% center" },
  mmhs: { fit: "contain" },
  monitoring: { desktop: "62% center", tablet: "66% center", mobile: "70% center" },
  navilink: { fit: "contain" },
  "radar-antennas": { desktop: "82% center", tablet: "86% center", mobile: "90% center" },
  "radar-processing": { desktop: "28% center", tablet: "25% center", mobile: "22% center" },
  "radar-transceivers": { desktop: "36% center", tablet: "32% center", mobile: "28% center" },
  sar: { desktop: "60% center", tablet: "55% center", mobile: "48% center" },
  simulation: { desktop: "42% center", tablet: "39% center", mobile: "36% center" },
  trackfusion: { desktop: "67% center", tablet: "71% center", mobile: "76% center" },
  trafficaware: { desktop: "42% center", tablet: "39% center", mobile: "36% center" },
  userinterfaces: { fit: "contain" },
  video: { desktop: "78% center", tablet: "82% center", mobile: "86% center" },
  voice: { desktop: "88% center", tablet: "90% center", mobile: "92% center" },
  "voice-tactical": { desktop: "18% center", tablet: "16% center", mobile: "14% center" }
};

// Products Overview page: fixed curated highlight set (see each product's
// overviewImage in data.js), shown above the directory in the default,
// unfiltered view only.
const FEATURED_PRODUCT_SLUGS = ["maritas", "matis", "jadis"];

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
  ...publicProducts.map((item) => ({
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
  document.querySelectorAll('[data-contact="address-visiting"]').forEach((node) => setLines(node, contact.visitingAddressLines));
  document.querySelectorAll('[data-contact="address-postal"]').forEach((node) => setLines(node, contact.postalAddressLines));
  document.querySelectorAll('[data-contact="hours"]').forEach((node) => setLines(node, contact.hoursLines));
  document.querySelectorAll('[data-contact="email"]').forEach((node) => setContactValue(node, contact.email, "mailto:"));
  document.querySelectorAll('[data-contact="phone"]').forEach((node) => setContactValue(node, contact.phone, "tel:"));
  document.querySelectorAll('[data-contact-link="email"]').forEach((node) => setContactLink(node, contact.email, "mailto:"));
  document.querySelectorAll('[data-contact-link="phone"]').forEach((node) => setContactLink(node, contact.phone, "tel:"));
  document.querySelectorAll('[data-contact="office"]').forEach((node) => { if (contact.office) node.textContent = contact.office; });
  // Personnel email format is descriptive only (e.g. "firstname.lastname@navielektro.fi"),
  // never a real mailbox, so it's always plain text — never turned into a mailto: link.
  document.querySelectorAll('[data-contact="personnel-email-format"]').forEach((node) => {
    if (contact.personnelEmailFormat) node.textContent = contact.personnelEmailFormat;
  });

  // Location map: image + alt text, and the click-through link to Google Maps.
  const map = config.map || {};
  document.querySelectorAll("[data-map-image]").forEach((img) => {
    if (map.image) img.src = map.image;
    if (map.alt) img.alt = map.alt;
  });
  document.querySelectorAll("[data-map-link]").forEach((link) => { if (map.url) link.href = map.url; });

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

// Configure an action-only contact link without replacing its icon or label.
function setContactLink(target, value, scheme) {
  if (target && value) target.href = scheme + value.replace(/\s+/g, "");
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

// Same idea as el(), but for properly namespaced SVG elements (needed for the
// Products Overview's decorative arrow icon, built in script rather than
// duplicated as static markup since it's reused across every tile/row).
function svgEl(tag, attrs = {}, children = []) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  for (const child of children) node.append(child);
  return node;
}

function arrowIcon() {
  return svgEl(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true" },
    [svgEl("path", { d: "M5 12h14M13 6l6 6-6 6" })]
  );
}

function createCard(item, type) {
  const href = type === "product" ? `#product/${item.slug}` : type === "service" ? `#service/${item.slug}` : "#references";
  const link = type === "reference" ? "Read more" : "View details";
  const visualLabel = type === "product" ? "Product Image / 3D Render" : type === "service" ? "Service Illustration" : "Reference Image";
  const body = item.summary;

  return el("article", { class: "card" }, [
    el("div", { class: "visual-placeholder visual-placeholder--card" }, [el("span", {}, [visualLabel])]),
    el("div", { class: "card__meta" }, [el("span", {}, [type === "product" ? productCategoryLabel(item.category) : item.category])]),
    el("h3", {}, [item.title]),
    el("p", {}, [body]),
    el("a", { class: "card__link", href }, [link])
  ]);
}

// Lightweight image+title card for a product's optional relatedProducts list
// (distinct from createCard(), which drives every other card on the site and
// is left untouched). Links to the target product page when a slug is given;
// otherwise renders as a plain, non-clickable tile.
function createRelatedProductCard(entry) {
  const visual = el("div", { class: "visual-placeholder visual-placeholder--card visual-placeholder--photo" }, [
    el("img", { src: entry.image.src, alt: entry.image.alt, width: entry.image.width, height: entry.image.height, loading: "lazy" })
  ]);
  const heading = el("h3", {}, [entry.title]);

  return entry.slug
    ? el("a", { class: "card card--media-only", href: `#product/${entry.slug}` }, [visual, heading])
    : el("div", { class: "card card--media-only" }, [visual, heading]);
}

// Smallest generic "parallel focus area" card - image + heading + short
// paragraph, no link - for a product or industry's optional focusAreas
// list (e.g. Military's Army/Air/Navy). Not tied to any specific kind, so
// any future detail page can reuse it. Never clickable, so .card--focus-area
// in style.css suppresses the hover lift .card normally gets.
function createFocusAreaCard(entry) {
  const visual = entry.image
    ? el("div", { class: "visual-placeholder visual-placeholder--card visual-placeholder--photo" }, [
        el("img", { src: entry.image.src, alt: entry.image.alt, width: entry.image.width, height: entry.image.height, loading: "lazy" })
      ])
    : el("div", { class: "visual-placeholder visual-placeholder--card" }, [el("span", {}, ["Focus Area Image"])]);

  return el("article", { class: "card card--focus-area" }, [
    visual,
    el("h3", {}, [entry.heading]),
    el("p", {}, [entry.text])
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

function createHomeIndustry(item) {
  const detail = industries.find((industry) => industry.slug === item.slug);
  const image = detail?.image;

  return el("a", { class: "industry-index__item", href: `#industry/${item.slug}` }, [
    el("span", { class: "industry-index__media" }, image ? [
      el("img", {
        src: image.src,
        alt: image.alt,
        width: image.width,
        height: image.height,
        loading: "lazy"
      })
    ] : []),
    el("span", { class: "industry-index__content" }, [
      el("span", { class: "industry-index__title" }, [item.title]),
      el("span", { class: "industry-index__summary" }, [item.summary])
    ])
  ]);
}

function renderStaticLists() {
  // fill() is a no-op when a container is missing (e.g. a section disabled in config).
  fill("[data-featured-products]", FEATURED_PRODUCT_SLUGS.map((slug) => publicProducts.find((item) => item.slug === slug)).filter(Boolean).map(createFeaturedProductPanel));
  fill("[data-featured-services]", services.map(createFeaturedServicePanel));
  fill("[data-reference-preview]", references.map((item) => createCard(item, "reference")));
  fill("[data-references-grid]", references.map((item) => createCard(item, "reference")));
  fill("[data-news-preview]", news.slice(0, 2).map(createNewsItem));
  fill("[data-news-grid]", news.map(createNewsItem));
  fill("[data-services-directory]", services.map((item) => createServiceRow(item)));
  fill("[data-industries-home]", industriesHome.map(createHomeIndustry));
  fill("[data-industries]", industries.map((item) => createIndustryRow(item)));
  renderFilters();
  renderFeatured();
  renderIndustryMenu();
  renderProductMenu();
}

// Home hero slider: three slides (image + headline + supporting text),
// opacity-only crossfade, shared eyebrow/CTAs untouched (they live once in
// index.html, outside this function). Autoplay is skipped entirely for
// prefers-reduced-motion and on mobile (<=760px, matching the site's mobile
// breakpoint) - manual prev/next/dot controls remain available everywhere.
function initHeroSlider() {
  const hero = document.querySelector("[data-hero]");
  if (!hero || !heroSlides || !heroSlides.length) return;

  const slidesEl = hero.querySelector("[data-hero-slides]");
  const headlineEl = hero.querySelector("[data-hero-headline]");
  const textEl = hero.querySelector("[data-hero-text]");
  const dotsEl = hero.querySelector("[data-hero-dots]");
  const prevBtn = hero.querySelector("[data-hero-prev]");
  const nextBtn = hero.querySelector("[data-hero-next]");

  slidesEl.replaceChildren(...heroSlides.map((slide, i) =>
    el("div", { class: "hero__slide" + (i === 0 ? " is-active" : "") }, [
      el("img", {
        src: slide.image.src,
        alt: slide.image.alt,
        width: slide.image.width,
        height: slide.image.height,
        loading: i === 0 ? "eager" : "lazy",
        fetchpriority: i === 0 ? "high" : "low"
      })
    ])
  ));

  dotsEl.replaceChildren(...heroSlides.map((slide, i) =>
    el("button", {
      type: "button",
      class: "hero__dot" + (i === 0 ? " is-active" : ""),
      role: "tab",
      "aria-selected": String(i === 0),
      "aria-label": `Show slide ${i + 1} of ${heroSlides.length}`,
      "data-hero-dot": i
    }, [])
  ));

  fill("[data-hero-prev]", [arrowIcon()]);
  fill("[data-hero-next]", [arrowIcon()]);

  let active = 0;
  let timer = null;

  function goToSlide(index) {
    const next = (index + heroSlides.length) % heroSlides.length;
    if (next === active) return;
    active = next;
    const slide = heroSlides[active];

    slidesEl.querySelectorAll(".hero__slide").forEach((node, i) => node.classList.toggle("is-active", i === active));
    dotsEl.querySelectorAll(".hero__dot").forEach((node, i) => {
      node.classList.toggle("is-active", i === active);
      node.setAttribute("aria-selected", String(i === active));
    });

    // Subtle fade-out/swap/fade-in on the headline+text, timed to land at the
    // image crossfade's midpoint (.hero__slide transitions over 0.8s) so the
    // new copy never sits fully visible over the previous slide's photo.
    headlineEl.style.opacity = "0";
    textEl.style.opacity = "0";
    setTimeout(() => {
      headlineEl.textContent = slide.headline;
      textEl.textContent = slide.text;
      headlineEl.style.opacity = "1";
      textEl.style.opacity = "1";
    }, 400);
  }

  function next() {
    goToSlide(active + 1);
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isMobile = window.matchMedia("(max-width: 760px)");

  function stopAutoplay() {
    clearInterval(timer);
    timer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (reducedMotion.matches || isMobile.matches) return;
    timer = setInterval(next, 6500);
  }

  prevBtn.addEventListener("click", () => {
    goToSlide(active - 1);
    startAutoplay();
  });
  nextBtn.addEventListener("click", () => {
    goToSlide(active + 1);
    startAutoplay();
  });
  dotsEl.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-dot]");
    if (!dot) return;
    goToSlide(Number(dot.dataset.heroDot));
    startAutoplay();
  });

  hero.addEventListener("mouseenter", stopAutoplay);
  hero.addEventListener("mouseleave", startAutoplay);
  hero.addEventListener("focusin", stopAutoplay);
  hero.addEventListener("focusout", startAutoplay);

  // Re-evaluate on breakpoint/motion-preference changes (e.g. resizing past
  // 760px, or toggling the OS reduced-motion setting) without a page reload.
  isMobile.addEventListener("change", startAutoplay);
  reducedMotion.addEventListener("change", startAutoplay);

  startAutoplay();
}

// Industry navigation is generated from the same data as the overview and
// detail pages, keeping desktop and mobile titles and URLs in sync.
function createIndustryNavLink(item, mobile = false) {
  return el("a", {
    href: `#industry/${item.slug}`,
    ...(mobile ? { class: "mobile-sublink", "data-industry-mobile-link": "" } : {})
  }, mobile ? [item.title] : [el("strong", {}, [item.title])]);
}

function renderIndustryMenu() {
  const linkedIndustries = industries.filter((item) => item.slug);
  fill("[data-industries-menu]", linkedIndustries.map((item) => createIndustryNavLink(item)));

  document.querySelectorAll("[data-industry-mobile-link]").forEach((link) => link.remove());
  document.querySelector('.mobile-menu nav a[data-route="industries"]')?.after(
    ...linkedIndustries.map((item) => createIndustryNavLink(item, true))
  );
}

// Header product mega-menu + footer product list, generated from
// data.js productCategories (filtered to categories that actually have
// products), so they can never drift out of sync with the product data.
function renderProductMenu() {
  const activeCategories = new Set(publicProducts.map((item) => item.category));
  const categories = productCategories.filter((entry) => activeCategories.has(entry.key));

  fill("[data-products-menu]", [
    el("a", { href: "#products" }, [el("strong", {}, ["All products"]), el("span", {}, ["Browse the full portfolio"])]),
    ...categories.map((entry) =>
      el("a", { href: `#products/${encodeURIComponent(entry.key)}` }, [
        el("strong", {}, [productCategoryLabel(entry.key)]),
        el("span", {}, [entry.menuBlurb])
      ])
    )
  ]);

  fill("[data-products-footer]", categories.map((entry) =>
    el("a", { href: `#products/${encodeURIComponent(entry.key)}` }, [productCategoryLabel(entry.key)])
  ));
}

// Chip buttons are built exactly once here and never rebuilt afterwards —
// setProductCategory() only toggles their class/aria-pressed state, so a
// click never destroys the button the user just focused/activated.
function renderFilters() {
  const activeCategories = new Set(publicProducts.map((item) => item.category));
  const categories = productCategories.filter((entry) => activeCategories.has(entry.key));

  const buttons = [
    el("button", { type: "button", class: "is-active", "aria-pressed": "true", "data-filter": "All" }, ["All"]),
    ...categories.map((entry) =>
      el("button", { type: "button", "aria-pressed": "false", "data-filter": entry.key }, [productCategoryLabel(entry.key)])
    )
  ];
  document.querySelector("[data-product-filters]").replaceChildren(...buttons);
}

// Fixed curated set (FEATURED_PRODUCT_SLUGS), independent of the current
// search/category state — always the same three tiles when shown at all.
function renderFeatured() {
  const items = FEATURED_PRODUCT_SLUGS.map((slug) => publicProducts.find((item) => item.slug === slug)).filter(Boolean);
  document.querySelector("[data-products-featured-grid]").replaceChildren(...items.map(createFeaturedTile));
}

function createFeaturedTile(item) {
  const image = item.featuredTileImage;
  return el("a", { class: "featured-tile", href: `#product/${item.slug}`, "aria-label": `${item.title} — ${item.summary}` }, [
    el("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, loading: "lazy" }),
    el("span", { class: "featured-tile__overlay" }),
    el("span", { class: "featured-tile__content" }, [
      el("h3", {}, [item.title]),
      el("p", {}, [item.summary])
    ]),
    el("span", { class: "featured-tile__arrow" }, [arrowIcon()])
  ]);
}

// Home's "Featured products" panels: same curated FEATURED_PRODUCT_SLUGS set
// as the Products page's featured tray, but larger and photography-led,
// using each product's full-size detail-hero image rather than the small
// featuredTileImage thumbnail (see createFeaturedTile() above).
function createFeaturedProductPanel(item) {
  const image = item.image;
  return el("a", { class: "featured-panel", href: `#product/${item.slug}`, "aria-label": `${item.title} — ${item.summary}` }, [
    el("span", { class: "featured-panel__media" }, [
      el("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, loading: "lazy" })
    ]),
    el("span", { class: "featured-panel__scrim", "aria-hidden": "true" }),
    el("span", { class: "featured-panel__content" }, [
      el("h3", {}, [item.title]),
      el("p", {}, [item.summary]),
      el("span", { class: "featured-panel__link" }, ["View details"])
    ])
  ]);
}

// Home's "Featured services" panels: landscape sibling of
// createFeaturedProductPanel() above, sized around each service's existing
// detailHero banner (all four share the same ~2.61:1 panoramic ratio - see
// .featured-panel--service) rather than the products' portrait crop.
function createFeaturedServicePanel(item) {
  const image = item.detailHero;
  return el("a", { class: "featured-panel featured-panel--service", href: `#service/${item.slug}`, "aria-label": `${item.title} — ${item.summary}` }, [
    el("span", { class: "featured-panel__media" }, [
      el("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, loading: "lazy" })
    ]),
    el("span", { class: "featured-panel__scrim featured-panel__scrim--service", "aria-hidden": "true" }),
    el("span", { class: "featured-panel__content" }, [
      el("h3", {}, [item.title]),
      el("p", {}, [item.summary]),
      el("span", { class: "featured-panel__link" }, ["View details"])
    ])
  ]);
}

function createProductRow(item) {
  return el("a", { class: "product-row", href: `#product/${item.slug}` }, [
    el("span", { class: "product-row__text" }, [
      el("span", { class: "product-row__name" }, [item.title]),
      el("span", { class: "product-row__summary" }, [item.summary])
    ]),
    el("span", { class: "product-row__arrow" }, [arrowIcon()])
  ]);
}

// Full Industries page's row list - identical pattern to createProductRow()
// above (same classes, same arrow, no visible "View" label since the whole
// row is the link), just pointed at an industry's detail page instead of a
// product's. The homepage uses its own compact image index above.
function createIndustryRow(item) {
  return el("a", { class: "product-row", href: `#industry/${item.slug}` }, [
    el("span", { class: "product-row__text" }, [
      el("span", { class: "product-row__name" }, [item.title]),
      el("span", { class: "product-row__summary" }, [item.summary])
    ]),
    el("span", { class: "product-row__arrow" }, [arrowIcon()])
  ]);
}

// Services overview row list - same reused pattern as createIndustryRow()
// above, pointed at a service's detail page instead of an industry's.
// createCard()-driven service cards are gone; createCard() itself is
// untouched and still drives the homepage "Featured services" preview.
function createServiceRow(item) {
  return el("a", { class: "product-row", href: `#service/${item.slug}` }, [
    el("span", { class: "product-row__text" }, [
      el("span", { class: "product-row__name" }, [item.title]),
      el("span", { class: "product-row__summary" }, [item.summary])
    ]),
    el("span", { class: "product-row__arrow" }, [arrowIcon()])
  ]);
}

// Groups in data.js productCategories order (same order the nav mega-menu
// uses), skipping any category with no matches in the current list.
function groupProductsByCategory(list) {
  return productCategories
    .map((entry) => ({ label: productCategoryLabel(entry.key), items: list.filter((item) => item.category === entry.key) }))
    .filter((group) => group.items.length > 0);
}

// Group headings are only rendered when more than one category is present —
// with a single active category (or a search narrowed to one), the group
// label would just repeat the already-visible filter chip.
function renderProductDirectory(list) {
  const directory = document.querySelector("[data-products-directory]");
  const empty = document.querySelector("[data-products-empty]");

  if (!list.length) {
    directory.replaceChildren();
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  const groups = groupProductsByCategory(list);
  const showGroupTitles = groups.length > 1;

  directory.replaceChildren(...groups.map((group) =>
    el("div", { class: "product-directory__group" }, [
      showGroupTitles ? el("h3", { class: "product-directory__group-title" }, [group.label]) : null,
      ...group.items.map((item) => createProductRow(item))
    ])
  ));
}

// Single source of truth for the Products Overview's current search/category
// state. Category changes go through setProductCategory(); search changes
// update productViewState.query directly then call this. Neither one resets
// the other — they compose (AND), matching the toolbar's independent controls.
const productViewState = { category: "All", query: "" };

function applyProductsView() {
  const { category, query } = productViewState;
  const isDefaultView = category === "All" && !query;
  const featured = document.querySelector("[data-products-featured]");
  if (featured) featured.hidden = !isDefaultView;

  const term = query.trim().toLowerCase();
  let filtered = publicProducts.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesQuery = !term || `${item.title} ${item.summary}`.toLowerCase().includes(term);
    return matchesCategory && matchesQuery;
  });

  // Default view only: MARITAS/MATIS/JADIS are already shown as featured
  // tiles above, so skip them here to avoid an immediate duplicate row. Any
  // active search or category filter shows them normally like every other
  // product — they're never excluded from being found, just from this one
  // unfiltered listing.
  if (isDefaultView) {
    filtered = filtered.filter((item) => !FEATURED_PRODUCT_SLUGS.includes(item.slug));
  }

  renderProductDirectory(filtered);
}

let announceTimer = null;

// Announces meaningful, non-numeric search/filter state changes via the
// visually-hidden polite live region — never a result count. Search-input
// typing debounces this (so screen readers aren't spammed per keystroke);
// chip clicks, reset, and route()-driven category changes announce
// immediately since each is a single discrete action.
function announceProductsUpdate(debounce) {
  clearTimeout(announceTimer);
  const run = () => {
    const statusEl = document.querySelector("[data-products-status]");
    const directory = document.querySelector("[data-products-directory]");
    if (!statusEl || !directory) return;

    const { category, query } = productViewState;
    const term = query.trim();
    const hasResults = directory.children.length > 0;

    let message;
    if (!hasResults) {
      message = "No products match your current search and filters.";
    } else if (category !== "All" && term) {
      message = `Products updated. Category: ${productCategoryLabel(category)}. Search: ${term}.`;
    } else if (category !== "All") {
      message = `Products updated. Category: ${productCategoryLabel(category)}.`;
    } else if (term) {
      message = `Products updated for search: ${term}.`;
    } else {
      message = "All products shown.";
    }
    statusEl.textContent = message;
  };

  if (debounce) announceTimer = setTimeout(run, 500);
  else run();
}

// Syncs chip button state (class + aria-pressed) to `category` without
// rebuilding them, then re-renders. Falls back to "All" for an unknown/stale
// category (e.g. a bookmarked URL for a category that no longer exists).
function setProductCategory(category) {
  const known = new Set(publicProducts.map((item) => item.category));
  const resolved = category === "All" || known.has(category) ? category : "All";
  productViewState.category = resolved;

  document.querySelectorAll("[data-filter]").forEach((button) => {
    const isActive = button.dataset.filter === resolved;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  applyProductsView();
  announceProductsUpdate(false);
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
  if (services.some((item) => item.title === title || item.detailTitle === title)) return "Services";
  if (news.some((item) => item.title === title)) return "News";
  if (industries.some((item) => item.title === title)) return "Industries";
  return "";
}

// Shared figure for the optional supporting images in overview/operationalUse.
// Always lazy-loaded since these sit further down the page than the main image.
function detailFigure(image) {
  return el("div", { class: "detail-figure" }, [
    el("img", { src: image.src, alt: image.alt, width: image.width, height: image.height, loading: "lazy" })
  ]);
}

function detailInlineContent(parts) {
  return parts.map((part) => typeof part === "string"
    ? part
    : el("a", { class: "text-link", href: part.href }, [part.text]));
}

// One full-width content section for a data-driven detail page. Rendered as a
// child of .detail-copy (not .detail-shell) so .detail-panel's
// position:sticky keeps tracking the whole page - see the CSS comment above
// .detail-blocks for how split/tinted/dark/background-image sections still
// reach the full page width from inside that narrower column.
//
// `body` is an array of already-built nodes (paragraphs, a tag-list, a card
// grid, a button - whatever the block needs). variant/imagePosition/theme
// are optional; omitting all three renders the same plain heading+text(+
// image) block every product used before this system existed, so entries
// without them are unaffected.
function createDetailBlock({ heading, body, image, variant = "standard", imagePosition = "right", theme = "light" }) {
  const textChildren = [];
  if (heading) textChildren.push(el("h3", {}, [heading]));
  textChildren.push(...body);
  const text = el("div", { class: "detail-block__text" }, textChildren);

  const innerChildren = [text];
  if (image && variant !== "backgroundImage") {
    const media = el("div", { class: "detail-block__media" }, [detailFigure(image)]);
    if (variant === "split" && imagePosition === "left") {
      innerChildren.unshift(media);
    } else {
      innerChildren.push(media);
    }
  }

  const classes = ["detail-block"];
  if (!image) classes.push("detail-block--text-only");
  if (variant === "split") {
    classes.push("detail-block--split");
    if (imagePosition === "left") classes.push("detail-block--image-left");
  } else if (variant === "wideImage") {
    classes.push("detail-block--wide-image");
  } else if (variant === "backgroundImage") {
    classes.push("detail-block--background-image");
  }
  if (variant !== "backgroundImage") {
    if (theme === "tinted") classes.push("detail-block--tinted");
    if (theme === "dark") classes.push("detail-block--dark");
  }

  const sectionChildren = [el("div", { class: "detail-block__inner" }, innerChildren)];
  const attrs = { class: classes.join(" ") };
  if (variant === "backgroundImage" && image) {
    attrs.style = `background-image:url('${image.src}')`;
    sectionChildren.unshift(el("div", { class: "detail-block__overlay" }, []));
  }

  return el("section", attrs, sectionChildren);
}

function renderDetail(kind, slug) {
  const collection = kind === "product" ? products : kind === "service" ? services : kind === "industry" ? industries : news;
  const item = collection.find((entry) => entry.slug === slug);

  if (!item) {
    location.hash = "#home";
    return;
  }

  const detailSummary = item.summary;
  const visualLabel = kind === "product" ? "Product Image / 3D Render" : kind === "service" ? "Service Illustration" : kind === "industry" ? "Industry Image" : "News Image";

  // Product and Industry detail pages, plus data-driven service details, omit
  // the generic placeholder sidebar. Product/industry pages render "Key information" as a static,
  // in-flow content section (see below) instead of this sidebar - see the
  // plan notes above .detail-shell in style.css. Services/news keep the
  // original sidebar unchanged.
  let panelChildren = null;
  if (kind !== "product" && kind !== "industry" && !item.detailSections) {
    const related = item.related || item.relatedProducts || ["Related content coming soon"];
    const detailBullets = kind === "service"
      ? ["Scope and deliverables", "Related products", "How to get in touch"]
      : ["Article overview", "Full article text", "Related links"];

    panelChildren = [
      el("p", { class: "eyebrow" }, ["Overview"]),
      el("h2", {}, ["Key information"]),
      el("p", {}, [kind === "service" ? "Full details coming soon." : "Full article coming soon."])
    ];
    if (item.sourceUrl) {
      panelChildren.push(el("a", { class: "text-link", href: item.sourceUrl, target: "_blank", rel: "noopener" }, ["Original product page"]));
    }
    panelChildren.push(
      el("h3", {}, [kind === "service" ? "About this service" : "About this article"]),
      el("ul", { class: "detail-checklist" }, detailBullets.map((entry) => el("li", {}, [entry]))),
      el("ul", { class: "tag-list" }, (item.tags || [item.category]).map((tag) => el("li", {}, [tag]))),
      el("h3", {}, ["Related"]),
      el("ul", { class: "tag-list" }, related.map((tag) => el("li", {}, [tag])))
    );
  }

  const detailImage = item.detailHero || ((kind === "product" || kind === "industry") ? item.image : null);
  const detailVisual = detailImage
    ? el("div", { class: "visual-placeholder visual-placeholder--detail visual-placeholder--photo" }, [
        el("img", { src: detailImage.src, alt: detailImage.alt, width: detailImage.width, height: detailImage.height })
      ])
    : el("div", { class: "visual-placeholder visual-placeholder--detail" }, [el("span", {}, [visualLabel])]);

  if (kind === "product" && detailImage) {
    const treatment = PRODUCT_HERO_TREATMENTS[item.slug] || {};
    detailVisual.classList.add("visual-placeholder--product-hero");
    if (treatment.fit === "contain") detailVisual.classList.add("visual-placeholder--product-hero-contained");
    detailVisual.style.setProperty("--product-hero-position-desktop", treatment.desktop || "center");
    detailVisual.style.setProperty("--product-hero-position-tablet", treatment.tablet || treatment.desktop || "center");
    detailVisual.style.setProperty("--product-hero-position-mobile", treatment.mobile || treatment.tablet || treatment.desktop || "center");
  }

  if (item.detailHero) detailVisual.classList.add("visual-placeholder--banner");

  const copyChildren = [
    el("p", { class: "eyebrow" }, [kind === "product" ? productCategoryLabel(item.category) : kind === "industry" ? "Industry" : kind]),
    el("h1", {}, [item.detailTitle || item.title]),
    detailVisual
  ];

  // Optional data-driven service sections or product/industry long-form content.
  // Entries without either keep the existing short placeholder detail page.
  if (item.detailSections && item.detailSections.length) {
    copyChildren.push(el("div", { class: "detail-blocks" }, item.detailSections.map((section) => {
      const body = [];
      // Intro paragraph is optional - a section can be just a heading + list
      // (e.g. "Key Features"). Sections with `content` are unaffected.
      if (section.content && section.content.length) {
        body.push(el("p", {}, detailInlineContent(section.content)));
      }
      // Optional bullet list after the intro paragraph. listStyle "capability"
      // reuses the 2-column product capability list (with its decorative
      // arrow marker); anything else falls back to the plain detail-checklist.
      // Sections without `list` are unaffected - same single <p> as before.
      if (section.list && section.list.length) {
        const useCapabilityStyle = section.listStyle === "capability";
        body.push(el("ul", { class: useCapabilityStyle ? "capability-list" : "detail-checklist" }, section.list.map((entry) => {
          const liChildren = useCapabilityStyle
            ? [el("img", { class: "capability-list__icon", src: "assets/icons/arrow-icon02.svg", alt: "", "aria-hidden": "true" }), entry]
            : [entry];
          return el("li", {}, liChildren);
        })));
      }
      // Optional closing paragraph after the list.
      if (section.note) {
        body.push(el("p", {}, [section.note]));
      }
      return createDetailBlock({ heading: section.heading, body });
    })));
  } else if ((kind === "product" || kind === "industry") && item.overview && item.overview.length) {
    if (item.overviewHeading) {
      copyChildren.push(el("h3", {}, [item.overviewHeading]));
    }
    item.overview.forEach((paragraph) => copyChildren.push(el("p", {}, [paragraph])));
    if (item.overviewImage) {
      copyChildren.push(detailFigure(item.overviewImage));
    }
  } else {
    copyChildren.push(el("p", {}, [detailSummary]));
  }

  if (kind === "product" || kind === "industry") {
    const blocks = [];

    // Only products carry highlights, so this never fires for industries -
    // no special-casing needed. Products without highlights omit "Key
    // capabilities" entirely rather than showing placeholder filler text.
    // Rendered as a plain, full-width, two-column technical list (no
    // ranking/numbers) in normal page flow - see .capability-list in
    // style.css. Each item gets the same decorative arrow image (the
    // project's assets/icons/arrow-icon02.svg asset, used as-is - not a
    // link, so no href/click handling).
    if (item.highlights && item.highlights.length) {
      blocks.push(createDetailBlock({
        heading: "Key capabilities",
        body: [el("ul", { class: "capability-list" }, item.highlights.map((entry) => el("li", {}, [
          el("img", { class: "capability-list__icon", src: "assets/icons/arrow-icon02.svg", alt: "", "aria-hidden": "true" }),
          entry
        ])))]
      }));
    }

    if (item.operationalUse && item.operationalUse.length) {
      const pushOperationalUseBlock = (entry) => blocks.push(createDetailBlock({
        heading: entry.heading,
        body: entry.text ? [el("p", {}, [entry.text])] : [],
        image: entry.image,
        variant: entry.variant,
        imagePosition: entry.imagePosition,
        theme: entry.theme
      }));

      if (item.focusAreas && item.focusAreas.length) {
        // Generic convention (not tied to any specific product/industry):
        // the first operationalUse entry is a lead-in paragraph, focusAreas
        // renders right after it as a plain three-column card row, then any
        // remaining operationalUse entries continue the narrative below.
        item.operationalUse.slice(0, 1).forEach(pushOperationalUseBlock);
        blocks.push(createDetailBlock({
          body: [el("div", { class: "card-grid card-grid--three" }, item.focusAreas.map((entry) => createFocusAreaCard(entry)))]
        }));
        item.operationalUse.slice(1).forEach(pushOperationalUseBlock);
      } else {
        item.operationalUse.forEach(pushOperationalUseBlock);
      }
    }

    if (item.typicalApplications && item.typicalApplications.length) {
      blocks.push(createDetailBlock({
        heading: item.typicalApplicationsHeading || "Typical applications",
        body: [el("ul", { class: "tag-list" }, item.typicalApplications.map((entry) => el("li", {}, [entry])))],
        image: item.typicalApplicationsImage,
        variant: item.typicalApplicationsVariant,
        imagePosition: item.typicalApplicationsImagePosition,
        theme: item.typicalApplicationsTheme
      }));
    }

    if (item.integration && item.integration.length) {
      blocks.push(createDetailBlock({
        heading: "Integration",
        body: item.integration.map((paragraph) => el("p", {}, [paragraph])),
        theme: item.integrationTheme
      }));
    }

    if (item.relatedProducts && item.relatedProducts.length) {
      const visibleRelated = item.relatedProducts.filter((entry) =>
        !entry.slug || !products.find((p) => p.slug === entry.slug && p.status === "archived")
      );
      if (visibleRelated.length) {
        blocks.push(createDetailBlock({
          heading: "Related products",
          body: [el("div", { class: "card-grid card-grid--three" }, visibleRelated.map((entry) => createRelatedProductCard(entry)))],
          theme: item.relatedProductsTheme || "tinted"
        }));
      }
    }

    // Industry pages omit the generic "Contact about this industry" CTA -
    // Related products already gives visitors a concrete next step.
    if (kind === "product") {
      blocks.push(createDetailBlock({
        body: [el("a", { class: "button button--primary", href: "#contact" }, [`Contact about this ${kind}`])],
        theme: "tinted"
      }));
    }

    copyChildren.push(el("div", { class: "detail-blocks" }, blocks));
  } else if (!item.detailSections) {
    copyChildren.push(el("p", {}, [kind === "news" ? "The full article isn't published yet." : `Full details for this ${kind} will be added here.`]));
    copyChildren.push(el("a", { class: "button button--primary", href: "#contact" }, [`Contact about this ${kind}`]));
  }

  const shellChildren = [el("div", { class: "detail-copy" }, copyChildren)];
  const shellClasses = ["detail-shell"];
  if (panelChildren) {
    shellChildren.push(el("aside", { class: "detail-panel" }, panelChildren));
  } else {
    shellClasses.push("detail-shell--single");
  }
  const shell = el("article", { class: shellClasses.join(" ") }, shellChildren);

  document.querySelector("#detail").replaceChildren(shell);
  showPage("detail", item.detailTitle || item.title);
}

function route() {
  // SPA navigation never fires a native "resize" event, but clientWidth can
  // still change here (e.g. a vertical scrollbar appearing/disappearing
  // between a short page and a tall detail page) - refresh --viewport-w on
  // every navigation so full-bleed detail blocks (see style.css) never
  // render against a stale viewport width.
  updateViewportWidthVar();

  const hash = location.hash.replace(/^#\/?/, "") || "home";
  const [kind, slug] = hash.split("/");

  if ((kind === "product" || kind === "service" || kind === "news" || kind === "industry") && slug) {
    const section = kind === "product" ? "products" : kind === "service" ? "services" : kind === "industry" ? "industries" : "news";
    if (!isEnabled(section)) {
      location.hash = "#home";
      return;
    }
    renderDetail(kind, slug);
    return;
  }

  showPage(pages.has(kind) ? kind : "home");

  // #products/{category} deep links and browser Back/Forward both land here
  // via hashchange; in-page chip clicks update the URL themselves (see the
  // delegated click handler below) and call setProductCategory() directly,
  // skipping the showPage() scroll-to-top since the user hasn't left the page.
  if (kind === "products") {
    setProductCategory(slug ? decodeURIComponent(slug) : "All");
  }
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

// Product-detail full-bleed blocks escape their column using 100vw-based
// math (see the CSS comment above .detail-blocks). Bare 100vw includes the
// browser's reserved scrollbar gutter on non-overlay scrollbars, which makes
// those blocks wider than the visible viewport and causes horizontal
// overflow. clientWidth excludes that gutter, so mirroring it into a CSS
// variable and using that instead of 100vw keeps the math accurate on every
// scrollbar style without resorting to a global overflow-x: hidden.
function updateViewportWidthVar() {
  document.documentElement.style.setProperty("--viewport-w", `${document.documentElement.clientWidth}px`);
}
updateViewportWidthVar();

// A native "resize" event alone misses cases where clientWidth changes
// without the window itself resizing - e.g. a scrollbar appearing/
// disappearing, or a DevTools viewport override that doesn't synthesize a
// resize event. ResizeObserver on the root element catches all of these;
// window "resize" is kept only as a fallback for browsers without it.
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(updateViewportWidthVar).observe(document.documentElement);
} else {
  window.addEventListener("resize", updateViewportWidthVar);
}

applyConfig();
renderStaticLists();
initHeroSlider();
bindDropdownAccessibility();
route();

document.querySelector("[data-year]").textContent = new Date().getFullYear();

window.addEventListener("hashchange", route);

document.addEventListener("click", (event) => {
  const scrollLink = event.target.closest("[data-scroll-target]");
  if (scrollLink) {
    const target = document.querySelector(scrollLink.dataset.scrollTarget);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    const category = filter.dataset.filter;
    const hash = category === "All" ? "#products" : `#products/${encodeURIComponent(category)}`;
    // pushState (not location.hash=) so this doesn't fire hashchange/route()
    // and re-trigger showPage()'s scroll-to-top while the user is filtering
    // in place; Back/Forward still works since popping this entry does fire
    // hashchange, per the existing window "hashchange" -> route() listener.
    if (location.hash !== hash) history.pushState(null, "", hash);
    setProductCategory(category);
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

// Products Overview toolbar search: filters the directory in place (never
// navigates away, never touches the URL) - distinct from the sitewide
// header search above, which is a separate cross-content, navigate-away tool.
const productSearchInput = document.querySelector("[data-product-search]");
productSearchInput?.addEventListener("input", (event) => {
  productViewState.query = event.target.value;
  applyProductsView();
  announceProductsUpdate(true);
});

document.querySelector("[data-products-reset]")?.addEventListener("click", () => {
  productViewState.query = "";
  if (productSearchInput) productSearchInput.value = "";
  if (location.hash !== "#products") history.pushState(null, "", "#products");
  setProductCategory("All");
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 560);
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
