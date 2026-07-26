import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosts allowed to reach the dev / preview server. Vite always permits
// localhost and IP literals; named hosts (e.g. behind a reverse proxy) must be
// listed here or requests are rejected with "Blocked request".
const ALLOWED_HOSTS = ['spookiui.rooksnet.uk', '.rooksnet.uk']

// Relative base so the built site can be hosted from any sub-path
// (e.g. GitHub Pages project sites at /SpookiUIWeb/).
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true, // listen on 0.0.0.0 so containers/LAN can reach it
    allowedHosts: ALLOWED_HOSTS,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ALLOWED_HOSTS,
  },
})
