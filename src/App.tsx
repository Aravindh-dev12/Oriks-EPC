import { useState, useRef, useEffect, type ReactNode } from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { ArrowUpRight, SunMedium, Zap, Factory, Truck, Wind, CheckCircle2, Building2, MapPin, ShieldCheck, Play, ArrowLeft } from 'lucide-react';
import { Header, Footer, HeroVideo, Section, MediaCard } from './components';
import { articles, clients, research, services, sectors, works } from './data';

const solar = 'https://images.pexels.com/photos/15751120/pexels-photo-15751120.jpeg?auto=compress&cs=tinysrgb&w=2200';
const grid = 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transmission = 'https://images.pexels.com/photos/14939042/pexels-photo-14939042.jpeg?auto=compress&cs=tinysrgb&w=2200';
const wind = 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=2200';
const transport = 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=2200';

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
        <div><p>It needs people who understand the interfaces between generation, electrical systems, access, transport, commissioning and the grid. Propercare brings those conversations together early so projects can move with fewer hand-offs.</p><Link className="text-link" to="/about">See how we work →</Link></div>
      </div>
      <div className="wrap home-stat-row">
        <div><b>01</b><span>Renewable infrastructure partner</span></div>
        <div><b>03</b><span>Primary work sectors</span></div>
        <div><b>04</b><span>Core delivery packages</span></div>
        <div><b>360°</b><span>Generation-to-grid view</span></div>
      </div>
    </section>

    <section className="home-sector-showcase">
      <div className="wrap"><Section eyebrow="02 / WHERE WE WORK" title="Three project environments. One practical delivery mindset." />
        <div className="sector-feature-grid">
          <Link className="sector-feature sector-feature--large" to="/works/solar"><img src={solar} alt="Solar infrastructure"/><div><span>01</span><h3>Solar</h3><p>Plant infrastructure, electrical balance-of-plant and power evacuation.</p></div></Link>
          <Link className="sector-feature" to="/works/windmill"><img src={wind} alt="Wind turbines"/><div><span>02</span><h3>Wind</h3><p>Electrical packages, site interfaces and movement of turbine components.</p></div></Link>
          <Link className="sector-feature" to="/works/transport"><img src={transport} alt="Heavy transport logistics"/><div><span>03</span><h3>Heavy movement</h3><p>ODC planning, route readiness and site delivery for critical equipment.</p></div></Link>
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
    <div className="about-band"><div><span className="kicker">WHAT WE LEARNED FROM THE MARKET</span><h3>The best renewable sites treat logistics, engineering and commissioning as one conversation.</h3></div><div><p>Across the industry, leading logistics specialists emphasise cargo analysis, route surveys, equipment selection and site readiness; renewable EPC companies emphasise design, construction, testing and long-term support; larger energy groups emphasise scale, reliability and sustainability. Propercare’s proposition sits at the intersection of those needs.</p><Link className="text-link" to="/resources/industry-references">View industry research →</Link></div></div>
    <div className="about-standards"><div><span>PROJECT DISCIPLINE</span><b>Scope before mobilisation</b><p>Clear inputs, responsibilities and acceptance criteria.</p></div><div><span>FIELD DISCIPLINE</span><b>Control the interfaces</b><p>Site, transport, electrical and contractor dependencies stay visible.</p></div><div><span>HANDOVER DISCIPLINE</span><b>Evidence before close</b><p>Testing, records and punch-list closure support confident handover.</p></div></div>
  </Page>;
}

function Works() {
  return <Page type="work" title="Our Works" lead="Sector-led project capabilities, built around the conditions that make renewable infrastructure difficult." image={solar}>
    <div className="works-intro"><div><span className="kicker">SECTOR MAP</span><h2>Different assets. Different risks. Different delivery logic.</h2></div><p>Solar has electrical and grid interfaces. Wind adds large components, access and heavy movement. Industrial transport is a route-engineering problem. Our pages separate these realities instead of treating them as one generic service.</p></div>
    <div className="works-stack">{works.map((w,i)=>{
      const WorkIcon = w.slug === 'solar' ? SunMedium : w.slug === 'windmill' ? Wind : Truck;
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
          <b>Explore sector ↗</b>
        </div>
      </Link>;
    })}</div>
    <div className="sector-strip">{sectors.map(s=><div key={s.name}><b>{s.name}</b><span>{s.focus}</span></div>)}</div>
  </Page>;
}

