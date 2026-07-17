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
      slug: "enguard",
      title: "enGuard",
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
