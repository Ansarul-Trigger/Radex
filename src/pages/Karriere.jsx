import { useEffect } from 'react';
import { ShieldCheck,Building, Layers,Award, Users, Wallet, Wrench, TrendingUp, Phone, Mail, Zap, HardHat, ClipboardList, Hammer, MessageSquare,GraduationCap } from 'lucide-react';
import '../badsanierung.css';
import useSeo from '../useSeo';


export default function Karriere() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Karriere bei Radex | Jobs im Handwerk im Rhein-Main-Gebiet",
    description: "Jobs bei Radex im Rhein-Main-Gebiet: Elektriker, Bauhelfer, Bauleiter & Allrounder (m/w/d). Sicherer Arbeitsplatz, faire Bezahlung, starkes Team. Jetzt unkompliziert bewerben!",
    path: "/karriere"
  });


  const benefits = [
    { icon: <Award size={28} color="#f97316" />, title: "SHK-Meisterbetrieb", desc: "Über 40 Jahre Erfahrung als etablierter Meisterbetrieb für Heizung, Sanitär und Klima." },
    { icon: <Building size={28} color="#f97316" />, title: "Generalunternehmer", desc: "Alles aus einer Hand – von der Planung bis zur schlüsselfertigen Übergabe." },
    { icon: <Layers size={28} color="#f97316" />, title: "Echte Projekte", desc: "Spannende Sanierungsprojekte im Rhein-Main-Gebiet statt monotoner Fließbandarbeit." },
    { icon: <ShieldCheck size={28} color="#f97316" />, title: "Sicherer Arbeitsplatz", desc: "Unbefristete Festanstellung mit pünktlicher Bezahlung und langfristiger Perspektive." },
    { icon: <TrendingUp size={28} color="#f97316" />, title: "Entwicklungsmöglichkeiten", desc: "Individuelle Weiterbildung, Aufstiegschancen und Übernahme von Verantwortung." },
    { icon: <Wrench size={28} color="#f97316" />, title: "Modernes Arbeitsumfeld", desc: "Hochwertiges Werkzeug, moderne Fahrzeuge und ein motiviertes, starkes Team." }
  ];

  const positions = [
    { icon: <Zap size={32} color="#f97316" />, title: "Elektriker (m/w/d)", desc: "Installationen, Modernisierung und Störungssuche in Wohn- und Gewerbeobjekten." },
    { icon: <HardHat size={32} color="#f97316" />, title: "Bauhelfer (m/w/d)", desc: "Materialvorbereitung, Baustellenunterstützung und Zuarbeit für die Gewerke." },
    { icon: <ClipboardList size={32} color="#f97316" />, title: "Bauleiter (m/w/d)", desc: "Koordination, Terminplanung und Qualitätssicherung auf unseren Baustellen." },
    { icon: <Hammer size={32} color="#f97316" />, title: "Allrounder / Handwerker (m/w/d)", desc: "Vielseitige Sanierungsarbeiten – auch Quereinsteiger sind willkommen." }
  ];

  const steps = [
    { number: 1, title: "Bewerbung senden", desc: "Per Telefon oder E-Mail – ganz unkompliziert." },
    { number: 2, title: "Kennenlernen", desc: "Sagen Sie uns, für welche Stelle Sie sich interessieren." },
    { number: 3, title: "Gespräch", desc: "Erzählen Sie uns von Ihrer Erfahrung und Verfügbarkeit." },
    { number: 4, title: "Start bei Radex", desc: "Wir besprechen die nächsten Schritte in einem persönlichen Gespräch." }
  ];


  

  return (
    <main className="badsanierung-page">
      {/* HERO */}
      <section className="career-hero">

<div className="hero-overlay"/>

<div className="container hero-grid">

<div className="hero-content">

<span className="hero-badge">
SHK-Meisterbetrieb • Seit über 40 Jahren
</span>

<h1>
Karriere bei Radex
<span>
Handwerk mit Perspektive
</span>
</h1>

<p>
Werden Sie Teil eines starken Teams und arbeiten Sie an echten
Sanierungsprojekten im Rhein-Main-Gebiet.
</p>

<div className="hero-actions">

<a href="#bewerben" className="btn br-btn-orange">
Jetzt bewerben
</a>

<a href="tel:+496074960620" className="btn btn-light">
<Phone size={18}/>
06074 960620
</a>

</div>

<div className="hero-points">

<div>✓ SHK-Meisterbetrieb</div>
<div>✓ Generalunternehmer</div>
<div>✓ Echte Projekte</div>

</div>

</div>

</div>

</section>

      {/* WHY WORK HERE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
            <p className="br-section-subtitle">Was Sie als Teil unseres Teams erwartet.</p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
            {benefits.map((item, idx) => (
              <div key={idx} className="br-benefit-card" style={{background: '#fff', border: '1px solid #e5e7eb'}}>
                <div className="br-benefit-icon" style={{marginBottom: '12px'}}>{item.icon}</div>
                <h3 style={{fontSize: '18px'}}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




{/* AUSBILDUNG & ENTWICKLUNG */}

<section 
className="br-section"
style={{
background:"#f8fafc",
padding:"80px 0"
}}
>

<div className="container">


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"40px",
alignItems:"center"
}}
>


