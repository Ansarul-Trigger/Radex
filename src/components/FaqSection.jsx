import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection({
  title = "Häufig gestellte Fragen",
  faqsData = []
}) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="br-section br-bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="text-center mb-12">
          <h2 className="br-section-title">{title}</h2>
        </div>

        <div className="br-faq-grid">
          {faqsData.map((faq, i) => (
            <div key={i} className="home-faq-item">
              
              <button
                className="home-faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span
                  style={{
                    fontWeight: 600,
                    color: '#1f2937',
                    fontSize: '16px',
                    textAlign: 'left'
                  }}
                >
                  {faq.q}
                </span>

                <ChevronDown
                  style={{
                    transform:
                      openFaq === i
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                  color="#9ca3af"
                  size={18}
                />
              </button>

              <div
                className="home-faq-answer"
                style={{
                  display: 'grid',
                  gridTemplateRows:
                    openFaq === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.3s ease',
                  padding: 0
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <div
                    style={{
                      borderTop: '1px solid #f9fafb',
                      padding: '16px',
                      color: '#4b5563',
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}