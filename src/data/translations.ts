import type { TranslationExercise } from "./types";

export const TRANSLATIONS: TranslationExercise[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — short, present-tense sentences
  // ═══════════════════════════════════════════════════════════════════

  { id: "t001", topic: "spielplatz", level: "A2", en: "Watch out!", de: "Pass auf!", explanation: "Imperative (du-form) of 'aufpassen'.", difficulty: 1 },
  { id: "t002", topic: "kita", level: "A2", en: "Good morning!", de: "Guten Morgen!", explanation: "Standard greeting used at drop-off.", difficulty: 1 },
  { id: "t003", topic: "essen", level: "A2", en: "Are you hungry?", de: "Hast du Hunger?", explanation: "German uses 'Hunger haben' (to have hunger), not 'sein hungrig'.", difficulty: 1 },
  { id: "t004", topic: "konflikte", level: "A2", en: "That's mine!", de: "Das ist meins!", explanation: "'Meins' stands alone without a following noun.", difficulty: 1 },
  { id: "t005", topic: "koerper", level: "A2", en: "I need a band-aid.", de: "Ich brauche ein Pflaster.", explanation: "Present tense of 'brauchen' with 'ich'.", difficulty: 1 },
  { id: "t006", topic: "verabredungen", level: "A2", en: "Do you want to play?", de: "Willst du spielen?", explanation: "Modal verb 'wollen', du-form 'willst'.", difficulty: 1 },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — past tense, separable verbs, subordinate clauses
  // ═══════════════════════════════════════════════════════════════════

  { id: "t007", topic: "spielplatz", level: "B1", en: "Shall we meet up sometime?", de: "Wollen wir uns mal treffen?", explanation: "Reflexive verb 'sich treffen' with 'wir' → 'uns'.", difficulty: 2 },
  { id: "t008", topic: "kita", level: "B1", en: "I'll pick him up a bit earlier today.", de: "Ich hole ihn heute etwas früher ab.", explanation: "Separable verb 'abholen' — 'ab' goes to the end.", difficulty: 2 },
  { id: "t009", topic: "kita", level: "B1", en: "He already had breakfast.", de: "Er hat schon gefrühstückt.", altAnswers: ["Er hat bereits gefrühstückt."], explanation: "Perfekt tense with 'schon' (already).", difficulty: 2 },
  { id: "t010", topic: "konflikte", level: "B1", en: "Can you apologize?", de: "Kannst du dich entschuldigen?", explanation: "Reflexive verb 'sich entschuldigen' with a modal verb.", difficulty: 2 },
  { id: "t011", topic: "konflikte", level: "B1", en: "That surely wasn't on purpose.", de: "Das war bestimmt keine Absicht.", explanation: "Fixed phrase 'keine Absicht' = not on purpose.", difficulty: 1 },
  { id: "t012", topic: "verabredungen", level: "B1", en: "Does Saturday work for you?", de: "Passt dir Samstag?", altAnswers: ["Passt es dir am Samstag?"], explanation: "'Passen' + dative pronoun 'dir'.", difficulty: 2 },
  { id: "t013", topic: "essen", level: "B1", en: "He has a nut allergy.", de: "Er hat eine Nussallergie.", explanation: "Compound noun 'Nussallergie' + 'haben'.", difficulty: 1 },
  { id: "t014", topic: "koerper", level: "B1", en: "Does it still hurt?", de: "Tut es noch weh?", explanation: "Fixed construction 'weh tun' = to hurt.", difficulty: 1 },
  { id: "t015", topic: "koerper", level: "B1", en: "Let me see.", de: "Lass mich mal sehen.", altAnswers: ["Zeig mal."], explanation: "Imperative of 'lassen' + infinitive.", difficulty: 2 },
  { id: "t016", topic: "spielplatz", level: "B1", en: "They get along great.", de: "Die Kinder verstehen sich super.", explanation: "Reflexive verb 'sich verstehen' = to get along.", difficulty: 2 },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — Konjunktiv, subordinate/infinitive clauses
  // ═══════════════════════════════════════════════════════════════════

  { id: "t017", topic: "kita", level: "B2", en: "He's been very restless in the evenings since he started daycare.", de: "Er ist abends sehr unruhig, seitdem er in der Kita ist.", explanation: "Subordinate clause introduced by 'seitdem' (since).", difficulty: 3 },
  { id: "t018", topic: "konflikte", level: "B2", en: "It's important to me that he learns to set boundaries.", de: "Mir ist wichtig, dass er lernt, Grenzen zu setzen.", explanation: "'Dass'-clause with a nested infinitive clause ('zu setzen').", difficulty: 3 },
  { id: "t019", topic: "spielplatz", level: "B2", en: "I find it really hard to connect with people here.", de: "Ich finde es echt schwierig, hier Anschluss zu finden.", explanation: "Extended infinitive clause with 'es ... zu'.", difficulty: 3 },
  { id: "t020", topic: "koerper", level: "B2", en: "As long as she doesn't have a fever, she can come.", de: "Solange sie kein Fieber hat, darf sie kommen.", explanation: "Subordinate clause introduced by 'solange' (as long as).", difficulty: 2 },
  { id: "t021", topic: "essen", level: "B2", en: "We try to limit sugar intake.", de: "Wir versuchen, den Zuckerkonsum einzuschränken.", explanation: "Separable verb 'einschränken' inside an infinitive clause.", difficulty: 3 },
  { id: "t022", topic: "verabredungen", level: "B2", en: "I wouldn't mind, but I'm not sure if he's ready yet.", de: "Ich hätte nichts dagegen, aber ich bin mir unsicher, ob er schon so weit ist.", explanation: "Konjunktiv II 'hätte' for a polite, hypothetical stance.", difficulty: 3 },
  { id: "t023", topic: "kita", level: "B2", en: "We could include him in the preschool group.", de: "Wir könnten ihn in die Vorschulgruppe einbeziehen.", explanation: "Konjunktiv II 'könnten' for a tentative suggestion.", difficulty: 2 },
  { id: "t024", topic: "konflikte", level: "B2", en: "He probably still finds it hard to put his feelings into words.", de: "Es fällt ihm wahrscheinlich noch schwer, seine Gefühle in Worte zu fassen.", explanation: "Idiom 'es fällt schwer' + infinitive clause.", difficulty: 3 },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — formal register, longer clauses
  // ═══════════════════════════════════════════════════════════════════

  { id: "t025", topic: "kita", level: "C1", en: "Could we schedule a regular appointment to discuss his progress?", de: "Könnten wir einen regelmäßigen Termin vereinbaren, um über seine Fortschritte zu sprechen?", explanation: "'Um ... zu' purpose clause in a polite Konjunktiv II request.", difficulty: 3 },
  { id: "t026", topic: "konflikte", level: "C1", en: "I'd like to raise a topic that's been on my mind for a while.", de: "Ich möchte ein Thema ansprechen, das mir schon länger auf dem Herzen liegt.", explanation: "Relative clause with the idiom 'am Herzen liegen'.", difficulty: 3 },
  { id: "t027", topic: "koerper", level: "C1", en: "It might be worth considering an occupational therapy assessment.", de: "Es könnte sich lohnen, eine ergotherapeutische Abklärung in Betracht zu ziehen.", explanation: "Formal phrase 'in Betracht ziehen' = to consider.", difficulty: 3 },
  { id: "t028", topic: "kita", level: "C1", en: "Usually four to six weeks.", de: "In der Regel vier bis sechs Wochen.", explanation: "Fixed bureaucratic phrase 'in der Regel' = usually.", difficulty: 2 },
  { id: "t029", topic: "spielplatz", level: "C1", en: "Sometimes you just have to let go.", de: "Manchmal muss man einfach loslassen.", explanation: "Impersonal 'man' with the separable verb 'loslassen'.", difficulty: 2 },
  { id: "t030", topic: "verabredungen", level: "C1", en: "I don't want any incidents.", de: "Ich möchte nicht, dass es irgendwelche Zwischenfälle gibt.", explanation: "'Dass'-clause with the existential construction 'es gibt'.", difficulty: 3 },
];
