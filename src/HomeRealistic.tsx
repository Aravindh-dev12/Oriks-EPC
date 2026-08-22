import { motion } from 'framer-motion';
import { ArrowRight, Building2, Cable, CheckCircle2, ClipboardCheck, Network, ShieldCheck, Sun, Wind, Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand, Header } from './components';

const services = [
  { icon: Wind, title: 'Wind Power Projects', text: 'Electrical infrastructure, collection systems, evacuation interfaces, testing and commissioning support for wind-farm projects.' },
  { icon: Sun, title: 'Solar Power Projects', text: 'Utility-scale and C&I solar EPC support with grid integration, electrical BoP and commissioning interfaces.' },
  { icon: Zap, title: 'Power Evacuation', text: 'EHV/HT evacuation lines, pooling stations, utility bay interfaces and associated electrical infrastructure.' },
  { icon: Building2, title: 'Substations & Switchyards', text: 'Engineering coordination, installation, testing and commissioning support for substations and switchyards.' },
  { icon: Cable, title: 'Electrical Balance of Plant', text: 'Cabling, earthing, auxiliary systems, equipment interfaces and coordinated electrical site execution.' },
  { icon: Network, title: 'Grid Connectivity', text: 'Utility coordination, bay extension, metering, protection, documentation and synchronisation support.' },
  { icon: Wrench, title: 'Operation & Maintenance', text: 'Inspection, preventive maintenance, fault response and lifecycle support for electrical assets.' },
  { icon: ClipboardCheck, title: 'Testing & Commissioning', text: 'Pre-energisation checks, functional verification, protection testing, charging and commissioning support.' },
];

