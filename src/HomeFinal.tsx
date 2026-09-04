import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Network,
  ShieldCheck,
  Sun,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './components';
import EnergyFooterFinal from './EnergyFooterFinal';

const solutions = [
  { icon: Wind, title: 'Wind Power Infrastructure', text: 'Electrical BoP, collection systems, pooling interfaces, evacuation and commissioning support for wind projects.', href: '/services/renewable-epc-ebop' },
  { icon: Sun, title: 'Solar Power Infrastructure', text: 'Utility-scale and C&I electrical scope, evacuation systems and grid-integration support for solar projects.', href: '/services/renewable-epc-ebop' },
  { icon: Zap, title: 'Power Evacuation', text: 'HT/EHV evacuation lines, utility interfaces, bay works and the electrical path from generation to grid.', href: '/services/power-evacuation' },
  { icon: Building2, title: 'Substations & Switchyards', text: 'Civil and electrical coordination, installation, protection, metering, testing and energisation support.', href: '/services/pooling-substations-switchyards' },
  { icon: Cable, title: 'Transmission Infrastructure', text: 'Route execution, tower and structure works, conductor/OPGW stringing and line charging coordination.', href: '/services/transmission-infrastructure' },
  { icon: ClipboardCheck, title: 'Testing & Commissioning', text: 'Pre-energisation checks, protection testing, functional verification, charging and grid synchronisation support.', href: '/services/testing-commissioning-grid-synchronisation' },
];

const industries = [
  { title: 'Wind Energy', text: 'Wind-farm electrical infrastructure, EBoP and grid evacuation.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=82', href: '/services/renewable-epc-ebop' },
  { title: 'Solar Energy', text: 'Solar electrical systems, evacuation and utility interconnection.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d5f7ac1e2fdb?auto=format&fit=crop&w=1400&q=82', href: '/services/renewable-epc-ebop' },
  { title: 'Power T&D', text: 'Substations, transmission lines, switchyards and grid interfaces.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=82', href: '/services/transmission-infrastructure' },
  { title: 'Hybrid & Storage', text: 'Renewable integration concepts for hybrid and emerging energy systems.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=82', href: '/capabilities' },
];

const journey = [
  ['01', 'Generation', 'Solar, wind or hybrid asset'],
  ['02', 'Collection', 'Plant electrical network & EBoP'],
  ['03', 'Pooling', 'Substation, protection & metering'],
  ['04', 'Evacuation', 'HT/EHV line and utility interface'],
  ['05', 'Grid', 'Testing, charging & synchronisation'],
];

const proofPoints = [
  ['MW', 'Project capacity'],
  ['kV', 'Voltage level'],
  ['MVA', 'Substation rating'],
  ['km', 'Transmission length'],
];

const caseStudies = [
  {
    type: 'Wind power evacuation',
    title: 'How a project case study should show execution proof',
    text: 'Capacity, voltage level, pooling substation, transmission route, utility interface, testing and commissioning — presented in one technical story.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1500&q=84',
  },
  {
    type: 'Substation & transmission',
    title: 'Show the complete package, not only project photographs',
    text: 'A decision-maker should be able to understand what ORIKS executed, where it was executed and what part of the grid interface was delivered.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1500&q=84',
  },
  {
    type: 'Solar grid interconnection',
    title: 'Turn completed work into a business-development asset',
    text: 'Verified project details can become a reusable digital portfolio for referrals, tenders, OEMs, consultants and developer conversations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1500&q=84',
  },
];

const insights = [
  { tag: 'Power Evacuation', title: 'From renewable generation to utility grid: the interfaces that matter.', href: '/insights/power-evacuation-from-generation-to-grid' },
  { tag: 'Substations', title: 'What technical buyers look for in pooling-substation and switchyard capability.', href: '/insights/pooling-substations-renewable-projects' },
  { tag: 'Commissioning', title: 'Why protection, metering, testing and synchronisation need to be shown clearly.', href: '/insights/testing-before-grid-synchronisation' },
];

