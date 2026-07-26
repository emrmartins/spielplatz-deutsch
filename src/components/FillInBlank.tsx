import { useEffect, useMemo, useState } from "react";
import type { Exercise } from "../data/types";

interface FillInBlankProps {
  exercises: Exercise[];
  onCorrect: (id: string) => void;
}

type DifficultyFilter = "alle" | 1 | 2 | 3;

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

export default function FillInBlank({ exercises, onCorrect }: FillInBlankProps) {
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("alle");
  const pool = useMemo(
    () => exercises.filter((e) => difficulty === "alle" || e.difficulty === difficulty),
    [exercises, difficulty],
  );

  const [round, setRound] = useState<Exercise[]>(() => buildRound(pool));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setRound(buildRound(pool));
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  }, [pool]);

  const startNewRound = () => {
    setRound(buildRound(pool));
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setScore({ correct: 0, total: 0 });
    setComplete(false);
  };

  if (pool.length === 0) {
    return (
      <div className="fill-in-blank">
        <DifficultyChips value={difficulty} onChange={setDifficulty} />
        <div className="card">
          <p className="muted">Keine Übungen in dieser Auswahl.</p>
        </div>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="fill-in-blank">
        <DifficultyChips value={difficulty} onChange={setDifficulty} />
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
  const [before, after] = current.sentence.split("___");

  const handleCheck = () => {
    if (selected === null) return;
    setChecked(true);
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    if (isCorrect) onCorrect(current.id);
  };

  const handleNext = () => {
    if (index + 1 < round.length) {
      setIndex(index + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setComplete(true);
    }
  };

  return (
    <div className="fill-in-blank">
      <DifficultyChips value={difficulty} onChange={setDifficulty} />

      <div className="exercise-progress muted">
        Frage {index + 1} / {round.length}
      </div>

      <div className="card exercise-card">
        <p className="exercise-sentence">
          {before}
          <select
            className="exercise-select"
            value={selected ?? ""}
            disabled={checked}
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

        {checked && (
          <div className={`exercise-feedback ${isCorrect ? "correct" : "incorrect"}`}>
            <p className="exercise-feedback-title">
              {isCorrect ? "Richtig!" : `Leider falsch. Richtig wäre: „${current.options[current.correctIndex]}“.`}
            </p>
            <p className="exercise-explanation">{current.explanation}</p>
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

function DifficultyChips({
  value,
  onChange,
}: {
  value: DifficultyFilter;
  onChange: (d: DifficultyFilter) => void;
}) {
  const options: { id: DifficultyFilter; label: string }[] = [
    { id: "alle", label: "Alle" },
    { id: 1, label: "Leicht" },
    { id: 2, label: "Mittel" },
    { id: 3, label: "Schwer" },
  ];
  return (
    <div className="topic-chips difficulty-chips" role="group" aria-label="Schwierigkeit filtern">
      {options.map((opt) => (
        <button
          key={opt.id}
          className={`chip${value === opt.id ? " active" : ""}`}
          style={{ "--chip-color": "#22303A" } as React.CSSProperties}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