function EnergyFooterLandscape() {
  return (
    <div className="energy-footer-landscape" aria-hidden="true">
      <svg viewBox="0 0 1600 250" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="footerSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#edf9f0" />
          </linearGradient>
          <linearGradient id="footerPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#386f97" />
            <stop offset="100%" stopColor="#173d5d" />
          </linearGradient>
        </defs>
        <rect width="1600" height="250" fill="url(#footerSky)" />
        <circle className="footer-sun-pulse" cx="820" cy="104" r="20" fill="#74c96e" opacity=".55" />
        <path d="M0 178 L54 136 L92 159 L145 116 L196 161 L238 139 L302 181 L355 144 L412 178 L476 130 L538 179 L604 139 L660 180 L724 133 L786 180 L842 132 L902 180 L964 145 L1020 180 L1088 130 L1150 178 L1214 143 L1275 180 L1334 130 L1394 179 L1460 141 L1526 177 L1600 145" fill="none" stroke="#bfd9c3" strokeWidth="2" />
        <path d="M0 192 C190 160 330 166 490 193 C660 154 820 164 990 194 C1160 158 1360 164 1600 191 L1600 250 L0 250Z" fill="#e8f6e8" />
        <path d="M0 212 C180 188 348 190 500 214 C688 180 860 190 1030 215 C1220 183 1376 191 1600 210 L1600 250 L0 250Z" fill="#d6efd8" />

        <g className="footer-solar-array" transform="translate(95 177)">
          {[0,78,156,234].map((x) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <polygon points="0,10 62,2 71,33 8,42" fill="url(#footerPanel)" stroke="#8eb2c8" strokeWidth="1.5" />
              <line x1="22" y1="7" x2="30" y2="38" stroke="#9cc1d8" />
              <line x1="43" y1="5" x2="51" y2="35" stroke="#9cc1d8" />
              <line x1="4" y1="22" x2="67" y2="14" stroke="#9cc1d8" />
              <line x1="26" y1="40" x2="22" y2="55" stroke="#6b8478" strokeWidth="2" />
              <line x1="52" y1="36" x2="56" y2="51" stroke="#6b8478" strokeWidth="2" />
            </g>
          ))}
        </g>

        <g className="footer-windmill wind-a" transform="translate(620 92)">
          <line x1="0" y1="46" x2="0" y2="154" stroke="#81918a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="0" cy="43" r="5" fill="#fff" stroke="#6d7e76" strokeWidth="2" />
          <g className="footer-rotor rotor-a">
            <path d="M0 43 L-8 -4 Q-3 -14 2 -3 L5 38Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5" />
            <path d="M0 43 L43 56 Q52 63 42 68 L5 49Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5" />
            <path d="M0 43 L-34 74 Q-44 79 -42 68 L-4 47Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5" />
          </g>
        </g>
        <g className="footer-windmill wind-b" transform="translate(738 126) scale(.76)">
          <line x1="0" y1="46" x2="0" y2="145" stroke="#81918a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="0" cy="43" r="5" fill="#fff" stroke="#6d7e76" strokeWidth="2" />
          <g className="footer-rotor rotor-b"><path d="M0 43 L-8 -4 Q-3 -14 2 -3 L5 38Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/><path d="M0 43 L43 56 Q52 63 42 68 L5 49Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/><path d="M0 43 L-34 74 Q-44 79 -42 68 L-4 47Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/></g>
        </g>
        <g className="footer-windmill wind-c" transform="translate(830 72) scale(.9)">
          <line x1="0" y1="46" x2="0" y2="174" stroke="#81918a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="0" cy="43" r="5" fill="#fff" stroke="#6d7e76" strokeWidth="2" />
          <g className="footer-rotor rotor-c"><path d="M0 43 L-8 -4 Q-3 -14 2 -3 L5 38Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/><path d="M0 43 L43 56 Q52 63 42 68 L5 49Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/><path d="M0 43 L-34 74 Q-44 79 -42 68 L-4 47Z" fill="#f8fbf9" stroke="#72857c" strokeWidth="1.5"/></g>
        </g>

        <g className="footer-pylon-real" transform="translate(1060 92)">
          <line x1="0" y1="120" x2="28" y2="0"/><line x1="56" y1="120" x2="28" y2="0"/>
          <line x1="8" y1="92" x2="48" y2="92"/><line x1="12" y1="66" x2="44" y2="66"/><line x1="17" y1="41" x2="39" y2="41"/>
          <line x1="-18" y1="31" x2="74" y2="31"/><line x1="-10" y1="55" x2="66" y2="55"/>
          <line x1="9" y1="92" x2="47" y2="120"/><line x1="47" y1="92" x2="9" y2="120"/>
        </g>
        <g className="footer-pylon-real pylon-small" transform="translate(1400 135) scale(.62)">
          <line x1="0" y1="120" x2="28" y2="0"/><line x1="56" y1="120" x2="28" y2="0"/><line x1="8" y1="92" x2="48" y2="92"/><line x1="12" y1="66" x2="44" y2="66"/><line x1="17" y1="41" x2="39" y2="41"/><line x1="-18" y1="31" x2="74" y2="31"/><line x1="-10" y1="55" x2="66" y2="55"/>
        </g>
        <path className="footer-wire-flow flow-one" d="M1115 123 C1220 97 1320 102 1418 154" fill="none" stroke="#81918a" strokeWidth="1.5" />
        <path className="footer-wire-flow flow-two" d="M1115 147 C1220 124 1322 130 1418 173" fill="none" stroke="#81918a" strokeWidth="1.5" />

        <g className="footer-substation" transform="translate(1214 178)">
          <rect x="0" y="0" width="104" height="44" rx="2" fill="#f6fbf7" stroke="#7ba28a" strokeWidth="1.5" />
          <rect x="14" y="14" width="14" height="30" fill="#d6eadb"/><rect x="42" y="11" width="15" height="12" fill="#d6eadb"/><rect x="69" y="11" width="15" height="12" fill="#d6eadb"/><rect x="42" y="29" width="15" height="15" fill="#d6eadb"/><rect x="69" y="29" width="15" height="15" fill="#d6eadb"/>
        </g>
      </svg>
    </div>
  );
}

function HomeFooter() {
  return (
    <footer className="real-footer">
      <EnergyFooterLandscape />
      <div className="container real-footer-grid">
        <div className="real-footer-brand"><Brand /><p>Renewable EPC, power evacuation and electrical infrastructure for solar, wind and grid-connectivity projects.</p></div>
        <div><h4>Company</h4><Link to="/about">About ORIKS</Link><Link to="/projects">Projects</Link><Link to="/safety-quality">Safety & Quality</Link></div>
        <div><h4>Capabilities</h4><Link to="/services">Power Evacuation</Link><Link to="/services">Substations</Link><Link to="/services">Transmission</Link><Link to="/services">Grid Connectivity</Link></div>
        <div><h4>Registered Office</h4><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Tamil Nadu, India — 639002.</p><Link className="footer-contact-link" to="/contact">Discuss a project <ArrowRight size={16}/></Link></div>
      </div>
      <div className="container real-footer-bottom"><span>© {new Date().getFullYear()} ORIKS Energy Care Pvt Ltd.</span><span>Engineering the connection from generation to grid.</span></div>
    </footer>
  );
}

