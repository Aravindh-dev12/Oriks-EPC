export type Service = {
  title: string;
  short: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    title: 'Renewable EPC & EBoP',
    short: 'Electrical and infrastructure scope that carries a solar, wind or hybrid project from generation to a grid-ready system.',
    bullets: ['Plant electrical systems', 'Cable & earthing networks', 'Switchgear and protection interfaces', 'Civil and electrical coordination'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=82'
  },
  {
    title: 'Power Evacuation',
    short: 'End-to-end evacuation infrastructure between the generating plant, pooling point and approved utility interconnection.',
    bullets: ['Evacuation scheme coordination', 'HT / EHT line execution', 'Bay and grid interface works', 'Utility-side documentation support'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=82'
  },
  {
    title: 'Pooling Substations & Switchyards',
    short: 'Integrated civil, primary electrical, protection, metering and control works for renewable power evacuation.',
    bullets: ['Pooling substation packages', 'AIS / GIS interface works', 'Protection, metering & control', 'Testing and pre-energisation checks'],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=82'
  },
  {
    title: 'Transmission Infrastructure',
    short: 'Transmission and interconnection works planned around route, right-of-way, utility interface and energisation requirements.',
    bullets: ['Route and execution planning', 'Tower / structure works', 'Conductor and OPGW stringing', 'Line charging coordination'],
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1400&q=82'
  },
  {
    title: 'Testing, Commissioning & Grid Synchronisation',
    short: 'A disciplined close-out process that turns constructed systems into safe, documented and energisation-ready assets.',
    bullets: ['Protection and functional checks', 'Pre-commissioning verification', 'Grid synchronisation support', 'Handover documentation'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=82'
  },
  {
    title: 'O&M & Lifecycle Support',
    short: 'Preventive, corrective and inspection support for substations, evacuation systems and associated renewable electrical assets.',
    bullets: ['Preventive maintenance', 'Breakdown response', 'Inspection and testing', 'Asset performance support'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=82'
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
