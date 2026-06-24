import { Link } from '../router';
import { ArrowRight } from 'lucide-react';

export default function Examples() {
  const projects = [
  {
    img: 'img/Wohnungssanierung.jpg',
    title: 'Wohnungssanierung',
    location: 'Offenbach',
    badge: 'live',
    link: '/sanierung/wohnungssanierung'
  },
  {
    img: 'img/Haussanierung.jpg',
    title: 'Haussanierung',
    location: 'Darmstadt',
    badge: null,
    link: '/sanierung/haussanierung'
  },
  {
    img: 'img/Altbausanierung.jpg',
    title: 'Altbausanierung',
    location: 'Frankfurt',
    badge: 'before-after',
    link: '/sanierung/altbausanierung'
  },
  {
    img: 'img/Komplettsanierung.jpg',
    title: 'Komplettsanierung',
    location: 'Rödermark',
    badge: null,
    link: '/sanierung/komplettsanierung-rhein-main'
  }
];

  return (
    <section id="beispiele" className="home-section bg-white">
      <div className="container">
        <div className="home-split">
          
          {/* Left Text Column */}
          <div className="home-split-left" style={{paddingTop: '16px'}}>
            <h2 className="text-3xl font-bold text-navy" style={{marginBottom: '16px', lineHeight: 1.2}}>Aktuelle Projekte & Referenzen</h2>
            <p className="text-gray-600" style={{marginBottom: '32px', fontSize: '15px', lineHeight: 1.6}}>
              Verfolgen Sie laufende Baustellen, entdecken Sie abgeschlossene Sanierungen und Vorher/Nachher-Vergleiche aus dem Rhein-Main-Gebiet.
            </p>
            <Link to="/sanierung-rhein-main" className="home-btn-orange" style={{fontSize: '14px', padding: '10px 20px'}}>
              Alle Projekte ansehen <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Images Column */}
          <div className="home-split-right">
            <div className="home-grid-4">
              {projects.map((project, idx) => (
              <Link to={project.link} key={idx} className="home-project-card">
                <div className="home-project-img-wrapper" style={{position: 'relative'}}>
                  <img src={project.img} alt={project.title} className="home-project-img" />
                  {project.badge === 'live' && <span className="br-project-badge live">Radex Live</span>}
                  {project.badge === 'before-after' && <span className="br-project-badge before-after">Vorher/Nachher</span>}
                </div>
                <h4 className="font-bold text-navy text-sm">{project.title}</h4>
                <p className="text-xs text-gray-500">{project.location}</p>
              </Link>
            ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
