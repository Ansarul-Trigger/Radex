import { ArrowRight } from 'lucide-react';

export default function ProcessSection({
  title = "Wie Ihr Projekt abläuft",
  processSteps = []
}) {
  return (
    <section className="br-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="br-section-title">{title}</h2>
        </div>

        <div className="br-process-flow">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="br-process-step">
                <div className="br-step-number">
                  {step.number}
                </div>

                <div className="br-step-icon">
                  {step.icon}
                </div>

                <h4>{step.title}</h4>
              </div>

              {idx < processSteps.length - 1 && (
                <ArrowRight
                  className="br-step-arrow"
                  size={24}
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16 p-8"
          style={{
            background: '#fff3ea',
            borderRadius: '8px',
            border: '1px solid #fdba74'
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              marginBottom: '16px',
              color: '#ea580c'
            }}
          >
            Starten Sie jetzt Ihr Projekt mit uns
          </h3>

          <p
            style={{
              color: '#4b5563',
              marginBottom: '24px'
            }}
          >
            Kontaktieren Sie unser Expertenteam für eine kostenlose Beratung vor Ort.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="https://wa.me/496074960620"
              className="btn br-btn-whatsapp"
            >
              WhatsApp
            </a>

            <a
              href="tel:+496074960620"
              className="btn br-btn-orange"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}