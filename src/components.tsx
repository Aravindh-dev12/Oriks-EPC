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

export function Footer() {
  return (
    <footer className="site-footer">
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
