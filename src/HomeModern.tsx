import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  MapPinned,
  Network,
  ShieldCheck,
  Sun,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand, Header } from './components';

const services = [
  { icon: Wind, title: 'Wind Power Projects', text: 'Electrical and infrastructure support for wind farms, including collection systems, evacuation, testing and commissioning.' },
  { icon: Sun, title: 'Solar Power Projects', text: 'Utility-scale and C&I solar EPC support with electrical integration, evacuation and commissioning interfaces.' },
  { icon: Zap, title: 'Power Evacuation', text: 'EHV/HT lines, pooling stations, evacuation packages, bay interfaces and associated electrical infrastructure.' },
  { icon: Building2, title: 'Substations & Switchyards', text: 'Engineering coordination, installation, testing and commissioning support for substations and switchyards.' },
  { icon: Cable, title: 'Electrical Balance of Plant', text: 'Integrated electrical BoP scope covering cabling, earthing, auxiliary systems, interfaces and site execution.' },
  { icon: Network, title: 'Grid Connectivity', text: 'Utility-interface coordination, bay extension, metering, protection, documentation and synchronisation support.' },
  { icon: Wrench, title: 'Operation & Maintenance', text: 'Inspection, preventive maintenance, fault response and lifecycle support for renewable electrical assets.' },
  { icon: ClipboardCheck, title: 'Testing & Commissioning', text: 'Pre-energisation checks, functional verification, protection testing, charging and commissioning support.' },
];

const focusCards = [
  { icon: Activity, title: 'Project Focus', text: 'Renewable & power infrastructure' },
  { icon: ShieldCheck, title: 'Execution Discipline', text: 'Quality, safety & documentation' },
  { icon: Gauge, title: 'Grid-Ready Delivery', text: 'From interface planning to energisation' },
  { icon: CheckCircle2, title: 'Client Commitment', text: 'Clear scope, reliable execution' },
];

function EnergyHeroScene() {
  return (
    <div className="modern-hero-scene" aria-label="Illustration showing wind, solar and transmission infrastructure">
      <svg viewBox="0 0 900 590" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dceeff" />
            <stop offset="68%" stopColor="#f8fbff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dff3dd" />
            <stop offset="100%" stopColor="#bfe7bf" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d5f91" />
            <stop offset="100%" stopColor="#173e69" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#173628" floodOpacity="0.16" />
          </filter>
        </defs>

        <rect width="900" height="590" rx="34" fill="url(#sky)" />
        <circle cx="698" cy="105" r="48" fill="#fff3aa" opacity="0.9" />
        <path d="M0 460 C150 408 280 434 406 460 C540 405 675 418 900 453 L900 590 L0 590Z" fill="url(#ground)" />
        <path d="M0 488 C170 452 315 468 466 493 C650 448 742 462 900 486" fill="none" stroke="#9fd099" strokeWidth="3" />

        <g className="hero-wind hero-wind-a" transform="translate(182 155)">
          <line x1="0" y1="95" x2="0" y2="364" stroke="#d5dce1" strokeWidth="10" strokeLinecap="round" />
          <circle cx="0" cy="88" r="10" fill="#f7f9fb" stroke="#bcc6cd" strokeWidth="3" />
          <g className="hero-blades">
            <path d="M0 88 L-22 14 C-18 2 -8 0 -4 14 L5 80Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
            <path d="M0 88 L72 112 C84 117 84 127 70 128 L7 98Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
            <path d="M0 88 L-51 144 C-59 153 -69 149 -65 136 L-8 94Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
          </g>
        </g>

        <g className="hero-wind hero-wind-b" transform="translate(365 250) scale(.72)">
          <line x1="0" y1="95" x2="0" y2="332" stroke="#d5dce1" strokeWidth="10" strokeLinecap="round" />
          <circle cx="0" cy="88" r="10" fill="#f7f9fb" stroke="#bcc6cd" strokeWidth="3" />
          <g className="hero-blades slower">
            <path d="M0 88 L-22 14 C-18 2 -8 0 -4 14 L5 80Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
            <path d="M0 88 L72 112 C84 117 84 127 70 128 L7 98Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
            <path d="M0 88 L-51 144 C-59 153 -69 149 -65 136 L-8 94Z" fill="#eef2f4" stroke="#bac5cc" strokeWidth="2" />
          </g>
        </g>

        <g transform="translate(48 394)" filter="url(#softShadow)">
          {[0, 132, 264].map((x) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <polygon points="0,38 116,20 128,70 12,88" fill="url(#panel)" stroke="#eaf4ff" strokeWidth="3" />
              <line x1="42" y1="30" x2="52" y2="81" stroke="#7ea6ca" strokeWidth="2" />
              <line x1="82" y1="24" x2="92" y2="75" stroke="#7ea6ca" strokeWidth="2" />
              <line x1="7" y1="55" x2="123" y2="38" stroke="#7ea6ca" strokeWidth="2" />
              <line x1="10" y1="73" x2="126" y2="55" stroke="#7ea6ca" strokeWidth="2" />
              <line x1="45" y1="85" x2="38" y2="106" stroke="#80939f" strokeWidth="5" />
              <line x1="90" y1="77" x2="96" y2="100" stroke="#80939f" strokeWidth="5" />
            </g>
          ))}
        </g>

        <g transform="translate(678 128)" stroke="#55656f" fill="none" strokeLinecap="round">
          <line x1="58" y1="14" x2="10" y2="354" strokeWidth="6" />
          <line x1="58" y1="14" x2="112" y2="354" strokeWidth="6" />
          <line x1="10" y1="354" x2="112" y2="354" strokeWidth="6" />
          {[82, 145, 210, 275].map((y) => <line key={y} x1="22" y1={y} x2="98" y2={y} strokeWidth="4" />)}
          <line x1="7" y1="102" x2="109" y2="102" strokeWidth="5" />
          <line x1="-18" y1="153" x2="135" y2="153" strokeWidth="5" />
          <line x1="-9" y1="210" x2="126" y2="210" strokeWidth="5" />
          <line x1="24" y1="82" x2="94" y2="145" strokeWidth="3" />
          <line x1="94" y1="82" x2="22" y2="145" strokeWidth="3" />
          <line x1="22" y1="145" x2="96" y2="210" strokeWidth="3" />
          <line x1="96" y1="145" x2="22" y2="210" strokeWidth="3" />
          <line x1="22" y1="210" x2="96" y2="275" strokeWidth="3" />
          <line x1="96" y1="210" x2="22" y2="275" strokeWidth="3" />
          <path className="hero-power-line" d="M-18 153 C-126 120 -240 124 -360 142" stroke="#7e8d95" strokeWidth="2" />
          <path className="hero-power-line delay" d="M135 153 C230 120 302 120 362 135" stroke="#7e8d95" strokeWidth="2" />
          <path className="hero-power-line" d="M-9 210 C-125 181 -235 187 -338 200" stroke="#8c9aa0" strokeWidth="1.5" />
        </g>
      </svg>

      <motion.div className="hero-float-card hero-card-one" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>
        <div className="mini-icon"><Zap size={18} /></div><span>Power Evacuation</span><strong>Grid-ready interfaces</strong>
      </motion.div>
      <motion.div className="hero-float-card hero-card-two" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
        <div className="mini-icon"><Network size={18} /></div><span>Grid Connectivity</span><strong>Protection • Metering • Bay</strong>
      </motion.div>
    </div>
  );
}

