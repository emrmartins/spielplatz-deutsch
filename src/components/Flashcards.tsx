import { useCallback, useEffect, useRef, useState } from "react";
import type { Phrase, ProgressRecord } from "../data/types";
import { TOPICS } from "../data/phrases";
import { useSpeech } from "../hooks/useSpeech";

interface FlashcardsProps {
  phrases: Phrase[];
  progress: Record<string, ProgressRecord>;
  onToggleKnown: (id: string) => void;
  onReveal: () => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Cards known ("Kann ich") wait this many days before resurfacing.
const DUE_DELAY_DAYS = 3;
// New (never-seen) cards are unlocked gradually, this many per day.
const DAILY_NEW_CARDS = 8;
const FIRST_USE_KEY = "spielplatz-deutsch:karten-first-use";

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(aISO: string, bISO: string): number {
  const a = new Date(`${aISO}T00:00:00`);
  const b = new Date(`${bISO}T00:00:00`);
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

function getFirstUseDate(): string {
  try {
    const stored = window.localStorage.getItem(FIRST_USE_KEY);
    if (stored) return stored;
    const today = todayISO();
    window.localStorage.setItem(FIRST_USE_KEY, today);
    return today;
  } catch {
    return todayISO();
  }
}

// Stable pseudo-random rank per phrase id, used to pick a consistent (but
// shuffled-looking) order in which new cards get introduced over days.
function hashRank(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h / 0xffffffff;
}

export default function Flashcards({ phrases, progress, onToggleKnown, onReveal }: FlashcardsProps) {
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const newCardsCap = useRef(0);
  if (newCardsCap.current === 0) {
    const daysSinceStart = Math.max(0, daysBetween(getFirstUseDate(), todayISO()));
    newCardsCap.current = (daysSinceStart + 1) * DAILY_NEW_CARDS;
  }

  // Builds today's practice pool: unknown cards are always due, known cards
  // resurface after DUE_DELAY_DAYS, and only the first `newCardsCap` cards
  // (by stable rank) are "introduced" yet — the rest trickle in on later days.
  // Reads progress via progressRef so toggling "Kann ich" mid-session doesn't
  // reshuffle the deck out from under the user.
  const buildDeck = useCallback((list: Phrase[]) => {
    const ranked = [...list].sort((a, b) => hashRank(a.id) - hashRank(b.id));
    const introduced = ranked.slice(0, newCardsCap.current);
    const due = introduced.filter((p) => {
      const record = progressRef.current[p.id];
      if (!record?.seen || !record.lastSeen) return true;
      return (Date.now() - record.lastSeen) / 86_400_000 >= DUE_DELAY_DAYS;
    });
    const pool = due.length > 0 ? due : introduced.length > 0 ? introduced : ranked;
    return shuffle(pool);
  }, []);

  const [deck, setDeck] = useState(() => buildDeck(phrases));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { speak, hasGermanVoice } = useSpeech();

  useEffect(() => {
    setDeck(buildDeck(phrases));
    setIndex(0);
    setRevealed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases]);

  const goPrev = useCallback(() => {
    setIndex((i) => (deck.length === 0 ? 0 : (i - 1 + deck.length) % deck.length));
    setRevealed(false);
  }, [deck.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (deck.length === 0 ? 0 : (i + 1) % deck.length));
    setRevealed(false);
  }, [deck.length]);

  const toggleReveal = useCallback(() => {
    setRevealed((r) => {
      const next = !r;
      if (next) onReveal();
      return next;
    });
  }, [onReveal]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleReveal();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, toggleReveal]);

  const handleShuffle = () => {
    setDeck(buildDeck(phrases));
    setIndex(0);
    setRevealed(false);
  };

  if (deck.length === 0) {
    return (
      <div className="card">
        <p className="muted">Keine Karten in dieser Auswahl.</p>
      </div>
    );
  }

  const current = deck[index];
  const topic = TOPICS.find((t) => t.id === current.topic);
  const record = progress[current.id];
  const isKnown = Boolean(record?.seen);
  const practiceCount = (record?.correctCount ?? 0) + (record?.wrongCount ?? 0);

  return (
    <div className="flashcards">
      <div className="flashcards-toolbar">
        <button onClick={handleShuffle}>Mischen</button>
        <span className="muted">
          {index + 1} / {deck.length}
        </span>
      </div>

      <div
        className="card tap-card"
        onClick={toggleReveal}
        role="button"
        tabIndex={0}
        aria-expanded={revealed}
        aria-label="Übersetzung anzeigen oder verbergen"
      >
        {topic && (
          <span className="topic-badge" style={{ "--badge-color": topic.color } as React.CSSProperties}>
            {topic.label}
          </span>
        )}
        <span className={`level-badge level-${current.level.toLowerCase()} corner`}>{current.level}</span>

        <p className="flashcard-text">{current.de}</p>

        {hasGermanVoice && (
          <button
            className="audio-btn"
            onClick={(e) => {
              e.stopPropagation();
              speak(current.de);
            }}
            aria-label="Vorlesen"
          >
            🔊
          </button>
        )}

        <span className={`reveal-chevron${revealed ? " open" : ""}`} aria-hidden="true">
          ▾
        </span>

        <div className={`reveal-wrap${revealed ? " open" : ""}`}>
          <div className="reveal-inner">
            <p className="flashcard-text flashcard-en">{current.en}</p>
            {current.note && <p className="flashcard-note muted">{current.note}</p>}
          </div>
        </div>
      </div>

      {practiceCount > 0 && record && (
        <p className="practice-count muted">
          {practiceCount}× geübt ({record.correctCount} richtig, {record.wrongCount} falsch)
        </p>
      )}

      <div className="flashcards-controls">
        <button onClick={goPrev} aria-label="Vorherige Karte">
          ←
        </button>
        <button
          className={`know-toggle${isKnown ? " active" : ""}`}
          onClick={() => onToggleKnown(current.id)}
        >
          {isKnown ? "✓ Kann ich" : "Kann ich"}
        </button>
        <button onClick={goNext} aria-label="Nächste Karte">
          →
        </button>
      </div>
    </div>
  );
}
