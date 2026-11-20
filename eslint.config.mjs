import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist", ".astro", ".scratch", "node_modules"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  // accessibility rules for the templates
  astro.configs["jsx-a11y-recommended"],
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
);