{/* IMAGE */}

<div>

<img

src="/img/heizung-sanitaer-hausmodernisierung-radex.webp"

alt="Ausbildung bei Radex"

style={{

width:"100%",

height:"380px",

objectFit:"cover",

borderRadius:"16px"

}}

/>

</div>



{/* TEXT */}


<div>


<GraduationCap

size={45}

/>

<h2

className="br-section-title"

style={{
marginTop:"15px"
}}

>

Ausbildung & Entwicklung

</h2>

<p

style={{
fontSize:"18px",
lineHeight:"1.7"
}}

>

Radex ist Ausbildungsbetrieb und engagiert sich für den handwerklichen Nachwuchs. Junge Menschen lernen bei uns, wie Sanierung im Bestand funktioniert: vom ersten Arbeitsschritt über Material und Werkzeug bis zur sauberen Umsetzung auf der Baustelle.

Auch für Mitarbeiter mit Erfahrung ist Entwicklung möglich. Wer zuverlässig arbeitet, Verantwortung übernimmt und sich weiterentwickeln möchte, kann bei Radex mehr Aufgaben übernehmen – zum Beispiel in der Baustellenorganisation, in der Koordination oder in spezialisierten Fachbereichen.

</p>

<div
className="career-highlights"
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
gap: "16px",
marginTop: "30px"
}}
>

<div className="career-card">
<h4>Praxisnah lernen</h4>
<p>Direkte Erfahrung auf echten Sanierungsprojekten.</p>
</div>

<div className="career-card">
<h4>Verantwortung übernehmen</h4>
<p>Schrittweise mehr Verantwortung im Team.</p>
</div>

<div className="career-card">
<h4>Weiterentwicklung</h4>
<p>Perspektiven für langfristiges Wachstum.</p>
</div>

</div>

<div
style={{
marginTop:"20px"
}}
>




</div>



<a
href="mailto:info@radex-objektmanagement.de?subject=Ausbildung%20oder%20Einstieg%20bei%20Radex"
className="btn br-btn-orange"
style={{
display:"inline-block",
marginTop:"25px"
}}
>
Jetzt bewerben →
</a>



</div>



</div>


</div>


