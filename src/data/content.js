// Central content for the SpookiUI site. Keeping copy in one place makes the
// section components thin and easy to scan.

export const REPO = "mattj85/SpookiUI";
export const REPO_URL = `https://github.com/${REPO}`;
export const GHOSTTY_URL = "https://ghostty.org";
export const VERSION = "1.12.0";

export const NAV_LINKS = [
  { id: "what", label: "What it is" },
  { id: "features", label: "Features" },
  { id: "install", label: "Install" },
  { id: "usage", label: "Usage" },
  { id: "treats", label: "Treats" },
  { id: "faq", label: "FAQ" },
];

export const HIGHLIGHTS = [
  { value: "~200", label: "options, discovered live" },
  { value: "0", label: "pip installs required" },
  { value: "2", label: "platforms — macOS & Linux" },
  { value: "MIT", label: "open source licence" },
];

export const FEATURES = [
  {
    icon: "🔴",
    title: "Live, as-you-type reload",
    body: "Edit a value and SpookiUI writes the config and triggers a Ghostty reload for you — the very terminal you are in repaints instantly. No manual reload, no restart.",
  },
  {
    icon: "🛡️",
    title: "Safe by construction",
    body: "Every change is validated by Ghostty itself (ghostty +validate-config) before it is saved. Invalid values are rejected and rolled back, so a bad edit never reaches your config.",
  },
  {
    icon: "↩️",
    title: "Always reversible",
    body: "A dated backup is written on the first change of the day. Revert an entire session with R, or wipe back to Ghostty’s built-in defaults with X — a backup is still kept.",
  },
  {
    icon: "🔍",
    title: "Every option, discovered dynamically",
    body: "Options are never hard-coded. They are read from your installed Ghostty at startup, so the tool always matches your version. Settings for the other OS are hidden automatically.",
  },
  {
    icon: "🎨",
    title: "Typed editors with live preview",
    body: "Themes show a live colour card, fonts and enums open searchable pickers, bounded numbers get visual sliders, and keybindings use a guided builder — all previewed before you commit.",
  },
  {
    icon: "🗂️",
    title: "Profiles & a config doctor",
    body: "Save named snapshots of your whole config and flip between light and dark instantly. The built-in doctor health-checks for duplicates, unknown keys and keybind clashes.",
  },
  {
    icon: "👻",
    title: "Treats — background shaders",
    body: "A bundle of nostalgic animated background shaders (Matrix Rain, Plasma, Fireworks, seasonal packs…). All off by default, one at a time, and tuned to keep your text legible.",
  },
  {
    icon: "⌨️",
    title: "Fully scriptable CLI",
    body: "Everything the UI does is available non-interactively: get, set, list, doctor, profiles, treats and more — perfect for dotfiles and pre-commit hooks.",
  },
];

// How the live loop works, rendered as an ordered flow.
export const LIVE_LOOP = [
  { step: "You edit a value", detail: "in the interactive TUI or via the CLI" },
  {
    step: "SpookiUI writes the config file",
    detail: "surgically, preserving your comments and layout",
  },
  {
    step: "Ghostty validates it",
    detail: "an invalid value is rejected & rolled back",
  },
  {
    step: "Ghostty reloads",
    detail: "macOS: Reload Configuration menu · Linux: SIGUSR2",
  },
  {
    step: "Your terminal repaints",
    detail: "the change is live, in front of you",
  },
];

export const KEYS = [
  { key: "↑ ↓ / j k", action: "Move · Tab switches pane" },
  { key: "→ / Enter", action: "Into options / edit the selected option" },
  { key: "←", action: "Back to categories" },
  { key: "/", action: "Search all options by name or docs" },
  { key: "u", action: "Reset the selected option to its default" },
  { key: "a", action: "Toggle auto-apply (live ↔ staged)" },
  { key: "s", action: "Save + reload now · r re-trigger reload" },
  { key: "R", action: "Revert everything to session start" },
  { key: "X", action: "Wipe config & restore all Ghostty defaults" },
  { key: "p", action: "Profiles — save / load / delete named configs" },
  { key: "c", action: "Config check (doctor) — health-check for issues" },
  { key: "t", action: "Treats — animated background shaders" },
  { key: "?", action: "Help · q quit" },
];

