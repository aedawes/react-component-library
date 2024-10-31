import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-config-prettier";

export default {
  // Define the environments
  env: {
    browser: true,
    es2021: true,
  },
  // Extend recommended configs
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  // Define the parser
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // Plugins
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "simple-import-sort",
  ],
  // Custom rules
  rules: {
    camelcase: "error",
    "no-duplicate-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "no-alert": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": 0,
    "react/display-name": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unknown-property": "off",
    "react/no-unescaped-entities": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
