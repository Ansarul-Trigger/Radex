import { useState } from 'react';

// Global CTA Block
  const SharedCTABlock = ({ isHero = false }) => (
    <div className={`br-hero-actions ${isHero ? '' : 'mt-8'}`} style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isHero ? 'flex-start' : 'center'}}>
      <a href="#kontakt" className="btn br-btn-orange">Projekt anfragen &rarr;</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
      </a>
      <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: isHero ? 'transparent' : '#fff', border: isHero ? '1px solid #111827' : '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );

export default function ProjectsSection({ projectTabs }) {
  const [activeProjectTab, setActiveProjectTab] = useState('aktuelle');

  return (
    <section className="br-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">
            Aktuelle Projekte und Referenzen
          </h2>

          <p className="br-section-subtitle">
            Entdecken Sie laufende Projekte und abgeschlossene Sanierungen
            im gesamten Rhein-Main-Gebiet.
          </p>

          <div className="br-tabs">
            <div
              className={`br-tab ${activeProjectTab === 'aktuelle' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('aktuelle')}
            >
              Aktuelle Projekte
            </div>

            <div
              className={`br-tab ${activeProjectTab === 'abgeschlossen' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('abgeschlossen')}
            >
              Abgeschlossene Projekte
            </div>

            <div
              className={`br-tab ${activeProjectTab === 'vorherNachher' ? 'active' : ''}`}
              onClick={() => setActiveProjectTab('vorherNachher')}
            >
              Vorher & Nachher
            </div>
          </div>
        </div>

        <div className="br-projects-grid">
          {projectTabs[activeProjectTab]?.map((project, index) => (
            <div className="br-project-card" key={index}>
              <div
                className="br-project-img"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                {project.badge && (
                  <span className={`br-project-badge ${project.badge.className}`}>
                    {project.badge.text}
                  </span>
                )}
              </div>

              <div className="br-project-info">
                <h4>{project.title}</h4>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/radex-live"
            className="br-btn-outline-orange mb-8"
            style={{
              display: 'inline-flex',
              textDecoration: 'none'
            }}
          >
            Alle Projekte ansehen
          </a>
        </div>

        <div
          className="text-center mt-12 p-8"
          style={{
            background: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              marginBottom: '16px',
              color: '#111827'
            }}
          >
            Haben Sie Fragen zu Ihrem Projekt?
          </h3>

          <p
            style={{
              color: '#4b5563',
              marginBottom: '24px'
            }}
          >
            Senden Sie uns Fotos und erhalten Sie eine professionelle
            Ersteinschätzung.
          </p>

        </div>
      </div>
    </section>
  );
}