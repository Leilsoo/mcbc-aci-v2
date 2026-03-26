// app/contact/page.tsx
/**
 * PAGE DE CONTACT / DEVIS (/contact)
 * 
 * 🎯 OBJECTIF: formulaire devis optimisé pour conversion
 * 
 * 📍 STRUCTURE:
 * 1. Titre "Devis gratuit" + sous-titre rassurant
 * 2. Grille: infos contact (gauche) + formulaire (droite)
 * 3. Bloc de légalité/délais dans le formulaire
 * 
 * 🔧 À MODIFIER:
 * - Titre H1 "Devis"
 * - Sous-titre descriptif
 * - Textes légaux (délais, garantie)
 * - Coordonnées contact
 */

import type { Metadata } from "next";
import ContactForm from "./ContactForm"; // ✅ on importe le composant client
import ContactDetails from "@/components/ContactDetails";

/**
 * 🔍 SEO PAGE CONTACT - À MODIFIER ICI
 * - title: titre pour l'onglet navigateur + Google
 * - description: résumé pour résultats Google (150-160 caractères)
 */
export const metadata: Metadata = {
  title: "Demander votre devis  - Charpente Bois Martinique",
  description: "Demandez votre devis pour charpente, ossature bois, couverture. Réponse rapide. MCBC Martinique.",
};

/**
 * Page /contact (Server Component)
 * - Structure + contenu statique
 * - Le formulaire interactif est délégué à <ContactForm /> (Client Component)
 */
export default function ContactPage() {
  return (
    <section className="space-y-8">
      {/* 
        📍 EN-TÊTE PAGE
        - À MODIFIER: titre H1, sous-titre
        - Impact: conversion directe (titre "Devis gratuit" + texte rassurant)
      */}
      <header className="space-y-4 text-center md:text-left">
        {/* 
          ⚡ TITRE PRINCIPAL (H1) - À MODIFIER ICI
          - Actuellement: "Devis gratuit"
          - Grand, gras, visible = signal conversion
          - Pour changer: éditez le texte h1 ci-dessous
        */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-anthracite">
          Contactez - <span className="text-bronze">nous</span> !
        </h1>

        {/* 
          📝 SOUS-TITRE RASSURANT - À MODIFIER ICI
          - Texte professionnel orienté client + rassurance
          - Explique processus + rapidité + garantie
          - Max 2-3 lignes pour rester lisible
        */}
        <p className="text-lg text-anthracite/80 max-w-2xl">
          Expliquez-nous votre projet et vos envies. Nous vous répondons rapidement avec un devis personnalisé et sans engagement.
        </p>
      </header>

      {/* 
        📍 GRILLE PRINCIPALE
        - Gauche: coordonnées contact
        - Droite: formulaire devis
        - À MODIFIER: infos contact, horaires
      */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Reuse the ContactDetails component to avoid duplication */}
        <ContactDetails />

        {/* 
          📍 FORMULAIRE CONTACT (Droite: 2 colonnes)
          - Composant client <ContactForm /> gère interactivité
          - Envoie vers API /api/contact → Formspree
        */}
        <ContactForm />
      </div>
    </section>
  );
}