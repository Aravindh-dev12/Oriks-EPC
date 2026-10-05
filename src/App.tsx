import { useState, type ReactNode } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { articles, clients, services, works } from './data';

const solar = 'https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200';
const grid = 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transmission = 'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200';

function Home() {
  return <>
    <HeroVideo />
    <section className="intro">
      <div className="wrap intro-grid">
        <div><span className="kicker">01 / WHO WE ARE</span><h2>Infrastructure that makes clean energy move.</h2></div>
        <div><p>Propecare Infra Projects brings together renewable EPC, electrical infrastructure and heavy transport for projects that need dependable execution from site to grid.</p><Link className="text-link" to="/about">Discover Propecare →</Link></div>
      </div>
    </section>

    <section className="wrap editorial-visual">
      <Link className="editorial-main" to="/works/solar"><img src={solar} alt="Solar panels" /><div className="image-caption"><span>01</span><b>SOLAR PROJECTS</b><em>Renewable generation</em></div></Link>
      <div className="editorial-stack">
        <Link className="editorial-tile" to="/works/windmill"><img src={works[1].image} alt="Wind turbines" /><div className="image-caption"><span>02</span><b>WINDMILL</b><em>Clean power infrastructure</em></div></Link>
        <Link className="editorial-tile" to="/works/transport"><img src={works[2].image} alt="Heavy transport" /><div className="image-caption"><span>03</span><b>TRANSPORT</b><em>Heavy movement and logistics</em></div></Link>
      </div>
    </section>

    <section className="dark">
      <div className="wrap">
        <Section eyebrow="PROPECARE / SOLUTIONS" title="One partner across every project interface." />
        <p className="section-intro">From engineering and procurement to construction, power evacuation, commissioning and specialist movement, our teams help reduce coordination gaps and keep delivery accountable.</p>
        <div className="service-grid">{services.map((s, i) => <Link to={`/services/${s.slug}`} className="service-card" key={s.slug}><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.short}</p><b>View scope →</b></Link>)}</div>
      </div>
    </section>

    <section className="wrap metrics">
      <div><strong>03</strong><span>Core project areas</span></div><div><strong>04</strong><span>Delivery capabilities</span></div><div><strong>01</strong><span>Accountable project partner</span></div><div><strong>360°</strong><span>Site-to-grid perspective</span></div>
    </section>

    <section className="wrap projects"><Section eyebrow="LATEST FROM PROPECARE" title="Ideas, updates and field perspectives." /><div className="project-grid">{articles.slice(0, 3).map(a => <MediaCard key={a.title} image={a.image} title={a.title} text={a.text} />)}</div></section>
    <section className="cta-strip"><div className="wrap"><div><span className="kicker">READY TO DISCUSS THE NEXT PHASE?</span><h2>Bring us the site, scope and schedule.</h2></div><Link className="button light" to="/contact">Start a project</Link></div></section>
  </>;
}

