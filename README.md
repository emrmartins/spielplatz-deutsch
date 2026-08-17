# Spielplatz-Deutsch

Everyday German phrases, vocabulary, and practice for the playground, Kita, and playdates. Built for a small group of parents — no accounts, no ongoing cost. Content and progress live in the browser; an optional, free Cloudflare Worker lets you sync progress across your own devices.

## Modes

- **Karten** — flashcards with a flip animation, a daily-repetition deck (new cards trickle in, known cards resurface after a delay), keyboard navigation (arrow keys to move, space/enter to flip), a "Kann ich" known-toggle, and optional audio playback if your browser has a German voice installed.
- **Wortschatz** — searchable vocabulary lookup with topic filtering, audio playback, and a per-entry known-toggle. Opens as an overlay from the floating 📖 button, layered over whichever mode is active.
- **Übungen** — fill-in-the-blank and English→German translation exercises mixed into 10-question rounds, filterable by topic and difficulty, with immediate feedback, an explanation for each answer, and a running success-rate stat.
- **Quiz** — multiple-choice quiz drawing from both phrases and vocabulary, with a German→English / English→German toggle and a running score.
- **Lesen** — guided dialogs and short reading texts in one tab, switchable via an Alle/Dialoge/Texte selector. Dialogs are chat-style exchanges with tap-to-translate lines and speaker-colored bubbles. Reading texts have tap-to-translate paragraphs, comprehension questions, and linked vocabulary. Both link to relevant `Wortschatz` entries and count toward the daily streak.

Progress (which items you've marked or answered correctly, and how many times) is saved to your browser's `localStorage`. Use "Fortschritt zurücksetzen" to start over.

### Cross-device sync (optional)

Click "Code erstellen" to get a short code, then enter that same code on another device to link its progress to the same account — no sign-up. Progress syncs automatically in the background (per-item, so using two devices offline doesn't overwrite either one). This uses the small Worker in `worker/` — see below.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (includes npm)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens a local dev server (usually `http://localhost:5173`) with hot reload.

## Build

```bash
npm run build
```

Produces a static, production-ready site in `dist/` — including the PWA service worker, so the built app works offline and can be installed to a home screen once deployed.

To check the production build locally before deploying (runs the app and the sync Worker together, close to the real deployment):

```bash
npm run preview
```

## Deploy

The app (and its sync Worker) deploy together to Cloudflare Workers, for free:

```bash
npm run deploy
```

First time only: `npx wrangler login`, then `npx wrangler kv namespace create PROGRESS` and copy the printed `id` into `wrangler.jsonc`. See `worker/README.md` for details.

## Project structure

```
src/
  data/         Content: types, phrases, vocab, exercises, translations, dialogs, readings (source of truth)
  hooks/        useProgress (localStorage), useSpeech (Web Speech API), useSync (cross-device sync)
  components/   AppShell + one component per mode (Lesen.tsx covers both Dialoge and Texte)
  App.tsx       Mode/topic filter state
  styles.css    Design tokens (colors, fonts) + all styling
worker/         Cloudflare Worker: serves the built app + the /sync/* API
wrangler.jsonc  Cloudflare deployment config (Worker + KV binding)
```

## Editing content

The German phrases, vocabulary, exercises, translation prompts, dialogs, and reading texts live in `src/data/phrases.ts`, `src/data/vocab.ts`, `src/data/exercises.ts`, `src/data/translations.ts`, `src/data/dialogs.ts`, and `src/data/readings.ts`. Each is a plain TypeScript array — add, edit, or remove entries directly, following the shapes defined in `src/data/types.ts`. No build step is required beyond the usual `npm run dev` / `npm run build`.
