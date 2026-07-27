# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing / documentation SPA for [SpookiUI](https://github.com/mattj85/SpookiUI),
a live configurator for the Ghostty terminal. React + Vite + reactstrap (Bootstrap 5),
styled with a custom Catppuccin-Mocha terminal theme. Static output — no backend, no API, no tests.

## Commands

Node 18+ required.

```bash
npm install      # dependencies
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # static build into dist/
npm run preview  # serve the production build (port 4173)
```

There is no lint or test tooling configured.

## Architecture

- **All page copy lives in `src/data/content.js`.** Section components are intentionally thin
  and read their text from named exports there. To change wording, links, features, FAQ, keybindings,
  etc., edit `content.js` — you rarely need to touch JSX. This is the single most important convention
  in the repo.
- `src/App.jsx` composes the page by ordering the section components; `src/main.jsx` mounts React and
  imports Bootstrap CSS then `styles/theme.css` (order matters — theme overrides Bootstrap).
- Each section under `src/components/` maps to one scrolling anchor (Hero, About, Features, Install,
  Usage, Treats, Faq, CtaFooter) plus a NavBar. Section anchor `id`s must match `NAV_LINKS` in `content.js`.
- Reusable pieces: `Section.jsx` (consistent eyebrow/title/lede shell — wrap new sections in it),
  `CodeBlock.jsx` (copy-to-clipboard snippet), `TerminalWindow.jsx` (macOS terminal chrome).
- `src/styles/theme.css` holds the entire theme: Catppuccin-Mocha CSS custom properties in `:root`
  and scoped `.section__*` / `.codeblock__*` etc. classes, plus targeted Bootstrap overrides. Prefer
  reusing existing custom properties (`--accent`, `--green`, `--surface0`, `--font-mono`…) over new hex values.

## Version-sync workflow

`content.js` exports `VERSION` (currently `"1.13.0"`). Site content is periodically bumped to mirror a
SpookiUI release — see commits like "Update site content to SpookiUI v1.13.0". When syncing to a new
SpookiUI version, update `VERSION` and any changed copy (features, install steps, keybindings, treats)
in `content.js` to match the upstream SpookiUI README.

## Build & deploy notes

- `vite.config.js` sets `base: './'` (relative) so the build works from any sub-path (e.g. GitHub Pages
  project sites). Don't change this to an absolute base without reason.
- Named hosts allowed on the dev/preview server are listed in `ALLOWED_HOSTS` in `vite.config.js`
  (`spookiui.rooksnet.uk`, `.rooksnet.uk`). Add hosts there or requests are rejected with "Blocked request".
- Docker: multi-stage `Dockerfile` (Node build → nginx serve) + `docker-compose.yml`, published on
  port 8080. `nginx.conf` sets `server_name spookiui.rooksnet.uk`; expects a TLS-terminating reverse
  proxy in front.
