import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["dist/"],
  },
  { files: ["**/*.ts"] },
  {
    files: ["**/*.ts"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.ts"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "sort-imports": [
        "warn",
        {
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
  tseslint.configs.recommended,
]);
