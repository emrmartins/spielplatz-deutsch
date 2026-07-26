import { Fragment, useMemo, useState } from "react";
import type { VocabEntry } from "../data/types";

interface VocabLookupProps {
  vocab: VocabEntry[];
  known: Record<string, boolean>;
  onToggleKnown: (id: string) => void;
}

const ARTICLES = new Set(["der", "die", "das"]);

function renderWord(word: string) {
  return word.split(" ").map((token, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      {ARTICLES.has(token) ? <strong>{token}</strong> : token}
    </Fragment>
  ));
}

export default function VocabLookup({ vocab, known, onToggleKnown }: VocabLookupProps) {
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
            const isKnown = Boolean(known[v.id]);
            return (
              <div className="vocab-entry" key={v.id}>
                <div className="vocab-entry-main">
                  <p className="vocab-word">{renderWord(v.word)}</p>
                  {v.plural && <p className="vocab-plural muted">Plural: {v.plural}</p>}
                  <p className="vocab-en">{v.en}</p>
                  {v.example && <p className="vocab-example muted">„{v.example}“</p>}
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