export default function HomeRealistic() {
  return (
    <>
      <Header />
      <main className="real-home">
        <section className="real-hero">
          <div className="container real-hero-grid">
            <motion.div className="real-hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
              <span className="real-kicker">Powering a sustainable future</span>
              <h1>Delivering reliable <em>energy infrastructure</em> for a better tomorrow.</h1>
              <p>ORIKS Energy Care Pvt Ltd supports renewable-energy and electrical-infrastructure projects across solar, wind, power evacuation, substations, transmission, grid connectivity, testing, commissioning and O&M.</p>
              <div className="real-actions"><Link className="real-btn primary" to="/services">Our services <ArrowRight size={17}/></Link><Link className="real-btn secondary" to="/projects">View projects <ArrowRight size={17}/></Link></div>
            </motion.div>
            <motion.div className="real-hero-visual" initial={{opacity:0,scale:.985}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.08}}>
              <img src="/oriks-energy-hero.webp" alt="Solar panels, wind turbines and electrical transmission infrastructure" />
              <div className="real-hero-gradient" />
              <div className="real-proof-chips">
                <div><Zap size={18}/><span><strong>Power Evacuation</strong><small>Generation to grid</small></span></div>
                <div><ShieldCheck size={18}/><span><strong>Execution Discipline</strong><small>Safety & quality</small></span></div>
                <div><Network size={18}/><span><strong>Grid Connectivity</strong><small>Protection & metering</small></span></div>
              </div>
            </motion.div>
          </div>
          <div className="container real-capability-strip"><span>Renewable EPC</span><span>Power Evacuation</span><span>Substations</span><span>Transmission</span><span>Grid Connectivity</span><span>O&M</span></div>
        </section>

        <section className="real-section real-services-section">
          <div className="container real-section-head"><div><span className="real-kicker">What we do</span><h2>Infrastructure behind reliable renewable power.</h2></div><p>ORIKS is positioned around the electrical work that makes renewable generation usable: collection, transformation, evacuation, protection, metering, grid synchronisation and long-term support.</p></div>
          <div className="container real-service-grid">
            {services.map(({icon:Icon,title,text},i)=><motion.article className="real-service-card" key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{delay:(i%4)*.05}}><div className="service-icon-wrap"><Icon size={26}/></div><div><h3>{title}</h3><p>{text}</p><Link to="/services">View scope <ArrowRight size={15}/></Link></div></motion.article>)}
          </div>
        </section>

        <section className="real-section real-flow-section">
          <div className="container real-flow-grid">
            <div><span className="real-kicker">From generation to grid</span><h2>Show the complete electrical journey, not isolated services.</h2><p>Technical buyers need to understand how the scope connects. The website is structured around the real project sequence from renewable generation through collection, pooling, evacuation and utility synchronisation.</p><Link className="real-text-link" to="/capabilities">See capability map <ArrowRight size={16}/></Link></div>
            <div className="real-flow-steps">
              {[['01','Generate','Solar, wind or hybrid renewable generation'],['02','Collect','33 kV collection, cabling and electrical BoP'],['03','Transform','Pooling substation, switchyard and protection'],['04','Evacuate','EHV transmission and utility bay interface'],['05','Synchronise','Metering, protection checks and grid connectivity']].map(([n,t,d])=><div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="real-section real-why-section">
          <div className="container real-why-grid">
            <div className="real-image-panel"><img src="/oriks-energy-hero.webp" alt="Renewable power evacuation infrastructure" /></div>
            <div><span className="real-kicker">Why the website matters</span><h2>Your digital company profile should prove capability before the first meeting.</h2><p>A strong EPC website works as a brochure, portfolio and technical introduction in one place. It helps developers, OEMs, consultants and utility-side teams quickly understand what ORIKS can execute.</p><div className="real-check-list"><span><CheckCircle2 size={18}/> Clear service and technical scope</span><span><CheckCircle2 size={18}/> Project evidence by MW, kV, MVA and route-km</span><span><CheckCircle2 size={18}/> Safety, quality and execution discipline</span><span><CheckCircle2 size={18}/> Direct project-enquiry path</span></div><Link className="real-btn primary" to="/contact">Discuss a project <ArrowRight size={17}/></Link></div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
