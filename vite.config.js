import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site can be hosted from any sub-path
// (e.g. GitHub Pages project sites at /SpookiUIWeb/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
