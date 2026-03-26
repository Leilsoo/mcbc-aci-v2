import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { prestationServices } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestation - Services & Réalisations",
  description:
    "Découvrez toutes les prestations MCBC-ACI : services de charpente, ossature bois, couverture et exemples de réalisations en Martinique.",
};

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
