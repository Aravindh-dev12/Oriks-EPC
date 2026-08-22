import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  ClipboardCheck,
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

const heroCards = [
  { icon: Sun, title: 'Solar EPC', text: 'Utility-scale & C&I electrical infrastructure' },
  { icon: Wind, title: 'Wind Power Infrastructure', text: 'Collection, evacuation & commissioning support' },
  { icon: Zap, title: 'Power Evacuation', text: 'HT/EHV lines, pooling substations & bay interfaces' },
  { icon: Network, title: 'Grid Connectivity', text: 'Protection, metering, approvals & synchronisation' },
];

const services = [
  { icon: Wind, title: 'Wind Power Projects', text: 'Electrical infrastructure, collection systems, evacuation interfaces, testing and commissioning support for wind farms.' },
  { icon: Sun, title: 'Solar Power Projects', text: 'Utility-scale and C&I solar EPC support with electrical BoP, evacuation and grid integration.' },
  { icon: Zap, title: 'Power Evacuation', text: 'HT/EHV evacuation lines, pooling substations, utility bays and associated electrical infrastructure.' },
  { icon: Building2, title: 'Substations & Switchyards', text: 'Engineering coordination, installation, testing and commissioning support for substations and switchyards.' },
  { icon: Cable, title: 'Electrical Balance of Plant', text: 'Cabling, earthing, auxiliary systems, equipment interfaces and coordinated electrical site execution.' },
  { icon: Network, title: 'Grid Connectivity', text: 'Utility coordination, metering, protection, bay extension, documentation and synchronisation support.' },
  { icon: Wrench, title: 'Operation & Maintenance', text: 'Inspection, preventive maintenance, fault response and lifecycle support for renewable electrical assets.' },
  { icon: ClipboardCheck, title: 'Testing & Commissioning', text: 'Pre-energisation checks, protection testing, charging, functional verification and commissioning support.' },
];

const approach = [
  ['01', 'Generation', 'Solar, wind or hybrid project'],
  ['02', 'Collection', 'Plant-level electrical collection'],
  ['03', 'Pooling', 'Substation & protection interface'],
  ['04', 'Evacuation', 'Transmission to utility bay'],
  ['05', 'Grid', 'Metering, synchronisation & energisation'],
];

const strengths = [
  ['End-to-end EPC thinking', 'Connect engineering, procurement, site execution, testing and handover as one coordinated scope.'],
  ['Renewable + grid interface', 'Explain both the generation side and the electrical infrastructure needed to evacuate power reliably.'],
  ['Quality & safety first', 'Structure work around documented checks, safe energisation and disciplined site execution.'],
  ['Clear technical communication', 'Present service scope, project interfaces and future case studies in the language technical buyers expect.'],
  ['Lifecycle support', 'Support delivered assets through inspection, preventive maintenance, testing and O&M activities.'],
];

const heroImage = 'https://images.pexels.com/photos/35105427/pexels-photo-35105427/free-photo-of-renewable-energy-landscape-with-solar-panels.jpeg?auto=compress&dpr=1&h=750&w=1260';

export default function HomeFinal() {
  return (
    <>
      <Header />
      <main className="of-home">
        <section className="of-hero">
          <div className="of-hero-media" aria-hidden="true">
            <img
              src={heroImage}
              alt=""
              onError={(event) => { event.currentTarget.src = '/oriks-energy-hero.webp'; }}
            />
          </div>
          <div className="of-hero-fade" />
          <div className="container of-hero-inner">
            <motion.div className="of-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
              <span className="of-kicker">Engineering the connection</span>
              <h1>From renewable generation to <em>grid connection.</em></h1>
              <p>ORIKS Energy Care Pvt Ltd supports solar, wind and electrical-infrastructure projects across power evacuation, substations, transmission, grid connectivity, testing, commissioning and O&M.</p>
              <div className="of-actions">
                <Link to="/services" className="of-btn of-btn-primary">Our Services <ArrowRight size={17} /></Link>
                <Link to="/projects" className="of-btn of-btn-secondary">View Projects <ArrowRight size={17} /></Link>
              </div>
            </motion.div>
          </div>
          <div className="container of-hero-cards">
            {heroCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 + index * .08 }}>
                <span className="of-card-icon"><Icon size={25} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-section of-services">
          <div className="container of-heading-row">
            <div><span className="of-kicker">What we do</span><h2>Core services for renewable and power infrastructure.</h2></div>
            <p>Focused on the electrical work that takes power from the generating asset through collection, transformation, evacuation and utility integration.</p>
          </div>
          <div className="container of-service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.article key={title} className="of-service-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: (index % 4) * .045 }}>
                <span className="of-service-icon"><Icon size={27} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/services">Read more <ArrowRight size={14} /></Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="of-approach-section">
          <div className="container of-approach-shell">
            <div className="of-approach-title"><span className="of-kicker">Our approach</span><h2>From Generation to Grid</h2></div>
            <div className="of-approach-track">
              {approach.map(([number, title, text], index) => (
                <div className="of-approach-step" key={number}>
                  <span className="of-step-number">{number}</span>
                  <div><strong>{title}</strong><small>{text}</small></div>
                  {index < approach.length - 1 && <ArrowRight className="of-step-arrow" size={17} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="of-section of-proof">
          <div className="container of-proof-grid">
            <motion.div className="of-proof-image" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }}>
              <img src="/oriks-energy-hero.webp" alt="Renewable generation and transmission infrastructure" />
            </motion.div>
            <motion.div className="of-proof-copy" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }}>
              <span className="of-kicker">Built for technical buyers</span>
              <h2>Your website should work like a brochure, capability statement and project portfolio.</h2>
              <p>When a developer, OEM, consultant or utility-side contact hears about ORIKS, the website should quickly explain what the company can execute and how its services fit into a real project.</p>
              <div className="of-checks">
                <span><CheckCircle2 size={18} /> Clear service and execution scope</span>
                <span><CheckCircle2 size={18} /> Renewable-to-grid capability mapping</span>
                <span><CheckCircle2 size={18} /> Project case-study structure for verified MW / kV / MVA data</span>
                <span><CheckCircle2 size={18} /> Safety, quality and commissioning focus</span>
              </div>
              <Link to="/capabilities" className="of-inline-link">Explore capabilities <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </section>

        <section className="of-section of-strengths">
          <div className="container">
            <div className="of-centered-heading"><span className="of-kicker">Why ORIKS</span><h2>Built around reliable execution.</h2></div>
            <div className="of-strength-grid">
              {strengths.map(([title, text], index) => (
                <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .05 }}>
                  <span>{index === 2 ? <ShieldCheck size={23} /> : <CheckCircle2 size={23} />}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="of-cta-section">
          <div className="container of-cta">
            <div><span className="of-kicker">Start with the requirement</span><h2>Planning a solar, wind or power-infrastructure project?</h2><p>Share the project type, location, electrical scope and current stage. ORIKS can structure the technical discussion from there.</p></div>
            <Link to="/contact" className="of-btn of-btn-light">Discuss a Project <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <EnergyFooterFinal />
    </>
  );
}
