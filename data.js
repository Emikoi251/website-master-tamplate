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
      slug: "deployed-soldier",
      title: "Deployed Soldier",
      category: "Systems",
      summary: "Deployed Soldier is a rugged tablet system that extends Navielektro's situational awareness and command-and-control capabilities to the individual warfighter, sharing a common operating picture between every echelon from the deployed soldier to headquarters.",
      image: {
        src: "assets/products/deployed-soldier/deployed-soldier-hero.webp",
        alt: "Soldier reading a rugged tablet in the field",
        width: 1600,
        height: 1067
      },
      highlights: [
        "Puts situational awareness and command-and-control capabilities directly in the hands of every warfighter",
        "Shares time-critical information between command levels to support faster, better-informed decisions",
        "Standards-based approach built around the OODA loop",
        "Designed for secure and classified operating environments",
        "Operates over virtually any communications network, including bandwidth-constrained links",
        "Can work as a standalone fire-spotting solution, compiling and sharing its own situation picture",
        "Optional built-in NaviCall secure video and voice calling",
        "Easy deployment and information sharing from the highest command authority to the lowest"
      ],
      overview: [
        "In military missions, the ability to act faster and more accurately than the opponent depends on how quickly time-critical information moves between command levels. Sharing that information across every echelon shortens the OODA (Observe, Orient, Decide, Act) loop and improves the odds of mission success.",
        "Deployed Soldier extends Navielektro's MATIS-based situational awareness and command-and-control capabilities to a rugged tablet carried by the individual soldier. It can operate as part of the overall picture compilation - identifying tracks and platforms for the wider operating picture - or as a standalone fire-spotting solution that compiles its own situation picture from manually entered information, connected sensors, or cross-bearing data shared between several units.",
        "The system provides FMN-compliant communication and is built to operate over virtually any communications network, from tactical radios to cellular and satellite links, and is optimized for the bandwidth-constrained conditions typical of deployed operations."
      ],
      overviewImage: {
        src: "assets/products/deployed-soldier/deployed-soldier-network.webp",
        alt: "Diagram showing a deployed soldier's tablet connected to sensors such as radar, laser range finder and GPS, and to headquarters via field radio, tactical radio network, LTE and Iridium satcom",
        width: 1600,
        height: 1348
      },
      operationalUse: [
        {
          heading: "Situation picture and Blue Force tracking",
          text: "The tablet shows the position of friendly forces operating on the same network alongside anything shared from the operations center, and the soldier can compile and transmit their own situation picture back to headquarters at any time.",
          image: {
            src: "assets/products/deployed-soldier/deployed-soldier-tablet-ui.webp",
            alt: "Rugged Navielektro tablet displaying a satellite map with tracked units",
            width: 964,
            height: 840
          }
        },
        {
          heading: "Targeting, mapping and sensor integration",
          text: "Forward-based spotter teams can measure range and bearing to a target and report it straight to the fire coordination center, supported by vector and raster maps and satellite or aerial imagery. The tablet connects to a wide range of track sources - including radar, AIS, ADS-B and laser range finders - and can be extended with CoT support through MATIS/JADIS ATAK integration."
        },
        {
          heading: "Communications in any environment",
          text: "Deployed Soldier is designed to keep working when bandwidth is scarce, operating over legacy radios, cellular networks, tactical radio systems or satellite communications, with an optional built-in secure video and voice calling capability for when a richer connection is available."
        },
        {
          heading: "Military messaging, chat and MEDEVAC",
          text: "Soldiers can exchange formal military messages and chat with each other and with the operations center over any available communication channel, including a low-bandwidth radio gateway. Built-in 9-liner reporting lets a soldier report incidents such as Troops in Contact or MEDEVAC needs in a few keypresses, feeding directly into the relevant incident reporting systems at headquarters.",
          image: {
            src: "assets/products/deployed-soldier/deployed-soldier-medevac.webp",
            alt: "Diagram showing a MEDEVAC report flowing from a wounded soldier's tablet through radio and XMPP service to an operator at headquarters",
            width: 1600,
            height: 537
          }
        },
        {
          heading: "Security and mission planning",
          text: "The tablet is designed for secure and classified operating environments, with smart-card based user authentication and a self-destruct capability that erases data and destroys encryption keys if the device is at risk of falling into the wrong hands. An optional mission planning tool can pre-load each tablet with an encrypted mission kit covering radio frequencies, crypto definitions, maps and unit assignments."
        }
      ],
      typicalApplications: [
        "Forward-deployed and dismounted units",
        "Fire spotting and targeting support",
        "Blue Force tracking",
        "Military messaging and chat",
        "TIC and MEDEVAC reporting",
        "Bandwidth-constrained tactical communications"
      ],
      integration: [
        "Deployed Soldier is built on the Navielektro MATIS platform, extending its situational awareness and command-and-control capabilities down to the individual soldier, and supports MATIS/JADIS ATAK integration for chat, tactical drawings, video and CoT track sharing with Android ATAK systems.",
        "The tablet connects to legacy sensors and radios through the Navielektro Tactical Radio Interface (NETRI), alongside built-in support for cellular, tactical radio and Iridium satellite communications, letting it operate across FMN-compliant mission networks and existing military infrastructure."
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
    },
    {
      slug: "atak-integration",
      title: "MATIS/JADIS ATAK Integration",
      category: "Modules",
      summary: "MATIS/JADIS ATAK Integration connects the Navielektro MATIS/JADIS C2 solution with the widely used Android Tactical Assault Kit (ATAK), sharing tracks, tactical drawings, video and chat between the two platforms so every echelon - from the operations center to the individual soldier - works from the same common operating picture.",
      image: {
        src: "assets/products/atak-integration/atak-integration-hero.webp",
        alt: "Diagram of a NaviLink CoT Router with ATAK Gateway connecting WinTAK and ATAK/CoT users to the MATIS/JADIS C2 DCIMS",
        width: 1600,
        height: 1067
      },
      highlights: [
        "WinTAK-like operation within the JADIS platform, with all of JADIS's own functionality retained",
        "Real-time tracking of both platforms' users on a single shared map",
        "Usable at every level, from the operations center to the MATIS dismounted soldier tablet",
        "Brings MATIS/JADIS-supported sensors and systems into the ATAK ecosystem",
        "Secure information sharing across security domains via the Navielektro enGuard Cross Domain Solution",
        "Bidirectional translation between ATAK binary data and CoT for high interoperability",
        "Chat bridging between MATIS/JADIS XMPP chat rooms and ATAK Teams",
        "Shares track data, tactical drawings and video feed between the two systems, with optional NaviCall voice integration"
      ],
      overview: [
        "In modern tactical environments, mission success depends on real-time situational awareness and communication reaching every domain, down to the lowest tactical level. Collaboration between the field and command and control relies on a clear Common Operating Picture (COP) that can be shared across every connected system and user - and ATAK, the Android Tactical Assault Kit, has become one of the most widely used tools for exactly that, giving every warfighter access to real-time situational awareness from an Android device.",
        "MATIS/JADIS ATAK Integration connects the Navielektro MATIS/JADIS C2 solution to ATAK, letting the C2 system operate in a similar fashion to ATAK while keeping the full functionality of the JADIS platform. The integration can be used at any level of the MATIS/JADIS system, from the operations center to a deployed or dismounted MATIS soldier system, enhancing situational awareness through communication, coordination and information sharing between users of the two platforms.",
        "Because ATAK is used so widely across allied militaries, the integration is particularly valuable in joint and coalition operations, where the Navielektro enGuard Cross Domain Solution lets MATIS/JADIS and ATAK systems operating in different security domains exchange critical information safely and consistently - extending MATIS/JADIS interoperability and ISR information to the hands of every warfighter."
      ],
      overviewImage: {
        src: "assets/products/atak-integration/atak-integration-crossdomain.webp",
        alt: "Diagram showing a UAV feed and ATAK/CoT users on both sides of an enGuard Cross Domain Solution reaching a MATIS/JADIS C2 DCIMS and operations center",
        width: 1600,
        height: 914
      },
      operationalUse: [
        {
          heading: "Shared common operating picture",
          text: "The integration provides bidirectional sharing of track and target data using the standard CoT message, so track information generated on MATIS/JADIS appears on ATAK devices and vice versa, with detailed access control over the message flow based on team membership and message sender or recipient.",
          image: {
            src: "assets/products/atak-integration/atak-integration-track-sharing.webp",
            alt: "ATAK device displaying track data sent from the MATIS/JADIS track service",
            width: 1762,
            height: 832
          }
        },
        {
          heading: "Chat, tactical drawings and video",
          text: "Chat between named MATIS/JADIS XMPP chat rooms and ATAK Teams is bridged automatically, and users can share tactical drawings and geographical areas between the two systems. MATIS/JADIS-supported sensors and systems can also be brought into the ATAK ecosystem, including Full Motion Video with an associated CoT data feed.",
          image: {
            src: "assets/products/atak-integration/atak-integration-tactical-drawings.webp",
            alt: "MATIS/JADIS tactical drawing layers displayed alongside the same drawings shown on an ATAK device",
            width: 1600,
            height: 836
          }
        },
        {
          heading: "Cross-domain operation",
          text: "The Navielektro enGuard Cross Domain Solution lets track data, video feed, tactical drawings, chat messages, voice and other situational awareness information move safely between security domains, so the right people can access it at the right time regardless of the environment, security domain or platform they are operating on."
        },
        {
          heading: "Available at every echelon",
          text: "A MATIS tablet user can compile a situation picture in the field and operate as a forward or deployed tactical command post, correlating and fusing it in cooperation with an operations center, and can verify and augment a picture from an unclassified ATAK system before relaying it onward to other echelons or security domains."
        }
      ],
      typicalApplications: [
        "Joint and coalition operations",
        "Cross-domain information sharing",
        "Dismounted and deployed units",
        "Full Motion Video and ISR sharing",
        "Tactical chat and messaging",
        "Common Operating Picture at every echelon"
      ],
      integration: [
        "The CoT Router and ATAK Gateway functionality behind the integration are built into the NaviLink TDL solution, translating between ATAK's binary data format and CoT so that MATIS/JADIS- and ATAK-connected users and units can exchange track and target data regardless of which format they use.",
        "For joint and coalition use cases, the integration works together with the Navielektro enGuard Cross Domain Solution to move track data, video, tactical drawings, chat and voice safely between security domains, and connects with NaviCall to enable voice communication between ATAK users and other voice system users."
      ]
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