function About() {
  return <Page title="Who We Are" lead="A project partner for renewable energy, infrastructure and movement." image={grid}>
    <Section eyebrow="Our story" title="Practical experience. Responsible execution. Long-term relationships." />
    <p className="lead-copy">Propecare Infra Projects is a Karur-based company serving the renewable energy and infrastructure sector. We work across solar, wind, electrical infrastructure, EPC support and specialist transport, coordinating the people, equipment and site decisions that keep ambitious projects moving.</p>
    <div className="values-grid">{[
      ['01','Built around trust','Clear communication, realistic commitments and accountable delivery at every stage.'],
      ['02','Made for the field','Planning that respects real routes, real sites, weather, access and project constraints.'],
      ['03','Ready for tomorrow','Infrastructure thinking that supports cleaner generation and stronger energy networks.'],
      ['04','Safety by design','Methodical preparation, competent coordination and attention to site interfaces.'],
      ['05','One accountable team','Fewer hand-off gaps between planning, execution, reporting and handover.'],
      ['06','Built to scale','Flexible project support for individual packages and multi-interface delivery programmes.']
    ].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    <section className="content-band"><div><span className="kicker">OUR APPROACH</span><h3>Plan clearly. Execute carefully. Communicate early.</h3></div><p>Every project has its own constraints. Our role is to turn those constraints into a practical delivery plan, align the interfaces and stay close enough to the field to act before small issues become schedule problems.</p></section>
  </Page>;
}

function Works() {
  return <Page title="Our Works" lead="From renewable generation to the movement of critical equipment." image={solar}>
    <Section eyebrow="Our works" title="Specialist capabilities across the clean-energy project lifecycle." />
    <div className="solutions-visual-grid">{works.map(w => <Link to={`/works/${w.slug}`} className="solution-visual-card" key={w.slug}><img src={w.image} alt={w.title}/><div><span>{w.title}</span><p>{w.short}</p></div></Link>)}</div>
    <div className="work-note"><span className="kicker">DELIVERY FOCUS</span><h3>Renewable infrastructure is an interface business.</h3><p>Generation equipment, electrical systems, civil access, transport and grid connection all have to work together. We build our scope around those interfaces.</p></div>
  </Page>;
}

function Work() {
  const { slug } = useParams();
  const work = works.find(w => w.slug === slug) ?? works[0];
  return <Page title={work.title} lead={work.short} image={work.image}>
    <Section eyebrow="Scope of work" title="Capability designed for safe, reliable delivery." />
    <div className="scope-grid">{work.bullets.map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3><p>Planned, coordinated and delivered around site conditions, interfaces and project milestones.</p></div>)}</div>
    <div className="service-detail-grid"><div><span className="kicker">WHERE WE ADD VALUE</span><h3>Clear scope and field coordination</h3><p>We help clients connect engineering intent with practical site execution, keeping dependencies visible and decisions moving.</p></div><div><span className="kicker">NEXT STEP</span><h3>Have a live project?</h3><p>Share your location, scope and target dates. We can discuss the right package for the next phase.</p><Link className="button" to="/contact">Discuss this capability</Link></div></div>
  </Page>;
}

function Solutions() {
  return <Page title="Our Solutions" lead="Clear packages for renewable and infrastructure projects." image={transmission}>
    <Section eyebrow="Solutions" title="Engineering, construction and commissioning support without the coordination gaps." />
    <p className="lead-copy">Our solutions are structured around the real interfaces of renewable and electrical infrastructure projects. Choose a capability to see the scope, delivery focus and typical project requirements.</p>
    <div className="service-list">{services.map(s => <Link to={`/services/${s.slug}`} className="list-row" key={s.slug}><span>{s.title}</span><p>{s.short}</p><b>Explore →</b></Link>)}</div>
    <section className="process-grid">{['Scope & site review','Engineering & procurement','Construction coordination','Testing & handover'].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>Defined responsibilities, clear interfaces and practical reporting throughout the package.</p></div>)}</section>
  </Page>;
}

function Service() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug) ?? services[0];
  const detail = {
    epc: ['Integrated engineering, procurement and construction support','Coordinate engineering inputs, material readiness, site execution and handover across renewable infrastructure packages.'],
    evacuation: ['Power evacuation from plant to grid interface','Support collection, transformation, protection and evacuation infrastructure with attention to route, equipment and commissioning interfaces.'],
    substations: ['Substations and switchyard delivery support','Coordinate primary and secondary systems, protection, metering, testing and energisation readiness.'],
    testing: ['Testing and commissioning support','Inspection, functional testing, documentation and synchronisation support to move assets confidently toward handover.']
  }[service.slug] ?? ['Project delivery support','Practical coordination for complex infrastructure packages.'];
  return <Page title={service.title} lead={detail[0]} image={service.image}>
    <Section eyebrow="SOLUTION DETAIL" title={detail[0]} />
    <p className="lead-copy">{detail[1]}</p>
    <div className="detail-columns"><div><span className="kicker">TYPICAL SCOPE</span><ul className="check-list">{['Site and scope review','Interface and execution planning','Resource and contractor coordination','Progress reporting and documentation','Testing, completion and handover support'].map(x=><li key={x}>{x}</li>)}</ul></div><div><span className="kicker">WHY IT MATTERS</span><h3>Fewer surprises between design, site and grid.</h3><p>Our approach keeps dependencies visible and creates a clearer path from scope definition to completion.</p><Link className="button" to="/contact">Talk to our team</Link></div></div>
  </Page>;
}

