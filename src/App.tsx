import { useMemo, useState } from "react";
import type { Level, TopicId } from "./data/types";
import { PHRASES } from "./data/phrases";
import { VOCAB } from "./data/vocab";
import { EXERCISES } from "./data/exercises";
import AppShell, { type LevelFilter, type Mode, type TopicFilter } from "./components/AppShell";
import Flashcards from "./components/Flashcards";
import VocabLookup from "./components/VocabLookup";
import FillInBlank from "./components/FillInBlank";
import Quiz from "./components/Quiz";
import { useProgress } from "./hooks/useProgress";
import { useSync } from "./hooks/useSync";

const ALL_LEVELS: Level[] = ["A2", "B1", "B2", "C1"];

function matchesTopic(topic: TopicId, filter: TopicFilter): boolean {
  return filter === "alle" || topic === filter;
}

export default function App() {
  const [mode, setMode] = useState<Mode>("karten");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>("alle");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>(() => new Set(ALL_LEVELS));
  const { progress, isKnown, markKnown, recordAnswer, reset, mergeProgress, streak, recordActivity } =
    useProgress();
  const sync = useSync(progress, mergeProgress);

  const filteredPhrases = useMemo(
    () => PHRASES.filter((p) => matchesTopic(p.topic, topicFilter) && levelFilter.has(p.level)),
    [topicFilter, levelFilter],
  );

  const filteredVocab = useMemo(
    () => VOCAB.filter((v) => matchesTopic(v.topic, topicFilter) && levelFilter.has(v.level)),
    [topicFilter, levelFilter],
  );

  const filteredExercises = useMemo(
    () => EXERCISES.filter((e) => matchesTopic(e.topic, topicFilter) && levelFilter.has(e.level)),
    [topicFilter, levelFilter],
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
    if (mode === "karten") return filteredPhrases.filter((p) => isKnown(p.id)).length;
    if (mode === "wortschatz") return filteredVocab.filter((v) => isKnown(v.id)).length;
    if (mode === "uebungen") return filteredExercises.filter((e) => isKnown(e.id)).length;
    if (mode === "quiz") {
      return (
        filteredPhrases.filter((p) => isKnown(p.id)).length +
        filteredVocab.filter((v) => isKnown(v.id)).length
      );
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, filteredPhrases, filteredVocab, filteredExercises, isKnown]);

  const toggleKnown = (id: string) => markKnown(id, !isKnown(id));

  const toggleLevel = (level: Level) => {
    setLevelFilter((prev) => {
      const next = new Set(prev);
      if (next.has(level)) {
        if (next.size === 1) return prev; // keep at least one level selected
        next.delete(level);
      } else {
        next.add(level);
      }
      return next;
    });
  };

  return (
    <AppShell
      mode={mode}
      onModeChange={setMode}
      topicFilter={topicFilter}
      onTopicChange={setTopicFilter}
      levelFilter={levelFilter}
      onLevelToggle={toggleLevel}
      progressKnown={progressKnown}
      progressTotal={progressTotal}
      onResetProgress={reset}
      streak={streak}
      sync={sync}
    >
      {mode === "karten" && (
        <Flashcards
          phrases={filteredPhrases}
          progress={progress}
          onToggleKnown={toggleKnown}
          onReveal={recordActivity}
        />
      )}
      {mode === "wortschatz" && (
        <VocabLookup
          vocab={filteredVocab}
          progress={progress}
          onToggleKnown={toggleKnown}
          onExpand={recordActivity}
        />
      )}
      {mode === "uebungen" && (
        <FillInBlank exercises={filteredExercises} progress={progress} onAnswer={recordAnswer} />
      )}
      {mode === "quiz" && (
        <Quiz
          phrases={filteredPhrases}
          vocab={filteredVocab}
          onAnswerPhrase={recordAnswer}
          onAnswerVocab={recordAnswer}
        />
      )}
    </AppShell>
  );
}
