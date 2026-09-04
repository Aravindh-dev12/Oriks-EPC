import { FormEvent, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { Arrow, CTA, Eyebrow, PageHero, PageShell, Reveal, SectionHeading } from './components';
import { capabilitySteps, insights, projectFormats, proofFields, services } from './data';

function About() {
  return <PageShell>
    <PageHero
      label="About ORIKS"
      title="Renewable power infrastructure, explained with engineering clarity."
      text="ORIKS Energy Care Pvt Ltd is a Karur-based renewable-energy and electrical-infrastructure company. The website is structured to present the company the way technical buyers evaluate EPC partners: capability, project interfaces, execution discipline, safety and evidence."
      image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=84"
    />
    <section className="section">
      <div className="container editorial-grid">
        <Reveal><SectionHeading eyebrow="Who we are" title="Focused on the infrastructure between generation and grid." /></Reveal>
        <Reveal><div className="editorial-copy">
          <p>Renewable generation is only one part of a working power project. The output must be collected, transformed, protected, metered, evacuated and synchronised with the utility network safely and correctly.</p>
          <p>ORIKS is positioned around that complete electrical interface — bringing together EPC coordination, substations, transmission infrastructure, testing, commissioning and lifecycle support for solar, wind and hybrid projects.</p>
        </div></Reveal>
      </div>
    </section>
    <section className="section soft-section">
      <div className="container"><Reveal><SectionHeading eyebrow="How we work" title="Execution needs clarity at every interface." /></Reveal></div>
      <div className="container values-grid ntc-values">
        {[
          ['Engineering clarity','Translate project requirements into a clear electrical scope, interfaces and execution plan.'],
          ['Execution discipline','Keep engineering, procurement, civil works, electrical works, quality and documentation coordinated.'],
          ['Safety first','Treat safe systems of work, statutory compliance and energisation discipline as core project requirements.'],
          ['Long-term reliability','Think beyond handover to maintainability, inspection, protection and dependable operation.']
        ].map(([t,d]) => <Reveal key={t}><article><h3>{t}</h3><p>{d}</p></article></Reveal>)}
      </div>
    </section>
    <section className="section">
      <div className="container office-card"><Reveal><div><Eyebrow>Registered office</Eyebrow><h2>Karur, Tamil Nadu</h2><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Karur, Tamil Nadu, India — 639002.</p></div></Reveal><Reveal><div className="location-panel"><span>Tamil Nadu</span><strong>Karur</strong><small>Renewable & power infrastructure focus</small></div></Reveal></div>
    </section>
    <CTA />
  </PageShell>;
}

function ServicesOverview() {
  return <PageShell>
    <PageHero
      label="Solutions"
      title="Detailed EPC solutions, not a one-page service list."
      text="Like established infrastructure companies, each ORIKS capability is presented as its own technical solution: what it covers, how it fits into the project, the typical work packages and the evidence a client should expect to see."
      image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=84"
    />
    <section className="section">
      <div className="container solution-index">
        {services.map((s, i) => <Reveal key={s.slug}><Link to={`/services/${s.slug}`} className="solution-index-card">
          <div className="solution-index-media"><img src={s.image} alt="" /></div>
          <div className="solution-index-copy"><span>0{i + 1}</span><h2>{s.title}</h2><p>{s.short}</p><strong>Explore solution <Arrow /></strong></div>
        </Link></Reveal>)}
      </div>
    </section>
    <CTA />
  </PageShell>;
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);
  return <PageShell>
    <section className="solution-hero">
      <div className="solution-hero-media"><img src={service.image} alt="" /></div>
      <div className="solution-hero-shade" />
      <div className="container solution-hero-copy"><Reveal><Eyebrow>ORIKS Solution</Eyebrow><h1>{service.title}</h1><p>{service.short}</p><Link to="/contact" className="button light">Discuss this requirement <Arrow /></Link></Reveal></div>
    </section>
    <section className="section">
      <div className="container editorial-grid">
        <Reveal><SectionHeading eyebrow="Overview" title="Built around the real project interface." /></Reveal>
        <Reveal><div className="editorial-copy"><p>{service.intro}</p><p>For production, this page can be strengthened further with ORIKS-approved photographs, voltage ranges, project capacities, equipment scope and completed-project references.</p></div></Reveal>
      </div>
    </section>
    <section className="section soft-section">
      <div className="container service-scope-layout">
        <Reveal><SectionHeading eyebrow="Scope" title="Solutions we can present within this work package." body="The exact contract scope should always be aligned with the approved ORIKS proposal and project requirement." /></Reveal>
        <div className="scope-list">{service.bullets.map((b, i) => <Reveal key={b}><div><span>0{i + 1}</span><strong>{b}</strong></div></Reveal>)}</div>
      </div>
    </section>
    <section className="section">
      <div className="container"><Reveal><SectionHeading eyebrow="Project strengths" title="What a client should understand from the page." /></Reveal>
        <div className="strength-cards">{service.strengths.map((s, i) => <Reveal key={s}><article><span>0{i + 1}</span><h3>{s}</h3></article></Reveal>)}</div>
      </div>
    </section>
    <section className="section dark-section">
      <div className="container"><Reveal><SectionHeading eyebrow="Related solutions" title="The surrounding project interfaces." /></Reveal>
        <div className="related-grid">{related.map(s => <Reveal key={s.slug}><Link to={`/services/${s.slug}`}><img src={s.image} alt="" /><div><h3>{s.title}</h3><span>View solution <Arrow /></span></div></Link></Reveal>)}</div>
      </div>
    </section>
    <CTA />
  </PageShell>;
}

