import type { ReactNode } from "react";
import type { TopicId } from "../data/types";
import { TOPICS } from "../data/phrases";

export type Mode = "karten" | "wortschatz" | "uebungen" | "quiz";
export type TopicFilter = TopicId | "alle";

const MODES: { id: Mode; label: string }[] = [
  { id: "karten", label: "Karten" },
  { id: "wortschatz", label: "Wortschatz" },
  { id: "uebungen", label: "Übungen" },
  { id: "quiz", label: "Quiz" },
];

interface AppShellProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  topicFilter: TopicFilter;
  onTopicChange: (topic: TopicFilter) => void;
  progressKnown: number;
  progressTotal: number;
  children: ReactNode;
}

export default function AppShell({
  mode,
  onModeChange,
  topicFilter,
  onTopicChange,
  progressKnown,
  progressTotal,
  children,
}: AppShellProps) {
  const progressPct = progressTotal === 0 ? 0 : Math.round((progressKnown / progressTotal) * 100);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Spielplatz-Deutsch</h1>
        <p className="muted">Alltagsdeutsch für Spielplatz, Kita und Verabredungen</p>
      </header>

      <nav className="mode-tabs" role="tablist" aria-label="Modus wählen">
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            className={`mode-tab${mode === m.id ? " active" : ""}`}
            onClick={() => onModeChange(m.id)}
          >
            {m.label}
          </button>
        ))}
      </nav>

      <div className="topic-chips" role="group" aria-label="Thema filtern">
        <button
          className={`chip${topicFilter === "alle" ? " active" : ""}`}
          style={{ "--chip-color": "#22303A" } as React.CSSProperties}
          onClick={() => onTopicChange("alle")}
        >
          Alle
        </button>
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            className={`chip${topicFilter === topic.id ? " active" : ""}`}
            style={{ "--chip-color": topic.color } as React.CSSProperties}
            onClick={() => onTopicChange(topic.id)}
          >
            {topic.label}
          </button>
        ))}
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="progress-label muted">
          {progressKnown}/{progressTotal} bekannt
        </span>
      </div>

      <main className="mode-content">{children}</main>
    </div>
  );
}
