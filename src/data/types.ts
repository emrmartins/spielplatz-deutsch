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

export interface Topic {
  id: TopicId;
  label: string;       // German label shown in UI
  en: string;           // English label for reference
  color: string;        // Hex color for chips/accents
}

export interface Phrase {
  id: string;
  topic: TopicId;
  de: string;           // German sentence
  en: string;           // English translation
  note?: string;        // Usage tip, cultural note
  register?: "du" | "Sie";  // Defaults to "du" if omitted
  situation?: string;   // e.g. "at drop-off", "on the bench"
}

export interface VocabEntry {
  id: string;
  topic: TopicId;
  word: string;         // German word (with article for nouns)
  plural?: string;      // Plural form for nouns
  en: string;           // English translation
  example?: string;     // Example sentence in German
  partOfSpeech?: "noun" | "verb" | "adj" | "adv" | "phrase";
}

export interface Exercise {
  id: string;
  topic: TopicId;
  sentence: string;     // Sentence with ___ for the gap
  options: string[];    // 3-4 dropdown choices
  correctIndex: number; // Index into options[]
  explanation: string;  // Shown after answering (right or wrong)
  difficulty: 1 | 2 | 3;
}

export interface ProgressRecord {
  seen: boolean;
  correctCount: number;
  wrongCount: number;
  lastSeen?: number;    // timestamp
}
