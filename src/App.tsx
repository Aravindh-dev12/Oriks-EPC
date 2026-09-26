import { FormEvent, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { Arrow, CTA, Eyebrow, PageHero, PageShell, Reveal, SectionHeading, VideoHero } from './components';
import { capabilitySteps, insights, projectFormats, proofFields, services } from './data';

function Home() {
  const industries = [
    { title: 'Solar & Renewable', text: 'Plant electrical systems, EBoP, collection, evacuation and grid interface.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=88' },
    { title: 'Wind Infrastructure', text: 'Electrical interfaces, pooling, transmission and commissioning support.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=88' },
    { title: 'Power Transmission', text: 'HT / EHT lines, substations, bay interfaces and energisation readiness.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=88' },
    { title: 'Industrial Infrastructure', text: 'Electrical infrastructure and site execution for complex project environments.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=88' }
  ];

  const journey = [
    ['01', 'Engineer', 'Define the electrical scope, interfaces and execution sequence.'],
    ['02', 'Build', 'Coordinate civil, electrical, procurement and site activities.'],
    ['03', 'Connect', 'Complete evacuation, substation, transmission and utility interfaces.'],
    ['04', 'Commission', 'Test, verify, document and prepare the system for energisation.'],
    ['05', 'Support', 'Extend the value of the asset through O&M and lifecycle support.']
  ];

  const cases = [
    { title: 'Wind Power Evacuation', tag: 'Representative case-study format', text: 'Collection network, pooling substation, EHV transmission and utility interface.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=88' },
    { title: 'Solar Grid Interconnection', tag: 'Representative case-study format', text: 'Plant electrical scope, collection system, evacuation line and commissioning.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=88' },
    { title: 'Substation & Transmission', tag: 'Representative case-study format', text: 'Primary equipment, protection, metering, bay works and pre-energisation testing.', image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=88' }
  ];

  return <PageShell>
    <VideoHero />

    <section className="oriks-intro">
      <div className="container oriks-two-col">
        <Reveal><SectionHeading eyebrow="From source to grid" title="Infrastructure that makes renewable power deliverable." body="ORIKS Energy Care can be presented as an execution partner across generation-side electrical works, power evacuation, substations, transmission, commissioning and lifecycle support." /></Reveal>
        <Reveal><div className="oriks-intro-copy"><p>ORIKS presents its work through project visuals, clear scope definitions and the interfaces that matter from generation to grid.</p><Link className="text-link" to="/capabilities">Explore the capability map <Arrow /></Link></div></Reveal>
      </div>
    </section>

    <section className="oriks-solutions">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Our solutions" title="A visual catalogue of the work packages around a renewable project." body="Each capability can open into a dedicated technical page with approved project photographs, equipment visuals, scope details and verified project evidence." /></Reveal>
        <div className="oriks-solution-grid">{services.map((s, i) => <Reveal key={s.slug}><Link to={`/services/${s.slug}`} className="oriks-solution-card"><div className="oriks-solution-image"><img src={s.image} alt="" /><span>0{i + 1}</span></div><div className="oriks-solution-body"><h3>{s.title}</h3><p>{s.short}</p><strong>View solution <Arrow /></strong></div></Link></Reveal>)}</div>
      </div>
    </section>

    <section className="oriks-industries">
      <div className="container">
        <div className="oriks-section-head light"><Reveal><SectionHeading eyebrow="Industries & infrastructure" title="Show where the engineering is applied." body="These sectors are shown as working environments for ORIKS capabilities. Replace representative imagery with approved ORIKS project photography as the portfolio is published." /></Reveal></div>
        <div className="oriks-industry-grid">{industries.map((item, i) => <Reveal key={item.title}><article className="oriks-industry-card"><img src={item.image} alt="" /><div className="oriks-industry-shade" /><div className="oriks-industry-copy"><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="oriks-journey">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Project journey" title="Make the delivery model visible in one glance." body="A simple visual sequence helps technical buyers understand where ORIKS can participate in a project and how the interfaces connect." /></Reveal>
        <div className="oriks-journey-track">{journey.map(([n,t,d]) => <Reveal key={n}><div className="oriks-journey-step"><span>{n}</span><div><strong>{t}</strong><small>{d}</small></div></div></Reveal>)}</div>
      </div>
    </section>

    <section className="oriks-proof">
      <div className="container oriks-proof-grid">
        <Reveal><div><Eyebrow>Project proof</Eyebrow><h2>Put the numbers next to the photographs.</h2><p>When management verifies the portfolio, replace the placeholders with actual MW, kV, MVA, route length, project location and executed scope. This is the kind of evidence buyers can scan quickly.</p><Link className="button light" to="/projects">View project format <Arrow /></Link></div></Reveal>
        <Reveal><div className="oriks-proof-units">{proofFields.map(([key,label]) => <div key={key}><strong>{key}</strong><span>{label}</span></div>)}</div></Reveal>
      </div>
    </section>

    <section className="oriks-cases">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Case studies" title="Project evidence, shown clearly." body="Each case study should lead with the project challenge, executed scope, measurable outcome and approved site photography." /></Reveal>
        <div className="oriks-case-grid">{cases.map((item, i) => <Reveal key={item.title}><article className={`oriks-case-card ${i === 0 ? 'featured' : ''}`}><div className="oriks-case-media"><img src={item.image} alt="" /></div><div className="oriks-case-body"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/projects">Open project library <Arrow /></Link></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="oriks-safety">
      <div className="container oriks-safety-grid">
        <Reveal><div className="oriks-safety-media"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1500&q=88" alt="Electrical engineering site work" /></div></Reveal>
        <Reveal><div><SectionHeading eyebrow="Safety, quality & sustainability" title="Make Q&EHS a visible part of the brand." body="Safety, quality and environmental responsibility belong inside every ORIKS project—from site preparation through testing, energisation and handover." /><div className="oriks-checks"><span>✓ Safe systems of work</span><span>✓ Inspection & test plans</span><span>✓ Pre-energisation checks</span><span>✓ Handover documentation</span></div><Link className="text-link" to="/sustainability">Explore safety & quality <Arrow /></Link></div></Reveal>
      </div>
    </section>

    <CTA />
  </PageShell>;
}
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
      <div className="container values-grid">
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
      text="Each ORIKS solution has its own scope, interfaces, execution stages and deliverables so a project team can understand exactly where the capability fits."
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
        <Reveal><div className="editorial-copy"><p>{service.intro}</p><p>Project-specific photographs, capacities, voltage levels, equipment schedules and completion records can be added here when approved.</p></div></Reveal>
      </div>
    </section>
    <section className="section soft-section">
      <div className="container service-scope-layout">
        <Reveal><SectionHeading eyebrow="Scope" title="Solutions we can present within this work package." body="The exact contract scope should always be aligned with the approved Propcare proposal and project requirement." /></Reveal>
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
    <PageHero label="Insights" title="Technical knowledge that helps clients understand the work." text="ORIKS Insights focuses on practical engineering topics, project lessons and updates from the renewable-power sector." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=84" />
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
    <PageHero label="Sustainability, Safety & Quality" title="Reliable infrastructure starts with disciplined execution." text="reference example gives sustainability and Q&EHS their own corporate space. For Propcare, the equivalent should bring safety, quality, environmental responsibility and responsible energisation together in one clear section." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=84" />
    <section className="section"><div className="container safety-grid">{[
      ['Plan the work','Define method statements, interfaces, permits, sequence, access and responsibilities before mobilisation.'],
      ['Control site risk','Use task-level hazard identification, isolation discipline, PPE, toolbox talks and appropriate supervision.'],
      ['Build quality in','Use inspection and test plans, checklists, material verification, installation checks and punch-list closure.'],
      ['Test before energisation','Complete electrical, mechanical, protection and functional verification before charging any system.'],
      ['Document the asset','Close with drawings, test records, handover packs and agreed operating / maintenance information.'],
      ['Improve continuously','Capture lessons, recurring defects and maintenance observations to improve future execution and reliability.']
    ].map(([t,d],i) => <Reveal key={t}><article><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>
    <section className="section dark-section"><div className="container editorial-grid"><Reveal><SectionHeading eyebrow="Responsible publishing" title="Certifications and statistics should be verifiable." /></Reveal><Reveal><div className="editorial-copy"><p>Client logos, ISO certificates, electrical contractor licences, utility empanelments, safety statistics and project-completion records should be published only after Propcare provides approved copies or references.</p><p>This keeps published project information accurate and suitable for technical and commercial review.</p></div></Reveal></div></section>
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
    <Route path="/" element={<Home />} />
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
