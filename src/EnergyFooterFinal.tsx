import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand } from './components';

export default function EnergyFooterFinal() {
  return (
    <footer className="ef-footer">
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
            <Link to="/services/power-evacuation">Power Evacuation</Link>
            <Link to="/services/pooling-substations-switchyards">Substations</Link>
            <Link to="/services/transmission-infrastructure">Transmission</Link>
            <Link to="/capabilities">Grid Connectivity</Link>
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
