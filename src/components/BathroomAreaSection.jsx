import { Bold } from "lucide-react";
import React from "react";

export default function BathroomAreaSection() {
  return (
    <section className="area-section">
      <div className="area-container">
        <div className="area-header">
          <span className="area-label">Einsatzgebiet</span>

          <h2 className="area-title">
            Komplettbadsanierung im Rhein-Main-Gebiet – wo Radex tätig ist
          </h2>
        </div>

        <div className="area-grid">
          {/* Left Content */}
          <div className="area-content">
            <p>
              Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Standort Rödermark liegt zentral im südlichen Hessen – von dort aus sind wir ohne große Anfahrtswege in der gesamten Region aktiv. Komplettbadsanierungen führen wir regelmäßig in Gemeinden durch, die sich im südöstlichen Rhein-Main-Bereich konzentrieren: Seligenstadt, Hainburg, Mainhausen und Babenhausen gehören dabei ebenso zu unserem Einsatzgebiet wie Dieburg, Groß-Zimmern, Langen und Egelsbach.
            </p>

              <p>Auch in Rödermark selbst sowie in den angrenzenden Städten im Landkreis Offenbach und im Landkreis Darmstadt-Dieburg sind wir regelmäßig mit Komplettbadsanierungen beauftragt. Die Region ist charakterisiert durch einen hohen Anteil an Bestandsgebäuden aus den 1960er bis 1980er Jahren – Häuser und Wohnungen, deren Bäder heute oft grundlegend erneuert werden müssen. Genau hier kennt Radex die typischen Ausgangssituationen: Vorwandinstallationen, die damals noch nicht Standard waren, Leitungsführungen, die heute nicht mehr normgerecht sind, und Abdichtungen, die längst ihre Lebensdauer überschritten haben.

              </p>
              <p>Die vollständige Übersicht aller Städte und Gemeinden, in denen Radex Badsanierungen durchführt, finden Sie auf der Seite <b><a href="/einsatzgebiete-rhein-main">Einsatzgebiete.</a></b> </p>

         
          </div>

          {/* Right Content */}
          <div className="area-locations">
            <h3>Unsere Einsatzorte für Komplettbadsanierungen</h3>

            <div className="location-columns">
              <ul>
                <li>Rödermark</li>
                <li>Hainburg</li>
                <li>Babenhausen</li>
                <li>Groß-Zimmern</li>
                <li>Egelsbach</li>
              </ul>

              <ul>
                <li>Seligenstadt</li>
                <li>Mainhausen</li>
                <li>Dieburg</li>
                <li>Langen</li>
                <li>Rhein-Main-Gebiet</li>
              </ul>
            </div>

            <a className="all-locations-link" href="/einsatzgebiete-rhein-main">
              Alle Orte im Überblick →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}