function ModelVisual({ type }: { type: 'wind' | 'solar' | 'grid' }) {
  return (
    <div className={`model-visual ${type}`}>
      {type === 'wind' && <>
        <div className="model-sky" />
        <div className="model-wind one"><i /><b /></div>
        <div className="model-wind two"><i /><b /></div>
        <div className="model-ground" />
        <div className="model-tag"><Wind size={16} /> Wind → 33 kV collection</div>
      </>}
      {type === 'solar' && <>
        <div className="model-sky" />
        <div className="model-sun" />
        <div className="panel p1" /><div className="panel p2" /><div className="panel p3" />
        <div className="model-ground" />
        <div className="model-tag"><Sun size={16} /> Solar → Pooling substation</div>
      </>}
      {type === 'grid' && <>
        <div className="model-sky" />
        <div className="mini-pylon left" /><div className="mini-pylon right" />
        <div className="flow-wire wire-one" /><div className="flow-wire wire-two" />
        <div className="model-ground" />
        <div className="model-tag"><Zap size={16} /> EHV → Utility grid</div>
      </>}
    </div>
  );
}

function PremiumFooter() {
  return (
    <footer className="modern-footer">
      <div className="footer-landscape-modern" aria-hidden="true">
        <div className="footer-sun-modern" />
        <div className="footer-hill h1" /><div className="footer-hill h2" />
        <div className="footer-panel fp1" /><div className="footer-panel fp2" /><div className="footer-panel fp3" />
        <div className="footer-turbine ft1"><i /><b /></div>
        <div className="footer-turbine ft2"><i /><b /></div>
        <div className="footer-turbine ft3"><i /><b /></div>
        <div className="footer-pylon fpy1" /><div className="footer-pylon fpy2" />
        <div className="footer-power-line line1" /><div className="footer-power-line line2" />
        <div className="footer-plant"><span /><span /><span /></div>
        <div className="footer-cloud fc1" /><div className="footer-cloud fc2" />
      </div>
      <div className="container modern-footer-grid">
        <div className="footer-intro"><Brand /><p>Renewable EPC, power evacuation and electrical infrastructure for solar, wind and grid-connectivity projects.</p></div>
        <div><h4>Quick Links</h4><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/capabilities">Capabilities</Link></div>
        <div><h4>Services</h4><Link to="/services">Power Evacuation</Link><Link to="/services">Substations</Link><Link to="/services">Transmission</Link><Link to="/services">Testing & Commissioning</Link></div>
        <div><h4>Registered Office</h4><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Tamil Nadu, India — 639002.</p><Link className="footer-enquiry" to="/contact">Project enquiry <ArrowRight size={16} /></Link></div>
      </div>
      <div className="container modern-footer-bottom"><span>© {new Date().getFullYear()} ORIKS Energy Care Pvt Ltd.</span><span>Engineering the connection from generation to grid.</span></div>
    </footer>
  );
}

