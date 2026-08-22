import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brand } from './components';

export default function EnergyFooterFinal() {
  return (
    <footer className="ef-footer">
      <div className="ef-scene" aria-hidden="true">
        <svg viewBox="0 0 1600 280" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="efSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1fbf4" />
            </linearGradient>
            <linearGradient id="efHillBack" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#def2e3" />
              <stop offset="100%" stopColor="#cbe9d3" />
            </linearGradient>
            <linearGradient id="efHillFront" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#97cf9f" />
              <stop offset="100%" stopColor="#73bb81" />
            </linearGradient>
            <linearGradient id="efPanel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2e6ea1" />
              <stop offset="100%" stopColor="#173f68" />
            </linearGradient>
          </defs>

          <rect width="1600" height="280" fill="url(#efSky)" />
          <circle className="ef-sun" cx="1460" cy="62" r="22" fill="#f4d46c" />
          <circle className="ef-sun-glow" cx="1460" cy="62" r="42" fill="#f4d46c" opacity=".14" />

          <g className="ef-cloud ef-cloud-a" fill="#fff" opacity=".9">
            <ellipse cx="230" cy="54" rx="34" ry="13"/><ellipse cx="260" cy="50" rx="23" ry="12"/><ellipse cx="204" cy="51" rx="19" ry="9"/>
          </g>
          <g className="ef-cloud ef-cloud-b" fill="#fff" opacity=".9">
            <ellipse cx="950" cy="40" rx="31" ry="11"/><ellipse cx="978" cy="36" rx="20" ry="10"/><ellipse cx="928" cy="37" rx="17" ry="8"/>
          </g>

          <path d="M0 186 C120 150 250 154 368 183 C492 214 625 208 770 178 C920 147 1052 158 1190 190 C1335 222 1452 212 1600 178 L1600 280 L0 280Z" fill="url(#efHillBack)" />
          <path d="M0 220 C170 184 325 196 460 221 C606 248 760 236 900 210 C1048 182 1192 192 1312 222 C1423 250 1518 246 1600 218 L1600 280 L0 280Z" fill="url(#efHillFront)" />

          <g className="ef-solar" transform="translate(90 182)">
            {[0,92,184].map((x) => (
              <g key={x} transform={`translate(${x} 0)`}>
                <polygon points="0,10 76,0 103,19 25,30" fill="url(#efPanel)" stroke="#b9d1e4" strokeWidth="1.5" />
                <line x1="22" y1="7" x2="46" y2="27" stroke="#8eb5d2"/><line x1="42" y1="5" x2="66" y2="25" stroke="#8eb5d2"/><line x1="62" y1="2" x2="86" y2="22" stroke="#8eb5d2"/>
                <line x1="13" y1="17" x2="91" y2="8" stroke="#8eb5d2"/><line x1="20" y1="25" x2="98" y2="16" stroke="#8eb5d2"/>
                <line x1="35" y1="29" x2="31" y2="49" stroke="#687c72" strokeWidth="3"/><line x1="76" y1="24" x2="81" y2="44" stroke="#687c72" strokeWidth="3"/>
              </g>
            ))}
          </g>

          <g className="ef-turbine" transform="translate(590 92)">
            <line x1="0" y1="42" x2="0" y2="162" stroke="#778a80" strokeWidth="5" strokeLinecap="round" />
            <circle cx="0" cy="40" r="5" fill="#fff" stroke="#71847a" strokeWidth="2" />
            <g className="ef-rotor ef-r1">
              <path d="M0 40 L-7 -16 Q-1 -29 5 -16 L6 34Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/>
              <path d="M0 40 L49 57 Q62 65 50 72 L6 48Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/>
              <path d="M0 40 L-40 80 Q-53 88 -49 73 L-6 45Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/>
            </g>
          </g>
          <g className="ef-turbine" transform="translate(718 123) scale(.78)">
            <line x1="0" y1="42" x2="0" y2="151" stroke="#778a80" strokeWidth="5" strokeLinecap="round" />
            <circle cx="0" cy="40" r="5" fill="#fff" stroke="#71847a" strokeWidth="2" />
            <g className="ef-rotor ef-r2">
              <path d="M0 40 L-7 -16 Q-1 -29 5 -16 L6 34Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/><path d="M0 40 L49 57 Q62 65 50 72 L6 48Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/><path d="M0 40 L-40 80 Q-53 88 -49 73 L-6 45Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/>
            </g>
          </g>
          <g className="ef-turbine" transform="translate(830 74) scale(.92)">
            <line x1="0" y1="42" x2="0" y2="180" stroke="#778a80" strokeWidth="5" strokeLinecap="round" />
            <circle cx="0" cy="40" r="5" fill="#fff" stroke="#71847a" strokeWidth="2" />
            <g className="ef-rotor ef-r3">
              <path d="M0 40 L-7 -16 Q-1 -29 5 -16 L6 34Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/><path d="M0 40 L49 57 Q62 65 50 72 L6 48Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/><path d="M0 40 L-40 80 Q-53 88 -49 73 L-6 45Z" fill="#fff" stroke="#71847a" strokeWidth="1.5"/>
            </g>
          </g>

          <g className="ef-pylon" transform="translate(990 93)">
            <line x1="0" y1="142" x2="34" y2="0"/><line x1="68" y1="142" x2="34" y2="0"/><line x1="11" y1="108" x2="57" y2="108"/><line x1="15" y1="78" x2="53" y2="78"/><line x1="21" y1="49" x2="47" y2="49"/><line x1="-20" y1="36" x2="88" y2="36"/><line x1="-13" y1="64" x2="81" y2="64"/><line x1="11" y1="108" x2="57" y2="142"/><line x1="57" y1="108" x2="11" y2="142"/>
          </g>
          <g className="ef-pylon" transform="translate(1400 136) scale(.64)">
            <line x1="0" y1="142" x2="34" y2="0"/><line x1="68" y1="142" x2="34" y2="0"/><line x1="11" y1="108" x2="57" y2="108"/><line x1="15" y1="78" x2="53" y2="78"/><line x1="21" y1="49" x2="47" y2="49"/><line x1="-20" y1="36" x2="88" y2="36"/><line x1="-13" y1="64" x2="81" y2="64"/>
          </g>

          <path className="ef-wire" d="M1055 129 C1175 98 1290 105 1420 160" fill="none" stroke="#7f9088" strokeWidth="1.6"/>
          <path className="ef-wire ef-wire-two" d="M1055 156 C1170 128 1290 132 1420 180" fill="none" stroke="#7f9088" strokeWidth="1.6"/>

          <g className="ef-substation" transform="translate(1160 188)">
            <rect x="0" y="18" width="145" height="50" rx="3" fill="#f7fbf8" stroke="#82a28d" strokeWidth="1.5"/>
            <rect x="16" y="0" width="12" height="18" fill="#d8e9dc" stroke="#90a998"/><rect x="40" y="-8" width="12" height="26" fill="#d8e9dc" stroke="#90a998"/><rect x="67" y="4" width="12" height="14" fill="#d8e9dc" stroke="#90a998"/><rect x="94" y="-5" width="12" height="23" fill="#d8e9dc" stroke="#90a998"/><rect x="120" y="2" width="12" height="16" fill="#d8e9dc" stroke="#90a998"/>
            <line x1="8" y1="42" x2="136" y2="42" stroke="#9bb3a3"/><line x1="22" y1="18" x2="22" y2="-12" stroke="#758a7e"/><line x1="46" y1="18" x2="46" y2="-17" stroke="#758a7e"/><line x1="73" y1="18" x2="73" y2="-9" stroke="#758a7e"/><line x1="100" y1="18" x2="100" y2="-15" stroke="#758a7e"/><line x1="126" y1="18" x2="126" y2="-10" stroke="#758a7e"/>
          </g>
        </svg>
      </div>

      <div className="ef-content">
        <div className="container ef-grid">
          <div className="ef-brand"><Brand /><p>Renewable EPC, power evacuation and electrical infrastructure for solar, wind and grid-connectivity projects.</p></div>
          <div><h4>Company</h4><Link to="/about">About ORIKS</Link><Link to="/projects">Projects</Link><Link to="/safety-quality">Safety & Quality</Link></div>
          <div><h4>Capabilities</h4><Link to="/services">Power Evacuation</Link><Link to="/services">Substations</Link><Link to="/services">Transmission</Link><Link to="/services">Grid Connectivity</Link></div>
          <div><h4>Registered Office</h4><p>58/1, Ramanujanagar, Sengunthapuram, Karur, Tamil Nadu, India — 639002.</p><Link className="ef-contact" to="/contact">Discuss a project <ArrowRight size={16} /></Link></div>
        </div>
        <div className="container ef-bottom"><span>© {new Date().getFullYear()} ORIKS Energy Care Pvt Ltd.</span><span>Engineering the connection from generation to grid.</span></div>
      </div>
    </footer>
  );
}
