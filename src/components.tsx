import { PropsWithChildren, useState, useRef, useEffect, type ComponentType } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SunMedium, Wind, Truck, BookOpen, Film, BellRing, ChevronDown, ArrowRight, LucideProps } from 'lucide-react';

const logo='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-mKj19QeGR8YjdR7AHpirSguJJ6zt6q.png';

interface NavChild {
  label: string;
  href: string;
  icon: ComponentType<LucideProps>;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const nav: NavItem[] = [
  {label:'Home',href:'/'},{label:'Who We Are',href:'/about'},
  {
    label:'Our Works',
    href:'/works',
    children:[
      {label:'Solar Projects',href:'/works/solar',icon:SunMedium},
      {label:'Wind Projects',href:'/works/windmill',icon:Wind},
      {label:'Transport & Logistics',href:'/works/transport',icon:Truck}
    ]
  },
  {label:'Our Solutions',href:'/services'},
  {
    label:'Resources',
    href:'/resources',
    children:[
      {label:'Blogs',href:'/resources/blogs',icon:BookOpen},
      {label:'Media',href:'/resources/media',icon:Film},
      {label:'New Updates',href:'/resources/updates',icon:BellRing}
    ]
  },
  {label:'Our Clients',href:'/clients'}
];

export function Header(){
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const close = () => { setOpen(false); setActiveDropdown(null); };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="Propecare"/>
          <span><b>PROPECARE</b><small>INFRA PROJECTS</small></span>
        </Link>
        <button 
          type="button" 
          className={`mobile-menu-toggle${open ? ' is-open' : ''}`} 
          aria-label={open ? 'Close menu' : 'Open menu'} 
          aria-expanded={open} 
          onClick={() => setOpen(v => !v)}
        >
          <span/><span/><span/>
        </button>
        <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          {nav.map(item => item.children ? (
            <div 
              className={`nav-dropdown${activeDropdown === item.href ? ' is-open' : ''}`} 
              key={item.href}
              onMouseEnter={() => setActiveDropdown(item.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to={item.href} onClick={close}>
                <span>{item.label}</span>
                <ChevronDown size={14} className="dropdown-chevron-icon"/>
              </NavLink>
              <div className="dropdown-menu">
                {item.children.map(child => {
                  const Icon = child.icon;
                  return (
                    <Link key={child.href} to={child.href} onClick={close} className="dropdown-item-link">
                      <Icon size={16} strokeWidth={2} className="nav-item-icon"/>
                      <span>{child.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} onClick={close}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="nav-button" to="/contact" onClick={close}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}
export function Footer(){
  const location = useLocation();
  const isHome = location.pathname === '/';
  return <footer>{isHome && <div className="footer-visual"><img src="https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Power transmission infrastructure"/><div><span className="kicker">PROPECARE INFRA PROJECTS</span><h2>Engineering a cleaner, connected tomorrow.</h2><p>Renewable EPC, electrical infrastructure and specialist movement - coordinated around the realities of the field.</p><Link className="button light" to="/contact">Start a conversation</Link></div></div>}<div className="wrap footer-main"><div className="footer-brand"><Link className="brand footer-brand-logo" to="/"><img src={logo} alt="Propecare"/><span><b>PROPECARE</b><small>INFRA PROJECTS</small></span></Link><p>Renewable infrastructure, EPC delivery and heavy transport solutions from generation to grid. Built for dependable project delivery across Tamil Nadu and beyond.</p></div><div><b>Explore</b><Link to="/about">Who We Are</Link><Link to="/works">Our Works</Link><Link to="/works/solar" className="footer-sub-link"><SunMedium size={14}/> Solar Projects</Link><Link to="/works/windmill" className="footer-sub-link"><Wind size={14}/> Wind Projects</Link><Link to="/works/transport" className="footer-sub-link"><Truck size={14}/> Transport &amp; Logistics</Link><Link to="/services">Our Solutions</Link><Link to="/clients">Our Clients</Link></div><div><b>Resources</b><Link to="/resources/blogs" className="footer-sub-link"><BookOpen size={14}/> Blogs</Link><Link to="/resources/media" className="footer-sub-link"><Film size={14}/> Media</Link><Link to="/resources/updates" className="footer-sub-link"><BellRing size={14}/> New Updates</Link><Link to="/contact">Contact Us</Link></div><div><b>Reach us</b><p>+91 9790005158<br/>propecareindia@gmail.com<br/>Karur, Tamil Nadu</p><Link to="/contact" className="footer-contact-link">Project enquiry <ArrowRight size={13} style={{display:'inline',verticalAlign:'middle',marginLeft:'4px'}}/></Link></div></div><div className="wrap copyright">© {new Date().getFullYear()} Propecare Infra Projects <span>Solar · Windmill · Transport · EPC</span></div></footer>}
export function HeroVideo(){
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay triggers on all modern mobile and desktop browsers
    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented; retry on first user interaction
        const handleInteraction = () => {
          video.play().catch(() => {});
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
        };
        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('touchstart', handleInteraction, { once: true });
      });
    }
  }, []);

  return (
    <section className="hero-video">
      <video
        ref={videoRef}
        className="hero-video-frame"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-out-2k.mp4" type="video/mp4" />
        <source src="/videos/out%202k%20.mp4#t=5" type="video/mp4" />
      </video>
      <div className="hero-shade"/>
      <div className="wrap hero-copy">
        <span className="kicker">PROPECARE INFRA PROJECTS · RENEWABLE EPC</span>
        <h1>Powering progress from <i>generation to movement.</i></h1>
        <p>Solar. Windmill. Transport. Infrastructure. One trusted partner for ambitious projects.</p>
        <div>
          <Link className="button light" to="/works">Explore our works</Link>
          <Link className="button outline-light" to="/contact">Start a project</Link>
        </div>
      </div>
    </section>
  );
}
export function Section({eyebrow,title,children}:{eyebrow:string;title:string;children?:PropsWithChildren['children']}){return <div className="section-head"><span className="kicker">{eyebrow}</span><h2>{title}</h2>{children}</div>}
export function MediaCard({image,title,text}:{image:string;title:string;text:string}){return <article className="media-card"><img src={image} alt={title} loading="lazy"/><div><span>PROPECARE</span><h3>{title}</h3><p>{text}</p></div></article>}
export{logo};