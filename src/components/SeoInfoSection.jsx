import {
  Award,
  MapPin,
  ShieldCheck,
  Users
} from 'lucide-react';

export default function SeoInfoSection({
  seoContent,
  links = []
}) {
  return (
    <section className="br-section br-bg-light">
      <div className="container">

        <div
          style={{
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          <h3
            style={{
              marginBottom: '20px'
            }}
          >
            Weitere Informationen
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            {links.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <details className="radex-seo-accordion">
          <summary>
            Weitere Fachinformationen anzeigen
          </summary>

          {seoContent}
        </details>

        <div className="br-trust-footer">

          <div className="br-trust-item">
            <Award size={32} color="#aaa" />
            <div>
              <strong>500+</strong>
              <span>Abgeschlossene Projekte</span>
            </div>
          </div>

          <div className="br-trust-item">
            <MapPin size={32} color="#aaa" />
            <div>
              <strong>60+</strong>
              <span>Betreute Städte</span>
            </div>
          </div>

          <div className="br-trust-item">
            <ShieldCheck size={32} color="#aaa" />
            <div>
              <strong>100%</strong>
              <span>Festpreisgarantie</span>
            </div>
          </div>

          <div className="br-trust-item">
            <Users size={32} color="#aaa" />
            <div>
              <strong>SHK-Meister</strong>
              <span>Zugelassener Fachbetrieb</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}