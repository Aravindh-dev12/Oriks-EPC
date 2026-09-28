import { useState, type ReactNode } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { services } from './data';

const pageVisuals = {
  about: {
    image: 'https://images.pexels.com/photos/17395035/pexels-photo-17395035.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  solutions: {
    image: 'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  projects: {
    image: 'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  contact: {
    image: 'https://images.pexels.com/photos/19895867/pexels-photo-19895867.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/19895867/pexels-photo-19895867.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/8853470/pexels-photo-8853470.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  insights: {
    image: 'https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  sustainability: {
    image: 'https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/17395035/pexels-photo-17395035.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  },
  articles: {
    image: 'https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200',
    gallery: [
      'https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=2200',
      'https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200'
    ]
  }
};

function Home() {
  return (
    <>
      <HeroVideo />
      <section className="intro"><div className="wrap intro-grid"><div><span className="kicker">01 / THE Propcare APPROACH</span><h2>From renewable generation to a ready-to-energise grid.</h2></div><div><p>We coordinate the electrical scope between plant, substation and transmission interface — with engineering discipline, field execution and commissioning readiness.</p><Link className="text-link" to="/about">Discover Propcare</Link></div></div></section>
      <section className="editorial-visual wrap"><div className="editorial-main"><img src="https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Large-scale solar power plant"/><div className="image-caption"><span>01</span><b>SOLAR EPC</b><em>Generation infrastructure</em></div></div><div className="editorial-stack"><div className="editorial-tile"><img src="https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Wind energy infrastructure"/><div className="image-caption"><span>02</span><b>WIND + POWER</b><em>Renewable infrastructure</em></div></div><div className="editorial-tile"><img src="https://images.pexels.com/photos/8853470/pexels-photo-8853470.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Heavy transport and oversized logistics"/><div className="image-caption"><span>03</span><b>TRANSPORT + LOGISTICS</b><em>Heavy equipment movement</em></div></div></div></section>
      <section className="dark"><div className="wrap"><Section eyebrow="Propcare / CAPABILITIES" title="From plant equipment to the point of grid connection." /><div className="service-grid">{services.map((s, i) => <Link to={`/services/${s.slug}`} className="service-card" key={s.slug}><span>{`0${i + 1}`}</span><h3>{s.title}</h3><p>{s.short}</p><b>View scope</b></Link>)}</div></div></section>
      <section className="wrap feature"><div className="feature-media"><img src="https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Power transmission infrastructure" /></div><div><span className="kicker">FROM GENERATION TO GRID</span><h2>Make the electrical path visible.</h2><p>Propcare is structured around the systems that connect renewable generation to a reliable grid interface — from collection and transformation to transmission, protection, testing and handover.</p><Link className="button" to="/services">View capability map</Link></div></section>
      <section className="metrics"><div className="wrap metric-grid"><div><strong>Solar</strong><span>Renewable EPC</span></div><div><strong>Wind</strong><span>Electrical infrastructure</span></div><div><strong>HT / EHT</strong><span>Evacuation & transmission</span></div><div><strong>O&M</strong><span>Lifecycle support</span></div></div></section>
      <section className="wrap projects"><Section eyebrow="Project approach" title="Designed for technical clarity, not decorative claims." /><div className="project-grid"><MediaCard image="https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Renewable EPC" text="Plant-side electrical systems and EBoP." /><MediaCard image="https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Substations & switchyards" text="Primary, secondary and grid-interface works." /><MediaCard image="https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Transmission" text="Route execution, stringing and energisation readiness." /></div></section>
      </>
  );
}

function About() {
  return <Page title="Who We Are" lead="A focused engineering company for renewable and power-infrastructure interfaces." {...pageVisuals.about}><Section eyebrow="Our focus" title="Engineering discipline from generation to grid." /><p className="lead-copy">Propcare Energy Care Private Limited is based in Karur, Tamil Nadu. The company is positioned around renewable EPC and electrical infrastructure: power evacuation, substations, transmission, testing, commissioning and lifecycle support.</p></Page>;
}

function Services() {
  return <Page title="Our Solutions" lead="Clear work packages for the renewable-to-grid project journey." {...pageVisuals.solutions}><div className="service-list">{services.map(s => <Link to={`/services/${s.slug}`} className="list-row" key={s.slug}><span>{s.title}</span><p>{s.short}</p></Link>)}</div></Page>;
}

function Service() {
  const { slug } = useParams();
  const s = services.find(x => x.slug === slug) ?? services[0];
  return <Page title={s.title} lead={s.short} image={s.image} gallery={[s.image, pageVisuals.solutions.gallery[1], pageVisuals.solutions.gallery[2]]}><Section eyebrow="Scope" title="A coordinated package, defined around the project interface." /><div className="scope-grid">{s.bullets.map((x, i) => <div key={x}><span>{`0${i + 1}`}</span><h3>{x}</h3></div>)}</div><Section eyebrow="Delivery" title="Built for testing, energisation and handover." /><p className="lead-copy">{s.intro}</p></Page>;
}

function Projects() {
  return <Page title="Projects" lead="A clean framework for publishing verified project evidence." {...pageVisuals.projects}><div className="notice">Project photographs, MW, kV, MVA, route length, executed scope and completion status should be added only from approved Propcare records.</div><div className="project-grid"><MediaCard image="https://images.pexels.com/photos/19191448/pexels-photo-19191448.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Wind infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Solar infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200" title="Grid infrastructure" text="Representative portfolio format." /></div></Page>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  return <Page title="Contact Us" lead="Tell us what is being built, where it connects and where the project stands." {...pageVisuals.contact}><form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><input required placeholder="Name" /><input required placeholder="Company" /><input required type="email" placeholder="Work email" /><input placeholder="Project location" /><select defaultValue=""><option value="" disabled>Project type</option><option>Solar EPC</option><option>Wind EPC</option><option>Power evacuation</option><option>Substation / switchyard</option><option>Transmission</option><option>Testing & commissioning</option><option>O&M</option></select><textarea rows={6} placeholder="Project requirement" /><button className="button" type="submit">{sent ? 'Brief received' : 'Send project brief'}</button></form></Page>;
}

function Insights() {
  return <Page title="Insights" lead="Engineering notes, project stories and practical lessons from renewable infrastructure delivery." {...pageVisuals.insights}><Section eyebrow="Engineering notes" title="Make the technical journey easier to understand." /><div className="project-grid"><MediaCard image={pageVisuals.insights.gallery[0]} title="Generation to grid" text="How plant, evacuation and receiving-end interfaces work together." /><MediaCard image={pageVisuals.insights.gallery[1]} title="Commissioning readiness" text="The checks that close the gap between construction and energisation." /><MediaCard image={pageVisuals.insights.gallery[2]} title="Transmission execution" text="Planning the route, structures, stringing and testing as one sequence." /></div></Page>;
}

function Sustainability() {
  return <Page title="Sustainability" lead="Building renewable infrastructure with safety, efficiency and responsible project execution." {...pageVisuals.sustainability}><Section eyebrow="Sustainability" title="Cleaner power needs disciplined infrastructure." /><p className="lead-copy">Our sustainability story is connected to the work itself: renewable generation, efficient electrical systems, safe execution, responsible site practices and lifecycle support.</p></Page>;
}

function Articles() {
  const articles = [
    { image: 'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=2200', tag: 'GRID INFRASTRUCTURE', title: 'Designing the renewable-to-grid connection', text: 'A practical view of collection systems, evacuation, substations and the receiving-end interface.' },
    { image: 'https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&w=2200', tag: 'SUBSTATIONS', title: 'What makes a substation ready for energisation?', text: 'Protection, control, metering, earthing and pre-commissioning checks that turn installed equipment into an operable system.' },
    { image: 'https://images.pexels.com/photos/9452569/pexels-photo-9452569.jpeg?auto=compress&cs=tinysrgb&w=2200', tag: 'TRANSMISSION', title: 'From route preparation to line charging', text: 'How route access, structures, stringing, crossings, testing and handover fit into one execution sequence.' },
    { image: 'https://images.pexels.com/photos/9800005/pexels-photo-9800005.jpeg?auto=compress&cs=tinysrgb&w=2200', tag: 'RENEWABLE EPC', title: 'The electrical scope behind renewable generation', text: 'Why plant-side electrical systems and EBoP need to be coordinated early with the grid interface.' }
  ];
  return <Page title="Articles" lead="Engineering notes and field perspectives on renewable EPC, power evacuation and grid infrastructure." {...pageVisuals.articles}>
    <Section eyebrow="Articles / Engineering notes" title="Technical thinking, explained clearly." />
    <p className="lead-copy">Practical articles from the project interface — covering renewable EPC, substations, transmission, testing and the decisions that affect safe, reliable energisation.</p>
    <div className="articles-grid">{articles.map(a => <article className="article-card" key={a.title}><img src={a.image} alt={a.title}/><div><span className="kicker">{a.tag}</span><h3>{a.title}</h3><p>{a.text}</p><span className="text-link">Read article</span></div></article>)}</div>
  </Page>;
}


function Page({ title, lead, image, gallery, children }: { title: string; lead: string; image: string; gallery: string[]; children: ReactNode }) {
  return <><section className="inner-hero"><div className="wrap inner-grid"><div><span className="kicker">Propcare ENERGY CARE</span><h1>{title}</h1><p>{lead}</p></div><img src={image} alt="" /></div></section><main className="wrap page-body">{children}<section className="page-gallery"><div className="gallery-large"><img src={gallery[0]} alt="Renewable infrastructure"/><span>FIELD / RENEWABLE INFRASTRUCTURE</span></div><div className="gallery-column"><img src={gallery[1]} alt="Power infrastructure"/><img src={gallery[2]} alt="Project engineering"/></div></section><section className="article-band"><div><span className="kicker">ENGINEERING NOTE</span><h2>Why the connection matters.</h2></div><p>Renewable projects are not only about generation. The electrical path through collection, transformation, protection, evacuation and grid interface has to work as one coordinated system. Propcare presents that journey visually, package by package.</p></section></main></>;
}

function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<Service />} /><Route path="/projects" element={<Projects />} /><Route path="/insights" element={<Insights />} /><Route path="/sustainability" element={<Sustainability />} /><Route path="/articles" element={<Articles />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes><Footer /></>;
}

export default App;
