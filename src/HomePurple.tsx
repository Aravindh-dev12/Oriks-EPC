import { motion } from 'framer-motion';
import { ArrowRight, Building2, Cable, CheckCircle2, ShieldCheck, Sun, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from './components';
import EnergyFooterFinal from './EnergyFooterFinal';
import { insights, services } from './data';

const stockVideos = {
  hero: 'https://videos.pexels.com/video-files/9906462/9906462-uhd_3840_2160_30fps.mp4',
  renewable: 'https://videos.pexels.com/video-files/9789657/9789657-uhd_2160_3840_30fps.mp4',
  solar: 'https://videos.pexels.com/video-files/7211102/7211102-uhd_3840_2160_30fps.mp4',
  substation: 'https://videos.pexels.com/video-files/10151854/10151854-hd_1920_1080_24fps.mp4',
};

const solutionMeta = [
  { slug: 'renewable-epc-ebop', icon: Wind, index: '01' },
  { slug: 'power-evacuation', icon: Zap, index: '02' },
  { slug: 'pooling-substations-switchyards', icon: Building2, index: '03' },
  { slug: 'transmission-infrastructure', icon: Cable, index: '04' },
  { slug: 'testing-commissioning-grid-synchronisation', icon: CheckCircle2, index: '05' },
  { slug: 'operations-maintenance', icon: ShieldCheck, index: '06' },
];

const mediaStories = [
  {
    eyebrow: 'Wind + Solar',
    title: 'Renewable generation needs dependable electrical infrastructure.',
    text: 'Electrical BoP, collection systems, substations and evacuation packages create the path from renewable generation to a grid-ready asset.',
    video: stockVideos.renewable,
    poster: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=86',
    link: '/services/renewable-epc-ebop',
  },
  {
    eyebrow: 'Power Evacuation',
    title: 'From the pooling point to the utility grid.',
    text: 'Transmission routes, bay interfaces, protection, metering and synchronisation are presented as one connected project journey.',
    video: stockVideos.hero,
    poster: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=86',
    link: '/services/power-evacuation',
  },
  {
    eyebrow: 'Substations + Commissioning',
    title: 'Show the work behind safe energisation.',
    text: 'Primary equipment, protection, control, testing and handover should be visible to technical buyers before the first project conversation.',
    video: stockVideos.substation,
    poster: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1800&q=86',
    link: '/services/pooling-substations-switchyards',
  },
];

function VideoMedia({ src, poster, className = '' }: { src: string; poster: string; className?: string }) {
  return (
    <div className={`hp-video-media ${className}`}>
      <img src={poster} alt="" />
      <video autoPlay muted loop playsInline preload="metadata" poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function HomePurple() {
  return (
    <>
      <Header />
      <main className="hp-home">
        <section className="hp-hero">
          <VideoMedia src={stockVideos.hero} poster="/images/oriks-home-reference.webp" className="hp-hero-media" />
          <div className="hp-hero-shade" />
          <div className="container hp-hero-inner">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="hp-hero-copy">
              <span className="hp-kicker">Renewable EPC · Power Evacuation · Grid Infrastructure</span>
              <h1>Engineering the connection <em>from generation to grid.</em></h1>
              <p>ORIKS Energy Care presents renewable and electrical-infrastructure capability through strong project media, technical scope, measurable proof and clear project enquiries.</p>
              <div className="hp-actions">
                <Link to="/services" className="hp-button hp-primary">Explore solutions <ArrowRight size={17} /></Link>
                <Link to="/projects" className="hp-button hp-glass">View project format <ArrowRight size={17} /></Link>
              </div>
            </motion.div>
          </div>
          <div className="hp-hero-bottom">
            <div className="container hp-hero-bottom-grid">
              <span>Wind EPC & EBoP</span><span>Solar EPC</span><span>Power Evacuation</span><span>Substations</span><span>Transmission</span><span>Testing & O&M</span>
            </div>
          </div>
        </section>

        <section className="hp-intro">
          <div className="container hp-intro-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="hp-kicker hp-kicker-dark">ORIKS Energy Care</span>
              <h2>Build confidence before the first technical meeting.</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p>A serious EPC website should work like a company profile, technical brochure and project portfolio in one place. A potential client should quickly understand what ORIKS does, what part of the renewable-to-grid chain it supports, and how to start a project conversation.</p>
              <Link className="hp-text-link" to="/about">Who we are <ArrowRight size={15} /></Link>
            </motion.div>
          </div>
        </section>

        <section className="hp-media-stories">
          {mediaStories.map((story, index) => (
            <article className="hp-story" key={story.title}>
              <VideoMedia src={story.video} poster={story.poster} />
              <div className="hp-story-shade" />
              <div className="container hp-story-copy">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="hp-story-index">0{index + 1}</span>
                  <span className="hp-kicker">{story.eyebrow}</span>
                  <h2>{story.title}</h2>
                  <p>{story.text}</p>
                  <Link to={story.link} className="hp-button hp-glass">Explore capability <ArrowRight size={17} /></Link>
                </motion.div>
              </div>
            </article>
          ))}
        </section>

        <section className="hp-section hp-solutions">
          <div className="container hp-section-head">
            <div><span className="hp-kicker hp-kicker-dark">Our Solutions</span><h2>Technical pages built around real project interfaces.</h2></div>
            <p>Each solution has its own page, so buyers can move from broad capability into detailed scope instead of reading one generic services list.</p>
          </div>
          <div className="container hp-solution-grid">
            {solutionMeta.map(({ slug, icon: Icon, index }) => {
              const service = services.find(s => s.slug === slug)!;
              return <motion.article key={slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="hp-solution-top"><span>{index}</span><Icon size={24} /></div>
                <h3>{service.title}</h3><p>{service.short}</p>
                <Link to={`/services/${slug}`}>Learn more <ArrowRight size={15} /></Link>
              </motion.article>;
            })}
          </div>
        </section>

        <section className="hp-industries">
          <div className="container hp-section-head hp-light-head">
            <div><span className="hp-kicker">Industries We Focus</span><h2>Renewable generation and power infrastructure.</h2></div>
            <p>Use large media and direct technical pathways, similar to established infrastructure-company websites, while keeping ORIKS’s own identity and scope.</p>
          </div>
          <div className="container hp-industry-grid">
            <Link to="/services/renewable-epc-ebop" className="hp-industry-card hp-industry-wide">
              <VideoMedia src={stockVideos.solar} poster="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=86" />
              <div className="hp-card-shade" /><div className="hp-industry-copy"><Sun size={24}/><span>Solar + Hybrid</span><h3>Plant electrical systems and grid interconnection.</h3><strong>Explore <ArrowRight size={15}/></strong></div>
            </Link>
            <Link to="/services/power-evacuation" className="hp-industry-card">
              <VideoMedia src={stockVideos.hero} poster="https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1400&q=84" />
              <div className="hp-card-shade" /><div className="hp-industry-copy"><Zap size={24}/><span>Power T&D</span><h3>Evacuation lines, bays and utility interfaces.</h3><strong>Explore <ArrowRight size={15}/></strong></div>
            </Link>
            <Link to="/services/pooling-substations-switchyards" className="hp-industry-card">
              <VideoMedia src={stockVideos.substation} poster="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=84" />
              <div className="hp-card-shade" /><div className="hp-industry-copy"><Building2 size={24}/><span>Substations</span><h3>Protection, metering, switchyards and energisation.</h3><strong>Explore <ArrowRight size={15}/></strong></div>
            </Link>
          </div>
        </section>

        <section className="hp-proof">
          <div className="container hp-proof-grid">
            <div><span className="hp-kicker">Project Evidence</span><h2>Show numbers that technical buyers can verify.</h2><p>When ORIKS approves the data, replace generic claims with actual project capacity, voltage levels, substation ratings, transmission length, locations, clients and executed scope.</p><Link to="/projects" className="hp-text-link hp-text-link-light">Project portfolio <ArrowRight size={15}/></Link></div>
            <div className="hp-proof-matrix">
              {['MW Project Capacity','kV Voltage Level','MVA Substation Rating','km Transmission Length','Project Location','Executed Scope'].map(item => <div key={item}><strong>{item.split(' ')[0]}</strong><span>{item.substring(item.indexOf(' ') + 1)}</span></div>)}
            </div>
          </div>
        </section>

        <section className="hp-section hp-case-studies">
          <div className="container hp-section-head"><div><span className="hp-kicker hp-kicker-dark">Case Studies</span><h2>Turn project execution into business-development proof.</h2></div><p>NTC’s case-study model works because it makes completed work easy to understand. ORIKS can do the same with its own verified projects, scope, photos and commissioning outcomes.</p></div>
          <div className="container hp-case-grid">
            <Link to="/projects" className="hp-case-feature"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=86" alt=""/><div><span>Wind power evacuation</span><h3>Capacity + voltage + substation + transmission + commissioning.</h3><p>One clear technical story instead of a gallery of unexplained photographs.</p><strong>View case-study format <ArrowRight size={15}/></strong></div></Link>
            <div className="hp-case-side">
              <Link to="/projects"><span>Substation & transmission</span><h3>Show responsibility at every interface.</h3><strong>Explore <ArrowRight size={15}/></strong></Link>
              <Link to="/projects"><span>Solar grid interconnection</span><h3>Make completed work useful in the next sales conversation.</h3><strong>Explore <ArrowRight size={15}/></strong></Link>
            </div>
          </div>
        </section>

        <section className="hp-sustainability">
          <div className="container hp-sustainability-grid">
            <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span className="hp-kicker">Safety · Quality · Sustainability</span><h2>Reliable infrastructure starts with disciplined execution.</h2><p>Give safety, inspection, testing, documentation and environmental responsibility their own corporate space instead of hiding them inside a service paragraph.</p><Link to="/sustainability" className="hp-button hp-glass">Our approach <ArrowRight size={17}/></Link></motion.div>
            <VideoMedia src={stockVideos.substation} poster="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=84" />
          </div>
        </section>

        <section className="hp-section hp-insights">
          <div className="container hp-section-head"><div><span className="hp-kicker hp-kicker-dark">Insights & Articles</span><h2>Keep the website active with useful technical content.</h2></div><p>Articles help technical buyers understand the work and give ORIKS a place to publish knowledge, project updates and future company news.</p></div>
          <div className="container hp-insight-grid">
            {insights.slice(0, 3).map((article, index) => <motion.div key={article.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Link to={`/insights/${article.slug}`}><span>0{index + 1} · {article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><strong>Read article <ArrowRight size={15}/></strong></Link></motion.div>)}
          </div>
          <div className="container hp-all-insights"><Link className="hp-text-link" to="/insights">View all insights <ArrowRight size={15}/></Link></div>
        </section>

        <section className="hp-careers">
          <div className="container hp-careers-grid"><div><span className="hp-kicker">Careers at ORIKS</span><h2>People, engineering and execution build every successful project.</h2><p>Use this space for approved site-team stories, training, engineering roles and future vacancies.</p></div><Link to="/careers" className="hp-button hp-light">Explore careers <ArrowRight size={17}/></Link></div>
        </section>

        <section className="hp-conversation">
          <div className="container hp-conversation-grid"><div><span className="hp-kicker hp-kicker-dark">Start the Conversation</span><h2>Have an upcoming renewable or power-infrastructure project?</h2><p>Share the project type, location, MW/MVA capacity, voltage level, grid interface and current stage.</p></div><div className="hp-enquiry-card"><strong>Project Enquiry</strong><span>Wind / Solar / Hybrid</span><span>Power Evacuation / Substation</span><span>Transmission / Grid Connectivity</span><span>Testing / Commissioning / O&M</span><Link to="/contact" className="hp-button hp-primary">Send project brief <ArrowRight size={17}/></Link></div></div>
        </section>
      </main>
      <EnergyFooterFinal />
    </>
  );
}