export const CLI_EXAMPLES = [
  {
    cmd: 'spookiui.py set theme "Catppuccin Latte"',
    note: "Change a value — writes + reloads live",
  },
  {
    cmd: "spookiui.py set font-size 15",
    note: "Numbers, colours, enums — all typed",
  },
  {
    cmd: "spookiui.py get background-opacity",
    note: "Read an option’s current value",
  },
  {
    cmd: "spookiui.py doctor",
    note: "Health-check the config; exits non-zero on errors",
  },
  {
    cmd: "spookiui.py profile toggle",
    note: "Flip between your light and dark profiles",
  },
  {
    cmd: "spookiui.py treats enable matrix-rain",
    note: "Turn on a background shader",
  },
];

export const TREATS = [
  { name: "Matrix Rain", desc: "Falling green glyph columns, cmatrix-style" },
  { name: "Pipes", desc: "A neon homage to the Win95 3D Pipes screensaver" },
  { name: "Mystify", desc: "Bouncing, colour-trailing polygons" },
  { name: "Plasma", desc: "A rolling demoscene / After Dark plasma field" },
  { name: "Lava Lamp", desc: "Slow rising metaball blobs" },
  { name: "Fireworks", desc: "Rockets bursting into fading sparks" },
  { name: "Chomper", desc: "A chomping wedge eats a row of pellets" },
  { name: "Barrels", desc: "Barrels tumble down slanted girders" },
  { name: "Jumper", desc: "A hero hops beneath scrolling blocks" },
  {
    name: "Dasher",
    desc: "A blue speedster spin-dashes past, scattering gold rings",
  },
  {
    name: "Lemmings",
    desc: "A line of green-haired critters marches along the ground",
  },
];

export const SEASONAL_TREATS = [
  {
    name: "Ghosts",
    season: "Halloween",
    desc: "Friendly cartoon ghosts drift by",
  },
  {
    name: "Spooky Eyes",
    season: "Halloween",
    desc: "Pairs of glowing eyes blink open in the dark",
  },
  {
    name: "Cobwebs",
    season: "Halloween",
    desc: "Faint spider webs shimmer across the corners",
  },
  {
    name: "Snow",
    season: "Winter",
    desc: "Soft snowflakes drift down across depth layers",
  },
];

export const FAQ = [
  {
    q: "What is Ghostty and why does this exist?",
    a: "Ghostty is a fast, feature-rich terminal emulator configured through a plain-text file. It cannot auto-reload when that file changes — you have to trigger a reload yourself. SpookiUI closes that loop: it writes the config and triggers the reload for you, so editing feels live.",
  },
  {
    q: "Do I need to install any Python packages?",
    a: "No. SpookiUI is a single script that runs on the Python 3.8+ standard library — no third-party dependencies, no pip installs, no build step. The only external requirement is the ghostty binary on your PATH (or in /Applications/Ghostty.app).",
  },
  {
    q: "Is it safe to point it at my real config?",
    a: "Yes. Every change is validated by Ghostty before it is written, invalid values are rolled back, and a dated backup is made on the first change of the day. You can revert a whole session with R or restore Ghostty’s defaults with X — a backup is always kept.",
  },
  {
    q: "Which platforms are supported?",
    a: "Live reload works on macOS (via the Reload Configuration menu item) and Linux (via SIGUSR2 to the running Ghostty process). On any other platform the file is still written and validated safely — you just trigger your own reload keybind.",
  },
  {
    q: "How do I update it?",
    a: "On startup SpookiUI quietly checks GitHub for a newer release and shows a badge if one exists. Press U in the TUI or run spookiui update to update in place — it detects git, standalone and Homebrew installs and does the right thing for each.",
  },
  {
    q: "Will the background shaders make my text hard to read?",
    a: "No. Treats are all off by default, only one runs at a time, and each composites additively through a tight luminance mask so only the darkest background pixels are tinted. Brightness is kept deliberately low, and a vibrancy slider fades any treat up or down.",
  },
];
