// ============================================================================
// Navielektro — website content data
// ----------------------------------------------------------------------------
// This is the single place to edit site content. No build step is required:
// it loads as a plain script before script.js and exposes window.NaviData.
// To add / remove / reorder an item, edit the relevant array below.
// Later this file can be generated from a CMS without touching script.js.
// ============================================================================
window.NaviData = (function () {
  // --- Products (Products page + featured on home; drive product detail pages)
  const products = [
    {
      slug: "maritas",
      title: "MARITAS",
      category: "Systems",
      summary: "Part of Navielektro's Systems portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/maritas.html"
    },
    {
      slug: "matis",
      title: "MATIS",
      category: "Systems",
      summary: "Part of Navielektro's Systems portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/matis.html"
    },
    {
      slug: "tacis",
      title: "TACIS",
      category: "Systems",
      summary: "Part of Navielektro's Systems portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/tacis.html"
    },
    {
      slug: "trafficaware",
      title: "TrafficAware",
      category: "Systems",
      summary: "Part of Navielektro's Systems portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/trafficaware.html"
    },
    {
      slug: "tdf",
      title: "Software Platform",
      category: "Tactical Display Framework",
      summary: "Part of Navielektro's Tactical Display Framework portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/tdf.html"
    },
    {
      slug: "userinterfaces",
      title: "User Interfaces",
      category: "Tactical Display Framework",
      summary: "Part of Navielektro's Tactical Display Framework portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/userinterfaces.html"
    },
    {
      slug: "sdk",
      title: "Software Development Kit",
      category: "Tactical Display Framework",
      summary: "Part of Navielektro's Tactical Display Framework portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/sdk.html"
    },
    {
      slug: "cise",
      title: "CISE",
      category: "Security",
      summary: "Part of Navielektro's Security portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/cise.html"
    },
    {
      slug: "cybersecurity",
      title: "Cyber Security",
      category: "Security",
      summary: "Part of Navielektro's Security portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/cybersecurity.html"
    },
    {
      slug: "infra-protection",
      title: "Critical Infrastructure Protection",
      category: "Security",
      summary: "Part of Navielektro's Security portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/infra-protection.html"
    },
    {
      slug: "radar-antennas",
      title: "Radar Antennas",
      category: "Sensors",
      summary: "Part of Navielektro's Sensors portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/radar-antennas.html"
    },
    {
      slug: "radar-transceivers",
      title: "Radar Transceivers",
      category: "Sensors",
      summary: "Part of Navielektro's Sensors portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/radar-transceivers.html"
    },
    {
      slug: "cctv",
      title: "CCTV/Optronics",
      category: "Sensors",
      summary: "Part of Navielektro's Sensors portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/cctv.html"
    },
    {
      slug: "newis",
      title: "Weather and Environmental Information",
      category: "Weather",
      summary: "Part of Navielektro's Weather portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/newis.html"
    },
    {
      slug: "grib",
      title: "Weather Forecast",
      category: "Weather",
      summary: "Part of Navielektro's Weather portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/grib.html"
    },
    {
      slug: "voice",
      title: "VOICE",
      category: "Voice Communication",
      summary: "Part of Navielektro's Voice Communication portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/voice.html"
    },
    {
      slug: "voice-tactical",
      title: "VOICE Tactical",
      category: "Voice Communication",
      summary: "Part of Navielektro's Voice Communication portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/voice-tactical.html"
    },
    {
      slug: "trackfusion",
      title: "Track Fusion",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/trackfusion.html"
    },
    {
      slug: "warehousing",
      title: "Track Warehousing",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/warehousing.html"
    },
    {
      slug: "madis",
      title: "Anomaly Detection",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/madis.html"
    },
    {
      slug: "gmdss",
      title: "GMDSS",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/gmdss.html"
    },
    {
      slug: "sar",
      title: "Search and Rescue",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/sar.html"
    },
    {
      slug: "routes",
      title: "Route Management",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/routes.html"
    },
    {
      slug: "aton",
      title: "Aids to Navigation Monitoring",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/aton.html"
    },
    {
      slug: "mmhs",
      title: "Military Message Handling",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/mmhs.html"
    },
    {
      slug: "radar-processing",
      title: "Radar Processing",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/radar-processing.html"
    },
    {
      slug: "video",
      title: "CCTV/Video",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/video.html"
    },
    {
      slug: "logging-replay",
      title: "Logging & Replay",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/logging-replay.html"
    },
    {
      slug: "simulation",
      title: "Training & Simulation",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/simulation.html"
    },
    {
      slug: "monitoring",
      title: "System Monitoring",
      category: "Modules",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/monitoring.html"
    }
  ];

  // --- Short intro shown for each product category (cards + detail summary) ---
  const categoryDescriptions = {
    Systems: "Integrated operational systems for situational awareness, traffic awareness and command environments.",
    "Tactical Display Framework": "Software platform products prepared for operator interfaces, integration work and application development.",
    Security: "Security-focused products and modules for information sharing, cyber resilience and infrastructure protection.",
    Sensors: "Radar, CCTV and optronics product pages prepared for future specifications, imagery and technical documentation.",
    Weather: "Weather and environmental information products prepared for operational planning and decision support.",
    "Voice Communication": "Voice communication products prepared for control room and tactical communication content.",
    Modules: "Operational modules that extend tracking, monitoring, replay, routing, rescue and simulation workflows."
  };

  // --- Services (Services page + featured on home; drive service detail pages)
  const services = [
    {
      slug: "system-integration",
      title: "System integration",
      category: "Delivery",
      summary: "Integrating Navielektro products, sensors, software and third-party systems into one coherent operational whole.",
      tags: ["Services", "Integration"],
      relatedProducts: ["MARITAS", "Software Development Kit", "Radar Processing"]
    },
    {
      slug: "lifecycle-support",
      title: "Lifecycle support",
      category: "Support",
      summary: "Maintenance, support models, upgrades and long-term continuity for delivered systems.",
      tags: ["Services", "Support"],
      relatedProducts: ["Radar Antennas", "Radar Transceivers", "VOICE"]
    },
    {
      slug: "technical-consulting",
      title: "Technical consulting",
      category: "Advisory",
      summary: "Early-stage planning, architecture, requirements and feasibility support for complex projects.",
      tags: ["Services", "Consulting"],
      relatedProducts: ["TACIS", "CISE", "Critical Infrastructure Protection"]
    },
    {
      slug: "training",
      title: "Training",
      category: "Enablement",
      summary: "Operator and administrator training, plus structured system handover for your teams.",
      tags: ["Services", "Training"],
      relatedProducts: ["Software Platform", "User Interfaces", "Training & Simulation"]
    }
  ];

  // --- References (Home preview + References page) ----------------------------
  const references = [
    {
      title: "Maritime authority project",
      category: "Maritime",
      summary: "A maritime authority project. Customer details and outcomes will be published once approved."
    },
    {
      title: "Defence operator project",
      category: "Defence",
      summary: "A defence operator project. Customer story and measurable results will be added when available."
    },
    {
      title: "Infrastructure monitoring project",
      category: "Infrastructure",
      summary: "An infrastructure monitoring project. Project summary and case study to follow."
    }
  ];

  // --- News (Home preview + News page; drive news detail pages) ---------------
  const news = [
    {
      slug: "website-foundation",
      date: "2026-07-10",
      title: "New website foundation prepared",
      category: "Company news",
      summary: "An update on Navielektro's refreshed website and what is coming next."
    },
    {
      slug: "product-note",
      date: "2026-07-10",
      title: "Product documentation update",
      category: "Documents",
      summary: "Product sheets, release notes and technical documentation updates."
    },
    {
      slug: "event-update",
      date: "2026-07-10",
      title: "Event update",
      category: "Company news",
      summary: "Trade fairs, conferences, exercises and company announcements."
    }
  ];

  // --- Industries: homepage highlights (3 shown in the home "Industries" block)
  const industriesHome = [
    {
      title: "Maritime authorities",
      summary: "Maritime traffic, coastal monitoring and related authority workflows."
    },
    {
      title: "Defence operators",
      summary: "Secure operational awareness, command environments and integration needs."
    },
    {
      title: "Infrastructure and transport",
      summary: "Critical infrastructure, ports and multi-modal transport operations."
    }
  ];

  // --- Industries: full list (shown on the Industries page) -------------------
  const industries = [
    {
      title: "Maritime",
      summary: "Maritime situational awareness, coastal monitoring and traffic management use cases."
    },
    {
      title: "Defence",
      summary: "Secure operational technology, command support and integration use cases."
    },
    {
      title: "Critical infrastructure",
      summary: "Ports, terminals, transport corridors and facility monitoring use cases."
    },
    {
      title: "Public authorities",
      summary: "Multi-agency coordination, surveillance and operational reporting use cases."
    }
  ];

  return {
    products,
    categoryDescriptions,
    services,
    references,
    news,
    industriesHome,
    industries
  };
})();
