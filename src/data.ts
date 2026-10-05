const solar='https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200';
const grid='https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transmission='https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200';
const wind='https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=2200';
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
      title:'Solar Project 1 — Thuraiyur Solar Plant',
      name:'Thuraiyur Solar Plant',
      capacity:'Utility Scale Solar Park',
      client:'Utility Clean Energy IPP Developer',
      location:'Thuraiyur, Tiruchirappalli District, Tamil Nadu',
      status:'Commissioned & Energised',
      tag:'FLAGSHIP UTILITY EPC',
      scope:'Turnkey civil balance-of-plant, pile foundation drilling & casting, mounting structure assembly, tracker alignment, DC array cabling, inverter station integration, and power evacuation to grid substation.',
      image:'/projects/solar/solar1/DJI_0028.JPG',
      stat:'Utility Scale Generation',
      metrics:[
        {label:'Total Scale',value:'Utility Scale Solar'},
        {label:'Location',value:'Thuraiyur, Trichy, TN'},
        {label:'Client',value:'Utility IPP Developer'},
        {label:'Scope',value:'Civil BOS, MMS, Foundation & Cabling'},
        {label:'Footage Records',value:'22 Drone Videos & 21 Site Photos'},
        {label:'Evacuation',value:'High-Voltage Pooling Substation Intertie'}
      ],
      media:[
        {type:'image',category:'aerial',tag:'AERIAL PANORAMA',url:'/projects/solar/solar1/DJI_0028.JPG',title:'Drone High-Angle Panorama — Solar Array & Corridors (DJI_0028)'},
        {type:'image',category:'aerial',tag:'STRUCTURE ROW',url:'/projects/solar/solar1/DJI_0031.JPG',title:'Overhead PV Table Pitch & Mounting Rows (DJI_0031)'},
        {type:'image',category:'electrical',tag:'INVERTER BLOCK',url:'/projects/solar/solar1/DJI_0032.JPG',title:'Structural Grid Calibration & Inverter Stations (DJI_0032)'},
        {type:'image',category:'aerial',tag:'MAPPING AXIS',url:'/projects/solar/solar1/DJI_0034.JPG',title:'High-Altitude Drone Mapping & Substation Axis (DJI_0034)'},
        {type:'image',category:'aerial',tag:'FIELD BOUNDARY',url:'/projects/solar/solar1/DJI_0035.JPG',title:'Complete Field Layout & Boundary Fencing (DJI_0035)'},
        {type:'image',category:'aerial',tag:'TRACKER ALIGNMENT',url:'/projects/solar/solar1/DJI_0058.JPG',title:'Tracker Alignment & DC Trenching Corridors (DJI_0058)'},
        {type:'image',category:'civil',tag:'STRUCTURE ASSEMBLY',url:'/projects/solar/solar1/DSC_0165.JPG',title:'Mounting Structure Assembly & Torque Inspection (DSC_0165)'},
        {type:'image',category:'civil',tag:'PILE RAMMING',url:'/projects/solar/solar1/DSC_0166.JPG',title:'Tracker Pile Alignment and Ramming Verification (DSC_0166)'},
        {type:'image',category:'civil',tag:'MOUNTING RAILS',url:'/projects/solar/solar1/DSC_0167.JPG',title:'PV Module Mounting Rails & Fastener Quality Check (DSC_0167)'},
        {type:'image',category:'civil',tag:'ARRAY STRUCTURAL QA',url:'/projects/solar/solar1/DSC_0168.JPG',title:'Array Structural Stability & Level Verification (DSC_0168)'},
        {type:'image',category:'electrical',tag:'DC CABLING',url:'/projects/solar/solar1/DSC_0170.JPG',title:'DC String Cabling & Combiner Box Interconnection (DSC_0170)'},
        {type:'image',category:'ground',tag:'CABLE TRENCHING',url:'/projects/solar/solar1/DSC_0171.JPG',title:'Underground Cable Laying & Trench Backfilling (DSC_0171)'},
        {type:'image',category:'electrical',tag:'TRANSFORMER YARD',url:'/projects/solar/solar1/DSC_0209.JPG',title:'Inverter Transformer Station & Yard Civil Works (DSC_0209)'},
        {type:'image',category:'electrical',tag:'HT CABLE CONDUITS',url:'/projects/solar/solar1/DSC_0210.JPG',title:'High-Voltage Cable Conduits & Earthing Grid (DSC_0210)'},
        {type:'image',category:'ground',tag:'FOUNDATION CURING',url:'/projects/solar/solar1/DSC_0211.JPG',title:'Civil Foundation Concreting & Quality Curing (DSC_0211)'},
        {type:'image',category:'ground',tag:'CENTRAL CORRIDOR',url:'/projects/solar/solar1/DSC_0267.JPG',title:'Field Row Alignment Along Main Access Corridor (DSC_0267)'},
        {type:'image',category:'electrical',tag:'ELECTRICAL PRE-COMM',url:'/projects/solar/solar1/DSC_0278.JPG',title:'Pre-Commissioning Electrical Block Verification (DSC_0278)'},
        {type:'image',category:'civil',tag:'TABLE PITCH CALIBRATION',url:'/projects/solar/solar1/DSC_9761.JPG',title:'PV Table Pitch & Tilt Angle Calibration (DSC_9761)'},
        {type:'image',category:'civil',tag:'TORQUE MARK QA',url:'/projects/solar/solar1/DSC_9762.JPG',title:'Structural Bolt Torque Marking & QA Signoff (DSC_9762)'},
        {type:'image',category:'electrical',tag:'DC DISCONNECT REVIEW',url:'/projects/solar/solar1/DSC_9771.JPG',title:'DC Disconnect Switches & Junction Box Review (DSC_9771)'},
        {type:'image',category:'electrical',tag:'INVERTER PAD CONDUITS',url:'/projects/solar/solar1/DSC_9772.JPG',title:'Inverter Foundation Pad & Stub-Up Conduits (DSC_9772)'},
        {type:'image',category:'ground',tag:'SITE HANDOVER AUDIT',url:'/projects/solar/solar1/DSC_9813.JPG',title:'Perimeter Safety Audit & Handover Inspection (DSC_9813)'}
      ],
      videos:[
        {
          id:'video-s1-1',
          type:'video',
          category:'video',
          tag:'DRONE SURVEY · 4K',
          title:'01 · Aerial Field Panorama & Layout',
          subtitle:'Wide-angle drone sweep across solar park and central access corridors',
          duration:'1:15',
          src:'/projects/solar/solar1/DJI_0025.MP4',
          poster:'/projects/solar/solar1/DJI_0028.JPG'
        },
        {
          id:'video-s1-2',
          type:'video',
          category:'video',
          tag:'SUBSTATION SURVEY',
          title:'02 · 33kV Pooling Yard & Inverter Bays',
          subtitle:'Drone inspection of transformer yards and electrical interconnections',
          duration:'1:32',
          src:'/projects/solar/solar1/DJI_0038.MP4',
          poster:'/projects/solar/solar1/DJI_0031.JPG'
        },
        {
          id:'video-s1-3',
          type:'video',
          category:'video',
          tag:'STRUCTURE INSPECTION',
          title:'03 · Tracker Pitch & Table Alignment',
          subtitle:'Row-by-row structure calibration and module table tilt inspection',
          duration:'0:58',
          src:'/projects/solar/solar1/DJI_0046.MP4',
          poster:'/projects/solar/solar1/DJI_0032.JPG'
        },
        {
          id:'video-s1-4',
          type:'video',
          category:'video',
          tag:'CIVIL FOUNDATIONS',
          title:'04 · Civil Foundations & DC Trenching',
          subtitle:'Low-altitude flight reviewing pile casting and underground collection cabling',
          duration:'2:04',
          src:'/projects/solar/solar1/DJI_0050.MP4',
          poster:'/projects/solar/solar1/DJI_0034.JPG'
        },
        {
          id:'video-s1-5',
          type:'video',
          category:'video',
          tag:'TRANSMISSION INTERTIE',
          title:'05 · Boundary Security & Evacuation Line',
          subtitle:'Perimeter corridor mapping and grid intertie transmission route',
          duration:'1:45',
          src:'/projects/solar/solar1/DJI_0061.MP4',
          poster:'/projects/solar/solar1/DJI_0035.JPG'
        },
        {
          id:'video-s1-6',
          type:'video',
          category:'video',
          tag:'CENTRAL GRID MAPPING',
          title:'06 · High-Altitude Central Grid Survey',
          subtitle:'Continuous aerial survey monitoring overall site progress and table arrays',
          duration:'2:18',
          src:'/projects/solar/solar1/DJI_0062.MP4',
          poster:'/projects/solar/solar1/DJI_0058.JPG'
        },
        {
          id:'video-s1-7',
          type:'video',
          category:'video',
          tag:'STRUCTURAL ROWS',
          title:'07 · Low-Level Mounting Rows Sweep',
          subtitle:'Detailed low-altitude flight inspecting tracker row alignment and clearance',
          duration:'1:24',
          src:'/projects/solar/solar1/DJI_0068.MP4',
          poster:'/projects/solar/solar1/DJI_0028.JPG'
        },
        {
          id:'video-s1-8',
          type:'video',
          category:'video',
          tag:'ELECTRICAL YARDS',
          title:'08 · Inverter Station & Transformer Yard',
          subtitle:'Close drone pass of pooling substation transformers and switchgear pads',
          duration:'1:10',
          src:'/projects/solar/solar1/DJI_0073.MP4',
          poster:'/projects/solar/solar1/DJI_0032.JPG'
        },
        {
          id:'video-s1-9',
          type:'video',
          category:'video',
          tag:'SITE BOUNDARIES',
          title:'09 · Southern Array & Road Corridors',
          subtitle:'Site perimeter inspection, internal roads, and drainage buffer zones',
          duration:'1:35',
          src:'/projects/solar/solar1/DJI_0086.MP4',
          poster:'/projects/solar/solar1/DJI_0035.JPG'
        },
        {
          id:'video-s1-10',
          type:'video',
          category:'video',
          tag:'FLAGSHIP SHOWCASE',
          title:'10 · Thuraiyur Plant Energisation Showcase',
          subtitle:'Cinematic drone flight across completed and energised utility solar array',
          duration:'0:42',
          src:'/projects/solar/solar1/DJI_0097.MP4',
          poster:'/projects/solar/solar1/DJI_0058.JPG'
        },
        {
          id:'video-s1-11',
          type:'video',
          category:'video',
          tag:'COMMISSIONING SWEEP',
          title:'11 · Comprehensive Plant Handover Flight',
          subtitle:'Full site verification footage recorded during grid synchronization',
          duration:'2:30',
          src:'/projects/solar/solar1/DJI_0102.MP4',
          poster:'/projects/solar/solar1/DJI_0028.JPG'
        }
      ],
      videoNotice:'High-resolution aerial drone surveys and DSLR on-site progress photography recorded during Thuraiyur solar plant civil and electrical commissioning.'
    },
    {
      id:'solar-2',
      title:'Solar Project 2 — Ground Mount Utility Solar Facility',
      name:'Project Solar 2',
      capacity:'Utility Ground-Mount Solar',
      client:'Clean Energy IPP / Power Producer',
      location:'Tamil Nadu, India',
      status:'Operational Handover',
      tag:'GROUND-MOUNT EPC',
      scope:'Civil balance-of-plant, pile ramming & structure alignment, tracker calibration, 33kV internal collection system, inverter stations, and transformer yard interface.',
      image:'/projects/solar/solar2/DJI_0127.JPG',
      stat:'Utility Scale Ground Mount',
      metrics:[
        {label:'Project Type',value:'Ground Mount Solar Park'},
        {label:'Location',value:'Tamil Nadu, India'},
        {label:'Client',value:'Renewable Power Developer'},
        {label:'Scope',value:'MMS Installation, Civil BOS & 33kV Collection'},
        {label:'Footage Records',value:'7 Drone Videos & 21 Site Photos'},
        {label:'Grid Tie',value:'33kV / 110kV Pooling Substation'}
      ],
      media:[
        {type:'image',category:'aerial',tag:'AERIAL OVERVIEW',url:'/projects/solar/solar2/DJI_0127.JPG',title:'Drone High-Angle Overview — Solar Array Layout & Corridors (DJI_0127)'},
        {type:'image',category:'aerial',tag:'ARRAY ROWS',url:'/projects/solar/solar2/DJI_20260530153215_0778_D.JPG',title:'Aerial Drone Panorama — PV Table Pitch & Module Rows (0778_D)'},
        {type:'image',category:'aerial',tag:'GRID MAPPING',url:'/projects/solar/solar2/DJI_20260530155152_0800_D.JPG',title:'High-Altitude Drone Mapping & Access Roads (0800_D)'},
        {type:'image',category:'aerial',tag:'PERIMETER FLIGHT',url:'/projects/solar/solar2/DJI_20260530165855_0826_D.JPG',title:'Site Boundary & Substation Approach Flight (0826_D)'},
        {type:'image',category:'civil',tag:'PILE FOUNDATIONS',url:'/projects/solar/solar2/DSC_0179.JPG',title:'Pile Foundation Ramming & MMS Alignment (DSC_0179)'},
        {type:'image',category:'civil',tag:'MOUNTING RAILS',url:'/projects/solar/solar2/DSC_0180.JPG',title:'Structure Assembly & Rail Fastening Verification (DSC_0180)'},
        {type:'image',category:'civil',tag:'TABLE INSTALLATION',url:'/projects/solar/solar2/DSC_0181.JPG',title:'Solar PV Table Installation & Tilt Inspection (DSC_0181)'},
        {type:'image',category:'civil',tag:'STRUCTURAL QA',url:'/projects/solar/solar2/DSC_0182.JPG',title:'Mounting System Rigidity & Torque Mark Audit (DSC_0182)'},
        {type:'image',category:'electrical',tag:'DC TRENCHING',url:'/projects/solar/solar2/DSC_0191.JPG',title:'Underground DC Trenching & Conduit Layout (DSC_0191)'},
        {type:'image',category:'electrical',tag:'STRING CABLING',url:'/projects/solar/solar2/DSC_0192.JPG',title:'String Cable Pulling & Routing Verification (DSC_0192)'},
        {type:'image',category:'electrical',tag:'INVERTER FOUNDATION',url:'/projects/solar/solar2/DSC_0193.JPG',title:'Inverter Station Civil Foundation & Equipment Pad (DSC_0193)'},
        {type:'image',category:'electrical',tag:'COMBINER BOXES',url:'/projects/solar/solar2/DSC_0194.JPG',title:'DC Combiner Box Mounting & Harness Termination (DSC_0194)'},
        {type:'image',category:'ground',tag:'INTERNAL ROADS',url:'/projects/solar/solar2/DSC_0244.JPG',title:'Internal Access Road Grading & Compaction (DSC_0244)'},
        {type:'image',category:'ground',tag:'DRAINAGE BUFFER',url:'/projects/solar/solar2/DSC_0245.JPG',title:'Site Drainage Corridors & Erosion Protection (DSC_0245)'},
        {type:'image',category:'electrical',tag:'SUBSTATION YARD',url:'/projects/solar/solar2/DSC_0255.JPG',title:'Pooling Substation Yard Civil & Foundation Works (DSC_0255)'},
        {type:'image',category:'electrical',tag:'EARTHING GRID',url:'/projects/solar/solar2/DSC_0269.JPG',title:'Ground Earthing Grid Installation & Testing (DSC_0269)'},
        {type:'image',category:'electrical',tag:'TRANSFORMER PAD',url:'/projects/solar/solar2/DSC_0270.JPG',title:'Step-Up Transformer Foundation & Containment Pit (DSC_0270)'},
        {type:'image',category:'civil',tag:'TORQUE SIGN-OFF',url:'/projects/solar/solar2/DSC_9754.JPG',title:'Precision Torque Mark Quality Assurance Sign-Off (DSC_9754)'},
        {type:'image',category:'electrical',tag:'VOC TESTING',url:'/projects/solar/solar2/DSC_9755.JPG',title:'String Open-Circuit Voltage & Insulation Testing (DSC_9755)'},
        {type:'image',category:'electrical',tag:'CONTROL ROOM',url:'/projects/solar/solar2/DSC_9756.JPG',title:'SCADA Monitoring & Control Room Interface (DSC_9756)'},
        {type:'image',category:'ground',tag:'SECURITY PERIMETER',url:'/projects/solar/solar2/DSC_9757.JPG',title:'Perimeter Fencing & Site Access Gates (DSC_9757)'},
        {type:'image',category:'ground',tag:'SITE HANDOVER',url:'/projects/solar/solar2/DSC_9812.JPG',title:'Final Field Execution Review & Commissioning Audit (DSC_9812)'}
      ],
      videos:[
        {
          id:'video-s2-1',
          type:'video',
          category:'video',
          tag:'DRONE SURVEY · 4K',
          title:'01 · Initial Site Layout & Boundary Flight',
          subtitle:'Drone overview establishing field topography, layout, and work fronts',
          duration:'0:45',
          src:'/projects/solar/solar2/DJI_0091.MP4',
          poster:'/projects/solar/solar2/DJI_0127.JPG'
        },
        {
          id:'video-s2-2',
          type:'video',
          category:'video',
          tag:'STRUCTURE INSPECTION',
          title:'02 · Array Mounting & Structure Calibration',
          subtitle:'Detailed drone sweep over mounting structures and table alignment',
          duration:'1:18',
          src:'/projects/solar/solar2/DJI_0112.MP4',
          poster:'/projects/solar/solar2/DJI_20260530153215_0778_D.JPG'
        },
        {
          id:'video-s2-3',
          type:'video',
          category:'video',
          tag:'CIVIL BOS',
          title:'03 · Table Pitch & Civil BOS Inspection',
          subtitle:'Close-range drone review of ramming piles and structural brackets',
          duration:'1:02',
          src:'/projects/solar/solar2/DJI_0114.MP4',
          poster:'/projects/solar/solar2/DJI_20260530155152_0800_D.JPG'
        },
        {
          id:'video-s2-4',
          type:'video',
          category:'video',
          tag:'ELECTRICAL BLOCKS',
          title:'04 · Inverter Blocks & Internal Roadways',
          subtitle:'Flight across internal access roads, inverter stations, and collection trenches',
          duration:'1:40',
          src:'/projects/solar/solar2/DJI_0152.MP4',
          poster:'/projects/solar/solar2/DJI_20260530165855_0826_D.JPG'
        },
        {
          id:'video-s2-5',
          type:'video',
          category:'video',
          tag:'MASTER PANORAMA · 4K',
          title:'05 · Master Field Panorama & 4K Aerial Sweep',
          subtitle:'High-altitude comprehensive panorama flight spanning the entire generation facility',
          duration:'3:12',
          src:'/projects/solar/solar2/DJI_0163.MP4',
          poster:'/projects/solar/solar2/DJI_0127.JPG'
        },
        {
          id:'video-s2-6',
          type:'video',
          category:'video',
          tag:'EVACUATION CORRIDOR',
          title:'06 · Electrical Trenching & Evacuation Corridor',
          subtitle:'Low-level flight path following 33kV collection routes to pooling interface',
          duration:'1:14',
          src:'/projects/solar/solar2/DJI_0198.MP4',
          poster:'/projects/solar/solar2/DJI_20260530153215_0778_D.JPG'
        },
        {
          id:'video-s2-7',
          type:'video',
          category:'video',
          tag:'COMMISSIONING FLIGHT',
          title:'07 · Final Operational Handover Flight',
          subtitle:'High-definition completion inspection across all generation blocks',
          duration:'1:22',
          src:'/projects/solar/solar2/DJI_0224.MP4',
          poster:'/projects/solar/solar2/DJI_20260530165855_0826_D.JPG'
        }
      ],
      videoNotice:'High-resolution aerial surveys and site video documentation recorded during execution and grid commissioning.'
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
  image:'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=2200',
  bullets:['Wind-farm electrical works','Collection and pooling systems','Evacuation infrastructure','Turbine-site interface coordination','Testing and commissioning'],
  details:['Coordinate site electrical packages around turbine and civil interfaces.','Support collection and pooling infrastructure from turbine strings toward the grid interface.','Plan the receiving infrastructure with protection and energisation in view.','Make access, delivery windows and site readiness visible to the project team.','Close the loop through inspection, testing and commissioning records.'],
  steps:['Map turbine, electrical and logistics interfaces','Prepare package sequence and site readiness','Execute electrical and support works','Test, energise and hand over'],
  stepDetails:['Identify dependencies between turbine deliveries, civil works and electrical packages.','Align materials, crews, access and work fronts.','Control construction against the approved sequence.','Compile test results and readiness evidence for the next stage.'],
  projects:[]
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
      title:'Transport Project 1 — Heavy ODC & Multimodal Logistics',
      name:'Project Transport 1',
      capacity:'Heavy ODC Payload',
      client:'State Transmission Corporation / Heavy Electrical OEM',
      location:'Tamil Nadu Highway Corridor, India',
      status:'Successfully Delivered',
      tag:'ODC HEAVY HAULAGE',
      scope:'Hydraulic multi-axle modular trailer conveyance of heavy transformers and oversized renewable equipment with comprehensive route surveys, bridge bypass engineering, and live drone convoy tracking.',
      image:'/projects/transport/transport1/DJI_0078.JPG',
      stat:'Multi-Axle Heavy Haulage',
      metrics:[
        {label:'Movement Type',value:'ODC Heavy Modular Movement'},
        {label:'Equipment',value:'Hydraulic Multi-Axle Modular Trailer Fleet'},
        {label:'Corridor Scope',value:'Highway & Rural Inter-District Transit'},
        {label:'Footage Records',value:'8 Drone Videos & 9 Site Photos'},
        {label:'Route Feasibility',value:'Bridge Bypass & Overhead Wire Clearance'},
        {label:'Safety Standard',value:'Zero-Incident Escorted Convoy'}
      ],
      media:[
        {type:'image',category:'aerial',tag:'CONVOY TRANSIT',url:'/projects/transport/transport1/DJI_0078.JPG',title:'Drone High-Angle View — Hydraulic Modular Trailer in Transit (DJI_0078)'},
        {type:'image',category:'aerial',tag:'HIGHWAY CORRIDOR',url:'/projects/transport/transport1/DJI_0079.JPG',title:'Aerial Perspective of Escorted Heavy Haulage Convoy (DJI_0079)'},
        {type:'image',category:'logistics',tag:'JUNCTION CLEARANCE',url:'/projects/transport/transport1/DJI_0092.JPG',title:'Highway Intersection Turning Radius & Road Clearance (DJI_0092)'},
        {type:'image',category:'logistics',tag:'ELEVATED TRANSIT',url:'/projects/transport/transport1/DJI_0098.JPG',title:'Bridge Structure Transit & Axle Load Distribution (DJI_0098)'},
        {type:'image',category:'logistics',tag:'RURAL CORRIDOR',url:'/projects/transport/transport1/DJI_0099.JPG',title:'Rural Access Road Navigation & Pilot Escort Alignment (DJI_0099)'},
        {type:'image',category:'logistics',tag:'HYDRAULIC STABILITY',url:'/projects/transport/transport1/DJI_0101.JPG',title:'Trailer Hydraulic Bed Stability & Ground Clearance Inspection (DJI_0101)'},
        {type:'image',category:'transport',tag:'SUBSTATION APPROACH',url:'/projects/transport/transport1/DJI_0110.JPG',title:'Site Approach Road Arrival & Final Turn Execution (DJI_0110)'},
        {type:'image',category:'transport',tag:'BAY POSITIONING',url:'/projects/transport/transport1/DJI_0120.JPG',title:'Substation Bay Delivery & Precision Positioning (DJI_0120)'},
        {type:'image',category:'transport',tag:'COMPLETION & HANDOVER',url:'/projects/transport/transport1/DJI_0126.JPG',title:'Final Cargo Tie-Down Release & Handover Sign-Off (DJI_0126)'}
      ],
      videos:[
        {
          id:'video-t1-1',
          type:'video',
          category:'video',
          tag:'CONVOY MOBILISATION',
          title:'01 · Highway Convoy Mobilisation Flight',
          subtitle:'Drone tracking flight over hydraulic multi-axle modular convoy starting transit',
          duration:'1:12',
          src:'/projects/transport/transport1/DJI_0064.MP4',
          poster:'/projects/transport/transport1/DJI_0078.JPG'
        },
        {
          id:'video-t1-2',
          type:'video',
          category:'video',
          tag:'AXLE CLEARANCE',
          title:'02 · Hydraulic Multi-Axle Turn & Clearance Sweep',
          subtitle:'Overhead drone review of multi-axle steering and turning clearance geometry',
          duration:'0:48',
          src:'/projects/transport/transport1/DJI_0081.MP4',
          poster:'/projects/transport/transport1/DJI_0079.JPG'
        },
        {
          id:'video-t1-3',
          type:'video',
          category:'video',
          tag:'CRITICAL BEND',
          title:'03 · Critical Bend & Intersection Navigation',
          subtitle:'Precision cornering and traffic control coordination captured by drone',
          duration:'0:35',
          src:'/projects/transport/transport1/DJI_0102.MP4',
          poster:'/projects/transport/transport1/DJI_0092.JPG'
        },
        {
          id:'video-t1-4',
          type:'video',
          category:'video',
          tag:'BRIDGE TRANSIT',
          title:'04 · Highway Bridge & Elevated Section Transit',
          subtitle:'Drone monitoring bridge approach, slow crawl speed, and weight dispersion',
          duration:'1:05',
          src:'/projects/transport/transport1/DJI_0103.MP4',
          poster:'/projects/transport/transport1/DJI_0098.JPG'
        },
        {
          id:'video-t1-5',
          type:'video',
          category:'video',
          tag:'BYPASS CORRIDOR',
          title:'05 · Rural Corridor & Bypass Route Transit',
          subtitle:'Convoy progression along engineered bypass route with police pilot escort',
          duration:'1:20',
          src:'/projects/transport/transport1/DJI_0106.MP4',
          poster:'/projects/transport/transport1/DJI_0099.JPG'
        },
        {
          id:'video-t1-6',
          type:'video',
          category:'video',
          tag:'LOW-ALTITUDE ESCORT',
          title:'06 · Low-Altitude Convoy Escort & Axle Monitoring',
          subtitle:'Continuous close-up flight assessing trailer stability, tie-downs, and clearance',
          duration:'0:42',
          src:'/projects/transport/transport1/DJI_0107.MP4',
          poster:'/projects/transport/transport1/DJI_0101.JPG'
        },
        {
          id:'video-t1-7',
          type:'video',
          category:'video',
          tag:'SITE ARRIVAL',
          title:'07 · Final Substation Approach & Access Road',
          subtitle:'Arrival at the destination substation and negotiation of entry gates',
          duration:'0:40',
          src:'/projects/transport/transport1/DJI_0112.MP4',
          poster:'/projects/transport/transport1/DJI_0110.JPG'
        },
        {
          id:'video-t1-8',
          type:'video',
          category:'video',
          tag:'BAY PLACEMENT',
          title:'08 · Bay Offloading & Precision Alignment Survey',
          subtitle:'Final positioning of heavy cargo into the transformer foundation bay',
          duration:'1:18',
          src:'/projects/transport/transport1/DJI_0118.MP4',
          poster:'/projects/transport/transport1/DJI_0120.JPG'
        }
      ],
      videoNotice:'Drone surveillance and convoy progression records captured during critical highway and site delivery operations.'
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
