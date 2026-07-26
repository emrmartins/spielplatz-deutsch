import { useEffect, useMemo, useState } from "react";
import type { Phrase, TopicId, VocabEntry } from "../data/types";
import { PHRASES, TOPICS } from "../data/phrases";
import { VOCAB } from "../data/vocab";

interface QuizProps {
  phrases: Phrase[];
  vocab: VocabEntry[];
  onCorrectPhrase: (id: string) => void;
  onCorrectVocab: (id: string) => void;
}

interface QuizItem {
  id: string;
  kind: "phrase" | "vocab";
  topic: TopicId;
  de: string;
  en: string;
  note?: string;
}

type Direction = "de-en" | "en-de";

function phraseToItem(p: Phrase): QuizItem {
  return { id: p.id, kind: "phrase", topic: p.topic, de: p.de, en: p.en, note: p.note };
}

function vocabToItem(v: VocabEntry): QuizItem {
  return { id: v.id, kind: "vocab", topic: v.topic, de: v.word, en: v.en, note: v.example };
}

const FULL_DECK: QuizItem[] = [...PHRASES.map(phraseToItem), ...VOCAB.map(vocabToItem)];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestion(pool: QuizItem[], excludeId?: string): QuizItem {
  if (pool.length === 1) return pool[0];
  let choice = pool[Math.floor(Math.random() * pool.length)];
  let guard = 0;
  while (choice.id === excludeId && guard < 10) {
    choice = pool[Math.floor(Math.random() * pool.length)];
    guard++;
  }
  return choice;
}

function buildOptions(item: QuizItem, direction: Direction): string[] {
  const field = direction === "de-en" ? "en" : "de";
  const correctText = item[field];
  const distractorTexts = [...new Set(FULL_DECK.filter((x) => x.id !== item.id).map((x) => x[field]))].filter(
    (t) => t !== correctText,
  );
  const distractors = shuffle(distractorTexts).slice(0, 3);
  return shuffle([correctText, ...distractors]);
}

export default function Quiz({ phrases, vocab, onCorrectPhrase, onCorrectVocab }: QuizProps) {
  const [direction, setDirection] = useState<Direction>("de-en");
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const pool = useMemo(
    () => [...phrases.map(phraseToItem), ...vocab.map(vocabToItem)],
    [phrases, vocab],
  );

  const [current, setCurrent] = useState<QuizItem | null>(() => (pool.length ? pickQuestion(pool) : null));
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const options = useMemo(() => (current ? buildOptions(current, direction) : []), [current, direction]);

  useEffect(() => {
    setCurrent(pool.length ? pickQuestion(pool) : null);
    setSelected(null);
    setChecked(false);
    setScore({ correct: 0, total: 0 });
  }, [pool]);

  useEffect(() => {
    setSelected(null);
    setChecked(false);
  }, [direction]);

  if (!current) {
    return (
      <div className="card">
        <p className="muted">Keine Fragen in dieser Auswahl.</p>
      </div>
    );
  }

  const questionField = direction === "de-en" ? "de" : "en";
  const answerField = direction === "de-en" ? "en" : "de";
  const correctText = current[answerField];
  const topic = TOPICS.find((t) => t.id === current.topic);

  const handleSelect = (i: number) => {
    if (checked) return;
    setSelected(i);
    setChecked(true);
    const isCorrect = options[i] === correctText;
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    if (isCorrect) {
      if (current.kind === "phrase") onCorrectPhrase(current.id);
      else onCorrectVocab(current.id);
    }
  };

  const handleNext = () => {
    setCurrent(pickQuestion(pool, current.id));
    setSelected(null);
    setChecked(false);
  };

  const isCorrectOverall = selected !== null && options[selected] === correctText;

  return (
    <div className="quiz">
      <div className="topic-chips direction-chips" role="group" aria-label="Richtung wählen">
        <button
          className={`chip${direction === "de-en" ? " active" : ""}`}
          style={{ "--chip-color": "#22303A" } as React.CSSProperties}
          onClick={() => setDirection("de-en")}
        >
          Deutsch → Englisch
        </button>
        <button
          className={`chip${direction === "en-de" ? " active" : ""}`}
          style={{ "--chip-color": "#22303A" } as React.CSSProperties}
          onClick={() => setDirection("en-de")}
        >
          Englisch → Deutsch
        </button>
      </div>

      <div className="quiz-score muted">
        Punkte: {score.correct} / {score.total}
      </div>

      <div className="card quiz-card">
        {topic && (
          <span className="topic-badge" style={{ "--badge-color": topic.color } as React.CSSProperties}>
            {topic.label}
          </span>
        )}
        <p className="quiz-question">{current[questionField]}</p>

        <div className="quiz-options">
          {options.map((opt, i) => {
            const isThisCorrect = opt === correctText;
            const isThisSelected = selected === i;
            let cls = "quiz-option";
            if (checked && isThisCorrect) cls += " correct";
            else if (checked && isThisSelected) cls += " incorrect";
            return (
              <button key={i} className={cls} disabled={checked} onClick={() => handleSelect(i)}>
                {opt}
              </button>
            );
          })}
        </div>

        {checked && (
          <div className={`exercise-feedback ${isCorrectOverall ? "correct" : "incorrect"}`}>
            <p className="exercise-feedback-title">{isCorrectOverall ? "Richtig!" : "Leider falsch."}</p>
            {current.note && <p className="exercise-explanation">{current.note}</p>}
          </div>
        )}

        <div className="exercise-controls">
          {checked && <button onClick={handleNext}>Weiter</button>}
        </div>
      </div>
    </div>
  );
}
