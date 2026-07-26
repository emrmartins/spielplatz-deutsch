import { useState } from "react";
import type { TopicId } from "./data/types";
import { PHRASES } from "./data/phrases";
import { VOCAB } from "./data/vocab";
import { EXERCISES } from "./data/exercises";
import AppShell, { type Mode, type TopicFilter } from "./components/AppShell";

const MODE_PLACEHOLDER: Record<Mode, string> = {
  karten: "Karten (Flashcards) — kommt in Phase 3.",
  wortschatz: "Wortschatz-Nachschlagewerk — kommt in Phase 4.",
  uebungen: "Lückentext-Übungen — kommt in Phase 5.",
  quiz: "Quiz — kommt in Phase 6.",
};

function countForMode(mode: Mode, topic: TopicFilter): number {
  const matches = (t: TopicId) => topic === "alle" || t === topic;
  switch (mode) {
    case "karten":
      return PHRASES.filter((p) => matches(p.topic)).length;
    case "wortschatz":
      return VOCAB.filter((v) => matches(v.topic)).length;
    case "uebungen":
      return EXERCISES.filter((e) => matches(e.topic)).length;
    case "quiz":
      return (
        PHRASES.filter((p) => matches(p.topic)).length +
        VOCAB.filter((v) => matches(v.topic)).length
      );
  }
}

export default function App() {
  const [mode, setMode] = useState<Mode>("karten");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>("alle");

  const progressTotal = countForMode(mode, topicFilter);

  return (
    <AppShell
      mode={mode}
      onModeChange={setMode}
      topicFilter={topicFilter}
      onTopicChange={setTopicFilter}
      progressKnown={0}
      progressTotal={progressTotal}
    >
      <div className="card">
        <p className="muted">{MODE_PLACEHOLDER[mode]}</p>
      </div>
    </AppShell>
  );
}
