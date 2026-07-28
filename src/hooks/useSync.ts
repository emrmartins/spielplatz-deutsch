import { useCallback, useEffect, useRef, useState } from "react";
import type { ProgressRecord } from "../data/types";

const CODE_KEY = "spielplatz-deutsch:sync-code";
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O/1/I/L ambiguity

function randomCode(): string {
  let code = "";
  for (let i = 0; i < 6; i++) code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return code;
}

export type SyncStatus = "idle" | "syncing" | "synced" | "error";

export function useSync(
  progress: Record<string, ProgressRecord>,
  mergeProgress: (remote: Record<string, ProgressRecord>) => void,
) {
  const [code, setCode] = useState<string | null>(() => window.localStorage.getItem(CODE_KEY));
  const [status, setStatus] = useState<SyncStatus>("idle");
  const pushTimer = useRef<number | null>(null);
  const skipNextPush = useRef(false);

  const push = useCallback(async (c: string, data: Record<string, ProgressRecord>) => {
    setStatus("syncing");
    try {
      const res = await fetch(`/sync/${c}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "synced" : "error");
    } catch {
      setStatus("error");
    }
  }, []);

  const pull = useCallback(
    async (c: string) => {
      setStatus("syncing");
      try {
        const res = await fetch(`/sync/${c}`);
        if (res.ok) {
          const remote = await res.json();
          skipNextPush.current = true;
          mergeProgress(remote);
        }
        setStatus(res.ok ? "synced" : "error");
      } catch {
        setStatus("error");
      }
    },
    [mergeProgress],
  );

  // Pull once on mount if a code is already linked.
  useEffect(() => {
    if (code) pull(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced push whenever progress changes locally (skipped right after a pull-merge).
  useEffect(() => {
    if (!code) return;
    if (skipNextPush.current) {
      skipNextPush.current = false;
      return;
    }
    if (pushTimer.current) window.clearTimeout(pushTimer.current);
    pushTimer.current = window.setTimeout(() => push(code, progress), 3000);
    return () => {
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
    };
  }, [code, progress, push]);

  const createCode = useCallback(() => {
    const c = randomCode();
    window.localStorage.setItem(CODE_KEY, c);
    setCode(c);
    push(c, progress);
  }, [progress, push]);

  const linkCode = useCallback(
    (input: string) => {
      const clean = input.trim().toUpperCase();
      if (!clean) return;
      window.localStorage.setItem(CODE_KEY, clean);
      setCode(clean);
      pull(clean);
    },
    [pull],
  );

  const unlink = useCallback(() => {
    window.localStorage.removeItem(CODE_KEY);
    setCode(null);
    setStatus("idle");
  }, []);

  const syncNow = useCallback(() => {
    if (code) pull(code);
  }, [code, pull]);

  return { enabled: true, code, status, createCode, linkCode, unlink, syncNow };
}
