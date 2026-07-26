import { useMemo, useState } from "react";
import type { TopicId } from "./data/types";
import { PHRASES } from "./data/phrases";
import { VOCAB } from "./data/vocab";
import { EXERCISES } from "./data/exercises";
import AppShell, { type Mode, type TopicFilter } from "./components/AppShell";
import Flashcards from "./components/Flashcards";
import VocabLookup from "./components/VocabLookup";
import FillInBlank from "./components/FillInBlank";
import Quiz from "./components/Quiz";

function matchesTopic(topic: TopicId, filter: TopicFilter): boolean {
  return filter === "alle" || topic === filter;
}

export default function App() {
  const [mode, setMode] = useState<Mode>("karten");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>("alle");
  const [knownPhrases, setKnownPhrases] = useState<Record<string, boolean>>({});
  const [knownVocab, setKnownVocab] = useState<Record<string, boolean>>({});
  const [knownExercises, setKnownExercises] = useState<Record<string, boolean>>({});

  const filteredPhrases = useMemo(
    () => PHRASES.filter((p) => matchesTopic(p.topic, topicFilter)),
    [topicFilter],
  );

  const filteredVocab = useMemo(
    () => VOCAB.filter((v) => matchesTopic(v.topic, topicFilter)),
    [topicFilter],
  );

  const filteredExercises = useMemo(
    () => EXERCISES.filter((e) => matchesTopic(e.topic, topicFilter)),
    [topicFilter],
  );

  const progressTotal = useMemo(() => {
    switch (mode) {
      case "karten":
        return filteredPhrases.length;
      case "wortschatz":
        return filteredVocab.length;
      case "uebungen":
        return filteredExercises.length;
      case "quiz":
        return filteredPhrases.length + filteredVocab.length;
    }
  }, [mode, filteredPhrases, filteredVocab, filteredExercises]);

  const progressKnown = useMemo(() => {
    if (mode === "karten") return filteredPhrases.filter((p) => knownPhrases[p.id]).length;
    if (mode === "wortschatz") return filteredVocab.filter((v) => knownVocab[v.id]).length;
    if (mode === "uebungen") return filteredExercises.filter((e) => knownExercises[e.id]).length;
    if (mode === "quiz") {
      return (
        filteredPhrases.filter((p) => knownPhrases[p.id]).length +
        filteredVocab.filter((v) => knownVocab[v.id]).length
      );
    }
    return 0;
  }, [mode, filteredPhrases, filteredVocab, filteredExercises, knownPhrases, knownVocab, knownExercises]);

  const toggleKnownPhrase = (id: string) => {
    setKnownPhrases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleKnownVocab = (id: string) => {
    setKnownVocab((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const markExerciseCorrect = (id: string) => {
    setKnownExercises((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const markPhraseCorrect = (id: string) => {
    setKnownPhrases((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const markVocabCorrect = (id: string) => {
    setKnownVocab((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
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
      {mode === "karten" && (
        <Flashcards phrases={filteredPhrases} known={knownPhrases} onToggleKnown={toggleKnownPhrase} />
      )}
      {mode === "wortschatz" && (
        <VocabLookup vocab={filteredVocab} known={knownVocab} onToggleKnown={toggleKnownVocab} />
      )}
      {mode === "uebungen" && (
        <FillInBlank exercises={filteredExercises} onCorrect={markExerciseCorrect} />
      )}
      {mode === "quiz" && (
        <Quiz
          phrases={filteredPhrases}
          vocab={filteredVocab}
          onCorrectPhrase={markPhraseCorrect}
          onCorrectVocab={markVocabCorrect}
        />
      )}
    </AppShell>
  );
}
