import { useState, type ReactNode } from "react";
import type { Level, TopicId } from "../data/types";
import { TOPICS } from "../data/phrases";
import type { SyncStatus } from "../hooks/useSync";

export type Mode = "karten" | "wortschatz" | "uebungen" | "quiz";
export type TopicFilter = TopicId | "alle";
export type LevelFilter = Level | "alle";

const LEVELS: { id: Level; color: string }[] = [
  { id: "A2", color: "#5E86C4" },
  { id: "B1", color: "#2E9B8B" },
  { id: "B2", color: "#D99A1C" },
  { id: "C1", color: "#9B6DB0" },
];

interface SyncState {
  enabled: boolean;
  code: string | null;
  status: SyncStatus;
  createCode: () => void;
  linkCode: (code: string) => void;
  unlink: () => void;
  syncNow: () => void;
}

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
  levelFilter: LevelFilter;
  onLevelChange: (level: LevelFilter) => void;
  progressKnown: number;
  progressTotal: number;
  onResetProgress: () => void;
  sync: SyncState;
  children: ReactNode;
}

export default function AppShell({
  mode,
  onModeChange,
  topicFilter,
  onTopicChange,
  levelFilter,
  onLevelChange,
  progressKnown,
  progressTotal,
  onResetProgress,
  sync,
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

      <div className="level-filter">
        <span className="level-filter-label muted">Niveau</span>
        <div className="level-chips" role="group" aria-label="Niveau filtern">
          <button
            className={`level-chip${levelFilter === "alle" ? " active" : ""}`}
            style={{ "--chip-color": "#22303A" } as React.CSSProperties}
            onClick={() => onLevelChange("alle")}
          >
            Alle
          </button>
          {LEVELS.map((level) => (
            <button
              key={level.id}
              className={`level-chip${levelFilter === level.id ? " active" : ""}`}
              style={{ "--chip-color": level.color } as React.CSSProperties}
              onClick={() => onLevelChange(level.id)}
            >
              {level.id}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="progress-label muted">
          {progressKnown}/{progressTotal} bekannt
        </span>
        <button
          className="reset-progress"
          onClick={() => {
            if (window.confirm("Fortschritt wirklich zurücksetzen?")) onResetProgress();
          }}
        >
          Fortschritt zurücksetzen
        </button>
      </div>

      {sync.enabled && <SyncControls sync={sync} />}

      <main className="mode-content">{children}</main>
    </div>
  );
}

const STATUS_LABEL: Record<SyncStatus, string> = {
  idle: "",
  syncing: "Synchronisiere…",
  synced: "Synchronisiert",
  error: "Synchronisierung fehlgeschlagen",
};

function SyncControls({ sync }: { sync: SyncState }) {
  const [input, setInput] = useState("");

  if (!sync.code) {
    return (
      <div className="sync-panel">
        <button onClick={sync.createCode}>Code erstellen</button>
        <div className="sync-link-row">
          <input
            type="text"
            placeholder="Code eingeben"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Sync-Code eingeben"
          />
          <button
            onClick={() => {
              sync.linkCode(input);
              setInput("");
            }}
            disabled={!input.trim()}
          >
            Verbinden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sync-panel">
      <span className="sync-code">
        Code: <strong>{sync.code}</strong>
      </span>
      <span className="muted sync-status">{STATUS_LABEL[sync.status]}</span>
      <button onClick={sync.syncNow}>Jetzt synchronisieren</button>
      <button onClick={sync.unlink}>Trennen</button>
    </div>
  );
}
