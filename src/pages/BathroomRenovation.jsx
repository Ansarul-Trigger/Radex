import ServicePageTemplate from '../components/ServicePageTemplate';


import {
  Bath,
  Sparkles,
  Paintbrush,
  Toilet,
  Accessibility,
  ShowerHead
} from 'lucide-react';

export default function BathroomRenovation() {
  const heroData = {
  title: "Badsanierung im",
  titleSpan: "Rhein-Main-Gebiet- sanieren mit Radex",
  subtitle:
    "Radex plant und koordiniert Ihre Badsanierung im Rhein-Main-Gebiet – als SHK Meisterbetrieb mit Erfahrung in Badplanung, Sanitärinstallation und Generalunternehmerschaft für alle Gewerke.",
  image:
    "/img/badsanierung-rhein-main-radex.webp"
};





const whoIsForData = {
  title: "Womit können wir Ihnen helfen?",
  subtitle:
    "Badsanierung ist kein einheitliches Projekt – diese Vorhaben begleiten wir.",
  list: [
    {
      title: "Komplettbadsanierung",
      desc: "Das Bad wird vollständig erneuert – von der Rohinstallation bis zur fertigen Übergabe.",
      icon: Bath
    },
    {
      title: "Badmodernisierung",
      desc: "Mehr Komfort, moderne Ausstattung und zeitgemäße Technik.",
      icon: Sparkles
    },
    {
      title: "Badrenovierung",
      desc: "Bestehende Badezimmer technisch und optisch modernisieren.",
      icon: Paintbrush
    },
    {
      title: "Gäste-WC sanieren",
      desc: "Kleine Räume intelligent planen und funktional gestalten.",
      icon: Toilet
    },
    {
      title: "Barrierefreies Bad",
      desc: "Mehr Komfort, Sicherheit und langfristige Nutzbarkeit.",
      icon: Accessibility
    },
    {
      title: "Dusche statt Badewanne",
      desc: "Mehr Komfort und Bewegungsfreiheit.",
      icon: ShowerHead
    }
  ]
};

  const typicalProjectsData = {
    title: "Leistungsumfang: Was gehört zu einer Badsanierung?",
    subtitle: "Sanitär und Heizung führen wir als SHK-Meisterbetrieb selbst aus, die übrigen Gewerke koordinieren wir.",
    projects: [
      { title: "Sanitär & Heizungstechnik", desc: "Neue Wasserleitungen, Anschluss von Dusche, Wanne, WC und Waschtisch, Erneuerung der Entwässerung und Integration von Heizkörpern – als SHK-Meisterbetrieb selbst ausgeführt.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Rückbau & Abdichtung", desc: "Kontrollierter Rückbau von Fliesen und Sanitärobjekten, anschließend die Abdichtung aller Nass- und Spritzwasserbereiche – Grundvoraussetzung für ein dauerhaft dichtes Bad.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Elektro & Trockenbau", desc: "Beleuchtung, Schalter, Steckdosen, Lüftung und Vorwandinstallationen – koordiniert, damit keine Schnittstelle offen bleibt.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Fliesen & Oberflächen", desc: "Großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – durch routinierte Fliesenleger, die mit modernen Abdichtungssystemen vertraut sind.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" },
      { title: "Ausbau & Einrichtung", desc: "Montage von Badmöbeln, Armaturen, Spiegel, Accessoires und Beleuchtung – das Bad wird vollständig fertiggestellt übergeben.", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" },
      { title: "Badplanung & Beratung", desc: "Vor dem ersten Handgriff steht die Planung: Bedarf, Grundriss, Materialwünsche und Budget – mit einem Angebot, das auf Ihrer konkreten Situation basiert.", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Wie viel kostet eine Badsanierung?",
    subtitle: "Die tatsächlichen Kosten hängen von Größe, Zustand und gewünschter Ausstattung ab. Die folgenden Beispiele geben eine erste Preisorientierung.",
    items: [
      { title: "Gäste-WC", price: "€7.500", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Komfortbad", price: "€17.500", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Premium-Wellnessbad", price: "€28.000", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was gehört zu einer Badsanierung?", a: "Der Umfang hängt vom Ausgangszustand und Ihren Wünschen ab. Bei einer Komplettbadsanierung umfasst das typischerweise: Rückbau des Bestandsbades, Erneuerung oder Verlegung von Wasser- und Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation, Elektroarbeiten (Licht, Steckdosen, Lüftung), Fliesenarbeiten sowie die abschließende Montage von Sanitärobjekten, Armaturen und Badmöbeln. Bei einer Badmodernisierung oder gezielten Badrenovierung kann der Umfang deutlich kleiner sein." },
    { q: "Wie läuft eine Badsanierung mit Radex ab?", a: "Am Anfang steht ein kostenloser Beratungstermin bei Ihnen vor Ort. Wir schauen uns das Bad an, klären Ihre Wünsche und die technische Ausgangslage. Danach erstellen wir ein konkretes Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke – von Rückbau und Rohinstallation bis zu Fliesen, Elektro und Ausbau – in einer abgestimmten Reihenfolge. Sie haben während der gesamten Badsanierung einen festen Ansprechpartner bei Radex." },
    { q: "Ist Radex ein SHK-Meisterbetrieb?", a: "Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Betriebsleiter und eingetragener Meister ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik. Alle Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus. Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe, für deren Arbeit wir die Verantwortung tragen." },
    { q: "Was kostet eine Badsanierung im Rhein-Main-Gebiet?", a: "Die Kosten hängen von mehreren Faktoren ab: Badgröße, Umfang der Arbeiten (Komplettbadsanierung oder Teilmaßnahme), Zustand der vorhandenen Leitungen und Abdichtung, gewählte Materialien und Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen. Pauschale Preisangaben ohne Bestandsaufnahme sind wenig verlässlich – Radex erstellt nach einem Ortstermin ein verbindliches Angebot auf Basis Ihrer konkreten Situation." },
    { q: "Kann Radex auch nur einzelne Teile des Bades sanieren?", a: "Ja. Nicht jede Badsanierung muss ein kompletter Neustart sein. Wenn der Grundzustand des Bades noch in Ordnung ist, können gezielte Teilmaßnahmen sinnvoller sein: eine neue bodengleiche Dusche anstelle der Badewanne, ein modernes Waschtischunterschrank, neue Armaturen oder eine zeitgemäße Beleuchtung. Radex berät Sie ehrlich, welche Maßnahmen in Ihrer Situation tatsächlich sinnvoll sind." },
    { q: "In welchen Städten bietet Radex Badsanierung an?", a: "Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Regelmäßig sind wir unter anderem in Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm tätig – sowie in vielen weiteren Städten im Landkreis Offenbach, im Main-Kinzig-Kreis, im Wetteraukreis und im Raum Aschaffenburg." },
    {
  q: "Wie lange dauert eine Badsanierung?",
  a: "Die Dauer hängt vom Umfang der Arbeiten ab. Kleinere Modernisierungen dauern oft nur wenige Tage, komplette Badsanierungen mehrere Wochen."
},
{
  q: "Welche Förderungen gibt es für ein barrierefreies Bad?",
  a: "Je nach Situation können Zuschüsse oder Förderprogramme verfügbar sein. Wir beraten Sie gerne zu aktuellen Möglichkeiten."
},
{
  q: "Kann Radex die komplette Badsanierung übernehmen?",
  a: "Ja. Radex übernimmt die Koordination aller Gewerke und begleitet Ihr Projekt von der Planung bis zur schlüsselfertigen Übergabe."
},
{
  q: "Bietet Radex Badsanierungen in meiner Stadt an?",
  a: "Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig. Kontaktieren Sie uns gerne für eine unverbindliche Prüfung."
}
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ein neues Bad – mehr als nur neue Fliesen</h3>
        <p className="mb-4 text-gray-600">Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich meist zuerst das fertige Ergebnis vor: eine bodengleiche Dusche, helle Fliesen, vielleicht einen frei stehenden Waschtischunterschrank. Was dazwischen liegt – Planung, Koordination, Technik, Logistik – ist weniger sichtbar, aber entscheidend dafür, ob eine Badsanierung reibungslos verläuft oder zur Belastungsprobe wird.</p>
        <p className="mb-4 text-gray-600">Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als Generalunternehmer und SHK-Meisterbetrieb mit Sitz in Rödermark koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb selbst aus. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und Innenausbau werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.</p>
        <p className="text-gray-600">Ob Sie ein komplettes Bestandsbad entkernen und neu aufbauen möchten, Ihre Badmodernisierung gezielt auf mehr Komfort ausrichten wollen oder ein barrierefreies Bad für die nächste Lebensphase planen – Radex begleitet Ihr Projekt von Anfang bis Ende.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badsanierung aus einer Hand – was das wirklich bedeutet</h3>
        <p className="mb-4 text-gray-600">Wer für eine Badsanierung selbst Handwerker koordiniert – Klempner, Elektriker, Fliesenleger, Trockenbauer – übernimmt de facto die Aufgabe eines Bauleiters. Terminkollisionen, Schnittstellen zwischen Gewerken und fehlende Zuarbeit sind die häufigsten Gründe, warum Badsanierungen länger dauern oder teurer werden als geplant.</p>
        <p className="mb-4 text-gray-600">Radex übernimmt diese Koordination vollständig. Als Generalunternehmer schließen Sie mit uns einen Vertrag – und wir stellen sicher, dass alle Beteiligten zum richtigen Zeitpunkt am richtigen Ort sind. Das gilt für unsere eigenen Sanitär- und Heizungsarbeiten als SHK-Meisterbetrieb ebenso wie für die koordinierten Fachbetriebe für Elektro, Trockenbau, Fliesen und Oberflächen.</p>
        <p className="text-gray-600">Was Sie davon haben: einen einzigen Ansprechpartner für alle Fragen, eine abgestimmte Planung und die Gewissheit, dass kein Gewerk auf das andere warten muss, weil die Koordination fehlt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Von der Idee zum fertigen Bad – so arbeitet Radex</h3>
        <p className="mb-4 text-gray-600"><strong>1. Kostenlose Beratung & Bestandsaufnahme:</strong> Wir kommen zu Ihnen und schauen uns das Bad gemeinsam an. Dabei klären wir: Welche Leitungen liegen wo? Wie ist der Zustand von Abdichtung, Fliesen und Sanitärobjekten? Was möchten Sie verändern? Dieser Termin ist kostenlos und unverbindlich.</p>
        <p className="mb-4 text-gray-600"><strong>2. Planung & Materialauswahl:</strong> Auf Basis der Bestandsaufnahme entwickeln wir gemeinsam ein Konzept: Grundriss, Ausstattung, Materialien, Lichtführung. Eine gute Planung ist die Grundlage für eine verlässliche Kostenaussage.</p>
        <p className="mb-4 text-gray-600"><strong>3. Verbindliches Angebot:</strong> Sie erhalten ein konkretes, nachvollziehbares Angebot – aufgeschlüsselt nach Leistungsbereichen, ohne versteckte Positionen.</p>
        <p className="mb-4 text-gray-600"><strong>4. Ausführung & Koordination:</strong> Nach Auftragserteilung übernimmt Radex die komplette Steuerung. Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – alle Schritte werden in abgestimmter Reihenfolge ausgeführt.</p>
        <p className="text-gray-600"><strong>5. Übergabe:</strong> Das Bad wird vollständig fertiggestellt übergeben – sauber, geprüft, mit allen Anschlüssen in Betrieb. Wir stehen auch danach als Ansprechpartner zur Verfügung.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badsanierung im Rhein-Main-Gebiet – wo Radex tätig ist</h3>
        <p className="mb-4 text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Ausgangspunkt ist Rödermark im südlichen Hessen – von dort aus sind wir regelmäßig in der gesamten Rhein-Main-Region aktiv, ohne lange Anfahrtszeiten und ohne Aufschläge für die Entfernung.</p>
        <p className="text-gray-600">Zu unseren typischen Einsatzgebieten gehören Frankfurt am Main, Offenbach am Main, Darmstadt und Hanau, aber auch die mittelgroßen Städte und Gemeinden im direkten Umland: Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm. Viele unserer Kunden kommen aus dem Landkreis Offenbach und den angrenzenden Landkreisen Darmstadt-Dieburg und Main-Kinzig. Wir sind aber auch regelmäßig im Wetteraukreis, im Rheingau-Taunus-Kreis und im Aschaffenburger Raum tätig.</p>
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

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badezimmer modernisieren – wenn das Bad besser werden soll, ohne neu gebaut zu werden</h3>
        <p className="text-gray-600">Viele Bäder sind nicht kaputt — sie fühlen sich nur nicht mehr richtig an. Die Dusche ist eng und hat einen Einstieg, der früher niemanden gestört hat. Das Licht über dem Spiegel reicht für den Morgen nicht aus. Die Armaturen stammen aus einer Zeit, in der Wassersparen noch kein Thema war. Und der Handtuchheizkörper funktioniert technisch — aber heizt er noch gleichmäßig?</p>
        <p className="text-gray-600">In solchen Situationen braucht es keine komplette Entkernung. Eine gezielte Badmodernisierung verbessert genau das, was den Alltag beeinflusst — die Dusche, das Licht, die Armaturen, die Ausstattung — und lässt das übrige Bad so, wie es ist. Das Ergebnis ist ein Bad, das sich besser anfühlt, besser aussieht und besser funktioniert. Ohne Wochen auf der Baustelle. </p>
        <p className="text-gray-600">Radex Objektmanagement GmbH führt Badmodernisierungen im Rhein-Main-Gebiet als Generalunternehmer durch. Bernd Knoop verantwortet als eingetragener SHK Meister alle Sanitär- und Heizungsarbeiten. Weitere Gewerke — etwa Lichtinstallation oder Trockenbau — werden durch koordinierte Fachbetriebe ausgeführt. Alles aus einer Hand, alles abgestimmt.</p>
      </div>

      
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bad erneuern ohne Entkernung – was eine Badmodernisierung von einer Komplettsanierung unterscheidet</h3>
        <p className="text-gray-600">Der Begriff Badmodernisierung beschreibt keine fest definierte Maßnahmenliste — er beschreibt eine Absicht. Das Bad soll besser werden: komfortabler, heller, zeitgemäßer, funktionaler. Aber die Grundsubstanz — Abdichtung, Leitungen, Grundriss — ist in Ordnung und muss nicht angetastet werden.</p>
        <p className="text-gray-600 font-bold">Was bei einer Badmodernisierung bleibt und was sich ändert </p>
        <p className="text-gray-600">Bei einer Badmodernisierung wird nicht alles zurückgebaut. Wände, Boden und Grundinstallation bleiben in der Regel bestehen — vorausgesetzt, sie sind noch in einem einwandfreien Zustand. Was verändert wird, sind die sichtbaren und nutzbaren Elemente: Dusche, Armaturen, Sanitärobjekte, Beleuchtung, Badmöbel und Zubehör.</p>
        <p className="text-gray-600">Das macht die Badmodernisierung zu einer deutlich schlankeren Maßnahme als eine Komplettbadsanierung. Kein Rückbau auf den Rohbau. Kein wochenlanger Komplettausfall des Bades. Und deutlich weniger Aufwand in Planung, Koordination und Ausführung — bei einem Ergebnis, das im Alltag einen echten Unterschied macht.</p>
        <p className="text-gray-600">Die Entscheidung, ob eine Modernisierung ausreicht oder ob tiefere Eingriffe notwendig sind, trifft Radex erst nach einer sorgfältigen Bestandsaufnahme. Manchmal stellt sich beim genauen Hinschauen heraus, dass hinter veralteten Armaturen auch veraltete Leitungen stecken — und dann ist eine größere Maßnahme wirtschaftlich sinnvoller. Radex berät Sie ehrlich und ohne Verkaufsdruck.</p>
        <p className="text-gray-600 font-bold">Wann eine Badmodernisierung die richtige Wahl ist</p>
        <p className="text-gray-600">Eine Badmodernisierung ist die richtige Maßnahme, wenn das Bad keine grundlegenden baulichen Mängel aufweist, aber in Komfort, Optik oder Funktion hinter den eigenen Ansprüchen zurückbleibt. Typische Situationen: Das Bad ist aus den 1990er oder frühen 2000er Jahren, in einem grundsätzlich guten Zustand, aber die Ausstattung ist überaltert. Die Dusche hat einen Einstieg und soll moderner werden. Das Licht reicht für den Morgen nicht aus. Die Armaturen tropfen oder funktionieren nicht mehr zuverlässig. Oder das Bad soll schlicht frischer und angenehmer wirken — für den eigenen Alltag oder für eine bevorstehende Vermietung.</p>
        <p className="text-gray-600">In all diesen Fällen ist eine vollständige Entkernung nicht nötig. Eine gezielte Badmodernisierung bringt das Bad auf einen Stand, der sich täglich bewährt.</p>
      </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Neue Dusche einbauen – Herzstück der Badmodernisierung</h3>
        <p className="text-gray-600">Kaum eine Maßnahme verändert das Badgefühl so spürbar wie eine neue Dusche. Wer morgens in eine komfortable, großzügige Dusche steigt, erlebt ein anderes Bad — unabhängig davon, ob die Fliesen aus diesem Jahrzehnt stammen oder nicht. Neue Dusche, neue Armaturen, modernes Duschsystem: Das verändert den Alltag.</p>
        <p className="text-gray-600 font-bold">Moderne Dusche – was sich verändert hat </p>
        <p className="text-gray-600">Duschen haben sich in den vergangenen Jahren stark weiterentwickelt. Regenduschköpfe, Thermostatarmaturen, Handbrausen mit verschiedenen Strahlarten und digitale Steuerungen gehören heute zu einem komfortablen Duschsystem. Was früher Luxushotels vorbehalten war, ist heute in jedem Badezimmer umsetzbar — und verändert das Duschen vom funktionalen Akt zur bewussten Alltagspause.</p>
        <p className="text-gray-600">Radex bespricht mit Ihnen, welches Duschsystem zu Ihrem Bad, Ihrem Wasseranschluss und Ihrem Nutzungsanspruch passt. Ob eine schlichte Aufputzbrause oder ein vollständiges Duschpaneel — die Entscheidung hängt von Ihren Wünschen und den technischen Gegebenheiten ab.</p>
        <p className="text-gray-600 font-bold">Bodengleiche Dusche nachrüsten – was technisch möglich ist</p>
        <p className="text-gray-600">Eine bodengleiche Dusche ist der häufigste Modernisierungswunsch — und technisch anspruchsvoller als ein einfacher Armaturentausch. Der Bodenaufbau muss ein entsprechendes Gefälle aufnehmen können, der Ablauf muss positioniert werden und die Abdichtung muss systemgerecht ausgeführt sein. Das ist ein Eingriff, der den Bodenbereich betrifft — aber nicht zwingend das gesamte Bad.</p>
        <p className="text-gray-600">Ob eine bodengleiche Dusche in Ihrem Bad ohne Rückbau des gesamten Bodenaufbaus realisierbar ist, klärt Radex bei der Bestandsaufnahme. In manchen Fällen ist es möglich, in anderen führt der Weg über eine tiefere Maßnahme. Mehr Informationen dazu finden Sie auf der Seite Dusche statt Badewanne.</p>
        <p className="text-gray-600 font-bold">Neue Dusche als SHK-Leistung</p>
         <p className="text-gray-600">Der Einbau einer neuen Dusche — egal ob Teilaustausch oder komplette Neuinstallation im Bestand — ist eine Sanitärleistung. Wasseranschlüsse, Abfluss und Armaturenmontage müssen von einem Fachbetrieb ausgeführt werden. Radex ist als SHK Meisterbetrieb unter der Leitung von Bernd Knoop eingetragen und führt diese Arbeiten normgerecht und mit Gewährleistung aus. Das ist der Unterschied zu einer reinen Montagefirma ohne handwerkliche Meisterzulassung.</p>
      </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Armaturen modernisieren – der schnelle Weg zu mehr Komfort und weniger Verbrauch</h3>
        <p className="text-gray-600">Moderne Armaturen sind mehr als eine gestalterische Frage. Sie regeln Wassertemperatur und -menge präziser, reagieren schneller, verbrauchen weniger Wasser — und halten deutlich länger als günstige Massenware. Wer in ein gutes Armaturenset investiert, merkt das täglich: beim Duschen, beim Händewaschen, beim Füllen der Badewanne.</p>
        <p className="text-gray-600">Im Rahmen einer Badmodernisierung lassen sich Armaturen gezielt erneuern — an der Dusche, am Waschtisch, an der Badewanne. Thermostatarmaturen sorgen dafür, dass die gewünschte Temperatur sofort verfügbar ist und konstant bleibt — ohne langes Warten oder Nachregeln. Einhebelmischer mit Mengenbegrenzung helfen, den Wasserverbrauch zu reduzieren. Wandarmaturen schaffen ein aufgeräumtes, zeitloses Bild. </p>
        <p className="text-gray-600">Radex berät Sie bei der Auswahl moderner Armaturen, die zu Ihrem vorhandenen Leitungssystem passen, Ihren Komfortansprüchen entsprechen und sich langfristig bewähren. Als SHK Meisterbetrieb führt Radex die Montage der neuen Armaturen sach- und normgerecht aus.</p>
        <p className="text-gray-600 font-bold">Was beim Armaturentausch zu beachten ist</p>
        <p className="text-gray-600">Nicht jede Armatur passt zu jedem Anschluss. Vor dem Austausch prüft Radex Anschlussdruck, Leitungsquerschnitte und vorhandene Absperrtechnik. In manchen älteren Bädern empfiehlt es sich, beim Armaturentausch gleichzeitig die Zulaufleitungen zu erneuern — weil Absperrventile nach Jahrzehnten nicht mehr zuverlässig schließen oder die Leitungen Ablagerungen aufweisen. Das muss nicht aufwändig sein, sollte aber von einem SHK-Fachbetrieb beurteilt werden.</p>
      </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badbeleuchtung modernisieren – Licht ist kein Nebenpunkt</h3>
        <p className="text-gray-600">Schlechte Beleuchtung macht jedes Bad ungemütlich — egal wie hochwertig die Fliesen oder die Armaturen sind. Ein einzelner Deckenspot in der Mitte des Raumes wirft harte Schatten und beleuchtet den Spiegel von oben — genau das falsche Licht für das Gesicht. Gute Badbeleuchtung ist eine Planungsaufgabe, keine Montageaufgabe.</p>
        <p className="text-gray-600 font-bold">Lichtplanung für das Badezimmer </p>
        <p className="text-gray-600">Eine zeitgemäße Badbeleuchtung besteht aus mehreren Ebenen: Grundbeleuchtung, die den Raum hell und gleichmäßig ausleuchtet. Spiegelbeleuchtung, die das Gesicht ohne Schatten beleuchtet — seitlich oder ringförmig, nicht von oben. Und Akzentlicht, das Atmosphäre schafft und das Bad wohnlicher macht.</p>
        <p className="text-gray-600">Im Rahmen einer Badmodernisierung lässt sich das Lichtkonzept neu denken und umsetzen — mit LED-Einbauleuchten, beleuchteten Spiegelschränken und dimmbaren Schaltkreisen. Das verändert das Bad grundlegend — ohne eine einzige Fliese anzutasten.</p>
        <p className="text-gray-600 font-bold">Nasszonen-konforme Lichtinstallation</p>
        <p className="text-gray-600">Beleuchtung im Badezimmer unterliegt besonderen Anforderungen. Leuchten in Nasszonen müssen entsprechend schutzklassifiziert (IP-Schutz) und durch Elektrofachbetriebe eingebaut werden. Gleiches gilt für Schalter, Steckdosen und Spiegelleuchten in bestimmten Mindestabständen zu Wasserquellen.</p>
        <p className="text-gray-600">Radex koordiniert die Elektroarbeiten durch zugelassene Fachbetriebe, die routiniert im Nassbereich arbeiten. So entsteht eine Badbeleuchtung, die normsicher ist und im Alltag überzeugt.</p>
        <p className="text-gray-600 font-bold">Spiegel und Spiegelschrank erneuern</p>
        <p className="text-gray-600">Ein beleuchteter Spiegel oder Spiegelschrank ist einer der einfachsten Wege, ein Bad heller und moderner zu machen. Moderne Spiegel mit integrierter LED-Beleuchtung, Touchdimmer und Heizfolie gegen Beschlag gehören heute zur Standardausstattung eines zeitgemäßen Badezimmers.</p>
        <p className="text-gray-600">Im Rahmen der Badmodernisierung prüft Radex, ob der vorhandene Elektroanschluss ausreicht oder ob ein neuer Zuleiter benötigt wird — und koordiniert den Einbau des neuen Spiegels mit der übrigen Lichtinstallation.</p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">WC, Waschtisch und Badmöbel – Ausstattung modernisieren für mehr Alltags­komfort</h3>
        <p className="text-gray-600 font-bold">Wandhängendes WC und moderne Sanitärobjekte</p>
        <p className="text-gray-600">Ein wandhängendes WC verändert das Bild eines Badezimmers erheblich: Der Boden bleibt frei, das Bad wirkt leichter und größer. Und wer schon immer reinigen musste, weiß: Ein freier Boden unter dem WC ist im Alltag schlicht angenehmer. Im Rahmen einer Badmodernisierung ist der Austausch eines Standmodells gegen ein wandhängendes WC unter bestimmten Voraussetzungen möglich — abhängig davon, ob eine geeignete Vorwandinstallation vorhanden oder nachrüstbar ist. </p>
        <p className="text-gray-600">Radex prüft bei der Bestandsaufnahme, welche Möglichkeiten bestehen. Die Montage und der Anschluss neuer Sanitärobjekte wird als SHK-Leistung unter Meisterverantwortung von Bernd Knoop ausgeführt.</p>
        <p className="text-gray-600 font-bold">Waschtisch und Unterschrank erneuern</p>
        <p className="text-gray-600">Ein neuer Waschtisch mit passendem Unterschrank bringt Stauraum und Ordnung ins Bad. Aufsatzwaschbecken, Unterbauwaschbecken, wandhängende Varianten — die Optionen sind vielfältig. Entscheidend ist, was zum vorhandenen Grundriss, zur nutzbaren Breite und zum Leitungsanschluss passt.</p>
        <p className="text-gray-600">Gleichzeitig ist der Waschtischwechsel ein guter Anlass, den Wasseranschluss und den Siphon zu erneuern — beides Bauteile, die nach zehn oder fünfzehn Jahren oft nicht mehr die optimale Funktion haben.</p>
        <p className="text-gray-600 font-bold">Badmöbel und Stauraumlösungen</p>
        <p className="text-gray-600">Guter Stauraum macht ein Bad angenehmer zu nutzen. Offene Regale, geschlossene Schränke, Nischenlösungen oder Hochschränke — was passt, hängt von der Raumgröße und den persönlichen Gewohnheiten ab. Badmöbel lassen sich im Rahmen einer Modernisierung gezielt ergänzen oder erneuern, ohne dass bauliche Eingriffe notwendig sind.</p>
        <p className="text-gray-600 font-bold">Badkomfort verbessern — konkret</p>
         <p className="text-gray-600"> <li>Wandhängendes WC statt Standmodell</li>
                                       <li>Thermostatarmatur an der Dusche</li>
                                       <li>Neues Waschtischarrangement mit Unterschrank</li>
                                       <li>Beleuchteter Spiegel oder Spiegelschrank</li>
                                       <li>LED-Einbauleuchten statt alter Deckenleuchte</li>
                                       <li>Handtuchheizkörper erneuern</li>
                                      <li>Neue Badmöbel und Stauraumergänzungen</li>
                                      <li>Duschabtrennung oder Schiebetür erneuern</li>
                                      </p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badmodernisierung und Badkomfort verbessern – auch im Hinblick auf lange Nutzbarkeit</h3>
        <p className="text-gray-600 font-bold">Komfortableres Bad für jeden Lebensabschnitt</p>
        <p className="text-gray-600">Viele Modernisierungswünsche haben einen praktischen Hintergrund: Das Bad soll sich für alle, die es täglich nutzen, leichter und angenehmer anfühlen. Ein barriereärmerer Zugang zur Dusche, eine Sitzmöglichkeit, ein Haltegriff an der richtigen Stelle — das sind keine Konzessionen an das Alter, sondern schlicht komfortable Lösungen, die den Alltag erleichtern. </p>
        <p className="text-gray-600">Im Rahmen einer Badmodernisierung lassen sich solche Elemente gezielt integrieren, ohne das Bad komplett umbauen zu müssen. Radex berät, welche Maßnahmen in Ihrer Situation sinnvoll sind und technisch umgesetzt werden können. Für tiefgreifendere Umbaumaßnahmen lesen Sie mehr auf der Seite Barrierefreies Bad.</p>
        <p className="text-gray-600 font-bold">Licht als Komfortfaktor</p>
        <p className="text-gray-600">Gutes Licht im Bad ist kein Luxus — es ist ein Alltägliches. Wer morgens bei schlechtem Licht steht, beginnt den Tag mit einem Mangel. Wer abends von hartem Deckenlicht geblendet wird, kann nicht entspannen. Eine moderne Badbeleuchtung mit dimmbaren Schaltkreisen, warmweißen Tönen am Abend und tageslichtähnlichem Licht am Spiegel macht das Bad zu einem Raum, in dem man sich gerne aufhält.</p>
        <p className="text-gray-600">Das klingt nach Kleinigkeit — aber es ist einer der Bereiche, in dem eine Badmodernisierung die stärkste Wirkung pro investiertem Euro erzielt.</p>
        <p className="text-gray-600 font-bold">Bad heller machen – ohne Umbau</p>
        <p className="text-gray-600">Ein Bad kann heller wirken, ohne dass eine Fliese bewegt wird. Spiegelbeleuchtung, ein beleuchteter Spiegelschrank, neue Einbauleuchten in der Decke und helle Badmöbel verändern die Wahrnehmung des Raumes erheblich. Wenn das Bad zusätzlich wenig Tageslicht hat, ist eine gut geplante Kunstlichtlösung der entscheidende Faktor.</p>
        <p className="text-gray-600">Radex bespricht mit Ihnen, welches Lichtkonzept zu Ihrem Bad passt — und koordiniert die Umsetzung durch den Elektrofachbetrieb.</p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wie läuft eine Badmodernisierung mit Radex ab?</h3>
        <p className="text-gray-600">Eine Badmodernisierung ist kein Standardpaket. Was modernisiert wird, in welcher Reihenfolge und in welchem Umfang, hängt von Ihrem Bad, Ihren Wünschen und Ihrem Budget ab. Radex geht deshalb systematisch vor:
        1. Beratungsgespräch und Bestandsaufnahme:
        <p>Radex kommt zu Ihnen und schaut sich das Bad an. Wir besprechen, was Sie stört, was Sie sich wünschen und was technisch möglich ist. Erst nach dieser Bestandsaufnahme lässt sich beurteilen, ob eine Modernisierung ausreicht oder ob tiefere Eingriffe sinnvoller wären.</p>
        </p>
      2. Planung und Angebot:

      <p>Auf Basis der Bestandsaufnahme erstellt Radex ein konkretes Angebot — nachvollziehbar aufgeschlüsselt, ohne versteckte Positionen. Für die Badplanung und die Materialauswahl stehen wir beratend zur Seite.</p>
      3. Koordinierte Ausführung:
      <p>Radex koordiniert alle beteiligten Gewerke. Sanitärarbeiten führt Radex als SHK Meisterbetrieb selbst aus. Elektro und weitere Gewerke werden durch Fachbetriebe ausgeführt — abgestimmt, termingerecht, ohne unnötige Wartezeiten für Sie.</p>
    4. Übergabe:
    Nach Abschluss der Arbeiten gehen wir das Bad gemeinsam durch. Radex erklärt Bedienung und Wartungshinweise und steht auch nach der Übergabe als fester Ansprechpartner zur Verfügung.
    <li>SHK Meisterbetrieb <p>Sanitär- und Heizungsarbeiten unter Meisterverantwortung von Bernd Knoop — normgerecht, eingetragen, mit Gewährleistung. Nicht jede Firma, die Duschen einbaut, hat diese Qualifikation.</p></li>
    <li>Ein Ansprechpartner<p>Auch bei einer Badmodernisierung mit mehreren Gewerken haben Sie bei Radex einen festen Ansprechpartner — von der Bestandsaufnahme bis zur Übergabe.</p></li>
     <li>Keine unnötigen Mehrkosten<p>Radex empfiehlt keine Maßnahmen, die nicht gebraucht werden. Wenn eine gezielte Modernisierung ausreicht, sagen wir das — auch wenn eine größere Maßnahme mehr Umsatz brächte.</p></li>
      </div>

 <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badmodernisierung im Rhein-Main-Gebiet – wo Radex tätig ist</h3>
        <p className="text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Badmodernisierungen führen wir regelmäßig im nördlichen und nordöstlichen Rhein-Main-Raum durch — in Städten und Gemeinden, in denen viele Bäder aus den 1980er und 1990er Jahren stammen und nun gezielte Aufwertung verdienen.</p>
        <p className="text-gray-600">Zu unserem Einsatzgebiet gehören unter anderem Bad Vilbel, Karben und Maintal im Norden der Region sowie Bruchköbel, Nidderau und Erlensee im Main-Kinzig-Kreis. Auch in Schöneck und dem Großraum Hanau sind wir regelmäßig tätig. Unser Standort in Rödermark liegt zentral im Rhein-Main-Gebiet — von dort aus sind kurze Anfahrten in alle genannten Städte möglich. </p>
        <p className="text-gray-600">In all diesen Kommunen kennen wir die typischen Ausgangssituationen: Bäder aus dem Reihenhausbau der 1980er Jahre, die gut erhalten sind, aber in Dusche, Armaturen und Licht deutlich hinter den heutigen Möglichkeiten zurückbleiben. Genau für diese Bäder ist eine Badmodernisierung die wirtschaftlich sinnvolle und handwerklich richtige Antwort.</p>
        <p className="text-gray-600">Die vollständige Übersicht aller Städte und Gemeinden, in denen Radex tätig ist, finden Sie auf der Seite Einsatzgebiete.</p>
        <p className="text-gray-600 font-bold">Unsere Einsatzorte für Badmodernisierungen:
          <li>Bad Vilbel</li>
           <li>Maintal</li>
            <li>Nidderau</li>
             <li>Schöneck</li>
              <li>Rödermark</li>
               <li>Karben</li>
                <li>Bruchköbel</li>
                 <li>Erlensee</li>
                  <li>Hanau</li>
                   <li>Rhein-Main-Gebiet</li>
        </p>
      </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badezimmer renovieren – was das bedeutet und wann es die richtige Entscheidung ist</h3>
        <p className="text-gray-600">Das Bad ist in die Jahre gekommen: Die Fliesen wirken veraltet, die Dusche läuft nicht mehr richtig, die Armaturen sehen abgenutzt aus und der Waschtisch passt nicht mehr zum Rest. Trotzdem ist das Bad funktionsfähig. Die Leitungen arbeiten. Es gibt keine Anzeichen für Schäden an der Abdichtung. In dieser Situation ist eine Badrenovierung oft der sinnvollere und wirtschaftlichere Weg als eine vollständige Entkernung.</p>
        <p className="text-gray-600"> Eine Badrenovierung erneuert, was sichtbar ist – und was tatsächlich erneuerungsbedürftig ist. Sie setzt dort an, wo das Bad aufgehört hat zu gefallen oder zu funktionieren, ohne Bausubstanz zu opfern, die noch in Ordnung ist. Das Ergebnis: ein frisches, aufgeräumtes Badezimmer mit deutlich weniger Bauaufwand als bei einer Komplettsanierung. </p>
        <p className="text-gray-600"> Radex Objektmanagement GmbH führt Badrenovierungen im Rhein-Main-Gebiet als Generalunternehmer durch. Für Sanitärarbeiten – neue Dusche, neues WC, neuer Waschtisch, Armaturen, Anschlüsse – verantwortet Bernd Knoop als eingetragener SHK Meister die Ausführung. Weitere Gewerke wie Fliesenarbeiten oder Malerarbeiten werden durch koordinierte Fachbetriebe übernommen. Für Sie bleibt der Aufwand überschaubar.</p>
       </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badrenovierung, Badmodernisierung, Badsanierung – was steckt hinter diesen Begriffen?</h3>
        <p className="text-gray-600">Im Alltag werden die Begriffe oft durcheinandergeworfen. Das führt dazu, dass Erwartungen und tatsächlicher Leistungsumfang auseinanderfallen. Hier ist, was Radex unter den einzelnen Begriffen versteht – und was das praktisch für Ihr Bad bedeutet.</p>
        <p className="text-gray-600 font-bold"> Badrenovierung </p>
        <p className="text-gray-600">Eine Badrenovierung erneuert sichtbare Schichten und gezielte Ausstattungsteile – Fliesen, Sanitärobjekte, Armaturen, Badmöbel, Oberflächen. Die Grundsubstanz des Bades bleibt erhalten. Kein vollständiger Rückbau, keine neue Leitungsführung, keine neue Abdichtung – vorausgesetzt, der Bestand ist in Ordnung. Das Bad wird aufgefrischt und in Teilen erneuert, nicht von Grund auf neu gebaut.</p>
        <p className="text-gray-600 font-bold">Badmodernisierung</p>
        <p className="text-gray-600">Die Badmodernisierung steht zwischen Renovierung und Komplettsanierung. Sie setzt auf sichtbare Erneuerung mit Komfortgewinn – eine neue bodengleiche Dusche, neue Beleuchtungskonzepte, modernere Sanitärtechnik. Der Eingriff ist tiefer als bei einer reinen Renovierung, aber noch kein vollständiger Neuaufbau.</p>
        <p className="text-gray-600 font-bold">Komplettbadsanierung</p>
        <p className="text-gray-600">Bei der Komplettbadsanierung wird das gesamte Bad bis auf den Rohbau zurückgebaut. Leitungen, Abdichtung, Installationen – alles wird neu. Das ist der richtige Schritt, wenn die Grundsubstanz nicht mehr stimmt oder eine grundlegende Neukonzeption gewünscht wird.</p>
        <p className="text-gray-600 font-bold">Welche Maßnahme ist die richtige für Ihr Bad?</p>
        <p className="text-gray-600">Das lässt sich nicht pauschal beantworten – es hängt vom Zustand des Bestandsbades ab. Radex schaut sich Ihr Bad an und sagt Ihnen ehrlich, was sinnvoll ist: Badrenovierung, weitergehende Modernisierung oder eine umfassendere Sanierung. Einen Überblick über alle Möglichkeiten finden Sie auf der Seite Badsanierung im Rhein-Main-Gebiet.</p>
       </div>



        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Was bei einer Badrenovierung erneuert werden kann</h3>
        <p className="text-gray-600">Eine Badrenovierung ist kein starres Paket – sie richtet sich nach dem, was Ihr Bad braucht. Manche Bäder benötigen neue Fliesen, andere eine neue Dusche, wieder andere eine vollständig erneuerte Ausstattung bei intakten Fliesen. Radex bespricht mit Ihnen vor Ort, welche Bereiche sinnvoll erneuert werden – und welche ohne weiteres erhalten bleiben können.</p>
        <p className="text-gray-600 font-bold"> Oberflächen: Fliesen, Boden, Wände </p>
        <p className="text-gray-600">Veraltete oder beschädigte Fliesen sind einer der häufigsten Gründe für eine Badrenovierung. Ob Wandfliesen, Bodenfliesen oder beides – wenn die Oberflächen nicht mehr stimmen, lässt sich das Bad damit wirkungsvoll auffrischen. Bei intakter Abdichtung darunter können neue Fliesen direkt auf dem bestehenden Untergrund verlegt werden, wenn dieser eben und tragfähig ist. Das spart Bauzeit und Kosten gegenüber einem vollständigen Neuaufbau.</p>
        <p className="text-gray-600">Alternativ lassen sich Bestandsfliesen mit neuen Oberflächenlösungen kombinieren – etwa durch gezielte Akzente, neue Bodenbeläge im Duschbereich oder ergänzende Wandgestaltung. Wichtig dabei: Welche Lösung technisch und handwerklich sinnvoll ist, hängt immer vom konkreten Bestand ab. Radex bewertet das vor Ort.</p>
         <p className="text-gray-600 font-bold">Sanitärobjekte und Armaturen erneuern</p>
         <p className="text-gray-600 ">WC, Waschtisch, Dusche oder Badewanne – einzelne Sanitärobjekte lassen sich im Rahmen einer Badrenovierung austauschen, ohne das Bad vollständig auseinanderzunehmen. Voraussetzung ist, dass die Anschlüsse in einwandfreiem Zustand sind und die neue Ausstattung zu den bestehenden Anschlusspositionen passt oder diese mit vertretbarem Aufwand angepasst werden können.</p>
         <p className="text-gray-600 ">Als SHK Meisterbetrieb führt Radex diese Sanitärarbeiten normgerecht aus: Anschluss des neuen WCs, Montage des Waschtischs, Einbau des Duschablaufs, Armaturen setzen und prüfen. Bernd Knoop verantwortet als eingetragener Meister die Sanitärinstallation – das gilt auch für gezielte Teilmaßnahmen.</p>
         <p className="text-gray-600 ">Neue Armaturen machen optisch und funktional viel aus. Einhebelmischer, Thermostat-Armaturen, wandbündige Einbauvarianten – die Auswahl an modernen Lösungen ist groß. Radex bespricht mit Ihnen, was zu Ihrem Bad und Ihrem Nutzungsverhalten passt.</p>
         <p className="text-gray-600 font-bold ">Teilrenovierung oder vollständige Erneuerung?</p>
         <p className="text-gray-600 ">Bei einer Badteilrenovierung werden gezielt einzelne Bereiche erneuert – zum Beispiel nur die Sanitärobjekte, nur die Fliesen oder nur die Armaturen. Das kann sinnvoll sein, wenn der Rest des Bades in gutem Zustand ist. Manchmal ergibt es aber mehr Sinn, mehrere Maßnahmen zu bündeln, um das Ergebnis stimmig zu halten und die Bauzeit zu minimieren. Radex berät Sie dazu ehrlich.</p>
       </div>



        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Neue Dusche, Badmöbel und Ausstattung – Bad auffrischen mit Wirkung</h3>
        <p className="text-gray-600">Oft sind es wenige gezielte Maßnahmen, die den größten sichtbaren Unterschied machen. Eine neue Dusche statt einer alten Kunststoffwanne, ein ordentliches Badmöbel statt eines eingelaufenen Unterschranks, ein moderner Spiegel mit integrierter Beleuchtung – solche Maßnahmen verändern die Wirkung eines Badezimmers grundlegend, ohne dass das gesamte Bad angetastet werden muss.</p>
        <p className="text-gray-600 font-bold">Neue Dusche im Bestandsbad</p>
        <p className="text-gray-600">Eine der häufigsten Anfragen bei einer Badrenovierung ist eine neue Dusche. Ob die bestehende Duschwanne durch ein flacheres Modell ersetzt wird, ob eine Duschkabine ausgetauscht wird oder ob eine offenere Lösung mit einer Glasabtrennung entstehen soll – das hängt vom Grundriss und vom Zustand des Bodenaufbaus ab.</p>
        <p className="text-gray-600">Eine vollständig bodengleiche Dusche erfordert einen angepassten Bodenaufbau mit korrektem Gefälle und systemgerechter Abdichtung. Ob das im Rahmen einer Badrenovierung möglich ist, prüft Radex vor Ort. In manchen Situationen ist das umsetzbar – in anderen führt dieser Wunsch zu einer tiefergehenden Maßnahme. Mehr zum Thema lesen Sie auf der Seite Badmodernisierung.</p>
        <p className="text-gray-600 font-bold">Badmöbel und Stauraumlösungen</p>
        <p className="text-gray-600">Neue Badmöbel – Unterschrank, Spiegelschrank, Hochschrank – verändern die Wirkung eines Badezimmers spürbar, ohne einen einzigen Eingriff in die Bausubstanz. Sie bringen Ordnung, schaffen Stauraum und geben dem Bad eine einheitliche Gestalt.</p>
        <p className="text-gray-600">Radex koordiniert Badmöbel als Teil einer Badrenovierung: Montage, Anschluss an Wasserversorgung und Abfluss, saubere Wandbefestigung. Wenn ein neuer Waschtisch mit Unterschrankmöbel kombiniert wird, stimmen wir Sanitärinstallation und Möbelmontage aufeinander ab – das spart einen zweiten Handwerkereinsatz.</p>
        <p className="text-gray-600 font-bold">Badezimmer verschönern: Spiegel, Licht, Details</p>
        <p className="text-gray-600">Manchmal liegt das größte Verbesserungspotenzial in Details, die man leicht unterschätzt: Ein Spiegel mit Beleuchtung macht ein Badezimmer heller und wohnlicher. Neue Handtuchheizkörper ersetzen einen veralteten Rohrheizkörper. Neue Accessoires, Wandhaken und Ablagen strukturieren die Nutzfläche.</p>
        <p className="text-gray-600">Diese Maßnahmen lassen sich gut in eine Badrenovierung einbetten – als eigenständige Aufgaben oder als Ergänzung zu größeren Erneuerungen. Radex stimmt den Umfang mit Ihnen ab und stellt sicher, dass das Ergebnis stimmig ist.</p>
       </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wie Radex eine Badrenovierung angeht – von der Bestandsaufnahme bis zur sauberen Übergabe</h3>
        <p className="text-gray-600 font-bold ">Schritt 1: Bestandsaufnahme vor Ort</p>
        <p className="text-gray-600">Jede Badrenovierung beginnt mit einer ehrlichen Bestandsaufnahme. Radex sieht sich Ihr Bad an: Zustand der Fliesen, Zustand der Sanitärobjekte und Armaturen, Sichtprüfung auf Feuchtigkeitshinweise, Beurteilung der Anschlüsse. Erst auf dieser Grundlage lässt sich beurteilen, welche Maßnahmen im Rahmen einer Badrenovierung realisierbar sind – und ob die Substanz des Bades diese Maßnahmen trägt.  </p>
        <p className="text-gray-600">Diese Bestandsaufnahme ist kostenlos. Sie ist die Voraussetzung für ein seriöses Angebot – und für eine Badrenovierung, die kein böses Erwachen bringt, wenn Verdecktes erst während der Arbeit sichtbar wird. Zu den Kostengrundlagen lesen Sie mehr auf der Seite Badsanierung Kosten.</p>
        <p className="text-gray-600  font-bold">Schritt 2: Klares Angebot, klarer Umfang</p>
        <p className="text-gray-600">Nach der Bestandsaufnahme erhalten Sie von Radex ein konkretes Angebot: welche Maßnahmen durchgeführt werden, welche Materialien eingesetzt werden, was das kostet. Kein Angebot auf Zuruf, keine vage Schätzung. Erst wenn Umfang und Kosten klar sind, entscheiden Sie.</p>
        <p className="text-gray-600">Eine Badrenovierung ist oft kürzer im Vorlauf als eine Komplettbadsanierung – weil weniger Planung notwendig ist, wenn die Grundstruktur des Bades erhalten bleibt. Zu zeitlichen Abläufen und Bauzeiten finden Sie Informationen auf der Seite Badsanierung Dauer.</p>
        <p className="text-gray-600 font-bold">Schritt 3: Ausführung und Koordination</p>
        <p className="text-gray-600 ">Radex koordiniert alle Gewerke der Badrenovierung. Sanitärarbeiten werden als SHK Meisterbetrieb durch Bernd Knoop verantwortet. Fliesenleger, Maler und weitere Fachbetriebe werden durch Radex abgestimmt und eingesetzt. Sie haben einen Ansprechpartner – nicht mehrere Handwerker, die sich gegenseitig auf die Zuarbeit des anderen verlassen.</p>
        <p className="text-gray-600"> Bei einer Badrenovierung sind die Eingriffe in der Regel weniger tiefgreifend als bei einer Komplettsanierung – das bedeutet kürzere Bauzeit und geringere Belastung für den laufenden Haushalt. Ein Badezimmer renovieren lassen muss keine wochenlange Baustelle sein.</p>
        <p className="text-gray-600 font-bold">Wann Badrenovierung, wann mehr?</p>
        <p className="text-gray-600">Wenn Radex bei der Bestandsaufnahme feststellt, dass die Substanz des Bades tiefergehende Maßnahmen erfordert – zum Beispiel wegen Feuchtigkeit, Schäden an der Abdichtung oder veralteten Leitungen – sagen wir das deutlich. In diesen Fällen empfehlen wir eine umfassendere Sanierung, weil eine reine Badrenovierung keinen dauerhaften Mehrwert schafft. Lieber jetzt ehrlich als später teuer.</p>
       </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bestandsbad renovieren – was man wissen sollte, bevor man anfängt</h3>
        <p className="text-gray-600">Ein Bestandsbad renovieren ist kein Neubauprojekt. Das klingt banal – hat aber praktische Konsequenzen, die den Unterschied zwischen einem gelungenen und einem enttäuschenden Ergebnis ausmachen. Bestandsbäder haben Ecken, die nicht ganz rechtwinklig sind. Fliesen in einem Standardformat von vor zwanzig Jahren, das heute nicht mehr erhältlich ist. Anschlusspositionen, die sich nicht auf Anhieb mit dem Wunschobjekt decken.</p>
        <p className="text-gray-600">Wer im Bestandsbad renoviert, muss diese Gegebenheiten kennen und handwerklich damit umgehen können. Das unterscheidet eine erfahrene Ausführung von einer, die nur auf dem Papier gut aussieht. Radex arbeitet regelmäßig in Bestandsgebäuden im Rhein-Main-Gebiet – in Wohnhäusern aus den 1960er bis 1980er Jahren in Groß-Gerau, Rüsselsheim am Main und Mörfelden-Walldorf ebenso wie in jüngeren Bauten in Kelsterbach oder Raunheim.  </p>
        <p className="text-gray-600">Wir wissen, was bei Bestandsbädern typischerweise auftaucht: Fliesen, die schwerer abzutragen sind als erwartet. Abflüsse, die nicht genau dort sitzen, wo der Plan es vorsieht. Wandbereiche hinter alten Sanitärobjekten, die eine andere Vorbehandlung brauchen. Diese Dinge gehören zu einer sorgfältigen Badrenovierung dazu – und werden von Radex eingeplant, nicht als Zusatzposition nachgereicht.</p>
        <p className="text-gray-600 font-bold">Realistische Erwartungen</p>
         <p className="text-gray-600">Im Bestandsbad gibt es immer Überraschungen. Radex kommuniziert diese transparent – und klärt vor Baubeginn, was der Bestand erlaubt und was nicht.</p>
          <p className="text-gray-600 font-bold">SHK Meisterbetrieb</p>
           <p className="text-gray-600">Sanitärarbeiten bei der Badrenovierung führt Radex als eingetragener SHK Meisterbetrieb aus – verantwortet durch Bernd Knoop. Normgerecht, mit Gewährleistung.</p>
            <p className="text-gray-600 font-bold">Ein Ansprechpartner</p>
             <p className="text-gray-600">Radex koordiniert alle Gewerke der Badrenovierung. Sie sprechen mit einer Person – nicht mit mehreren Betrieben, die unterschiedliche Aussagen machen.</p>
             <p className="text-gray-600 font-bold">Klare Angebote</p>
             <p className="text-gray-600">Nach Bestandsaufnahme erhalten Sie ein verbindliches Angebot. Keine Pauschalen, keine Schätzungen auf Zuruf.</p>
       </div>

        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bad renovieren Kosten – womit Sie rechnen sollten</h3>
        <p className="text-gray-600">Die Kosten einer Badrenovierung hängen stark davon ab, was konkret erneuert wird. Eine gezielte Badteilrenovierung – zum Beispiel nur neue Sanitärobjekte bei unveränderten Fliesen – liegt im Kostenrahmen deutlich unterhalb einer vollständigen Fliesen- und Ausstattungserneuerung. Pauschale Preise für eine Badrenovierung helfen wenig, weil jedes Bestandsbad andere Ausgangsbedingungen hat.</p>
        <p className="text-gray-600 font-bold">Preisfaktoren bei der Badrenovierung</p>
        <p className="text-gray-600">Welche Arbeiten durchgeführt werden – Fliesen, Sanitärobjekte, Armaturen, Möbel – ist der wichtigste Kostenfaktor. Hinzu kommt der Zustand des Bestandes: Müssen Fliesen mühsam abgetragen werden oder lässt sich auf ihnen aufbauen? Sind Anschlusspositionen passend oder müssen Leitungen leicht angepasst werden? Welche Materialqualität wird gewählt?</p>
        <p className="text-gray-600">Eine transparente Übersicht über Kostenfaktoren bei Bad-Maßnahmen finden Sie auf der Seite Badsanierung Kosten. Dort erklären wir, welche Faktoren den Preis beeinflussen – und warum Pauschalen in den meisten Fällen nicht weiterhelfen.</p>
        <p className="text-gray-600 font-bold">Badteilrenovierung gezielt einsetzen</p>
        <p className="text-gray-600">Nicht immer muss bei einer Badrenovierung alles auf einmal angefasst werden. Eine Badteilrenovierung konzentriert sich auf den Bereich, der am dringendsten erneuert werden muss – oder den größten Effekt bringt. Häufig ist das eine Kombination aus neuen Sanitärobjekten und neuen Armaturen, während die Fliesen noch in gutem Zustand sind.</p>
        <p className="text-gray-600">Radex berät Sie, welche Kombination aus Maßnahmen für Ihr Bad das beste Verhältnis aus Wirkung und Aufwand ergibt. Das Ziel ist ein stimmiges Ergebnis – nicht möglichst viel auf einmal.</p>
        <p className="text-gray-600 font-bold">Wann lohnt sich eher eine Modernisierung?</p>
        <p className="text-gray-600">Wenn Sie sich mehr als eine oberflächliche Auffrischung wünschen – etwa eine neue bodengleiche Dusche, neue Beleuchtungskonzepte oder eine veränderte Raumaufteilung – kann eine weitergehende Badmodernisierung die sinnvollere Maßnahme sein. Der Übergang zur Modernisierung ist fließend; Radex zeigt Ihnen beide Optionen auf Basis des Bestandes.</p>
        <p className="text-gray-600">Bei grundlegenden Fragen zur Substanz – Leitungen, Abdichtung, Grundriss – ist wiederum die Komplettbadsanierung der richtige Ansatz. Das Beratungsgespräch bringt Klarheit.</p>
       </div>


        <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badrenovierung im Rhein-Main-Gebiet – Radex in Ihrer Region</h3>
        <p className="text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Für Badrenovierungen sind wir besonders häufig in den Städten und Gemeinden südwestlich von Rödermark aktiv – in einem Gebiet, das vom Rhein über den Main bis in die Wetterau reicht.</p>
        <p className="text-gray-600">In Groß-Gerau und Rüsselsheim am Main finden sich viele Wohngebäude aus den 1960er und 1970er Jahren, deren Badezimmer heute gezielt renoviert werden – ohne den Aufwand einer Komplettsanierung. In Mörfelden-Walldorf arbeiten wir regelmäßig in Eigentumswohnungen, in denen einzelne Sanitärbereiche erneuert werden sollen. Ebenso sind wir in Kelsterbach, Raunheim und Nauheim aktiv, wo Bestandsbäder mit gezielten Maßnahmen aufgefrischt werden.</p>
        <p className="text-gray-600">Auch in Büttelborn und Bischofsheim führen wir Badrenovierungen durch – schnell erreichbar von unserem Standort in Rödermark aus. Ob Einfamilienhaus, Reihenwohnung oder Mietobjekt: Radex kennt die typischen Bestandssituationen im Rhein-Main-Gebiet und weiß, was bei einer Badrenovierung realistisch umsetzbar ist.

Die vollständige Übersicht unserer Einsatzgebiete finden Sie auf der Seite <b><a href="/einsatzgebiete-rhein-main">Einsatzgebiete.</a></b></p>
        <p className="text-gray-600 font-bold">Unsere Einsatzorte für Badrenovierungen</p>
        <p className="text-gray-600">
           <li>Groß-Gerau</li> 
           <li>Mörfelden-Walldorf</li> 
           <li>Raunheim</li> 
           <li>Büttelborn</li> 
           <li>Rödermark</li> 
           <li>Rüsselsheim am Main</li> 
           <li>Kelsterbach</li> 
           <li>Nauheim</li> 
           <li>Bischofsheim</li> 
           <li>Rhein-Main-Gebiet</li> 
       </p>
        <p className="text-gray-600"></p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Gästetoilette renovieren – warum kleine Räume besondere Sorgfalt verdienen</h3>
        <p className="text-gray-600">Ein Gäste-WC ist kein Badezimmer im klassischen Sinne. Es gibt keine Dusche, keine Wanne, keinen langen Morgen — aber es ist trotzdem einer der meistgesehenen Räume im Haus. Wer Besuch empfängt, weiß: Das Gäste-WC hinterlässt einen Eindruck. Und dieser Eindruck entsteht in wenigen Sekunden, auf wenigen Quadratmetern.</p>
        <p className="text-gray-600">Viele Gästetoiletten in Bestandsgebäuden im Rhein-Main-Gebiet — in Dreieich, Neu-Isenburg, Rodgau und Langen — stammen aus den 1980er oder 1990er Jahren. Das WC ist ein älteres Standmodell mit aufgesetztem Spülkasten. Das Handwaschbecken ist zu groß für den Raum, die Armaturen sind nicht mehr zeitgemäß, das Licht kommt von einer einzelnen Deckenleuchte. Kein Einzelmangel — aber zusammen wirkt der Raum überaltert und ungepflegt, obwohl er technisch funktioniert.</p>
        <p className="text-gray-600">Genau hier setzt eine gezielte Gäste-WC Sanierung an. Radex Objektmanagement GmbH modernisiert kleine WCs im Rhein-Main-Gebiet als Generalunternehmer — mit neuer Sanitärtechnik unter Meisterverantwortung von Bernd Knoop, koordinierter Elektroinstallation, Fliesenarbeiten und Trockenbau durch Fachbetriebe. Alles aus einer Hand, alles aufeinander abgestimmt.</p>
         </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Kleines WC sanieren – was das Gäste-WC von einem Badezimmer unterscheidet</h3>
        <p className="text-gray-600">Wer ein kleines Bad saniert, denkt an Dusche, Abdichtung, Leitungen, vielleicht eine Wanne. Wer ein Gäste-WC saniert, hat andere Prioritäten. Die Herausforderung ist nicht die technische Tiefe — sie ist die Raumwirkung auf kleinstem Grundriss.</p>
        <p className="text-gray-600 font-bold">Repräsentation auf wenigen Quadratmetern</p>
        <p className="text-gray-600">Ein Gäste-WC ist selten größer als drei bis fünf Quadratmeter. Manchmal sind es nur zwei. Wer in so einem Raum das falsche WC, das falsche Waschbecken oder die falsche Beleuchtung wählt, macht den Raum funktional — aber nicht angenehm. Und der Raum ist repräsentativ: Er wird nicht täglich selbst genutzt, aber er wird bewertet — von jedem, der ihn betritt.</p>
        <p className="text-gray-600">Ein modernes Gäste-WC muss deshalb drei Dinge gleichzeitig leisten: Es muss auf kleinstem Raum funktionieren, optisch hochwertig wirken und sich angenehm anfühlen. Das ist eine Planungsaufgabe, keine reine Montageaufgabe.</p>
        <p className="text-gray-600 font-bold">Kein Duschbereich — andere Anforderungen</p>
        <p className="text-gray-600">Im Gegensatz zum Kleines-Bad-Sanieren gibt es beim Gäste-WC in der Regel keine Nasszone mit Bodenabfluss, keine Abdichtung für einen Duschbereich und keine Anforderungen an Bodengefälle oder Dampfsperren. Das vereinfacht einige Aspekte — aber es bedeutet nicht, dass die Sanitärinstallation weniger sorgfältig ausgeführt sein muss. Wasserzuleitungen, Abflüsse und Spülkästen müssen normgerecht installiert und mit Gewährleistung versehen sein.</p>
        <p className="text-gray-600">Radex führt alle Sanitärarbeiten im Gäste-WC als SHK Meisterbetrieb unter der Meisterverantwortung von Bernd Knoop aus. Das gilt für den Einbau des Wand-WCs ebenso wie für den Anschluss des Handwaschbeckens und die Montage der Armaturen.</p>
        <p className="text-gray-600 font-bold">Abgrenzung zur Seite „Kleines Bad sanieren"</p>
        <p className="text-gray-600">Wer ein kleines Bad mit Dusche oder Badewanne modernisieren möchte, findet auf der Seite Kleines Bad sanieren die passenden Informationen. Das Gäste-WC ist ein anderer Raumtyp — kompakter, repräsentativer, ohne Badenote — und verdient eine eigene Herangehensweise.</p>
      </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wand-WC einbauen – der entscheidende Schritt für ein modernes Gäste-WC</h3>
        <p className="text-gray-600">Das platzsparende WC ist das Herzstück jeder Gäste-WC Sanierung. Ein wandhängendes WC mit verdecktem Spülkasten in einer Vorwandinstallation verändert den Raum grundlegend — es spart Tiefe, lässt den Boden frei und gibt dem Raum eine Leichtigkeit, die ein Standmodell mit aufgesetztem Kasten nie erreichen kann.</p>
        <p className="text-gray-600  font-bold">Warum ein Wand-WC den Raum verändert</p>
        <p className="text-gray-600">Ein klassisches Stand-WC mit aufgesetztem Spülkasten beansprucht die gesamte Wandtiefe und wirkt durch den sichtbaren Keramikkasten klobig. Ein wandhängendes WC mit Unterputz-Spülkasten sitzt auf einer Vorwandkonstruktion, die in die Wandstärke integriert oder als schmale Vorsatzschale ausgeführt wird. Das Ergebnis: Der Boden ist frei, der Raum wirkt größer, und die Reinigung ist erheblich einfacher.</p>
        <p className="text-gray-600">In einem Gäste-WC mit nur zwei bis vier Quadratmetern Grundfläche ist dieser Unterschied besonders spürbar. Ein frei hängender Keramikkörper auf sauberem Boden wirkt hochwertig — unabhängig davon, ob die Fliesen aus diesem Jahrzehnt stammen oder nicht.</p>
        <p className="text-gray-600 font-bold">Vorwandinstallation nachrüsten – was technisch nötig ist</p>
        <p className="text-gray-600">Die Vorwandinstallation besteht aus einem Ständerwerk mit eingebautem Spülkasten (Unterputz-Spülkasten), das vor die eigentliche Wand gesetzt wird. Darüber kommt eine Beplankung — in der Regel Gipskarton —, die dann gefliest oder verputzt wird. Der Spülkasten bleibt zugänglich über eine Betätigungsplatte.</p>
        <p className="text-gray-600">Die Installation erfordert sowohl Sanitärarbeit (Abwasser- und Zuleitungsanschluss) als auch Trockenbau. Radex koordiniert beides: Die Sanitärinstallation erfolgt unter Meisterverantwortung von Bernd Knoop als SHK Meisterbetrieb, den Trockenbau führen koordinierte Fachbetriebe aus. So entsteht eine Vorwandinstallation, die handwerklich korrekt ausgeführt ist und langfristig funktioniert.</p>
        <p className="text-gray-600 font-bold">Welche WC-Modelle passen ins Gäste-WC?</p>
        <p className="text-gray-600">Für kleine Gästetoiletten empfehlen sich kurzbauende WC-Modelle — sogenannte Rimless-WCs (randlose Keramik) mit einer Ausladung von 48 bis 52 cm sind auch in engen Räumen komfortabel nutzbar. Modelle mit integrierter Dusch-WC-Funktion sind im Gäste-WC ungewöhnlich, aber technisch machbar, wenn der Stromanschluss vorhanden ist.</p>
        <p className="text-gray-600">Radex berät bei der Modellauswahl und stimmt die Entscheidung mit den räumlichen Gegebenheiten ab. Die Auswahl der Betätigungsplatte — sichtbarer Teil des Spülsystems — ist dabei nicht nur funktional, sondern auch gestalterisch ein wichtiger Baustein.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Kleines Waschbecken für das Gäste-WC – platzsparend und hochwertig</h3>
        <p className="text-gray-600">Das Handwaschbecken im Gäste-WC hat eine andere Funktion als ein Waschtisch im Badezimmer. Es wird nicht zum Waschen oder Zähneputzen genutzt — es dient dem kurzen Händewaschen nach dem WC-Besuch. Das bedeutet: Es darf kleiner sein. Und es sollte kleiner sein — denn ein zu großes Waschbecken in einem kleinen Raum nimmt Platz weg, der für das Raumgefühl entscheidend ist.</p>
        <p className="text-gray-600">Kompakte Handwaschbecken sind ab etwa 38 bis 45 cm Breite erhältlich — als Aufsatzmodell, als Unterbauvariante oder als wandhängendes Modell ohne Möbelunterbau. Welches Modell passt, hängt vom verfügbaren Raum, den Leitungspositionen und dem gewünschten Stauraum ab.</p>
        <p className="text-gray-600 font-bold">Stauraum im Gäste-WC — auch auf kleinem Grundriss möglich</p>
        <p className="text-gray-600">Auch ein kleines Gäste-WC braucht einen Platz für Seife, Handtücher und kleine Utensilien. Vollständig offene Wände wirken schnell unfertig. Ein schmaler Unterschrank unter dem Handwaschbecken, ein kleines offenes Regal neben dem Spiegel oder eine Nische in der Vorwandkonstruktion bringen Ordnung, ohne den Raum zu verstopfen.</p>
        <p className="text-gray-600">Radex berät, welche Stauraumlösung im jeweiligen Raum umsetzbar ist — und plant das Handwaschbecken, den Unterschrank und das Regal als stimmiges Gesamtbild.</p>
        <p className="text-gray-600 font-bold">Armaturen für das Handwaschbecken</p>
        <p className="text-gray-600">Auch bei einer kleinen Armatur am Handwaschbecken lohnt es sich, in Qualität zu investieren. Ein Einhebelmischer mit Keramikkartusche, ein berührungsloser Sensor-Wasserhahn oder eine Einhebelmischarmatur mit Kaltwasservorlauf (für sparsamere Nutzung) — die Auswahl ist groß, die Entscheidung hängt vom Budget und von der Nutzungsgewohnheit ab.</p>
        <p className="text-gray-600">Radex montiert alle Armaturen als SHK Meisterbetrieb normgerecht und unter Meisterverantwortung von Bernd Knoop — mit Absperrung, Dichtprüfung und Inbetriebnahme.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Lichtgestaltung im Gäste-WC – kleiner Raum, große Wirkung</h3>
        <p className="text-gray-600">Licht ist im Gäste-WC kein Nebenthema. Es ist der entscheidende Faktor für die Raumwirkung. Eine einzelne Deckenleuchte in der Mitte eines engen Raumes wirft harte Schatten, macht das Gesicht unvorteilhaft und lässt den Raum kleiner wirken als er ist. Gute Lichtgestaltung im Gäste-WC denkt über die Deckenleuchte hinaus.</p>
        <p className="text-gray-600 font-bold">Spiegel mit Beleuchtung</p>
        <p className="text-gray-600">Der wichtigste Lichtpunkt im Gäste-WC sitzt nicht an der Decke — er sitzt am Spiegel. Ein Spiegel mit seitlicher Beleuchtungsleiste oder ein runder Spiegel mit umlaufender LED-Hintergrundbeleuchtung beleuchtet das Gesicht gleichmäßig ohne Schatten. Das ist nicht nur ästhetisch besser — es lässt den Raum auch wohnlicher wirken.</p>
        <p className="text-gray-600">Moderne Badezimmerspiegel mit integrierter LED-Beleuchtung gibt es in vielen Formaten — rund, rechteckig, mit oder ohne Heizfolie gegen Beschlag. Radex berät bei der Auswahl und koordiniert den Elektroanschluss durch einen zugelassenen Elektrofachbetrieb.</p>
        <p className="text-gray-600 font-bold">Deckenbeleuchtung richtig planen</p>
        <p className="text-gray-600">Eine einzelne Leuchte in der Raummitte ist selten die beste Lösung. Besser ist eine Grundbeleuchtung, die den Raum gleichmäßig ausleuchtet — entweder durch mehrere kleine LED-Einbauspots oder durch eine flächige, blendfreie Deckenleuchte. In Kombination mit dem Spiegellicht entsteht eine angenehme Lichtsituation, die den kleinen Raum nicht brutal ausleuchtet, sondern ihn angemessen beleuchtet.</p>
        <p className="text-gray-600">Dimmbare Schaltkreise sind auch im Gäste-WC möglich und machen den Raum abends angenehmer. Radex koordiniert das Lichtkonzept zusammen mit dem Elektrofachbetrieb — abgestimmt auf den vorhandenen Anschluss und die geplante Ausstattung.</p>
        <p className="text-gray-600 font-bold">Normsicherheit in der Nasszone</p>
        <p className="text-gray-600">Auch im Gäste-WC gelten für Leuchten in bestimmten Bereichen (Schutzbereich um das Waschbecken) besondere IP-Schutzklassen. Steckdosen müssen in ausreichendem Abstand zu Wasserquellen angeordnet werden. All das gehört zur korrekten Elektroplanung eines Gäste-WCs.</p>
        <p className="text-gray-600">Radex koordiniert die Elektroarbeiten ausschließlich durch zugelassene Elektrofachbetriebe. Die Gesamtplanung — was wo installiert wird — stimmt Radex im Vorfeld mit allen Beteiligten ab, damit keine nachträglichen Anpassungen nötig sind.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Modernes Gäste-WC gestalten – Fliesen, Farben und Oberflächen auf kleinstem Raum</h3>
        <p className="text-gray-600 font-bold">Wie Fliesen den Raum beeinflussen</p>
        <p className="text-gray-600">In einem kleinen Gäste-WC wirken Gestaltungsentscheidungen besonders stark. Kleinteilige Fliesenmuster mit vielen Fugen können einen engen Raum noch enger erscheinen lassen. Großformatige Fliesen in einem ruhigen Ton — Grau, Beige, dunkles Anthrazit oder ein warmes Steingrau — schaffen dagegen ein ruhiges, großzügiges Bild.</p>
        <p className="text-gray-600">Eine durchgehende Wandverkleidung in einem einzigen Material — vom Boden bis zur Decke, oder als Vollflächengestaltung einer einzelnen Wand — wirkt moderner als eine klassische Bordürenteilung. Manche Gäste-WC Sanierungen setzen bewusst auf eine Akzentwand: eine Wand mit dunklem Format, die übrigen Flächen hell und zurückhaltend — ein einfaches Mittel mit großer optischer Wirkung.</p>
        <p className="text-gray-600">Radex koordiniert Fliesenarbeiten durch Fliesenfachbetriebe. Die Auswahl der Materialien berät Radex im Planungsgespräch — mit Blick auf Raumwirkung, Reinigungsaufwand und Budget.</p>
        <p className="text-gray-600 font-bold">Alternativen zu Fliesen im Gäste-WC</p>
        <p className="text-gray-600">Fliesen sind nicht die einzige Option. Im Gäste-WC werden Wände, die nicht direkt am Waschbecken oder WC liegen, auch mit feuchtraumgeeignetem Wandpaneel, mit Mineralputz oder mit wasserabweisender Farbe gestaltet. Das kann die Gesamtkosten reduzieren und bietet gestalterischen Spielraum — zum Beispiel für eine strukturierte Oberfläche an der Rückwand hinter dem Spiegel.</p>
        <p className="text-gray-600">Wichtig ist dabei: Im unmittelbaren Bereich um das Waschbecken sind bestimmte Schutzanforderungen einzuhalten. Radex und die koordinierten Fachbetriebe planen die Oberflächen normgerecht.</p>
        <p className="text-gray-600 font-bold">Gäste-WC Ideen — was wirklich funktioniert</p>
        <p className="text-gray-600">Die besten Gäste-WC Ideen setzen auf Reduktion: wenig, aber hochwertig. Ein guter Spiegel, ein schlichtes Wand-WC, kompaktes Waschbecken, dezente Armaturen und ruhige Oberflächen erzeugen mehr Wirkung als viele Details auf engem Raum. Radex plant das Gäste-WC als Gesamtbild — nicht als Ansammlung von Einzelentscheidungen.</p>
        <p className="text-gray-600 font-bold">Farbe und Wirkung im kleinen Raum</p>
        <p className="text-gray-600">Helle Flächen lassen kleine Räume größer wirken — das stimmt grundsätzlich, aber hell bedeutet nicht zwingend weiß. Ein ruhiges Hellgrau, ein warmes Sandton oder ein gedämpftes Salbeigrün können einen kleinen Raum genauso öffnen wie reines Weiß — und wirken dabei deutlich hochwertiger. Dunklere Töne an einer einzelnen Wand (zum Beispiel hinter dem Spiegel) setzen einen Akzent, ohne den Raum zu erdrücken.</p>
        <p className="text-gray-600">Radex berät zu Materialauswahl und Farbwirkung im Planungsgespräch — mit Blick auf das Gesamtbild aus Sanitärobjekten, Oberflächen, Licht und Armaturen.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Gäste-WC Kosten – was eine Sanierung realistisch kostet</h3>
        <p className="text-gray-600">Viele Eigentümer in Heusenstamm, Obertshausen, Dietzenbach und Egelsbach fragen zunächst nach Richtwerten — bevor eine Besichtigung stattfindet. Das ist verständlich. Die Kosten für eine Gäste-WC Sanierung hängen jedoch stark von drei Faktoren ab: dem Umfang der Maßnahmen, der gewählten Ausstattungsqualität und dem Zustand des Bestands.</p>
        <p className="text-gray-600 font-bold">Einfache Modernisierung</p>
        <p className="text-gray-600">Austausch von WC, Handwaschbecken und Armaturen bei vorhandener Vorwandinstallation und unverändertem Fliesenbestand. Kein Trockenbau, kein Fliesentausch, keine Lichtinstallation. In der Regel zwischen 2.000 und 3.500 Euro, abhängig von der Ausstattungswahl.</p>
        <p className="text-gray-600 font-bold">Vollständige Gäste-WC Sanierung</p>
        <p className="text-gray-600">Neue Vorwandinstallation, neues Wand-WC, neues Handwaschbecken mit Unterschrank, neuer Spiegel mit Beleuchtung, neuer Fliesenbelag und koordinierte Elektroinstallation. Typisch: 4.500 bis 8.000 Euro — je nach Raumgröße, Materialwahl und Ausführungsaufwand.</p>
        <p className="text-gray-600 font-bold">Hochwertige Ausführung</p>
        <p className="text-gray-600">Großformatige Natursteinoptik-Fliesen, hochwertige Designarmaturen, beleuchteter Spiegel mit Heizfolie, Nischenlösung in der Vorwand, Dusch-WC. Kosten ab 8.000 Euro und höher — abhängig von Materialauswahl und gestalterischem Anspruch.</p>
        <p className="text-gray-600 font-bold">Was die Kosten wirklich beeinflusst</p>
        <p className="text-gray-600">Die größten Kostentreiber bei einer Gäste-WC Sanierung sind nicht die Sanitärobjekte selbst — es sind die notwendigen Vor- und Nebenarbeiten. Eine neue Vorwandinstallation bedeutet Trockenbau, Sanitärinstallation und anschließende Fliesenarbeiten. Wer vorhandene Fliesen und eine vorhandene Vorwand nutzen kann, spart erheblich. Wer dagegen alles neu aufbaut, zahlt mehr — aber erhält auch ein komplett neues Ergebnis.</p>
        <p className="text-gray-600">Radex beurteilt beim Beratungsgespräch, welche Vorleistungen im Bestand nutzbar sind und wo ein Neuaufbau wirtschaftlich sinnvoller ist als Reparatur oder Weiterverwenden. Ein transparentes Angebot, aufgeschlüsselt nach Leistungen, erhalten Sie nach der Bestandsaufnahme — ohne Pauschalen und ohne versteckte Kosten. Mehr zur allgemeinen Kostenstruktur bei Badsanierungen finden Sie auf der Seite Badplanung.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wie läuft eine Gäste-WC Sanierung mit Radex ab?</h3>
        <p className="text-gray-600">Auch wenn das Gäste-WC nur wenige Quadratmeter umfasst — der Ablauf einer Sanierung folgt dem gleichen Prinzip wie bei einer größeren Badsanierung: erst verstehen, dann planen, dann ausführen.</p>
        <p className="text-gray-600 font-bold">1. Beratungsgespräch und Bestandsaufnahme</p>
        <p className="text-gray-600">Radex kommt zu Ihnen und schaut sich das Gäste-WC an. Dabei prüfen wir den Zustand der vorhandenen Leitungen, die Position der Zuleitungen und Abflüsse, den Zustand von Fliesen und Vorwand sowie den vorhandenen Elektroanschluss. Erst danach lässt sich beurteilen, welche Maßnahmen sinnvoll und wirtschaftlich sind.</p>
        <p className="text-gray-600 font-bold">2. Planung und Angebot</p>
        <p className="text-gray-600">Auf Basis der Bestandsaufnahme erstellt Radex ein Angebot mit allen Leistungspositionen — transparent aufgeschlüsselt. Für die Materialauswahl (Fliesen, Sanitärobjekte, Armaturen, Spiegel) steht Radex beratend zur Seite. Wer Unterstützung bei der Badplanung wünscht, erhält diese als Teil des Prozesses.</p>
        <p className="text-gray-600 font-bold">3. Koordinierte Ausführung aller Gewerke</p>
        <p className="text-gray-600">Radex koordiniert alle beteiligten Gewerke: Sanitär (SHK Meisterbetrieb unter Bernd Knoop), Trockenbau, Fliesen, Elektro. Alle Betriebe arbeiten abgestimmt — keine langen Wartezeiten zwischen den Gewerken, keine ungeklärten Schnittstellen. Ein Ansprechpartner für den gesamten Prozess.</p>
        <p className="text-gray-600 font-bold">4. Übergabe und Nachbetreuung</p>
        <p className="text-gray-600">Nach Fertigstellung geht Radex das Gäste-WC mit Ihnen durch. Wir erklären Bedienung und Pflegehinweise und stehen auch nach der Übergabe als Ansprechpartner zur Verfügung.</p>
        <p className="text-gray-600 font-bold">SHK Meisterbetrieb</p>
        <p className="text-gray-600">Alle Sanitär- und Heizungsarbeiten unter Meisterverantwortung von Bernd Knoop — normgerecht, mit Gewährleistung. Nur für SHK-Gewerke, nicht für Elektro oder Trockenbau. Kein „HSK", kein „Meisterbetrieb für alles" — sondern klare, ehrliche Positionierung.</p>
        <p className="text-gray-600 font-bold">Generalunternehmer im Rhein-Main-Gebiet</p>
        <p className="text-gray-600">Radex übernimmt die Gesamtkoordination — von der Planung bis zur Übergabe. Sie beauftragen einen Ansprechpartner, nicht fünf verschiedene Handwerker. Das spart Zeit, verhindert Schnittstellenprobleme und schützt Sie vor ungeklärter Verantwortung zwischen den Gewerken.</p>
        <p className="text-gray-600 font-bold">Kein Mindestauftrag</p>
        <p className="text-gray-600">Radex führt auch gezielte Einzelmaßnahmen durch — zum Beispiel den Austausch des WCs oder die Montage eines neuen Handwaschbeckens. Es muss keine Komplettsanierung sein, damit eine Zusammenarbeit sinnvoll ist.</p>
       </div>

       <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Gäste-WC sanieren im Rhein-Main-Gebiet – wo Radex tätig ist</h3>
        <p className="text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Gäste-WC Sanierungen führen wir regelmäßig in der gesamten Region durch — von Dreieich und Neu-Isenburg im westlichen Kreis Offenbach über Langen und Egelsbach im Kreis Offenbach-Süd bis nach Rodgau, Dietzenbach, Heusenstamm und Obertshausen.</p>
        <p className="text-gray-600">Viele Gästetoiletten in dieser Region stammen aus den 1980er und frühen 1990er Jahren — aus dem typischen Reihenhausbau jener Zeit. Das WC ist ein Standmodell mit aufgesetztem Kasten, das Waschbecken zu groß für den Raum, das Licht eine einzelne Deckenleuchte. Kein Notfall — aber deutlich hinter dem, was heute möglich und angemessen ist.</p>
        <p className="text-gray-600">Radex kennt diese Ausgangssituationen aus der täglichen Arbeit. Wir wissen, was in einem typischen Reihenhausgäste-WC aus dieser Bauzeit technisch vorhanden ist — und was realistischerweise verändert werden kann, ohne unnötigen Aufwand zu erzeugen. Von unserem Standort in Rödermark aus sind kurze Anfahrten in alle genannten Städte möglich.

Die vollständige Übersicht aller Städte und Gemeinden, in denen Radex tätig ist, finden Sie auf der Seite Einsatzgebiete.</p>
        <p className="text-gray-600 font-bold">Unsere Einsatzorte für Gäste-WC Sanierungen</p>
        <p className="text-gray-600">
          <li>Dreieich</li>
          <li>Langen</li>
          <li>Rodgau</li>
          <li>Heusenstamm</li>
          <li>Rödermark</li>
          <li>Neu-Isenburg</li>
          <li>Egelsbach</li>
          <li>Dietzenbach</li>
          <li>Obertshausen</li>
          <li>Rhein-Main-Gebiet</li>
        </p>
       
       </div>


    </>
  );

  const seo = {
  title:
    "Badsanierung Rhein-Main | Bad sanieren mit SHK-Meisterbetrieb | Radex",
  description:
    "Badsanierung im Rhein-Main-Gebiet. Komplettbadsanierung, Badmodernisierung, Badrenovierung, Gäste-WC und barrierefreie Bäder aus einer Hand. Jetzt unverbindlich beraten lassen.",
  path: "/badsanierung-rhein-main",
  serviceName: "Badsanierung"
};

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      showBathroomInfo={true}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      seoContent={seoContent}
    />
  );
}
