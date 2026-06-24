import { useState } from "react";
import { calculatorConfig } from "./calculatorData";
import "./calculator.css";

export default function RenovationCalculator() {
  const [tab, setTab] = useState("bathroom");
  const [quality, setQuality] = useState("basis");

  const config = calculatorConfig[tab];

  const [size, setSize] = useState(config.defaultSize);

  const calculate = () => {
    const p = config.prices[quality];

    if (config.type === "fixed") {
      return p;
    }

    return {
      min: size * p.min,
      avg: size * p.avg,
      max: size * p.max,
    };
  };

  const result = calculate();

  return (
    <section className="calculator">

      <h2>Sanierungskosten Rechner</h2>

      <div className="tabs">

        <button onClick={() => setTab("bathroom")}>
          Badsanierung
        </button>

        <button onClick={() => setTab("apartment")}>
          Wohnungssanierung
        </button>

        <button onClick={() => setTab("oldbuilding")}>
          Altbausanierung
        </button>

      </div>

      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
      >
        <option value="basis">Basis</option>
        <option value="komfort">Komfort</option>
        <option value="premium">Premium</option>
      </select>

      <input
        type="number"
        value={size}
        min={config.min}
        max={config.max}
        onChange={(e) =>
          setSize(Number(e.target.value))
        }
      />

      <div className="result">

        <h3>
          Geschätzte Kosten
        </h3>

        <p>
          Ab ca.
          {" "}
          {result.min.toLocaleString()}€
        </p>

        <p>
          Typisch:
          {" "}
          {result.avg.toLocaleString()}€
        </p>

        <p>
          Bis ca.
          {" "}
          {result.max.toLocaleString()}€
        </p>

      </div>

      <div className="notice">

        <strong>Wichtiger Hinweis</strong>

        <p>
          Die angegebenen Kosten dienen
          lediglich als erste Orientierung.
        </p>

      </div>

      <form className="lead-form">

        <h3>
          Kostenlose Ersteinschätzung
        </h3>

        <input placeholder="Name" />

        <input placeholder="Telefonnummer" />

        <input placeholder="E-Mail" />

        <input placeholder="PLZ" />

        <button>
          Kostenlose Beratung anfragen
        </button>

      </form>

    </section>
  );
}