// ---------------------------------------------------------------------------
// Spielplatz-Deutsch — shared types
// ---------------------------------------------------------------------------

export type TopicId =
  | "spielplatz"
  | "kita"
  | "konflikte"
  | "verabredungen"
  | "koerper"
  | "essen";

export type Level = "A2" | "B1" | "B2" | "C1";

export interface Topic {
  id: TopicId;
  label: string;
  en: string;
  color: string;
}

export interface Phrase {
  id: string;
  topic: TopicId;
  level: Level;
  de: string;
  en: string;
  note?: string;
  register?: "du" | "Sie";
  situation?: string;
}

export interface VocabEntry {
  id: string;
  topic: TopicId;
  level: Level;
  word: string;
  plural?: string;
  en: string;
  example?: string;
  partOfSpeech?: "noun" | "verb" | "adj" | "adv" | "phrase";
}

export interface Exercise {
  id: string;
  topic: TopicId;
  level: Level;
  sentence: string;
  en: string; // English translation of the completed sentence (blank filled in)
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface ProgressRecord {
  seen: boolean;
  correctCount: number;
  wrongCount: number;
  lastSeen?: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;   // ISO date string "2026-07-29"
}
