import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ContactDetails from "@/components/ContactDetails";
import { prestationServices } from "@/data/services";

/**
 * PAGE D'ACCUEIL (/page.tsx)
 * 
 * 🎯 OBJECTIF: présenter les services MCBC + tunnel de vente optimisé
 * 
 * 📍 STRUCTURE:
 * 1. Hero (titre + image équipe + CTA)
 * 2. Section "Nos services" avec cartes image + CTA devis
 * 3. Section "Rassurance" (3 points clés: expérience, local, devis gratuit)
 * 4. Section CTA finale "Vous avez un projet ?"
 * 
 * 🔧 À MODIFIER:
 * - Services array: titres, descriptions, images (chemins public/)
 * - Textes des sections (subtitle)
 * - CTA buttons
 */

export default function Home() {
  // 🎯 SERVICES - À MODIFIER ICI
  // Chaque service doit avoir: title, desc, image (chemin vers public/)
  // Chemins disponibles (public/):
  //   - /ossature bois.jpg
  //   - /caillo 004.jpg
  //   - /levage de la charpente.jpg
  //   - /charpente de pergola.JPG
  //   - /fermette industrielle.jpg
  // etc.
  return (
    <>
      {/* HERO: titre principal + image équipe + CTA */}
      <Hero />

      {/* 
        📍 SECTION: NOS SERVICES
        - Affiche 6 cartes avec images + descriptions + CTA "Devis gratuit"
        - Chaque ServiceCard reçoit: title, desc, image
        - À MODIFIER: subtitle, titres, descriptions, images
      */}
      <Section
        id="services"
        title="Nos prestations"
        subtitle="Un accompagnement complet : étude, fabrication, pose et suivi pour vos projets de charpente, ossature bois et couverture."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prestationServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              image={service.image}
              images={service.images}
            />
          ))}
        </ul>
      </Section>

      {/* SECTION: COORDONNÉES (aperçu sur la page d'accueil) */}
      <Section id="contact-summary" title="Coordonnées" subtitle="Contactez-nous directement pour un devis gratuit">
        <div className="mx-auto max-w-3xl">
          <ContactDetails />
        </div>
      </Section>

      {/* 
        📍 SECTION: RASSURANCE (Trust Signals)
        - 3 points clés pour rassurer le client + augmenter conversion
        - À MODIFIER: textes, nombres (30 ans, etc.)
        - 💡 Logique tunnel de vente: construire confiance avant CTA finale
      */}
      <Section
        id="trust"
        title="Pourquoi choisir MCBC ?"
        subtitle=""
      >
        <div className="grid gap-6 md:grid-cols-3">
          {/* Point 1: Expérience */}
          <div className="rounded-2xl border bg-ivoire p-6 text-center">
            <div className="text-4xl font-bold text-bronze">30+</div>
            <h3 className="mt-2 text-lg font-semibold text-anthracite">
              Ans d'expérience
            </h3>
            <p className="mt-2 text-anthracite/80 text-sm">
              Depuis 1994, MCBC accompagne particuliers et professionnels en Martinique.
            </p>
          </div>

          {/* Point 2: Local */}
          <div className="rounded-2xl border bg-ivoire p-6 text-center">
            <div className="text-4xl font-bold text-bronze">🏝️</div>
            <h3 className="mt-2 text-lg font-semibold text-anthracite">
              Entreprise locale
            </h3>
            <p className="mt-2 text-anthracite/80 text-sm">
              Basée en Martinique, nous connaissons le climat tropical et les normes locales.
            </p>
          </div>

          {/* Point 3: Devis Gratuit */}
          <div className="rounded-2xl border bg-ivoire p-6 text-center">
            <div className="text-4xl font-bold text-bronze">✓</div>
            <h3 className="mt-2 text-lg font-semibold text-anthracite">
              Devis gratuit
            </h3>
            <p className="mt-2 text-anthracite/80 text-sm">
              Consultation sans engagement, prix compétitif.
            </p>
          </div>
        </div>
      </Section>

      {/* 
        📍 SECTION: CTA FINALE
        - "Vous avez un projet ?" + 2 boutons
        - À MODIFIER: textes boutons, hrefs
        - 💡 Logique tunnel: dernier appel à action avant footer
      */}
      <Section
        id="cta"
        title="Vous avez un projet de charpente, ossature bois ou couverture ?"
        subtitle="Contactez MCBC pour un devis gratuit et personnalisé."
      >
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="rounded-lg bg-bronze px-6 py-3 text-anthracite font-extrabold hover:opacity-90 transition"
            aria-label="Contactez-nous - Devis gratuit"
          >
            Contactez-nous
          </a>
          <a
            href="/services"
            className="rounded-lg border-2 border-bronze px-6 py-3 text-bronze font-medium hover:bg-bronze hover:text-white transition"
          >
            En savoir plus sur nos services
          </a>
        </div>
      </Section>
    </>
  );
}

