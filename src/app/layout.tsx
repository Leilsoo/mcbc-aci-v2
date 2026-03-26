// src/app/layout.tsx
// 🧭 Layout racine (App Router)
// - Injecte Navbar & Footer sur toutes les pages
// - Centralise le SEO global (OpenGraph, Twitter, Canonical)
// - Lit l'URL publique depuis NEXT_PUBLIC_SITE_URL (env)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// -- Fonts Next (variables CSS pour Tailwind) --
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// -- URL de base du site pour générer des liens absolus (robots/sitemap/OG) --
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * SEO global
 * NOTE:
 * - metadataBase permet d'avoir des URLs absolues correctes en og:, canonical, etc.
 * 
 * 🔍 MÉTADONNÉES PRINCIPALES (À MODIFIER ICI) :
 * - title.default: titre principal (affiché dans onglet navigateur + Google)
 * - description: résumé court du site (affiché sous titre dans résultats Google)
 * - Pour changer: éditez les strings entre les quotes ci-dessous
 * 
 * 💡 Conseils:
 * - Title: court, incluant mots-clés (ex: "Charpente Bois Martinique | MCBC")
 * - Description: 150-160 caractères max, incluant call-to-action si possible
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // 🎯 TITRE PRINCIPAL - À MODIFIER ICI
    default: "Martinique Charpente Bois Couverture | Devis Gratuit MCBC",
    template: "%s | MCBC",
  },
  // 🎯 DESCRIPTION COURTE - À MODIFIER ICI
  description: "Charpente, ossature bois et couverture en Martinique. Devis gratuit. 30 ans d'expertise. Pose, fabrication, normes anticycloniques.",

  // Canonical global (la plupart des pages héritent de / ; on ajustera si besoin par page)
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    siteName: "MCBC",
    url: siteUrl,
    // 🎯 TITRE OG (RÉSEAUX SOCIAUX) - À MODIFIER ICI
    title: "Martinique Charpente Bois Couverture",
    // 🎯 DESCRIPTION OG - À MODIFIER ICI
    description:
      "Spécialiste charpente bois, ossature bois, couverture Martinique. Devis gratuit. 30 ans d'expertise.",
    // images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MCBC.ACI" }],
  },

  twitter: {
    card: "summary_large_image",
    // 🎯 TITRE TWITTER - À MODIFIER ICI
    title: "Charpente & Couverture Bois Martinique",
    // 🎯 DESCRIPTION TWITTER - À MODIFIER ICI
    description:
      "Devis gratuit. Ossature bois, couverture, charpente. 30 ans d'expérience.",
    // images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-white text-gray-900 antialiased`}
      >
        <Navbar />       {/* barre de navigation globale */}
        <main>{children}</main>
        <Footer />       {/* pied de page global */}
      </body>
    </html>
  );
}
