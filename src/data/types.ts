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

export interface TranslationExercise {
  id: string;
  topic: TopicId;
  level: Level;
  en: string; // English prompt to translate
  de: string; // canonical German answer
  altAnswers?: string[]; // other acceptable phrasings
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

export interface DialogLine {
  speaker: string;          // "Du", "Erzieherin", "Kind", "Andere Mama", etc.
  de: string;
  en: string;
  note?: string;            // grammar or cultural note on this line
}

export interface Dialog {
  id: string;
  topic: TopicId;
  level: Level;
  titleDe: string;          // e.g. "Beim Bringen am Morgen"
  titleEn: string;          // e.g. "At morning drop-off"
  situation: string;        // Brief English setup for context
  lines: DialogLine[];
  vocabIds?: string[];      // ids of VocabEntry items used in this dialog
}
