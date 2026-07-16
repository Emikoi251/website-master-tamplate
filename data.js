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
      slug: "jadis",
      title: "JADIS",
      category: "Systems",
      summary: "JADIS brings situational awareness, command and control, secure communications and interoperability together in one NATO FMN-compatible platform for coalition and multi-domain operations.",
      image: {
        src: "assets/products/jadis/jadis-hero.webp",
        alt: "Silhouette of a soldier with tactical equipment against a dramatic sky",
        width: 1600,
        height: 1067
      },
      highlights: [
        "Joint all-domain situational awareness",
        "Command and control",
        "Secure communications and collaboration",
        "NATO FMN compatibility",
        "Deployable rack-mount solution"
      ],
      overview: [
        "JADIS (Joint All-Domain Information System) is Navielektro's integrated command-and-control platform for coalition and multi-domain operations. It brings together situational awareness, decision support, and secure communications into a single system, replacing the patchwork of disconnected tools that typically forces operators to switch between workstations and manually piece together a situation picture.",
        "Built on the Navielektro MATIS foundation and extended with joint all-domain capabilities, JADIS is designed to support the full sense-make sense-act operational cycle. It scales from headquarters environments with large-screen displays to deployed soldiers using ruggedized tactical tablets, giving every echelon of an organization access to the same shared operational picture through one common user interface.",
        "JADIS is developed for defence forces, maritime and coastal authorities, and multi-agency operations centers that depend on secure, timely information sharing across domains and coalition partners. The system is compliant with NATO FMN and can be deployed for hundreds of operators from a single rack-mount case, reducing the equipment, staff and integration effort typically required to reach day-zero mission readiness."
      ],
      overviewImage: {
        src: "assets/products/jadis/jadis-deployment.webp",
        alt: "Navielektro's deployable rack-mount hardware case next to a rugged tactical tablet running the JADIS interface",
        width: 1600,
        height: 611
      },
      operationalUse: [
        {
          heading: "Unified situation picture",
          text: "JADIS fuses radar, camera, track and weather data - together with manually entered information - into a single, operator-defined common operational picture. Track location and status are shown in real time on the chart, and the picture can be shared across command levels, platforms and coalition partners."
        },
        {
          heading: "Command and coordination",
          text: "Commanders can manage resource allocation, orders of battle and synchronization directly in JADIS, track air tasking and airspace control orders, log incidents such as border violations through a structured reporting workflow, and run military briefings straight from the live situation picture instead of compiling screenshots into separate presentation tools."
        },
        {
          heading: "Secure communications and collaboration",
          text: "Operators can send military messages, chat, hold voice and video calls, share documents and coordinate schedules without leaving the JADIS workstation, reducing the need to switch between separate communication systems during time-critical operations."
        },
        {
          heading: "Cross-domain and coalition information sharing",
          text: "JADIS supports a federated, low-hierarchy information network rather than a single central point of control, allowing sensor data, situation pictures and tactical information to be shared securely across domains, agencies, military branches and nations.",
          image: {
            src: "assets/products/jadis/jadis-federated-network.webp",
            alt: "Diagram of JADIS's federated all-domain network connecting multiple nations and military branches through a shared mission network",
            width: 1400,
            height: 901
          }
        }
      ],
      typicalApplications: [
        "Coalition command centers",
        "Air support operations",
        "Dismounted / deployed soldier operations",
        "Naval and maritime support",
        "Headquarters and command staff",
        "Ground forces",
        "Tactical operations centers"
      ],
      integration: [
        "JADIS integrates with a wide range of sensors, radars and cameras - including Navielektro's own line of radar and camera systems - to enrich the situation picture with live, real-time data. It can also receive and redistribute track information from external command and sensor systems over secure communication paths, including satellite, cellular and radio links, making it suitable even for low-bandwidth environments.",
        "Because JADIS is built on a modular, service-oriented architecture, additional capabilities - from weather and environmental data to third-party sensor feeds - can be added without replacing the underlying platform, keeping integration effort and lifecycle costs manageable as a customer's technical environment evolves."
      ]
    },
    {
      slug: "navilink",
      title: "NaviLink",
      category: "Systems",
      summary: "NaviLink is a tactical data link gateway that lets a single operator manage Link 16, VMF, CoT, FFT and JREAP-C traffic from one system, with seamless integration into the Navielektro MATIS/JADIS common operational picture and enGuard Cross Domain Solution.",
      image: {
        src: "assets/products/navilink/navilink-hero.webp",
        alt: "Diagram of the NaviLink system architecture showing data link protocols, the NaviLink Manager, sensor and shooter platforms, and JADIS C2 integration",
        width: 1600,
        height: 1067
      },
      highlights: [
        "All-in-one functionality across all datalink information sources",
        "Easy deployment with a low installation footprint",
        "Ease of operation - one operator can run all Links from a single system and UI",
        "Designed for secure and classified operating environments",
        "Optional support for security labelling",
        "Seamless integration with the Navielektro enGuard Cross Domain Solution",
        "High level of integration with Navielektro MATIS/JADIS C2 track management",
        "Deployable as a hardened embedded appliance or a virtualized solution"
      ],
      overview: [
        "A key requirement for any modern fighting force is an integrated communications network that lets every asset share tactical information with each other and with other branches or allied forces. Interoperable Tactical Data Link (TDL) systems are a key component of that integration - virtually all major systems rely on TDL to convey the critical tactical data behind a common view of the battle space.",
        "Many existing TDL deployments only support single-domain operation, depend on third-party functionality that adds cost and complexity, and require specialized technicians to operate - leaving operational gaps during deployment. Navielektro built NaviLink so war fighters can run all Link-type communications from a single platform, with one operator, one system and one UI.",
        "NaviLink is part of the Navielektro MATIS and JADIS product family but runs as a fully autonomous subsystem - usable standalone or integrated with MATIS/JADIS. By consolidating functionality that would otherwise require several separate systems, NaviLink reduces the installation footprint, the number of operators needed to run it, and the overall integration complexity, and it has been built from the ground up for use by a small team."
      ],
      overviewImage: {
        src: "assets/products/navilink/navilink-domains.webp",
        alt: "Diagram showing sensor and shooter platforms connected through national and coalition mission network security domains",
        width: 1600,
        height: 1137
      },
      operationalUse: [
        {
          heading: "Data link and protocol support",
          text: "NaviLink supports the most critical data links used to compile the situation picture, including FFT, JREAP-C, VMF, CoT and ASTERIX, and is extendable to further data links and domain-specific solutions. The feature set and the number of simultaneous Link endpoints depend on the license provided."
        },
        {
          heading: "Common operational picture and C2 integration",
          text: "NaviLink integrates seamlessly with Navielektro C2 systems so the MATIS/JADIS common operational picture can receive information from the configured Data Links, fusing and correlating track information with the overall picture. Selected details from the COP can also be transmitted back to a Link system to enhance the situational awareness of its users."
        },
        {
          heading: "Centralized management and monitoring",
          text: "The NaviLink Manager software suite configures every supported Data Link system, gives a high-level dashboard view of operational status and key performance indicators, and lets operators with sufficient access rights monitor the actual message flow through the system for each supported Link. Access rights can be set per operator depending on whether they monitor and operate the system or configure additional connectivity.",
          image: {
            src: "assets/products/navilink/navilink-manager-ui.webp",
            alt: "Screenshot of the NaviLink Manager's Tactical Datalink Configurator showing configured data links and their status",
            width: 1548,
            height: 477
          }
        },
        {
          heading: "Optional link forwarding and translation",
          text: "NaviLink can forward and translate information between FFT, JREAP-C, VMF and CoT - for example relaying legacy NFFI or interoperable radio data into the FFT system, or translating CoT and VMF messages to and from the J-Series link systems. Forwarding rules can be adjusted with predefined translation rules or extended with plugins to meet mission-specific needs.",
          image: {
            src: "assets/products/navilink/navilink-forwarding-matrix.webp",
            alt: "Screenshot of the NaviLink Manager's transmit/receive forwarding matrix for configuring which data link participants exchange information",
            width: 695,
            height: 560
          }
        },
        {
          heading: "Information assurance",
          text: "NaviLink is built on the Navielektro Common Service Framework and designed for secure and classified operating environments. Security relies heavily on PKI, with a separate management network protected by two-factor authentication and TLS-encrypted control connectivity, and the system security log records all activity."
        }
      ],
      typicalApplications: [
        "Joint and coalition C2 networks",
        "Link 16 interoperability",
        "VMF and CoT/ATAK integration",
        "Friendly Force Tracking (FFT)",
        "Cross-domain (CDS) data exchange",
        "Deployed and shipboard tactical networks"
      ],
      integration: [
        "NaviLink integrates with the Navielektro MATIS/JADIS C2 system's track management, fusing configured Data Link information into the common operational picture. User access and authorization can be managed through MATIS/JADIS, or NaviLink can run as a standalone system with its own supporting services.",
        "For cross-domain environments, NaviLink offers seamless integration with the Navielektro enGuard Cross Domain Solution, enabling the exchange of Link-16, FFT, VMF and CoT information between separate security domains depending on system licensing, with forwarding and translation rules that can be extended with plugins for mission-specific requirements."
      ]
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

  // --- Product categories: drives the header product mega-menu and the footer
  // product list (see renderProductMenu in script.js). Order here is the display
  // order in both places. menuBlurb is the short line shown only in the header
  // dropdown; label is the visible category name (may differ from the category
  // key used on products, e.g. Tactical Display Framework -> "Software Platform").
  const productCategories = [
    { key: "Systems", label: "Systems", menuBlurb: "Situational awareness & command" },
    { key: "Modules", label: "Modules", menuBlurb: "Operational workflow modules" },
    { key: "Sensors", label: "Sensors", menuBlurb: "Radar, CCTV & optronics" },
    { key: "Security", label: "Security", menuBlurb: "Cyber & infrastructure protection" },
    { key: "Weather", label: "Weather", menuBlurb: "Environmental information" },
    { key: "Voice Communication", label: "Voice Communication", menuBlurb: "Control room & tactical voice" },
    { key: "Tactical Display Framework", label: "Software Platform", menuBlurb: "Tactical Display Framework" }
  ];

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
      relatedProducts: ["JADIS", "CISE", "Critical Infrastructure Protection"]
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
    productCategories,
    services,
    references,
    news,
    industriesHome,
    industries
  };
})();