</section>




      {/* OPEN POSITIONS */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Offene Stellen</h2>
            <p className="br-section-subtitle">Wir suchen Verstärkung in mehreren Bereichen.</p>
          </div>
          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {positions.map((pos, idx) => (
              <div key={idx} className="br-benefit-card" style={{border: '1px solid #e5e7eb', background: '#fff'}}>
                <div className="br-benefit-icon" style={{marginBottom: '12px'}}>{pos.icon}</div>
                <h3 style={{fontSize: '20px'}}>{pos.title}</h3>
                <p>{pos.desc}</p>
                <a href="#bewerben" className="dropdown-item" style={{color: '#f97316', fontWeight: 600, marginTop: '12px', display: 'inline-block'}}>Jetzt bewerben &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So einfach bewerben Sie sich</h2>
            <p className="br-section-subtitle">Vollständige Unterlagen sind zunächst nicht nötig.</p>
          </div>
          <div className="br-process-flow">
            {steps.map((step, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center'}}>
                <div className="br-process-step">
                  <div className="br-step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p style={{fontSize: '14px', color: '#6b7280', marginTop: '8px', maxWidth: '180px'}}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="bewerben" className="br-section">
        <div className="container text-center" style={{maxWidth: '800px'}}>
          <h2 className="br-section-title">Jetzt Teil des Teams werden</h2>
          <p className="br-section-subtitle" style={{marginBottom: '32px'}}>
            Melden Sie sich kurz telefonisch oder per E-Mail. Sagen Sie uns, welche Position Sie interessiert und
            wann Sie verfügbar sind – den Rest besprechen wir persönlich.
          </p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="tel:+496074960620" className="btn br-btn-orange" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Phone size={18} /> 06074 960620
            </a>
            <a href="mailto:info@radex-objektmanagement.de?subject=Bewerbung%20bei%20Radex" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
              <Mail size={18} /> Per E-Mail bewerben
            </a>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              WhatsApp <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
            </a>
          </div>
        </div>
      </section>


   {/* FAQ */}

        <section className="br-section br-bg-light faq-section">

<div className="container">

<div className="faq-header">

<h2 className="br-section-title">
Häufige Fragen
</h2>

<p className="br-section-subtitle">
Die wichtigsten Antworten zur Bewerbung bei Radex.
</p>

</div>

<div className="faq-wrapper">

<details className="faq-card">

<summary>
Brauche ich eine abgeschlossene Ausbildung?
</summary>

<p>
Für Fachstellen wie Elektrofachkraft oder Anlagenmechaniker SHK ist eine abgeschlossene Ausbildung wichtig. Für die Stelle als handwerklicher Mitarbeiter Sanierung kann auch praktische Erfahrung, Motivation und Zuverlässigkeit ausreichen.
</p>

</details>


<details className="faq-card">

<summary>
Kann ich mich als Quereinsteiger bewerben?
</summary>

<p>
Ja. Wenn du handwerklich geschickt, zuverlässig und motiviert bist, kannst du dich gerne bewerben. Besonders im Bereich handwerkliche Unterstützung, Sanierung, Rückbau oder Allround-Tätigkeiten ist ein Einstieg möglich.
</p>

</details>


<details className="faq-card">

<summary>
Gibt es Ausbildungsplätze bei Radex?
</summary>

<p>
Ja. Radex ist Ausbildungsbetrieb. Wenn du Interesse an einer Ausbildung im Handwerk, im SHK-Bereich oder im Sanierungsumfeld hast, kannst du dich direkt bei uns melden.
</p>

</details>

<details className="faq-card">

<summary>
Wo arbeitet Radex?
</summary>

<p>
Radex arbeitet im Rhein-Main-Gebiet an Sanierungs-, Modernisierungs- und Ausbauprojekten im Bestand.
</p>

</details>

<details className="faq-card">

<summary>
Wie kann ich mich bewerben?
</summary>

<p>
Am einfachsten telefonisch unter 06074 960620 oder per E-Mail an info@radex-objektmanagement.de.
</p>

</details>

<details className="faq-card">

<summary>
Muss ich vollständige Unterlagen schicken?
</summary>

<p>
Nein. Für den ersten Kontakt reicht eine kurze Nachricht mit deinem Namen, deiner Telefonnummer, deinem gewünschten Bereich und ein paar Informationen zu deiner Erfahrung.
</p>

</details>

<details className="faq-card">

<summary>
Werden Facharbeiten von ausgebildeten Fachkräften ausgeführt?
</summary>

<p>
Ja. Facharbeiten werden durch ausgebildete Fachkräfte, SHK-meistergeführte Bereiche und qualifizierte Fachpartner umgesetzt. Unterstützende Tätigkeiten erfolgen unter Anleitung.
</p>

</details>


</div>

</div>

</section>


    </main>
  );
}
