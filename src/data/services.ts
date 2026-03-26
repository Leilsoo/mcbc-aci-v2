export type Service = {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
};

export const prestationServices: Service[] = [
  {
    title: "Charpente traditionnelle et industrielle",
    desc: "Conception, fabrication et pose de charpentes en bois massif ou lamellé-collé. Plans 3D précis avec CADWORK et MITECK.",
    images: [
      "/charpente_Caillo_angle1.jpg",
      "/charpente_Caillo_angle2.jpg",
      "/charpente_Caillo_interrieure-ossaturebois.jpg",
      "/fermette-industrielle-2.jpg",
    ],
  },
  {
    title: "Construction de maisons à ossature bois",
    desc: "Maisons performantes, personnalisées et adaptées au climat des Antilles. Structures durables et isolées.",
    images: [
      "/ossature-bois.jpg",
      "/squellette-ossature-bois.jpg",
    ],
  },
  {
    title: "Couverture et étanchéité",
    desc: "Pose de tuiles, ardoises, bac acier, zinc. Intégration complète avec plans 3D.",
    images: [
      "/couverture1.jpg",
      "/couverture2.jpg",
      "/couverture3.jpg",
      "/couverture4.jpg",
    ],
  },
  {
    title: "Intervention & restauration sur charpentes anciennes",
    desc: "Consolidation et remplacement de pièces défectueuses. Expertise artisanale.",
    images: [
      "/charpente-A1.jpg",
      "/charpente-A2.jpg",
      "/charpente-A3.jpg",
      "/charpente-A4.jpg",
      "/charpente-A5.jpg",
    ],
  },
  {
    title: "Devis gratuit et personnalisé",
    desc: "Consultation pour évaluer votre projet et vous fournir un devis détaillé dans les meilleurs délais.",
    image: "/DevisGPT.jpg",
  },
  {
    title: "Normes anticycloniques",
    desc: "Réalisations conformes aux normes anticycloniques et réglementations Antilles. Sécurité garantie.",
    image: "/image-ouragan.jpg",
  },
];
