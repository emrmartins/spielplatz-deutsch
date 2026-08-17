import { useEffect, useMemo, useState } from "react";
import type { Exercise, ProgressRecord, TranslationExercise } from "../data/types";

type PracticeItem = Exercise | TranslationExercise;

interface FillInBlankProps {
  exercises: Exercise[];
  translations: TranslationExercise[];
  progress: Record<string, ProgressRecord>;
  onAnswer: (id: string, correct: boolean) => void;
  onReveal: () => void;
}

const ROUND_SIZE = 10;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound(exercises: Exercise[], translations: TranslationExercise[]): PracticeItem[] {
  return shuffle([...exercises, ...translations]).slice(0, ROUND_SIZE);
}

// TranslationExercise has a `de` field, Exercise doesn't — that's enough to tell them apart.
function isTranslationExercise(item: PracticeItem): item is TranslationExercise {
  return "de" in item;
}

function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[.!?,;:]+$/g, "")
    .replace(/\s+/g, " ");
}

function checkTranslation(item: TranslationExercise, answer: string): boolean {
  const normalized = normalizeAnswer(answer);
  if (normalized.length === 0) return false;
  return [item.de, ...(item.altAnswers ?? [])].some((a) => normalizeAnswer(a) === normalized);
}

export default function FillInBlank({ exercises, translations, progress, onAnswer, onReveal }: FillInBlankProps) {
  const overallStats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    for (const e of [...exercises, ...translations]) {
      correct += progress[e.id]?.correctCount ?? 0;
      wrong += progress[e.id]?.wrongCount ?? 0;
    }
    return { correct, wrong, total: correct + wrong };
  }, [exercises, translations, progress]);

  const [round, setRound] = useState<PracticeItem[]>(() => buildRound(exercises, translations));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [translated, setTranslated] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setRound(buildRound(exercises, translations));
    setIndex(0);
    setSelected(null);
    setTextAnswer("");
    setChecked(false);
    setTranslated(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  }, [exercises, translations]);

  const startNewRound = () => {
    setRound(buildRound(exercises, translations));
    setIndex(0);
    setSelected(null);
    setTextAnswer("");
    setChecked(false);
    setTranslated(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  };

  const current = round[index] as PracticeItem | undefined;
  const isTranslateItem = current ? isTranslationExercise(current) : false;
  // Every fill-in exercise lists the correct choice first (correctIndex: 0),
  // so the displayed order must be shuffled — the <option> value stays the
  // original index into current.options, only the render order changes.
  const optionOrder = useMemo(
    () => shuffle((current && !isTranslationExercise(current) ? current.options : []).map((_, i) => i)),
    [current],
  );

  const overallPct =
    overallStats.total === 0 ? null : Math.round((overallStats.correct / overallStats.total) * 100);
  const statsLine = overallPct !== null && (
    <p className="overall-stats muted">
      Insgesamt: {overallStats.correct} richtig, {overallStats.wrong} falsch ({overallPct}%)
    </p>
  );

  if (exercises.length === 0 && translations.length === 0) {
    return (
      <div className="fill-in-blank">
        <div className="card">
          <p className="muted">Keine Übungen in dieser Auswahl.</p>
        </div>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="fill-in-blank">
        {statsLine}
        <div className="card exercise-score">
          <p className="flashcard-text">
            Ergebnis: {score.correct} / {score.total}
          </p>
          <button onClick={startNewRound}>Neue Runde</button>
        </div>
      </div>
    );
  }

  if (!current) return null;

  const isCorrect = isTranslateItem
    ? checkTranslation(current as TranslationExercise, textAnswer)
    : selected === (current as Exercise).correctIndex;
  const currentRecord = progress[current.id];
  const correctAnswerText = isTranslateItem
    ? (current as TranslationExercise).de
    : (current as Exercise).options[(current as Exercise).correctIndex];

  const toggleTranslate = () => {
    setTranslated((t) => {
      const next = !t;
      if (next) onReveal();
      return next;
    });
  };

  const handleCheck = () => {
    if (isTranslateItem ? textAnswer.trim().length === 0 : selected === null) return;
    setChecked(true);
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    onAnswer(current.id, isCorrect);
  };

  const handleNext = () => {
    if (index + 1 < round.length) {
      setIndex(index + 1);
      setSelected(null);
      setTextAnswer("");
      setChecked(false);
      setTranslated(false);
    } else {
      setComplete(true);
    }
  };

  return (
    <div className="fill-in-blank">
      {statsLine}

      <div className="exercise-progress muted">
        Frage {index + 1} / {round.length}
      </div>

      <div className="card exercise-card">
        {isTranslateItem ? (
          <div className="translate-prompt">
            <p className="muted translate-prompt-label">Übersetze ins Deutsche:</p>
            <p className="exercise-sentence">{(current as TranslationExercise).en}</p>
            <input
              type="text"
              className={`translate-input${checked ? (isCorrect ? " correct" : " incorrect") : ""}`}
              value={textAnswer}
              disabled={checked}
              onChange={(e) => setTextAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !checked && textAnswer.trim().length > 0) handleCheck();
              }}
              placeholder="Deine Antwort auf Deutsch…"
              aria-label="Deutsche Übersetzung eingeben"
            />
          </div>
        ) : (
          <div
            className="exercise-sentence-wrap"
            onClick={toggleTranslate}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleTranslate();
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={translated}
            aria-label="Übersetzung anzeigen oder verbergen"
          >
            <p className="exercise-sentence">
              {(current as Exercise).sentence.split("___")[0]}
              <select
                className={`exercise-select${checked ? (isCorrect ? " correct" : " incorrect") : ""}`}
                value={selected ?? ""}
                disabled={checked}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setSelected(Number(e.target.value))}
                aria-label="Antwort auswählen"
              >
                <option value="" disabled>
                  Wählen…
                </option>
                {optionOrder.map((origIndex) => (
                  <option key={origIndex} value={origIndex}>
                    {(current as Exercise).options[origIndex]}
                  </option>
                ))}
              </select>
              {(current as Exercise).sentence.split("___")[1]}
            </p>
            <span className={`reveal-chevron${translated ? " open" : ""}`} aria-hidden="true">
              ▾
            </span>
          </div>
        )}

        {!isTranslateItem && (
          <div className={`reveal-wrap${translated ? " open" : ""}`}>
            <div className="reveal-inner">
              <p className="exercise-en muted">{(current as Exercise).en}</p>
            </div>
          </div>
        )}

        {checked && (
          <div className={`exercise-feedback ${isCorrect ? "correct" : "incorrect"}`}>
            <p className="exercise-feedback-title">
              {isCorrect ? "Richtig!" : `Leider falsch. Richtig wäre: „${correctAnswerText}“.`}
            </p>
            <p className="exercise-explanation">{current.explanation}</p>
            {currentRecord && (
              <p className="practice-count muted">
                Bisher: {currentRecord.correctCount} richtig, {currentRecord.wrongCount} falsch
              </p>
            )}
          </div>
        )}

        <div className="exercise-controls">
          {!checked ? (
            <button
              onClick={handleCheck}
              disabled={isTranslateItem ? textAnswer.trim().length === 0 : selected === null}
            >
              Prüfen
            </button>
          ) : (
            <button onClick={handleNext}>{index + 1 < round.length ? "Weiter" : "Ergebnis"}</button>
          )}
        </div>
      </div>
    </div>
  );
}
