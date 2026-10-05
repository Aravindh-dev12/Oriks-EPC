import { PropsWithChildren, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-mKj19QeGR8YjdR7AHpirSguJJ6zt6q.png';
const nav = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Our Works', href: '/works', children: [['Solar', '/works/solar'], ['Windmill', '/works/windmill'], ['Transport & Logistics', '/works/transport']] },
  { label: 'Our Solutions', href: '/services' },
  { label: 'Resources', href: '/resources', children: [['Blogs', '/resources/blogs'], ['Media', '/resources/media'], ['New Updates', '/resources/updates']] },
  { label: 'Our Clients', href: '/clients' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header><div className="wrap nav">
    <Link to="/" className="brand" onClick={close}><img src={logo} alt="Propcare" /><span><b>PROPECARE</b><small>INFRA PROJECTS</small></span></Link>
    <button type="button" className={`mobile-menu-toggle${open ? ' is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}><span /><span /><span /></button>
    <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">{nav.map(item => item.children ? <div className="nav-dropdown" key={item.href}><NavLink to={item.href} onClick={close}>{item.label}<span className="dropdown-chevron" aria-hidden="true" /></NavLink><div className="dropdown-menu">{item.children.map(([label, href]) => <Link key={href} to={href} onClick={close}>{label}</Link>)}</div></div> : <NavLink key={item.href} to={item.href} end={item.href === '/'} onClick={close}>{item.label}</NavLink>)}<NavLink className="nav-button" to="/contact" onClick={close}>Contact Us</NavLink></nav>
  </div></header>;
}

export function Footer() { return <footer><div className="footer-visual"><img src="https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Power transmission infrastructure" /><div><span className="kicker">PROPECARE INFRA PROJECTS</span><h2>Engineering a cleaner, connected tomorrow.</h2><Link className="button light" to="/contact">Start a conversation</Link></div></div><div className="wrap footer-main"><div className="footer-brand"><Link className="brand footer-brand-logo" to="/"><img src={logo} alt="Propcare" /><span><b>PROPECARE</b><small>INFRA PROJECTS</small></span></Link><p>Renewable infrastructure, EPC delivery and heavy transport solutions from generation to grid. Built for dependable project delivery across Tamil Nadu and beyond.</p></div><div><b>Explore</b><Link to="/about">Who We Are</Link><Link to="/works">Our Works</Link><Link to="/services">Our Solutions</Link><Link to="/clients">Our Clients</Link></div><div><b>Resources</b><Link to="/resources/blogs">Blogs</Link><Link to="/resources/media">Media</Link><Link to="/resources/updates">New Updates</Link><Link to="/contact">Contact Us</Link></div><div><b>Reach us</b><p>+91 9790005158<br />propecareindia@gmail.com<br />Karur, Tamil Nadu</p><Link to="/contact">Project enquiry</Link></div></div><div className="wrap copyright">© {new Date().getFullYear()} Propecare Infra Projects <span>Solar · Windmill · Transport · EPC</span></div></footer>; }
export function HeroVideo() { return <section className="hero-video"><video className="hero-video-frame" autoPlay muted loop playsInline preload="metadata" poster="https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=2200"><source src="https://videos.pexels.com/video-files/6967457/6967457-hd_1920_1080_30fps.mp4" type="video/mp4" /></video><div className="hero-shade" /><div className="wrap hero-copy"><span className="kicker">PROPECARE INFRA PROJECTS · RENEWABLE EPC</span><h1>Powering progress from <i>generation to movement.</i></h1><p>Solar. Windmill. Transport. Infrastructure. One trusted partner for ambitious projects.</p><div><Link className="button light" to="/works">Explore our works</Link><Link className="button outline-light" to="/contact">Start a project</Link></div></div></section>; }
export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children?: PropsWithChildren['children'] }) { return <div className="section-head"><span className="kicker">{eyebrow}</span><h2>{title}</h2>{children}</div>; }
export function MediaCard({ image, title, text }: { image: string; title: string; text: string }) { return <article className="media-card"><img src={image} alt={title} loading="lazy" /><div><span>PROPECARE</span><h3>{title}</h3><p>{text}</p></div></article>; }
export { logo };
