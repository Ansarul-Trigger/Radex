import ServicePageTemplate from '../components/ServicePageTemplate';

export default function CompleteRenovation() {
  const heroData = {
    title: "Komplettsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Alles aus einer Hand: Ihr Sanierungsprojekt effizient umgesetzt.",
    text: "Eine Komplettsanierung ist ein Großprojekt. Übergeben Sie die Verantwortung an Radex, Ihren zuverlässigen Generalunternehmer für ganzheitliche Umbauten.",
    image: "/img/Complete-renovation.jpg"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Wir realisieren Großprojekte für anspruchsvolle Kunden.",
    list: [
      {
        title: "Immobilienkäufer",
        desc: "Machen Sie aus einem stark sanierungsbedürftigen Objekt Ihr Traumhaus.",
          img: "/img/Immobilienkäufer.jpg"
      },
      {
        title: "Erbengemeinschaften",
        desc: "Wertmaximierung vor dem Verkauf der Immobilie.",
        img: "/img/Erbengemeinschaften.avif"
      },
      {
        title: "Bestandshalter",
        desc: "Verlängerung des Gebäudelebenszyklus durch komplette Erneuerung.",
        img: "/img/Bestandshalter.jpg"
      }
    ]
  };

  const typicalProjectsData = {
    title: "Vorteile der Komplettsanierung",
    subtitle: "Warum ein Schnitt oft besser ist als viele kleine.",
    projects: [
      {
        title: "Planungssicherheit",
        desc: "Ein Bauleiter, ein Zeitplan, ein Festpreis.",
        img: "/img/Planungssicherheit.jpg"
      },
      {
        title: "Technischer Neustart",
        desc: "Alle Leitungen und Rohre sind neu und aufeinander abgestimmt.",
        img: "/img/TechnischerNeustart.jpg"
      },
      {
        title: "Kürzere Bauzeit",
        desc: "Keine Pausen zwischen Gewerken durch perfekte Taktung.",
        img: "/img/KürzereBauzeit.jpg"
      }
    ]
  };

  const costsData = {
    title: "Kosten einer Komplettsanierung",
    subtitle: "Eine Komplettsanierung ist eine Investition in die Zukunft Ihrer Immobilie.",
    items: [
      { title: "Standard", price: "ab €1.000 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Gehoben", price: "ab €1.500 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Luxus / Denkmalschutz", price: "ab €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was ist eine Komplettsanierung?", a: "Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie gleichzeitig – nicht nur oberflächliche Renovierungen, sondern eine technische, funktionale und gestalterische Neuaufstellung durch koordinierte Fachgewerke. Typischerweise werden Bad, Heizung, Sanitär, Elektro, Innenausbau und Böden in einem abgestimmten Projekt erneuert." },
    { q: "Was ist der Unterschied zwischen Komplett- und Kernsanierung?", a: "Eine Komplettsanierung muss nicht bis zur Rohstruktur gehen, während eine Kernsanierung tiefgreifendere Rückbauarbeiten und eine umfassendere technische Erneuerung umfasst. Bei der Kernsanierung wird das Gebäude bis auf die tragende Struktur zurückgebaut; das Ergebnis kommt einem Neubau gleich, erhält aber Standort und Charakter." },
    { q: "Wann ist eine Komplettsanierung sinnvoll?", a: "Sinnvoll ist sie bei einem Hauskauf vor dem Einzug, bei einer Erbschaft, bei aufgelaufenem Sanierungsstau, wenn Bad, Küche, Böden und Leitungen ohnehin gleichzeitig erneuert werden müssen, oder zur deutlichen Wertverbesserung der Immobilie." },
    { q: "Wer übernimmt die Bauleitung?", a: "Als Generalunternehmer stellt Radex einen festen Bauleiter, der die Gewerke koordiniert und Ihr zentraler Ansprechpartner ist. Sie müssen nicht selbst Handwerker terminieren, mahnen oder kontrollieren." },
    { q: "Wie lange dauert eine Kernsanierung?", a: "Je nach Objektgröße und Umfang sollten Sie für ein Einfamilienhaus etwa 3 bis 6 Monate einplanen. Den genauen Zeitrahmen legen wir nach der Bestandsaufnahme im Bauzeitenplan fest." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ihr Generalunternehmer für Komplettsanierungen</h3>
        <p className="mb-4 text-gray-600">Bei einer Komplettsanierung wird die Immobilie oft bis auf die Grundmauern entkernt. Das gibt Ihnen die Möglichkeit, Heizsysteme grundlegend zu ändern (z. B. Umstieg auf eine Wärmepumpe mit Fußbodenheizung), Grundrisse komplett neu zu denken und die Energieeffizienz auf Neubau-Niveau zu heben.</p>
        <p className="text-gray-600">Als Generalunternehmer bündeln wir alle Gewerke unter einem Dach – Sie haben einen Vertrag, einen Festpreis und einen Ansprechpartner für das gesamte Projekt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Was ist eine Kernsanierung?</h3>
        <p className="mb-4 text-gray-600">Bei einer Kernsanierung wird das Gebäude bis auf die tragende Struktur zurückgebaut. Alle nicht tragenden Wände, sämtliche Leitungen für Strom, Wasser und Heizung sowie Böden und Oberflächen werden vollständig erneuert. Das Ergebnis kommt einem Neubau gleich – mit dem Vorteil, dass Standort, Grundstück und oft auch der besondere Charakter des Hauses erhalten bleiben.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ablauf einer Komplettsanierung</h3>
        <p className="mb-4 text-gray-600">Wir beginnen mit einer gründlichen Bestandsaufnahme und Planung. Nach dem Festpreisangebot folgen Entkernung, Rohbauarbeiten und statische Eingriffe, anschließend die komplette Haustechnik (Elektro, Heizung, Sanitär), danach Trockenbau, Estrich, Fliesen, Maler und Bodenbeläge. Den Abschluss bilden Feinmontage und Endreinigung. Ein fester Bauleiter sorgt dafür, dass die Gewerke perfekt getaktet ineinandergreifen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Festpreis & Planungssicherheit</h3>
        <p className="text-gray-600">Gerade bei einem Großprojekt wie der Komplettsanierung ist Kostensicherheit entscheidend. Sie erhalten von uns ein verbindliches Festpreisangebot, das alle vereinbarten Leistungen abdeckt. Änderungen während der Bauphase werden transparent dokumentiert und freigegeben – so behalten Sie jederzeit die volle Kontrolle über Ihr Budget.</p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Das Bestandsbad komplett erneuern – wann und warum das der richtige Schritt ist</h3>
        <p className="mb-4 text-gray-600">Es gibt Bäder, bei denen Einzelmaßnahmen nicht mehr weiterhelfen. Die Abdichtung ist längst nicht mehr intakt, hinter den Fliesen hat sich Feuchtigkeit eingenistet, die Leitungen stammen aus den 1970ern und der Grundriss passt nicht mehr zur heutigen Nutzung. In solchen Situationen ist eine Komplettbadsanierung keine Frage des Komforts – sondern der Substanz.</p>
        <p className="text-gray-600">Eine Komplettbadsanierung bedeutet: Das Bestandsbad wird auf den Rohbau zurückgebaut. Alles, was darunterliegt – Leitungen, Abdichtung, Installationen – wird geprüft, erneuert und nach aktuellem Stand der Technik neu aufgebaut. Am Ende steht nicht ein aufgefri­schtes Bad, sondern ein vollständig neues – mit neuer Technik, neuer Optik und einer soliden Grundlage für die nächsten Jahrzehnte.</p>
         <p className="text-gray-600">Radex Objektmanagement GmbH übernimmt Komplettbadsanierungen im Rhein-Main-Gebiet als Generalunternehmer. Bernd Knoop verantwortet als eingetragener SHK Meister die Sanitär- und Heizungsarbeiten. Elektro, Trockenbau, Fliesen und Innenausbau werden durch koordinierte Fachbetriebe ausgeführt – abgestimmt, termingerecht, aus einer Hand.</p>

      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Rückbau: Der Anfang jeder Komplettbadsanierung</h3>
        <p className="mb-4 text-gray-600">Eine Komplettbadsanierung beginnt nicht mit dem Einbau – sie beginnt mit dem Rückbau. Was auf den ersten Blick nach Zerstörung aussieht, ist der Schritt, der alle weiteren Arbeiten erst ermöglicht: Das Bestandsbad wird systematisch und kontrolliert auf den Rohbau zurückgebaut. Erst dann zeigt sich, was wirklich dahintersteckt.</p>
        <p className="text-gray-600 font-bold">Was beim Rückbau Bad entfernt wird</p>
        <p className="text-gray-600">Beim Rückbau werden zunächst alle Sanitärobjekte ausgebaut: Dusche oder Badewanne, WC, Waschtisch, Badmöbel. Anschließend werden Fliesen von Wand und Boden abgeschlagen, Vorwandinstallationen und Trockenbauwände entfernt und der Bodenaufbau freigelegt. Je nach Zustand werden auch Estrichschichten aufgenommen, wenn darunter liegende Leitungen erneuert werden müssen.</p>
        <p className="text-gray-600">Dieser Schritt ist nicht nur Vorbereitung – er ist Diagnose. Erst wenn das Bad im Rohzustand liegt, kann beurteilt werden, ob vorhandene Wasser- und Abwasserleitungen weiterverwendet werden können oder ob Trassen neu verlegt werden müssen. Versteckte Feuchteschäden, nicht normgerechte Abdichtungen aus früheren Sanierungen oder unerwartete Leitungsführungen werden jetzt sichtbar.</p>
        <p className="text-gray-600">Radex dokumentiert den Rückbauzustand und bespricht mit Ihnen, wenn sich im Vergleich zur ursprünglichen Planung etwas verändert. Transparenz an dieser Stelle ist entscheidend – denn was jetzt offen liegt, bestimmt den weiteren Ablauf der Komplettbadsanierung.</p>
        <p className="text-gray-600 font-bold">Entsorgung und Vorbereitung der Rohbauebene</p>
        <p className="text-gray-600">Der Abbruchabfall – Fliesen, Ausbauschutt, Sanitärobjekte – wird fachgerecht entsorgt. Die Rohbauebene wird anschließend auf ihre Eignung für den Neuaufbau geprüft: Ebenheit des Untergrunds, Tragfähigkeit für neue Bodenaufbauten, Zustand der Wände im Hinblick auf spätere Abdichtung und Fliesenverlegung. Erst wenn diese Grundlage stimmt, beginnen die nächsten Gewerke.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Sanitärinstallation und Abdichtung – die technische Basis des neuen Bades</h3>
        <p className="mb-4 text-gray-600">Nach dem Rückbau folgen die technischen Kernleistungen der Komplettbadsanierung: die neue Sanitärinstallation und die fachgerechte Abdichtung aller Nass- und Spritzwasserbereiche. Diese beiden Phasen bestimmen die Funktion und Langlebigkeit des Bades grundlegend – und sind deshalb der Bereich, den Radex als SHK Meisterbetrieb unter Meisterverantwortung selbst ausführt.</p>
        <p className="text-gray-600 font-bold">Neue Leitungsführung und Sanitärinstallation Bad</p>
        <p className="text-gray-600">In einem vollständig zurückgebauten Bad können Wasser- und Abwasserleitungen neu geplant und verlegt werden. Das eröffnet Möglichkeiten, die eine Teilsanierung nicht bietet: Abflüsse können versetzt werden, um die bodengleiche Dusche an der gewünschten Position zu realisieren. Wasseranschlüsse lassen sich an veränderte Grundrisse anpassen. Leitungsquerschnitte können auf heutige Druckverhältnisse ausgelegt werden.</p>
        <p className="text-gray-600">Bernd Knoop verantwortet als eingetragener Meister die gesamte Sanitärinstallation Bad: Druckprüfung, normgerechte Leitungsführung, Anschluss aller Sanitärobjekte und Armaturen sowie die Anbindung an das Heizungsnetz – etwa für einen Handtuchheizkörper oder eine Fußbodenheizung im Bad.</p>
        <p className="text-gray-600">Die Vorwandinstallation – eine Rahmenkonstruktion, hinter der Spülkasten, Leitungen und Trägersysteme für wandhängende WCs und Waschtische verborgen sind – wird in dieser Phase montiert. Sie ist bei einer Komplettbadsanierung heute Standard: Sie ermöglicht ein sauberes Wandbild und erleichtert spätere Zugänglichkeit im Wartungsfall.</p>
        <p className="text-gray-600 font-bold">Abdichtung Bad: der unsichtbare Schutz</p>
        <p className="text-gray-600">Kein Gewerk bei einer Komplettbadsanierung ist so entscheidend für die Dauerhaftigkeit des Ergebnisses wie die Abdichtung – und keines ist so unsichtbar. Die Abdichtung wird unter den Fliesen eingebracht und schützt Wände und Boden dauerhaft vor eindringendem Wasser. Fehlt sie oder ist sie mangelhaft, entstehen Feuchtigkeitsschäden, die sich oft erst Jahre später zeigen – dann allerdings mit erheblichem Sanierungsaufwand.</p>
         <p className="text-gray-600">Radex führt die Abdichtung nach den geltenden Normen (DIN 18534) aus. Im Bereich der bodengleichen Dusche wird besonderes Augenmerk auf die Verbindung zwischen Bodenfläche, Wandanschluss und Ablauf gelegt – einer der kritischsten Punkte im gesamten Bad.</p>
           <p className="text-gray-600">Sanitärinstallation und Abdichtung bei Komplettbadsanierung SHK Meisterbetrieb – was das bedeutet</p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Trockenbau, Elektroarbeiten und Fliesenarbeiten – koordiniert im richtigen Takt</h3>
        <p className="mb-4 text-gray-600">Nach Rohinstallation und Abdichtung folgen die Gewerke, die das Bad sichtbar formen: Trockenbau und Vorwandverkleidung, Elektroarbeiten im Nassbereich und schließlich die Fliesenarbeiten. Bei einer Komplettbadsanierung müssen diese Arbeitsschritte präzise aufeinanderfolgen – ein falsch gelegtes Kabel nach Fertigstellung des Trockenbaus oder ein Fliesenleger, der vor dem Elektriker anrückt, kostet Zeit und Geld. Radex koordiniert diese Abfolge als Generalunternehmer.</p>
        <p className="text-gray-600 font-bold">Trockenbau Bad und Vorwandinstallation</p>
        <p className="text-gray-600">Trockenbaukonstruktionen erfüllen im Bad mehrere Funktionen: Sie verkleiden die Vorwandinstallation und schaffen damit eine ebene, fliesenreife Wandfläche. Sie ermöglichen abgehängte Decken für Einbauleuchten oder Lüftungskanäle. Nischen für Ablagen oder Aufbewahrung entstehen ebenfalls durch gezielte Trockenbauelemente.</p>
        <p className="text-gray-600">Im feuchten Nassbereich kommen spezielle wasserresistente Gipskartonplatten und Systemprofile zum Einsatz. Die Konstruktion muss so ausgeführt werden, dass die spätere Abdichtung und Fliesenverlegung lückenlos aufsetzen können – eine Anforderung, bei der handwerkliche Erfahrung im Badbau entscheidend ist.</p>
        <p className="text-gray-600 font-bold">Elektroarbeiten Bad – sicher im Nassbereich</p>
        <p className="text-gray-600"> Der Nassbereich stellt an die Elektroinstallation besondere Anforderungen. Schutzmaßnahmen, Leitungsquerschnitte, Abstände zu Wasserstellen und die Verwendung geeigneter Betriebsmittel sind durch Normen (DIN VDE 0100-701) genau geregelt. Elektroarbeiten im Bad dürfen deshalb ausschließlich durch zugelassene Elektrofachbetriebe ausgeführt werden. </p>
        <p className="text-gray-600">Radex koordiniert den Elektrofachbetrieb so, dass Leitungsführung, Unterputzdosen und Leerrohrinstallation vor dem Trockenbau abgeschlossen sind. Beleuchtung, Schalter, Steckdosen, Spiegelheizung, Lüftungsanlage und ggf. eine elektrische Fußbodenheizung werden gemeinsam geplant und termingerecht ausgeführt.</p>
        <p className="text-gray-600 font-bold">Fliesenarbeiten – Handwerk mit Systemkenntnis</p>
        <p className="text-gray-600">Fliesen im Bad sind kein dekoratives Element – sie sind der Abschluss eines komplexen Systemaufbaus aus Abdichtung, Klebemörtel, Verfugung und Anschlussprofilen. Wer versteht, wie das System funktioniert, verlegt nicht einfach Fliesen – er schließt ein Abdichtungssystem fachgerecht ab.</p>
        <p className="text-gray-600">Radex koordiniert Fliesenleger, die routiniert mit den Abdichtungssystemen arbeiten, die bei einer Komplettbadsanierung zum Einsatz kommen. Das gilt insbesondere für die bodengleiche Dusche: Der Gefälleestrich, der Ablauf und die Wandanschlüsse müssen präzise aufeinander abgestimmt sein. Großformatige Bodenfliesen, Wandformate und Mosaikflächen werden handwerklich sauber verlegt – mit sorgfältigen Fugen, Dilatationsstreifen und wasserfesten Verfugungen.</p>
      </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ausbau und Übergabe – das Komplettbad entsteht</h3>
        <p className="text-gray-600 font-bold">Montage von Sanitärobjekten, Armaturen und Badmöbeln</p>
        <p className="text-gray-600">In der Ausbauphase einer Komplettbadsanierung werden alle Sanitärobjekte montiert und angeschlossen: WC und Bidet auf der Vorwandinstallation, Waschtisch auf dem vorgesehenen Träger oder Unterbaumöbel, Dusche mit Dichtprofilen und Ablaufabdeckung, Badewanne mit Verkleidung und Anschluss. Armaturen werden gesetzt, Handtuchheizkörper angeschlossen, Spiegel und Beleuchtung montiert, Accessoires befestigt.</p>
        <p className="text-gray-600">Parallel wird die Elektroinstallation fertiggestellt: Leuchten werden eingesetzt, Schalter und Steckdosen abgedeckt, die Lüftungsanlage in Betrieb genommen. Am Ende dieser Phase ist das Bad betriebsbereit – technisch vollständig, handwerklich abgeschlossen.</p>
        <p className="text-gray-600 font-bold">Übergabe der Komplettbadsanierung</p>
        <p className="text-gray-600"> Radex übergibt das fertige Komplettbad nach einer gemeinsamen Begehung. Wir gehen das Bad mit Ihnen durch, prüfen alle Anschlüsse und Funktionen, zeigen Ihnen Bedienung und Wartungshinweise – etwa für die Lüftungsanlage oder den Spülkasten. Offene Punkte werden direkt geklärt. </p>
        <p className="text-gray-600">Was Radex ausführt, unterliegt der handwerklichen Gewährleistung. Das gilt für die Sanitärinstallation als SHK Meisterbetrieb ebenso wie für die koordinierten Gewerke, für die wir als Generalunternehmer die Verantwortung tragen. Sie haben auch nach der Übergabe einen festen Ansprechpartner bei Radex.</p>
        <p className="text-gray-600 font-bold">Komplettbadsanierung Dauer – was Sie einplanen sollten</p>
        <p className="text-gray-600">Ein typisches Familienbad mit vollständiger Erneuerung aller Gewerke dauert bei gut koordinierter Ausführung zwei bis vier Wochen reine Bauzeit. Hinzu kommt die Planungsphase. Mehr Informationen zu Bauzeiten und Einflussfaktoren finden Sie auf der Seite Badsanierung Dauer.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bad aus einer Hand – was Generalunternehmerschaft bei einer Komplettbadsanierung wirklich bedeutet</h3>
        <p className="text-gray-600">Eine Komplettbadsanierung ist kein einfaches Handwerksprojekt – sie ist ein Gesamtprojekt mit acht bis zehn Phasen, vier bis sechs Gewerken und einer Zeitplanung, bei der eine Verzögerung in einer Phase alle folgenden verschiebt. Wer diese Koordination unterschätzt, erlebt das Bad als Baustelle – wochenlang, mit Unterbrechungen, mit Rückfragen zwischen Handwerkern, die sich gegenseitig auf die Fertigstellung des anderen verlassen.</p>
        <p className="text-gray-600">Radex übernimmt diese Koordination vollständig. Als Generalunternehmer schließen Sie einen Vertrag – und Radex stellt sicher, dass Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen und Ausbau in der richtigen Reihenfolge und ohne unnötige Leerläufe ablaufen. Kein Gewerk wartet auf Zuarbeit, weil die Absprache fehlt.</p>
        <p className="text-gray-600">Das bedeutet konkret: Sie telefonieren mit einem Ansprechpartner bei Radex – nicht mit vier verschiedenen Handwerkern, die unterschiedliche Aussagen machen. Rückfragen, Terminänderungen, Bestandsüberraschungen werden zentral gesteuert. Sie werden informiert, wenn etwas Unerwartetes auftaucht – und erhalten eine konkrete Aussage dazu, was das für Zeitplan und Kosten bedeutet.</p>
        <p className="text-gray-600 font-bold">SHK Meisterbetrieb</p>
        <p className="text-gray-600">Sanitär und Heizung unter Meisterverantwortung von Bernd Knoop – eingetragen, normgerecht, mit Gewährleistung.</p>
        <p className="text-gray-600 font-bold">Ein Ansprechpartner</p>
        <p className="text-gray-600">Ein Vertrag, ein Zeitplan, eine Verantwortung. Radex koordiniert alle Gewerke – Sie bleiben außen vor.</p>
        <p className="text-gray-600 font-bold">Verbindliche Angebote</p>
        <p className="text-gray-600">Nach Bestandsaufnahme und Planung erhalten Sie ein konkretes, nachvollziehbares Angebot – aufgeschlüsselt und ohne versteckte Positionen.</p>
        <p className="text-gray-600 font-bold">Komplettbadsanierung Kosten</p>
        <p className="text-gray-600">Was kostet ein Bad komplett sanieren? Preisfaktoren und Orientierung finden Sie auf der Seite Badsanierung Kosten.</p>
      </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bodengleiche Dusche, Badplanung und Materialauswahl – was bei einer Komplettbadsanierung geplant werden muss</h3>
        <p className="text-gray-600">Eine vollständige Erneuerung des Bades gibt die Möglichkeit, alles neu zu denken – nicht nur zu ersetzen, was vorher da war. Welche Duschlösung passt zum Grundriss und zur Nutzung? Wo wird das WC positioniert? Wie viel Stauraum ist realistisch? Diese Fragen klingen nach Innenarchitektur, sind aber Kernfragen der Sanitärplanung – denn sie bestimmen die Leitungsführung, die Vorwandkonstruktion und die Bodenneigung.</p>
        <p className="text-gray-600 font-bold">Bodengleiche Dusche planen und realisieren</p>
        <p className="text-gray-600">Die bodengleiche Dusche ist heute bei Komplettbadsanierungen eine der am häufigsten gewünschten Lösungen – und aus gutem Grund: Sie ist komfortabler als eine Duschwanne mit Einstieg, leichter zu reinigen und macht das Bad barrierearmer. Technisch stellt sie allerdings Anforderungen, die nur bei einer vollständigen Erneuerung des Bodenaufbaus erfüllt werden können.</p>
        <p className="text-gray-600">Der Abfluss muss im Boden positioniert werden, das Gefälle muss präzise eingebaut werden, Abdichtung und Ablauf müssen systemkonform verbunden sein. Das ist bei einer Komplettbadsanierung der richtige Zeitpunkt – nicht bei einer Teilrenovierung.</p>
        <p className="text-gray-600 font-bold">Badplanung als Grundlage der Komplettbadsanierung</p>
        <p className="text-gray-600">Wer ein Bad komplett sanieren lässt, sollte vor Baubeginn eine klare Vorstellung davon haben, was am Ende entstehen soll. Radex bespricht mit Ihnen Grundriss, Nutzungsgewohnheiten, Ausstattungsideen und Budget – und entwickelt daraus eine Planung, die technisch umsetzbar, optisch überzeugend und wirtschaftlich sinnvoll ist.</p>
        <p className="text-gray-600">Mehr zur Badplanung, zu Grundrisslösungen und zur Materialauswahl finden Sie auf der Seite Badplanung. Eine gute Planung ist die Grundlage für ein verlässliches Angebot – und für eine Komplettbadsanierung, die am Ende das hält, was sie versprochen hat.</p>
        <p className="text-gray-600 font-bold">Ablauf der Komplettbadsanierung – Schritt für Schritt</p>
        <p className="text-gray-600">Wer verstehen möchte, was wann passiert – von der ersten Beratung bis zur Übergabe –, findet eine detaillierte Beschreibung auf der Seite Ablauf Badsanierung. Dort erklären wir, welche Gewerke in welcher Reihenfolge eingesetzt werden und was Radex in jeder Phase konkret tut.</p>
        <p className="text-gray-600">Zur zeitlichen Planung – wie lange das Bad nicht nutzbar ist, welche Faktoren die Bauzeit beeinflussen und was eine realistische Zeitplanung ausmacht – lesen Sie auf der Seite Badsanierung Dauer.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Komplettbadsanierung im Rhein-Main-Gebiet – wo Radex tätig ist</h3>
        <p className="text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Standort Rödermark liegt zentral im südlichen Hessen – von dort aus sind wir ohne große Anfahrtswege in der gesamten Region aktiv. Komplettbadsanierungen führen wir regelmäßig in Gemeinden durch, die sich im südöstlichen Rhein-Main-Bereich konzentrieren: Seligenstadt, Hainburg, Mainhausen und Babenhausen gehören dabei ebenso zu unserem Einsatzgebiet wie Dieburg, Groß-Zimmern, Langen und Egelsbach.</p>
        <p className="text-gray-600">Auch in Rödermark selbst sowie in den angrenzenden Städten im Landkreis Offenbach und im Landkreis Darmstadt-Dieburg sind wir regelmäßig mit Komplettbadsanierungen beauftragt. Die Region ist charakterisiert durch einen hohen Anteil an Bestandsgebäuden aus den 1960er bis 1980er Jahren – Häuser und Wohnungen, deren Bäder heute oft grundlegend erneuert werden müssen. Genau hier kennt Radex die typischen Ausgangssituationen: Vorwandinstallationen, die damals noch nicht Standard waren, Leitungsführungen, die heute nicht mehr normgerecht sind, und Abdichtungen, die längst ihre Lebensdauer überschritten haben.</p>
        <p className="text-gray-600">Die vollständige Übersicht aller Städte und Gemeinden, in denen Radex Badsanierungen durchführt, finden Sie auf der Seite Einsatzgebiete.</p>
        <p className="text-gray-600 font-bold">Unsere Einsatzorte für Komplettbadsanierungen</p>
        <p className="text-gray-600 ">Rödermark</p>
        <p className="text-gray-600 ">Hainburg</p>
        <p className="text-gray-600 ">Babenhausen</p>
        <p className="text-gray-600 ">Groß-Zimmern</p>
        <p className="text-gray-600 ">Egelsbach</p>
        <p className="text-gray-600 ">Seligenstadt</p>
        <p className="text-gray-600 ">Mainhausen</p>
        <p className="text-gray-600 ">Dieburg</p>
        <p className="text-gray-600 ">Langen</p>
        <p className="text-gray-600 ">Rhein-Main-Gebiet</p>
      </div>



    </>
  );

  const seo = {
    title: "Komplettsanierung Rhein-Main | Kernsanierung zum Festpreis | Radex",
    description: "Komplettsanierung & Kernsanierung im Rhein-Main-Gebiet vom Generalunternehmer: ein Ansprechpartner, ein Festpreis, ein Zeitplan. Jetzt kostenlose Beratung sichern!",
    path: "/komplettsanierung-rhein-main",
    serviceName: "Komplettsanierung"
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      seoContent={seoContent}
    />
  );
}