function Resources({ kind = 'all' }: { kind?: string }) {
  const filtered = kind === 'blogs' ? articles.filter(a => ['SOLAR','WIND','TRANSPORT'].includes(a.tag)) : kind === 'updates' ? articles.filter(a => a.tag === 'UPDATES') : articles;
  const title = kind === 'blogs' ? 'Blogs' : kind === 'media' ? 'Media' : kind === 'updates' ? 'New Updates' : 'Resources';
  return <Page title={title} lead="Stories, project perspectives and company news from Propecare." image={grid}>
    <Section eyebrow="Resources" title="Useful context from the work behind the work." />
    <div className="articles-grid">{filtered.map(a => <article className="article-card" key={a.title}><img src={a.image} alt={a.title}/><div><span className="kicker">{a.tag}</span><h3>{a.title}</h3><p>{a.text}</p><Link className="text-link" to="/contact">Talk to our team →</Link></div></article>)}</div>
  </Page>;
}

function Clients() {
  return <Page title="Our Clients" lead="Built for developers, operators, institutions and partners who value dependable delivery." image={solar}>
    <Section eyebrow="Our clients" title="Partnerships grounded in performance." />
    <p className="lead-copy">We work alongside renewable developers, EPC partners, industrial businesses, operators and infrastructure stakeholders. Every engagement starts by understanding the brief, site and schedule, then building the right delivery team around it.</p>
    <div className="client-showcase">{clients.map(client => <article className={`client-card client-${client.tone}`} key={client.name}><div className="client-mark">{client.mark}</div><p>{client.name}</p></article>)}</div>
    <div className="client-assurance"><div><span className="kicker">HOW WE WORK</span><h3>One brief. One accountable team.</h3><p>We align scope, route, resources and reporting before work begins, giving every stakeholder a clearer view of progress, interfaces and next decisions.</p></div><div><span className="kicker">WHAT CLIENTS VALUE</span><ul><li>Responsive project coordination</li><li>Site-ready planning and documentation</li><li>Safety-conscious execution</li><li>Practical handover support</li></ul></div></div>
  </Page>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  return <Page title="Contact Us" lead="Tell us what you are building, where it is moving and how we can help." image={transmission}>
    <div className="contact-layout"><div><Section eyebrow="Start a conversation" title="Let’s make the next project move." /><p className="lead-copy">Share the basics and our team will get back to you about solar, windmill, transport, EPC or infrastructure requirements.</p><div className="contact-details"><b>+91 9790005158</b><span>propecareindia@gmail.com</span><span>Karur, Tamil Nadu, India</span></div><div className="contact-points"><span>Solar & wind infrastructure</span><span>Electrical & EPC packages</span><span>Heavy transport & logistics</span></div></div><form className="contact-form" onSubmit={e => {e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Company<input required placeholder="Company name"/></label><label>Work email<input required type="email" placeholder="name@company.com"/></label><label>Project type<select defaultValue=""><option value="" disabled>Select a requirement</option><option>Solar</option><option>Windmill</option><option>Transport & logistics</option><option>Infrastructure / EPC</option></select></label><label>Project details<textarea rows={6} placeholder="Location, scope, capacity, route or target dates"/></label><button className="button" type="submit">{sent ? 'Message received ✓' : 'Send enquiry'}</button></form></div>
  </Page>;
}

function Page({title,lead,image,children}:{title:string;lead:string;image:string;children:ReactNode}) {
  return <><section className="inner-hero"><div className="wrap inner-grid"><div><span className="kicker">PROPECARE INFRA PROJECTS</span><h1>{title}</h1><p>{lead}</p></div><img src={image} alt=""/></div></section><main className="page-body">{children}<section className="delivery-principles wrap"><div><span className="kicker">01 / DISCOVER</span><h3>Understand the brief</h3><p>We start with the site, scope, route and schedule so the delivery plan reflects conditions on the ground.</p></div><div><span className="kicker">02 / DELIVER</span><h3>Coordinate every interface</h3><p>People, equipment, contractors and stakeholders stay aligned through practical project coordination.</p></div><div><span className="kicker">03 / SUPPORT</span><h3>Stay close through handover</h3><p>From execution updates to completion support, we remain focused on a clear, responsible finish.</p></div></section><section className="page-gallery wrap"><div className="gallery-large"><img src={image} alt="Renewable infrastructure"/><span>FIELD / PROPECARE PROJECTS</span></div><div className="gallery-column"><img src={solar} alt="Solar project"/><img src={transmission} alt="Power infrastructure"/></div></section></main></>;
}

export default function App(){return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/works" element={<Works/>}/><Route path="/works/:slug" element={<Work/>}/><Route path="/services" element={<Solutions/>}/><Route path="/services/:slug" element={<Service/>}/><Route path="/resources" element={<Resources/>}/><Route path="/resources/:kind" element={<Resources/>}/><Route path="/clients" element={<Clients/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></>}