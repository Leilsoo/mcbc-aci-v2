import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? - MCBC-ACI",
  description:
    "Découvrez l'histoire, l'équipe et les valeurs de MCBC-ACI, charpentiers et constructeurs bois en Martinique depuis plus de 30 ans.",
};

const stats = [
  { label: "Années d'expertise", value: "30+" },
  { label: "Projets livrés", value: "450" },
  { label: "Collaborateurs", value: "25" },
  { label: "Taux de satisfaction", value: "98%" },
];

const values = [
  {
    title: "Excellence artisanale",
    desc: "Chaque charpente est dessinée en interne puis contrôlée sur chantier pour garantir une pose irréprochable.",
  },
  {
    title: "Engagement local",
    desc: "Nous privilégions les circuits courts et formons continuellement nos équipes en Martinique.",
  },
  {
    title: "Sécurité & normes",
    desc: "Nos ouvrages répondent aux normes RTAA DOM et anticycloniques en vigueur.",
  },
];

const teamPhotos = [
  { src: "/equipe mcbc.jpg", caption: "Notre cœur d'équipe au siège du François" },
  { src: "/caillo 004.jpg", caption: "Charpentiers MCBC en action sur chantier" },
  { src: "/IMG_20251006_084222.jpg", caption: "Zone de préfabrication ossature bois" },
  { src: "/IMG_20251006_084339.jpg", caption: "Contrôle qualité avant levage" },
  { src: "/charpente_Caillo_interrieure-ossaturebois.jpg", caption: "Assemblage de fermes industrielles" },
];

const milestones = [
  { year: "1994", text: "Création de MCBC-ACI et premiers chantiers de charpente traditionnelle." },
  { year: "2008", text: "Intégration complète du dessin 3D (Cadwork/Mitek) pour fiabiliser les plans." },
  { year: "2016", text: "Extension de l'atelier ossature bois pour répondre aux projets sur mesure." },
  { year: "2024", text: "Modernisation de la flotte et renforcement des équipes terrain en Martinique." },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Section
        id="a-propos"
        title="Qui sommes-nous ?"
        subtitle="Charpentiers, concepteurs et compagnons passionnés au service des projets bois martiniquais."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-soft">
            <p className="text-lg text-anthracite/80">
              Fondée en 1994, MCBC-ACI accompagne particuliers, architectes et collectivités de la Martinique pour imaginer et réaliser
              des structures bois durables. Notre force repose sur une équipe pluridisciplinaire capable d'assembler dans un même flux la
              conception 3D, la fabrication en atelier et la pose sur site, en respectant les contraintes climatiques locales.
            </p>
            <p className="mt-4 text-anthracite/80">
              Nous mettons un point d'honneur à garder une relation directe avec nos clients, à documenter chaque étape et à livrer des
              ouvrages prêts à durer, qu'il s'agisse d'un toit traditionnel, d'une villa à ossature bois ou d'une intervention sur patrimoine.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-ivoire p-4 text-center">
                  <div className="text-3xl font-extrabold text-bronze">{stat.value}</div>
                  <p className="text-sm text-anthracite/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-ivoire shadow-soft">
            <Image
              src="/equipe mcbc.jpg"
              alt="Équipe MCBC-ACI"
              width={900}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-anthracite">
              Une équipe locale engagée sur le terrain
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="valeurs"
        title="Nos valeurs"
        subtitle="Des repères clairs qui guident la conception, l'atelier et les chantiers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border bg-white p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-anthracite">{value.title}</h3>
              <p className="mt-2 text-sm text-anthracite/80">{value.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="galerie"
        title="Visages et ateliers"
        subtitle="Des moments pris sur nos chantiers et dans nos ateliers."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamPhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border bg-white shadow-soft">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={600}
                height={450}
                className="h-56 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-anthracite/80">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="histoire"
        title="30 ans d'histoire"
        subtitle="Des jalons qui montrent notre progression et notre capacité à évoluer avec les besoins martiniquais."
      >
        <div className="space-y-4">
          {milestones.map((step) => (
            <div key={step.year} className="flex flex-col gap-3 rounded-2xl border bg-white p-4 shadow-soft md:flex-row md:items-center">
              <div className="text-2xl font-bold text-bronze md:w-32">{step.year}</div>
              <p className="text-sm text-anthracite/80">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="cta-equipe"
        title="Vous souhaitez rencontrer l'équipe ?"
        subtitle="Parlons de votre projet autour d'un plan, d'un relevé ou d'un simple échange téléphonique."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-lg bg-bronze px-6 py-3 text-anthracite font-extrabold hover:opacity-90 transition"
          >
            Organiser un rendez-vous
          </a>
          <a
            href="tel:0596543898"
            className="rounded-lg border border-bronze px-6 py-3 text-bronze font-semibold hover:bg-bronze/10 transition"
          >
            Parler à un expert
          </a>
        </div>
      </Section>
    </div>
  );
}
