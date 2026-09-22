import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Solutions', '/services'],
  ['Projects', '/projects'],
  ['Insights', '/insights'],
  ['Sustainability', '/sustainability'],
  ['Careers', '/careers']
];

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Propcare Energy Care home">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span className="brand-copy"><strong>Propcare</strong><small>ENERGY CARE</small></span>
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
          <Link className="nav-cta" to="/contact">Project enquiry</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer ntc-footer">
      <div className="container footer-intro">
        <div><Brand /><p>Renewable EPC, power evacuation, substations, transmission and grid-connectivity infrastructure for solar, wind and hybrid projects.</p></div>
        <div><span>Start a project conversation</span><Link className="button light" to="/contact">Send project brief <Arrow /></Link></div>
      </div>
      <div className="container footer-grid">
        <div><h4>Solutions</h4><Link to="/services/power-evacuation">Power Evacuation</Link><Link to="/services/pooling-substations-switchyards">Substations & Switchyards</Link><Link to="/services/transmission-infrastructure">Transmission</Link><Link to="/services/testing-commissioning-grid-synchronisation">Testing & Commissioning</Link></div>
        <div><h4>Company</h4><Link to="/about">About Propcare</Link><Link to="/projects">Projects</Link><Link to="/sustainability">Safety & Sustainability</Link><Link to="/careers">Careers</Link></div>
        <div><h4>Insights</h4><Link to="/insights">Technical Articles</Link><Link to="/projects">Project Case Studies</Link><Link to="/capabilities">Capability Map</Link></div>
        <div><h4>Registered Office</h4><p>58/1, Ramanujanagar, Sengunthapuram,<br/>Karur, Tamil Nadu, India — 639002.</p><Link to="/contact">Contact Propcare <Arrow /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Propcare Energy Care Pvt Ltd.</span><span>Engineering the connection from generation to grid.</span></div>
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

export function VideoHero() {
  const videos = [
    'https://videos.pexels.com/video-files/9906462/9906462-uhd_3840_2160_30fps.mp4',
    'https://videos.pexels.com/video-files/9789657/9789657-uhd_2160_3840_30fps.mp4',
    'https://videos.pexels.com/video-files/7211102/7211102-uhd_3840_2160_30fps.mp4'
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex(v => (v + 1) % videos.length), 9000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section className="video-hero">
      <img className="video-hero-poster" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90" alt="Renewable energy infrastructure" />
      <video key={videos[index]} className="video-hero-bg" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90">
        <source src={videos[index]} type="video/mp4" />
      </video>
      <div className="container video-hero-content">
        <Reveal>
          <Eyebrow>Propcare Energy Care</Eyebrow>
          <h1>Engineering the connection from <em>generation to grid.</em></h1>
          <p>Renewable energy, transport infrastructure and power-delivery projects — shown through clear photography and full-screen project video.</p>
          <div className="hero-actions"><Link className="button light" to="/services">Explore solutions <Arrow /></Link><Link className="button ghost-light" to="/contact">Start a project <Arrow /></Link></div>
        </Reveal>
      </div>
      <div className="container video-hero-bottom">
        <span>Solar & renewable</span><span>Wind infrastructure</span><span>Power evacuation</span><span>Road & transport</span>
      </div>
    </section>
  );
}

export function PageHero({ label, title, text, image }: { label: string; title: string; text: string; image?: string }) {
  return (
    <section className="page-hero ntc-page-hero">
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
      <div><Eyebrow>Start with the project requirement</Eyebrow><h2>Planning a renewable or power-infrastructure project?</h2><p>Share the project type, location, electrical scope and current stage. The conversation can start with a clear technical brief.</p></div>
      <Link className="button light" to="/contact">Send project brief <Arrow /></Link>
    </div></div></section>
  );
}
