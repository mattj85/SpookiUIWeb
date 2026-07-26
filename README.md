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
