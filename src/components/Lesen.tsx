import { Fragment, useEffect, useRef, useState } from "react";
import type { Dialog, ProgressRecord, ReadingText } from "../data/types";
import { TOPICS } from "../data/phrases";
import { VOCAB } from "../data/vocab";
import { useSpeech } from "../hooks/useSpeech";

interface LesenProps {
  dialogs: Dialog[];
  readings: ReadingText[];
  progress: Record<string, ProgressRecord>;
  onReveal: () => void;
  onMarkRead: (id: string) => void;
}

type ContentType = "both" | "dialoge" | "texte";
type Selection = { kind: "dialog"; dialog: Dialog } | { kind: "reading"; reading: ReadingText };

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

function firstSentence(text: string): string {
  const match = text.match(/^[^.!?]*[.!?]/);
  return (match ? match[0] : text).trim();
}

export default function Lesen({ dialogs, readings, progress, onReveal, onMarkRead }: LesenProps) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [contentType, setContentType] = useState<ContentType>("both");
  const [revealedLines, setRevealedLines] = useState<Set<number>>(new Set());
  const [openNotes, setOpenNotes] = useState<Set<number>>(new Set());
  const [expandedVocab, setExpandedVocab] = useState<Set<string>>(new Set());
  const [revealedParagraphs, setRevealedParagraphs] = useState<Set<number>>(new Set());
  const [qIndex, setQIndex] = useState(0);
  const [qSelected, setQSelected] = useState<number | null>(null);
  const [qChecked, setQChecked] = useState(false);
  const [qScore, setQScore] = useState({ correct: 0, total: 0 });
  const [qComplete, setQComplete] = useState(false);
  const everRevealedRef = useRef<Set<number>>(new Set());
  const everRevealedParagraphsRef = useRef<Set<number>>(new Set());
  const streakTriggeredRef = useRef(false);
  const readTriggeredRef = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { speak, hasGermanVoice } = useSpeech();

  const openDialog = (dialog: Dialog) => {
    setSelection({ kind: "dialog", dialog });
    setRevealedLines(new Set());
    setOpenNotes(new Set());
    setExpandedVocab(new Set());
    everRevealedRef.current = new Set();
    streakTriggeredRef.current = false;
    readTriggeredRef.current = false;
  };

  const openReading = (reading: ReadingText) => {
    setSelection({ kind: "reading", reading });
    setExpandedVocab(new Set());
    setRevealedParagraphs(new Set());
    setQIndex(0);
    setQSelected(null);
    setQChecked(false);
    setQScore({ correct: 0, total: 0 });
    setQComplete(false);
    everRevealedParagraphsRef.current = new Set();
    streakTriggeredRef.current = false;
  };

  const closeSelection = () => setSelection(null);

  // Marks the open dialog as read once its end comes into view.
  useEffect(() => {
    if (!selection || selection.kind !== "dialog") return;
    const el = bottomRef.current;
    if (!el) return;
    const dialogId = selection.dialog.id;
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
  }, [selection, onMarkRead]);

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

  const toggleParagraph = (i: number) => {
    setRevealedParagraphs((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    everRevealedParagraphsRef.current.add(i);
    if (everRevealedParagraphsRef.current.size >= 2 && !streakTriggeredRef.current) {
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

  if (!selection) {
    const items = [
      ...(contentType !== "texte" ? dialogs.map((d) => ({ kind: "dialog" as const, item: d })) : []),
      ...(contentType !== "dialoge" ? readings.map((r) => ({ kind: "reading" as const, item: r })) : []),
    ];

    return (
      <div className="dialogs">
        <div className="topic-chips direction-chips" role="tablist" aria-label="Inhaltstyp wählen">
          <button
            type="button"
            role="tab"
            aria-selected={contentType === "both"}
            className={`chip${contentType === "both" ? " active" : ""}`}
            style={{ "--chip-color": "#22303A" } as React.CSSProperties}
            onClick={() => setContentType("both")}
          >
            Alle
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={contentType === "dialoge"}
            className={`chip${contentType === "dialoge" ? " active" : ""}`}
            style={{ "--chip-color": "#2E9B8B" } as React.CSSProperties}
            onClick={() => setContentType("dialoge")}
          >
            💬 Dialoge
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={contentType === "texte"}
            className={`chip${contentType === "texte" ? " active" : ""}`}
            style={{ "--chip-color": "#5E86C4" } as React.CSSProperties}
            onClick={() => setContentType("texte")}
          >
            📖 Texte
          </button>
        </div>

        {items.length === 0 ? (
          <div className="card">
            <p className="muted">Keine Einträge in dieser Auswahl.</p>
          </div>
        ) : (
          <div className="dialog-list">
            {items.map((entry) => {
              if (entry.kind === "dialog") {
                const d = entry.item;
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
                          <span className="dialog-read-badge" title="Bekannt" aria-label="Bekannt">
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
              }

              const r = entry.item;
              const topic = TOPICS.find((t) => t.id === r.topic);
              return (
                <div
                  key={r.id}
                  className="dialog-card reading-card"
                  style={{ "--topic-color": topic?.color ?? "transparent" } as React.CSSProperties}
                  onClick={() => openReading(r)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openReading(r);
                    }
                  }}
                >
                  <div className="dialog-card-head">
                    <p className="dialog-card-title">
                      <span aria-hidden="true">📖</span> {r.titleDe}
                    </p>
                    <div className="dialog-card-badges">
                      <span className="reading-time-badge">~{r.readingTimeMinutes} min</span>
                      <span className={`level-badge level-${r.level.toLowerCase()}`}>{r.level}</span>
                    </div>
                  </div>
                  <p className="dialog-card-title-en muted">{r.titleEn}</p>
                  <p className="dialog-card-situation reading-card-intro muted">{firstSentence(r.intro)}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (selection.kind === "dialog") {
    const selected = selection.dialog;
    return (
      <div className="dialogs">
        <button type="button" className="dialog-back" onClick={closeSelection}>
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

  const reading = selection.reading;
  const topic = TOPICS.find((t) => t.id === reading.topic);
  const currentQuestion = reading.questions[qIndex] as
    | ReadingText["questions"][number]
    | undefined;

  const handleSelectQuestion = (i: number) => {
    if (qChecked || !currentQuestion) return;
    setQSelected(i);
    setQChecked(true);
    const isCorrect = i === currentQuestion.correctIndex;
    setQScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    if (!streakTriggeredRef.current) {
      streakTriggeredRef.current = true;
      onReveal();
    }
  };

  const handleNextQuestion = () => {
    if (qIndex + 1 < reading.questions.length) {
      setQIndex((i) => i + 1);
      setQSelected(null);
      setQChecked(false);
    } else {
      setQComplete(true);
    }
  };

  return (
    <div className="dialogs">
      <button type="button" className="dialog-back" onClick={closeSelection}>
        ← Zurück
      </button>

      <div className="dialog-read-head">
        <p className="dialog-read-title">{reading.titleDe}</p>
        <div className="dialog-card-badges">
          {topic && (
            <span className="level-badge" style={{ background: topic.color }}>
              {topic.label}
            </span>
          )}
          <span className={`level-badge level-${reading.level.toLowerCase()}`}>{reading.level}</span>
        </div>
      </div>
      <p className="muted reading-time-label">Lesezeit: ~{reading.readingTimeMinutes} min</p>
      <p className="reading-intro">{reading.intro}</p>

      <div className="dialog-lines">
        {reading.paragraphs.map((p, i) => {
          const revealed = revealedParagraphs.has(i);
          return (
            <div className="dialog-line" key={i}>
              {i === 0 && <p className="muted reading-hint">Tippen zum Übersetzen</p>}
              <div className="dialog-line-head">
                {hasGermanVoice && (
                  <button
                    type="button"
                    className="audio-btn small"
                    onClick={() => speak(p.de)}
                    aria-label={`„${p.de}“ vorlesen`}
                  >
                    🔊
                  </button>
                )}
              </div>
              <div
                className="dialog-bubble"
                onClick={() => toggleParagraph(i)}
                role="button"
                tabIndex={0}
                aria-expanded={revealed}
                aria-label="Übersetzung anzeigen oder verbergen"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleParagraph(i);
                  }
                }}
              >
                <p className="dialog-de">
                  {p.de}
                  <span className={`reveal-chevron${revealed ? " open" : ""}`} aria-hidden="true">
                    ▾
                  </span>
                </p>
                <div className={`reveal-wrap${revealed ? " open" : ""}`}>
                  <div className="reveal-inner">
                    <p className="dialog-en muted">{p.en}</p>
                    {p.note && <p className="reading-note muted">ℹ️ {p.note}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {reading.questions.length > 0 && (
        <div className="reading-questions">
          <p className="reading-questions-heading">Verstehst du den Text?</p>
          {!qComplete && currentQuestion ? (
            <div className="card quiz-card">
              <p className="quiz-question">{currentQuestion.question}</p>
              <div className="quiz-options">
                {currentQuestion.options.map((opt, i) => {
                  let cls = "quiz-option";
                  if (qChecked && i === currentQuestion.correctIndex) cls += " correct";
                  else if (qChecked && i === qSelected) cls += " incorrect";
                  return (
                    <button key={i} className={cls} disabled={qChecked} onClick={() => handleSelectQuestion(i)}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {qChecked && (
                <div
                  className={`exercise-feedback ${qSelected === currentQuestion.correctIndex ? "correct" : "incorrect"}`}
                >
                  <p className="exercise-feedback-title">
                    {qSelected === currentQuestion.correctIndex ? "Richtig!" : "Leider falsch."}
                  </p>
                  <p className="exercise-explanation">{currentQuestion.explanationDe}</p>
                  <p className="exercise-explanation muted">{currentQuestion.explanationEn}</p>
                </div>
              )}
              <div className="exercise-controls">
                {qChecked && (
                  <button onClick={handleNextQuestion}>
                    {qIndex + 1 < reading.questions.length ? "Nächste Frage" : "Ergebnis"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="card exercise-score">
              <p className="flashcard-text">
                {qScore.correct}/{qScore.total} richtig
              </p>
            </div>
          )}
        </div>
      )}

      {reading.vocabIds && reading.vocabIds.length > 0 && (
        <div className="dialog-vocab-section">
          <p className="settings-menu-heading muted">Vokabeln in diesem Text</p>
          <div className="dialog-vocab-chips">
            {reading.vocabIds.map((vid) => {
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
    </div>
  );
}
