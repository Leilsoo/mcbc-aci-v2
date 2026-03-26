"use client";
import Link from "next/link";
import { useState } from "react";

/**
 * Navbar réutilisable + responsive
 * - Menu desktop (liens visibles)
 * - Menu mobile (bouton burger -> ouvre/ferme)
 * - Composant "client" car on utilise un state (useState)
 */
export default function Navbar() {
  // État local pour ouvrir/fermer le menu mobile
  const [open, setOpen] = useState(false);

  // 📍 LISTE DES LIENS DU MENU - À MODIFIER ICI
  // Note: "Contact/Devis" est maintenant un bouton CTA bronze séparé (voir ci-dessous)
  // Pour ajouter un lien: ajoutez { href: "/page", label: "Label" }
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    { href: "/prestation", label: "Prestation" },
  ];

  return (
    <header className="border-b bg-ivoire/80 backdrop-blur supports-[backdrop-filter]:bg-ivoire/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Logo / Nom du site */}
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label="Retour à l'accueil MCBC.ACI"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-bronze">
            Charpentier
          </span>
          <span className="text-xl font-black tracking-tight text-anthracite leading-tight">
            MCBC<span className="text-bronze">.ACI</span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-anthracite/50">
            Martinique
          </span>
        </Link>

        {/* Bouton burger visible en mobile */}
        <button
          className="md:hidden inline-flex items-center rounded-lg border px-3 py-2 text-sm"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir/fermer le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icône burger simple en CSS (3 barres) */}
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </span>
        </button>

        {/* Liens Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-anthracite hover:text-bronze transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          {/* 
            🎯 BOUTON CTA "CONTACT/DEVIS" - À MODIFIER ICI
            - Visible dans Navbar desktop pour tunnel de vente
            - Remplace le lien "Contact" de la nav (pour clarté)
            - Lien vers /contact (page formulaire)
            - Couleur bronze pour se distinguer
            - Pour modifier: changez href ou texte ci-dessous
          */}
          <li>
            <a
              href="/contact"
              className="rounded-full bg-bronze px-5 py-2.5 text-sm font-extrabold !text-white/85 shadow-md hover:opacity-90 transition-opacity"
            >
              Contactez-nous
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile (seulement quand open === true) */}
        {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <ul className="mx-auto flex max-w-6xl flex-col p-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-anthracite hover:bg-ivoire"
                  onClick={() => setOpen(false)} // ferme le menu après clic
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {/* 
              🎯 BOUTON CTA MOBILE - À MODIFIER ICI
              - Visible dans menu mobile pour tunnel de vente
              - Même comportement que version desktop
              - Texte cohérent avec version desktop: "Contact/Devis"
              - Pour modifier: changez href ou texte ci-dessous
            */}
            <li>
              <a
                href="/contact"
                className="block rounded-full bg-bronze px-5 py-2.5 text-sm font-extrabold !text-white/85 text-center mt-2 hover:opacity-90 transition-opacity shadow-md"
                onClick={() => setOpen(false)}
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
