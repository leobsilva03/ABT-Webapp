import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  // In AI Studio or development server, base is root '/'
  // When building for GitHub Pages (https://leobsilva03.github.io/ABT-Webapp/), base is '/ABT-Webapp/'
  const isAIStudio = Boolean(process.env.APPLET_ID || process.env.K_SERVICE);
  const base = process.env.VITE_BASE || (isAIStudio || command === 'serve' ? '/' : '/ABT-Webapp/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