function Work() {
  const {slug}=useParams(); const work=works.find(w=>w.slug===slug)??works[0];
  const WorkIcon = work.slug === 'solar' ? SunMedium : work.slug === 'windmill' ? Wind : Truck;
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
                  <span className="view-project-link">View Project Scope &amp; Media →</span>
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

  const WorkIcon = parentWork.slug === 'solar' ? SunMedium : parentWork.slug === 'windmill' ? Wind : Truck;

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
            <h2>{foundProject.name} — {foundProject.capacity}</h2>
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
                {lightboxItem.subtitle && <span> — {lightboxItem.subtitle}</span>}
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
    <div className="solutions-intro"><span className="kicker">CAPABILITY ARCHITECTURE</span><h2>Choose the package. Keep the interfaces connected.</h2><p>Rather than presenting one oversized list of services, Propercare groups work around the decisions clients actually make: build the plant, evacuate the power, establish the substation, or get the asset tested and ready for operation.</p></div>
    <div className="solution-cards">{services.map((s,i)=><Link to={'/services/'+s.slug} key={s.slug} className="solution-card"><img src={s.image} alt={s.title}/><div><span>0{i+1} / SOLUTION</span><h3>{s.title}</h3><p>{s.short}</p><b>See scope →</b></div></Link>)}</div>
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

function Resources({kind='all'}:{kind?:string}) {
 if(kind==='industry-references') return <Page type="resources-research" title="Industry References" lead="A researched reference set behind Propercare’s renewable, logistics and EPC positioning." image={grid}>
   <div className="research-intro"><span className="kicker">MARKET RESEARCH / 2026</span><h2>What leading renewable and specialist logistics sites are doing well.</h2><p>We reviewed the sites you supplied to identify useful patterns: service-led navigation, project case studies, route and cargo planning, technology/product depth, local solar conversion journeys, sustainability reporting and clear contact paths. These references inform Propercare’s content architecture; they are not Propercare partners or clients.</p></div>
   <div className="research-grid">{research.map((r,i)=><article key={r.name}><span>0{i+1}</span><div><small>{r.category}</small><h3>{r.name}</h3><p>{r.learning}</p><a href={r.url} target="_blank" rel="noreferrer">Visit reference ↗</a></div></article>)}</div>
   <div className="research-principles"><h3>Applied to Propercare</h3><div><b>Service depth</b><span>Separate pages for EPC, evacuation, substations and commissioning.</span></div><div><b>Project evidence</b><span>Sector pages and delivery sequences rather than generic capability cards.</span></div><div><b>Local relevance</b><span>Content shaped for Tamil Nadu renewable and industrial project conditions.</span></div><div><b>Trust signals</b><span>Clear scope, safety, testing, documentation and enquiry pathways.</span></div></div>
 </Page>;
 const filtered=kind==='blogs'?articles.filter(a=>a.tag!=='UPDATES'):kind==='updates'?articles.filter(a=>a.tag==='UPDATES'):articles;
 const title=kind==='blogs'?'Blogs':kind==='media'?'Media':kind==='updates'?'New Updates':'Resources';
 return <Page type="resources" title={title} lead="Field perspectives, project education and renewable-market context." image={grid}>
   <div className="resource-header"><span className="kicker">PROPECARE / INSIGHTS</span><h2>Useful information before the next project decision.</h2><p>Our resource layer turns project experience and market research into practical guidance: route planning, EPC interfaces, electrical scope, commissioning and renewable project readiness.</p></div>
   <div className="articles-grid">{filtered.map(a=><article className="article-card" key={a.slug}><img src={a.image} alt={a.title}/><div><span className="kicker">{a.tag} · {a.date}</span><h3>{a.title}</h3><p>{a.text}</p><div className="article-meta"><span>{a.readTime}</span><Link className="text-link" to={'/resources/blog/'+a.slug}>Read article →</Link></div></div></article>)}</div>
   <Link className="research-banner" to="/resources/industry-references"><span>MARKET RESEARCH</span><b>See the external industry references behind our new content strategy ↗</b></Link>
 </Page>;
}

function Article() {
 const {slug}=useParams();
 const article=articles.find(a=>a.slug===slug)??articles[0];
 return <Page type="article" title={article.title} lead={article.text} image={article.image}>
   <article className="article-detail">
     <div className="article-detail-head"><div><span className="kicker">{article.tag} / {article.date}</span><h2>{article.title}</h2></div><div><b>{article.readTime}</b><span>Research-led editorial</span></div></div>
     <p className="article-dek">{article.text}</p>
     <div className="article-content">{article.content.map(([heading,body])=><section key={heading}><h3>{heading}</h3><p>{body}</p></section>)}</div>
     <div className="article-source"><span>PRIMARY REFERENCE</span><div><b>{article.sourceName}</b><a href={article.source} target="_blank" rel="noreferrer">Open source ↗</a></div></div>
     <div className="article-next"><Link className="button" to="/resources/blog">More articles</Link><Link className="text-link" to="/contact">Discuss a project →</Link></div>
   </article>
 </Page>;
}

function Clients() {
 return <Page type="clients" title="Our Clients" lead="A partnership model for developers, EPCs, manufacturers, operators and infrastructure stakeholders." image={solar}>
   <div className="clients-opening"><span className="kicker">WHO WE SUPPORT</span><h2>Built around the people who have to make the project work.</h2><p>Propercare should not claim relationships it has not earned. Instead, this page explains the stakeholder groups we are designed to support and the information each group needs from a project partner.</p></div>
   <div className="stakeholder-grid">{clients.map((c,i)=><article key={c.name}><span>0{i+1}</span><h3>{c.name}</h3><p>{c.need}</p><b>{c.value}</b></article>)}</div>
   <div className="client-proof"><div><span className="kicker">FOR DEVELOPERS & OWNERS</span><h3>Visibility on scope, progress, risk and readiness.</h3><p>Use Propercare when coordination across multiple delivery interfaces needs one practical point of contact.</p></div><div><span className="kicker">FOR EPC & OEM PARTNERS</span><h3>Execution support that respects your engineering package.</h3><p>Bring us the defined scope and site constraints; we focus on the field, logistics and handover interfaces around it.</p></div></div>
 </Page>;
}

function Contact() {
 const [sent,setSent]=useState(false);
 return <Page type="contact" title="Contact Us" lead="Start with the project facts. We will help identify the right delivery package." image={transmission}>
  <div className="contact-command"><div><span className="kicker">PROJECT DESK</span><h2>Tell us what needs to move, build, connect or commission.</h2><p>Useful inputs include project location, asset type, approximate capacity or dimensions, current phase, target dates and any known access or grid constraints.</p><div className="contact-details"><b>+91 9790005158</b><span>propecareindia@gmail.com</span><span>Karur, Tamil Nadu, India</span></div></div>
  <form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="form-heading"><span>ENQUIRY</span><b>{sent?'Thank you — enquiry captured.':'Project information'}</b></div><label>Name<input required placeholder="Your name"/></label><label>Company<input required placeholder="Company / organisation"/></label><label>Work email<input required type="email" placeholder="name@company.com"/></label><label>Phone<input type="tel" placeholder="+91 XXXXX XXXXX"/></label><label>Requirement<select defaultValue=""><option value="" disabled>Select a requirement</option><option>Solar EPC / electrical works</option><option>Wind infrastructure</option><option>Heavy transport / ODC logistics</option><option>Power evacuation</option><option>Substation / switchyard</option><option>Testing &amp; commissioning</option></select></label><label>Project details<textarea rows={5} placeholder="Location, scope, capacity, cargo dimensions, route or target date"/></label><button className="button" type="submit">{sent?'Enquiry submitted ✓':'Send project enquiry'}</button></form></div>
  <div className="contact-gallery"><span className="kicker">OUR TEAM AT WORK</span><h3>Solar infrastructure delivery across Tamil Nadu.</h3><div className="contact-gallery-grid"><div className="contact-gallery-card"><img src="/images/propecare-site-1.jpg" alt="Worker installing solar mounting structure on site"/><small>SITE WORK</small><span>Mounting Structure Installation</span></div><div className="contact-gallery-card"><img src="/images/propecare-site-2.jpg" alt="Propecare branded crew working on solar infrastructure"/><small>FIELD TEAM</small><span>Propecare Crew On-Site</span></div><div className="contact-gallery-card"><img src="/images/propecare-site-3.jpg" alt="Team pouring cement for solar panel foundations"/><small>FOUNDATION</small><span>Solar Foundation Works</span></div></div></div>
  <div className="contact-route"><span>WHAT HAPPENS NEXT</span><div><b>01 / Review</b><p>We understand the scope and missing inputs.</p></div><div><b>02 / Discuss</b><p>We clarify site, route, engineering and schedule constraints.</p></div><div><b>03 / Define</b><p>We identify the appropriate package and next technical step.</p></div></div>
 </Page>;
}

function Page({type,title,lead,image,children}:{type:string;title:string;lead:string;image:string;children:ReactNode}) {
 return <><section className={'page-masthead page-masthead--'+type}><img className="page-masthead-image" src={image} alt=""/><div className="page-masthead-overlay"/><div className="wrap page-masthead-content"><span className="kicker">PROPECARE / {type.replace('-',' ').toUpperCase()}</span><h1>{title}</h1><p>{lead}</p><div className="masthead-actions"><Link className="button light" to="/contact">Discuss a project</Link><span>Solar · Wind · EPC · Logistics</span></div></div><div className="masthead-index"><span>{type==='about'?'01':type==='work'?'02':type.includes('service')?'03':type.includes('resources')?'04':type==='clients'?'05':type==='contact'?'06':'07'}</span><span>FIELD-READY INFRASTRUCTURE</span></div></section><main className={'page-body page-body--'+type}>{children}</main></>;
}

export default function App(){return <><ScrollToTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/works" element={<Works/>}/><Route path="/works/projects/:projectId" element={<ProjectDetail/>}/><Route path="/works/:slug" element={<Work/>}/><Route path="/services" element={<Solutions/>}/><Route path="/services/:slug" element={<Service/>}/><Route path="/resources" element={<Resources/>}/><Route path="/resources/blog/:slug" element={<Article/>}/><Route path="/resources/:kind" element={<Resources/>}/><Route path="/clients" element={<Clients/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></>}