export default function HomeFinal() {
  return (
    <>
      <Header />
      <main className="of-home">
        <section className="of-hero of-hero-ntc">
          <div className="of-hero-media" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="/images/oriks-home-reference.webp">
              <source src="/oriks-home.mp4" type="video/mp4" />
            </video>
            <img className="of-hero-poster" src="/images/oriks-home-reference.webp" alt="" />
          </div>
          <div className="of-hero-overlay" />
          <div className="container of-hero-inner of-hero-inner-ntc">
            <motion.div className="of-hero-copy of-hero-copy-ntc" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <span className="of-kicker of-kicker-light">Renewable EPC • Power Evacuation • Grid Infrastructure</span>
              <h1>Engineering the path <em>from generation to grid.</em></h1>
              <p>ORIKS Energy Care Pvt Ltd supports renewable and electrical-infrastructure projects across power evacuation, substations, transmission, grid connectivity, testing, commissioning and lifecycle support.</p>
              <div className="of-actions">
                <Link to="/services" className="of-btn of-btn-primary">Explore Solutions <ArrowRight size={17} /></Link>
                <Link to="/contact" className="of-btn of-btn-glass">Start a Project Enquiry <ArrowRight size={17} /></Link>
              </div>
            </motion.div>
          </div>
          <div className="of-hero-ribbon">
            <div className="container of-hero-ribbon-grid">
              {['Wind EPC & EBoP', 'Solar EPC', 'Power Evacuation', 'Substations & Switchyards', 'Transmission Lines', 'O&M'].map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="of-intro-section">
          <div className="container of-intro-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="of-kicker">From project requirement to energisation</span>
              <h2>A corporate website should explain capability before the first meeting.</h2>
            </motion.div>
            <motion.div className="of-intro-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p>For EPC buyers, a website is more than an introduction. It works as a company profile, technical brochure and project portfolio — giving developers, OEMs, consultants and utility-side teams a quick view of what the company can execute.</p>
              <Link to="/about" className="of-inline-link">About ORIKS <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </section>

        <section className="of-section of-solutions-section">
          <div className="container of-heading-row">
            <div><span className="of-kicker">Our Solutions</span><h2>Infrastructure behind reliable renewable power.</h2></div>
            <p>Structured around the electrical work that takes renewable generation through collection, transformation, evacuation and grid synchronisation.</p>
          </div>
          <div className="container of-solution-grid">
            {solutions.map(({ icon: Icon, title, text, href }, index) => (
              <motion.article key={title} className="of-solution-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ delay: (index % 3) * .05 }}>
                <div className="of-solution-top"><span>0{index + 1}</span><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={href}>Learn more <ArrowRight size={15} /></Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-industries-section">
          <div className="container of-heading-row of-heading-light">
            <div><span className="of-kicker of-kicker-light">Industries We Focus</span><h2>Renewable generation meets power infrastructure.</h2></div>
            <p>ORIKS can present its experience by industry, making it easier for visitors to find the capability that matches their project.</p>
          </div>
          <div className="container of-industry-grid">
            {industries.map((item, index) => (
              <motion.article key={item.title} className="of-industry-card" initial={{ opacity: 0, scale: .985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .04 }}>
                <Link to={item.href} aria-label={`Explore ${item.title}`}>
                  <img src={item.image} alt="" />
                  <div className="of-industry-shade" />
                  <div className="of-industry-copy"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><strong>Explore <ArrowRight size={15} /></strong></div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-section of-journey-section">
          <div className="container of-journey-head">
            <div><span className="of-kicker">End-to-end view</span><h2>From Generation to Grid</h2></div>
            <p>Instead of presenting services as isolated activities, the website explains how every electrical package connects within the project lifecycle.</p>
          </div>
          <div className="container of-journey-track">
            {journey.map(([number, title, text], index) => (
              <motion.div className="of-journey-step" key={number} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
                <span>{number}</span><div><strong>{title}</strong><small>{text}</small></div>{index < journey.length - 1 && <ArrowRight size={18} />}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="of-proof-band">
          <div className="container of-proof-band-grid">
            <div className="of-proof-band-copy">
              <span className="of-kicker of-kicker-light">Project proof that matters</span>
              <h2>Clients compare evidence, not adjectives.</h2>
              <p>As soon as ORIKS management verifies its completed-project data, this section can publish measurable capability in the same decision-friendly format used by established EPC companies.</p>
              <Link to="/projects" className="of-inline-link of-inline-link-light">View project portfolio <ArrowRight size={16} /></Link>
            </div>
            <div className="of-proof-units">
              {proofPoints.map(([unit, label]) => <div key={unit}><strong>{unit}</strong><span>{label}</span></div>)}
              <div><strong><MapPin size={30} /></strong><span>Project location</span></div>
              <div><strong><FileText size={30} /></strong><span>Executed scope</span></div>
            </div>
          </div>
        </section>

        <section className="of-section of-case-section">
          <div className="container of-heading-row">
            <div><span className="of-kicker">Project Stories</span><h2>Turn completed work into technical case studies.</h2></div>
            <p>Established corporate sites make each project a piece of evidence. ORIKS can use the same approach with its own verified EPC data, photos and video.</p>
          </div>
          <div className="container of-case-grid">
            {caseStudies.map((item, index) => (
              <motion.article key={item.title} className={index === 0 ? 'of-case-card of-case-featured' : 'of-case-card'} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="of-case-media"><img src={item.image} alt="" /></div>
                <div className="of-case-body"><span>{item.type}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/projects">View project library <ArrowRight size={15} /></Link></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-safety-section">
          <div className="container of-safety-grid">
            <motion.div className="of-safety-media" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=84" alt="Electrical engineering and safety" />
            </motion.div>
            <motion.div className="of-safety-copy" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="of-kicker">Safety & Quality</span>
              <h2>Safe energisation starts long before the switch is closed.</h2>
              <p>The website should communicate disciplined planning, safe systems of work, inspection and test plans, protection checks, commissioning records and documented handover.</p>
              <div className="of-checks">
                <span><ShieldCheck size={18} /> Safety-led execution</span>
                <span><CheckCircle2 size={18} /> Inspection & test discipline</span>
                <span><Network size={18} /> Protection, metering & grid interface</span>
                <span><Wrench size={18} /> Lifecycle and O&M support</span>
              </div>
              <Link to="/sustainability" className="of-inline-link">Safety & sustainability approach <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </section>

        <section className="of-section of-insights-section">
          <div className="container of-heading-row">
            <div><span className="of-kicker">Insights</span><h2>Technical content that supports business development.</h2></div>
            <div><p>Articles can explain ORIKS capability in the language customers search for and help the website stay active as projects, technologies and utility requirements evolve.</p><Link to="/insights" className="of-inline-link">View all insights <ArrowRight size={16} /></Link></div>
          </div>
          <div className="container of-insight-grid">
            {insights.map(({ tag, title, href }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
                <span>{tag}</span><h3>{title}</h3><Link to={href}>Read article <ArrowRight size={15} /></Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-careers-strip">
          <div className="container of-careers-inner">
            <div><span className="of-kicker of-kicker-light">Grow with ORIKS</span><h2>People, engineering and execution build every successful project.</h2><p>The careers section is prepared for future approved openings, team stories and recruitment information.</p></div>
            <Link to="/careers" className="of-btn of-btn-light">Explore Careers <ArrowRight size={17} /></Link>
          </div>
        </section>

        <section className="of-conversation-section">
          <div className="container of-conversation-grid">
            <div><span className="of-kicker">Start the Conversation</span><h2>Have an upcoming renewable or power-infrastructure project?</h2><p>Share the project type, location, capacity, voltage level, grid interface and current stage. The project brief is structured for a technical first conversation.</p></div>
            <div className="of-conversation-card">
              <strong>Project Enquiry</strong>
              <span>Wind / Solar / Power Evacuation</span>
              <span>Substation / Transmission / Grid Connectivity</span>
              <span>Testing / Commissioning / O&M</span>
              <Link to="/contact" className="of-btn of-btn-primary">Send Project Brief <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <EnergyFooterFinal />
    </>
  );
}
