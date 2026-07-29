import { useCallback, useEffect, useState } from "react";
import type { ProgressRecord, StreakData } from "../data/types";

const PROGRESS_KEY = "spielplatz-deutsch:progress";
const STREAK_KEY = "spielplatz-deutsch:streak";

function loadProgress(): Record<string, ProgressRecord> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, ProgressRecord>) : {};
  } catch {
    return {};
  }
}

function loadStreak(): StreakData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STREAK_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StreakData;
  } catch {
    return null;
  }
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isYesterday(dateStr: string, today: string): boolean {
  const d = new Date(`${dateStr}T00:00:00`);
  const t = new Date(`${today}T00:00:00`);
  const diffDays = Math.round((t.getTime() - d.getTime()) / 86_400_000);
  return diffDays === 1;
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, ProgressRecord>>(loadProgress);
  const [streak, setStreak] = useState<StreakData | null>(loadStreak);

  useEffect(() => {
    try {
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // localStorage unavailable (private mode, quota) — progress stays in-memory for this session
    }
  }, [progress]);

  useEffect(() => {
    try {
      if (streak) window.localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
      else window.localStorage.removeItem(STREAK_KEY);
    } catch {
      // localStorage unavailable — streak stays in-memory for this session
    }
  }, [streak]);

  const recordActivity = useCallback(() => {
    setStreak((prev) => {
      const today = todayISO();
      if (!prev) return { currentStreak: 1, longestStreak: 1, lastActiveDate: today };
      if (prev.lastActiveDate === today) return prev;
      if (isYesterday(prev.lastActiveDate, today)) {
        const currentStreak = prev.currentStreak + 1;
        return { currentStreak, longestStreak: Math.max(prev.longestStreak, currentStreak), lastActiveDate: today };
      }
      return { currentStreak: 1, longestStreak: Math.max(prev.longestStreak, 1), lastActiveDate: today };
    });
  }, []);

  const isKnown = useCallback((id: string) => Boolean(progress[id]?.seen), [progress]);

  const markKnown = useCallback(
    (id: string, known: boolean) => {
      setProgress((prev) => ({
        ...prev,
        [id]: {
          seen: known,
          correctCount: prev[id]?.correctCount ?? 0,
          wrongCount: prev[id]?.wrongCount ?? 0,
          lastSeen: Date.now(),
        },
      }));
      recordActivity();
    },
    [recordActivity],
  );

  const recordAnswer = useCallback(
    (id: string, correct: boolean) => {
      setProgress((prev) => ({
        ...prev,
        [id]: {
          seen: correct ? true : (prev[id]?.seen ?? false),
          correctCount: (prev[id]?.correctCount ?? 0) + (correct ? 1 : 0),
          wrongCount: (prev[id]?.wrongCount ?? 0) + (correct ? 0 : 1),
          lastSeen: Date.now(),
        },
      }));
      recordActivity();
    },
    [recordActivity],
  );

  const reset = useCallback(() => {
    setProgress({});
    setStreak(null);
  }, []);

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

  return { progress, isKnown, markKnown, recordAnswer, reset, mergeProgress, streak, recordActivity };
}
