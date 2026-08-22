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
      <svg viewBox="0 0 1440 190" preserveAspectRatio="none">
        <g className="footer-cloud cloud-a"><ellipse cx="160" cy="42" rx="34" ry="10"/><ellipse cx="186" cy="40" rx="24" ry="14"/></g>
        <g className="footer-cloud cloud-b"><ellipse cx="1060" cy="34" rx="38" ry="11"/><ellipse cx="1090" cy="32" rx="26" ry="15"/></g>
        <circle className="footer-sun" cx="760" cy="47" r="18"/>
        <path className="hill-back" d="M0 145 C110 78 205 88 310 145 C410 95 515 98 605 145 C735 78 850 88 970 145 C1080 92 1190 95 1440 145 L1440 190 L0 190Z"/>
        <path className="hill-front" d="M0 165 C135 125 230 132 350 164 C520 112 660 120 820 165 C1020 118 1190 130 1440 160 L1440 190 L0 190Z"/>
        <g className="solar-field" transform="translate(120 130)">
          <g transform="skewX(-14)"><rect x="0" y="0" width="58" height="24" rx="2"/><line x1="19" y1="0" x2="19" y2="24"/><line x1="38" y1="0" x2="38" y2="24"/><line x1="0" y1="12" x2="58" y2="12"/></g>
          <g transform="translate(78 0) skewX(-14)"><rect x="0" y="0" width="58" height="24" rx="2"/><line x1="19" y1="0" x2="19" y2="24"/><line x1="38" y1="0" x2="38" y2="24"/><line x1="0" y1="12" x2="58" y2="12"/></g>
          <line x1="28" y1="24" x2="24" y2="38"/><line x1="106" y1="24" x2="102" y2="38"/>
        </g>
        <g className="wind-unit wind-one" transform="translate(520 70)"><line className="wind-mast" x1="0" y1="28" x2="0" y2="104"/><circle cx="0" cy="25" r="4"/><g className="wind-blades"><line x1="0" y1="25" x2="0" y2="-13"/><line x1="0" y1="25" x2="34" y2="42"/><line x1="0" y1="25" x2="-30" y2="45"/></g></g>
        <g className="wind-unit wind-two" transform="translate(640 92) scale(.72)"><line className="wind-mast" x1="0" y1="28" x2="0" y2="104"/><circle cx="0" cy="25" r="4"/><g className="wind-blades delay"><line x1="0" y1="25" x2="0" y2="-13"/><line x1="0" y1="25" x2="34" y2="42"/><line x1="0" y1="25" x2="-30" y2="45"/></g></g>
        <g className="pylon" transform="translate(905 62)"><line x1="0" y1="104" x2="22" y2="0"/><line x1="44" y1="104" x2="22" y2="0"/><line x1="6" y1="78" x2="38" y2="78"/><line x1="10" y1="57" x2="34" y2="57"/><line x1="14" y1="36" x2="30" y2="36"/><line x1="-12" y1="24" x2="56" y2="24"/><line x1="-7" y1="46" x2="51" y2="46"/><line x1="4" y1="78" x2="40" y2="104"/><line x1="40" y1="78" x2="4" y2="104"/></g>
        <g className="pylon small" transform="translate(1215 90) scale(.72)"><line x1="0" y1="104" x2="22" y2="0"/><line x1="44" y1="104" x2="22" y2="0"/><line x1="6" y1="78" x2="38" y2="78"/><line x1="10" y1="57" x2="34" y2="57"/><line x1="14" y1="36" x2="30" y2="36"/><line x1="-12" y1="24" x2="56" y2="24"/><line x1="-7" y1="46" x2="51" y2="46"/></g>
        <path className="power-line" d="M927 86 C1035 68 1120 72 1231 107"/>
        <g className="footer-building" transform="translate(1080 130)"><rect x="0" y="0" width="70" height="36" rx="2"/><rect x="10" y="12" width="10" height="24"/><rect x="31" y="11" width="12" height="10"/><rect x="50" y="11" width="12" height="10"/><rect x="31" y="25" width="12" height="11"/><rect x="50" y="25" width="12" height="11"/></g>
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
