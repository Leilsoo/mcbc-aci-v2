// eslint.config.mjs
// ⚙️ Config ESLint v9 (flat) pour Next.js + React + TypeScript
// 📝 Tout est commenté pour t’aider à revenir en arrière si besoin.

import js from "@eslint/js";                // Règles JS de base
import globals from "globals";              // Globals navigateur/node
import tseslint from "typescript-eslint";  // Support TypeScript
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  // 🧹 Ignore les dossiers générés
  { ignores: ["node_modules/**", ".next/**", "dist/**"] },

  // 🔧 Recos JS
  js.configs.recommended,

  // 🟦 Recos TypeScript (type-aware si tsconfig.json existe)
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    // 🌍 Contexte
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        // ✅ Active l’analyse des types si tsconfig.json existe
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // 🔌 Plugins
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },

    settings: {
      react: { version: "detect" }, // auto-détection de React
    },

    // ✅ Règles adaptées à l’App Router Next
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "@next/next/no-html-link-for-pages": "off", // pas de /pages obligatoire
      "@next/next/no-img-element": "off",         // on migrera vers <Image /> plus tard

      // Laisse TS gérer les unused vars
      "no-unused-vars": "off",
    },
  },
];
