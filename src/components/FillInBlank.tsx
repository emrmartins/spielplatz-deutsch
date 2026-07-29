import { useEffect, useMemo, useState } from "react";
import type { Exercise, ProgressRecord } from "../data/types";

interface FillInBlankProps {
  exercises: Exercise[];
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

function buildRound(pool: Exercise[]): Exercise[] {
  return shuffle(pool).slice(0, ROUND_SIZE);
}

export default function FillInBlank({ exercises, progress, onAnswer, onReveal }: FillInBlankProps) {
  const overallStats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    for (const e of exercises) {
      correct += progress[e.id]?.correctCount ?? 0;
      wrong += progress[e.id]?.wrongCount ?? 0;
    }
    return { correct, wrong, total: correct + wrong };
  }, [exercises, progress]);

  const [round, setRound] = useState<Exercise[]>(() => buildRound(exercises));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [translated, setTranslated] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setRound(buildRound(exercises));
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setTranslated(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  }, [exercises]);

  const startNewRound = () => {
    setRound(buildRound(exercises));
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setTranslated(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  };

  const overallPct =
    overallStats.total === 0 ? null : Math.round((overallStats.correct / overallStats.total) * 100);
  const statsLine = overallPct !== null && (
    <p className="overall-stats muted">
      Insgesamt: {overallStats.correct} richtig, {overallStats.wrong} falsch ({overallPct}%)
    </p>
  );

  if (exercises.length === 0) {
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

  const current = round[index];
  const isCorrect = selected === current.correctIndex;
  const currentRecord = progress[current.id];
  const [before, after] = current.sentence.split("___");

  const toggleTranslate = () => {
    setTranslated((t) => {
      const next = !t;
      if (next) onReveal();
      return next;
    });
  };

  const handleCheck = () => {
    if (selected === null) return;
    setChecked(true);
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    onAnswer(current.id, isCorrect);
  };

  const handleNext = () => {
    if (index + 1 < round.length) {
      setIndex(index + 1);
      setSelected(null);
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
            {before}
            <select
              className="exercise-select"
              value={selected ?? ""}
              disabled={checked}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setSelected(Number(e.target.value))}
              aria-label="Antwort auswählen"
            >
              <option value="" disabled>
                Wählen…
              </option>
              {current.options.map((opt, i) => (
                <option key={i} value={i}>
                  {opt}
                </option>
              ))}
            </select>
            {after}
          </p>
          <span className={`reveal-chevron${translated ? " open" : ""}`} aria-hidden="true">
            ▾
          </span>
        </div>

        <div className={`reveal-wrap${translated ? " open" : ""}`}>
          <div className="reveal-inner">
            <p className="exercise-en muted">{current.en}</p>
          </div>
        </div>

        {checked && (
          <div className={`exercise-feedback ${isCorrect ? "correct" : "incorrect"}`}>
            <p className="exercise-feedback-title">
              {isCorrect ? "Richtig!" : `Leider falsch. Richtig wäre: „${current.options[current.correctIndex]}“.`}
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
            <button onClick={handleCheck} disabled={selected === null}>
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
