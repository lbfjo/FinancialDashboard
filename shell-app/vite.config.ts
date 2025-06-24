import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),federation({
    name: 'vite_provider',
    manifest: true,
    remotes: {
      esm_remote: {
        type: "module",
        name: "esm_remote",
        entry: "https://[...]/remoteEntry.js",
      },
      var_remote: "var_remote@https://[...]/remoteEntry.js",
    },
    exposes: {
    },
    shared: {
      react: {
        singleton: true,
      },
      'react/': {
        singleton: true,
      },
    },
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
