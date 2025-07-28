import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"],
    rules: {
      "markdown/line-length": "off",
      "markdown/no-inline-html": "off",
      "markdown/no-multiple-blanks": "off",
      "markdown/no-multiple-h1": "off",
      "markdown/no-trailing-spaces": "off",
      "markdown/first-heading-h1": "off",
      "markdown/no-missing-label-refs": "off",
    },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    rules: {
      "css/no-invalid-properties": "off",
      "css/no-important": "off",
      "css/use-baseline": "warn",
    },
  },
]);