function Capabilities() {
  return <PageShell>
    <PageHero label="Capabilities" title="A complete view of the renewable-to-grid interface." text="The capability model is designed around how an EPC buyer evaluates risk: scope definition, interface management, execution, energisation and lifecycle reliability." image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=84" />
    <section className="section"><div className="container capability-diagram">{capabilitySteps.map((s, i) => <Reveal key={s.n}><div className="cap-node"><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p>{i < capabilitySteps.length - 1 && <i aria-hidden="true">→</i>}</div></Reveal>)}</div></section>
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
    <PageHero label="Project Portfolio" title="Project stories should prove capability, not only show photographs." text="The project library is structured like a technical case-study platform. Once ORIKS supplies verified records, each project can show capacity, voltage level, infrastructure scope, challenge, executed responsibility and result." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=84" />
    <section className="section"><div className="container"><Reveal><div className="notice"><strong>Content integrity</strong><p>The cards below demonstrate the format ORIKS can use for its portfolio. They are representative EPC scope examples, not claims of completed ORIKS projects. Verified project data should replace them after management approval.</p></div></Reveal></div>
      <div className="container project-grid">{projectFormats.map(p => <Reveal key={p.title}><article className="project-card"><div className="project-image"><img src={p.image} alt="" /><span>{p.type}</span></div><div className="project-body"><h2>{p.title}</h2><ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul></div></article></Reveal>)}</div>
    </section>
    <section className="section soft-section"><div className="container proof-explainer"><Reveal><SectionHeading eyebrow="Case-study standard" title="Capacity + voltage + scope + challenge + result." body="Established EPC and infrastructure companies make evidence easy to scan. ORIKS should use the same decision-friendly pattern once verified records are available." /></Reveal><Reveal><div className="proof-fields large">{proofFields.map(([key,label]) => <div key={key}><strong>{key}</strong><span>{label}</span></div>)}</div></Reveal></div></section>
    <section className="section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Project media" title="Use real site photos and short project videos." /></Reveal><Reveal><div className="editorial-copy"><p>For the final project library, ORIKS can combine site photographs, drone footage, substation and transmission visuals, equipment close-ups and commissioning clips.</p><p>Short video clips are most useful when they explain a real project stage rather than acting only as decoration.</p></div></Reveal></div></section>
    <CTA />
  </PageShell>;
}

function Insights() {
  return <PageShell>
    <PageHero label="Insights" title="Technical knowledge that helps clients understand the work." text="NTC separates case studies and news from core service pages. ORIKS can use the same approach with practical renewable-EPC articles, project knowledge and future company updates." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=84" />
    <section className="section">
      <div className="container insight-grid">{insights.map((article, i) => <Reveal key={article.slug}><Link to={`/insights/${article.slug}`} className={`insight-card ${i === 0 ? 'featured' : ''}`}>
        <div className="insight-media"><img src={article.image} alt="" /></div>
        <div className="insight-copy"><span>{article.category} · {article.readTime}</span><h2>{article.title}</h2><p>{article.excerpt}</p><strong>Read article <Arrow /></strong></div>
      </Link></Reveal>)}</div>
    </section>
    <CTA />
  </PageShell>;
}

