import { useEffect, useState } from 'react';
import { Camera, CheckCircle2, Users, ShieldCheck, Wrench, ArrowRight, MessageSquare, Home, FileText, Check, ChevronDown, MapPin, Award, Phone } from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import WhyRadexSection from '../components/WhyRadexSection';
import ProjectsSection from '../components/ProjectsSection';
import CostsSection from '../components/CostsSection';
import ProcessSection from '../components/ProcessSection';
import { processSteps } from '../data/processSteps';
import FaqSection from '../components/FaqSection';
import { faqsData } from '../data/faqsData';
import ContactSection from './ContactSection';
import SeoInfoSection from './SeoInfoSection';
import { seoLinks } from '../data/seoLinks';
import BathroomInfoSection from "../components/BathroomInfoSection";
import BathroomAreaSection from "../components/BathroomAreaSection";

export default function ServicePageTemplate({
  heroData,
  whoIsForData,
  whyRadexData,
  typicalProjectsData,
  projectsData, // optional
  costsData,
  processData,
  faqsData,
  seoContent,
  showBathroomInfo = false,
  seo // optional: { title, description, path }
}) {
  useSeo({
    title: seo?.title,
    description: seo?.description,
    path: seo?.path,
    image: heroData?.image,
    jsonLd: [
      seo ? buildServiceSchema({ name: seo.serviceName || heroData?.title, description: seo.description, path: seo.path }) : null,
      buildFaqSchema(faqsData)
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const [activeProjectTab, setActiveProjectTab] = useState('aktuelle');


   const projectTabs = {
    aktuelle: [
      {
        img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Live', className: 'live' },
        title: 'Aktuelles Projekt',
        location: 'Oberursel'
      },
      {
        img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Live', className: 'live' },
        title: 'Aktuelles Projekt',
        location: 'Bad Homburg'
      }
    ],
    abgeschlossen: [
      {
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        title: 'Abgeschlossenes Projekt',
        location: 'Frankfurt'
      },
      {
        img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
        title: 'Abgeschlossenes Projekt',
        location: 'Bad Homburg'
      }
    ],
    vorherNachher: [
      {
        img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Vorher & Nachher', className: 'before-after' },
        title: 'Vorher & Nachher',
        location: 'Wiesbaden'
      },
      {
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Vorher & Nachher', className: 'before-after' },
        title: 'Vorher & Nachher',
        location: 'Frankfurt'
      }
    ]
  };

  // Global CTA Block
  const SharedCTABlock = ({ isHero = false }) => (
    <div className={`br-hero-actions ${isHero ? '' : 'mt-8'}`} style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isHero ? 'flex-start' : 'center'}}>
      <a href="#kontakt" className="btn br-btn-orange">Projekt anfragen &rarr;</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
      </a>
      <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: isHero ? 'transparent' : '#fff', border: isHero ? '1px solid #111827' : '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );

  // Fallbacks
  const defaultProcess = [
    { number: 1, icon: <MessageSquare size={32} />, title: "Erste Anfrage" },
    { number: 2, icon: <Home size={32} />, title: "Vor-Ort-Beratung" },
    { number: 3, icon: <FileText size={32} />, title: "Festpreis-Angebot" },
    { number: 4, icon: <Wrench size={32} />, title: "Projektausführung" },
    { number: 5, icon: <Check size={32} />, title: "Schlüsselfertige Übergabe" }
  ];
  
  const processSteps = processData?.steps || defaultProcess;

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              {heroData.title} <br/>
              <span>{heroData.titleSpan || "Rhein-Main-Gebiet"}</span>
            </h1>
            <p className="br-hero-subtitle">{heroData.subtitle}</p>
            <p className="br-hero-text">{heroData.text}</p>
            <SharedCTABlock isHero={true} />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${heroData.image})` }}>
        </div>
      </section>


      {/* HERO TRUST BAR */}
<section
  style={{
    background: '#fff',
    borderBottom: '1px solid #e5e7eb'
  }}
>
  <div
    className="container"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      padding: '20px 0'
    }}
  >
    {[
      'SHK-Meisterbetrieb',
      'Über 60 Städte im Rhein-Main-Gebiet',
      'Alles aus einer Hand',
      'Persönlicher Ansprechpartner',
      'Kostenlose Erstberatung'
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          padding: '10px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <CheckCircle2 size={16} color="#22c55e" />
        {item}
      </div>
    ))}
  </div>
</section>

{showBathroomInfo && <BathroomInfoSection />}
      
      {/* 2. WHO IS THIS SERVICE FOR? */}
      {whoIsForData && (
        <section className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">{whoIsForData.title}</h2>
              {whoIsForData.subtitle && <p className="br-section-subtitle">{whoIsForData.subtitle}</p>}
            </div>
            <div className="br-benefits-grid" style={{gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`}}>
              {whoIsForData.list.map((item, idx) => (
                <div
  key={idx}
  className="br-benefit-card"
  style={{
    boxShadow: 'none',
    border: '1px solid #e5e7eb',
    background: '#fff',
    textAlign: 'center',
    padding: '32px 24px'
  }}
>
                  <div
  style={{
    width: "72px",
    height: "72px",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "#f3f4f6"
  }}
>
  {item.icon && (
   <item.icon
      size={36}
      strokeWidth={2}
      color="#f97316"
   />
)}
</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. WHY RADEX */}
      <WhyRadexSection
  title={whyRadexData?.title}
/>

      {/* 4. TYPICAL PROJECTS */}
      {typicalProjectsData && (
        <section className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">{typicalProjectsData.title}</h2>
              {typicalProjectsData.subtitle && <p className="br-section-subtitle">{typicalProjectsData.subtitle}</p>}
            </div>
            <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
              {typicalProjectsData.projects.map((proj, idx) => (
                <div key={idx} className="br-project-card" style={{border: '1px solid #e5e7eb'}}>
                  <div className="br-project-img" style={{ backgroundImage: `url(${proj.img})`, height: '200px' }}></div>
                  <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                    <h4 style={{fontSize: '20px', marginBottom: '8px'}}>{proj.title}</h4>
                    <p style={{color: '#4b5563', fontSize: '15px'}}>{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. PROJECTS & REFERENCES */}
      {projectsData !== false && (
  <ProjectsSection projectTabs={projectTabs} />
)}

    {/* 6. COSTS */}
    <CostsSection costsData={costsData} />

      {/* 7. PROCESS */}

      <ProcessSection processSteps={processSteps} />

      
{/* 10. AREA OF OPERATION */}
<BathroomAreaSection />
      
      {/* 8. FAQ */}
      <FaqSection faqsData={faqsData} />

      {/* 9. CONTACT / CTA */}
      <ContactSection />

      {/* 10. ADDITIONAL INFORMATION (SEO CONTENT) */}
      <SeoInfoSection
  seoContent={seoContent}
  links={seoLinks}
/>
    </main>
  );
}
