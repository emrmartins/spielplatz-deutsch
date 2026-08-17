import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Level, StreakData, TopicId } from "../data/types";
import { TOPICS } from "../data/phrases";
import type { SyncStatus } from "../hooks/useSync";

export type Mode = "karten" | "uebungen" | "quiz" | "lesen";
export type TopicFilter = Set<TopicId>;
export type LevelFilter = Set<Level>;

const LEVELS: { id: Level; label: string; color: string }[] = [
  { id: "A2", label: "A2", color: "#5E86C4" },
  { id: "B1", label: "B1", color: "#2E9B8B" },
  { id: "B2", label: "B2", color: "#D99A1C" },
  { id: "C1", label: "C1", color: "#9B6DB0" },
];

const TOPIC_OPTIONS = TOPICS.map((t) => ({ id: t.id, label: t.label, color: t.color }));

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
  { id: "uebungen", label: "Übungen" },
  { id: "quiz", label: "Quiz" },
  { id: "lesen", label: "Lesen" },
];

interface AppShellProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  topicFilter: TopicFilter;
  onTopicToggle: (topic: TopicId) => void;
  levelFilter: LevelFilter;
  onLevelToggle: (level: Level) => void;
  hideKnown: boolean;
  onHideKnownChange: (hide: boolean) => void;
  progressKnown: number;
  progressTotal: number;
  onResetProgress: () => void;
  streak: StreakData | null;
  sync: SyncState;
  wortschatz: ReactNode;
  children: ReactNode;
}

// Closes an open dropdown/menu when the user clicks outside its element.
function useOutsideClick(enabled: boolean, onOutside: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled) return;
    function handlePointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [enabled, onOutside]);
  return ref;
}

export default function AppShell({
  mode,
  onModeChange,
  topicFilter,
  onTopicToggle,
  levelFilter,
  onLevelToggle,
  hideKnown,
  onHideKnownChange,
  progressKnown,
  progressTotal,
  onResetProgress,
  streak,
  sync,
  wortschatz,
  children,
}: AppShellProps) {
  const progressPct = progressTotal === 0 ? 0 : Math.round((progressKnown / progressTotal) * 100);
  const [wortschatzOpen, setWortschatzOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="app-header">
        {streak && <div className="header-actions header-actions-left"><StreakBadge streak={streak} /></div>}
        <div className="header-actions header-actions-right">
          <SettingsMenu sync={sync} onResetProgress={onResetProgress} />
        </div>
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

      <div className="filter-row">
        <FilterDropdown
          label="Thema"
          allLabel="Alle Themen"
          options={TOPIC_OPTIONS}
          selected={topicFilter}
          onToggle={onTopicToggle}
        />
        <FilterDropdown
          label="Niveau"
          allLabel="Alle Niveaus"
          options={LEVELS}
          selected={levelFilter}
          onToggle={onLevelToggle}
        />
      </div>

      <label className="hide-known-toggle">
        <input
          type="checkbox"
          checked={hideKnown}
          onChange={(e) => onHideKnownChange(e.target.checked)}
        />
        Bekannte ausblenden
      </label>

      <div className="progress-bar-wrap">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="progress-label muted">
          {progressKnown}/{progressTotal} bekannt
        </span>
      </div>

      <main className="mode-content">{children}</main>

      <button
        type="button"
        className={`wortschatz-fab${wortschatzOpen ? " active" : ""}`}
        onClick={() => setWortschatzOpen((o) => !o)}
        aria-label="Wortschatz"
        aria-pressed={wortschatzOpen}
        title="Wortschatz"
      >
        📖
      </button>

      {wortschatzOpen && (
        <div className="wortschatz-overlay" onClick={() => setWortschatzOpen(false)}>
          <div
            className="wortschatz-overlay-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Wortschatz"
          >
            <div className="wortschatz-overlay-header">
              <h2>Wortschatz</h2>
              <button
                type="button"
                className="wortschatz-overlay-close"
                onClick={() => setWortschatzOpen(false)}
                aria-label="Schließen"
              >
                ×
              </button>
            </div>
            <div className="wortschatz-overlay-body">{wortschatz}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function StreakBadge({ streak }: { streak: StreakData }) {
  const [showBest, setShowBest] = useState(false);
  const display = Math.max(1, streak.currentStreak);

  return (
    <button
      className="streak-badge"
      onClick={() => setShowBest((s) => !s)}
      title={`Bestrekord: ${streak.longestStreak} Tage`}
      aria-label={`Serie: ${display} Tage. Bestrekord: ${streak.longestStreak} Tage`}
    >
      🔥 {display}
      {showBest && <span className="streak-best">Rekord: {streak.longestStreak}</span>}
    </button>
  );
}

interface FilterOption<T extends string> {
  id: T;
  label: string;
  color: string;
}

function FilterDropdown<T extends string>({
  label,
  allLabel,
  options,
  selected,
  onToggle,
}: {
  label: string;
  allLabel: string;
  options: FilterOption<T>[];
  selected: Set<T>;
  onToggle: (id: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(open, () => setOpen(false));

  const summary =
    selected.size === options.length
      ? allLabel
      : selected.size === 1
        ? (options.find((o) => selected.has(o.id))?.label ?? "")
        : `${selected.size} ausgewählt`;

  return (
    <div className="filter-dropdown" ref={ref}>
      <button
        type="button"
        className="filter-dropdown-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="filter-dropdown-label">{label}</span>
        <span className="filter-dropdown-summary">{summary}</span>
        <span className={`reveal-chevron${open ? " open" : ""}`} aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <div className="filter-dropdown-menu" role="group" aria-label={label}>
          {options.map((opt) => (
            <label key={opt.id} className="filter-dropdown-option">
              <input type="checkbox" checked={selected.has(opt.id)} onChange={() => onToggle(opt.id)} />
              <span className="filter-dropdown-swatch" style={{ background: opt.color }} aria-hidden="true" />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

const STATUS_LABEL: Record<SyncStatus, string> = {
  idle: "",
  syncing: "Synchronisiere…",
  synced: "Synchronisiert",
  error: "Synchronisierung fehlgeschlagen",
};

function SettingsMenu({
  sync,
  onResetProgress,
}: {
  sync: SyncState;
  onResetProgress: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const ref = useOutsideClick(open, () => setOpen(false));

  return (
    <div className="settings-menu" ref={ref}>
      <button
        type="button"
        className="settings-menu-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Einstellungen"
        title="Einstellungen"
      >
        ⚙
      </button>
      {open && (
        <div className="settings-menu-panel">
          {sync.enabled && (
            <div className="settings-menu-section">
              <p className="settings-menu-heading muted">Geräte-Sync</p>
              {!sync.code ? (
                <>
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
                </>
              ) : (
                <>
                  <span className="sync-code">
                    Code: <strong>{sync.code}</strong>
                  </span>
                  <span className="muted sync-status">{STATUS_LABEL[sync.status]}</span>
                  <div className="sync-link-row">
                    <button onClick={sync.syncNow}>Jetzt synchronisieren</button>
                    <button onClick={sync.unlink}>Trennen</button>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="settings-menu-section">
            <button
              className="reset-progress"
              onClick={() => {
                if (window.confirm("Fortschritt wirklich zurücksetzen?")) {
                  onResetProgress();
                  setOpen(false);
                }
              }}
            >
              Fortschritt zurücksetzen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
