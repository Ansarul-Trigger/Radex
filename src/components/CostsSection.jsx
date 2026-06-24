import { useState } from "react";
import RenovationCalculator from '../components/RenovationCalculator/RenovationCalculator';



export default function CostsSection({ costsData }) {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <section className="br-section br-bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="br-section-title">{costsData.title}</h2>
          <p className="br-section-subtitle">{costsData.subtitle}</p>
        </div>

        <div className="br-costs-grid">
          {costsData.items.map((cost, idx) => (
            <div key={idx} className="br-cost-card">
              <div className="br-cost-header">
                <h3>{cost.title}</h3>
                <div className="br-cost-price">
                  ab <span>{cost.price}</span>
                </div>
              </div>

              <div
                className="br-cost-img"
                style={{
                  backgroundImage: `url(${cost.img})`
                }}
              />
            </div>
          ))}

          <div className="br-cost-calculator">
            <h3>Budget-Rechner</h3>
            <p>
              Berechnen Sie Ihre geschätzten Kosten in wenigen Schritten.
            </p>

             <button
  className="br-btn-orange w-full mt-4"
  onClick={() => setShowCalculator(true)}
>
  Kosten berechnen
</button>

          </div>
              {showCalculator && (
          <div style={{ marginTop: "40px" }}>
            <RenovationCalculator />
          </div>
        )}


        </div>

        <div
          className="text-center mt-12"
          style={{
            background: '#fff',
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
            Genauere Einschätzung gewünscht?
          </h3>

          <p
            style={{
              color: '#4b5563',
              marginBottom: '24px'
            }}
          >
            Senden Sie uns Fotos per WhatsApp oder vereinbaren Sie
            einen Vor-Ort-Termin.
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


{showCalculator && (
  <div
    className="calculator-modal-overlay"
    onClick={() => setShowCalculator(false)}
  >
    <div
      className="calculator-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="calculator-close"
        onClick={() => setShowCalculator(false)}
      >
        ×
      </button>

      <RenovationCalculator />
    </div>
  </div>
)}



    </section>
  );
}