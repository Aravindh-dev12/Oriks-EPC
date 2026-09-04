export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
  strengths: string[];
  image: string;
};

export type Insight = {
  slug: string;
  category: 'Technical Insight' | 'Project Knowledge' | 'Industry Update';
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const services: Service[] = [
  {
    slug: 'renewable-epc-ebop',
    title: 'Renewable EPC & EBoP',
    short: 'Electrical and infrastructure scope that carries a solar, wind or hybrid project from generation to a grid-ready system.',
    intro: 'A renewable project has to do more than generate power. The electrical balance of plant coordinates collection, protection, earthing, cabling, auxiliary systems, civil interfaces and the final connection to the evacuation network.',
    bullets: ['Plant electrical systems', 'Cable & earthing networks', 'Switchgear and protection interfaces', 'Civil and electrical coordination', 'Interface management from plant to grid'],
    strengths: ['Single-window electrical scope', 'Interface-led engineering', 'Construction and commissioning coordination', 'Lifecycle-ready documentation'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=84'
  },
  {
    slug: 'power-evacuation',
    title: 'Power Evacuation',
    short: 'End-to-end evacuation infrastructure between the generating plant, pooling point and approved utility interconnection.',
    intro: 'Power evacuation is the electrical path that moves renewable generation from the project site to the utility network. The scope can involve collection systems, pooling substations, HT/EHT transmission lines, bay interfaces, metering, protection and grid-synchronisation support.',
    bullets: ['Evacuation scheme coordination', 'HT / EHT line execution', 'Bay and grid interface works', 'Utility-side documentation support', 'Charging and synchronisation coordination'],
    strengths: ['Generation-to-grid thinking', 'Utility-interface focus', 'Protection and metering integration', 'Commissioning-oriented execution'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=84'
  },
  {
    slug: 'pooling-substations-switchyards',
    title: 'Pooling Substations & Switchyards',
    short: 'Integrated civil, primary electrical, protection, metering and control works for renewable power evacuation.',
    intro: 'Pooling substations and switchyards combine power from the plant collection system, transform it to the required evacuation voltage and provide the protection, metering, control and switching interface required for reliable grid connection.',
    bullets: ['Pooling substation packages', 'AIS / GIS interface works', 'Protection, metering & control', 'Testing and pre-energisation checks', 'Cable, earthing and auxiliary systems'],
    strengths: ['Civil + electrical coordination', 'Primary and secondary systems', 'Testing discipline', 'Utility bay interface readiness'],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=84'
  },
  {
    slug: 'transmission-infrastructure',
    title: 'Transmission Infrastructure',
    short: 'Transmission and interconnection works planned around route, right-of-way, utility interface and energisation requirements.',
    intro: 'Transmission work is where engineering, route planning, civil execution, structures, conductor stringing, OPGW, statutory coordination and final line charging all have to come together as one project interface.',
    bullets: ['Route and execution planning', 'Tower / structure works', 'Conductor and OPGW stringing', 'Right-of-way coordination support', 'Line charging coordination'],
    strengths: ['Route-aware planning', 'Interface management', 'Construction sequencing', 'Energisation-focused handover'],
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1600&q=84'
  },
  {
    slug: 'testing-commissioning-grid-synchronisation',
    title: 'Testing, Commissioning & Grid Synchronisation',
    short: 'A disciplined close-out process that turns constructed systems into safe, documented and energisation-ready assets.',
    intro: 'Testing and commissioning confirm that the installed electrical system is complete, safe, protected correctly and ready to energise. The process covers inspections, functional checks, protection verification, metering, control, charging and grid synchronisation support.',
    bullets: ['Protection and functional checks', 'Pre-commissioning verification', 'Grid synchronisation support', 'Handover documentation', 'Punch-list and readiness closure'],
    strengths: ['Pre-energisation discipline', 'Protection-system focus', 'Clear test records', 'Structured handover'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=84'
  },
  {
    slug: 'operations-maintenance',
    title: 'O&M & Lifecycle Support',
    short: 'Preventive, corrective and inspection support for substations, evacuation systems and associated renewable electrical assets.',
    intro: 'Long-term performance depends on inspection, preventive maintenance, testing, documentation and timely response to defects. O&M planning should protect availability while keeping the electrical asset safe and maintainable.',
    bullets: ['Preventive maintenance', 'Breakdown response', 'Inspection and testing', 'Asset performance support', 'Maintenance documentation'],
    strengths: ['Lifecycle mindset', 'Condition-focused inspection', 'Testing and fault response', 'Maintainability support'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=84'
  }
];

export const capabilitySteps = [
  { n: '01', title: 'Generation', text: 'Solar, wind and hybrid project interfaces.' },
  { n: '02', title: 'Collection', text: 'Plant electrical network, EBoP, cabling, protection and earthing.' },
  { n: '03', title: 'Transformation', text: 'Pooling substation, switchyard, metering and control.' },
  { n: '04', title: 'Evacuation', text: 'HT / EHT transmission and bay interface to the grid point.' },
  { n: '05', title: 'Synchronisation', text: 'Testing, commissioning, documentation and energisation support.' }
];

export const projectFormats = [
  {
    title: 'Wind Power Evacuation Package',
    type: 'Representative scope format',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=84',
    details: ['WTG collection network', 'Pooling substation', 'EHV transmission line', 'Utility bay / grid interface', 'Testing & synchronisation']
  },
  {
    title: 'Solar Grid Interconnection Package',
    type: 'Representative scope format',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=84',
    details: ['Plant electrical scope', '33 kV collection system', 'Power evacuation line', 'Substation interface', 'Commissioning support']
  },
  {
    title: 'Substation & Transmission Package',
    type: 'Representative scope format',
    image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=1600&q=84',
    details: ['Civil foundations', 'Primary equipment installation', 'Protection & metering', 'Transmission / bay works', 'Pre-energisation testing']
  }
];

export const proofFields = [
  ['MW', 'Project capacity'],
  ['kV', 'Voltage level'],
  ['MVA', 'Substation rating'],
  ['km', 'Transmission length'],
  ['Scope', 'Executed package'],
  ['Status', 'Completed / ongoing']
];

export const insights: Insight[] = [
  {
    slug: 'power-evacuation-from-generation-to-grid',
    category: 'Technical Insight',
    title: 'Power Evacuation: From Renewable Generation to the Grid',
    excerpt: 'A practical overview of how collection systems, pooling substations, transmission lines, utility bays and synchronisation work together.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=84',
    readTime: '6 min read',
    sections: [
      { heading: 'Why power evacuation matters', body: ['Renewable generation becomes useful to the grid only when the electrical path from the plant to the approved interconnection point is designed, constructed, protected and commissioned correctly.', 'The evacuation system must therefore be treated as one connected interface rather than a collection of isolated packages.'] },
      { heading: 'Typical project path', body: ['The path commonly starts with the plant collection network, moves through a pooling substation, steps up to the required voltage, continues through an HT or EHT transmission line and finally reaches the utility bay or grid substation.', 'Protection, metering, SCADA, communication, documentation and synchronisation sit across that entire path.'] },
      { heading: 'What technical buyers look for', body: ['A project owner normally wants clarity on voltage levels, equipment interfaces, transmission route, utility responsibilities, testing philosophy and energisation readiness.', 'A strong project case study should therefore show capacity, kV level, MVA rating, route kilometres, executed scope and project status.'] }
    ]
  },
  {
    slug: 'pooling-substations-renewable-projects',
    category: 'Technical Insight',
    title: 'Why Pooling Substations Matter in Renewable Projects',
    excerpt: 'The pooling substation is the point where collection, transformation, protection, metering and evacuation come together.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=84',
    readTime: '5 min read',
    sections: [
      { heading: 'More than a transformer yard', body: ['A pooling substation aggregates power from multiple feeders or generating blocks and creates the controlled interface to the evacuation network.', 'Its performance depends on coordinated primary equipment, protection, metering, control, auxiliary power, earthing and communication systems.'] },
      { heading: 'Interfaces define risk', body: ['Many project delays occur at interfaces: cable termination, protection coordination, bay readiness, communication, metering or utility documentation.', 'Planning these interfaces early helps reduce commissioning-stage surprises.'] }
    ]
  },
  {
    slug: 'testing-before-grid-synchronisation',
    category: 'Project Knowledge',
    title: 'Testing Before Grid Synchronisation: What Must Be Ready',
    excerpt: 'A commissioning-focused checklist for moving from construction completion to safe energisation and grid synchronisation.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=84',
    readTime: '7 min read',
    sections: [
      { heading: 'Construction complete is not energisation ready', body: ['Mechanical completion is only one milestone. Before charging, teams need to verify installation quality, insulation, earthing, protection logic, control circuits, metering, interlocks and communication paths.', 'The documentation trail should match the physical asset.'] },
      { heading: 'Protection and functional verification', body: ['Protection settings, CT/PT polarity, trip circuits, breaker operations, alarms, interlocks and SCADA indications require structured checks.', 'Functional testing should demonstrate that the system behaves correctly under the intended operating logic before energisation.'] },
      { heading: 'Handover discipline', body: ['Test records, approved drawings, punch-list closure, settings, utility approvals and operating information should be consolidated into a clear handover pack.', 'That package becomes the starting point for safe operations and future maintenance.'] }
    ]
  },
  {
    slug: 'electrical-balance-of-plant-wind-solar',
    category: 'Technical Insight',
    title: 'Electrical Balance of Plant for Wind and Solar Projects',
    excerpt: 'How cabling, earthing, switchgear, protection, auxiliary systems and grid interfaces form the electrical backbone of a renewable plant.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=84',
    readTime: '6 min read',
    sections: [
      { heading: 'The electrical backbone', body: ['EBoP connects generating equipment to the collection and evacuation system while supporting protection, auxiliary power, monitoring and safe operation.', 'The exact scope varies by project, but coordination between plant equipment, substation systems and grid interfaces is essential.'] },
      { heading: 'Why coordination matters', body: ['Cable routes, earthing, switchgear, protection, civil interfaces and commissioning sequences interact with one another.', 'Treating these packages as a coordinated system helps reduce rework and improves energisation readiness.'] }
    ]
  },
  {
    slug: 'transmission-line-execution-challenges',
    category: 'Project Knowledge',
    title: 'Common Challenges in Transmission-Line Execution',
    excerpt: 'Route access, right-of-way, structures, stringing, shutdowns and utility coordination all influence transmission delivery.',
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1600&q=84',
    readTime: '5 min read',
    sections: [
      { heading: 'The route controls the project', body: ['Transmission execution depends heavily on access, terrain, crossings, right-of-way conditions and the sequence in which civil and erection activities can proceed.', 'Good planning converts route constraints into an executable construction sequence.'] },
      { heading: 'Energisation is the final interface', body: ['Even when the line is physically complete, testing, clearances, bay readiness, communication and utility coordination must align before charging.', 'The best project plans therefore work backward from energisation requirements.'] }
    ]
  },
  {
    slug: 'building-a-strong-epc-project-case-study',
    category: 'Industry Update',
    title: 'How to Present an EPC Project Case Study Clearly',
    excerpt: 'A useful case study should communicate technical scale and responsibility quickly: MW, kV, MVA, km, scope, location and result.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=84',
    readTime: '4 min read',
    sections: [
      { heading: 'Use evidence, not adjectives', body: ['Technical buyers can assess a project faster when the case study shows objective information such as capacity, voltage level, substation rating, transmission length, location and executed scope.', 'Photographs are stronger when they are paired with those facts.'] },
      { heading: 'Explain responsibility', body: ['A case study should make it clear whether the company handled engineering, procurement, civil work, electrical installation, transmission, bay interface, testing, commissioning or O&M.', 'This helps a potential client understand whether the experience is relevant to their own requirement.'] }
    ]
  }
];
