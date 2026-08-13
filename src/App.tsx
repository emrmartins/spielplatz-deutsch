import { useMemo, useState } from "react";
import type { Level, TopicId } from "./data/types";
import { PHRASES, TOPICS } from "./data/phrases";
import { VOCAB } from "./data/vocab";
import { EXERCISES } from "./data/exercises";
import { DIALOGS } from "./data/dialogs";
import AppShell, { type LevelFilter, type Mode, type TopicFilter } from "./components/AppShell";
import Flashcards from "./components/Flashcards";
import VocabLookup from "./components/VocabLookup";
import FillInBlank from "./components/FillInBlank";
import Quiz from "./components/Quiz";
import Dialogs from "./components/Dialogs";
import { useProgress } from "./hooks/useProgress";
import { useSync } from "./hooks/useSync";

const ALL_LEVELS: Level[] = ["A2", "B1", "B2", "C1"];
const ALL_TOPICS: TopicId[] = TOPICS.map((t) => t.id);

function toggleInSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) {
    if (next.size === 1) return set; // keep at least one selected
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export default function App() {
  const [mode, setMode] = useState<Mode>("karten");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>(() => new Set(ALL_TOPICS));
  const [levelFilter, setLevelFilter] = useState<LevelFilter>(() => new Set(ALL_LEVELS));
  const [hideKnown, setHideKnown] = useState(false);
  const { progress, isKnown, markKnown, recordAnswer, reset, mergeProgress, streak, recordActivity } =
    useProgress();
  const sync = useSync(progress, mergeProgress);

  const filteredPhrases = useMemo(
    () => PHRASES.filter((p) => topicFilter.has(p.topic) && levelFilter.has(p.level)),
    [topicFilter, levelFilter],
  );

  const filteredVocab = useMemo(
    () => VOCAB.filter((v) => topicFilter.has(v.topic) && levelFilter.has(v.level)),
    [topicFilter, levelFilter],
  );

  const filteredExercises = useMemo(
    () => EXERCISES.filter((e) => topicFilter.has(e.topic) && levelFilter.has(e.level)),
    [topicFilter, levelFilter],
  );

  const filteredDialogs = useMemo(
    () => DIALOGS.filter((d) => topicFilter.has(d.topic) && levelFilter.has(d.level)),
    [topicFilter, levelFilter],
  );

  // "Bekannte ausblenden" narrows the pool actually shown/practiced, but the
  // progress bar keeps counting against the full topic+level filtered set.
  const visiblePhrases = useMemo(
    () => (hideKnown ? filteredPhrases.filter((p) => !isKnown(p.id)) : filteredPhrases),
    [filteredPhrases, hideKnown, isKnown],
  );
  const visibleVocab = useMemo(
    () => (hideKnown ? filteredVocab.filter((v) => !isKnown(v.id)) : filteredVocab),
    [filteredVocab, hideKnown, isKnown],
  );
  const visibleExercises = useMemo(
    () => (hideKnown ? filteredExercises.filter((e) => !isKnown(e.id)) : filteredExercises),
    [filteredExercises, hideKnown, isKnown],
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
      case "dialoge":
        return filteredDialogs.length;
    }
  }, [mode, filteredPhrases, filteredVocab, filteredExercises, filteredDialogs]);

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
    if (mode === "dialoge") return 0;
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, filteredPhrases, filteredVocab, filteredExercises, isKnown]);

  const toggleKnown = (id: string) => markKnown(id, !isKnown(id));
  const toggleTopic = (topic: TopicId) => setTopicFilter((prev) => toggleInSet(prev, topic));
  const toggleLevel = (level: Level) => setLevelFilter((prev) => toggleInSet(prev, level));

  return (
    <AppShell
      mode={mode}
      onModeChange={setMode}
      topicFilter={topicFilter}
      onTopicToggle={toggleTopic}
      levelFilter={levelFilter}
      onLevelToggle={toggleLevel}
      hideKnown={hideKnown}
      onHideKnownChange={setHideKnown}
      progressKnown={progressKnown}
      progressTotal={progressTotal}
      onResetProgress={reset}
      streak={streak}
      sync={sync}
    >
      {mode === "karten" && (
        <Flashcards
          phrases={visiblePhrases}
          progress={progress}
          onToggleKnown={toggleKnown}
          onReveal={recordActivity}
        />
      )}
      {mode === "wortschatz" && (
        <VocabLookup vocab={visibleVocab} progress={progress} onToggleKnown={toggleKnown} />
      )}
      {mode === "uebungen" && (
        <FillInBlank
          exercises={visibleExercises}
          progress={progress}
          onAnswer={recordAnswer}
          onReveal={recordActivity}
        />
      )}
      {mode === "quiz" && (
        <Quiz
          phrases={visiblePhrases}
          vocab={visibleVocab}
          onAnswerPhrase={recordAnswer}
          onAnswerVocab={recordAnswer}
        />
      )}
      {mode === "dialoge" && <Dialogs dialogs={filteredDialogs} onReveal={recordActivity} />}
    </AppShell>
  );
}
