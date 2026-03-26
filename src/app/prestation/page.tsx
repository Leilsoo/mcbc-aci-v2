import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { prestationServices } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestation - Services & Réalisations",
  description:
    "Découvrez toutes les prestations MCBC-ACI : services de charpente, ossature bois, couverture et exemples de réalisations en Martinique.",
};

const works = [
  {
    title: "Pose de charpentes partout en Martinique",
    img: "/charpente_Caillo_angle1.jpg",
    desc: "Construction complète d'une ossature bois avec précision et respect des normes.",
  },
  {
    title: "Fermette industrielle",
    img: "/fermette industrielle.jpg",
    desc: "Fabrication et pose de fermettes industrielles pour structures de grande portée.",
  },
  {
    title: "Levage de charpente",
    img: "/levage de la charpente.jpg",
    desc: "Opérations complexes de levage et d'assemblage en toute sécurité.",
  },
  {
    title: "Charpente de pergola",
    img: "/charpente de pergola.JPG",
    desc: "Design et réalisation de structures bois personnalisées pour espaces extérieurs.",
  },
  {
    title: "Suite de fermes",
    img: "/suite de fermes.jpg",
    desc: "Mise en place coordonnée de multiples fermes pour couvrir de grandes portées.",
  },
  {
    title: "Ossature bois complète",
    img: "/ossature bois.jpg",
    desc: "Construction d'une maison à ossature bois avec isolation et étanchéité intégrées.",
  },
];

export default function PrestationPage() {
  return (
    <div className="space-y-12">
      <Section
        id="prestations-services"
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
    </div>
  );
}
