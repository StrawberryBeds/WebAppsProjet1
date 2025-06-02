import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.js',
      swSrc: 'src/service-worker.js', // Source file
      swDest: 'dist/service-worker.js', // Destination file
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'My App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'path/to/your/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          // Add more icon sizes as needed
        ],
      },
    }),
  ],
});