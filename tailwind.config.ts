// tailwind.config.ts
// ⛳ À mettre à la RACINE du projet (même dossier que package.json)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",       // ✅ scanne tes pages (App Router)
    "./src/components/**/*.{ts,tsx}" // ✅ scanne tes composants
  ],
  theme: {
    container: {
      center: true,                  // ✅ centre automatiquement .container
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { lg: "1120px" },     // ✅ largeur idéale de lecture
    },
    extend: {
      colors: {
        // 🎨 High-end MCBC palette
        anthracite: "#2B2B2B",        // Anthracite (text / dark backgrounds)
        bronze: "#A67C52",           // Bronze / marron doré (accents, CTA)
        ivoire: "#F8F3E7",           // Ivoire (light background)
        white: "#FFFFFF",            // Pur blanc
        // Backwards-compatible brand alias
        brand: {
          anthracite: "#2B2B2B",
          bronze: "#A67C52",
          ivoire: "#F8F3E7",
          white: "#FFFFFF",
        },
        // Keep an ink scale where 900 maps to anthracite
        ink: {
          50:  "#fbfaf8",
          100: "#f7f5f2",
          200: "#efeae4",
          300: "#e6dfd7",
          400: "#d1c6ba",
          500: "#b8a898",
          600: "#8f7a66",
          700: "#64523f",
          800: "#3b2d23",
          900: "#2B2B2B",
        },
      },
      fontFamily: {
        // ✅ utilise les variables Next/font
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      // ✅ la clé "soft" crée l’utilitaire Tailwind "shadow-soft"
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
