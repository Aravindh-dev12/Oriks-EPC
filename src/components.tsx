import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const nav = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Capabilities', '/capabilities'],
  ['Projects', '/projects'], ['Safety & Quality', '/safety-quality'], ['Contact', '/contact']
];

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="ORIKS Energy Care home">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span className="brand-copy"><strong>ORIKS</strong><small>ENERGY CARE</small></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}>
          <span /><span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <Link className="nav-cta" to="/contact">Discuss a project</Link>
        </nav>
      </div>
    </header>
  );
}

function EnergyLandscape() {
  return (
    <div className="footer-landscape" aria-hidden="true">
      <svg viewBox="0 0 1440 210" preserveAspectRatio="xMidYMax slice">
        <g className="footer-cloud cloud-a"><ellipse cx="160" cy="42" rx="34" ry="10"/><ellipse cx="186" cy="40" rx="24" ry="14"/></g>
        <g className="footer-cloud cloud-b"><ellipse cx="1110" cy="34" rx="38" ry="11"/><ellipse cx="1140" cy="32" rx="26" ry="15"/></g>
        <circle className="footer-sun" cx="795" cy="92" r="17"/>

        <path className="mountain-line" d="M0 152 L44 119 L72 134 L118 103 L156 134 L190 116 L235 151 L286 123 L332 151 L390 119 L432 151 L486 111 L538 151 L586 125 L626 151 L684 118 L736 151 L793 111 L844 151 L905 122 L950 151 L1003 112 L1058 151 L1110 119 L1164 151 L1212 112 L1266 151 L1320 118 L1375 151 L1440 126"/>
        <path className="hill-back" d="M0 160 C115 130 205 132 305 160 C425 126 535 130 650 160 C780 123 895 129 1010 160 C1125 132 1250 132 1440 158 L1440 210 L0 210Z"/>
        <path className="hill-front" d="M0 180 C130 154 250 160 365 180 C525 145 660 154 815 180 C980 148 1125 156 1440 176 L1440 210 L0 210Z"/>

        <g className="solar-field" transform="translate(118 151)">
          {[0,68,136,204].map(x => <g key={x} transform={`translate(${x} 0) skewX(-14)`}><rect x="0" y="0" width="52" height="22" rx="2"/><line x1="17" y1="0" x2="17" y2="22"/><line x1="34" y1="0" x2="34" y2="22"/><line x1="0" y1="11" x2="52" y2="11"/></g>)}
          {[25,93,161,229].map(x => <line key={x} x1={x} y1="22" x2={x-4} y2="36"/>)}
        </g>

        <g className="pylon pylon-left" transform="translate(455 91) scale(.78)"><line x1="0" y1="104" x2="22" y2="0"/><line x1="44" y1="104" x2="22" y2="0"/><line x1="6" y1="78" x2="38" y2="78"/><line x1="10" y1="57" x2="34" y2="57"/><line x1="14" y1="36" x2="30" y2="36"/><line x1="-12" y1="24" x2="56" y2="24"/><line x1="-7" y1="46" x2="51" y2="46"/><line x1="4" y1="78" x2="40" y2="104"/><line x1="40" y1="78" x2="4" y2="104"/></g>

        <g className="wind-unit wind-one" transform="translate(625 78)"><line className="wind-mast" x1="0" y1="28" x2="0" y2="110"/><circle cx="0" cy="25" r="4"/><g className="wind-blades"><line x1="0" y1="25" x2="0" y2="-18"/><line x1="0" y1="25" x2="38" y2="45"/><line x1="0" y1="25" x2="-36" y2="48"/></g></g>
        <g className="wind-unit wind-two" transform="translate(712 101) scale(.74)"><line className="wind-mast" x1="0" y1="28" x2="0" y2="104"/><circle cx="0" cy="25" r="4"/><g className="wind-blades delay"><line x1="0" y1="25" x2="0" y2="-16"/><line x1="0" y1="25" x2="36" y2="44"/><line x1="0" y1="25" x2="-33" y2="46"/></g></g>
        <g className="wind-unit wind-three" transform="translate(785 65) scale(.92)"><line className="wind-mast" x1="0" y1="28" x2="0" y2="126"/><circle cx="0" cy="25" r="4"/><g className="wind-blades delay-two"><line x1="0" y1="25" x2="0" y2="-20"/><line x1="0" y1="25" x2="40" y2="46"/><line x1="0" y1="25" x2="-38" y2="50"/></g></g>

        <g className="pylon pylon-main" transform="translate(985 76)"><line x1="0" y1="112" x2="22" y2="0"/><line x1="44" y1="112" x2="22" y2="0"/><line x1="6" y1="82" x2="38" y2="82"/><line x1="10" y1="58" x2="34" y2="58"/><line x1="14" y1="36" x2="30" y2="36"/><line x1="-12" y1="24" x2="56" y2="24"/><line x1="-7" y1="47" x2="51" y2="47"/><line x1="4" y1="82" x2="40" y2="112"/><line x1="40" y1="82" x2="4" y2="112"/></g>
        <g className="pylon pylon-far" transform="translate(1306 112) scale(.6)"><line x1="0" y1="104" x2="22" y2="0"/><line x1="44" y1="104" x2="22" y2="0"/><line x1="6" y1="78" x2="38" y2="78"/><line x1="10" y1="57" x2="34" y2="57"/><line x1="14" y1="36" x2="30" y2="36"/><line x1="-12" y1="24" x2="56" y2="24"/><line x1="-7" y1="46" x2="51" y2="46"/></g>
        <path className="power-line" d="M1005 100 C1110 78 1210 82 1320 126"/>
        <path className="power-line second" d="M1005 122 C1115 102 1212 105 1320 143"/>

        <g className="footer-building" transform="translate(1132 154)"><rect x="0" y="0" width="88" height="38" rx="2"/><rect x="12" y="12" width="12" height="26"/><rect x="36" y="11" width="13" height="10"/><rect x="58" y="11" width="13" height="10"/><rect x="36" y="25" width="13" height="13"/><rect x="58" y="25" width="13" height="13"/><rect x="72" y="-8" width="7" height="8"/></g>

        {[70,92,1090,1238,1370].map((x,i) => <g className="land-tree" key={x} transform={`translate(${x} ${168 - (i%2)*5})`}><line x1="0" y1="12" x2="0" y2="28"/><circle cx="0" cy="8" r={i===4?8:7}/><circle cx="-5" cy="12" r="5"/><circle cx="5" cy="12" r="5"/></g>)}

        <g className="footer-birds bird-one"><path d="M0 0 q8 -7 16 0 q8 -7 16 0"/></g>
        <g className="footer-birds bird-two"><path d="M0 0 q6 -5 12 0 q6 -5 12 0"/></g>
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <EnergyLandscape />
      <div className="container footer-grid">
        <div className="footer-brand"><Brand /><p>Renewable EPC, power evacuation and electrical infrastructure for solar, wind and grid-connectivity projects.</p></div>
        <div><h4>Capabilities</h4><Link to="/services">Power Evacuation</Link><Link to="/services">Substations</Link><Link to="/services">Transmission</Link><Link to="/services">Testing & Commissioning</Link></div>
        <div><h4>Company</h4><Link to="/about">About ORIKS</Link><Link to="/projects">Project Portfolio</Link><Link to="/safety-quality">Safety & Quality</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Registered Office</h4><p>58/1, Ramanujanagar, Sengunthapuram,<br/>Karur, Tamil Nadu, India — 639002.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ORIKS Energy Care Pvt Ltd.</span><span>Engineering the connection from generation to grid.</span></div>
    </footer>
  );
}

export function PageShell({ children }: PropsWithChildren) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function Eyebrow({ children }: PropsWithChildren) { return <div className="eyebrow"><span />{children}</div>; }

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: .12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'show' : ''} ${className}`}>{children}</div>;
}

export function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function PageHero({ label, title, text, image }: { label: string; title: string; text: string; image?: string }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <Reveal><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p></Reveal>
        {image && <Reveal className="page-hero-media"><img src={image} alt="" /></Reveal>}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-wrap"><div className="container"><div className="cta-card">
      <div><Eyebrow>Start with the project requirement</Eyebrow><h2>Planning a renewable or power-infrastructure project?</h2><p>Share the project type, location, electrical scope and current stage. We can structure the technical discussion from there.</p></div>
      <Link className="button light" to="/contact">Send project brief <Arrow /></Link>
    </div></div></section>
  );
}
