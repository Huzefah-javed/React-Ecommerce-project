import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['dist'] }, // Ignore the dist directory
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Apply to JavaScript and TypeScript files
    languageOptions: {
      globals: globals.browser, // Use browser globals
      parser: typescriptParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX support
        sourceType: 'module', // Use ES modules
      },
    },
    settings: { react: { version: '18.2.0' } }, // Specify React version
    plugins: {
      react, // React plugin
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
      '@typescript-eslint': typescriptPlugin, // TypeScript plugin
    },
    rules: {
      // Base ESLint recommended rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,

      // TypeScript recommended rules
      ...typescriptPlugin.configs.recommended.rules,

      // Custom rules
      'react/jsx-no-target-blank': 'off', // Disable this rule
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow constant exports
      ],
    },
  },
];
