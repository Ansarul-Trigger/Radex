import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../router";

const slides = [
  {
    title: "Badsanierung Rhein-Main",
    subtitle:
      "Von der Badplanung bis zur fertigen Komplettbadsanierung erhalten Sie bei Radex alle Leistungen aus einer Hand.",
    button: "Kostenlose Beratung",
    image: "/img/bad.jpg"
  },
  {
    title: "Wohnungs- & Haussanierung",
    subtitle:
      "Professionelle Sanierungslösungen für Wohnungen, Häuser und Kapitalanlagen im gesamten Rhein-Main-Gebiet.",
    button: "Sanierung anfragen",
    image: "/img/wohnung.jpg"
  },
  {
    title: "Generalunternehmer für Sanierungen",
    subtitle:
      "Ein Ansprechpartner für Planung, Koordination und Ausführung sämtlicher Gewerke – von der ersten Idee bis zur Fertigstellung.",
    button: "Kostenlos beraten lassen",
    image: "/img/generalunternehmer.jpg"
  },
  {
    title: "Sanierungs-Soforthilfe",
    subtitle:
      "Schnelle Unterstützung bei dringenden Sanierungsprojekten, Modernisierungen und Badsanierungen im Rhein-Main-Gebiet.",
    button: "Soforthilfe anfragen",
    image: "/img/soforthilfe.jpg"
  }
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === active ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
          <div className="hero-overlay"></div>

          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">
                SHK-Meisterbetrieb & Generalunternehmer
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <Link
                to="#kontakt"
                className="hero-btn"
              >
                {slide.button}
                <ArrowRight size={18} />
              </Link>
             <br/> <br/>
              <div className="hero-trust">
                    <div>✓ 500+ Projekte</div>
                    <div>✓ Festpreisgarantie</div>
                    <div>✓ Rhein-Main Region</div>
                    <div>✓ Ein Ansprechpartner</div>
                  </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={i === active ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}