import { defineConfig } from 'astro/config';
import viteRewrite from 'vite-plugin-rewrite';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: "sass",
    },

  },
    build: {
    format: 'file',  // This ensures separate folders for each page
    outDir: 'dist',       // Output directory
    inlineStylesheets: 'never', 
    minify: false,
    compressHTML: false

  }});
