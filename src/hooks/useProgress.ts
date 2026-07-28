import { useCallback, useEffect, useState } from "react";
import type { ProgressRecord } from "../data/types";

const STORAGE_KEY = "spielplatz-deutsch:progress";

function loadProgress(): Record<string, ProgressRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, ProgressRecord>) : {};
  } catch {
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, ProgressRecord>>(loadProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // localStorage unavailable (private mode, quota) — progress stays in-memory for this session
    }
  }, [progress]);

  const isKnown = useCallback((id: string) => Boolean(progress[id]?.seen), [progress]);

  const markKnown = useCallback((id: string, known: boolean) => {
    setProgress((prev) => ({
      ...prev,
      [id]: {
        seen: known,
        correctCount: prev[id]?.correctCount ?? 0,
        wrongCount: prev[id]?.wrongCount ?? 0,
        lastSeen: Date.now(),
      },
    }));
  }, []);

  const recordAnswer = useCallback((id: string, correct: boolean) => {
    setProgress((prev) => ({
      ...prev,
      [id]: {
        seen: correct ? true : (prev[id]?.seen ?? false),
        correctCount: (prev[id]?.correctCount ?? 0) + (correct ? 1 : 0),
        wrongCount: (prev[id]?.wrongCount ?? 0) + (correct ? 0 : 1),
        lastSeen: Date.now(),
      },
    }));
  }, []);

  const reset = useCallback(() => setProgress({}), []);

  // Merges a remote progress snapshot into local state, keeping whichever
  // record (local or remote) has the newer lastSeen per item.
  const mergeProgress = useCallback((remote: Record<string, ProgressRecord>) => {
    setProgress((prev) => {
      const merged = { ...prev };
      for (const id in remote) {
        const remoteRecord = remote[id];
        const localRecord = merged[id];
        if (!localRecord || (remoteRecord.lastSeen ?? 0) > (localRecord.lastSeen ?? 0)) {
          merged[id] = remoteRecord;
        }
      }
      return merged;
    });
  }, []);

  return { progress, isKnown, markKnown, recordAnswer, reset, mergeProgress };
}
