# Claude Code prompt — build "Spielplatz-Deutsch"

## How to use
1. Create an empty folder for the project.
2. Copy these files into it: `types.ts`, `phrases.ts`, `vocab.ts`, `exercises.ts`, and `spielplatz-deutsch.jsx` (the prototype).
3. Open a terminal in that folder and run `claude`.
4. Paste everything below the line.
5. It will stop after each phase and wait for your OK.

---

You are helping me build a German-learning web app called **Spielplatz-Deutsch** for parents who need everyday phrases for the playground, daycare (Kita), and playdates. It'll be used by about 10 people. Simplicity and zero ongoing cost are the priorities — no backend, no database, no auth, no test suite.

I have some technical background — I can read code and use a terminal — but I'm not a professional developer.

## Read these files first

I've placed several files in this folder. Read all of them before writing any code:

- **`spielplatz-deutsch.jsx`** — a working React prototype with the visual design (palette, fonts, animations). Use it as the design reference for look and feel.
- **`types.ts`** — the TypeScript types for all content: `Phrase`, `VocabEntry`, `Exercise`, `Topic`, `ProgressRecord`.
- **`phrases.ts`** — 120 situational German sentences, organized by topic. Also contains the `TOPICS` array.
- **`vocab.ts`** — 150 vocabulary entries with articles, plurals, and example sentences.
- **`exercises.ts`** — 80 fill-in-blank exercises with dropdown options, correct answers, and explanations.

The content files are the source of truth. Port them into the app exactly — don't generate new content unless I ask.

## Stack

- **Vite + React + TypeScript** — fast dev, fast build.
- **Plain CSS** with CSS variables for the design tokens (colors, fonts from the prototype). No Tailwind.
- **No ESLint, no Prettier, no test framework.** Keep config files to the minimum.
- **`vite-plugin-pwa`** for offline/installable support.

## What NOT to build

- No storage adapter pattern. Call `localStorage` directly in the `useProgress` hook.
- No `useExerciseValidator` hook. Inline the answer check (`selected === correctIndex`) in the component.
- No `useTopicFilter` hook. Keep filter state in `App.tsx` and pass it down.
- No test files. No ESLint config. No Prettier config.
- No spaced repetition / Leitner boxes.
- No separate files for tiny components (chips, feedback badges). Inline them in the parent.

## The four modes

### 1. Flashcards (Karten)
- Uses the `Phrase` data.
- Front: German sentence + topic badge. Back: English + teaching note.
- CSS flip animation with `transform-style: preserve-3d`.
- Shuffle, prev/next (arrow keys), space/enter to flip.
- "Kann ich" toggle to mark cards as known.
- Audio button: calls `speechSynthesis` with a German voice. If no German voice is available, hide the button — don't show an error.

### 2. Vocabulary lookup (Wortschatz)
- Uses the `VocabEntry` data.
- Searchable (matches German and English fields as you type).
- Filterable by topic.
- Each entry shows: word (with article in bold), plural, English, example sentence.
- "Known" toggle per entry.

### 3. Fill-in-blank exercises (Übungen)
- Uses the `Exercise` data.
- Shows the sentence with the gap rendered as a `<select>` dropdown.
- A "Check" button compares the selection to `correctIndex`.
- On check: green/red visual feedback + reveal the `explanation` text.
- "Next" button advances to the next exercise.
- At the end of a set (10 exercises from the selected topic), show the score.
- Filterable by topic and difficulty.

### 4. Quiz
- Draws from both `Phrase` and `VocabEntry` data.
- Multiple choice: 1 correct + 3 distractors from the full deck.
- DE→EN / EN→DE toggle.
- Running score, correct/wrong feedback, teaching note if present.

## Shared across all modes

- **Topic filter** — 6 colored chips: Spielplatz, Kita-Alltag, Konflikte, Verabredungen, Körper & Gesundheit, Essen & Trinken. Plus an "Alle" chip.
- **Progress bar** — shows known/total for the active filter + mode.
- **Progress persistence** — `useProgress` hook reads/writes a `Record<string, ProgressRecord>` to `localStorage` under one key. Handle empty/first-run gracefully (empty object, not crash). Include a "reset progress" button.

## Design

Carry over from the prototype:
- Background: `#E7EEF2`, surface: white, ink: `#22303A`, muted: `#5A6B76`.
- Fonts: Baloo 2 (display headings), Nunito (body text) from Google Fonts.
- Topic colors are defined in the `TOPICS` array in `phrases.ts`.
- Rounded cards, pill-shaped filter chips, smooth transitions.
- `prefers-reduced-motion` respected (disable flip animations, transitions).
- Responsive from 360px (phone) to desktop.

## File structure

```
src/
  data/
    types.ts
    phrases.ts        (includes TOPICS)
    vocab.ts
    exercises.ts
  hooks/
    useProgress.ts    (localStorage directly)
    useSpeech.ts      (Web Speech API)
  components/
    AppShell.tsx       (layout, mode tabs, topic filter, progress bar)
    Flashcards.tsx
    VocabLookup.tsx
    FillInBlank.tsx
    Quiz.tsx
  App.tsx             (mode + topic state, passes down)
  main.tsx
  styles.css          (CSS variables + plain CSS)
vite.config.ts        (+ vite-plugin-pwa)
tsconfig.json
index.html
```

That's 14 source files. Don't create more unless there's a real reason.

## How to work

Go one phase at a time. After each phase: tell me what changed, how to verify, then stop.

**Phase 0** — Scaffold. Init Vite + React + TS. Set up the CSS variables and font imports. Get a blank app running. Add `vite-plugin-pwa` to the config. Commit.

**Phase 1** — Data. Port the content files into `src/data/`. Confirm types compile cleanly. Commit.

**Phase 2** — App shell. Build the layout, 4 mode tabs, topic filter chips, progress bar. Use the prototype's visual style. Commit.

**Phase 3** — Flashcards. Flip animation, shuffle, navigate, mark-known, audio button. Commit.

**Phase 4** — Vocabulary lookup. Searchable, filterable, per-entry known toggle. Commit.

**Phase 5** — Fill-in-blank exercises. Dropdown in sentence, check button, feedback, score. Commit.

**Phase 6** — Quiz. Multiple choice from phrases + vocab, direction toggle, scoring. Commit.

**Phase 7** — Persistence. `useProgress` hook with `localStorage`, reset button. Wire it into all four modes. Commit.

**Phase 8** — Polish. Responsive check, keyboard navigation, `prefers-reduced-motion`, README with setup/build instructions. Commit.

**Phase 9** — Deploy. Set up GitHub Pages with a GitHub Action that runs `vite build`. Confirm the live URL works. Commit.

Start with Phase 0.
