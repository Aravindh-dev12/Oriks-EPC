import { useState, type ReactNode } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Arrow, Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { services } from './data';

function Home() {
  return (
    <>
      <HeroVideo />
      <section className="intro"><div className="wrap split"><div><span className="kicker">PROPCare ENERGY CARE</span><h2>Power infrastructure built around the point where energy becomes usable.</h2></div><p>Engineering, procurement, construction, evacuation, substations, transmission, commissioning and lifecycle support for renewable-power projects.</p></div></section>
      <section className="dark"><div className="wrap"><Section eyebrow="Capabilities" title="One project. Multiple interfaces. One coordinated delivery." /><div className="service-grid">{services.map((s, i) => <Link to={`/services/${s.slug}`} className="service-card" key={s.slug}><span>{`0${i + 1}`}</span><h3>{s.title}</h3><p>{s.short}</p><b>Explore <Arrow /></b></Link>)}</div></div></section>
      <section className="wrap feature"><div className="feature-media"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=88" alt="Power transmission infrastructure" /></div><div><span className="kicker">FROM GENERATION TO GRID</span><h2>Make the electrical path visible.</h2><p>PROPCare is structured around the systems that connect renewable generation to a reliable grid interface — from collection and transformation to transmission, protection, testing and handover.</p><Link className="button" to="/services">View capability map <Arrow /></Link></div></section>
      <section className="metrics"><div className="wrap metric-grid"><div><strong>Solar</strong><span>Renewable EPC</span></div><div><strong>Wind</strong><span>Electrical infrastructure</span></div><div><strong>HT / EHT</strong><span>Evacuation & transmission</span></div><div><strong>O&M</strong><span>Lifecycle support</span></div></div></section>
      <section className="wrap projects"><Section eyebrow="Project approach" title="Designed for technical clarity, not decorative claims." /><div className="project-grid"><MediaCard image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88" title="Renewable EPC" text="Plant-side electrical systems and EBoP." /><MediaCard image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=88" title="Substations & switchyards" text="Primary, secondary and grid-interface works." /><MediaCard image="https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1400&q=88" title="Transmission" text="Route execution, stringing and energisation readiness." /></div></section>
      <section className="cta"><div className="wrap cta-inner"><div><span className="kicker">START A PROJECT</span><h2>Bring the requirement. We’ll map the electrical scope.</h2></div><Link className="button light" to="/contact">Project enquiry <Arrow /></Link></div></section>
    </>
  );
}

function About() {
  return <Page title="About PROPCare" lead="A focused engineering company for renewable and power-infrastructure interfaces." image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=88"><Section eyebrow="Our focus" title="Engineering discipline from generation to grid." /><p className="lead-copy">PROPCare Energy Care Private Limited is based in Karur, Tamil Nadu. The company is positioned around renewable EPC and electrical infrastructure: power evacuation, substations, transmission, testing, commissioning and lifecycle support.</p></Page>;
}

function Services() {
  return <Page title="Solutions" lead="Clear work packages for the renewable-to-grid project journey." image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=88"><div className="service-list">{services.map(s => <Link to={`/services/${s.slug}`} className="list-row" key={s.slug}><span>{s.title}</span><p>{s.short}</p><Arrow /></Link>)}</div></Page>;
}

function Service() {
  const { slug } = useParams();
  const s = services.find(x => x.slug === slug) ?? services[0];
  return <Page title={s.title} lead={s.short} image={s.image}><Section eyebrow="Scope" title="A coordinated package, defined around the project interface." /><div className="scope-grid">{s.bullets.map((x, i) => <div key={x}><span>{`0${i + 1}`}</span><h3>{x}</h3></div>)}</div><Section eyebrow="Delivery" title="Built for testing, energisation and handover." /><p className="lead-copy">{s.intro}</p></Page>;
}

function Projects() {
  return <Page title="Projects" lead="A clean framework for publishing verified project evidence." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=88"><div className="notice">Project photographs, MW, kV, MVA, route length, executed scope and completion status should be added only from approved PROPCare records.</div><div className="project-grid"><MediaCard image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=88" title="Wind infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88" title="Solar infrastructure" text="Representative portfolio format." /><MediaCard image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=88" title="Grid infrastructure" text="Representative portfolio format." /></div></Page>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  return <Page title="Project enquiry" lead="Tell us what is being built, where it connects and where the project stands." image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=88"><form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><input required placeholder="Name" /><input required placeholder="Company" /><input required type="email" placeholder="Work email" /><input placeholder="Project location" /><select defaultValue=""><option value="" disabled>Project type</option><option>Solar EPC</option><option>Wind EPC</option><option>Power evacuation</option><option>Substation / switchyard</option><option>Transmission</option><option>Testing & commissioning</option><option>O&M</option></select><textarea rows={6} placeholder="Project requirement" /><button className="button" type="submit">{sent ? 'Brief received' : 'Send project brief'} <Arrow /></button></form></Page>;
}

function Page({ title, lead, image, children }: { title: string; lead: string; image: string; children: ReactNode }) {
  return <><section className="inner-hero"><div className="wrap inner-grid"><div><span className="kicker">PROPCare ENERGY CARE</span><h1>{title}</h1><p>{lead}</p></div><img src={image} alt="" /></div></section><main className="wrap page-body">{children}</main></>;
}

function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<Service />} /><Route path="/projects" element={<Projects />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes><Footer /></>;
}

export default App;
