import { Fragment, useMemo, useState } from "react";
import type { ProgressRecord, VocabEntry } from "../data/types";
import { TOPICS } from "../data/phrases";

interface VocabLookupProps {
  vocab: VocabEntry[];
  progress: Record<string, ProgressRecord>;
  onToggleKnown: (id: string) => void;
}

const ARTICLES = new Set(["der", "die", "das"]);

const POS_LABELS: Record<string, string> = {
  noun: "Substantiv",
  verb: "Verb",
  adj: "Adjektiv",
  adv: "Adverb",
  phrase: "Redewendung",
};

function renderWord(word: string) {
  return word.split(" ").map((token, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      {ARTICLES.has(token) ? <strong>{token}</strong> : token}
    </Fragment>
  ));
}

export default function VocabLookup({ vocab, progress, onToggleKnown }: VocabLookupProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return vocab;
    return vocab.filter(
      (v) => v.word.toLowerCase().includes(q) || v.en.toLowerCase().includes(q),
    );
  }, [vocab, query]);

  return (
    <div className="vocab-lookup">
      <input
        type="text"
        className="vocab-search"
        placeholder="Suchen (Deutsch oder Englisch)…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Wortschatz durchsuchen"
      />

      {filtered.length === 0 ? (
        <div className="card">
          <p className="muted">Keine Treffer.</p>
        </div>
      ) : (
        <div className="vocab-list">
          {filtered.map((v) => {
            const record = progress[v.id];
            const isKnown = Boolean(record?.seen);
            const practiceCount = (record?.correctCount ?? 0) + (record?.wrongCount ?? 0);
            const topic = TOPICS.find((t) => t.id === v.topic);
            return (
              <div
                className="vocab-entry"
                key={v.id}
                style={{ "--topic-color": topic?.color ?? "transparent" } as React.CSSProperties}
              >
                <div className="vocab-entry-main">
                  <p className="vocab-word">
                    {renderWord(v.word)}{" "}
                    <span className={`level-badge level-${v.level.toLowerCase()}`}>{v.level}</span>
                  </p>
                  <p className="vocab-en">{v.en}</p>
                  {v.plural && <p className="vocab-plural muted">Plural: {v.plural}</p>}
                  {v.example && <p className="vocab-example muted">„{v.example}“</p>}
                  {v.partOfSpeech && <p className="vocab-pos muted">{POS_LABELS[v.partOfSpeech]}</p>}
                  {practiceCount > 0 && <p className="practice-count muted">{practiceCount}× geübt</p>}
                </div>
                <button
                  className={`know-toggle small${isKnown ? " active" : ""}`}
                  onClick={() => onToggleKnown(v.id)}
                >
                  {isKnown ? "✓ Bekannt" : "Bekannt"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
