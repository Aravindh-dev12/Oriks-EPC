import { FormEvent, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Arrow, CTA, Eyebrow, PageHero, PageShell, Reveal, SectionHeading } from './components';
import { capabilitySteps, projectFormats, proofFields, services } from './data';

function Home() {
  return <PageShell>
    <section className="home-hero">
      <div className="container home-hero-grid">
        <Reveal className="hero-copy">
          <Eyebrow>Renewable Energy EPC • Electrical Infrastructure</Eyebrow>
          <h1>Engineering the connection <em>from generation to grid.</em></h1>
          <p>ORIKS Energy Care Pvt Ltd is positioned around the electrical infrastructure that makes renewable projects grid-ready — power evacuation, pooling substations, transmission interfaces, testing, commissioning and lifecycle support.</p>
          <div className="hero-actions"><Link to="/services" className="button dark">Explore capabilities <Arrow /></Link><Link to="/contact" className="text-link">Discuss a project <Arrow /></Link></div>
        </Reveal>
        <Reveal className="hero-visual">
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=88" alt="Wind turbines in a renewable energy landscape" />
          <div className="hero-overlay"><strong>Solar • Wind • Grid</strong><span>EPC & power infrastructure</span></div>
        </Reveal>
      </div>
      <div className="container hero-strip">
        <span>Renewable EPC</span><span>Power Evacuation</span><span>Substations</span><span>Transmission</span><span>Grid Connectivity</span><span>O&M</span>
      </div>
    </section>

    <section className="section">
      <div className="container split-heading">
        <Reveal><SectionHeading eyebrow="What clients need to understand" title="Your capability should be clear before the first meeting." /></Reveal>
        <Reveal><p className="lead-copy">A strong EPC website works like a company profile, technical brochure and project portfolio in one place. It helps developers, OEMs, consultants and utility-side teams understand what you can execute before a detailed discussion begins.</p></Reveal>
      </div>
      <div className="container three-cards">
        {[
          ['01','Show the technical scope','Explain evacuation, substations, transmission, protection, metering and grid interface in the language technical buyers use.'],
          ['02','Show how the system connects','Make the path from renewable generation through collection, transformation and grid synchronisation easy to understand.'],
          ['03','Show proof of execution','Present future project case studies by MW, kV, MVA, route-km, location, client and executed scope once figures are verified.']
        ].map(([n,t,d]) => <Reveal key={n}><article className="number-card"><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}
      </div>
    </section>

    <section className="section soft-section">
      <div className="container"><Reveal><SectionHeading eyebrow="Core service families" title="Infrastructure behind reliable renewable power." body="Structured around the work that connects a renewable-energy asset to the grid and keeps the electrical system dependable." /></Reveal></div>
      <div className="container service-grid">
        {services.slice(0, 6).map((s, i) => <Reveal key={s.title}><Link to="/services" className="service-card"><div className="service-image"><img src={s.image} alt="" /></div><div className="service-content"><span className="index">0{i+1}</span><h3>{s.title}</h3><p>{s.short}</p><span className="card-link">View scope <Arrow /></span></div></Link></Reveal>)}
      </div>
    </section>

    <section className="section">
      <div className="container capability-layout">
        <Reveal><div className="sticky-copy"><SectionHeading eyebrow="From generation to grid" title="One connected electrical journey." body="The website is designed to explain the full project interface rather than treating each activity as an isolated service." /><Link to="/capabilities" className="text-link">See capability map <Arrow /></Link></div></Reveal>
        <div className="steps-list">{capabilitySteps.map(step => <Reveal key={step.n}><div className="step-row"><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div></Reveal>)}</div>
      </div>
    </section>

    <section className="section proof-section">
      <div className="container proof-grid">
        <Reveal><div className="proof-media"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1500&q=84" alt="Electrical transmission infrastructure" /></div></Reveal>
        <Reveal><div><SectionHeading eyebrow="Project portfolio standard" title="Clients compare evidence, not adjectives." body="The project section is structured so ORIKS can publish verified technical proof in the same decision-friendly format used by established EPC companies." />
          <div className="proof-fields">{proofFields.map(([key,label]) => <div key={key}><strong>{key}</strong><span>{label}</span></div>)}</div>
          <p className="fine-note">No unverified project capacities, client logos, certifications or completion statistics are being presented as ORIKS achievements. Those can be added after management confirmation.</p>
        </div></Reveal>
      </div>
    </section>
    <CTA />
  </PageShell>;
}

function About() {
  return <PageShell>
    <PageHero label="About ORIKS" title="Built around the infrastructure that makes renewable power usable." text="ORIKS Energy Care Pvt Ltd is a Karur-based company focused on renewable-energy EPC and the electrical infrastructure required for reliable grid integration." image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Our focus" title="From project requirement to energisation." /></Reveal><Reveal><div className="editorial-copy"><p>Renewable generation is only one part of the project. The plant must be collected, transformed, protected, metered, evacuated and synchronised with the utility network safely and correctly.</p><p>ORIKS is positioned around that complete interface — bringing together engineering coordination, electrical infrastructure, site execution, testing, commissioning and lifecycle support for solar, wind and hybrid projects.</p></div></Reveal></div></section>
    <section className="section soft-section"><div className="container values-grid">{[
      ['Engineering clarity','Translate project requirements into a clear electrical scope, interfaces and execution plan.'],
      ['Execution discipline','Keep engineering, procurement, civil works, electrical works, quality and documentation coordinated.'],
      ['Safety first','Treat safe systems of work, statutory compliance and energisation discipline as core project requirements.'],
      ['Long-term reliability','Think beyond handover to maintainability, inspection, protection and dependable operation.']
    ].map(([t,d]) => <Reveal key={t}><article><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>
    <section className="section"><div className="container office-card"><Reveal><Eyebrow>Registered office</Eyebrow><h2>Karur, Tamil Nadu</h2><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Karur, Tamil Nadu, India — 639002.</p></Reveal><Reveal><div className="location-panel"><span>Tamil Nadu</span><strong>Karur</strong><small>Renewable & power infrastructure focus</small></div></Reveal></div></section>
    <CTA />
  </PageShell>;
}

function Services() {
  return <PageShell>
    <PageHero label="Services" title="EPC services shaped around grid-ready renewable infrastructure." text="A clear, modular service structure for developers, renewable asset owners, OEMs, consultants and infrastructure partners." image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container service-detail-list">{services.map((s, i) => <Reveal key={s.title}><article className="service-detail"><div className="service-detail-media"><img src={s.image} alt="" /></div><div><span className="large-index">0{i+1}</span><h2>{s.title}</h2><p>{s.short}</p><ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article></Reveal>)}</div></section>
    <CTA />
  </PageShell>;
}

function Capabilities() {
  return <PageShell>
    <PageHero label="Capabilities" title="A complete view of the renewable-to-grid interface." text="The capability model is designed around how an EPC buyer evaluates risk: scope definition, interface management, execution, energisation and lifecycle reliability." image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container capability-diagram">{capabilitySteps.map((s, i) => <Reveal key={s.n}><div className="cap-node"><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p>{i < capabilitySteps.length-1 && <i aria-hidden="true">→</i>}</div></Reveal>)}</div></section>
    <section className="section soft-section"><div className="container"><Reveal><SectionHeading eyebrow="Capability matrix" title="What can sit inside the project scope." /></Reveal><div className="matrix">{[
      ['Engineering','Single-line interfaces, layouts, equipment coordination, cable and earthing design inputs, protection and metering philosophy.'],
      ['Procurement','Package planning, vendor coordination, equipment interfaces, material scheduling and technical submittals.'],
      ['Civil & Electrical','Foundations, structures, cable works, equipment installation, switchyard / substation and transmission execution.'],
      ['Utility Interface','Power evacuation coordination, bay interface, metering, protection, documentation and statutory follow-up support.'],
      ['Testing & Commissioning','Pre-energisation checks, functional verification, relay / protection coordination, charging and synchronisation support.'],
      ['O&M','Inspection, preventive maintenance, fault response, testing and lifecycle support for delivered electrical assets.']
    ].map(([t,d]) => <Reveal key={t}><article><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></div></section>
    <CTA />
  </PageShell>;
}

function Projects() {
  return <PageShell>
    <PageHero label="Project Portfolio" title="Show the work the way technical buyers evaluate it." text="The project section is prepared for case studies that demonstrate scale, voltage level, infrastructure scope and delivery responsibility — not just photographs." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container"><Reveal><div className="notice"><strong>Content integrity</strong><p>The cards below demonstrate the format ORIKS can use for its portfolio. They are representative EPC scope examples, not claims of completed ORIKS projects. Verified project data can replace them as soon as management approves it.</p></div></Reveal></div>
      <div className="container project-grid">{projectFormats.map(p => <Reveal key={p.title}><article className="project-card"><div className="project-image"><img src={p.image} alt="" /><span>{p.type}</span></div><div className="project-body"><h2>{p.title}</h2><ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul></div></article></Reveal>)}</div>
    </section>
    <section className="section soft-section"><div className="container proof-explainer"><Reveal><SectionHeading eyebrow="How every case study should read" title="Capacity + voltage + scope + result." body="Established EPC companies make project evidence easy to scan. ORIKS should follow the same pattern once its verified records are available." /></Reveal><Reveal><div className="proof-fields large">{proofFields.map(([key,label]) => <div key={key}><strong>{key}</strong><span>{label}</span></div>)}</div></Reveal></div></section>
    <CTA />
  </PageShell>;
}

function Safety() {
  return <PageShell>
    <PageHero label="Safety & Quality" title="Safe energisation starts long before the switch is closed." text="Renewable power infrastructure demands disciplined execution, documented quality checks and clear responsibility at every interface." image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container safety-grid">{[
      ['Plan the work','Define method statements, interfaces, permits, sequence, access and responsibilities before mobilisation.'],
      ['Control site risk','Use task-level hazard identification, isolation discipline, PPE, toolbox talks and supervision appropriate to the activity.'],
      ['Build quality in','Use inspection and test plans, checklists, material verification, installation checks and punch-list closure.'],
      ['Test before energisation','Complete electrical, mechanical, protection and functional verification before charging any system.'],
      ['Document the asset','Close with drawings, test records, handover packs and agreed operating / maintenance information.'],
      ['Improve continuously','Capture lessons, recurring defects and maintenance observations to improve future execution and reliability.']
    ].map(([t,d],i) => <Reveal key={t}><article><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>
    <section className="section soft-section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Certification note" title="Publish only what can be verified." /></Reveal><Reveal><div className="editorial-copy"><p>Client logos, ISO certificates, electrical contractor licences, utility empanelments, safety statistics and project completion records should be added only when the company provides approved copies or references.</p><p>This keeps the website credible in technical and commercial due diligence.</p></div></Reveal></div></section>
    <CTA />
  </PageShell>;
}

function Contact() {
  const [brief, setBrief] = useState('');
  const [copied, setCopied] = useState(false);
  const projectTypes = useMemo(() => ['Wind EPC','Solar EPC','Power Evacuation','Substation / Switchyard','Transmission Line','Testing & Commissioning','O&M','Other'], []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `ORIKS PROJECT BRIEF\nName: ${data.get('name')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nProject type: ${data.get('type')}\nLocation: ${data.get('location')}\nProject capacity: ${data.get('capacity')}\nVoltage / grid level: ${data.get('voltage')}\nRequirement: ${data.get('message')}`;
    setBrief(text);
    setCopied(false);
  }
  async function copyBrief() { if (!brief) return; await navigator.clipboard.writeText(brief); setCopied(true); }
  return <PageShell>
    <PageHero label="Contact" title="Start with a clear project requirement." text="Share the project type, location, expected capacity, voltage / grid interface and the stage you are currently at. The form creates a structured brief you can send through your approved ORIKS business contact channel." image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1500&q=84" />
    <section className="section"><div className="container contact-grid">
      <Reveal><div className="contact-info"><SectionHeading eyebrow="Registered office" title="Karur, Tamil Nadu" /><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Karur, Tamil Nadu, India — 639002.</p><div className="contact-note"><strong>Production contact setup</strong><span>Official phone, email and CRM/form endpoint can be connected as soon as ORIKS management confirms them.</span></div></div></Reveal>
      <Reveal><form className="project-form" onSubmit={submit}>
        <div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Company<input name="company" placeholder="Company / organisation" /></label></div>
        <div className="form-row"><label>Phone<input required name="phone" inputMode="tel" placeholder="Contact number" /></label><label>Email<input required name="email" type="email" placeholder="Work email" /></label></div>
        <div className="form-row"><label>Project type<select name="type" defaultValue=""><option value="" disabled>Select</option>{projectTypes.map(t => <option key={t}>{t}</option>)}</select></label><label>Location<input name="location" placeholder="District / State" /></label></div>
        <div className="form-row"><label>Project capacity<input name="capacity" placeholder="e.g. MW / MVA" /></label><label>Voltage / grid level<input name="voltage" placeholder="e.g. 33 kV / 110 kV / 220 kV" /></label></div>
        <label>Requirement<textarea name="message" rows={5} placeholder="Briefly describe the scope, grid point, current stage and support required." /></label>
        <button className="button dark" type="submit">Prepare project brief <Arrow /></button>
      </form></Reveal>
    </div>
    {brief && <div className="container"><Reveal><div className="brief-output"><div><Eyebrow>Generated project brief</Eyebrow><pre>{brief}</pre></div><button className="button outline" onClick={copyBrief}>{copied ? 'Copied' : 'Copy brief'}</button></div></Reveal></div>}
    </section>
  </PageShell>;
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/capabilities" element={<Capabilities />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/safety-quality" element={<Safety />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
