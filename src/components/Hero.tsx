import Image from "next/image";

/**
 * Hero (bannière d'accueil)
 * - Gros titre + sous-titre
 * - Boutons d'appel à l'action
 * - Image illustrative (remplace /public/hero.jpg par ton image)
 */
export default function Hero() {
  return (
    <section className="bg-ivoire">
      <div className="mx-auto grid max-w-6xl items-center gap-8 p-6 md:grid-cols-2">
        {/* Colonne texte */}
        <div>
          {/* 
            ⚡ TITRE PRINCIPAL (H1) - À MODIFIER ICI
            - Actuellement: "Martinique Charpente Bois Couverture"
            - Pour changer: éditez le texte entre les balises h1 ci-dessous
            - Impact SEO: ce titre est crucial pour le référencement
            - Conseil: garder court, inclure mots-clés principaux (Martinique, Charpente, Bois, Couverture)
          */}
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-anthracite">
            Martinique Charpente Bois <span className="text-bronze">Couverture</span>
          </h1>
          
          {/* 
            📝 SOUS-TITRE DESCRIPTIF - À MODIFIER ICI
            - Ligne actuellement: "Spécialiste en charpente bois..."
            - Pour changer: éditez le texte du paragraphe p ci-dessous
            - Conseil: restez professionnel, orienté client, max 2-3 lignes
          */}
          <p className="mt-4 text-anthracite md:text-lg font-medium">
            Spécialiste en charpente bois, ossature bois et couverture en Martinique depuis plus de 30 ans.
          </p>
          
          {/* 
            📖 INTRODUCTION DÉTAILLÉE - À MODIFIER ICI
            - Texte professionnel et orienté client
            - Explique les services + expertise + promesse
            - Pour changer: éditez le texte du paragraphe p ci-dessous
          */}
          <p className="mt-3 text-anthracite/80 text-base">
            Depuis plus de 30 ans, MCBC accompagne les particuliers et les professionnels en Martinique pour leurs projets de charpente, ossature bois et couverture. 
            Notre équipe conçoit, fabrique et pose des structures bois sur-mesure, adaptées au climat tropical et conformes aux normes en vigueur.
          </p>

          <p className="mt-3 text-anthracite/80 italic text-base border-l-4 border-bronze pl-4">
            Un toit bien pensé, une charpente bien posée, une couverture qui vous protège durablement.
          </p>

          {/* 
            🎯 BOUTONS D'APPEL À L'ACTION (CTA) - À MODIFIER ICI
            - Bouton 1: "Découvrir nos services" → /services
            - Bouton 2: "Demander un devis gratuit" → /contact (tunnel de vente)
            - Pour changer couleurs: modifiez les className (bg-bronze, border-bronze, etc.)
          */}
          <div className="mt-6 flex gap-3">
            {/* Le bouton 'Découvrir nos services' a été retiré de l'Hero car
                les services sont déjà présentés plus bas sur la page.
                Gardez un seul CTA orienté conversion ici: 'Demander un devis gratuit'. */}
            <a
              href="/contact"
              className="rounded-lg border-2 border-bronze px-4 py-2 text-bronze hover:bg-bronze hover:text-white font-medium transition"
            >
              Demander votre devis
            </a>
          </div>
        </div>

        {/* Colonne image (optionnelle) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg bg-bronze">
          <Image
            src="/charpente_Caillo_angle1.jpg"
            alt="Équipe MCBC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-ivoire/90 px-3 py-1 rounded-md">
            <p className="text-sm font-semibold text-anthracite">Expertise en menuiserie bois</p>
            <p className="text-xs text-anthracite/80">Depuis 1994 en Martinique</p>
          </div>
        </div>
      </div>
    </section>
  );
}
