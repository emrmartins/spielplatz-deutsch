# Spielplatz-Deutsch

Everyday German phrases, vocabulary, and practice for the playground, Kita, and playdates. Built for a small group of parents — no backend, no accounts, no ongoing cost. All content and progress live in the browser.

## Modes

- **Karten** — flashcards with a flip animation, shuffle, keyboard navigation (arrow keys to move, space/enter to flip), a "Kann ich" known-toggle, and optional audio playback if your browser has a German voice installed.
- **Wortschatz** — searchable vocabulary lookup with topic filtering and a per-entry known-toggle.
- **Übungen** — fill-in-the-blank exercises in 10-question rounds, filterable by topic and difficulty, with immediate feedback and an explanation for each answer.
- **Quiz** — multiple-choice quiz drawing from both phrases and vocabulary, with a German→English / English→German toggle and a running score.

Progress (which items you've marked or answered correctly) is saved to your browser's `localStorage` — nothing leaves your device. Use "Fortschritt zurücksetzen" to start over.

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

To check the production build locally before deploying:

```bash
npm run preview
```

## Project structure

```
src/
  data/         Content: types, phrases, vocab, exercises (source of truth)
  hooks/        useProgress (localStorage), useSpeech (Web Speech API)
  components/   AppShell + one component per mode
  App.tsx       Mode/topic filter state
  styles.css    Design tokens (colors, fonts) + all styling
```

## Editing content

The German phrases, vocabulary, and exercises live in `src/data/phrases.ts`, `src/data/vocab.ts`, and `src/data/exercises.ts`. Each is a plain TypeScript array — add, edit, or remove entries directly, following the shapes defined in `src/data/types.ts`. No build step is required beyond the usual `npm run dev` / `npm run build`.
