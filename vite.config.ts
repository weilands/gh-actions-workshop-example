/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gh-actions-workshop-example/',
  test: {
    // include: ['src/**/*.{test}.?(c|m)[jt]s?(x)']
    exclude: [...configDefaults.exclude, '**/tests/**']
  }
});
