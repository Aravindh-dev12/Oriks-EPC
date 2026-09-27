import { useState, type ReactNode } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Arrow, Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { services } from './data';

const pageVisuals = {
  about: {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  solutions: {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  projects: {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  contact: {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  insights: {
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  sustainability: {
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=95'
    ]
  },
  careers: {
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=2200&q=95',
    gallery: [
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=2200&q=95',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=95',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=95'
    ]
  }
};

function Home() {
  return (
    <>
      <HeroVideo />
      <section className="intro"><div className="wrap intro-grid"><div><span className="kicker">01 / THE PROPCare APPROACH</span><h2>From renewable generation to a ready-to-energise grid.</h2></div><div><p>We coordinate the electrical scope between plant, substation and transmission interface — with engineering discipline, field execution and commissioning readiness.</p><Link className="text-link" to="/about">Discover PROPCare <Arrow/></Link></div></div></section>
      <section className="editorial-visual wrap"><div className="editorial-main"><img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=92" alt="Large-scale solar power plant"/><div className="image-caption"><span>01</span><b>SOLAR EPC</b><em>Generation infrastructure</em></div></div><div className="editorial-side"><div><span className="kicker">THE PROJECT INTERFACE</span><h3>Generation → Evacuation → Grid</h3><p>One coordinated electrical delivery pathway.</p></div><img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1400&q=92" alt="Wind energy infrastructure"/><div className="image-caption"><span>02</span><b>WIND + POWER</b><em>Renewable infrastructure</em></div></div></section>
      <section className="dark"><div className="wrap"><Section eyebrow="PROPCare / CAPABILITIES" title="From plant equipment to the point of grid connection." /><div className="service-grid">{services.map((s, i) => <Link to={`/services/${s.slug}`} className="service-card" key={s.slug}><span>{`0${i + 1}`}</span><h3>{s.title}</h3><p>{s.short}</p><b>View scope <Arrow /></b></Link>)}</div></div></section>
      <section className="wrap feature"><div className="feature-media"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=88" alt="Power transmission infrastructure" /></div><div><span className="kicker">FROM GENERATION TO GRID</span><h2>Make the electrical path visible.</h2><p>PROPCare is structured around the systems that connect renewable generation to a reliable grid interface — from collection and transformation to transmission, protection, testing and handover.</p><Link className="button" to="/services">View capability map <Arrow /></Link></div></section>
      <section className="metrics"><div className="wrap metric-grid"><div><strong>Solar</strong><span>Renewable EPC</span></div><div><strong>Wind</strong><span>Electrical infrastructure</span></div><div><strong>HT / EHT</strong><span>Evacuation & transmission</span></div><div><strong>O&M</strong><span>Lifecycle support</span></div></div></section>
      <section className="wrap projects"><Section eyebrow="Project approach" title="Designed for technical clarity, not decorative claims." /><div className="project-grid"><MediaCard image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88" title="Renewable EPC" text="Plant-side electrical systems and EBoP." /><MediaCard image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=88" title="Substations & switchyards" text="Primary, secondary and grid-interface works." /><MediaCard image="https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1400&q=88" title="Transmission" text="Route execution, stringing and energisation readiness." /></div></section>
      <section className="image-band"><div className="wrap image-band-grid"><img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1500&q=88" alt="Solar field" /><img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=88" alt="Wind turbines" /><img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=88" alt="Power infrastructure" /></div></section>
      </>
  );
}

function About() {
  return <Page title="Who We Are" lead="A focused engineering company for renewable and power-infrastructure interfaces." {...pageVisuals.about}><Section eyebrow="Our focus" title="Engineering discipline from generation to grid." /><p className="lead-copy">PROPCare Energy Care Private Limited is based in Karur, Tamil Nadu. The company is positioned around renewable EPC and electrical infrastructure: power evacuation, substations, transmission, testing, commissioning and lifecycle support.</p></Page>;
}

function Services() {
  return <Page title="Our Solutions" lead="Clear work packages for the renewable-to-grid project journey." {...pageVisuals.solutions}><div className="service-list">{services.map(s => <Link to={`/services/${s.slug}`} className="list-row" key={s.slug}><span>{s.title}</span><p>{s.short}</p><Arrow /></Link>)}</div></Page>;
}

function Service() {
  const { slug } = useParams();
  const s = services.find(x => x.slug === slug) ?? services[0];
  return <Page title={s.title} lead={s.short} image={s.image} gallery={[s.image, pageVisuals.solutions.gallery[1], pageVisuals.solutions.gallery[2]]}><Section eyebrow="Scope" title="A coordinated package, defined around the project interface." /><div className="scope-grid">{s.bullets.map((x, i) => <div key={x}><span>{`0${i + 1}`}</span><h3>{x}</h3></div>)}</div><Section eyebrow="Delivery" title="Built for testing, energisation and handover." /><p className="lead-copy">{s.intro}</p></Page>;
}

function Projects() {
  return <Page title="Projects" lead="A clean framework for publishing verified project evidence." {...pageVisuals.projects}><div className="notice">Project photographs, MW, kV, MVA, route length, executed scope and completion status should be added only from approved PROPCare records.</div><div className="project-grid"><MediaCard image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=95" title="Wind infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=95" title="Solar infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=95" title="Grid infrastructure" text="Representative portfolio format." /></div></Page>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  return <Page title="Contact Us" lead="Tell us what is being built, where it connects and where the project stands." {...pageVisuals.contact}><form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><input required placeholder="Name" /><input required placeholder="Company" /><input required type="email" placeholder="Work email" /><input placeholder="Project location" /><select defaultValue=""><option value="" disabled>Project type</option><option>Solar EPC</option><option>Wind EPC</option><option>Power evacuation</option><option>Substation / switchyard</option><option>Transmission</option><option>Testing & commissioning</option><option>O&M</option></select><textarea rows={6} placeholder="Project requirement" /><button className="button" type="submit">{sent ? 'Brief received' : 'Send project brief'} <Arrow /></button></form></Page>;
}

function Insights() {
  return <Page title="Insights" lead="Engineering notes, project stories and practical lessons from renewable infrastructure delivery." {...pageVisuals.insights}><Section eyebrow="Engineering notes" title="Make the technical journey easier to understand." /><div className="project-grid"><MediaCard image={pageVisuals.insights.gallery[0]} title="Generation to grid" text="How plant, evacuation and receiving-end interfaces work together." /><MediaCard image={pageVisuals.insights.gallery[1]} title="Commissioning readiness" text="The checks that close the gap between construction and energisation." /><MediaCard image={pageVisuals.insights.gallery[2]} title="Transmission execution" text="Planning the route, structures, stringing and testing as one sequence." /></div></Page>;
}

function Sustainability() {
  return <Page title="Sustainability" lead="Building renewable infrastructure with safety, efficiency and responsible project execution." {...pageVisuals.sustainability}><Section eyebrow="Sustainability" title="Cleaner power needs disciplined infrastructure." /><p className="lead-copy">Our sustainability story is connected to the work itself: renewable generation, efficient electrical systems, safe execution, responsible site practices and lifecycle support.</p></Page>;
}

function Careers() {
  return <Page title="Careers" lead="Build your career around renewable energy, electrical infrastructure and field engineering." {...pageVisuals.careers}><Section eyebrow="Life at PROPCare" title="Work where engineering meets the energy transition." /><p className="lead-copy">We are building a practical, field-oriented team across engineering, project execution, testing, commissioning and operations.</p><Link className="button" to="/contact">Send your profile <Arrow /></Link></Page>;
}

function Page({ title, lead, image, gallery, children }: { title: string; lead: string; image: string; gallery: string[]; children: ReactNode }) {
  return <><section className="inner-hero"><div className="wrap inner-grid"><div><span className="kicker">PROPCare ENERGY CARE</span><h1>{title}</h1><p>{lead}</p></div><img src={image} alt="" /></div></section><main className="wrap page-body">{children}<section className="page-gallery"><div className="gallery-large"><img src={gallery[0]} alt="Renewable infrastructure"/><span>FIELD / RENEWABLE INFRASTRUCTURE</span></div><div className="gallery-column"><img src={gallery[1]} alt="Power infrastructure"/><img src={gallery[2]} alt="Project engineering"/></div></section><section className="article-band"><div><span className="kicker">ENGINEERING NOTE</span><h2>Why the connection matters.</h2></div><p>Renewable projects are not only about generation. The electrical path through collection, transformation, protection, evacuation and grid interface has to work as one coordinated system. PROPCare presents that journey visually, package by package.</p></section></main></>;
}

function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<Service />} /><Route path="/projects" element={<Projects />} /><Route path="/insights" element={<Insights />} /><Route path="/sustainability" element={<Sustainability />} /><Route path="/careers" element={<Careers />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes><Footer /></>;
}

export default App;
