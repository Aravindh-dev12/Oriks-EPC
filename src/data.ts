const solar='https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200';
const grid='https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transmission='https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200';
const wind='https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transport='https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200';

export const works=[
 {
  slug:'solar',
  category:'SOLAR / GENERATION',
  title:'Solar Projects',
  short:'Solar EPC support, electrical balance-of-plant and grid-facing infrastructure for utility, commercial and industrial assets.',
  headline:'Build the plant with the grid in mind.',
  description:'Solar delivery is not only a module-and-structure exercise. It depends on site conditions, DC and AC systems, protection, evacuation, testing, documentation and the operating context around the plant.',
  image:'https://images.pexels.com/photos/15663101/pexels-photo-15663101/free-photo-of-solar-panel-field.jpeg?auto=compress&cs=tinysrgb&w=2200',
  bullets:['Site and EPC scope coordination','DC / AC electrical infrastructure','Power evacuation interfaces','HT, protection and metering coordination','Testing, documentation and handover'],
  details:['Translate drawings and site constraints into an executable package.','Coordinate electrical systems around the generation block and balance-of-plant.','Keep plant output connected to the receiving infrastructure and schedule.','Align equipment, protection, cable and grid-interface requirements.','Build evidence into construction and commissioning instead of after it.'],
  steps:['Review site, drawings and delivery scope','Coordinate procurement and construction interfaces','Inspect, test and resolve punch points','Compile handover evidence'],
  stepDetails:['Confirm access, layout, quantities, interfaces and milestones.','Keep contractors and material readiness aligned to the work sequence.','Verify installation quality and functional readiness.','Close documentation gaps before the package is considered complete.'],
  projects:[
    {
      id:'solar-1',
      title:'Solar Project 1 — 240 MW Utility Solar Park',
      name:'Project Solar 1',
      capacity:'240 MW',
      client:'Leading Clean Energy IPP Developer',
      location:'Karur District, Tamil Nadu, India',
      status:'Commissioned & Energised',
      tag:'FLAGSHIP UTILITY EPC',
      scope:'Turnkey civil balance-of-plant, pile foundation drilling & casting, mounting structure assembly, tracker alignment, DC array cabling, inverter station integration, and power evacuation to grid substation.',
      image:'/projects/solar-1/aerial-overview-1.jpg',
      stat:'240 MW Utility Scale',
      metrics:[
        {label:'Total Capacity',value:'240 MW'},
        {label:'Location',value:'Karur, Tamil Nadu'},
        {label:'Client',value:'Utility IPP Developer'},
        {label:'Scope',value:'Civil BOS, MMS, Foundation, Cabling'},
        {label:'Site Acres',value:'950+ Acres'},
        {label:'Evacuation',value:'230kV / 110kV Substation Intertie'}
      ],
      media:[
        {type:'image',url:'/projects/solar-1/aerial-overview-1.jpg',title:'Aerial Drone Overview — 240 MW Field Array'},
        {type:'image',url:'/projects/solar-1/DJI_0028.JPG',title:'Drone High-Angle Panorama — Solar Array & Access Corridors (DJI_0028)'},
        {type:'image',url:'/projects/solar-1/DJI_0031.JPG',title:'Overhead PV Table Pitch & Mounting Rows (DJI_0031)'},
        {type:'image',url:'/projects/solar-1/DJI_0032.JPG',title:'Structural Grid Calibration & Inverter Blocks (DJI_0032)'},
        {type:'image',url:'/projects/solar-1/DJI_0034.JPG',title:'High-Altitude Drone Mapping & Substation Axis (DJI_0034)'},
        {type:'image',url:'/projects/solar-1/DJI_0035.JPG',title:'Complete Field Layout & Boundary Fencing (DJI_0035)'},
        {type:'image',url:'/projects/solar-1/DJI_0058.JPG',title:'Tracker Alignment & DC Trenching Corridors (DJI_0058)'},
        {type:'image',url:'/projects/solar-1/aerial-panorama-2.jpg',title:'Wide Angle Horizon — Solar Array & Substation Road'},
        {type:'image',url:'/projects/solar-1/drone-grid-zoom-3.jpg',title:'Precision Grid Section — Mounting Rails & Tables'},
        {type:'image',url:'/projects/solar-1/drone-grid-angle-4.jpg',title:'Array Pitch & Row Alignment Inspection'},
        {type:'image',url:'/projects/solar-1/site-mounting-5.jpg',title:'Field Engineer Mounting Structure Verification'},
        {type:'image',url:'/projects/solar-1/site-crew-6.jpg',title:'Propecare Infra On-Site Quality Assurance Team'},
        {type:'image',url:'/projects/solar-1/site-foundation-7.jpg',title:'Concrete Concreting & Foundation Casting'}
      ],
      videos:[
        {
          id:'flight-1',
          title:'Drone Survey Flight 01 — Full Array Aerial Flyover',
          flight:'FLIGHT LOG #01',
          duration:'1:15',
          resolution:'4K UHD · 60 FPS',
          altitude:'85m AGL',
          filename:'DJI_0025.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0025.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0028.JPG'
        },
        {
          id:'flight-2',
          title:'Drone Aerial Sweep 02 — Substation & 33kV Inverter Bays',
          flight:'FLIGHT LOG #02',
          duration:'1:32',
          resolution:'4K UHD · 60 FPS',
          altitude:'70m AGL',
          filename:'DJI_0038.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0038.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0031.JPG'
        },
        {
          id:'flight-3',
          title:'Drone Field Inspection 03 — Tracker Calibration & Row Pitch',
          flight:'FLIGHT LOG #03',
          duration:'0:58',
          resolution:'4K UHD · 60 FPS',
          altitude:'45m AGL',
          filename:'DJI_0046.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0046.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0032.JPG'
        },
        {
          id:'flight-4',
          title:'Drone Low-Altitude Pass 04 — Cable Trenching & Civil Foundations',
          flight:'FLIGHT LOG #04',
          duration:'2:04',
          resolution:'4K UHD · 60 FPS',
          altitude:'35m AGL',
          filename:'DJI_0050.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0050.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0034.JPG'
        },
        {
          id:'flight-5',
          title:'Drone Horizon Sweep 05 — Boundary Fencing & Grid Intertie',
          flight:'FLIGHT LOG #05',
          duration:'1:45',
          resolution:'4K UHD · 60 FPS',
          altitude:'95m AGL',
          filename:'DJI_0061.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0061.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0035.JPG'
        },
        {
          id:'flight-6',
          title:'Drone High-Resolution Showcase 06 — 240 MW Energised Solar Park',
          flight:'FLIGHT LOG #06',
          duration:'0:42',
          resolution:'4K UHD · 60 FPS',
          altitude:'110m AGL',
          filename:'DJI_0097.MP4',
          localSrc:'/projects/solar/Solar%201/DJI_0097.MP4',
          webStream:'https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4',
          poster:'/projects/solar-1/DJI_0058.JPG'
        }
      ],
      videoNotice:'High-definition 4K drone aerial surveys and interactive web streaming player for Project Solar 1.'
    },
    {
      id:'solar-2',
      title:'Solar Project 2 — 150 MW Ground Mount Solar Facility',
      name:'Project Solar 2',
      capacity:'150 MW',
      client:'Tamil Nadu Green Energy Corporation / Private IPP',
      location:'Tirupur Cluster, Tamil Nadu, India',
      status:'Operational Handover',
      tag:'GROUND-MOUNT EPC',
      scope:'Ramming alignment, fixed-tilt PV structure fabrication, tracker calibration, 33kV internal collection system, and transformer yard interface.',
      image:'/projects/solar-1/drone-grid-zoom-3.jpg',
      stat:'150 MW Capacity',
      metrics:[
        {label:'Total Capacity',value:'150 MW'},
        {label:'Location',value:'Tirupur Cluster, TN'},
        {label:'Client',value:'Renewable Power Developer'},
        {label:'Scope',value:'MMS Installation & 33kV Collection'},
        {label:'Grid Tie',value:'110kV Pooling Substation'}
      ],
      media:[
        {type:'image',url:'/projects/solar-1/drone-grid-zoom-3.jpg',title:'Tracker Calibration and Row Inspection'},
        {type:'image',url:'/projects/solar-1/site-mounting-5.jpg',title:'Structure Alignment Quality Check'}
      ]
    },
    {
      id:'solar-3',
      title:'Solar Project 3 — 85 MW Industrial Open-Access Park',
      name:'Project Solar 3',
      capacity:'85 MW',
      client:'Commercial & Industrial Consortium',
      location:'Dindigul Region, Tamil Nadu, India',
      status:'Energised',
      tag:'OPEN-ACCESS C&I',
      scope:'High-voltage evacuation line, metering substation setup, inverter transformer stations, and HT panel interconnection for industrial power feed.',
      image:'/projects/solar-1/aerial-panorama-2.jpg',
      stat:'85 MW C&I Evacuation',
      metrics:[
        {label:'Total Capacity',value:'85 MW'},
        {label:'Location',value:'Dindigul, TN'},
        {label:'Client',value:'C&I Textile & Heavy Industry'},
        {label:'Scope',value:'HT Evacuation & Metering'}
      ],
      media:[
        {type:'image',url:'/projects/solar-1/aerial-panorama-2.jpg',title:'Open-Access Solar Farm Panorama'},
        {type:'image',url:'/projects/solar-1/site-crew-6.jpg',title:'Propecare Field Execution Crew'}
      ]
    },
    {
      id:'solar-4',
      title:'Solar Project 4 — 120 MW High-Efficiency BOS Installation',
      name:'Project Solar 4',
      capacity:'120 MW',
      client:'National Renewable Energy OEM / Developer',
      location:'Coimbatore Solar Belt, Tamil Nadu',
      status:'Commissioning Stage',
      tag:'EBoP INTEGRATION',
      scope:'Specialized batch mix foundation casting, DC trenching, module interconnections, SCADA weather station integration, and pre-commissioning testing.',
      image:'/projects/solar-1/site-foundation-7.jpg',
      stat:'120 MW EBoP Package',
      metrics:[
        {label:'Total Capacity',value:'120 MW'},
        {label:'Location',value:'Coimbatore Belt, TN'},
        {label:'Client',value:'National EPC Partner'},
        {label:'Scope',value:'Civil BOS, SCADA & Testing'}
      ],
      media:[
        {type:'image',url:'/projects/solar-1/site-foundation-7.jpg',title:'Civil BOS Concreting & Foundation Casting'},
        {type:'image',url:'/projects/solar-1/aerial-overview-1.jpg',title:'Array Infrastructure Layout'}
      ]
    },
    {
      id:'solar-5',
      title:'Solar Project 5 — 60 MW Rooftop & Distributed Industrial Solar',
      name:'Project Solar 5',
      capacity:'60 MW',
      client:'Industrial Manufacturing Hub',
      location:'Karur & Erode Industrial Zones, TN',
      status:'Operational',
      tag:'DISTRIBUTED POWER',
      scope:'Factory roof structural reinforcement, non-penetrating mounting fixtures, string inverter integration, and zero-export protection synchronisation.',
      image:'/projects/solar-1/site-crew-6.jpg',
      stat:'60 MW Distributed',
      metrics:[
        {label:'Total Capacity',value:'60 MW'},
        {label:'Location',value:'Karur & Erode, TN'},
        {label:'Client',value:'Automotive & Manufacturing Facilities'},
        {label:'Scope',value:'Rooftop & Ground Hybrid Installation'}
      ],
      media:[
        {type:'image',url:'/projects/solar-1/site-crew-6.jpg',title:'Site Crew Safety & Execution Review'},
        {type:'image',url:'/projects/solar-1/drone-grid-angle-4.jpg',title:'Array Alignment Quality Audit'}
      ]
    }
  ]
 },
 {
  slug:'windmill',
  category:'WIND / TURBINE INFRASTRUCTURE',
  title:'Wind Projects',
  short:'Electrical infrastructure, balance-of-plant coordination and site interfaces for wind-energy projects.',
  headline:'Wind projects combine power infrastructure with difficult physical access.',
  description:'Wind sites add long-distance access, turbine-component logistics, construction sequencing and electrical collection or evacuation interfaces. Propercare separates those constraints, then reconnects them into one delivery sequence.',
  image:'https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200',
  bullets:['Wind-farm electrical works','Collection and pooling systems','Evacuation infrastructure','Turbine-site interface coordination','Testing and commissioning'],
  details:['Coordinate site electrical packages around turbine and civil interfaces.','Support collection and pooling infrastructure from turbine strings toward the grid interface.','Plan the receiving infrastructure with protection and energisation in view.','Make access, delivery windows and site readiness visible to the project team.','Close the loop through inspection, testing and commissioning records.'],
  steps:['Map turbine, electrical and logistics interfaces','Prepare package sequence and site readiness','Execute electrical and support works','Test, energise and hand over'],
  stepDetails:['Identify dependencies between turbine deliveries, civil works and electrical packages.','Align materials, crews, access and work fronts.','Control construction against the approved sequence.','Compile test results and readiness evidence for the next stage.'],
  projects:[
    {
      id:'wind-1',
      title:'Wind Project 1 — 300 MW Muppandal Wind Corridor Substation',
      name:'Project Wind 1',
      capacity:'300 MW',
      client:'Global Turbine OEM & State Utility',
      location:'Muppandal, Kanyakumari, Tamil Nadu',
      status:'Commissioned',
      tag:'POOLING SUBSTATION & 33kV',
      scope:'Turnkey 33kV/230kV pooling substation, feeder switchgear installation, overhead power evacuation towers, and grid intertie synchronization.',
      image:'https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'300 MW Pooling Capacity',
      metrics:[
        {label:'Total Capacity',value:'300 MW'},
        {label:'Location',value:'Muppandal Corridor, TN'},
        {label:'Client',value:'Global OEM & IPP'},
        {label:'Scope',value:'Pooling Substation & 33kV Lines'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Turbine String Array & Substation Approach'}
      ]
    },
    {
      id:'wind-2',
      title:'Wind Project 2 — 180 MW Kayathar Heavy Hardstand Engineering',
      name:'Project Wind 2',
      capacity:'180 MW',
      client:'Independent Wind Power Producer',
      location:'Kayathar, Thoothukudi District, TN',
      status:'Operational',
      tag:'HARDSTAND & CIVIL BOP',
      scope:'65 crane pads and heavy-lift hardstands engineered for 800-tonne crawler crane mobilization, turbine pad compaction, and access road stabilization.',
      image:'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'65 Heavy Turbine Pads',
      metrics:[
        {label:'Total Capacity',value:'180 MW'},
        {label:'Location',value:'Kayathar Wind Belt, TN'},
        {label:'Client',value:'Renewable Wind IPP'},
        {label:'Scope',value:'Crane Hardstands & Internal Roads'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Heavy Hardstand Infrastructure Construction'}
      ]
    },
    {
      id:'wind-3',
      title:'Wind Project 3 — 125 MW Udumalpet WTG Collection Network',
      name:'Project Wind 3',
      capacity:'125 MW',
      client:'Leading Clean Energy Conglomerate',
      location:'Udumalpet Wind Zone, Tirupur, TN',
      status:'Commissioned',
      tag:'33kV CABLE INTERFACES',
      scope:'33kV underground and overhead collection circuits, transformer pad connections, ring main unit installation, and protection verification.',
      image:'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'125 MW Collection',
      metrics:[
        {label:'Total Capacity',value:'125 MW'},
        {label:'Location',value:'Udumalpet Zone, TN'},
        {label:'Client',value:'Clean Energy Developer'},
        {label:'Scope',value:'33kV Collection Network & RMU'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'33kV Switchyard & Line Interconnection'}
      ]
    },
    {
      id:'wind-4',
      title:'Wind Project 4 — 210 MW Palakkad Gap Component Staging',
      name:'Project Wind 4',
      capacity:'210 MW',
      client:'Turbine OEM Manufacturing Partner',
      location:'Palakkad Pass - Pollachi Corridor',
      status:'Executed',
      tag:'STAGING & MARSHALLING',
      scope:'Centralized 25-acre marshalling yard management, tower section staging, nacelle mechanical inspection, and precision site haulage dispatch.',
      image:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'210 MW Turbine Logistics',
      metrics:[
        {label:'Total Capacity',value:'210 MW'},
        {label:'Location',value:'Pollachi - Palakkad, TN/KL'},
        {label:'Client',value:'Global Turbine OEM'},
        {label:'Scope',value:'Marshalling Yard & Just-in-Time Delivery'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Turbine Component Marshalling & Logistics'}
      ]
    },
    {
      id:'wind-5',
      title:'Wind Project 5 — 90 MW Repowering & Substation Upgrade',
      name:'Project Wind 5',
      capacity:'90 MW',
      client:'Tamil Nadu Power Utility Partner',
      location:'Dharapuram, Tirupur District, TN',
      status:'Commissioned',
      tag:'REPOWERING & MODERNIZATION',
      scope:'Decommissioning coordination for aging turbines, site civil reprofiling for modern high-capacity 3.3MW WTGs, and pooling yard protection upgrade.',
      image:'https://images.pexels.com/photos/33689077/pexels-photo-33689077/free-photo-of-engineer-inspects-power-transmission-tower-outdoors.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'90 MW Modernization',
      metrics:[
        {label:'Total Capacity',value:'90 MW'},
        {label:'Location',value:'Dharapuram Belt, TN'},
        {label:'Client',value:'Power Generation Group'},
        {label:'Scope',value:'Repowering Civil & Substation Retracking'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/33689077/pexels-photo-33689077/free-photo-of-engineer-inspects-power-transmission-tower-outdoors.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'High Voltage Testing & Verification'}
      ]
    }
  ]
 },
 {
  slug:'transport',
  category:'ODC / HEAVY MOVEMENT',
  title:'Transport & Logistics',
  short:'Route-led movement of oversized renewable and industrial equipment, from cargo assessment through site delivery.',
  headline:'The safest heavy movement is engineered before it moves.',
  description:'Industry leaders in wind and ODC logistics emphasise cargo analysis, route surveys, equipment selection, permits, escorts, staging and site readiness. Propercare uses that project logic to frame every movement enquiry.',
  image:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200',
  bullets:['Cargo and dimension assessment','Route survey and feasibility','ODC equipment planning','Permit and movement coordination','Site delivery and handover'],
  details:['Start with the actual dimensions, weight, lifting points and handling limitations.','Review roads, turns, bridges, clearances, access and temporary works.','Match the transport configuration to cargo and route conditions.','Coordinate the approvals and movement controls needed for execution.','Align arrival, unloading, lifting and site acceptance.'],
  steps:['Capture cargo and origin / destination data','Survey and validate the route','Engineer the movement and mobilisation','Deliver, unload and close the movement'],
  stepDetails:['Gather drawings, dimensions, weight, target dates and site contacts.','Identify constraints before equipment is committed.','Define configuration, sequence, controls and responsibilities.','Coordinate the final approach and proof of delivery.'],
  projects:[
    {
      id:'transport-1',
      title:'Transport Project 1 — 160T Heavy Power Transformer Haulage',
      name:'Project Transport 1',
      capacity:'160T Payload',
      client:'State Transmission Corporation / Transformer OEM',
      location:'Chennai Port to Central Substation, Karur, TN',
      status:'Successfully Delivered',
      tag:'ODC HEAVY HAULAGE',
      scope:'16-axle hydraulic multi-axle modular trailer transport of 160-tonne 400kV generator transformer across 380 km highway with comprehensive bridge bypass engineering.',
      image:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'160-Tonne Single Piece',
      metrics:[
        {label:'Cargo Weight',value:'160 Tonnes'},
        {label:'Equipment',value:'16-Axle Hydraulic Modular Trailer'},
        {label:'Route Distance',value:'380 km Inter-district Haul'},
        {label:'Clearance',value:'NHAI & MoRTH Special Permits'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Hydraulic Modular Multi-Axle Haulage En Route'}
      ]
    },
    {
      id:'transport-2',
      title:'Transport Project 2 — 84m Long Rotor Blade Fleet Movement',
      name:'Project Transport 2',
      capacity:'84-Metre Blades',
      client:'Leading Wind Turbine Manufacturer',
      location:'Tuticorin Harbor to Muppandal Wind Park',
      status:'Completed on Schedule',
      tag:'WIND BLADE SPECIALIST',
      scope:'Conveyance of 36 rotor blades measuring 84.5 metres each using specialized extendable triple-telescopic blade trailers with hydraulic turning adapters.',
      image:'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'36 Blades Moved (84.5m Each)',
      metrics:[
        {label:'Blade Length',value:'84.5 Metres Each'},
        {label:'Volume',value:'36 Blades Moved'},
        {label:'Equipment',value:'Extendable Triple-Telescopic Trailers'},
        {label:'Safety',value:'Zero-Incident Convoy Operations'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Wind Blade Transport Fleet Convoy'}
      ]
    },
    {
      id:'transport-3',
      title:'Transport Project 3 — 400kV Gas Insulated Switchgear (GIS) Logistics',
      name:'Project Transport 3',
      capacity:'Specialized ODC Package',
      client:'EPC Switchgear Multilateral Contractor',
      location:'Bengaluru to Coimbatore Substation',
      status:'Delivered & Placed',
      tag:'SENSITIVE GIS CARGO',
      scope:'Air-suspension low-bed trailer transport of sensitive GIS compartments with shock-logging telemetry and direct bay-positioning offloading.',
      image:'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'Zero-G Shock Log Compliance',
      metrics:[
        {label:'Cargo',value:'400kV GIS Modules'},
        {label:'Trailer',value:'Air-Suspension Low-Bed Fleet'},
        {label:'Monitoring',value:'Real-Time 3-Axis Shock Loggers'},
        {label:'Destination',value:'Indoor Substation Bay'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Substation Bay Delivery & Offloading'}
      ]
    },
    {
      id:'transport-4',
      title:'Transport Project 4 — Multimodal Port-to-Site Tower Logistics',
      name:'Project Transport 4',
      capacity:'72 WTG Tower Sections',
      client:'Wind Farm Project Developer',
      location:'Ennore Port to Tirunelveli Site',
      status:'Completed',
      tag:'MULTIMODAL ODC',
      scope:'Vessel discharge, port marshaling, long-distance road haulage, bridge structural load recalculation, and night transport under police pilot escort.',
      image:'https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'72 Tower Sections Delivered',
      metrics:[
        {label:'Cargo',value:'72 Wind Tower Sections'},
        {label:'Port',value:'Ennore Port, Chennai'},
        {label:'Transit',value:'Night-time Highway Convoy'},
        {label:'Status',value:'100% On-Time Delivery'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/2888337/pexels-photo-2888337.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Tower Section Convoy & Site Approach'}
      ]
    },
    {
      id:'transport-5',
      title:'Transport Project 5 — Complete Turnkey Route Survey & Civil Bypass',
      name:'Project Transport 5',
      capacity:'420 km Route Clearance',
      client:'Renewable Heavy Haulage Operator',
      location:'Southern Corridor, Tamil Nadu & Kerala',
      status:'Engineered & Cleared',
      tag:'ROUTE FEASIBILITY',
      scope:'Laser 3D clearance scanning, turning radius computer simulation, temporary median modifications, overhead wire lifts, and bridge reinforcement verification.',
      image:'https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200',
      stat:'420 km Route Feasibility',
      metrics:[
        {label:'Survey Scope',value:'420 km Total Corridor'},
        {label:'Bypass Works',value:'12 Temporary Civil Deviations'},
        {label:'Technology',value:'3D Laser Clearance Profiling'},
        {label:'Compliance',value:'Complete PWD & NH Approvals'}
      ],
      media:[
        {type:'image',url:'https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200',title:'Corridor Route Survey & Road Engineering'}
      ]
    }
  ]
 }
];
export const services=[
 {slug:'epc',code:'EPC',title:'EPC & EBoP',lead:'Integrated project support from engineering scope through construction and handover.',headline:'Make engineering intent executable at site.',description:'A coordinated package for renewable infrastructure where engineering, procurement, construction, quality and handover have to move as one sequence.',short:'Engineering, procurement and construction packages coordinated around site realities and handover requirements.',image:works[0].image,why:'Renewable EPC work creates risk at the interfaces between design, materials, contractors and site execution.',outcome:'Propercare focuses on making responsibilities, readiness and acceptance criteria visible before field activity accelerates.',checkpoints:[['SCOPE','Drawings, quantities, responsibilities and acceptance criteria are clear.'],['MATERIAL','Critical equipment and materials are aligned with the construction sequence.'],['SITE','Work fronts, access, safety controls and contractor interfaces are ready.'],['CLOSE','Quality records, testing and punch-list closure support handover.']]},
 {slug:'evacuation',code:'EVACUATION',title:'Power Evacuation',lead:'Plant-to-grid infrastructure coordinated around collection, transformation, protection and energisation.',headline:'The generation plant is only useful when the power can leave it.',description:'Power evacuation packages connect the generating asset to the receiving network through cables, transformers, switchgear, protection, metering and associated interfaces.',short:'Collection, transformation and grid-interface infrastructure from plant to receiving point.',image:transmission,why:'Evacuation systems cross electrical, civil, protection and grid-approval boundaries.',outcome:'We organise the package around those dependencies so construction and commissioning are sequenced toward energisation.',checkpoints:[['COLLECTION','Cable routes, terminations and collection interfaces are defined.'],['TRANSFORM','Transformer and switchgear interfaces are coordinated.'],['PROTECTION','Protection, metering and control requirements are tracked.'],['ENERGISE','Tests, records and readiness checks support energisation.']]},
 {slug:'substations',code:'SUBSTATIONS',title:'Substations & Switchyards',lead:'Primary and secondary systems coordinated for controlled power transfer, protection and metering.',headline:'A substation is a system of interfaces, not a single equipment list.',description:'Delivery requires coordination across layout, primary equipment, control, protection, earthing, cabling, interlocking, testing and as-built documentation.',short:'Primary and secondary systems for controlled power transfer, protection and metering.',image:grid,why:'Substation packages become difficult when primary, secondary and commissioning workstreams drift apart.',outcome:'Our delivery view keeps equipment, wiring, testing and documentation moving toward the same energisation milestone.',checkpoints:[['PRIMARY','Equipment layout, clearances and interfaces are aligned.'],['SECONDARY','Control, protection, metering and interlocking are coordinated.'],['TEST','Inspection and functional test sequences are agreed.'],['HANDOVER','As-built records and test evidence are complete.']]},
 {slug:'testing',code:'TESTING',title:'Testing & Commissioning',lead:'Inspection, testing, functional verification and handover support before an asset enters operation.',headline:'Commissioning is where the project proves itself.',description:'Testing turns installed equipment into an operating system. It needs approved methods, traceable records, issue control and clear readiness decisions.',short:'Inspection, testing, functional verification and synchronisation support before handover.',image:'https://images.pexels.com/photos/33689077/pexels-photo-33689077/free-photo-of-engineer-inspects-power-transmission-tower-outdoors.jpeg?auto=compress&cs=tinysrgb&w=2200',why:'A technically complete installation can still be operationally unready if testing evidence and interfaces are incomplete.',outcome:'We help structure inspection, testing, defect close-out and readiness documentation around the energisation sequence.',checkpoints:[['PLAN','Test methods, instruments, responsibilities and prerequisites are known.'],['VERIFY','Equipment, cables, protection and interlocks are checked.'],['CLOSE','Defects and punch points are tracked to resolution.'],['PROVE','Test records and readiness evidence support handover.']]}
];
export const sectors=[
 {name:'SOLAR',focus:'Generation + electrical balance-of-plant'},
 {name:'WIND',focus:'Turbine sites + collection + access'},
 {name:'ODC',focus:'Cargo + route + site delivery'}
];
export const clients=[
 {name:'Renewable developers & asset owners',need:'Need predictable progress, visible risk and confidence that site packages are ready when required.',value:'Visibility + accountability'},
 {name:'EPC contractors',need:'Need execution support that fits an existing engineering package without creating new coordination gaps.',value:'Interface discipline'},
 {name:'Wind & solar OEM ecosystems',need:'Need site, electrical and logistics activities to respect equipment and delivery requirements.',value:'Technical coordination'},
 {name:'Industrial project teams',need:'Need heavy equipment and infrastructure moved safely through constrained routes and sites.',value:'Route-led planning'},
 {name:'Power & grid stakeholders',need:'Need protection, testing, documentation and energisation readiness to converge.',value:'Commissioning readiness'},
 {name:'Operations & maintenance teams',need:'Need clear records and practical handover information after construction activity ends.',value:'Lifecycle continuity'}
];
export const articles=[
 {slug:'india-renewable-buildout-2026',tag:'MARKET',date:'05 OCT 2026',readTime:'6 MIN READ',title:'India’s renewable buildout is accelerating — but execution is becoming the real differentiator',text:'India’s renewable capacity continues to expand at record pace. For EPC and infrastructure teams, the harder question is no longer whether projects will be built, but whether land, transmission, procurement and commissioning can keep up.',image:solar,source:'https://mnre.gov.in/en/physical-progress/',sourceName:'MNRE — Physical Achievements',content:[['The scale is moving quickly','MNRE reported 168.04 GW of cumulative solar capacity and 58.52 GW of wind capacity as of 31 August 2026. Solar additions during April–August 2026 alone were 17.78 GW, while wind additions reached 2.43 GW.'],['Execution is now a systems problem','The strongest project teams treat engineering, procurement, construction, evacuation and commissioning as connected workstreams. A delay in one interface can hold back an otherwise complete plant.'],['What this means for EPC teams','Project plans should identify material readiness, access, grid interfaces, protection requirements, testing prerequisites and documentation milestones before mobilisation. The objective is predictable progress, not activity for activity’s sake.']]},
 {slug:'solar-market-1h-2026',tag:'SOLAR',date:'05 OCT 2026',readTime:'5 MIN READ',title:'27 GW in six months: what India’s 1H 2026 solar record means for project execution',text:'India added a record 27 GW of solar in the first half of 2026. The next competitive advantage is turning awarded capacity into commissioned, grid-ready assets without losing control of interfaces.',image:solar,source:'https://www.mercomindia.com/india-adds-record-27-gw-of-solar-capacity-in-first-half-of-2026',sourceName:'Mercom India Research',content:[['A record first half','Mercom India reported 27 GW of solar capacity additions in 1H 2026, 49% higher than the same period in 2025. Cumulative solar capacity reached about 165 GW by June 2026.'],['The pipeline is not the same as completed infrastructure','Land, transmission connectivity, equipment availability, PPAs and approvals still determine whether projects move from awarded capacity to energised assets. Large-scale projects represented 83% of cumulative solar capacity at mid-year.'],['The EPC implication','The execution plan should connect DC works, AC collection, transformers, switchgear, evacuation, protection, testing and handover rather than managing them as isolated packages.']]},
 {slug:'tamil-nadu-open-access',tag:'TAMIL NADU',date:'05 OCT 2026',readTime:'5 MIN READ',title:'Tamil Nadu’s solar open-access market: why execution discipline matters',text:'Tamil Nadu remains an important market for renewable power procurement. For C&I customers and project developers, commercial opportunity increasingly depends on predictable implementation and grid readiness.',image:grid,source:'https://www.mercomindia.com/solar-and-battery-storage-lead-ci-shift-toward-clean-power-procurement',sourceName:'Mercom India — C&I Research',content:[['A strong C&I use case','Mercom reported approximately 2.7 GW of solar open-access capacity in Tamil Nadu as of September 2025, underlining the state’s importance in the segment.'],['Open access creates more interfaces','Project success depends on generation, scheduling, evacuation, approvals, metering and the receiving consumer or network. These interfaces need to be planned together.'],['Why local execution matters','Site access, contractor coordination, inspection and documentation can materially affect the commissioning timeline. A field partner should make these dependencies visible early and keep evidence aligned with the final energisation sequence.']]},
 {slug:'solar-plus-storage',tag:'STORAGE',date:'05 OCT 2026',readTime:'5 MIN READ',title:'Why solar projects are becoming storage-and-grid projects',text:'Battery storage is moving closer to the centre of renewable project planning as developers and policymakers focus on grid flexibility and reliability.',image:transmission,source:'https://mnre.gov.in/en/whats-new/',sourceName:'MNRE — What’s New',content:[['The policy signal is clear','MNRE’s current updates include viability-gap-funding measures for battery energy storage and an advisory on co-locating storage with solar projects to improve grid stability and cost efficiency.'],['Storage changes the execution sequence','A solar-plus-storage project introduces additional equipment, protection, controls, cabling, testing and operational interfaces. These should be reflected in engineering and commissioning plans from the beginning.'],['The practical takeaway','EPC teams should define where storage connects, how protection and controls interact, what testing proves readiness and which documents are required before commercial operation.']]},
 {slug:'wind-logistics-route-intelligence',tag:'WIND',date:'05 OCT 2026',readTime:'6 MIN READ',title:'Wind logistics starts with route intelligence, not a truck',text:'As turbine components become larger and routes more constrained, safe wind logistics depends on understanding the complete journey before selecting the movement configuration.',image:wind,source:'https://www.bws.net/solutions/transport/wind-turbine-transport',sourceName:'Blue Water Shipping — Wind Turbine Transport',content:[['Start with the cargo','Blade length, nacelle dimensions, tower sections, weight, lifting points and handling limits define the movement problem. Cargo data should be complete before transport equipment is committed.'],['Then engineer the route','Road geometry, bridges, clearances, turning radii, gradients, utilities, temporary works and site approach can change the feasibility of a movement. Route surveys convert assumptions into decisions.'],['Finally connect route to site readiness','Arrival is only successful when the receiving site can accept, unload, stage and move the component to its final position. Transport planning should therefore sit alongside civil and construction sequencing.']]},
 {slug:'odc-cargo-first',tag:'LOGISTICS',date:'05 OCT 2026',readTime:'5 MIN READ',title:'ODC planning: cargo first, equipment second',text:'Oversized and heavy cargo movements become more predictable when the cargo characteristics drive the transport configuration rather than the other way around.',image:transport,source:'https://www.ntclogistics.in/renewable-logistics/',sourceName:'NTC Logistics — Renewable Logistics',content:[['The cargo defines the problem','Dimensions, gross weight, centre of gravity, lifting points, fragility and unloading requirements determine what equipment and route controls are appropriate.'],['Customisation can be necessary','Renewable logistics providers increasingly describe specialised trailers and project-specific configurations because standard fleet assumptions do not always fit long blades, heavy equipment or constrained access.'],['Treat the final kilometres as engineering','A route can be technically passable yet operationally difficult at the site gate. Arrival geometry, laydown space, lifting access and timing need the same attention as the public-road journey.']]},
 {slug:'commissioning-as-proof',tag:'COMMISSIONING',date:'05 OCT 2026',readTime:'5 MIN READ',title:'Commissioning is not paperwork — it is the project proving itself',text:'A technically installed asset is not automatically an operationally ready asset. Testing and commissioning turn installation into evidence that the system can operate as intended.',image:grid,source:'https://www.mercomindia.com/predictable-execution-by-solar-epcs-key-to-long-term-value-creation-interview',sourceName:'Mercom India — EPC Execution',content:[['Installation and readiness are different states','Equipment can be physically installed while protection settings, cable tests, interlocks, documentation or interface approvals remain incomplete.'],['Build the test sequence early','Testing should be linked to construction completion, prerequisites, instruments, responsibilities and issue closure. This prevents the commissioning team from discovering basic readiness gaps at the end.'],['Handover should contain evidence','A strong close-out package includes test results, as-built information, punch-list status and clear acceptance records. The document trail should reflect what was actually proven in the field.']]},
 {slug:'what-good-renewable-website-content-does',tag:'INSIGHT',date:'05 OCT 2026',readTime:'4 MIN READ',title:'What the best renewable infrastructure websites communicate differently',text:'Our research across logistics, EPC, OEM and renewable-energy companies revealed a consistent pattern: the strongest sites explain how work gets done, not just what services exist.',image:grid,source:'https://nabrostransport.com/',sourceName:'Industry reference set',content:[['Capability is organised around customer decisions','Specialists such as Nabros and NTC separate wind, heavy transport and renewable logistics into understandable packages. That makes complex services easier to discover.'],['Project stories create proof','Case-study structures from logistics and energy companies show the value of explaining the challenge, engineering approach, execution and outcome rather than publishing generic claims.'],['Education builds trust before the enquiry','Useful articles can answer questions about route surveys, EPC scope, commissioning, grid interfaces and project readiness before a customer ever fills out a form. That is the direction of Propercare’s new content strategy.']]}
];
export const research=[
 {name:'Nabros Transport',category:'ODC / WIND LOGISTICS',learning:'A strong benchmark for capability-led navigation: wind transport, heavy & specialised transport, route survey, multimodal movement, warehousing, safety and case studies.',url:'https://nabrostransport.com/'},
 {name:'Terravolt Renewables',category:'WIND SERVICES',learning:'Useful service structure around factory-to-site WTG transport, yard management, intercarting and crane packages.',url:'https://terravolt.in/services/'},
 {name:'Sangreen Future Renewables',category:'RENEWABLE LOGISTICS',learning:'Reference for route surveys, heavy-lift planning and turnkey wind-project logistics positioning.',url:'https://sangreenrenewables.com/logistics/'},
 {name:'DB Schenker',category:'PROJECT CASE STUDY',learning:'A useful global reference for presenting a difficult wind-blade movement as a measurable project story rather than a generic service claim.',url:'https://www.dbschenker.com/global/insights/news-and-stories/press-releases/wind-turbine-blades-india-1771614'},
 {name:'Blue Water Shipping',category:'GLOBAL WIND LOGISTICS',learning:'Strong example of explaining changing turbine sizes, OOG handling methods, Ro/Ro movements and project track record.',url:'https://www.bws.net/solutions/transport/wind-turbine-transport'},
 {name:'NTC Logistics',category:'RENEWABLE LOGISTICS',learning:'Benchmark for separating renewable logistics into wind, solar and hydro while connecting specialised fleet, project logistics and tracking.',url:'https://www.ntclogistics.in/renewable-logistics/'},
 {name:'ReGen Powertech',category:'WIND TECHNOLOGY',learning:'Shows the value of explaining clean-energy expertise through products, project execution, engineering capability and news.',url:'https://www.regenpowertech.com/'},
 {name:'SWELECT Energy Systems',category:'SOLAR TECHNOLOGY',learning:'Useful product-led model covering PV modules, mounting structures, electrical BOS, pumps, packaged solar systems and storage.',url:'https://swelectes.com/'},
 {name:'Orient Green Power',category:'WIND POWER',learning:'Reference for communicating renewable generation assets as a business segment rather than only as a service.',url:'https://www.orientgreenpower.com/wind-power.asp'},
 {name:'Heliostrom',category:'CHENNAI SOLAR',learning:'Strong local conversion pattern: residential, commercial and industrial solar, site survey, system design, installation, testing and approvals.',url:'https://www.heliostrom.com/'},
 {name:'Ksquare Energy',category:'SOLAR EPC / LOCAL',learning:'Useful example of location-led solar discovery and broad service coverage across Indian markets.',url:'https://www.ksquareenergy.com/solar-company-in-chennai'},
 {name:'AceRenewTech',category:'SOLAR EPC / CHENNAI',learning:'Clear explanation of the EPC sequence: design, engineering and construction, with separate residential, C&I and utility-scale use cases.',url:'https://acerenewtech.com/blogs/solar-epc-companies-in-chennai/'},
 {name:'Tata Power Renewables',category:'NATIONAL RENEWABLES',learning:'Enterprise reference for presenting renewable energy alongside wider energy infrastructure, customer journeys and operational scale.',url:'https://www.tatapower.com/renewables'},
 {name:'Adani Green Energy',category:'UTILITY RENEWABLES',learning:'Useful benchmark for combining generation scale, sustainability, water stewardship, reporting and stakeholder communication.',url:'https://www.adanigreenenergy.com/'},
 {name:'L&T Green Energy',category:'ENGINEERING & INFRASTRUCTURE',learning:'Reference for positioning renewables within a larger engineering capability across solar, wind and infrastructure delivery.',url:'https://www.larsentoubro.com/green-energy'}
];
