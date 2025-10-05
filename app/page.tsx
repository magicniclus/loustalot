'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Charpente",
      subtitle: "Construction & Rénovation",
      content: "Conception, construction et rénovation de charpentes traditionnelles et industrielles. Expertise en bois massif et lamellé-collé avec garantie décennale.",
      image: "/charpente2.png"
    },
    {
      title: "Couverture",
      subtitle: "Toiture & Étanchéité",
      content: "Pose et rénovation de toitures, tuiles, ardoises, bac acier. Travaux d'étanchéité et isolation thermique pour une protection optimale.",
      image: "/charpente2.png"
    },
    {
      title: "Zinguerie",
      subtitle: "Évacuation & Finitions",
      content: "Installation de gouttières, chéneaux, descentes pluviales. Travaux de zinguerie et finitions métalliques pour l'évacuation des eaux.",
      image: "/charpente2.png"
    },
    {
      title: "Isolation",
      subtitle: "Thermique & Phonique",
      content: "Isolation de toitures, combles et murs. Solutions thermiques et phoniques performantes pour améliorer le confort et réduire les consommations.",
      image: "/charpente2.png"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Rénovation cuisine moderne",
      title: "Cuisine moderne - Paris 16ème"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Salle de bain contemporaine",
      title: "Salle de bain - Neuilly"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop",
      alt: "Extension maison",
      title: "Extension - Boulogne"
    },
    {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=800&fit=crop",
      alt: "Rénovation salon",
      title: "Salon design - Levallois"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Terrasse aménagée",
      title: "Terrasse - Vincennes"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Combles aménagés",
      title: "Combles - Saint-Cloud"
    }
  ];

  const partnerLogos = [
    {
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      alt: "Partenaire 1",
      name: "Partner 1"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      alt: "Partenaire 2", 
      name: "Partner 2"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
      alt: "Partenaire 3",
      name: "Partner 3"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      alt: "Partenaire 4",
      name: "Partner 4"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      alt: "Partenaire 5",
      name: "Partner 5"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop",
      alt: "Partenaire 6",
      name: "Partner 6"
    }
  ];

  const teamMembers = [
    {
      name: "Erick Branco",
      position: "Spécialiste toiture et charpente",
      description: "Spécialisé en charpente, couverture, zinguerie, rénovation et isolation dans les Alpes-Maritimes, le Rhône et le Var. Entreprise SAS avec une équipe de 2 à 5 collaborateurs qualifiés, garantie décennale. Nous nous engageons à fournir des prestations de qualité avec des finitions soignées pour tous vos projets de toiture.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "Alpes-Maritimes, Rhône, Var\nFrance",
    phone: "06 01 25 45 73",
    email: "",
    hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=Nice,Lyon,Var,France&t=&z=7&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <div id="expertise">
        <AboutSection
          smallTitle={config.about.sections[0].smallTitle}
          title={config.about.sections[0].title}
          subtitle={config.about.sections[0].subtitle}
          content={config.about.sections[0].content}
          image="/toiture.jpg"
          gradientFrom={config.about.sections[0].gradientFrom}
          gradientTo={config.about.sections[0].gradientTo}
          buttonText={config.about.sections[0].buttonText}
          buttonHref={config.about.sections[0].buttonHref}
          reversed={config.about.sections[0].reversed}
        />
      </div>
      <div id="services">
        <ServicesSection title="Nos Services" subtitle="Découvrez notre gamme complète de prestations" cards={servicesData} />
      </div>
      <div id="realisations">
        <ProjectGallery config={config.gallery} />
      </div>
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image="/charpente.jpg"
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection title="Notre Équipe" subtitle="3 collaborateurs qualifiés au service de vos projets" config={config.team} />
      <ContactSection contactInfo={contactInfo} />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
