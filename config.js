// ============================================================================
// SITE CONFIG — customise the template for a new company from this one file.
// ----------------------------------------------------------------------------
// This is plain data. It loads before data.js and script.js and is exposed as
// window.SiteConfig. Editing the values below updates the whole site — no build
// step, no framework. See TEMPLATE notes at the bottom for how each field maps
// to the page.
// ============================================================================
window.SiteConfig = {
  // --- Company identity --------------------------------------------------
  companyName: "Navielektro",                              // appears in header/footer, contact strip, page title
  tagline: "Operational technology for demanding environments.", // short line shown in the footer
  logo: {
    src: "assets/navielektro-logo.webp",                  // path to the logo image (header + footer)
    alt: "Navielektro"                                    // logo alt text (falls back to companyName)
  },

  // --- Contact details ---------------------------------------------------
  // Shown on the Contact page and, in short form, in the site-wide contact strip.
  contact: {
    addressLines: ["Navielektro", "Street address", "Postal code, City", "Country"],
    email: "email@example.com",                           // becomes a mailto: link automatically
    phone: "+000 0 000 0000",                             // becomes a tel: link automatically
    office: "City, Country",                              // short location line for the contact strip
    hoursLines: ["Monday–Friday: 9–17", "Saturday–Sunday: closed"]
  },

  // --- Social media links ------------------------------------------------
  // Set the URL for each channel. Leave a value empty ("") to hide that channel.
  social: {
    linkedin: "#",
    youtube: "#",
    x: "#"
  },

  // --- Navigation labels -------------------------------------------------
  // Rename a menu item by editing its label here (updates desktop, mobile,
  // footer nav and breadcrumbs). The keys must stay the same.
  navLabels: {
    products: "Products",
    services: "Services",
    industries: "Industries",
    about: "About",
    references: "References",
    news: "News",
    contact: "Contact"
  },

  // --- Optional sections -------------------------------------------------
  // Set any of these to false to fully remove that section from the page, the
  // navigation (desktop/mobile/footer), the homepage preview and search —
  // without deleting any markup. Set back to true to bring it back.
  sections: {
    services: true,
    industries: true,
    references: false,
    news: true
  }
};
