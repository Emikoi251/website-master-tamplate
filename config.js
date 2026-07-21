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
    visitingAddressLines: ["Navielektro Ky", "Hallimestarinkatu 11", "20780 Kaarina", "Finland"],
    postalAddressLines: ["Navielektro Ky", "P.O. Box 137", "FIN-20781 Kaarina", "Finland"],
    email: "info@navielektro.fi",                         // becomes a mailto: link automatically
    phone: "+358 2 243 7711",                             // becomes a tel: link automatically
    personnelEmailFormat: "firstname.lastname@navielektro.fi", // format only, not a real mailto link
    office: "Kaarina, Finland",                           // short location line for the contact strip
    hoursLines: []                                        // unverified — leave empty until confirmed; [data-contact="hours"] support stays in script.js for reuse
  },

  // --- Location map --------------------------------------------------------
  // Shown on the Contact page as a clickable image linking out to Google Maps.
  map: {
    image: "assets/navielektro-real-street-map.png",
    alt: "Map showing the location of Navielektro at Hallimestarinkatu 11 in Kaarina, Finland",
    url: "https://www.google.com/maps/search/?api=1&query=60.4200632%2C22.3866018"
  },

  // --- Social media links ------------------------------------------------
  // Set the URL for each channel. Leave a value empty ("") to hide that channel.
  social: {
    linkedin: "https://www.linkedin.com/company/navielektro/",
    facebook: "https://www.facebook.com/profile.php?id=100057483668927",
    x: "https://twitter.com/navielektro"
  },

  // --- Navigation labels -------------------------------------------------
  // Rename a menu item by editing its label here (updates desktop, mobile,
  // footer nav and breadcrumbs). The keys must stay the same.
  navLabels: {
    products: "Products",
    services: "Support & Services",
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
