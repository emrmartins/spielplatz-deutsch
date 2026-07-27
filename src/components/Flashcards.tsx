import { useCallback, useEffect, useState } from "react";
import type { Phrase, ProgressRecord } from "../data/types";
import { TOPICS } from "../data/phrases";
import { useSpeech } from "../hooks/useSpeech";

interface FlashcardsProps {
  phrases: Phrase[];
  progress: Record<string, ProgressRecord>;
  onToggleKnown: (id: string) => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Flashcards({ phrases, progress, onToggleKnown }: FlashcardsProps) {
  const [deck, setDeck] = useState(() => shuffle(phrases));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { speak, hasGermanVoice } = useSpeech();

  useEffect(() => {
    setDeck(shuffle(phrases));
    setIndex(0);
    setFlipped(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases]);

  const goPrev = useCallback(() => {
    setIndex((i) => (deck.length === 0 ? 0 : (i - 1 + deck.length) % deck.length));
    setFlipped(false);
  }, [deck.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (deck.length === 0 ? 0 : (i + 1) % deck.length));
    setFlipped(false);
  }, [deck.length]);

  const toggleFlip = useCallback(() => setFlipped((f) => !f), []);

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
        toggleFlip();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, toggleFlip]);

  const handleShuffle = () => {
    setDeck(shuffle(phrases));
    setIndex(0);
    setFlipped(false);
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
        className={`flip-card${flipped ? " flipped" : ""}`}
        onClick={toggleFlip}
        role="button"
        tabIndex={0}
        aria-label="Karte umdrehen"
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {topic && (
              <span className="topic-badge" style={{ "--badge-color": topic.color } as React.CSSProperties}>
                {topic.label}
              </span>
            )}
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
          </div>
          <div className="flip-card-back">
            <p className="flashcard-text">{current.en}</p>
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
