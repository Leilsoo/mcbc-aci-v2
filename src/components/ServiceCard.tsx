"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Carte Service avec image optimisée
 * 
 * 📝 STRUCTURE :
 * - Image en haut (utilise next/image pour optimisation)
 * - Titre du service
 * - Description courte
 * - Bouton CTA "Demander un devis gratuit"
 * 
 * 🖼️ IMAGES :
 * - Les images sont passées via props (optional)
 * - Chemins: public/Images projets/...jpg (ex: public/ossature bois.jpg)
 * - Pour ajouter une image: passez la prop `image` au composant
 * - Pour modifier une image: changez le nom du fichier dans src/app/page.tsx
 * 
 * 🎯 CTA (Call-To-Action) :
 * - Lien vers /contact pour le tunnel de vente
 * - Texte cohérent: "Demander un devis gratuit"
 * - Pour modifier: éditez le href et le texte du lien ci-dessous
 */
export default function ServiceCard({
  title,
  desc,
  image,
  images,
}: {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
}) {
  const gallery = images && images.length > 0
    ? images
    : image
      ? [image]
      : [];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current || gallery.length <= 1) {
      return;
    }

    const container = carouselRef.current;
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % gallery.length;
      const offset = container.clientWidth * index;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }, 4000); // avance toutes les 4 secondes pour créer du mouvement

    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden transition hover:shadow-lg hover:border-bronze">
      {gallery.length > 0 && (
        <div className="relative w-full overflow-hidden bg-ink-100">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-auto rounded-t-2xl scroll-smooth"
          >
            {gallery.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="w-full min-w-full flex-shrink-0 snap-center overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <Image
                  src={src}
                  alt={`${title} - visuel ${idx + 1}`}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contenu texte */}
      <div className="p-6">
        {/* Titre du service */}
        <h3 className="text-lg font-semibold text-anthracite">
          {title}
        </h3>

        {/* Description courte */}
        <p className="mt-2 text-anthracite/80 text-sm leading-relaxed">
          {desc}
        </p>

        {/* 
          🎯 BOUTON CTA - "Demander un devis gratuit"
          - Mène à /contact (page de formulaire devis)
          - Texte cohérent pour tunnel de vente
          - Pour modifier: changez le href ou le texte ci-dessous
        */}
        <a
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-bronze px-4 py-2 text-sm font-extrabold text-anthracite hover:opacity-90 transition"
          aria-label={`Contactez-nous - ${title}`}
        >
          Contactez-nous
        </a>
      </div>
    </article>
  );
}

