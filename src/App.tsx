import { useState, useRef, useEffect, type ReactNode } from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, SunMedium, Zap, Factory, Truck, Wind, CheckCircle2, 
  Building2, MapPin, ShieldCheck, Play, ArrowLeft, ArrowRight, 
  Youtube, Instagram, Linkedin, ExternalLink, Video, Image as ImageIcon,
  Calendar, Clock, Filter, X
} from 'lucide-react';
import { Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { 
  articles, clients, newsUpdates, research, services, sectors, works, 
  socialChannels, socialMediaPosts 
} from './data';

const solar = 'https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200';
const grid = 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transmission = 'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200';
const wind = '/images/indian-windmill.png';
const transport = '/images/indian-transport-truck.jpg';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Home() {
  return <>
    <HeroVideo />
    <section className="home-intro">
      <div className="wrap home-intro-grid">
        <div><span className="kicker">01 / PROPECARE</span><h2>Renewable infrastructure needs more than a contractor.</h2></div>
        <div><p>It needs people who understand the interfaces between generation, electrical systems, access, transport, commissioning and the grid. Propercare brings those conversations together early so projects can move with fewer hand-offs.</p><Link className="text-link" to="/about" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>See how we work</span><ArrowRight size={14}/></Link></div>
      </div>
      <div className="wrap home-stat-row">
        <div><b>01</b><span>Renewable infrastructure partner</span></div>
        <div><b>04</b><span>Primary work sectors</span></div>
        <div><b>04</b><span>Core delivery packages</span></div>
        <div><b>360°</b><span>Generation-to-grid view</span></div>
      </div>
    </section>

    <section className="home-sector-showcase">
      <div className="wrap"><Section eyebrow="02 / WHERE WE WORK" title="Four project environments. One practical delivery mindset." />
        <div className="sector-feature-grid">
          <Link className="sector-feature" to="/works/solar"><img src={solar} alt="Solar infrastructure"/><div><span>01</span><h3>Solar</h3><p>Plant infrastructure, electrical balance-of-plant and power evacuation.</p></div></Link>
          <Link className="sector-feature sector-feature--wind" to="/works/windmill"><img src={wind} alt="Wind turbines"/><div><span>02</span><h3>Wind</h3><p>Electrical packages, site interfaces and movement of turbine components.</p></div></Link>
          <Link className="sector-feature sector-feature--transmission" to="/works/transmission"><img src={transmission} alt="Power transmission infrastructure"/><div><span>03</span><h3>Transmissions</h3><p>High-voltage lines, substation interties and grid evacuation engineering.</p></div></Link>
          <Link className="sector-feature sector-feature--highways" to="/works/highways"><img src={transport} alt="Highway corridor and heavy transit"/><div><span>04</span><h3>Highway Works</h3><p>Highway corridor transit, modular haulage and route engineering.</p></div></Link>
        </div>
      </div>
    </section>

    <section className="home-solutions">
      <div className="wrap">
        <div className="split-heading"><div><span className="kicker">03 / DELIVERY SYSTEM</span><h2>From scope definition to handover.</h2></div><p>Industry leaders increasingly organise renewable delivery around specialist capabilities, route intelligence, engineering interfaces, safety and evidence. Propercare uses the same project logic at the scale of each assignment.</p></div>
        <div className="solution-rail">{services.map((s,i)=>{const Icon=s.slug.includes('epc')?SunMedium:s.slug.includes('power')?Zap:s.slug.includes('substation')?Factory:s.slug.includes('testing')?Zap:Truck;return <Link to={'/services/'+s.slug} className="solution-rail-item" key={s.slug}><span className="solution-icon"><Icon size={25} strokeWidth={1.7}/></span><div><span className="solution-number">0{i+1}</span><h3>{s.title}</h3><p>{s.short}</p></div><ArrowUpRight className="solution-arrow" size={22} strokeWidth={1.8}/></Link>})}</div>
      </div>
    </section>

    <section className="home-method">
      <div className="wrap method-layout">
        <div className="method-image"><img src={grid} alt="Electrical infrastructure"/><div><span>FIELD PRINCIPLE</span><b>Make the interfaces visible before they become problems.</b></div></div>
        <div><span className="kicker">04 / HOW WE DELIVER</span><h2>Plan the route. Control the interface. Prove the handover.</h2>
          <div className="method-list">{['Scope the real requirement','Validate site and route constraints','Coordinate people, equipment and documentation','Test, close out and hand over'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><p>{['Understand the cargo, capacity, drawings, access and project milestones before mobilisation.','Identify physical, electrical, regulatory and operational constraints while there is still time to respond.','Keep procurement, contractors, transport, construction and commissioning aligned to one delivery sequence.','Capture evidence, resolve punch points and leave the client with a clear completion record.'][i]}</p></div>)}</div>
        </div>
      </div>
    </section>

    <section className="home-insights">
      <div className="wrap"><Section eyebrow="05 / INSIGHTS" title="What the renewable project market is teaching us." />
        <div className="insight-grid">{articles.slice(0,3).map(a=><Link className="insight-link" key={a.slug} to={'/resources/blog/'+a.slug}><MediaCard image={a.image} title={a.title} text={a.text}/></Link>)}</div>
      </div>
    </section>
  </>;
}

function About() {
  return <Page type="about" title="Who We Are" lead="A field-focused infrastructure partner for renewable energy and power projects." image={grid}>
    <div className="about-opening"><div><span className="kicker">THE PROPECARE VIEW</span><h2>Clean-energy projects are won at the interfaces.</h2></div><p>Propercare Infra Projects works across renewable generation, electrical infrastructure and specialist movement. Our role is to make the practical connections between engineering intent and site execution clearer: what needs to arrive, where it needs to go, what must be ready before it arrives and what evidence is needed before handover.</p></div>
    <div className="about-values">{[['01','Execution','Turn drawings, schedules and requirements into coordinated field activity.'],['02','Engineering','Respect equipment limits, access constraints, electrical interfaces and commissioning logic.'],['03','Safety','Build route, site and work controls into the plan rather than treating them as paperwork after the fact.'],['04','Communication','Give clients and partners a usable view of progress, dependencies, decisions and risks.'],['05','Adaptability','Scale the team around a package instead of forcing every project into one template.'],['06','Accountability','Close the loop from mobilisation through testing, documentation and handover.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    <div className="about-band"><div><span className="kicker">WHAT WE LEARNED FROM THE MARKET</span><h3>The best renewable sites treat logistics, engineering and commissioning as one conversation.</h3></div><div><p>Across the industry, leading logistics specialists emphasise cargo analysis, route surveys, equipment selection and site readiness; renewable EPC companies emphasise design, construction, testing and long-term support; larger energy groups emphasise scale, reliability and sustainability. Propercare’s proposition sits at the intersection of those needs.</p><Link className="text-link" to="/resources/industry-references" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>View industry research</span><ArrowRight size={14}/></Link></div></div>
    <div className="about-standards"><div><span>PROJECT DISCIPLINE</span><b>Scope before mobilisation</b><p>Clear inputs, responsibilities and acceptance criteria.</p></div><div><span>FIELD DISCIPLINE</span><b>Control the interfaces</b><p>Site, transport, electrical and contractor dependencies stay visible.</p></div><div><span>HANDOVER DISCIPLINE</span><b>Evidence before close</b><p>Testing, records and punch-list closure support confident handover.</p></div></div>
  </Page>;
}

function Works() {
  return <Page type="work" title="Our Works" lead="Sector-led project capabilities, built around the conditions that make renewable infrastructure difficult." image={solar}>
    <div className="works-intro"><div><span className="kicker">SECTOR MAP</span><h2>Different assets. Different risks. Different delivery logic.</h2></div><p>Solar has electrical and grid interfaces. Wind adds large components, access and heavy movement. Industrial transport is a route-engineering problem. Our pages separate these realities instead of treating them as one generic service.</p></div>
    <div className="works-stack">{works.map((w,i)=>{
      const WorkIcon = w.slug === 'solar' ? SunMedium : w.slug === 'windmill' ? Wind : w.slug === 'transmission' ? Zap : Truck;
      return <Link to={'/works/'+w.slug} className="work-row" key={w.slug}>
        <div className="work-row-number">0{i+1}</div>
        <div className="work-row-image"><img src={w.image} alt={w.title}/></div>
        <div className="work-row-copy">
          <span>{w.category}</span>
          <div className="work-row-title-wrap">
            <span className="work-row-icon-badge"><WorkIcon size={24} strokeWidth={1.8}/></span>
            <h3>{w.title}</h3>
          </div>
          <p>{w.short}</p>
          <b style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>Explore sector</span><ArrowRight size={14}/></b>
        </div>
      </Link>;
    })}</div>

    {/* Showcase delivered projects across all active sectors */}
    <div className="work-projects-showcase" style={{marginTop:'60px'}}>
      <div style={{marginBottom:'24px'}}>
        <span className="kicker">DELIVERED &amp; EXECUTED PROJECTS</span>
        <h2>Verified Track Record &amp; Field Delivery</h2>
        <p style={{maxWidth:'680px',color:'var(--muted)',marginTop:'6px',fontSize:'15px',lineHeight:'1.6'}}>
          Review our actively executed utility solar plants and heavy multimodal transport operations with on-site imagery, technical specifications, and drone footage.
        </p>
      </div>
      <div className="work-projects-grid">
        {works.flatMap(w => (w.projects || []).map(p => ({ ...p, sectorSlug: w.slug, sectorTitle: w.title }))).map((p) => (
          <Link to={'/works/projects/' + p.id} className="work-project-card" key={p.id}>
            <div className="work-project-img">
              <img src={p.image} alt={p.title} />
              <span className="work-project-capacity-pill">{p.capacity}</span>
            </div>
            <div className="work-project-body">
              <span className="work-project-tag">{p.tag} · {p.location}</span>
              <h4>{p.title}</h4>
              <p>{p.scope}</p>
              <div className="work-project-stat">
                <b>{p.stat}</b>
                <span className="view-project-link" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>View Project Scope &amp; Media</span><ArrowRight size={14}/></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="sector-strip">{sectors.map(s=><div key={s.name}><b>{s.name}</b><span>{s.focus}</span></div>)}</div>
  </Page>;
}

function Work() {
  const {slug}=useParams();
  const resolvedSlug = slug === 'transport' ? 'highways' : slug;
  const work=works.find(w=>w.slug===resolvedSlug)??works[0];
  const WorkIcon = work.slug === 'solar' ? SunMedium : work.slug === 'windmill' ? Wind : work.slug === 'transmission' ? Zap : Truck;
  return <Page type="work-detail" title={work.title} lead={work.short} image={work.image}>
    <div className="detail-lead">
      <div>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',marginBottom:'10px'}}>
          <span className="work-row-icon-badge" style={{width:'34px',height:'34px'}}><WorkIcon size={18} strokeWidth={2}/></span>
          <span className="kicker" style={{margin:0}}>SECTOR PLAYBOOK</span>
        </div>
        <h2>{work.headline}</h2>
      </div>
      <p>{work.description}</p>
    </div>
    <div className="capability-panels">{work.bullets.map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>{work.details[i]}</p></article>)}</div>
    {work.projects && work.projects.length > 0 && (
      <div className="work-projects-showcase">
        <span className="kicker">DELIVERED &amp; EXECUTED PROJECTS</span>
        <h3>Real-world execution track record in {work.title}.</h3>
        <div className="work-projects-grid">
          {work.projects.map((p) => (
            <Link to={'/works/projects/' + p.id} className="work-project-card" key={p.id}>
              <div className="work-project-img">
                <img src={p.image} alt={p.title} />
                <span className="work-project-capacity-pill">{p.capacity}</span>
              </div>
              <div className="work-project-body">
                <span className="work-project-tag">{p.tag} · {p.location}</span>
                <h4>{p.title}</h4>
                <p>{p.scope}</p>
                <div className="work-project-stat">
                  <b>{p.stat}</b>
                  <span className="view-project-link" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>View Project Scope &amp; Media</span><ArrowRight size={14}/></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
    <div className="work-process"><div className="work-process-image"><img src={work.image} alt={work.title}/></div><div><span className="kicker">TYPICAL DELIVERY FLOW</span>{work.steps.map((x,i)=><div className="numbered-line" key={x}><span>0{i+1}</span><div><b>{x}</b><p>{work.stepDetails[i]}</p></div></div>)}</div></div>
    <div className="sector-cta"><div><span className="kicker">PROJECT INPUTS</span><h3>Location, asset type, scope and target date are enough to start the conversation.</h3></div><Link className="button" to="/contact">Discuss this sector</Link></div>
  </Page>;
}

function ProjectDetail() {
  const { projectId } = useParams();
  // Find project across all sectors
  let foundProject: any = null;
  let parentWork: any = null;
  for (const w of works) {
    const proj = w.projects?.find((p: any) => p.id === projectId);
    if (proj) {
      foundProject = proj;
      parentWork = w;
      break;
    }
  }

  if (!foundProject) {
    // Default to solar-1 if not found
    foundProject = works[0].projects?.[0];
    parentWork = works[0];
  }

  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState<any>(null);

  const WorkIcon = parentWork.slug === 'solar' ? SunMedium : parentWork.slug === 'windmill' ? Wind : parentWork.slug === 'transmission' ? Zap : Truck;

  const allMediaItems = [
    ...(foundProject.videos || []).map((v: any) => ({ ...v, type: 'video', category: 'video' })),
    ...(foundProject.media || []).map((m: any) => ({ ...m, type: 'image', category: m.category || 'aerial' }))
  ];

  const customCategoryLabels: Record<string, string> = {
    video: 'Drone Videos',
    aerial: 'Aerial Surveys',
    civil: 'Structure & BOS',
    ground: 'Ground Progress',
    electrical: 'Substation & Grid',
    logistics: 'Heavy Haulage & Convoy',
    transport: 'Transport Operations'
  };

  const rawCategories = Array.from(new Set(allMediaItems.map((i: any) => i.category).filter(Boolean)));
  const orderedCategories = [
    ...(foundProject.videos?.length ? ['video'] : []),
    ...rawCategories.filter((c: string) => c !== 'video')
  ];

  const categories = [
    { id: 'all', label: 'All Project Media', count: allMediaItems.length },
    ...orderedCategories.map((cat: string) => ({
      id: cat,
      label: customCategoryLabels[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1)),
      count: allMediaItems.filter((i: any) => i.category === cat).length
    }))
  ].filter(c => c.count > 0);

  const displayedItems = activeCategory === 'all' 
    ? allMediaItems 
    : allMediaItems.filter((item: any) => item.category === activeCategory);

  return (
    <Page type="project-detail" title={foundProject.title} lead={foundProject.scope} image={foundProject.image}>
      <div className="project-detail-container">
        {/* Breadcrumb & Navigation */}
        <div className="project-detail-nav">
          <Link to={'/works/' + parentWork.slug} className="back-link">
            <ArrowLeft size={16} /> Back to {parentWork.title}
          </Link>
          <div className="project-sector-tag">
            <WorkIcon size={16} />
            <span>{parentWork.category}</span>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="project-header-card">
          <div className="project-header-main">
            <span className="kicker">{foundProject.tag} · {foundProject.status}</span>
            <h2>{foundProject.name} - {foundProject.capacity}</h2>
            <p className="project-summary-text">{foundProject.scope}</p>
          </div>
          <div className="project-meta-box">
            <div className="meta-item">
              <span className="meta-label"><Building2 size={16} /> Client / Developer</span>
              <b className="meta-val">{foundProject.client}</b>
            </div>
            <div className="meta-item">
              <span className="meta-label"><MapPin size={16} /> Project Location</span>
              <b className="meta-val">{foundProject.location}</b>
            </div>
            <div className="meta-item">
              <span className="meta-label"><Zap size={16} /> Installed Capacity</span>
              <b className="meta-val highlight">{foundProject.capacity}</b>
            </div>
            <div className="meta-item">
              <span className="meta-label"><ShieldCheck size={16} /> Execution Status</span>
              <b className="meta-val status-badge">{foundProject.status}</b>
            </div>
          </div>
        </div>

        {/* Project Metrics Grid */}
        {foundProject.metrics && (
          <div className="project-metrics-section">
            <span className="kicker">KEY SPECIFICATIONS &amp; FACTS</span>
            <h3>Field parameters and engineering scope delivered.</h3>
            <div className="project-metrics-grid">
              {foundProject.metrics.map((m: any, idx: number) => (
                <div className="metric-card" key={idx}>
                  <span>{m.label}</span>
                  <b>{m.value}</b>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unified Project Media & Video Showcase */}
        {allMediaItems.length > 0 && (
          <div className="project-unified-media-section">
            <div className="media-section-head">
              <div>
                <span className="kicker">PROJECT MEDIA &amp; VERIFIED SITE FOOTAGE</span>
                <h3>High-resolution site imagery, civil progress &amp; drone videos.</h3>
              </div>
              <span className="media-count-badge">{allMediaItems.length} Total Records</span>
            </div>

            {/* Category Filter Tabs */}
            <div className="media-category-bar">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  className={`media-category-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="category-pill-count">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Unified Media Grid */}
            <div className="unified-media-grid">
              {displayedItems.map((item: any, idx: number) => {
                const isVideo = item.type === 'video';
                return (
                  <div 
                    className="unified-media-card" 
                    key={item.id || idx}
                    onClick={() => setLightboxItem(item)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="media-img-wrapper">
                      <img src={item.poster || item.url} alt={item.title} loading="lazy" />
                      
                      {isVideo ? (
                        <>
                          <div className="media-video-play-center">
                            <Play size={24} fill="#fff" />
                          </div>
                          {item.duration && <span className="video-duration-pill-tag">{item.duration}</span>}
                        </>
                      ) : (
                        <div className="media-expand-hint">
                          <span>Click to view</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* High-Resolution Fullscreen Lightbox Modal (Images & Fullscreen Videos) */}
        {lightboxItem && (
          <div className="media-lightbox-backdrop" onClick={() => setLightboxItem(null)}>
            <div className="media-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close-btn" 
                onClick={() => setLightboxItem(null)}
                aria-label="Close media viewer"
              >
                ✕
              </button>

              {lightboxItem.type === 'video' ? (
                <div className="lightbox-video-container">
                  <video
                    controls
                    autoPlay
                    playsInline
                    className="lightbox-fullscreen-video"
                    src={lightboxItem.src}
                    poster={lightboxItem.poster}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (lightboxItem.fallbackSrc && target.src !== lightboxItem.fallbackSrc) {
                        target.src = lightboxItem.fallbackSrc;
                        target.load();
                        target.play().catch(() => {});
                      }
                    }}
                  >
                    <source src={lightboxItem.src} type="video/mp4" />
                    {lightboxItem.fallbackSrc && <source src={lightboxItem.fallbackSrc} type="video/mp4" />}
                    Your browser does not support HTML5 video playback.
                  </video>
                </div>
              ) : (
                <img src={lightboxItem.url} alt={lightboxItem.title} />
              )}

              <div className="lightbox-caption">
                <b>{lightboxItem.title}</b>
                {lightboxItem.subtitle && <span> - {lightboxItem.subtitle}</span>}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA & Related Projects */}
        <div className="project-cta-block">
          <div>
            <span className="kicker">INTERESTED IN SIMILAR SCALE?</span>
            <h3>Deploying solar, wind, or heavy logistics infrastructure in Tamil Nadu?</h3>
            <p>Our project desk coordinates site survey, civil foundations, mounting systems, pooling substations, and route haulage with single-source accountability.</p>
          </div>
          <div className="cta-actions">
            <Link className="button light" to="/contact">Enquire About This Scope</Link>
            <Link className="button outline-light" to={'/works/' + parentWork.slug}>View All {parentWork.title}</Link>
          </div>
        </div>
      </div>
    </Page>
  );
}

function Solutions() {
  return <Page type="solutions" title="Our Solutions" lead="Specialist delivery packages for renewable generation, electrical infrastructure and project movement." image={transmission}>
    <div className="solutions-intro">
      <div>
        <span className="kicker">CAPABILITY ARCHITECTURE</span>
        <h2>Choose the package. Keep the interfaces connected.</h2>
      </div>
      <p>Rather than presenting one oversized list of services, Propercare groups work around the decisions clients actually make: build the plant, evacuate the power, establish the substation, or get the asset tested and ready for operation.</p>
    </div>
    <div className="solution-cards">{services.map((s,i)=><Link to={'/services/'+s.slug} key={s.slug} className="solution-card"><img src={s.image} alt={s.title}/><div><span>0{i+1} / SOLUTION</span><h3>{s.title}</h3><p>{s.short}</p><b style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>See scope</span><ArrowRight size={14}/></b></div></Link>)}</div>
    <div className="solutions-process"><div><span className="kicker">01</span><h3>Define</h3><p>Scope, drawings, site conditions, quantities, dates and interfaces.</p></div><div><span className="kicker">02</span><h3>Coordinate</h3><p>Resources, procurement, contractors, access, testing and reporting.</p></div><div><span className="kicker">03</span><h3>Execute</h3><p>Field activity managed against the agreed sequence and controls.</p></div><div><span className="kicker">04</span><h3>Close</h3><p>Testing evidence, punch-list closure, records and handover.</p></div></div>
  </Page>;
}

const serviceScope:Record<string,string[]>={
 epc:['Engineering scope alignment','Procurement and material readiness','Civil, mechanical and electrical interfaces','Construction coordination and progress control','Quality records and handover'],
 evacuation:['Collection system and cable routes','Transformers and switchgear interfaces','Protection, metering and grid coordination','Pre-commissioning documentation','Energisation readiness'],
 substations:['Primary equipment layout','Protection and control systems','Earthing, cabling and interlocking','Inspection and functional testing','As-built and handover records'],
 testing:['Approved test-plan coordination','Cable and equipment testing','Protection and functional checks','Defect and punch-point tracking','Synchronisation and handover readiness']
};

function Service() {
 const {slug}=useParams(); const s=services.find(x=>x.slug===slug)??services[0];
 return <Page type="service-detail" title={s.title} lead={s.lead} image={s.image}>
   <div className="service-hero-copy"><div><span className="kicker">SOLUTION / {s.code}</span><h2>{s.headline}</h2></div><p>{s.description}</p></div>
   <div className="service-scope-layout"><div className="service-scope-list">{(serviceScope[s.slug]??[]).map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div><div className="service-side"><span className="kicker">WHY THIS PACKAGE EXISTS</span><h3>{s.why}</h3><p>{s.outcome}</p><Link className="button" to="/contact">Request a project discussion</Link></div></div>
   <div className="service-checkpoints"><span className="kicker">CLIENT CHECKPOINTS</span><div>{s.checkpoints.map(x=><article key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></article>)}</div></div>
 </Page>;
}

function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const blogList = articles.filter(a => a.tag !== 'UPDATES');
  const categories = ['all', ...Array.from(new Set(blogList.map(a => a.tag)))];
  const displayed = activeCategory === 'all' ? blogList : blogList.filter(a => a.tag === activeCategory);

  return (
    <Page type="resources-blogs" title="Renewable &amp; Logistics Insights" lead="Engineering playbooks, field execution methodologies, grid codes and infrastructure knowledge from the ground." image={solar}>
      <div className="resource-header">
        <span className="kicker">ARTICLES &amp; FIELD PERSPECTIVES</span>
        <h2>Deep Dives into EPC, Evacuation, Substation &amp; ODC Engineering</h2>
        <p>Our engineering insights turn field lessons and utility-scale delivery into practical guidance for developers, EPCs, and asset owners across South India.</p>
      </div>

      {/* Clean professional filter pills without outer box, border, or background */}
      <div className="blog-filter-pills-wrap">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`blog-filter-pill ${activeCategory === c ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              <span>{c.toUpperCase()}</span>
              <span className="blog-pill-badge">
                {c === 'all' ? blogList.length : blogList.filter(a => a.tag === c).length}
              </span>
            </button>
          ))}
        </div>

      <div className="articles-grid">
        {displayed.map((a) => (
          <article className="article-card" key={a.slug}>
            <div className="article-card-image-wrap">
              <img src={a.image} alt={a.title} loading="lazy" />
              <span className="article-category-badge">{a.tag}</span>
            </div>
            <div className="article-card-body">
              <div className="article-card-meta">
                <span className="article-date">
                  <Calendar size={13} className="meta-icon" />
                  <span>{a.date}</span>
                </span>
                <span className="article-read-pill">
                  <Clock size={12} className="meta-icon" />
                  <span>{a.readTime}</span>
                </span>
              </div>
              <h3 className="article-card-title">{a.title}</h3>
              <p className="article-card-excerpt">{a.text}</p>
              <div className="article-card-action">
                <Link className="article-read-btn" to={'/resources/blog/' + a.slug}>
                  <span>Read Article</span>
                  <ArrowRight size={16} className="btn-arrow-icon" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link className="research-banner" to="/resources/industry-references" style={{marginTop: '50px'}}>
        <div>
          <span>MARKET BENCHMARKS</span>
          <b>See the external industry references behind our content and engineering strategy</b>
        </div>
        <ArrowUpRight size={22} />
      </Link>
    </Page>
  );
}

function MediaPage() {
  const [activeChannelTab, setActiveChannelTab] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<any>(null);

  // Show only official channel broadcasts and uploads
  const channelPosts = socialMediaPosts;

  const tabOptions = [
    { id: 'all', label: 'All Channels', icon: null, count: channelPosts.length },
    { id: 'youtube', label: 'YouTube Official', icon: Youtube, count: channelPosts.filter(p => p.platform === 'youtube').length },
    { id: 'instagram', label: 'Instagram Reels & Posts', icon: Instagram, count: channelPosts.filter(p => p.platform === 'instagram').length },
    { id: 'linkedin', label: 'LinkedIn Dispatches', icon: Linkedin, count: channelPosts.filter(p => p.platform === 'linkedin').length }
  ];

  const displayedPosts = activeChannelTab === 'all' 
    ? channelPosts 
    : channelPosts.filter(p => p.platform === activeChannelTab);

  return (
    <Page type="resources-media" title="Official Channels &amp; Media Broadcasts" lead="Official YouTube field broadcasts, Instagram engineering reels, and LinkedIn dispatches directly from Propecare Infra Projects." image={solar}>
      {/* Official Social Media Channels Showcase */}
      <div className="social-channels-section">
        <div className="social-channels-header">
          <div>
            <span className="kicker">OFFICIAL DIGITAL BROADCASTS &amp; SOCIAL CHANNELS</span>
            <h2>Follow Propecare on Official Channels</h2>
            <p>Subscribe and follow our verified accounts for weekly 4K drone sweeps, heavy haulage convoy documentaries, and corporate execution notices.</p>
          </div>
        </div>

        <div className="social-channels-grid">
          {socialChannels.map((sc) => {
            const ChannelIcon = sc.platform === 'youtube' ? Youtube : sc.platform === 'instagram' ? Instagram : Linkedin;
            return (
              <div className={`social-channel-card social-channel-${sc.platform}`} key={sc.platform}>
                <div className="channel-card-top">
                  <div className="channel-icon-badge">
                    <ChannelIcon size={26} />
                  </div>
                  <span className="channel-badge-pill">{sc.badge}</span>
                </div>
                <h3 className="channel-name">{sc.name}</h3>
                <span className="channel-handle">{sc.handle} · {sc.subscribers}</span>
                <p className="channel-desc">{sc.desc}</p>
                <div className="channel-footer">
                  <small className="channel-stats">{sc.stats}</small>
                  <a href={sc.url} target="_blank" rel="noopener noreferrer" className="channel-btn">
                    <span>{sc.actionText}</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Channel Releases & Video Feed */}
      <div className="channel-feed-section">
        <div className="channel-feed-header">
          <div>
            <span className="kicker">OFFICIAL UPLOADS &amp; BROADCASTS</span>
            <h2>Latest Features Across Our Channels</h2>
            <p>Explore recent 4K video documentaries, site reels, and technical dispatches published on our YouTube, Instagram, and LinkedIn channels.</p>
          </div>
        </div>

        {/* Channel Filter Toolbar */}
        <div className="channel-filter-toolbar">
          <div className="channel-filter-pills">
            {tabOptions.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`channel-filter-pill ${activeChannelTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveChannelTab(tab.id)}
                >
                  {TabIcon && <TabIcon size={16} />}
                  <span>{tab.label}</span>
                  <span className="channel-pill-count">{tab.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Official Channel Posts */}
        <div className="unified-media-grid">
          {displayedPosts.map((item: any, idx: number) => {
            const isVideo = item.videoUrl;
            const PlatformIcon = item.platform === 'youtube' ? Youtube : item.platform === 'instagram' ? Instagram : Linkedin;

            return (
              <div 
                className={`unified-media-card card-platform-${item.platform}`} 
                key={item.id || idx}
                onClick={() => setLightboxItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxItem(item)}
              >
                <div className="media-thumbnail-wrapper">
                  <img
                    src={item.poster}
                    alt={item.title}
                    loading="lazy"
                    className="card-media-img"
                  />

                  {isVideo && (
                    <div className="play-button-overlay">
                      <Play size={24} fill="white" strokeWidth={0} />
                    </div>
                  )}

                  {item.duration && (
                    <span className="media-duration-tag">
                      <Clock size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'3px'}}/>
                      {item.duration}
                    </span>
                  )}

                  <span className={`media-badge badge-${item.platform}`}>
                    <PlatformIcon size={12} />
                    <span>{item.tag}</span>
                  </span>
                </div>

                <div className="media-card-info">
                  <div className="media-card-subtitle-row">
                    <span className="media-card-project-pill">{item.subtitle}</span>
                    {item.metrics && <span className="media-card-metrics-pill">{item.metrics}</span>}
                  </div>
                  <h4 className="media-card-title">{item.title}</h4>
                  <p className="media-card-desc">{item.description}</p>
                  <div className="media-card-footer">
                    <span className="media-action-hint">
                      <Play size={13} style={{display:'inline',verticalAlign:'middle',marginRight:'4px'}}/>
                      Preview
                    </span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="media-card-external-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Open on {item.platform === 'youtube' ? 'YouTube' : item.platform === 'instagram' ? 'Instagram' : 'LinkedIn'}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal Lightbox */}
      {lightboxItem && (
        <div 
          className="media-lightbox-overlay" 
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close-btn"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
            <div className="lightbox-media-container">
              {lightboxItem.videoUrl ? (
                <video
                  src={lightboxItem.videoUrl}
                  poster={lightboxItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="lightbox-player"
                />
              ) : (
                <img
                  src={lightboxItem.poster}
                  alt={lightboxItem.title}
                  className="lightbox-image"
                />
              )}
            </div>
            <div className="lightbox-details">
              <div className="lightbox-header-row">
                <div>
                  <span className="lightbox-category-tag">
                    {lightboxItem.subtitle} · {lightboxItem.tag}
                  </span>
                  <h3>{lightboxItem.title}</h3>
                </div>
                <a 
                  href={lightboxItem.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button light"
                  style={{padding:'9px 18px',fontSize:'13px',display:'inline-flex',alignItems:'center',gap:'6px'}}
                >
                  <span>Open on {lightboxItem.platform === 'youtube' ? 'YouTube' : lightboxItem.platform === 'instagram' ? 'Instagram' : 'LinkedIn'}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              <p>{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}

function UpdatesPage() {
  return (
    <Page type="resources-updates" title="Official Updates &amp; Project Milestones" lead="Official project notices, grid synchronisation milestones, fleet additions, and corporate safety records." image={transmission}>
      <div className="updates-page-container">
        <div className="updates-hero-block">
          <span className="kicker">OFFICIAL DISPATCHES &amp; MILESTONES</span>
          <h2>Timely Project Execution Notices &amp; Industry Bulletins</h2>
          <p>Real-time log of our operational achievements, statutory approvals, grid interconnections, and heavy haulage dispatches across Tamil Nadu and regional corridors.</p>
        </div>

        <div className="updates-feed">
          {newsUpdates.map((item) => (
            <article className="update-card" key={item.id}>
              <div className="update-card-img">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="update-tag-pill">{item.tag}</span>
              </div>
              <div className="update-card-body">
                <div className="update-card-header">
                  <span className="update-category-badge">{item.category}</span>
                  <time className="update-date">
                    <Calendar size={13} style={{display:'inline',verticalAlign:'middle',marginRight:'4px'}}/>
                    <span>{item.date}</span>
                  </time>
                </div>
                <h3 className="update-title">{item.title}</h3>
                <p className="update-summary">{item.summary}</p>
                
                <div className="update-highlights-box">
                  <span className="highlights-header">Key Execution Highlights:</span>
                  <div className="update-highlights-list">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="update-highlight-item">
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="update-card-footer">
                  <span className="update-location">
                    <MapPin size={15} style={{display:'inline',verticalAlign:'middle',marginRight:'4px'}}/>
                    <span>{item.location}</span>
                  </span>
                  <Link to={item.link || "/contact"} className="update-action-btn">
                    <span>View Project Scope</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Page>
  );
}



function IndustryReferences() {
  return (
    <Page type="resources-research" title="Industry References" lead="A researched reference set behind Propercare’s renewable, logistics and EPC positioning." image={grid}>
      <div className="research-intro">
        <span className="kicker">MARKET RESEARCH / 2026</span>
        <h2>What leading renewable and specialist logistics sites are doing well.</h2>
        <p>We reviewed industry benchmarks to identify useful patterns: service-led navigation, project case studies, route and cargo planning, technology/product depth, local solar conversion journeys, sustainability reporting and clear contact paths. These references inform Propercare’s content architecture.</p>
      </div>
      <div className="research-grid">
        {research.map((r, i) => (
          <article key={r.name}>
            <span>0{i + 1}</span>
            <div>
              <small>{r.category}</small>
              <h3>{r.name}</h3>
              <p>{r.learning}</p>
              <a href={r.url} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>Visit reference</span><ExternalLink size={13}/></a>
            </div>
          </article>
        ))}
      </div>
      <div className="research-principles">
        <h3>Applied to Propercare</h3>
        <div><b>Service depth</b><span>Separate pages for EPC, evacuation, substations and commissioning.</span></div>
        <div><b>Project evidence</b><span>Sector pages and delivery sequences rather than generic capability cards.</span></div>
        <div><b>Local relevance</b><span>Content shaped for Tamil Nadu renewable and industrial project conditions.</span></div>
        <div><b>Trust signals</b><span>Clear scope, safety, testing, documentation and enquiry pathways.</span></div>
      </div>
    </Page>
  );
}

function Article() {
 const {slug}=useParams();
 const article=articles.find(a=>a.slug===slug)??articles[0];
 return <Page type="article" title={article.title} lead={article.text} image={article.image}>
   <article className="article-detail">
     <div className="article-detail-head"><div><span className="kicker">{article.tag} / {article.date}</span><h2>{article.title}</h2></div><div><b>{article.readTime}</b><span>Research-led editorial</span></div></div>
     <p className="article-dek">{article.text}</p>
     <div className="article-content">{article.content.map(([heading,body])=><section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}</div>
     <div className="article-source"><span>PRIMARY REFERENCE</span><div><b>{article.sourceName}</b><a href={article.source} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>Open source</span><ExternalLink size={13}/></a></div></div>
     <div className="article-next"><Link className="button" to="/resources/blog">More articles</Link><Link className="text-link" to="/contact" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}><span>Discuss a project</span><ArrowRight size={14}/></Link></div>
   </article>
 </Page>;
}

function Clients() {
 return <Page type="clients" title="Our Clients" lead="A partnership model for developers, EPCs, manufacturers, operators and infrastructure stakeholders." image={solar}>
   <div className="clients-opening">
     <div>
       <span className="kicker">WHO WE SUPPORT</span>
       <h2>Built around the people who have to make the project work.</h2>
     </div>
     <p>Propercare should not claim relationships it has not earned. Instead, this page explains the stakeholder groups we are designed to support and the information each group needs from a project partner.</p>
   </div>
   <div className="stakeholder-grid">{clients.map((c,i)=><article key={c.name}><span>0{i+1}</span><h3>{c.name}</h3><p>{c.need}</p><b>{c.value}</b></article>)}</div>
   <div className="client-proof"><div><span className="kicker">FOR DEVELOPERS & OWNERS</span><h3>Visibility on scope, progress, risk and readiness.</h3><p>Use Propercare when coordination across multiple delivery interfaces needs one practical point of contact.</p></div><div><span className="kicker">FOR EPC & OEM PARTNERS</span><h3>Execution support that respects your engineering package.</h3><p>Bring us the defined scope and site constraints; we focus on the field, logistics and handover interfaces around it.</p></div></div>
 </Page>;
}

function Contact() {
 const [sent,setSent]=useState(false);
 return <Page type="contact" title="Contact Us" lead="Start with the project facts. We will help identify the right delivery package." image={transmission}>
  <div className="contact-command"><div><span className="kicker">PROJECT DESK</span><h2>Tell us what needs to move, build, connect or commission.</h2><p>Useful inputs include project location, asset type, approximate capacity or dimensions, current phase, target dates and any known access or grid constraints.</p><div className="contact-details"><b>+91 9790005158</b><span>propecareindia@gmail.com</span><span>Karur, Tamil Nadu, India</span></div></div>
   <form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="form-heading"><span>ENQUIRY</span><b>{sent?'Thank you - enquiry captured.':'Project information'}</b></div><label>Name<input required placeholder="Your name"/></label><label>Company<input required placeholder="Company / organisation"/></label><label>Work email<input required type="email" placeholder="name@company.com"/></label><label>Phone<input type="tel" placeholder="+91 XXXXX XXXXX"/></label><label>Requirement<select defaultValue=""><option value="" disabled>Select a requirement</option><option>Solar EPC / electrical works</option><option>Wind infrastructure</option><option>Heavy transport / ODC logistics</option><option>Power evacuation</option><option>Substation / switchyard</option><option>Testing &amp; commissioning</option></select></label><label>Project details<textarea rows={5} placeholder="Location, scope, capacity, cargo dimensions, route or target date"/></label><button className="button" type="submit">{sent?'Enquiry submitted ✓':'Send project enquiry'}</button></form></div>
  <div className="contact-gallery"><span className="kicker">OUR TEAM AT WORK</span><h3>Solar infrastructure delivery across Tamil Nadu.</h3><div className="contact-gallery-grid"><div className="contact-gallery-card"><img src="/images/propecare-site-1.jpg" alt="Worker installing solar mounting structure on site"/><small>SITE WORK</small><span>Mounting Structure Installation</span></div><div className="contact-gallery-card"><img src="/images/propecare-site-2.jpg" alt="Propecare branded crew working on solar infrastructure"/><small>FIELD TEAM</small><span>Propecare Crew On-Site</span></div><div className="contact-gallery-card"><img src="/images/propecare-site-3.jpg" alt="Team pouring cement for solar panel foundations"/><small>FOUNDATION</small><span>Solar Foundation Works</span></div></div></div>
  <div className="contact-route"><span>WHAT HAPPENS NEXT</span><div><b>01 / Review</b><p>We understand the scope and missing inputs.</p></div><div><b>02 / Discuss</b><p>We clarify site, route, engineering and schedule constraints.</p></div><div><b>03 / Define</b><p>We identify the appropriate package and next technical step.</p></div></div>
 </Page>;
}

function Page({type,title,lead,image,children}:{type:string;title:string;lead:string;image:string;children:ReactNode}) {
 return <><section className={'page-masthead page-masthead--'+type}><img className="page-masthead-image" src={image} alt=""/><div className="page-masthead-overlay"/><div className="wrap page-masthead-content"><span className="kicker">PROPECARE / {type.replace('-',' ').toUpperCase()}</span><h1>{title}</h1><p>{lead}</p><div className="masthead-actions"><Link className="button light" to="/contact">Discuss a project</Link><span>Solar · Wind · EPC · Logistics</span></div></div><div className="masthead-index"><span>{type==='about'?'01':type==='work'?'02':type.includes('service')?'03':type.includes('resources')?'04':type==='clients'?'05':type==='contact'?'06':'07'}</span><span>FIELD-READY INFRASTRUCTURE</span></div></section><main className={'page-body page-body--'+type}>{children}</main></>;
}

export default function App(){
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/works/projects/:projectId" element={<ProjectDetail/>}/>
        <Route path="/works/:slug" element={<Work/>}/>
        <Route path="/services" element={<Solutions/>}/>
        <Route path="/services/:slug" element={<Service/>}/>
        <Route path="/resources" element={<BlogsPage/>}/>
        <Route path="/resources/blogs" element={<BlogsPage/>}/>
        <Route path="/resources/blog" element={<BlogsPage/>}/>
        <Route path="/resources/media" element={<MediaPage/>}/>
        <Route path="/resources/updates" element={<UpdatesPage/>}/>
        <Route path="/resources/industry-references" element={<IndustryReferences/>}/>
        <Route path="/resources/blog/:slug" element={<Article/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