function InsightDetail() {
  const { slug } = useParams();
  const article = insights.find(i => i.slug === slug);
  if (!article) return <Navigate to="/insights" replace />;
  return <PageShell>
    <section className="article-hero"><div className="container article-hero-grid"><Reveal><div><Eyebrow>{article.category}</Eyebrow><h1>{article.title}</h1><p>{article.excerpt}</p><small>{article.readTime}</small></div></Reveal><Reveal><div className="article-hero-media"><img src={article.image} alt="" /></div></Reveal></div></section>
    <section className="article-body"><div className="container article-body-grid"><aside><span>ORIKS Insights</span><Link to="/insights">← All articles</Link></aside><article>{article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.body.map(p => <p key={p}>{p}</p>)}</section>)}</article></div></section>
    <section className="section soft-section"><div className="container"><Reveal><SectionHeading eyebrow="Continue reading" title="More renewable and grid-infrastructure insights." /></Reveal><div className="related-insights">{insights.filter(i => i.slug !== article.slug).slice(0,3).map(i => <Reveal key={i.slug}><Link to={`/insights/${i.slug}`}><span>{i.category}</span><h3>{i.title}</h3><strong>Read <Arrow /></strong></Link></Reveal>)}</div></div></section>
    <CTA />
  </PageShell>;
}

function Sustainability() {
  return <PageShell>
    <PageHero label="Sustainability, Safety & Quality" title="Reliable infrastructure starts with disciplined execution." text="NTC gives sustainability and Q&EHS their own corporate space. For ORIKS, the equivalent should bring safety, quality, environmental responsibility and responsible energisation together in one clear section." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=84" />
    <section className="section"><div className="container safety-grid">{[
      ['Plan the work','Define method statements, interfaces, permits, sequence, access and responsibilities before mobilisation.'],
      ['Control site risk','Use task-level hazard identification, isolation discipline, PPE, toolbox talks and appropriate supervision.'],
      ['Build quality in','Use inspection and test plans, checklists, material verification, installation checks and punch-list closure.'],
      ['Test before energisation','Complete electrical, mechanical, protection and functional verification before charging any system.'],
      ['Document the asset','Close with drawings, test records, handover packs and agreed operating / maintenance information.'],
      ['Improve continuously','Capture lessons, recurring defects and maintenance observations to improve future execution and reliability.']
    ].map(([t,d],i) => <Reveal key={t}><article><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>
    <section className="section dark-section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Responsible publishing" title="Certifications and statistics should be verifiable." /></Reveal><Reveal><div className="editorial-copy"><p>Client logos, ISO certificates, electrical contractor licences, utility empanelments, safety statistics and project-completion records should be published only after ORIKS provides approved copies or references.</p><p>This protects credibility during technical and commercial due diligence.</p></div></Reveal></div></section>
    <CTA />
  </PageShell>;
}

function Careers() {
  return <PageShell>
    <PageHero label="Careers" title="Build the teams behind renewable and grid infrastructure." text="A careers section helps the company present itself as an active organisation while creating a simple place to publish future engineering, project, safety, testing and site-execution roles." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=84" />
    <section className="section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Life at ORIKS" title="Engineering work is a team effort." /></Reveal><Reveal><div className="editorial-copy"><p>Renewable and power-infrastructure projects depend on collaboration between engineering, procurement, civil, electrical, testing, safety, quality and project-management teams.</p><p>When ORIKS supplies approved employee photographs, training activities and site-team stories, this page can become a stronger employer-brand section.</p></div></Reveal></div></section>
    <section className="section soft-section"><div className="container"><Reveal><SectionHeading eyebrow="Future openings" title="A clean structure for job listings." /></Reveal><div className="job-grid">{['Project Engineer — Electrical','Testing & Commissioning Engineer','Site Engineer — Transmission / Substation','EHS / Safety Engineer'].map((role,i) => <Reveal key={role}><article><span>0{i+1}</span><h3>{role}</h3><p>Location and vacancy details can be published here when approved by ORIKS management.</p><Link to="/contact">Contact ORIKS <Arrow /></Link></article></Reveal>)}</div></div></section>
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
    <PageHero label="Contact" title="Start with a clear project requirement." text="Share the project type, location, expected capacity, voltage or grid interface and the stage you are currently at. The page is designed for a technical enquiry, not a generic contact form." image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=84" />
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
    <Route path="/" element={<Navigate to="/" replace />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<ServicesOverview />} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/capabilities" element={<Capabilities />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/insights/:slug" element={<InsightDetail />} />
    <Route path="/sustainability" element={<Sustainability />} />
    <Route path="/safety-quality" element={<Navigate to="/sustainability" replace />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
