import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true, // Change this line to false disable auto-refreshing.
  },
  build: {
    assetsDir: 'assets', // The directory to nest generated assets under the outDir.
    rollupOptions: {
      output: {
        manualChunks: undefined // Disable code splitting for simplicity.
      }
    }
  }
})
