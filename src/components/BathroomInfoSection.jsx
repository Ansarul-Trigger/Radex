import "./BathroomInfoSection.css";

export default function BathroomInfoSection() {
  return (
    <section className="bathroom-info">
      <div className="bathroom-info__container">
        <div className="bathroom-info__content">
          <h2>Ein neues Bad – mehr als nur neue Fliesen</h2>

          <p>
            Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich
            meist zuerst das fertige Ergebnis vor: eine bodengleiche Dusche,
            helle Fliesen, vielleicht ein frei stehendes
            Waschtischunterschrank. Was dazwischen liegt – Planung,
            Koordination, Technik, Logistik – ist weniger sichtbar, aber
            entscheidend dafür, ob eine Badsanierung reibungslos verläuft oder
            zur Belastungsprobe wird.
          </p>

          <p>
            Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als
            Generalunternehmer und SHK Meisterbetrieb mit Sitz in Rödermark
            koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von
            der ersten Beratung über die Badplanung bis zur schlüsselfertigen
            Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb
            selbst aus. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und
            Innenausbau werden durch eingespielte Fachbetriebe realisiert, die
            wir koordinieren und verantworten.
          </p>

          <p>
            Ob Sie ein komplettes Bestandsbad entkernen und neu aufbauen
            möchten, Ihre Badmodernisierung gezielt auf mehr Komfort ausrichten
            wollen oder ein barrierefreies Bad für die nächste Lebensphase
            planen – auf dieser Seite finden Sie einen Überblick über unsere
            Leistungen, unsere Arbeitsweise und alles, was Sie vorab wissen
            sollten.
          </p>
        </div>

        <div className="bathroom-info__image">
          <img
            src="/img/badplanung-materialien-badsanierung-radex.webp"
            alt="Modernes Badezimmer"
          />
        </div>
      </div>
    </section>
  );
}