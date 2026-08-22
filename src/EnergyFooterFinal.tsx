import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand } from './components';

type RotorProps = {
  className: string;
  duration: string;
  delay?: string;
};

function Rotor({ className, duration, delay = '0s' }: RotorProps) {
  return (
    <span className={`ef-photo-rotor ${className}`} style={{ '--rotor-duration': duration, '--rotor-delay': delay } as React.CSSProperties}>
      <i className="ef-photo-hub" />
      <i className="ef-photo-blade ef-photo-blade-a" />
      <i className="ef-photo-blade ef-photo-blade-b" />
      <i className="ef-photo-blade ef-photo-blade-c" />
    </span>
  );
}

export default function EnergyFooterFinal() {
  return (
    <footer className="ef-footer">
      <div className="ef-photo-scene" aria-hidden="true">
        <img
          src="/images/oriks-footer-panorama.webp"
          alt=""
          className="ef-photo"
          loading="lazy"
          decoding="async"
        />
        <div className="ef-photo-sky-wash" />
        <Rotor className="ef-rotor-main" duration="18.5s" />
        <Rotor className="ef-rotor-left" duration="22s" delay="-4s" />
        <Rotor className="ef-rotor-mid-left" duration="20.5s" delay="-7s" />
        <Rotor className="ef-rotor-mid" duration="24s" delay="-2s" />
        <Rotor className="ef-rotor-right" duration="21s" delay="-9s" />
        <span className="ef-photo-energy-line ef-photo-energy-line-one" />
        <span className="ef-photo-energy-line ef-photo-energy-line-two" />
      </div>

      <div className="ef-content">
        <div className="container ef-grid">
          <div className="ef-brand">
            <Brand />
            <p>Renewable EPC, power evacuation and electrical infrastructure for solar, wind and grid-connectivity projects.</p>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About ORIKS</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/safety-quality">Safety & Quality</Link>
          </div>
          <div>
            <h4>Capabilities</h4>
            <Link to="/services">Power Evacuation</Link>
            <Link to="/services">Substations</Link>
            <Link to="/services">Transmission</Link>
            <Link to="/services">Grid Connectivity</Link>
          </div>
          <div>
            <h4>Registered Office</h4>
            <p>58/1, Ramanujanagar, Sengunthapuram, Karur, Tamil Nadu, India — 639002.</p>
            <Link className="ef-contact" to="/contact">Discuss a project <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="container ef-bottom">
          <span>© {new Date().getFullYear()} ORIKS Energy Care Pvt Ltd.</span>
          <span>Engineering the connection from generation to grid.</span>
        </div>
      </div>
    </footer>
  );
}
