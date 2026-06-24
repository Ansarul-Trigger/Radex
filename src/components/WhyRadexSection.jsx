import {
  Award,
  Users,
  CheckCircle2,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export default function WhyRadexSection({
  title = "Warum Eigentümer Radex wählen"
}) {
  return (
  <section className="br-section">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="br-section-title">{title}</h2>
        <p>Über 60 Einsatzgebiete im Rhein-Main-Gebiet</p>
      </div>

      <div className="br-benefits-grid why-radex-grid">
        
        <div className="br-benefit-card">
          <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
          <h3>Eingetragener<br/>SHK-Meisterbetrieb</h3>
          <p>Zertifizierter Handwerksbetrieb, der fachgerechte Arbeit nach aktuellen deutschen Normen und Vorschriften liefert.</p>
        </div>

        <div className="br-benefit-card">
          <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
          <h3>Alles aus<br/>einer Hand</h3>
          <p>Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung.</p>
        </div>

        <div className="br-benefit-card">
          <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
          <h3>Saubere<br/>Sanierung</h3>
          <p>Professionelle Staubschutzsysteme sorgen für einen sauberen Ablauf.</p>
        </div>

        <div className="br-benefit-card">
          <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
          <h3>Festpreis-<br/>Garantie</h3>
          <p>Transparente Angebote ohne versteckte Kosten oder unerwartete Extras.</p>
        </div>

        <div className="br-benefit-card">
          <div className="br-benefit-icon">
            <MapPin size={40} color="#f97316" />
          </div>
          <h3>Über 60 Einsatzgebiete</h3>
          <p>
            Regelmäßig im gesamten Rhein-Main-Gebiet im Einsatz –
            von Frankfurt über Offenbach bis Darmstadt.
          </p>
        </div>

      </div>
    </div>
  </section>
);
}