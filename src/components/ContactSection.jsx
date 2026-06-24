import {
  Phone,
  MessageSquare,
  FileText,
  Camera
} from 'lucide-react';

export default function ContactSection({
  title = "Fragen Sie Ihr Projekt an",
  subtitle = "Sprechen Sie mit unserem Team, senden Sie Fotos per WhatsApp oder vereinbaren Sie eine Beratung."
}) {
  return (
    <section id="kontakt" className="br-section">
      <div className="container">
        <div className="br-contact-grid">

          <div className="br-contact-left">
            <h2
              className="br-section-title"
              style={{ textAlign: 'left' }}
            >
              {title}
            </h2>

            <p
              className="br-section-subtitle"
              style={{
                textAlign: 'left',
                marginBottom: '30px'
              }}
            >
              {subtitle}
            </p>

            <div className="br-contact-options">

              <div className="br-contact-option">
                <div className="br-contact-icon-wrapper">
                  <Phone size={24} color="#f97316" />
                </div>
                <div>
                  <strong>Jetzt anrufen</strong>
                  <p>06074 960620</p>
                </div>
              </div>

              <div className="br-contact-option">
                <div className="br-contact-icon-wrapper">
                  <MessageSquare size={24} color="#25D366" />
                </div>
                <div>
                  <strong>WhatsApp Chat</strong>
                  <p>Fotos direkt senden</p>
                </div>
              </div>

              <div className="br-contact-option">
                <div className="br-contact-icon-wrapper">
                  <MessageSquare size={24} color="#f97316" />
                </div>
                <div>
                  <strong>E-Mail</strong>
                  <p>info@radex.de</p>
                </div>
              </div>

              <div className="br-contact-option">
                <div className="br-contact-icon-wrapper">
                  <FileText size={24} color="#f97316" />
                </div>
                <div>
                  <strong>Kontaktformular</strong>
                  <p>Nutzen Sie unser Formular</p>
                </div>
              </div>

            </div>

            <p className="br-hero-micro mt-4">
              <Camera size={14} />
              {' '}Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>

          <div className="br-contact-form-wrapper">
            <form className="br-form">

              <div className="br-form-row">
                <div className="br-input-group">
                  <label>Vorname *</label>
                  <input type="text" />
                </div>

                <div className="br-input-group">
                  <label>Nachname *</label>
                  <input type="text" />
                </div>
              </div>

              <div className="br-form-row">
                <div className="br-input-group">
                  <label>Telefon *</label>
                  <input type="tel" />
                </div>

                <div className="br-input-group">
                  <label>E-Mail *</label>
                  <input type="email" />
                </div>
              </div>

              <div className="br-input-group">
                <label>Ihr Projekt / Nachricht *</label>
                <textarea
                  rows="4"
                  placeholder="Bitte beschreiben Sie Ihr Projekt..."
                />
              </div>

              <button
                type="button"
                className="br-btn-orange w-full"
                style={{ marginTop: '10px' }}
              >
                Kostenlose Beratung anfordern →
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}