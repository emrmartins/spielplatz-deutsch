import { Fragment, useEffect, useRef, useState } from "react";
import type { Dialog, ProgressRecord } from "../data/types";
import { TOPICS } from "../data/phrases";
import { VOCAB } from "../data/vocab";
import { useSpeech } from "../hooks/useSpeech";

interface DialogsProps {
  dialogs: Dialog[];
  progress: Record<string, ProgressRecord>;
  onReveal: () => void;
  onMarkRead: (id: string) => void;
}

const REVEAL_STREAK_THRESHOLD = 3;

const ARTICLES = new Set(["der", "die", "das"]);

function renderWord(word: string) {
  return word.split(" ").map((token, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      {ARTICLES.has(token) ? <strong>{token}</strong> : token}
    </Fragment>
  ));
}

function speakerColor(speaker: string): string {
  const s = speaker.trim();
  if (s === "Du") return "#2E9B8B";
  if (s === "Kind" || s === "Anderes Kind") return "#D99A1C";
  if (s.startsWith("Erzieh")) return "#E2823C";
  if (s.includes("Mama") || s.includes("Papa")) return "#5E86C4";
  return "#5a6b76";
}

export default function Dialogs({ dialogs, progress, onReveal, onMarkRead }: DialogsProps) {
  const [selected, setSelected] = useState<Dialog | null>(null);
  const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set());
  const [openNotes, setOpenNotes] = useState<Set<number>>(new Set());
  const [expandedVocab, setExpandedVocab] = useState<Set<string>>(new Set());
  const everRevealedRef = useRef<Set<number>>(new Set());
  const streakTriggeredRef = useRef(false);
  const readTriggeredRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { speak, hasGermanVoice } = useSpeech();

  const openDialog = (dialog: Dialog) => {
    setSelected(dialog);
    setRevealedLines(new Set());
    setOpenNotes(new Set());
    setExpandedVocab(new Set());
    everRevealedRef.current = new Set();
    streakTriggeredRef.current = false;
    readTriggeredRef.current = false;
  };

  const closeDialog = () => setSelected(null);

  // Marks the open dialog as read once its end comes into view.
  useEffect(() => {
    if (!selected) return;
    const el = bottomRef.current;
    if (!el) return;
    const dialogId = selected.id;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !readTriggeredRef.current) {
          readTriggeredRef.current = true;
          onMarkRead(dialogId);
        }
      },
      { threshold: 1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [selected, onMarkRead]);

  const toggleReveal = (i: number) => {
    setRevealedLines((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    everRevealedRef.current.add(i);
    if (everRevealedRef.current.size >= REVEAL_STREAK_THRESHOLD && !streakTriggeredRef.current) {
      streakTriggeredRef.current = true;
      onReveal();
    }
  };

  const toggleNote = (i: number) => {
    setOpenNotes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleVocab = (id: string) => {
    setExpandedVocab((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (!selected) {
    return (
      <div className="dialogs">
        {dialogs.length === 0 ? (
          <div className="card">
            <p className="muted">Keine Dialoge in dieser Auswahl.</p>
          </div>
        ) : (
          <div className="dialog-list">
            {dialogs.map((d) => {
              const topic = TOPICS.find((t) => t.id === d.topic);
              const read = Boolean(progress[d.id]?.seen);
              return (
                <div
                  key={d.id}
                  className="dialog-card"
                  style={{ "--topic-color": topic?.color ?? "transparent" } as React.CSSProperties}
                  onClick={() => openDialog(d)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openDialog(d);
                    }
                  }}
                >
                  <div className="dialog-card-head">
                    <p className="dialog-card-title">{d.titleDe}</p>
                    <div className="dialog-card-badges">
                      {read && (
                        <span className="dialog-read-badge" title="Gelesen" aria-label="Gelesen">
                          ✓
                        </span>
                      )}
                      <span className={`level-badge level-${d.level.toLowerCase()}`}>{d.level}</span>
                    </div>
                  </div>
                  <p className="dialog-card-title-en muted">{d.titleEn}</p>
                  <p className="dialog-card-situation muted">{d.situation}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="dialogs">
      <button type="button" className="dialog-back" onClick={closeDialog}>
        ← Zurück
      </button>

      <div className="dialog-read-head">
        <p className="dialog-read-title">{selected.titleDe}</p>
        <span className={`level-badge level-${selected.level.toLowerCase()}`}>{selected.level}</span>
      </div>
      <p className="dialog-situation muted">{selected.situation}</p>

      <div className="dialog-lines">
        {selected.lines.map((line, i) => {
          const revealed = revealedLines.has(i);
          const noteOpen = openNotes.has(i);
          const color = speakerColor(line.speaker);
          return (
            <div className="dialog-line" key={i}>
              <div className="dialog-line-head">
                <span className="dialog-speaker" style={{ color }}>
                  {line.speaker}
                </span>
                {hasGermanVoice && (
                  <button
                    type="button"
                    className="audio-btn small"
                    onClick={() => speak(line.de)}
                    aria-label={`„${line.de}“ vorlesen`}
                  >
                    🔊
                  </button>
                )}
              </div>
              <div
                className="dialog-bubble"
                onClick={() => toggleReveal(i)}
                role="button"
                tabIndex={0}
                aria-expanded={revealed}
                aria-label="Übersetzung anzeigen oder verbergen"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleReveal(i);
                  }
                }}
              >
                <p className="dialog-de">
                  {line.de}
                  {line.note && (
                    <button
                      type="button"
                      className="dialog-note-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleNote(i);
                      }}
                      aria-label="Hinweis anzeigen"
                    >
                      ℹ️
                    </button>
                  )}
                  <span className={`reveal-chevron${revealed ? " open" : ""}`} aria-hidden="true">
                    ▾
                  </span>
                </p>
                <div className={`reveal-wrap${revealed ? " open" : ""}`}>
                  <div className="reveal-inner">
                    <p className="dialog-en muted">{line.en}</p>
                  </div>
                </div>
                {noteOpen && line.note && <p className="dialog-note muted">💡 {line.note}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {selected.vocabIds && selected.vocabIds.length > 0 && (
        <div className="dialog-vocab-section">
          <p className="settings-menu-heading muted">Vokabeln in diesem Dialog</p>
          <div className="dialog-vocab-chips">
            {selected.vocabIds.map((vid) => {
              const entry = VOCAB.find((v) => v.id === vid);
              if (!entry) return null;
              const expanded = expandedVocab.has(vid);
              return (
                <div key={vid} className="dialog-vocab-chip-wrap">
                  <button
                    type="button"
                    className={`chip dialog-vocab-chip${expanded ? " open" : ""}`}
                    onClick={() => toggleVocab(vid)}
                    aria-expanded={expanded}
                  >
                    {entry.word}
                  </button>
                  {expanded && (
                    <div className="dialog-vocab-detail">
                      <p className="vocab-word">{renderWord(entry.word)}</p>
                      {entry.plural && <p className="vocab-plural muted">Plural: {entry.plural}</p>}
                      <p className="vocab-en">{entry.en}</p>
                      {entry.example && <p className="vocab-example muted">„{entry.example}“</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
}
