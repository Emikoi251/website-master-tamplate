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
      summary: "Answering your every traffic management need.",
      featuredTileImage: {
        src: "assets/products/maritas/maritas-overview-thumbnail.webp",
        alt: "Aerial view of a busy port with container ships, cranes and harbor vessels",
        width: 480,
        height: 258
      },
      image: {
        src: "assets/products/maritas/maritas-hero.webp",
        alt: "Large cargo vessel at sea, representing the traffic MARITAS monitors and manages",
        width: 1600,
        height: 878
      },
      overviewHeading: "Answering your every traffic management need",
      overview: [
        "Maritime Traffic Authority System. Navielektro has several decades of experience within the field of maritime traffic management. As a result, we have developed a family of advanced traffic information application sensors, which form a system that can be used for VTS (Vessel Traffic Service) or Coastal Surveillance. Our MARITAS system is designed to support the user in on-going operations by providing a situation picture that is accurate and easy to comprehend, be these operations observed by sensors or based on reports or plans. The provided solutions also assist the user in comprehending the situation by providing tools for analysis that either automatically or semi-automatically aid the user in the process of the orientation and decision making process. MARITAS is fully compliant with SafeSeaNet and IALA V-128."
      ],
      operationalUse: [
        {
          heading: "Aiding the operator",
          text: "All of the data collected by MARITAS (including AIS track data, radar data, weather data, AtoN data and manual data) is fused into a user-defined common operational picture. Operators are presented with a single, comprehensive picture of the entire surveillance area, enabling them to quickly assess the situation at hand. MARITAS provides the operator with a set of advanced, automated tools that alert the operator regarding various safety and security related conflicts. Performance of surveillance tasks is further ameliorated through intuitive window layouts and controls."
        },
        {
          heading: "Sensor management and presentation",
          text: "MARITAS provides integration to a very wide variety of sensors, and can be used to control sensors and present sensor information as part of the situation picture. The system is also capable of controlling various sensor systems through middleware services. Sensors can be displayed as part of the situation picture, so users need only select which sensor source to use. This means users can control radar and CCTV directly from the workstation. Integrated camera sleuthing is also possible, so the chart view and sensors can be set to track objects on chart.",
          theme: "tinted"
        },
        {
          heading: "Click to control",
          text: "Control radar or camera sensors directly from the chart view simply by clicking a sensor. Adjusting radar controls is as simple as selecting a radar and right-clicking to open its detailed control menu. Because sensors are integrated as part of the user interface, you can adjust settings on the fly, without ever leaving the chart view.",
          image: {
            src: "assets/products/maritas/maritas-click-to-control.webp",
            alt: "Chart view with a radar sensor control dialog opened after clicking a radar on the map",
            width: 600,
            height: 296
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "e-Navigation",
          text: "MARITAS assists operators in information sharing, both from ship to shore and shore to ship. Information may be shared between operators and vessels (such as icebreakers) connected to MARITAS, so both parties can view the same situation picture. Vessels not connected to the system can also send their route plans to operators and receive feedback, enhancing the safety at sea.",
          image: {
            src: "assets/products/maritas/maritas-e-navigation.webp",
            alt: "Chart view with a route and pilotage boarding plan dialog open",
            width: 600,
            height: 294
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          heading: "Databases and ship reporting",
          text: "MARITAS provides operators with multiple solutions for managing and storing vessel information. Users can import data from existing vessel databases or maintain databases of their own. The collected data can be used to identify tracks, sparing the operators from manually entering identification data for each track that enters the recognized maritime picture. To help operators maintain a current view of vessels about to enter the operator's area of responsibility, MARITAS also offers a Ship Reporting System (SRS). The SRS handles an automated flow of ship report information between reporting parties and assists the operator in the completion of ship reports.",
          image: {
            src: "assets/products/maritas/maritas-databases-ship-reporting.webp",
            alt: "Vessel database search dialog over a chart view, alongside a ship reporting results table",
            width: 600,
            height: 261
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "Port Management",
          text: "MARITAS can support port authorities in their daily tasks. Navielektro offers a port administration and management system that can be completely integrated with MARITAS, so that operators can manage information and events related to port visits effectively. Navielektro's port management system enables arrival and departure management, vessel port history, cargo and passenger management as well as vessel service order management – all presented as an integrated part of the RMP.",
          image: {
            src: "assets/products/maritas/maritas-port-management.webp",
            alt: "Chart view with a port visit database dialog listing scheduled, arriving, berthed and departing vessels",
            width: 550,
            height: 276
          },
          variant: "split",
          imagePosition: "left"
        }
      ],
      typicalApplicationsVariant: "backgroundImage",
      typicalApplicationsHeading: "Supported missions",
      typicalApplications: [
        "Vessel identification",
        "Voyage management",
        "Traffic/maritime assistance",
        "Route assignment and planning",
        "Aids to Navigation management",
        "e-Navigation",
        "Reporting",
        "Port operations",
        "Law enforcement",
        "Customs",
        "Fleet management",
        "Search and Rescue",
        "Pollution control",
        "Patrol and response, including interdiction, maritime patrol and anti-piracy",
        "Border control and securing economic interests"
      ],
      typicalApplicationsImage: {
        src: "assets/products/maritas/maritas-supported-missions.webp",
        alt: "Vessel at sea near the coast, representing the range of missions MARITAS supports",
        width: 1600,
        height: 802
      },
      related: ["Track Fusion", "AtoN", "Weather Information", "SAR", "GMDSS", "Port Management"],
      relatedProducts: [
        {
          title: "Track Fusion",
          slug: "trackfusion",
          image: { src: "assets/products/maritas/related-trackfusion.webp", alt: "Communications mast with sensor and network visualization", width: 480, height: 258 }
        },
        {
          title: "AtoN",
          slug: "aton",
          image: { src: "assets/products/maritas/related-aton.webp", alt: "Orange aids-to-navigation buoy with a Finnlines vessel in the background", width: 480, height: 258 }
        },
        {
          title: "Weather Information",
          slug: "newis",
          image: { src: "assets/products/maritas/related-weather-information.webp", alt: "Close-up view of water droplets and bubbles", width: 480, height: 258 }
        },
        {
          title: "SAR",
          slug: "sar",
          image: { src: "assets/products/maritas/related-sar.webp", alt: "Yellow rescue helicopter flying along a coastal cliff", width: 480, height: 258 }
        },
        {
          title: "GMDSS",
          slug: "gmdss",
          image: { src: "assets/products/maritas/related-gmdss.webp", alt: "Diagram of maritime distress communication systems including COSPAS-SARSAT, INMARSAT, EPIRB and SART", width: 480, height: 258 }
        },
        {
          title: "Port Management",
          slug: null,
          image: { src: "assets/products/maritas/related-port-management.webp", alt: "Aerial view of a port with containers, cranes and barges", width: 480, height: 258 }
        }
      ],
      sourceUrl: "https://www.navielektro.fi/maritas.html"
    },
    {
      slug: "matis",
      title: "MATIS C2",
      category: "Systems",
      summary: "MATIS C2 is Navielektro's Maritime Awareness Tactical Information System for command and control - an integrated, federated platform that brings situational awareness, surveillance, messaging, planning and voice applications together in one system for naval, joint, air and army operations.",
      featuredTileImage: {
        src: "assets/products/matis/matis-overview-thumbnail.webp",
        alt: "Naval patrol vessel near a rocky, forested coastline",
        width: 480,
        height: 258
      },
      image: {
        src: "assets/products/matis/matis-hero.webp",
        alt: "Operator standing before a wall of chart displays in a MATIS C2 operations center",
        width: 1600,
        height: 1067
      },
      highlights: [
        "Federated information sharing without a single point of control - a truly network-enabled framework",
        "Reliable, high-quality integrated situation picture and user-defined common operational picture (UCOP)",
        "Designed for secure and classified operating environments",
        "Customizable look and feel of the common operational picture",
        "Tracks air, land and naval assets from live data feeds, with rapid manual creation and updates",
        "Decision-making aids that support the OODA loop, reducing operator workload and response times",
        "Secure information exchange between agents, including across security domains via the Navielektro enGuard Cross Domain Solution",
        "Capable of running the most vital operations from a single system, with low life-cycle cost"
      ],
      overview: [
        "Modern military forces face an increasing range of missions and tactical scenarios, with operational needs and scale varying greatly from one deployment to the next. Navielektro built MATIS C2 as a common platform for situational awareness, surveillance, command and control and voice applications, deployable to meet Naval, Joint, Air and Army requirements alike.",
        "MATIS C2 is a comprehensive, operationally flexible solution - the same system supports mission planning and surveillance as well as tactical, targeting, intelligence and federated information exchange activities. It is integrated, open and extendable, designed to ease operator workload and facilitate federated information sharing rather than locking customers into a single fixed configuration.",
        "MATIS C2 has been developed with a strong emphasis on Network Enabled Capability (NEC), offering a large number of interfaces so the system can exchange data with other security, safety or allied systems. This interoperability has been tested every year since 2008 in the NATO CWIX and Bold Quest exercises to confirm it holds up in real-world coalition environments."
      ],
      overviewImage: {
        src: "assets/products/matis/matis-integrated-services.webp",
        alt: "Diagram showing chat, MMHS, LDAP, VTC/VoIP, GPS timing, geospatial services, data link, RMP and FFT services feeding into MATIS C2 to produce a compiled situation picture",
        width: 1200,
        height: 1140
      },
      operationalUse: [
        {
          heading: "Unified operator support",
          text: "Instead of switching between separate stovepiped workstations to compile a situation picture by hand, operators work from one integrated user interface that provides the tools needed to accomplish the task at hand. Automated alarms alert the operator to safety and security-related conflicts as they arise in the situation picture, supported by intuitive window layouts and controls.",
          image: {
            src: "assets/products/matis/matis-alarms.webp",
            alt: "MATIS C2 alarms panel listing unacknowledged operational alarms alongside the chart view",
            width: 1346,
            height: 827
          }
        },
        {
          heading: "Situational awareness and the common operational picture",
          text: "MATIS C2 fuses data from AIS, radar, weather sources and manual entry into a User-defined Common Operational Picture (UCOP), letting operators decide what information is essential to the mission at hand. Track location, status and other relevant factors are displayed in real time, and any operator at any workstation can access the same picture when swift action is required."
        },
        {
          heading: "Resource management and ORBAT",
          text: "The ORBAT system can import an order-of-battle hierarchy from a file or another compliant system and present resource use in a time-based synchronization matrix. It integrates ORBAT data, platform and equipment database information and MMHS status messages automatically, avoiding the tedious manual data entry that this kind of resource tracking would otherwise require.",
          image: {
            src: "assets/products/matis/matis-orbat.webp",
            alt: "MATIS C2 logistics support panel showing an ORBAT unit hierarchy alongside a topographic chart view",
            width: 1600,
            height: 968
          }
        },
        {
          heading: "Secure messaging, reporting and cross-domain collaboration",
          text: "An integrated Military Message Handling System lets authorized users send and receive messages directly from the workstation, while war diary and incident management tools log actions and events for later review. Built-in military briefing support lets a duty officer present the situation picture directly to senior leaders, and the Navielektro enGuard Cross Domain Solution extends secure collaboration across separate security domains."
        }
      ],
      typicalApplications: [
        "Naval, joint, air and army command and control",
        "Maritime and coastal surveillance",
        "Mission planning and briefing",
        "Federated and coalition information sharing",
        "Incident and resource management",
        "Cross-domain operations"
      ],
      integration: [
        "MATIS C2 is the platform that Navielektro's other products build on and connect to: JADIS extends it with joint all-domain capabilities, NaviLink handles its tactical data link connectivity, EOS and other sensors feed directly into its situation picture, and the Deployed Soldier tablet framework carries MATIS C2 out to the individual soldier.",
        "The system can be deployed on Linux, Windows or cloud infrastructure, either as a turnkey solution with hardened, rugged hardware or on lightweight hardware for smaller installations. Its component-based, open architecture and software development kit let new sensors, processors and third-party extensions be added as requirements evolve, keeping deployment costs down over the system's life cycle."
      ]
    },
    {
      slug: "jadis",
      title: "JADIS",
      category: "Systems",
      summary: "JADIS brings situational awareness, command and control, secure communications and interoperability together in one NATO FMN-compatible platform for coalition and multi-domain operations.",
      featuredTileImage: {
        src: "assets/products/jadis/jadis-overview-thumbnail.webp",
        alt: "Silhouette of a soldier carrying a rifle and pack against a dramatic stormy sky",
        width: 707,
        height: 1000
      },
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
      status: "archived",
      summary: "Intelligent solutions for traffic control.",
      image: {
        src: "assets/products/trafficaware/trafficaware-hero.webp",
        alt: "Long-exposure photo of light trails from vehicles moving through a night-time roundabout and intersection",
        width: 1600,
        height: 940
      },
      overviewHeading: "Intelligent solutions for traffic control",
      overview: [
        "Traffic Information System. Traffic control is facing a myriad of challenges due to the increasing amount of traffic, and traffic surveillance and control systems are in a state of transition. Many operations centers are still using old surveillance systems that are difficult and expensive to develop and maintain, turning integration into a challenge. Flexible, cost-efficient solutions based on open technologies are necessary to match the changing needs of the traffic environment – this is where Navielektro comes in. In order to address the current challenges of ITS environments, Navielektro has developed TrafficAware, a system for intelligent transport and safety. TrafficAware is integrated, open and extendable, and has been designed to ease the operator workload and facilitate federated information sharing."
      ],
      highlights: [
        "Reliable, high-quality integrated situation picture",
        "Highly efficient – capable of processing over 30,000 moving objects at a time",
        "Built-in voice communication and messaging",
        "Reduces operator workload and response times",
        "User-definable design and window layouts",
        "Advanced sensor integration and control",
        "Tools for analysis and presentation of collected information"
      ],
      operationalUse: [
        {
          heading: "Sensor Management and Presentation",
          text: "The modern, open architecture of the system allows a large amount of sensors, information sources and different user interfaces to be connected to the system. The system is capable of managing 100,000+ tracks on a standard processing platform with good real-time capability.",
          image: {
            src: "assets/products/trafficaware/trafficaware-sensor-management.webp",
            alt: "Traffic monitoring dashboard showing a map with sensor icons, a live road camera feed and weather instrument readouts",
            width: 600,
            height: 292
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "Environmental information directly on your desktop",
          text: "Weather information may be viewed directly from a desktop application or as an integrated part of the operational picture. Integration allows users to view weather information on chart, but also to view the data of separate sensors in windows of their own. Sensor information can be presented in varying forms, including graphs and wind dials.",
          theme: "tinted"
        },
        {
          heading: "Radio and Telephony",
          text: "Radio communication can be deployed separately or as an integrated part of the TrafficAware software, allowing calls to be visualized as part of the situation picture. Our solution provides the operator with a fast, reliable and flexible means to communicate with other parties, presenting the user with an interface for communication that is efficient, clear, and easy to use.",
          image: {
            src: "assets/products/trafficaware/trafficaware-radio-telephony.webp",
            alt: "Close-up of a person wearing a radio and telephony headset near their ear",
            width: 450,
            height: 464
          },
          variant: "backgroundImage"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/trafficaware.html"
    },
    {
      slug: "tdf",
      title: "Software Platform",
      category: "Tactical Display Framework",
      summary: "TDF – Tactical Display Framework.",
      image: {
        src: "assets/products/tdf/tdf-hero.webp",
        alt: "Desktop monitor displaying the TDF map interface with sensor and track icons",
        width: 480,
        height: 258
      },
      overviewHeading: "TDF – Tactical Display Framework",
      overview: [
        "Navielektro's solutions run on a highly efficient user interface platform - TDF (Tactical Display Framework). TDF serves as a base for various software modules, which provide functionality to the system. Together, the software modules provided by TDF meet the requirements of even the most demanding surveillance environments.",
        "TDF is well suited for virtually any type of GIS-use where real-time performance is of essence. TDF can perform real-time visualization tasks for operationally demanding applications, such as Command and Control, Vessel Traffic Management, homeland defense, surveillance, air traffic monitoring and management security based assets. The major requirement of any system is to receive data from multiple sources and combine it into a unified common operational picture. TDF enables users to access the available data any time, any place – combining the information into a clear and up-to-date presentation."
      ],
      highlights: [
        "State of the art mapping toolkit",
        "Presentation of radar video",
        "Presentation of operator defined geographical objects",
        "Presentation of weather information",
        "Presentation of tracks",
        "Presentation of track history and statistics",
        "Presentation of replay data",
        "Sensor control and integration",
        "Presentation of CCTV video",
        "Integrated Voice Communication Services",
        "High information security",
        "Comprehensive, end-to-end PKI integration"
      ],
      operationalUse: [
        {
          heading: "A system that grows with you",
          text: "TDF is component based, which means that functionality can be added in the form of software components, making the system completely scalable according to the needs of each customer. New software modules can be added as new requirements arise, including third-party software. The flexible nature of TDF guarantees a long life cycle for any system based on the platform."
        },
        {
          text: "TDF is widely used for both civilian and military situational awareness. The software platform provides customers with the following functionalities:",
          theme: "tinted"
        },
        {
          heading: "Application domains",
          text: "Navielektro's TDF has been in operational use since 2001, and has been used by hundreds of operators around the world. The continuous development of TDF is based on multiple real-world application scenarios within different application domains, with user feedback and design input as a key part of the development process. TDF has been deployed in a wide variety of different operational scenarios, ranging from VTS, Command & Control, Network Operation & Maintenance, Aids to Navigation Management, Air Traffic Monitoring, Web Services and Mobile C2 platforms. The primary focus has been on maritime applications, although the TDF platform is well suited for virtually any kind of GIS use where real-time performance is of essence. TDF has been localized to 4 different languages and currently supports: English, Swedish, Finnish and Romanian. The system may relatively easily be localized to any UTF-8 supported language, such as Chinese. All system MMI resources are stored in properties files, allowing easy localization."
        },
        {
          heading: "Multi-fuel chart operation",
          text: "TDF is capable of simultaneously handling a wide variety of different chart formats, such as NGA VPF VMAP, IHO S/57 v3.1, ESRI shapes and other open de-facto industry standard formats. TDF supports the OGC chart data-model, and is capable of presenting multi-fuel information as layers, or by combining the information in an operator-controlled way. TDF is capable of managing different geographical references, and the system is capable of background distribution of the chart database in order to ensure that the operator is always presented with the latest chart information – without user intervention.",
          image: {
            src: "assets/products/tdf/tdf-multi-fuel.webp",
            alt: "Collage of map, satellite, road-camera and weather instrument displays representing TDF's multi-format chart and sensor presentation",
            width: 600,
            height: 325
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/tdf.html"
    },
    {
      slug: "userinterfaces",
      title: "User Interfaces",
      category: "Tactical Display Framework",
      summary: "User interfaces for every operation.",
      image: {
        src: "assets/products/userinterfaces/userinterfaces-hero.webp",
        alt: "A desktop monitor, rugged laptop, rugged tablet and smartphone all displaying the same tactical situation picture",
        width: 1200,
        height: 469
      },
      overviewHeading: "User interfaces for every operation",
      overview: [
        "Navielektro provides users with user interfaces that are easy to use, regardless of whether the user is working on a fixed workstation, laptop, tablet, smartphone or a web application."
      ],
      operationalUse: [
        {
          heading: "TDF Operator Workstation",
          text: "The TDF Operator Workstation (TDF OWS) is well suited for situational awareness and surveillance systems, and runs on high-performance PCs and laptops. Supported operating systems include Windows, Linux and Mac OS X. TDF OWS can present real-time radar video, plot information, CCTV video and is capable of voice and telephony integration. The software is also capable of presenting a wide variety of geospatial information, ranging from OGC standards to equivalent IHO mapping standards. The TDF mapping toolkit is customizable and enables users to adapt the presentation of the situation picture to various missions and operational needs."
        },
        {
          heading: "TDF Large Screen Display",
          text: "Our situational awareness solution can be extended to include TDF Large Screen Display, which is used for managing display walls in operations centers or rapid deployment environments. Large screen displays make it possible for operators to observe operations and the situation picture at hand on a larger scale, allowing operators to quickly get a general overview of the situation picture.",
          image: {
            src: "assets/products/userinterfaces/userinterfaces-lsd.webp",
            alt: "Silhouette of an operator seated in front of a large multi-panel display wall showing tracks and charts",
            width: 910,
            height: 463
          },
          variant: "backgroundImage"
        },
        {
          heading: "High performance, low cost",
          text: "TDF LSD is deployed using standard PC hardware, making it an affordable and highly flexible solution.",
          theme: "tinted"
        },
        {
          heading: "TDF Onboard",
          text: "Navielektro's solution for vessels allows them to carry a mobile operations center that is integrated to the situational awareness system. The vessel solution enables the vessel to produce and maintain an autonomous RMP using its own integrated sensors, but the vessel can also tap into the picture provided by fixed operations centers. Having JMAP TDF on board a vessel allows both operators on board and operators in command centers to consume the Recognized Maritime Picture (RMP) in a distributed fashion. Our solution is versatile, allowing vessels to exchange the situation picture with fixed surveillance centers, but optionally also with vessels acting as Forward Deployment headquarters. Vessels can then further enrich the situation picture while patrolling by providing comments or identification information, which can be shared with other operations centers. Tracks that have been tracked by the sensors of the vessel can be transmitted to the MOC and used as track components, further enhancing the reliability of the compiled situation picture.",
          image: {
            src: "assets/products/userinterfaces/userinterfaces-onboard.svg",
            alt: "Diagram of a mobile operations center showing TDF OWS workstations connected to sensors, data links, navigation and communication equipment, linking back to a shore-based control center",
            width: 998,
            height: 1000
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "TDF Smartphone",
          text: "Our TDF platform can also be extended to smartphones, where its primary function is to display real-time track information. Using TDF Smartphone, users can access the situation picture directly from their phones. Just like TDF Touch, the smartphone application supports basic track information, information filtering and event reporting. Built-in tracking allows users to report their own position and operational status.",
          image: {
            src: "assets/products/userinterfaces/userinterfaces-smartphone.webp",
            alt: "Smartphone showing a current-position map screen next to icons for reporting, vessels, alerts and filtering",
            width: 450,
            height: 308
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          heading: "TDF Mobile",
          text: "Navielektro also offers an integrated mobile application, which serves as an extension of TDF. TDF Mobile primarily displays real-time track information, so that users can access a comprehensive situational picture on-the-go. Aside from enabling users to view basic track information, the application also allows information filtering and provides a means of reporting events. Thanks to a built-in tracking functionality, users may report their own position and operational status – quickly and accurately. Users can also pass on observations regarding their environment as updates with a tagged position.",
          image: {
            src: "assets/products/userinterfaces/userinterfaces-mobile.webp",
            alt: "Rugged laptop open and displaying a nautical chart application",
            width: 442,
            height: 500
          },
          variant: "split",
          imagePosition: "right"
        }
      ],
      typicalApplicationsTheme: "tinted",
      typicalApplicationsHeading: "Advantages",
      typicalApplications: [
        "All operators with similar assignments are seated in the same direction, facilitating communication between operators",
        "Operators are given the same view of the situation picture",
        "Operators can call up virtually any window from their workstation to be presented on the large screen.",
        "When an operator leaves his/her station, other operators can follow the empty station from their own working position"
      ],
      sourceUrl: "https://www.navielektro.fi/userinterfaces.html"
    },
    {
      slug: "sdk",
      title: "Software Development Kit",
      category: "Tactical Display Framework",
      summary: "Expand your system as new needs occur",
      overviewHeading: "Expand your system as new needs occur",
      overview: [
        "When procuring situational awareness systems, the key aspects to consider are continuous development and mutual coherence. In order for operators to perform their duties, they may have to use several different types of software – often simultaneously. The great number of software and the divergence between user interfaces needlessly complicates the job of the operator. As vendor lock-in is common with many situational awareness systems, they are also not particularly cost-efficient.",
        "Navielektro offers a Software Development Kit (SDK) that allows our software to be expanded through creation of third party software assets, such as user interface components, background services and data source adapters. Using our SDK, developers can integrate distributed systems and sensors into the our software. This approach ensures cost-efficient system development that can continue post deployment, guaranteeing a long life-cycle for Navielektro's systems."
      ],
      operationalUse: [
        {
          heading: "Our TDF, your way",
          text: "Navielektro's Tactical Display Framework is highly modular in nature, allowing software components to be added according to the needs of the customer. We aim to provide our customer with as integrated a user experience as possible, taking a single window approach that will allow users to utilize all of the software functionality from just one window."
        },
        {
          text: "The TDF SDK is essentially an off-the-shelf framework for creating and customizing situational awareness systems. Using the TDF software as a base, developers can integrate distributed and sensors by utilizing our SDK. This way customers can develop components of their own, enhancing and adding to the software. Developing additional components using the TDF SDK also ensures a unified user interface.",
          image: {
            src: "assets/products/sdk/sdk-toolbox.webp",
            alt: "Illustration of a toolbox containing a magnifying glass, map, wrench, gear and funnel, representing the SDK's development tools",
            width: 502,
            height: 508
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "Common Service Framework: a back-end SDK",
          text: "The success of the TDF product led us to a develop a component-based software framework for back-end services as well: a Common Service Framework (CSF) that utilizes the OSGi service concept. The CSF and its associated components are essentially a family of powerful yet simple components built on Java version 8 or later of the Java SE Runtime Environment (JRE). The framework provides the core functionality needed in order to provide situational awareness and related mission critical applications within the domain of traffic management, command and control and general situational awareness applications. Just as for our TDF, Navielektro offers a and SDK that allows third-party developers to create applications using the CSF.",
          theme: "tinted"
        },
        {
          heading: "Combined power",
          text: "When the TDF and CSF are implemented in a joint way, the approach to software development and delivery becomes profoundly different. Usually, system architects and developers have to decide where to run a specific feature very early on. This can become a problem, as the computing environment develops so quickly that is difficult to commit to a decision on where to run a specific piece of developed code. When Navielektro's CSF and TDF are combined, however, they enable developers to share important functional components between the user interface and the service framework.",
          image: {
            src: "assets/products/sdk/sdk-joint-architecture.svg",
            alt: "Diagram of shared components spanning the Tactical Display Framework front-end and the Common Service Framework back-end",
            width: 919,
            height: 714
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          text: "This means that the developer can leave decisions regarding what hardware platform or execution environment to use until later. As a result, the actual installation of an application becomes more of a component deployment issue, where developers and architects can decide whether the functionality is to be located in the service back-end (the CSF) or within the TDF on a case-by-case base."
        },
        {
          heading: "Key Features",
          text: "Navielektro's SDK enables a collaborative environment and contains all the development tools needed to build applications for the CSF and TDF. Combining TDF and CSF enables sharing of functional OSGi modules between the frameworks, providing a cost-effective means of developing situational awareness functionality.",
          theme: "dark"
        },
        {
          heading: "Software Architecture",
          image: {
            src: "assets/products/sdk/sdk-architecture.webp",
            alt: "Diagram of the SDK software architecture showing phone, tablet, JMAP and i-Maps Portal clients connected to services including routing, geocoding, weather, database, ticketing, workflow, messaging and authorization",
            width: 920,
            height: 541
          },
          variant: "wideImage",
          theme: "tinted"
        }
      ],
      typicalApplicationsHeading: "Included in the SDK",
      typicalApplicationsTheme: "dark",
      typicalApplications: [
        "Application Programming Interface (API)",
        "Developer's Guide",
        "Numerous code examples",
        "Menu configuration tool",
        "Data modeling tools"
      ],
      sourceUrl: "https://www.navielektro.fi/sdk.html"
    },
    {
      slug: "cise",
      title: "CISE",
      category: "Security",
      status: "archived",
      summary: "Part of Navielektro's Security portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/cise.html"
    },
    {
      slug: "cybersecurity",
      title: "Cyber Security",
      category: "Security",
      summary: "Built-in security in even the most demanding conditions",
      overviewHeading: "Built-in security in even the most demanding conditions",
      overview: [
        "As technology progresses, communications and operations are increasingly conducted electronically, over networks and data links. But as we embrace technology, we also have to be aware of the threats posed by it. How do we ensure that communications and information remain secure, and that sensitive information remains confidential? In Navielektro's systems, security has been built into our systems from the start, in order to accommodate differing user needs. High stakes call for high security, and when our systems are operated in high security environments we can provide increased security – optionally integrated into our products."
      ],
      highlights: [
        "Secure sharing of data between high and low security environments",
        "Secure and transparent user authentication management",
        "Delegated administration in large organizations",
        "Cost-effective, uncomplicated mechanisms that simplify the end-user experience",
        "Key and certificate management services, which enable encryption and validation of data and users through digital signatures",
        "Support for online web based certificate registration",
        "Support for SSL, S/MIME, SET certificates",
        "Support for smart card production"
      ],
      operationalUse: [
        {
          heading: "Data Diodes",
          text: "Navielektro's systems can be set up to use data diodes in order to guarantee information security, as diodes only allow data to travel in one direction, used in guaranteeing information security. These diodes serve as connections between two or more networks of differing security classifications, allowing safe distribution of data between different actors. Because the unidirectional networks created with data diodes only allow data to pass from one side of a network connection to another (and not the other way around), users of high security networks get the best of both worlds: the benefits of access to lower security networks while the data on their high security networks remains confidential.",
          image: {
            src: "assets/products/cybersecurity/cybersecurity-data-diode.svg",
            alt: "Diagram of two differently classified networks connected through a data diode, showing services and sensors on each side linked by a one-way data connection",
            width: 473,
            height: 403
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "Navielektro's customers already have data diodes in place in order to enable sharing of sensor resources between different agencies, without becoming vulnerable to intrusions.",
          theme: "tinted"
        },
        {
          heading: "Public Key Infrastructure",
          text: "Navielektro provides a solution in the form of PKI (Public Key Infrastructure), which ensures very high information security. The Navielektro PKI provides a highly trustworthy environment for protecting data at rest and application level communication. PKI provides users with electronic identities and makes it possible to manage and validate these identities, ensuring unauthorized persons cannot access sensitive data. Our PKI solution meets the technological requirements of even the most demanding security environments – including government and military organizations. When looking to create a security infrastructure with safe identification, authentication and data integrity, Navielektro's PKI is the way to go.",
          image: {
            src: "assets/products/cybersecurity/cybersecurity-pki-architecture.svg",
            alt: "Diagram of the Navielektro PKI architecture showing HSM, i-CA, LDAP directory, card production system and SCEP client connected around a central user management hub",
            width: 1033,
            height: 1008
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "Why PKI?",
          text: "The Navielektro PKI provides a chain of trust, with flexible, secure and cost-effective means of managing keys and performing user authentication.",
          image: {
            src: "assets/products/cybersecurity/cybersecurity-ica-console.webp",
            alt: "Screenshot of the Navielektro i-CA Certificate Authority Service web console next to the User Manager application listing users and operational roles",
            width: 600,
            height: 362
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          text: "The PKI allows you to create, store and distribute digital certificates in a flexible manner, and enables encryption and validation of data and users through digital signatures."
        }
      ],
      sourceUrl: "https://www.navielektro.fi/cybersecurity.html"
    },
    {
      slug: "infra-protection",
      title: "Critical Infrastructure Protection",
      category: "Security",
      summary: "Protect the most vital facilities and functions",
      overviewHeading: "Protect the most vital facilities and functions",
      overview: [
        "Critical infrastructure is the physical and cyber systems and assets so vital to the functioning of our society, that the disruption of even one of these would wreak havoc on our world. This includes everything from bridges and nuclear power plants to harbors. Recognizing potential threats, governments and other actors are starting to realize that these infrastructures must be secure and able to withstand and rapidly recover from hazards.",
        "Navielektro's systems respond to the needs of major infrastructure facilities, providing users with high-performance software that strengthens and keeps infrastructure secure and functioning. Our solutions ensure that assets, networks and systems vital to a nation's safety, prosperity and well-being are managed effectively and protected from attacks."
      ],
      operationalUse: [
        {
          heading: "Ensure operation security",
          text: "We believe in providing users with all of the information they need, in a view where everything is integrated. All areas of infrastructure security operations are managed from a single system, including security control, operation monitoring, maintenance, resource management and more.",
          image: {
            src: "assets/products/infra-protection/infra-protection-operator.webp",
            alt: "Operator monitoring live infrastructure data across multiple screens and a large geographic map display",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "Navielektro's solution is modular and scalable, and can be completely tailored to fit the needs of the customer. The system can later be extended to include more functionality as needs change, and the customizable nature of the system makes it extremely cost-effective, guaranteeing a long life-cycle. Our critical infrastructure protection system provides users with a comprehensive, end-to-end view of security and safety, and can be deployed for a multitude of purposes such as traffic control and protection of nuclear power plants or military shooting areas.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/infra-protection.html"
    },
    {
      slug: "pki",
      title: "PKI (Public Key Infrastructure)",
      category: "Security",
      summary: "Mission-ready, military-grade CA solutions worth your trust.",
      image: {
        src: "assets/products/pki/pki-hero.webp",
        alt: "Abstract circuit-board pattern converging into a padlock shape, symbolizing digital trust",
        width: 1600,
        height: 759
      },
      overviewHeading: "Mission-ready, military-grade CA solutions worth your trust.",
      overview: [
        "Most PKI solutions today are fairly clumsy, and are intended to be operated by professional personnel primarily within a data center environment. As the cyber threat level in today's digital society is constantly increasing, there is a growing need to establish digital trust without the complexity of a traditional PKI - especially in fields of operation where PKI systems have traditionally not been used, such as IoT, military, security and safety-related systems.",
        "In a military environment, the use of PKI introduces additional demands, as the system needs to be able to operate autonomously, without all CA functionality located in a data center. Navielektro's PKI has been designed and developed to operate in a deployed military environment, where each C2 system runs its own integrated, embedded Certificate Authority - creating a network of trusts. Navielektro's PKI provides a distributed chain of trust in an easy and cost-effective fashion that is not easily matched.",
        "Establishing digital trust is crucial for deploying federated systems where allied nations, agencies and companies operate together and exchange sensitive, critical information. Navielektro's PKI avoids the pitfalls of traditional, legacy PKI, and allows a complete end-to-end deployment of PKI, identity management and - if needed - integrated IAM. The system may be provided as an out-of-the-box, ready-made solution or as a highly customizable one, available as a secure, accreditation-ready package that expedites deployment."
      ],
      highlights: [
        "Provides a distributed chain of trust across every deployed C2 system",
        "Deployable turnkey in a data center, or as an embedded CA device in the field",
        "Embedded deployed CA devices available as SDIP 29/1 TEMPEST A compliant systems",
        "Feature set compliant with FMN PKI iTIF requirements",
        "Developed and manufactured in Finland to security-by-design principles",
        "Ready for future Data-Centric Security requirements, including STANAG 4774 and 4778",
        "Integrated i-CA, HSM, user management, directory (LDAP), SCEP client and card production system",
        "CRL distribution management enables off-line operation of the CA",
        "Full smart-card lifecycle management: issue, print, change PIN, unblock, invalidate, renew, replace",
        "Supports enrollment and authentication of end-user hardware, including VoIP phones"
      ],
      operationalUse: [
        {
          heading: "How Navielektro's PKI works",
          text: "Navielektro's PKI allows you to create, store and distribute digital certificates in a flexible manner, and enables encryption and validation of data and users through digital signatures. At its center is the i-CA (integrated Certificate Authority), the root of trust that authenticates user identity and also serves as a registration authority and certificate database. The i-CA coordinates an HSM (Hardware Security Module) that physically safeguards and manages digital keys, a user management and directory (LDAP) layer, a SCEP client, and an integrated card production system.",
          image: {
            src: "assets/products/pki/pki-elements-diagram.webp",
            alt: "Diagram of the i-CA at the center of Navielektro's PKI, connected to HSM, User Management, Directory (LDAP), SCEP Client and Card Production System",
            width: 1000,
            height: 1078
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "Integrated user manager and certificate authority",
          text: "The system includes a UI for maintenance and configuration, with secure and transparent user authentication management that simplifies the experience for both administrators and end users. A CRL distribution management system enables the CA to operate off-line, and the platform provides integrated support for enrolling and authenticating end-user hardware, including VoIP phones.",
          image: {
            src: "assets/products/pki/pki-user-manager.webp",
            alt: "Screenshot of the User Manager application, listing users and their assigned operational role groups",
            width: 826,
            height: 417
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          heading: "Deployment options",
          text: "CA - Data Center is designed for large-scale, organisation-wide or national data centers, such as a Defence HQ, Defence Branch HQ or major regional data center. Both the CA and its Hardware Security Modules may be deployed redundantly. The system is based on secured COTS server components, a hardened OS, Ethernet switches, firewalls and Enterprise-level redundant HSMs, and may be provided turn-key - fulfilling NATO CIS 322/0048 Security Requirements with supporting security accreditation information, as well as FMN/NATO iTIF requirements for both deployed and static PKI.",
          theme: "dark"
        },
        {
          text: "CA - Deployed is designed for operations centers with constrained SWaP-C (Size, Weight, Power and Cooling), such as platforms or brigades (BDEs). It contains two built-in, compartmentalized CPUs - one manages the CA interfaces, the other key management and processing - in a small-footprint, secured 1U appliance paired with either an Enterprise-grade separate HSM or a tactical HSM. CA - Deployed is compliant with applicable NATO CIS requirements and is SDIP 27 TEMPEST A compliant, running a secured, immutable, field-upgradeable OS.",
          theme: "dark"
        },
        {
          text: "CA - Compact is designed for severely constrained SWaP-C environments - the system may even be run from car batteries. It is intended for forward operating bases, vehicles and military platforms, deployable in 1/2U, or 1U together with an HSM. Like CA - Deployed, it is compliant with applicable NATO CIS requirements and is SDIP 27 TEMPEST A compliant, with the same secured, immutable, field-upgradeable OS.",
          theme: "dark"
        },
        {
          heading: "Smart cards",
          text: "Navielektro's PKI extends to identity management through smart cards. Cards are printed with the user's ID and photo for visual identification, and the platform provides full card lifecycle management - covering PIN changes, unblocking, invalidating, renewing and replacing cards as needed.",
          image: {
            src: "assets/products/pki/pki-smart-card.webp",
            alt: "Hand holding a military smart identification card showing a chip, barcode and printed ID details",
            width: 1095,
            height: 864
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "Specifications",
          text: "Enrollment, publishing and management are supported through web-form-based PKCS#10 certification requests, SCEP, LDAP, HTTP and smartcard enrollment/encoding, with optional embedded or external IAM integration. Supported formats include PKCS#1, #6, #7, #8, #9, #10 and #12, the X.509v3 certificate profile, the X.509v2 CRL format, and Java Keystore. HSMs interface via the PKCS#11 crypto API, and are compliant with Thales Luna and Engage Black Tactical HSM. Security is provided through TLS, with support for ECC (prime256v1, secp384r1, secp521r1) and RSA public-key algorithms, AES/DES/RC2/RC4 symmetric algorithms, and the SHA-1 and SHA-2 (SHA-224/256/384/512) hash algorithm families.",
          theme: "tinted"
        }
      ]
    },
    {
      slug: "enguard",
      title: "Cross Domain Solution",
      category: "Security",
      summary: "enGuard is Navielektro's family of cross-domain security solutions - a hardware-enforced Cross Domain Solution (CDS) for continuous, real-time information sharing between security domains, and the enGuard Scrubber for secure, air-gapped file transfer, so classified and unclassified systems can exchange information safely without compromising either side.",
      image: {
        src: "assets/products/enguard/enguard-hero.webp",
        alt: "Rugged tablet in the field next to an UNCLASSIFIED label, illustrating enGuard moving information between security domains",
        width: 1600,
        height: 1067
      },
      highlights: [
        "Hardware-enforced separation between security domains, including between SECRET and Unclassified",
        "Continuous, real-time cross-domain sharing (CDS) or manual, air-gapped file transfer (Scrubber) - deployable separately or together",
        "Three CDS hardware form factors, from national data centers to vehicles and forward operating bases with limited size, weight and power",
        "Designed for secure and classified operating environments, with TEMPEST-compliant options for demanding deployments",
        "Centralized policy management keeps every enGuard device on one consistently enforced security policy",
        "Strong, smartcard-based authentication built on an integrated PKI/Certificate Authority",
        "Out-of-the-box support for the native protocols used by military C2 and situational awareness systems",
        "Developed and manufactured in Finland to security-by-design principles"
      ],
      overview: [
        "Military, security and safety-critical systems increasingly need to share information across networks, agencies and security domains - while facing a growing cyber threat landscape where a single successful attack can affect a wide range of critical functions.",
        "Navielektro's enGuard family addresses this with two complementary solutions under one security architecture: the enGuard Cross Domain Solution (CDS) for continuous, hardware-enforced information exchange between domains, and the enGuard Scrubber for secure, air-gapped file transfer where systems aren't continuously connected. Customers can deploy a CDS, a Scrubber, or both, depending on the use case.",
        "enGuard supports the native protocols already used by C2, situational awareness and messaging systems, and integrates with Navielektro's MATIS/JADIS product family as well as third-party systems - extending secure information sharing from national data centers down to individual deployed units."
      ],
      overviewImage: {
        src: "assets/products/enguard/enguard-cds-use-case.webp",
        alt: "Diagram of a typical enGuard CDS deployment on a naval ship, connecting navigation and sensor systems through a CDS to an operations center and a CMS system",
        width: 1600,
        height: 828
      },
      operationalUse: [
        {
          heading: "Continuous cross-domain sharing with the enGuard CDS",
          text: "The enGuard CDS is a hardware-enforced gateway that continuously and securely moves information such as tracks, chat, sensor data and video between security domains. It is available in three hardware form factors that differ only in performance, TEMPEST protection and ruggedness: enGuard Data Center for national data centers and other large-scale exchange systems, enGuard Deployed for operations centers and major platforms, and enGuard Compact for vehicles, forward operating bases and other platforms with limited size, weight and power.",
          image: {
            src: "assets/products/enguard/enguard-cds-hardware.webp",
            alt: "The three enGuard CDS hardware form factors: enGuard Data Center, enGuard Deployed and enGuard Compact",
            width: 1200,
            height: 1534
          }
        },
        {
          heading: "Centralized and local policy management",
          text: "A Central Policy Manager defines the security policy, releasability rules and device groupings for an entire enGuard deployment, then distributes a single digitally signed policy to every connected device. On site, a Local Policy Manager gives administrators insight into the data pipelines passing through each CDS, lets them monitor system capacity and resource use, and supports security audit functionality through role-based, strongly authenticated access."
        },
        {
          heading: "Secure, air-gapped file transfer with the enGuard Scrubber",
          text: "Where a system needs to stay air-gapped rather than continuously connected, the enGuard Scrubber provides a secure way to move files between security domains. Files are virus-scanned, verified and signed before being packed onto an approved, encrypted transfer drive, which is then carried to an IMPEX workstation on the receiving side to complete the import - or the reverse, for exporting data from a higher domain.",
          image: {
            src: "assets/products/enguard/enguard-scrubber-hardware.webp",
            alt: "enGuard Scrubber 1/2U hardware device with separate LOW SIDE and HIGH SIDE ports",
            width: 1400,
            height: 552
          }
        },
        {
          heading: "Deployable across every echelon",
          text: "Because the same enGuard software suite runs across every hardware variant, it scales from a national data center or defence branch headquarters down to a naval platform, a vehicle or a single forward operating base - giving an organization one consistent security architecture to plan, train and support instead of a different solution for every echelon."
        }
      ],
      typicalApplications: [
        "Cross-domain information sharing (SECRET / Unclassified)",
        "National data centers and defence HQs",
        "Naval and deployed C2 platforms",
        "Vehicles and forward operating bases",
        "Secure file import/export between classification levels",
        "Federated and coalition mission networks"
      ],
      integration: [
        "enGuard CDS connects directly to Navielektro C2 and situational awareness systems such as MATIS/JADIS, letting tracks, chat, messaging, sensor data and video move securely between domains, using the same native protocols shared across the wider Navielektro product family.",
        "The enGuard Scrubber integrates with MATIS/JADIS but also works as a standalone secure file transfer point for other CIS systems via dedicated IMPEX workstations; both enGuard solutions log all transfer activity and can be brought under one centrally managed security policy."
      ]
    },
    {
      slug: "radar-antennas",
      title: "Radar Antennas",
      category: "Sensors",
      summary: "Experience",
      overviewHeading: "Experience",
      overview: [
        "Navielektro originated as a radar manufacturer, and while the company has expanded, we still stay true to our roots. We have over 20 years of experience in radar technology and we are still producing a range of high-performance and cost-effective radar sensors. Our sensors have been designed for continuous shore-based surveillance in the toughest conditions. The radar sensors are suitable for both VTS and Coastal Surveillance and various maritime security applications. Navielektro has delivered radar sensors capable of functioning in everything from Arctic conditions above the polar circle to the tropical conditions on the coast of Africa."
      ],
      operationalUse: [
        {
          heading: "Antenna product range",
          text: "The existing antenna product range consists of both SWG (Slotted Wave Guide) and parabolic radar antennas. The high-gain 18\" SWG antennas are designed for medium to close range surveillance, typical in VTS and Port Control applications. The high-gain parabolic antennas are available for different applications,i.e. long range coastal surveillance with very high-gain and medium surveillance with a significantly smaller foot print. In addition Navielektro manufactures custom designed antennas for various mobile applications. All antennas are delivered complete with a powerful programmable drive unit that ensures a long, low-cost life-cycle for the overall radar system. Drive units are available in different configurations and may be engineered for site specific requirements.",
          theme: "tinted"
        },
        {
          heading: "NE 18045-X",
          text: "The 18045-X antenna is and X-band antenna that is ideal for use in shore based traffic monitoring and surveillance systems. The antenna has narrow beamwidth (0.45°), large antenna gain (34 dBi) and fast rotation speed (max. 28 RPM).",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-ne18045x.webp",
            alt: "NE 18045-X antenna mounted on a red lattice tower against a clear sky",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          text: "The 18045-X antenna is built using COTS hardware, making it a very cost-effective solution. Navielektro has deployed nearly 100 antennas in Finland, Sweden, Norway, the UK, the Ukraine, Russia and other countries."
        },
        {
          heading: "21038-X",
          text: "The 21038-X antenna is an X-band antenna tht has been developed with vessel traffic monitoring in mind. Due to its narrow beamwidth (0.38°), large antenna gain (37 dBi) and fast rotation speed, the 21038-X-antenna is ideal for use in shore based traffic monitoring and surveillance systems.",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-21038x.webp",
            alt: "21038-X antenna mounted on a white lattice tower against a clear sky",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          heading: "PRA3000",
          text: "The PRA3000 series antenna is ideal for use in shore based traffic monitoring and surveillance systems. The antenna is designed to be a compact package with maximum gain. This has proven to be an ideal solution for gap filling purposes or medium range surveillance. The antenna is built using COTS hardware, making it a very cost-effective solution. Navielektro has deployed the unit in question at locations in Finland, Norway and Sweden.",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-pra3000.webp",
            alt: "PRA3000 hexagonal radar antenna mounted on a ring-braced tower against a cloudy sky",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "NE PRA3000-RADOME",
          text: "The PRA3000-RADOME series antenna is our off-the-grid solution. The PRA-3000-RADOME antenna has been designed for operation in harsh conditions and off-the-grid environments, and boasts extremely low energy consumption. The radome provides the antenna with protection in harsh conditions and offers wind protection, reducing the dynamic wind load as well as the worst case power requirements for radar rotation. The radome solution also enables powering directly from a battery supply (48V DC). Because the antenna leaves a low energy footprint, it is also environmentally friendly solution.",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-pra3000-radome.webp",
            alt: "PRA3000-RADOME antenna enclosed in a white protective radome on a blue lattice tower",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "NE PRA5400",
          text: "The PRA5400 series antenna has been designed with shore based traffic monitoring and surveillance systems in mind. The compact, maximum gain package has proven to be an ideal solution for long range coastal surveillance applications. Because the antenna is built using COTS hardware, it is a highly cost-effective solution. Navielektro has deployed the unit in question at locations in Scandinavia and Africa.",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-pra3000.webp",
            alt: "Hexagonal radar antenna mounted on a ring-braced tower against a cloudy sky",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          heading: "PRA2300 Light",
          text: "The PRA2300 Light series antenna is ideal for use in shore based traffic monitoring and surveillance systems. The antenna is designed to be a compact package with maximum gain. This has proven to be an ideal solution for gap filling purposes or medium range surveillance. The antenna is built using COTS hardware, making it a very cost-effective solution. Navielektro has currently deployed the unit in question at locations in Scandinavia, Europe and Africa.",
          image: {
            src: "assets/products/radar-antennas/radar-antennas-pra2300.webp",
            alt: "PRA2300 Light curved parabolic antenna mounted on a tower against a clear sky",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/radar-antennas.html"
    },
    {
      slug: "radar-transceivers",
      title: "Radar Transceivers",
      category: "Sensors",
      summary: "Transceiver product range",
      overviewHeading: "Transceiver product range",
      overview: [
        "Navielektro manufactures a range of radar transceivers, all of which are fitted with LNFE (Low Noise Front End) technology. The transceivers have a high dynamic range, which make the radar systems comparable with systems with considerably higher output power. Our antennas and transceivers may be configured with different polarities according to specific customer requirements. Transceivers can be configured for sector blanking, or optimized for sector to sector operation with respect to pulse length, PRF and other parameters."
      ],
      highlights: [
        "Configurable pulse length and pulse repetition frequency (within limits of the transceiver), to maximize the range/resolution for a particular application.",
        "Configurable pulse length and pulse repetition frequencies per sector, to maximize range/resolution for a certain direction.",
        "Programmable blank sectors, to minimize magnetron wear and scatter echoes from uninteresting directions.",
        "Versatile remote control possibilities using an Ethernet (TCP/IP) interface.",
        "Remote diagnostic features"
      ],
      operationalUse: [
        {
          heading: "X-Band, DF 225 Transceiver",
          text: "The DF 225 Transceiver is ideal for use in shore-based traffic monitoring and surveillance systems. The transceiver has proven to be an ideal solution for gap filling purposes or medium range surveillance. Navielektro's integrated DF 225 dual radar transceiver is designed to meet high reliability requirements even in very demanding surveillance circumstances.",
          image: {
            src: "assets/products/radar-transceivers/radar-transceivers-df225.webp",
            alt: "Interior of the DF 225 dual radar transceiver cabinet showing two transceiver units wired to a central diplexer",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "The DF 225 X consists of two similar transceivers transmitting on two different frequencies, connected to a very low loss diplexer that feeds the antenna. In order to accomplish a fail safe radar, the two transceivers are working independently, meaning a malfunction in one transceiver will not affect the other. The design of the DF 225 enables the transceiver to be used in several modes.",
          theme: "tinted"
        },
        {
          heading: "X-Band, SF 125 Transceiver",
          text: "Navielektro's SF 125 radar transceiver is an efficient piece of equipment, designed to meet high reliability even in very demanding surveillance circumstances.",
          image: {
            src: "assets/products/radar-transceivers/radar-transceivers-sf125.webp",
            alt: "Interior of the SF 125 radar transceiver cabinet showing the transceiver unit and its wiring",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "The SF 125 Transceiver is ideal for use in shore-based traffic monitoring and surveillance systems. The transceiver has proven to be an ideal solution for gap filling purposes and for medium range surveillance.",
          theme: "tinted"
        },
        {
          text: "The radar transceivers can be constructed in several variations:",
          theme: "dark"
        }
      ],
      typicalApplicationsHeading: "Variations",
      typicalApplicationsTheme: "dark",
      typicalApplications: [
        "Single S-band transceiver",
        "Single X-band transceiver",
        "Dual S-band, with hot standby",
        "Dual X-band, with hot standby",
        "Frequency Diversity X Band Transceiver"
      ],
      sourceUrl: "https://www.navielektro.fi/radar-transceivers.html"
    },
    {
      slug: "eos-sensor",
      title: "EOS Sensor System",
      category: "Sensors",
      summary: "The EOS Sensor System is a long-range daylight, thermal and laser range-finding camera on a precision pan-and-tilt unit, built for continuous coastal and maritime surveillance and tightly integrated with Navielektro's MATIS system for detection-to-identification workflows.",
      image: {
        src: "assets/products/eos-sensor/eos-sensor-hero.webp",
        alt: "3D render of the Navielektro EOS sensor showing its thermal camera, daylight camera and pan-and-tilt unit",
        width: 1600,
        height: 1067
      },
      highlights: [
        "Daylight camera, thermal imaging camera and laser range finder on one precision pan-and-tilt unit",
        "Built for coastal and maritime surveillance in demanding weather environments",
        "Full MATIS integration, controllable directly from the MATIS operator interface",
        "Automatic tracking of MATIS targets sourced from radar, AIS, ADS-B or fused data",
        "Automatic search of a defined area within the MATIS system",
        "Camera augmentation projects the situation picture onto the live video feed",
        "Fast, accurate 360-degree azimuth rotation covering any area of interest"
      ],
      overview: [
        "Situational awareness in any application benefits from high-quality video and precise camera maneuverability, which together support tasks such as object identification and surveillance. Navielektro's objective has been to integrate relevant sensor systems into the MATIS suite to enable a more complete operating picture and a faster OODA loop for the end user.",
        "The EOS Sensor System is designed for coastal and maritime surveillance, combining a thermal camera, a daylight camera and an optional laser range finder on a high-quality pan-and-tilt unit that provides precise maneuverability and high-resolution imagery. It suits a wide range of maritime and inland applications, including object identification, object tracking, access control, targeting support, accident prevention and patrolling.",
        "The sensor's role in a MATIS-integrated system is to detect, recognize and identify a target of interest, working alongside other sensors rather than in isolation. A wide-area sensor such as radar is well suited to detecting targets across a large field of view, while the EOS sensor's narrower, high-resolution view makes it the stronger choice for recognizing and identifying a target once detection has pointed it in the right direction - together covering the full detect-recognize-identify sequence more effectively than either sensor alone."
      ],
      overviewImage: {
        src: "assets/products/eos-sensor/eos-sensor-system-overview.webp",
        alt: "Diagram of the EOS sensor system showing remote surveillance sites with camera and laser range finder sensors connecting through an operation center to workstations, logging and a deployed soldier",
        width: 1200,
        height: 1349
      },
      operationalUse: [
        {
          heading: "Detection to identification through sensor fusion",
          text: "A radar or ELINT system can flag a target for detection, after which the EOS sensor is slewed to it so the operator can complete recognition and identification. Incorporating civilian transponder data - AIS for ships and ADS-B for air traffic - lets operators quickly verify legitimate contacts and focus attention on unidentified ones, and the sensor can connect to the integrated track fusion and management system for this automatic slewing."
        },
        {
          heading: "Camera augmentation and range finding",
          text: "Camera augmentation projects objects from the situation picture onto the video image, so operators can see the location of tracks that would otherwise be hidden from the camera view, and can identify tracks directly on the live feed. Where fitted, the laser range finder measures distance to a target of interest, with the result shown on the video feed and passed to MATIS."
        },
        {
          heading: "Unified operator workstation",
          text: "Camera video can be presented on a separate camera display with video matrix capability or embedded directly in the MATIS operator working position alongside the chart view, with tracks from the situation picture projected onto the video image. Video can optionally be stored through Navielektro's integrated logging system, and the camera system can connect to existing vessel databases to support and confirm track identifications.",
          image: {
            src: "assets/products/eos-sensor/eos-sensor-workstation.webp",
            alt: "MATIS operator interface showing a chart view alongside two live EOS camera feeds and a camera control panel",
            width: 1800,
            height: 1819
          }
        },
        {
          heading: "Flexible and secure control",
          text: "Operators can control the EOS sensor by joystick, by pointing at a spot in the video feed, by pointing at a coordinate on the map, by entering values or keys in the user interface, or automatically through slewing to a track or a predefined guard area. The system also supports separated information domains, so video and sensor status can flow between an unclassified or restricted domain and a confidential or secret domain in a controlled way.",
          image: {
            src: "assets/products/eos-sensor/eos-sensor-domains.webp",
            alt: "Diagram showing sensor and video data flowing between an unclassified or restricted domain and a confidential or secret domain to deployed operators and logging systems",
            width: 1600,
            height: 789
          }
        }
      ],
      typicalApplications: [
        "Coastal and maritime surveillance",
        "Object identification and tracking",
        "Access control",
        "Targeting support",
        "Accident prevention",
        "Patrolling"
      ],
      integration: [
        "The EOS sensor is a Navielektro product and, by default, can be controlled from the MATIS system, feeding into the same situation picture as radar, AIS, ADS-B and other integrated sensors so operators can build a coherent surveillance picture from a single interface.",
        "Camera video can be shown on a dedicated display with video matrix capability or embedded in the MATIS operator working position, optionally logged through Navielektro's integrated logging system, and connected to existing vessel databases to support the identification process."
      ]
    },
    {
      slug: "newis",
      title: "Weather and Environmental Information",
      category: "Weather",
      summary: "Solutions for weather and environmental presentation and analysis",
      overviewHeading: "Solutions for weather and environmental presentation and analysis",
      overview: [
        "Achieving situational awareness requires that all of the information necessary to create a comprehensive situation picture is available. Navielektro offers a complete environmental weather information solution in the form of NEWIS (Navielektro Environment and Weather Information System). Our system collects, processes and stores received environmental and weather information, and distributes the information to the clients that need it. This means that operators get access to weather information directly from their workstation as an integrated part of the situation picture, allowing them assess the impact of weather conditions on various operations. Sensor data is presented in a fashion that is easy to comprehend, allowing operators to act upon the data rather than spend time deciphering it.",
        "NEWIS is an efficient, software based tool for collection, storage and presentation of data from a range of various meteorological and hydrographical sensors and systems. Our solution can present everything from real-time weather and observed weather (based on METAR or SYNOP reports) to weather simulations. The solution also supports CBRN (Chemical, biological, radiological and nuclear defense), allowing users to view hazards and plan protective measures accordingly."
      ],
      highlights: [
        "Real-time weather",
        "Observed weather",
        "Simulated, predicted weather"
      ],
      operationalUse: [
        {
          heading: "Compatibility",
          text: "NEWIS may be connected to almost any existing environment, weather or hydrographical sensor. The system has a large number of existing interfaces to the largest vendors in the business, and may easily be extended to support various weather- and hydrographical systems and the information content they provide. The information model used by NEWIS enables the system to be connected to virtually any kind of real-time weather information service.",
          theme: "tinted"
        },
        {
          heading: "A complete solution",
          text: "Navielektro's weather information system is capable of managing weather information as a whole. This means that the system can present the following types of weather:",
          theme: "dark"
        },
        {
          heading: "User interfaces",
          text: "The data from various sensors is presented in a clear and coherent fashion, and data may viewed either in the standalone NEWIS software or as an integrated part of the TDF platform. TDF integration helps operators see the big picture, as weather information can be viewed both in the form of dockable components and integrated in the chart view.",
          image: {
            src: "assets/products/newis/newis-user-interface.webp",
            alt: "NEWIS software windows showing wind, temperature and wave gauges alongside a chart view with weather overlays",
            width: 600,
            height: 279
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "The system may optionally be set up with a web-service that allows users to view both real-time information and to perform retrievals of past weather and environmental conditions.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/newis.html"
    },
    {
      slug: "grib",
      title: "Weather Forecast",
      category: "Weather",
      summary: "Weather Forecasts - part of your information flow",
      overviewHeading: "Weather Forecasts - part of your information flow",
      overview: [
        "Navielektro offers GRIB Weather Information functionality, which provides the operator with both historical and forecast weather and environmental information including wind barb, air pressure and rain data. GRIB is a data format commonly used in meteorology to communicate and store historical and forecast weather information as computed by a weather model. Navielektro's solution is capable of receiving, managing and presenting the GRIB data on the TDF platform. Weather is completely integrated as part of the situation picture, and weather conditions can be predicted and simulated for the next 8-12 hours.",
        "Traditionally, the information provided by GRIB models has only been available in separate subsystems and displays, making it difficult for the operator to fully utilize the available information. Navielektro's solution presents the data as an integrated part of the chart, so that weather data automatically correlates with other situational awareness information.",
        "The system is verifiably compliant with various meteorological actors, including NOAA, the Finnish Meteorological Institute and Foreca. The GRIB functionality implements the WMO GRIB standard and virtually any GRIB compliant data source may be utilized as a data-source with no or minor modifications."
      ],
      operationalUse: [
        {
          heading: "Customize your view",
          text: "GRIB data can be viewed on top of the chart in the form of layers. Users can quickly hide any weather layers that are not of interest to them.",
          image: {
            src: "assets/products/grib/grib-customize-view.webp",
            alt: "Chart view with GRIB weather layers overlaid, showing a layer selection panel and colored precipitation/wind data on the map",
            width: 570,
            height: 321
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "The way weather data is presented is completely customizable. Simply select the data you want to show, and how you want it to be displayed.",
          theme: "tinted"
        },
        {
          heading: "Estimate weather impact",
          text: "Our weather system uses collected GRIB data to determine the impact weather conditions will have on different operations. The impact is displayed through color codes both in a table and on the chart. The Weather Impact functionality is extremely useful when planning operations such as search and rescue and anti-surface warfare, as it helps operators understand how weather conditions will affect said operations. The data provided by the Weather Impact table will also work in simulations, making it possible to predict the optimal time for conducting sensitive operations.",
          image: {
            src: "assets/products/grib/grib-weather-impact.webp",
            alt: "Chart with color-coded weather impact zones and a Weather Impact table showing operational risk levels",
            width: 600,
            height: 291
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/grib.html"
    },
    {
      slug: "voice",
      title: "NaviCall",
      category: "Voice Communication",
      summary: "Efficient radio and IP telephony for demanding operations",
      overviewHeading: "Efficient radio and IP telephony for demanding operations",
      overview: [
        "Operators are faced with a daily need to communicate with other parties by means of voice communication, but unfortunately this often requires the operator to use tools that are separate from the rest of the situational awareness system, slowing down the communication process. Navielektro provides voice communication solutions that are integrated with the situational awareness system and TDF user interface, allowing users to make calls directly from from their workstations.",
        "Navielektro's NaviCall is an open voice communication system for Public Safety, Command & Control, and PMRS (Private Mobile Radio Systems). The system is to a large extent built and designed using COTS components, which makes NaviCall a cost-efficient yet flexible, redundant and scalable solution. The NaviCall system provides the operator with a fast, reliable and flexible means to communicate with other parties, presenting the user with an interface for communication that is efficient, clear and easy to use."
      ],
      highlights: [
        "Integration with situational awareness software allows calls to be visualized as part of the situation picture",
        "Includes PTT (Push-to-talk) based audio conferencing, facilitating speech-group or audio conferencing",
        "Open, flexible and scalable architecture with reliable and fail-safe system environment.",
        "Comes with fully-integrated GMDSS/DSC functionality",
        "High-quality radio based communications using low-bandwidth data links",
        "Role based software architecture allows operators to use any free working position"
      ],
      operationalUse: [
        {
          heading: "Voice communication – integrated",
          text: "Using NaviCall, any kind of communication – both radio and telephony – may be conducted within one, integrated, standard compliant solution. NaviCall can utilize almost any kind of existing radio transceiver, or the system can be deployed with integrated radios from the maritime VHF to UHF and air-band. In addition, the system may be completely integrated with the communications network of a existing traffic control systems in order to save deployment costs. The NaviCall system can be completely integrated with the operator workstation, and audio-logging is integrated with the tracking system. This effectively creates a multimedia logging and replay system.",
          image: {
            src: "assets/products/voice/voice-integrated-communication.webp",
            alt: "DSC radio panel and tactical map interface showing tracked vessels with a push-to-talk control panel",
            width: 600,
            height: 266
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          heading: "GMDSS",
          text: "Navielektro's software can be used to create a comprehensive Global Maritime Distress and Safety System (GMDSS). This type of system ensures rapid help during distress incidents, making it possible to quickly and efficiently rescue distressed ships, boats and aircrafts."
        },
        {
          text: "Navielektro has delivered reliable and comprehensive communication systems to national agencies in Finland and around the world. Our GMDSS solution is a fully integrated, modular and flexible radio communication system for shore based maritime operations. The scalable nature of our systems allow our deliveries to range from single operator systems to comprehensive national GMDSS systems, capable of handling hundreds of simultaneous base stations and radio channels within the same system (including Air Search and Rescue)."
        },
        {
          heading: "NaviCall Operator Workstation",
          text: "The NaviCall operator workstation consists of a WACP (workstation audio control panel) and a COTS PC with a touch-screen, enabling easy and speedy operation of the system. The system is ready for a variety of audio input/ output devices.",
          image: {
            src: "assets/products/voice/voice-operator-workstation.webp",
            alt: "NaviCall operator workstation with a touchscreen chart display and WACP audio control panel with push-to-talk buttons",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          text: "NaviCall is highly customizable. Users can select which audio channel to use for reception, as well as create channel groups based on geographical area. The audio for each channel group can be separately adjusted, so audio groups with higher volume can be selected for important, time-sensitive communication. Audio received through radio base stations operating on the same frequency may be subject to BSS (Best Signal Selection), according to operator preference.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/voice.html"
    },
    {
      slug: "voice-tactical",
      title: "Navi Tactical Call",
      category: "Voice Communication",
      summary: "Voice integration and functional services",
      overviewHeading: "Voice integration and functional services",
      overview: [
        "When conducting command and control operations, real-time reliable voice communication is a must-have. Typical situational awareness systems collect a myriad of data, but this data also needs to be communicated to tactical units on the ground in a timely and efficient fashion. For this reason, Navielektro has developed a set of tools for quickly and efficiently communicating the information collected using both message based communication and voice communication. The vision of Navielektro has been to combine key functionality needed for conducting command and control operations in an integrated operating environment: a Tactical Display Framework."
      ],
      highlights: [
        "Enables stand-alone integrated voice communication and integration with Cisco CME (Call-Manager Express), as well as widely used open-source software IP PBX solutions",
        "The solution may also deploy its own integrated software IP PBX",
        "Enables stand-alone integrated voice communication directly from the user interface in the form of intercom or speech groups, without the need for a PBX (IP telephone exchange)",
        "Does not require a hardware phone, as calls to the telephone network may be conducted using VoIP",
        "Provides an end-to-end voice system with zero configuration for the user",
        "Includes PTT (Push-to-talk) based audio conferencing, facilitating speech-group or audio conferencing in a tactical environment",
        "Provides recording and replay of voice information conducted within the TDF solution"
      ],
      operationalUse: [
        {
          heading: "Military grade communication",
          text: "The Navielektro TDF includes seamless integrated voice communication, which allows users to conduct voice related operations through one, common user interface. Typically, communication has been provided through cumbersome legacy systems that require special hardware to accomplish communications. Using our tactical voice communication solution, any kind of communication – both radio and telephony – may be conducted within one, integrated, standard compliant solution. Navi Tactical Call may be deployed as part of Navielektro's TDF platform, providing voice connectivity using the same hardware that is required to run C2 solutions. This provides lower total ownership costs with faster deployment.",
          theme: "tinted"
        },
        {
          heading: "Click to call",
          text: "Navi Tactical Call provides services such as radio, telephony, speech groups and audio conferencing, all of which can be accessed from the same workstation, using the same user interface.",
          image: {
            src: "assets/products/voice-tactical/voice-tactical-click-to-call.webp",
            alt: "Tactical map interface with radio control and PTT panel overlays, showing tracked units and speech-group controls",
            width: 500,
            height: 267
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          heading: "NETRI",
          text: "Navi Tactical Call can utilize the Navielektro Tactical Radio Interface (NETRI) hardware device in order to provide connectivity to virtually any tactical radio by VoIP enabling the radio system in question.",
          image: {
            src: "assets/products/voice-tactical/voice-tactical-netri.webp",
            alt: "NETRI tactical radio interface hardware device with antenna, connectors and dual speaker housings",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        },
        {
          text: "NETRI is a versatile device that enables voice and data functionality. NETRI may be connected to virtually any modern tactical radio or radio transceiver and may be powered through the radio with no external batteries required. In addition to radio, NETRI also provides input capability for laser goniometers or range finders, making NETRI a versatile part of target designation solutions.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/voice-tactical.html"
    },
    {
      slug: "trackfusion",
      title: "Track Fusion",
      category: "Modules",
      summary: "Sophisticated fusion",
      overviewHeading: "Sophisticated fusion",
      overview: [
        "Navielektro offers Surveillance and Command and Control Systems usually consist of numerous sensors that collect, process and display data on chart. Deciphering this data can be a daunting task for an operator, especially when it comes to determining track locations. The data provided by each sensor may vary, at worst resulting in several locations being reported for a single track. Navielektro's solution for this problem is a multi-sensor integration and correlation system, capable of track fusion.",
        "Our system can detect and identify potential sea-based threats, utilizing inputs from maritime surveillance radars, AIS receivers, GPS-based self-reporting devices and other external data sources. Information services (databases), targeting and geospatial integration are also a central part of the system. Tactical track information is collected from various sources, and this information is used to produce an accurate, coherent Single Integrated Picture for presentation, control, and dissemination.",
        "Navielektro's solution is capable of high-level fusion and has been deployed in operational use at the Finnish Navy, Coast Guard and Vessel Traffic Management Systems."
      ],
      operationalUse: [
        {
          heading: "How does it work?",
          text: "Data received from different sensors is fused to provide the most accurate location for a track.",
          image: {
            src: "assets/products/trackfusion/trackfusion-how-it-works.webp",
            alt: "Track fusion software showing a Track Identifications panel over a chart with multiple correlated vessel tracks",
            width: 550,
            height: 292
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "Fusion data is presented in a track stack, so that manually fusing or unfusing tracks also remains an option.",
          theme: "tinted"
        },
        {
          heading: "Architecture",
          image: {
            src: "assets/products/trackfusion/trackfusion-architecture.svg",
            alt: "Diagram showing sensor inputs (radar, AIS, GPS, LRIT, electronic warfare, and more) fused into a single track and distributed to operations centers, ships, and shared between security, military, safety and nation-to-nation stakeholders",
            width: 920,
            height: 944
          },
          variant: "wideImage"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/trackfusion.html"
    },
    {
      slug: "warehousing",
      title: "Track Warehousing",
      category: "Modules",
      status: "archived",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/warehousing.html"
    },
    {
      slug: "madis",
      title: "Anomaly Detection",
      category: "Modules",
      summary: "Supporting the operator",
      overviewHeading: "Supporting the operator",
      overview: [
        "Today's anti-collision implementations tend to focus on generating alarms based on kinematic information, which limits usage to short term conflict alert (STCA) – typically only giving the operator minutes to respond to an alarm. The rapid implementation of AIS as well as other sensor systems, networks and other high-grade information sources is increasing the amount of information available to a level that no human operator is capable of processing without at least some associated automation. Navielektro has recognized the need to automate analysis and cross correlation of information sources, and as a result we have added built-in anomaly detection to our situational awareness system. Our Maritime Anomaly Detection System (MADIS) enables users to detect and prevent collisions, grounding as well as illegal activity."
      ],
      highlights: [
        "Designed to reduce operator workload and response times",
        "Automatic detection through analysis of statistical track movement data",
        "Detection through user-definable rules",
        "Collects and presents track events in tables and time-lines",
        "Configurable alarms - the system can alert the operator through alarms or notices, or simply indicate the anomaly on chart",
        "Supports the operator in decision making",
        "Speedy and reliable sharing of anomaly information between different agents"
      ],
      operationalUse: [
        {
          heading: "Anomaly detection and decision-making",
          text: "Operator workstations are manned by fewer and fewer operators, which increases the need for automation and multi-tasking. MADIS has been designed to help manage and lessen operator workload, aiding in the decision-making process. MADIS provides operators with a set of automated tools that alert the operator regarding various safety and security related conflicts that may arise within the associated COP (Common Operational Picture). The objective is to relieve operators from conducting tedious and time-consuming tasks, such as cross checking and validating track identifications and assessing the situation picture. The anomaly detection toolset is capable of detecting a number of defined anomalies, including intruder detection, unexpected vessel behavior, and other safety or security hazards.",
          theme: "tinted"
        },
        {
          text: "The MADIS applications utilize intelligent decision aids to analyze statistical track movements and user-defined rules, automatically generating alerts and responses for anomalous conditions.",
          theme: "tinted"
        },
        {
          heading: "How does it work?",
          text: "MADIS is constantly in operation, autonomously and automatically identifying unusual activity. The system collects track data and highlights irregularities, inconsistencies, threats and anomalies in the received information. Users can define what events constitute anomalies and customize the anomaly detection process according to each operator's area of responsibility. The system automatically detects anomalies based on statistics and user-defined rules, marks the anomalies on chart and alerts the operator.",
          image: {
            src: "assets/products/madis/madis-how-it-works.webp",
            alt: "MADIS chart view with a zoomed inset showing tracked vessels near a port, alongside a track events table",
            width: 621,
            height: 322
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/madis.html"
    },
    {
      slug: "gmdss",
      title: "GMDSS",
      category: "Modules",
      summary: "GMDSS",
      overviewHeading: "GMDSS",
      overview: [
        "All maritime surveillance systems aim to recognize emergencies or threats before they occur, but not all incidents can be prevented. The International Maritime Organization (IMO) has developed an international maritime safety system called the Global Maritime Distress and Safety System GMDSS, which aims to guarantee that complying vessels will be able to communicate with an onshore station in case of distress – any time, from any location. Navielektro's software can be used to create a comprehensive Global Maritime Distress and Safety System (GMDSS). This type of system ensures rapid help during distress incidents, making it possible to quickly and efficiently rescue distressed ships, boats and aircrafts.",
        "Navielektro has delivered reliable and comprehensive communication systems to national agencies in Finland and around the world. Our GMDSS solution is a fully integrated, modular and flexible radio communication system for shore based maritime operations. The scalable nature of our systems allow our deliveries to range from single operator systems to comprehensive national GMDSS systems, capable of handling hundreds of simultaneous base stations and radio channels within the same system (including Air Search and Rescue)."
      ],
      highlights: [
        "VHF DSC, VHF (Voice) RT, MF DSC, MF Voice, HF DCS and HF Voice",
        "COSPAS-SARSAT EPIRB integration",
        "Full DSC integration",
        "Fully integrated GMDSS and VTS or Coast Guard C2",
        "Software control - saving space and reducing power consumption",
        "IMO compliant",
        "Support for Automated Coastal Radio Voice Broadcasting",
        "Radio over IP (RoIP) Audio Switch and RoIP Gateway for all marine frequencies"
      ],
      operationalUse: [
        {
          heading: "Integration",
          text: "Our GMDSS solution is a fully integrated, modular and flexible radio communication system for shore based maritime operations. The scalable nature of our systems allow our deliveries to range from single operator systems to comprehensive national GMDSS systems, capable of handling hundreds of simultaneous base stations and radio channels within the same system (including Air Search and Rescue).",
          image: {
            src: "assets/products/gmdss/gmdss-integration.webp",
            alt: "Chart view with a DSC call panel open, showing tracked vessels and a distress call list",
            width: 550,
            height: 273
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "The operations desk is also completely integrated, enabling operators to perform all tasks from a single point. Operations of all sizes can be forwarded from a single station or site to extensive multi-site and multi-station systems.",
          theme: "tinted"
        },
        {
          heading: "Details",
          text: "Our GMDSS solution is made up of a client server architecture and IP technology, providing flexible voice and data services on VHF, HF and MF. Full DSC integration allows GMDSS related radio calls to be visualized as part of the RMP (Recognized Maritime Picture) or TaSP (Tactical Situation Picture), and the system also supports Radio over IP and RSSI. The system is fully redundant using dual processing cores.",
          image: {
            src: "assets/products/gmdss/gmdss-details.webp",
            alt: "Search and rescue helicopter flying over a naval vessel at sea",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/gmdss.html"
    },
    {
      slug: "sar",
      title: "Search and Rescue",
      category: "Modules",
      summary: "Efficient and versatile search and rescue",
      overviewHeading: "Efficient and versatile search and rescue",
      overview: [
        "When an accident occurs, swift action is vital, particularly for search and rescue operations. Planning and executing a search and rescue mission as well as distributing the necessary information to all of the actors involved in a short time-window can be difficult, and stressful conditions leave room for human error. Navielektro has recognized this problem, and aims to provide authorities with a unified situation picture that allows operators to quickly asses the situation at hand.",
        "Navielektro's OnCall Search and Rescue system provides users with an efficient toolset for search and rescue modeling and planning. OnCall can be used to pinpoint the location where an incident has occurred, after which the system will perform an analysis based on existing conditions and create a model of the search area. Computed models lessen the operator workload, freeing the operator to act upon the information provided by the system."
      ],
      highlights: [
        "Search area modeling using the Monte-Carlo method",
        "Advanced leeway and drift calculation and clear on-chart visualization in the form of heat maps",
        "Search and rescue planning in accordance with IMO COMSAR",
        "Multi-system, multi-user operation",
        "Automated distribution of SAR tasks",
        "Simulation of planned SAR operations",
        "Real-time monitoring of search and rescue execution",
        "SAR plans take existing or predicted weather conditions into account",
        "Storage of plans and leeway analysis of later retrieval"
      ],
      operationalUse: [
        {
          heading: "Multiple users – one picture",
          text: "OnCall supports multi-user operation, and search and rescue functionality can be operated from multiple workstations simultaneously. Search and rescue models and plans created with OnCall can easily be distributed and shared between different users, actors and compliant systems. When all actors involved in an operation have access to the same information, response times are shortened.",
          image: {
            src: "assets/products/sar/sar-multiple-users.webp",
            alt: "Coast guard patrol boat underway on calm water, leaving a wake",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          heading: "SAR planning and modeling",
          text: "OnCall allows users to determine the search area where the probability for success is the largest, using SAR modeling. The models used for the calculations by Navielektro are field proven and based on research conducted by the U.S. Coast Guard. The models are computed using Monte-Carlo based simulation. The result of the leeway and drift simulation may be presented as a heat-map, using which the likely movements of a track may easily be visualized.",
          image: {
            src: "assets/products/sar/sar-planning-modeling.webp",
            alt: "SAR heat-map showing probable search areas overlaid on a chart, next to a search pattern planning dialog",
            width: 600,
            height: 274
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "In addition to calculating SAR models, OnCall can also be used to perform planning of search and rescue tasks, in accordance with IMO COMSAR. Vessels are assigned a search pattern, after which the system verifies and monitors the progress of the search pattern in real-time – and notifies the operator if search patrols deviate from the planned pattern. Using OnCall, operators can also make different SAR plans prior to execution, and simulate the progress of the search ahead of time. Users can store conducted SAR plans and leeway analysis for later retrieval, as well as maintain SITREP information using IMO/ICAO COMSAR defined SITREP's.",
          theme: "tinted"
        },
        {
          text: "Because vessel movements are logged as part of the standard MATIS or MARITAS implementation, these movements can later be replayed when compiling reports of the SAR operation. The system is also capable of presenting track trajectories if integrated with the Navielektro Track History Analysis service.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/sar.html"
    },
    {
      slug: "routes",
      title: "Route Management",
      category: "Modules",
      status: "archived",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/routes.html"
    },
    {
      slug: "aton",
      title: "Aids to Navigation Monitoring",
      category: "Modules",
      status: "archived",
      summary: "Part of Navielektro's Modules portfolio — a full overview, specifications and documentation will be available here soon.",
      sourceUrl: "https://www.navielektro.fi/aton.html"
    },
    {
      slug: "mmhs",
      title: "Military Message Handling",
      category: "Modules",
      summary: "Exchange information securely and efficiently",
      overviewHeading: "Exchange information securely and efficiently",
      overview: [
        "In today's demanding operational environment, the need to collaborate in real-time is constantly increasing. Human to human interaction is still at the forefront when incidents occur, but when there are multiple actors using different systems within one domain, the exchange of information becomes difficult. Navielektro offers a solution in the form of OnCommand, our Military Message Handling System. Through OnCommand, Navielektro provides an environment where actors can exchange information with each other in a safe and secure way, be it in the form of e-mail or instant messages. Our communication tools are integrated with the geospatial view, which translate to direct presentation of any position or information that is related to an object on the chart.",
        "Navielektro's solution enables exchange of position, static and voyage related data, and also contains a message handling system that enables authorized users to receive and transmit various messages."
      ],
      highlights: [
        "AIS SRM",
        "SMS",
        "EMAIL/SMTP & IMAP",
        "TETRA/SDS",
        "ADATP3"
      ],
      operationalUse: [
        {
          heading: "Military Message Handling - What is that?",
          text: "Standard corporate messaging solutions don't fill the requirements of military message handling, as information is not sent between named individuals but between organizations and roles on the basis of tasks, ranks and position. Military messaging solutions also need to be secure, ensuring that information does not fall into the wrong hands. OnCommand addresses the dedicated and very specific needs of message handling by security and military organizations. The system has been developed for joint and multi-agency operations in close co-operation with the Finnish Navy, Finnish Armed Forces and other customers in the safety and security domain. As a result, the same solution may used all the way from the lowest tactical level to strategic command level.",
          theme: "tinted"
        },
        {
          text: "OnCommand enables quick and efficient communication between different parties and is a versatile messaging toolset. Our MMHS offers both e-mail and instant messaging based on allied communication procedures. The system supports a wide range of military structured messages, such as ADATP3, and can be used for mission planning as well as tactical-, targeting- and information exchange activities. The modular system architecture ensures low costs, whilst maintaining dependable and secure information exchange.",
          theme: "tinted"
        },
        {
          heading: "Role-based messages",
          text: "OnCommand comes with full support for military operating procedures, allowing information to be allocated and delivered not only to individual users, but also based on tasks, ranks and positions. Messages may be sent using the operational role of the user, or as private messages. In order to ensure information security, messages can be encrypted either using the private key of the individual user, or – in the case of role-based communication – using the current working role of the user. The same messaging solution may thus be used both for private communication and communication between organizations or departments. Users may simultaneously operate many different roles, which is often the case for watch-keeping officers regardless of the operative domain."
        },
        {
          heading: "Messaging",
          text: "Navielektro's message handling solution enables users to receive and transmit various messages through a user interface that is similar to most mail clients – and therefore familiar and easy to use. Our messaging component enables the operator to send detailed messages to various operational roles as well as operators in other centers or mobile platforms. Because messaging is integrated into the user interface, users can transmit and receive messages directly from the workstation.",
          image: {
            src: "assets/products/mmhs/mmhs-messaging.webp",
            alt: "Chart view with a messaging inbox panel open, showing a list of received and sent messages",
            width: 600,
            height: 293
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          heading: "Send tactical drawings – in a matter of seconds",
          text: "OnCommand supports exporting and importing of Nato Vector Graphics (NVG) overlays as well as Google KML (KeyHole Markup Language), allowing users to share tactical drawings with each other. Tactical drawings are displayed as chart overlays, so users can instantly incorporate drawings and plans as part of the operational picture.",
          image: {
            src: "assets/products/mmhs/mmhs-tactical-drawings.webp",
            alt: "Chart with yellow tactical sector overlays drawn near tracked units, alongside a target location and messaging panel",
            width: 600,
            height: 320
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "Communicate faster through instant messaging",
          text: "When communication needs are urgent, traditional e-mail may not be enough. For such situations, Navielektro offers an instant messaging tool that allows users on different workstations, operations centers or mobile units to send messages to each other – quickly and efficiently. Instant messages can be sent from user to user, or to instant messaging groups in a chat room. Groups can either be pre-defined, or created in an instant.",
          image: {
            src: "assets/products/mmhs/mmhs-instant-messaging.webp",
            alt: "Chart view with an instant messaging conversation window open over tracked vessel positions",
            width: 600,
            height: 313
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        },
        {
          text: "Because our instant messaging solution is capable of functioning in a distributed fashion, parties can communicate with each other regardless of the physical communication architecture. Navielektro's instant messaging toolset is based on the industry standard XMPP instant messaging protocol and can be deployed using various different services.",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/mmhs.html"
    },
    {
      slug: "radar-processing",
      title: "Radar Processing",
      category: "Modules",
      summary: "Full control of radar processing",
      overviewHeading: "Full control of radar processing",
      overview: [
        "Navielektro's roots lie in radar manufacturing, and as a result we have accumulated expert knowledge on radar data processing and integration. Unlike our competitors, we are involved in radar solutions all the way from the antenna to the individual pixel image. In other words, we provide a one-stop-shop for end-to-end radar solutions – while stile providing integration of third-party systems and sensors.",
        "We offer a solution that makes it possible to get accurate radar video in a multi-radar system. This is done by way of a radar mosaic that processes and presents data from any number of radar sensors. Our solution allows the user to decide exactly how the radar image should be displayed, including everything from which sensor's image should be visible to what geographical area the image should be produced from. Plot information from all connected radar sensors can be displayed simultaneously on any system workstation, ensuring a unified situation picture for all operators."
      ],
      operationalUse: [
        {
          heading: "Adjustments – just a click away",
          text: "Radar controls are an integrated part of the TDF user interface, which means radar settings can be adjusted without ever leaving the situation picture. Radar sensors can be controlled directly from the chart view, by simply selecting a radar on chart and right clicking.",
          image: {
            src: "assets/products/radar-processing/radar-processing-adjustments.webp",
            alt: "Chart view with radar echoes and tracked vessels, with a Radars settings dialog open for adjusting transmitter and pulse settings",
            width: 600,
            height: 296
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/radar-processing.html"
    },
    {
      slug: "video",
      title: "CCTV / Optronics",
      category: "Sensors",
      summary: "CCTV for demanding surveillance operations",
      overviewHeading: "CCTV for demanding surveillance operations",
      overview: [
        "Navielektro manufactures its own range of cost-effective CCTV (Closed Circuit Television) equipment, which may optionally be equipped with IR and IR illumination capabilities. The SVGA and megapixel cameras provide wide dynamic range, and day and night functionality for superb image quality in daylight and dark conditions. The actual CCTV sensor is connected to the CSP (Camera Sensor Processor). The CSP is responsible for managing and controlling the CCTV unit. Commands sent by the operators are transmitted to the CSP over the IP-network."
      ],
      operationalUse: [
        {
          text: "Our system also allows integration of laser goniometers or range finders, in order to facilitate targeting operations.",
          image: {
            src: "assets/products/video/video-operator-console.webp",
            alt: "Operator monitoring CCTV and radar displays at a console, with a wall-mounted situational awareness screen showing a vessel and tracks",
            width: 450,
            height: 450
          },
          variant: "split",
          imagePosition: "right"
        },
        {
          heading: "General",
          text: "The CCTV image from the sensors may be transmitted either using analog or digital IP-based video compression techniques. The CCTV image may be presented to the operators either using a separate CCTV display with video matrix capability or as an embedded image in the TDF operator working position. The CCTV image may optionally be stored using Navielektro's integrated logging system.",
          image: {
            src: "assets/products/video/video-thermal-image.webp",
            alt: "Thermal/infrared CCTV image of a vessel and dock structure at night",
            width: 430,
            height: 430
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/video.html"
    },
    {
      slug: "logging-replay",
      title: "Logging & Replay",
      category: "Modules",
      summary: "Information storage at its best",
      overviewHeading: "Information storage at its best",
      overview: [
        "Massive amounts of data pass through situational awareness systems each day, which means users do not always have time to process everything that is happening at once. In order for operators to write reports or analyze past events, the data that is collected needs to be safely stored and accessible at a later date. Navielektro fulfills this need through offering information storage capabilities that rise to the task regardless of the size of the situational awareness system. Our storage solution stores and logs all of the data that passes through an operations center, and allows users to replay the collected data whenever they want to. This means that operators can view what happened yesterday – or even several weeks ago – as if they were viewing real-time data."
      ],
      highlights: [
        "Radar video",
        "Plot data",
        "Track data (including AIS)",
        "Audio",
        "Digital NERCS Radio",
        "Analog telephone sources",
        "DF Data",
        "Weather information",
        "Multilateration information",
        "Camera CCTV PTZ information",
        "Camera Video"
      ],
      operationalUse: [
        {
          heading: "Effective logging, even at high volume",
          text: "Navielektro's Network Logging System (NLS) can log almost all of the information within a operations center. Stream-based logging services log real-time data for replay purposes, while database logging stores large amounts of data that may later be queried and analyzed using set search criteria. Logging and replay is in managed by different software components, so as not to have replay operations affect logging. In fact, replay and logging components may – if required – be placed on separate computers in order to cope with high volume logging scenarios.",
          theme: "tinted"
        },
        {
          heading: "Log, then replay",
          text: "Logged information can be presented and replayed in our Tactical Display Framework in completely synchronized fashion. Audio, plots, tracks, voice communication, radar video, CCTV video, RDF strobes and more are played back so that the logged situation is completely indistinguishable from live data. Our system is also capable of creating electronic video clips, printouts and screenshots of the replayed data, in order to facilitate sharing and reviewing of important data.",
          image: {
            src: "assets/products/logging-replay/logging-replay-log-viewer.webp",
            alt: "Chart view with tracked units and a Log Viewer panel showing a timeline scrubber for replaying logged data",
            width: 600,
            height: 371
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/logging-replay.html"
    },
    {
      slug: "simulation",
      title: "Training & Simulation",
      category: "Modules",
      summary: "Training made easy",
      overviewHeading: "Training made easy",
      overview: [
        "When training new users, operations center personnel often face the problem of figuring out how to allow uses to train without disrupting work and confusing the situation picture. Furthermore, military users need to know how to act in times of war – with little opportunity to practice in warfare situations. Navielektro offers a solution to these issues in the form of a simulator which makes it possible to conduct operator training as defined per IALA V.103 and other national or agency-specific operational training requirements."
      ],
      operationalUse: [
        {
          heading: "Practice how to respond in challenging situations",
          text: "The training and exercise solution allows users to create simulations of different scenarios, either manually or using track history data. Using track history data to create simulations allows operators to practice how to act in real-life situations after they have occurred, allowing instructors and trainees alike to go over different incidents and improve their handling of such situations in the future. Combining history data with manual movement trajectories provides a speedy way to add realistic traffic to the situation picture, which instructors can then augment by adding manual tracks that change or disrupt the situation. The simulation will look just like the real thing, but because the exercise module is separate from the real-time situational awareness system, users can practice freely without fear of messing up the situation picture.",
          theme: "tinted"
        },
        {
          heading: "Realistic environment",
          text: "In terms of functionality, Navielektro's exercise simulator system is an exact copy of a normal situational awareness system. This means that operator training can be conducted in an environment that is virtually the same as the actual working environment.",
          image: {
            src: "assets/products/simulation/simulation-exercise-editor.webp",
            alt: "Exercise Editor panel over a nautical chart, showing a simulation scenario timeline and playback controls",
            width: 550,
            height: 284
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
      sourceUrl: "https://www.navielektro.fi/simulation.html"
    },
    {
      slug: "monitoring",
      title: "System Monitoring",
      category: "Modules",
      summary: "Constant monitoring",
      overviewHeading: "Constant monitoring",
      overview: [
        "Situational awareness and traffic management systems often consist of numerous interconnected sensors, services, servers and databases. When large systems are deployed, it is paramount that they run smoothly, as connection errors can affect the reliability of the situation picture. Any of Navielektro's situational awareness systems (MARITAS, MATIS, TACIS and TrafficAware) can be equipped with an Operation and Maintenance Service (OMS), which is a user-friendly, autonomous system that constantly monitors all major system components, connections and application services. OMS helps users monitor and verify system operation, ensuring that everything is working the way it should be. OMS also keeps track of connections and notifies the user when errors occur, be it a broken connection or equipment failure."
      ],
      operationalUse: [
        {
          heading: "Cyber defense",
          text: "Navielektro caters to customers that need high data security, and we have a very comprehensive approach to cyber security that involves all aspects of software implementation and design. Our solutions facilitate cyber security operations, which can be completely integrated in our system.",
          theme: "tinted"
        },
        {
          heading: "Get a complete overview from a single workstation",
          text: "Navielektro's OMS provides a constant overview of the entire system. It is capable of monitoring everything, from the operating status of sensors to logical network connections, and offers a complete network overview from one workstation. OMS may be set to log events in the surveillance infrastructure, and the collected information can be displayed on web pages as reports. Responsible personnel can be notified about critical system alarms, either through SMTP E-Mail or SMS messages.",
          theme: "dark"
        },
        {
          heading: "Visualize operational status",
          text: "OMS monitors sensors and radio systems, and provides warnings and alarms for events unfolding in the system. The system may be fully integrated with the operator workstation, providing the operator with a complete and clear view of the current state of the system. In addition to monitoring the various components in a situational awareness system, OMS provides monitoring for the underlying IT and other infrastructure components. The system is capable of SNMP monitoring with compliant devices such as routers, hubs, switches, UPS, computers and more. OMS may also perform monitoring through HTTP/XML interfaces.",
          image: {
            src: "assets/products/monitoring/monitoring-oms-visualization.webp",
            alt: "OMS network visualization showing monitored connections and sensors across a coastal map",
            width: 600,
            height: 330
          },
          variant: "split",
          imagePosition: "left",
          theme: "tinted"
        }
      ],
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
  // Only entries with a `slug` get a detail page (see renderDetail/createIndustry
  // in script.js) - the rest stay plain, non-linked cards exactly as before.
  const industries = [
    {
      title: "Safety & Security",
      slug: "safety-security",
      summary: "Maritime safety and security is our concern",
      image: {
        src: "assets/industries/safety-security/safety-security-hero.jpg",
        alt: "A red-and-white patrol boat crossing rough, wave-battered waters under an overcast sky",
        width: 1920,
        height: 735
      },
      overviewHeading: "Maritime safety and security is our concern",
      overview: [
        "The maritime industry is characterized by a growing quantity of movement and data, and yet stations at MOC's (Maritime Operations Centers) and VTC's (Vessel Traffic Centers) are manned by fewer and fewer operators. This increases the need for automation and multi-tasking. The rapid implementation of sensor systems, networks and other high-grade information sources has multiplied the amount of information available to a level that no human operator is capable of processing.",
        "Navielektro has several decades of experience within the field of maritime surveillance, both when it comes to Vessel Traffic Service and coastal surveillance. We were at the forefront of developing digital Vessel Traffic Management Systems in Europe in the early 90's, and maintaining the safety of life at sea still remains one of our main goals. Our systems aim to collect all of the data needed for effective maritime surveillance into the Recognized Maritime Picture, ensuring that operators can quickly get a comprehensive overview of the situation."
      ],
      operationalUse: [
        {
          heading: "Operator Support",
          text: "Our systems efficiently help manage and lessen the operator workload, providing users with a clear situation picture and decision-making aids. When operators are relieved from tedious tasks such as cross-checking and validating track identifications, they are free to focus on the big picture – and act on the information they receive.",
          image: {
            src: "assets/industries/safety-security/vts-situation-picture.svg",
            alt: "Diagram of sensor data feeding an operator's situation picture, with tools to analyze, filter, email (MMHS), report, use voice/radio, chat, search and share information",
            width: 1010,
            height: 1000
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          text: "Navielektro provides a complete solution when setting up VTMS or Coastal Surveillance systems – everything from sensors, processing modules and software to support and maintenance.",
          theme: "dark"
        }
      ],
      typicalApplicationsHeading: "Applications",
      typicalApplications: [
        "Vessel Traffic Systems",
        "Coastal Surveillance Systems for border protection",
        "Global Maritime Distress and Safety Systems",
        "Voice Systems",
        "Port Administration Systems",
        "Fleet tracking"
      ],
      typicalApplicationsImage: {
        src: "assets/products/maritas/related-port-management.webp",
        alt: "Aerial view of a port with containers, cranes and barges",
        width: 480,
        height: 258
      },
      typicalApplicationsVariant: "split",
      typicalApplicationsImagePosition: "left",
      relatedProducts: [
        {
          title: "MARITAS",
          slug: "maritas",
          image: {
            src: "assets/products/maritas/maritas-overview-thumbnail.webp",
            alt: "Aerial view of a busy port with container ships, cranes and harbor vessels",
            width: 480,
            height: 258
          }
        },
        {
          title: "GMDSS",
          slug: "gmdss",
          image: {
            src: "assets/products/maritas/related-gmdss.webp",
            alt: "Diagram of maritime distress communication systems including COSPAS-SARSAT, INMARSAT, EPIRB and SART",
            width: 480,
            height: 258
          }
        },
        {
          title: "NaviCall",
          slug: "voice",
          image: {
            src: "assets/products/voice/voice-integrated-communication.webp",
            alt: "DSC radio panel and tactical map interface showing tracked vessels with a push-to-talk control panel",
            width: 600,
            height: 266
          }
        }
      ]
    },
    {
      title: "Military",
      slug: "military",
      summary: "Complete situational awareness – complete control",
      image: {
        src: "assets/industries/military/military-hero.jpg",
        alt: "Two fighter jets banking sharply over a snow-covered alpine valley",
        width: 1920,
        height: 735
      },
      overviewHeading: "Complete situational awareness – complete control",
      overview: [
        "Command and Control as well as situational awareness systems are in a state of transition. Many of the systems in use are old ones that have been developed over the course of twenty years, and the development of these systems is relatively expensive. The integration of old systems and technology is a painstaking endeavor, which usually involves considerable supplier limitations as well as high licensing and maintenance costs. Navielektro has identified the need for flexible solutions based on cost-efficient, open technology. We provide solutions for the defense sector with foreseeable and affordable life-cycle costs, that allow operators to visualize, analyze and act on data from multiple sources."
      ],
      operationalUse: [
        {
          heading: "One solution - several applications",
          text: "Our products are extremely versatile, and provide a complete solution for defense purposes. Our tactical display framework collects data from a multitude of sensors, displaying everything in a view that is integrated, comprehensive and still easy to understand. This means that our systems can be used for Naval, Air and Army operations – or for joint operations where all three actors can get a complete view of the situation. Because our solutions have been developed with inter-agency co-operation in mind, different actors and agencies can also share the data of their choice with each other, safely and securely."
        },
        {
          heading: "Operational flexibility",
          text: "Navielektro is constantly developing systems as part of joint operations with European defense actors and NATO, with operational flexibility in mind. Our systems are scalable and extendable, and can be used for everything from high-level strategical surveillance and operation planning to communicating tactical data from individual soldiers. Multi-level, multi-sensor fusion allows our systems to be used for an array of C4ISR applications, including Naval, Joint, Air and Army operations.",
          image: {
            src: "assets/industries/military/military-situation-picture.svg",
            alt: "Diagram of sensor data feeding a situation picture, with tools to analyze, filter, message and chat, use voice/radio, report, plan, search, track and target",
            width: 1107,
            height: 1000
          },
          variant: "split",
          imagePosition: "left"
        },
        {
          text: "All of our systems are modular and scalable, taking growth into account."
        },
        {
          text: "Shorten response times and retain the tactical initiative – using Navielektro's fused situation picture and advanced decision-making tools.",
          theme: "dark"
        }
      ],
      focusAreas: [
        {
          heading: "Army",
          text: "Track and communicate with soldiers on the ground, perform targeting operations and plan tactical maneuvers and routes.",
          image: {
            src: "assets/industries/military/army-thumbnail.jpg",
            alt: "Two soldiers silhouetted against a dusk sky",
            width: 480,
            height: 258
          }
        },
        {
          heading: "Air",
          text: "View air tracks as part of the situation picture and form as comprehensive a COP as possible.",
          image: {
            src: "assets/industries/military/airforce-thumbnail.jpg",
            alt: "Silhouette of a fighter jet against a grey sky",
            width: 480,
            height: 258
          }
        },
        {
          heading: "Navy",
          text: "Conduct operations in fixed centers or on board ships, send data between ship and shore, detect anomalies and perform basic combat management.",
          image: {
            src: "assets/industries/military/navy-thumbnail.jpg",
            alt: "Grey naval patrol vessel underway",
            width: 480,
            height: 258
          }
        }
      ],
      typicalApplicationsHeading: "Applications",
      typicalApplications: [
        "Naval Command and Control Systems",
        "Joint Command and Control Systems",
        "Combat Information Systems"
      ],
      typicalApplicationsImage: {
        src: "assets/industries/military/military-circle.jpg",
        alt: "Soldier operating a laptop inside a field tent, with colleagues visible behind",
        width: 450,
        height: 464
      },
      typicalApplicationsVariant: "split",
      typicalApplicationsImagePosition: "left",
      relatedProducts: [
        {
          title: "MATIS C2",
          slug: "matis",
          image: {
            src: "assets/products/matis/matis-overview-thumbnail.webp",
            alt: "Naval patrol vessel near a rocky, forested coastline",
            width: 480,
            height: 258
          }
        },
        {
          title: "JADIS",
          slug: "jadis",
          image: {
            src: "assets/products/jadis/jadis-overview-thumbnail.webp",
            alt: "Silhouette of a soldier carrying a rifle and pack against a dramatic stormy sky",
            width: 707,
            height: 1000
          }
        },
        {
          title: "Deployed Soldier",
          slug: "deployed-soldier",
          image: {
            src: "assets/products/deployed-soldier/deployed-soldier-hero.webp",
            alt: "Soldier reading a rugged tablet in the field",
            width: 1600,
            height: 1067
          }
        }
      ]
    },
    {
      title: "Intelligent Transport",
      slug: "intelligent-transport",
      summary: "Increasing traffic safety",
      image: {
        src: "assets/industries/intelligent-transport/its-hero.jpg",
        alt: "Motion-blurred yellow train passing a tunnel, with cars in the foreground",
        width: 1920,
        height: 735
      },
      overviewHeading: "Increasing traffic safety",
      overview: [
        "Traffic has grown and developed into massive proportions during the last few decades. More often than not, traffic networks are overloaded – making them more susceptible to disturbances and failures. Many traffic authorities have recognized a need for traffic surveillance and control, establishing round-the-clock control centers that help direct traffic and dispatch maintenance when necessary. The flow and safety of traffic can be vastly improved through utilizing modern technology, but many control centers still use old surveillance systems that make it difficult to process or even obtain all of the information that is available to operators.",
        "Navielektro provides solutions for intelligent traffic and transport that enhance traffic services and telematics. Our IT-solutions are designed to solve problems within road and rail traffic, providing greater traffic safety, efficiency and smoother traffic flow."
      ],
      operationalUse: [
        {
          heading: "Integration is key",
          text: "At Navielektro, we think the purpose of modern surveillance systems should be to make the planning and supervision of traffic and transport related operations as efficient as possible. The ideal situation picture is one where everything is integrated, where operators have access to a wide array of information, but are able to filter the view so only the most relevant data is displayed. When all of the information available is successfully harnessed for surveillance purposes, operators are able to perform their tasks more efficiently.",
          theme: "tinted"
        },
        {
          text: "View road, rail, maritime and air traffic simultaneously. Navielektro specializes in fully integrated systems that display all of the necessary data in a single view, in a manner that is easy to understand.",
          theme: "dark"
        }
      ],
      typicalApplicationsHeading: "Applications",
      typicalApplications: [
        "Road Traffic Control Systems",
        "Rail Traffic Control Systems",
        "Fleet Tracking and Tracing Systems"
      ],
      typicalApplicationsImage: {
        src: "assets/industries/intelligent-transport/traffic-circle.jpg",
        alt: "Aerial view of a multi-lane highway toll plaza with heavy traffic",
        width: 450,
        height: 464
      },
      typicalApplicationsVariant: "split",
      typicalApplicationsImagePosition: "left",
      typicalApplicationsTheme: "tinted"
    },
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