export default function HomeModern() {
  return <>
    <Header />
    <main className="modern-home">
      <section className="modern-hero">
        <div className="container modern-hero-grid">
          <motion.div className="modern-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="modern-kicker">Powering a sustainable future</div>
            <h1>Delivering reliable <em>energy infrastructure</em> for a better tomorrow.</h1>
            <p>ORIKS Energy Care Pvt Ltd supports renewable-energy and power-infrastructure projects across solar, wind, power evacuation, substations, transmission interfaces, grid connectivity, testing, commissioning and O&M.</p>
            <div className="modern-actions"><Link className="modern-btn primary" to="/services">Our services <ArrowRight size={17} /></Link><Link className="modern-btn secondary" to="/projects">View projects <ArrowRight size={17} /></Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .08 }}><EnergyHeroScene /></motion.div>
        </div>
        <div className="container modern-focus-row">
          {focusCards.map(({icon: Icon,title,text}, i) => <motion.div key={title} className="focus-item" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i*.08 }}><div className="focus-icon"><Icon size={20} /></div><div><strong>{title}</strong><span>{text}</span></div></motion.div>)}
        </div>
      </section>

      <section className="modern-section services-section">
        <div className="container modern-section-head"><span>What we do</span><h2>Infrastructure behind reliable renewable power.</h2><p>Clear service families help project developers, OEMs, consultants and utility-side teams quickly understand where ORIKS can support the project lifecycle.</p></div>
        <div className="container modern-service-grid">
          {services.map(({icon: Icon,title,text}, i) => <motion.article key={title} className="modern-service-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: (i%4)*.05 }}>
            <div className="service-icon"><Icon size={25} /></div><div><h3>{title}</h3><p>{text}</p><Link to="/services">Explore scope <ArrowRight size={15} /></Link></div>
          </motion.article>)}
        </div>
      </section>

      <section className="modern-section models-section">
        <div className="container modern-section-head left"><span>Project models</span><h2>Show the complete journey, not isolated services.</h2><p>These visual models make the renewable-to-grid flow easier to understand during the first client review.</p></div>
        <div className="container model-grid">
          {[
            ['wind','Wind farm electrical infrastructure','Collection network, pooling interfaces, evacuation and commissioning support.'],
            ['solar','Solar EPC & evacuation','Generation-side electrical works connected through pooling and utility interfaces.'],
            ['grid','EHV transmission & grid interface','Substation, bay, protection, metering, transmission and synchronisation interfaces.']
          ].map(([type,title,text],i) => <motion.article key={type} className="model-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i*.09 }}>
            <ModelVisual type={type as 'wind'|'solar'|'grid'} /><div className="model-card-copy"><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>
          </motion.article>)}
        </div>
      </section>

      <section className="modern-section flow-section">
        <div className="container flow-layout">
          <div className="flow-copy"><span>From generation to grid</span><h2>A connected electrical journey.</h2><p>For renewable assets, generation is only one part of the job. The electrical path must collect, transform, protect, meter, evacuate and synchronise power safely with the utility network.</p><Link to="/capabilities" className="inline-link">View capability map <ArrowRight size={16} /></Link></div>
          <div className="energy-flow-ui">
            {[
              ['01','Generation','Solar / wind asset'],['02','Collection','33 kV / internal network'],['03','Pooling','Substation & protection'],['04','Evacuation','EHV transmission'],['05','Grid','Utility bay & synchronisation']
            ].map(([n,t,d],i) => <motion.div className="flow-node" key={n} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i*.08 }}><b>{n}</b><div><strong>{t}</strong><span>{d}</span></div>{i<4 && <i className="flow-dot-line" />}</motion.div>)}
          </div>
        </div>
      </section>

      <section className="modern-section proof-ready-section">
        <div className="container proof-ready-card">
          <div><span>Portfolio-ready structure</span><h2>Technical buyers compare proof, not adjectives.</h2><p>The website is ready to publish verified ORIKS project evidence in a format clients can scan quickly.</p></div>
          <div className="proof-ready-grid">
            {['MW / MVA','kV level','Route-km','Location','Client','Executed scope'].map(x => <div key={x}><strong>—</strong><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className="modern-cta"><div className="container modern-cta-inner"><div><span>Start with the project requirement</span><h2>Planning a renewable or power-infrastructure project?</h2></div><Link className="modern-btn light" to="/contact">Send project brief <ArrowRight size={17} /></Link></div></section>
    </main>
    <PremiumFooter />
  </>;
}
