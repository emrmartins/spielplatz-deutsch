import { useMemo, useState } from "react";
import type { TopicId } from "./data/types";
import { PHRASES } from "./data/phrases";
import { VOCAB } from "./data/vocab";
import { EXERCISES } from "./data/exercises";
import AppShell, { type Mode, type TopicFilter } from "./components/AppShell";
import Flashcards from "./components/Flashcards";

const MODE_PLACEHOLDER: Record<Exclude<Mode, "karten">, string> = {
  wortschatz: "Wortschatz-Nachschlagewerk — kommt in Phase 4.",
  uebungen: "Lückentext-Übungen — kommt in Phase 5.",
  quiz: "Quiz — kommt in Phase 6.",
};

function matchesTopic(topic: TopicId, filter: TopicFilter): boolean {
  return filter === "alle" || topic === filter;
}

export default function App() {
  const [mode, setMode] = useState<Mode>("karten");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>("alle");
  const [knownPhrases, setKnownPhrases] = useState<Record<string, boolean>>({});

  const filteredPhrases = useMemo(
    () => PHRASES.filter((p) => matchesTopic(p.topic, topicFilter)),
    [topicFilter],
  );

  const progressTotal = useMemo(() => {
    switch (mode) {
      case "karten":
        return filteredPhrases.length;
      case "wortschatz":
        return VOCAB.filter((v) => matchesTopic(v.topic, topicFilter)).length;
      case "uebungen":
        return EXERCISES.filter((e) => matchesTopic(e.topic, topicFilter)).length;
      case "quiz":
        return (
          filteredPhrases.length + VOCAB.filter((v) => matchesTopic(v.topic, topicFilter)).length
        );
    }
  }, [mode, topicFilter, filteredPhrases]);

  const progressKnown = useMemo(() => {
    if (mode !== "karten") return 0;
    return filteredPhrases.filter((p) => knownPhrases[p.id]).length;
  }, [mode, filteredPhrases, knownPhrases]);

  const toggleKnownPhrase = (id: string) => {
    setKnownPhrases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <AppShell
      mode={mode}
      onModeChange={setMode}
      topicFilter={topicFilter}
      onTopicChange={setTopicFilter}
      progressKnown={progressKnown}
      progressTotal={progressTotal}
    >
      {mode === "karten" ? (
        <Flashcards phrases={filteredPhrases} known={knownPhrases} onToggleKnown={toggleKnownPhrase} />
      ) : (
        <div className="card">
          <p className="muted">{MODE_PLACEHOLDER[mode]}</p>
        </div>
      )}
    </AppShell>
  );
}
