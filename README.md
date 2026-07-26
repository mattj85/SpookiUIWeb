# SpookiUI — website

A single-page marketing / documentation site for
[**SpookiUI**](https://github.com/mattj85/SpookiUI), the live configurator for
the [Ghostty](https://ghostty.org) terminal.

Built with **React**, **Vite** and **[reactstrap](https://reactstrap.github.io/)**
(Bootstrap 5 components), styled with a custom Catppuccin-Mocha / terminal theme
to match the SpookiUI TUI.

## What's on the page

A single scrolling SPA with anchored sections:

- **Hero** — the pitch, plus a stylised recreation of the SpookiUI TUI
- **What it is** — why it exists and the live-reload loop, step by step
- **Features** — the eight things that make it useful and safe
- **Install** — three routes (repo, installer, Homebrew) with copy-to-clipboard
- **Usage** — a tabbed panel: interactive TUI keybindings vs. the scriptable CLI
- **Treats** — the background-shader gallery, including seasonal packs
- **FAQ** — an accordion of the common questions
- **Call to action + footer**

## Develop

Node 18+ is required.

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # produce a static build in dist/
npm run preview  # serve the production build locally
```

## Deploy

`npm run build` emits a fully static site to `dist/`, deployable to any static
host (GitHub Pages, Netlify, Vercel, S3, …). `vite.config.js` uses a **relative
base** (`base: './'`) so the build also works when served from a sub-path such
as a GitHub Pages project site.

## Docker

The site ships with a multi-stage `Dockerfile` (Node build → nginx serve) and a
`docker-compose.yml`. The image builds the static bundle and serves it with
nginx, which is configured for the `spookiui.rooksnet.uk` host.

```bash
docker compose up -d --build        # build + run, served on http://localhost:8080
docker compose logs -f              # follow logs
docker compose down                 # stop and remove
```

Or with plain Docker:

```bash
docker build -t spookiui-web .
docker run -d -p 8080:80 --name spookiui-web spookiui-web
```

The container listens on port **80** internally and is published on **8080** by
compose. Put your TLS-terminating reverse proxy (nginx, Traefik, Caddy,
Cloudflare Tunnel, …) in front of it and route `spookiui.rooksnet.uk` there —
`nginx.conf` already names that host, and commented Traefik labels are included
in `docker-compose.yml` if you prefer label-based routing.

### Accepted hosts

- **Production (nginx):** `nginx.conf` sets `server_name spookiui.rooksnet.uk`.
- **Dev / preview (Vite):** `vite.config.js` lists `spookiui.rooksnet.uk` (and
  `.rooksnet.uk`) under `allowedHosts`, so `npm run dev` / `npm run preview`
  also work when reached through that domain.

## Project structure

```
src/
  main.jsx              app entry (mounts React, imports Bootstrap + theme CSS)
  App.jsx               composes the page sections
  data/content.js       all page copy in one place
  components/           one component per section, plus reusable pieces:
    NavBar, Hero, About, Features, Install, Usage, Treats, Faq, CtaFooter
    Section              consistent section shell (eyebrow / title / lede)
    TerminalWindow       macOS-style terminal chrome
    CodeBlock            copy-to-clipboard code snippet
  styles/theme.css       the Catppuccin-Mocha theme + Bootstrap overrides
```

To update the copy, edit `src/data/content.js` — the section components read
from it, so you rarely need to touch JSX.

---

Not affiliated with the Ghostty project. Content mirrors the SpookiUI README;
SpookiUI itself is MIT licensed.
