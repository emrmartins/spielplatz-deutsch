import type { Exercise } from "./types";

export const EXERCISES: Exercise[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — basic articles, simple verb forms, common prepositions
  // ═══════════════════════════════════════════════════════════════════

  { id: "ex001", topic: "spielplatz", level: "A2", sentence: "Das ist ___ Kind.", options: ["mein", "meine", "meiner", "meinem"], correctIndex: 0, explanation: "'Das Kind' is neuter → 'mein Kind' (no ending for neuter nominative).", difficulty: 1 },
  { id: "ex002", topic: "spielplatz", level: "A2", sentence: "___ du spielen?", options: ["Willst", "Wollst", "Will", "Wollen"], correctIndex: 0, explanation: "'Wollen' with 'du' → 'willst'. Modal verb with vowel change.", difficulty: 1 },
  { id: "ex003", topic: "spielplatz", level: "A2", sentence: "Wir gehen ___ Hause.", options: ["nach", "zu", "in", "an"], correctIndex: 0, explanation: "'Nach Hause gehen' = to go home. Fixed expression.", difficulty: 1 },
  { id: "ex004", topic: "spielplatz", level: "A2", sentence: "Die Rutsche ist ___.", options: ["nass", "nassen", "nasser", "nassem"], correctIndex: 0, explanation: "Predicate adjective (after 'ist') takes no ending.", difficulty: 1 },
  { id: "ex005", topic: "kita", level: "A2", sentence: "Er ___ drei Jahre alt.", options: ["ist", "hat", "wird", "sein"], correctIndex: 0, explanation: "German uses 'sein' (ist) for age, not 'haben'.", difficulty: 1 },
  { id: "ex006", topic: "kita", level: "A2", sentence: "Wo ___ seine Schuhe?", options: ["sind", "ist", "sein", "waren"], correctIndex: 0, explanation: "'Die Schuhe' is plural → 'sind' (are).", difficulty: 1 },
  { id: "ex007", topic: "koerper", level: "A2", sentence: "Er ist ___.", options: ["müde", "müder", "müden", "müdes"], correctIndex: 0, explanation: "Predicate adjective — no ending after 'sein'.", difficulty: 1 },
  { id: "ex008", topic: "essen", level: "A2", sentence: "___ du Hunger?", options: ["Hast", "Bist", "Ist", "Habe"], correctIndex: 0, explanation: "German says 'Hunger haben' (to have hunger), not 'to be hungry'.", difficulty: 1 },
  { id: "ex009", topic: "essen", level: "A2", sentence: "Er ___ kein Brot.", options: ["isst", "esst", "esse", "essen"], correctIndex: 0, explanation: "'Essen' with 'er' → 'isst'. Note the vowel change e→i.", difficulty: 1 },
  { id: "ex010", topic: "konflikte", level: "A2", sentence: "Das ist ___!", options: ["meins", "mein", "mir", "mich"], correctIndex: 0, explanation: "'Meins' = mine (standing alone without a noun). 'Mein' needs a noun after it.", difficulty: 1 },
  { id: "ex011", topic: "konflikte", level: "A2", sentence: "Sag bitte ___.", options: ["Entschuldigung", "entschuldigen", "entschuldigt", "entschuldige"], correctIndex: 0, explanation: "'Entschuldigung' is the noun (apology) — used as an exclamation.", difficulty: 1 },
  { id: "ex012", topic: "koerper", level: "A2", sentence: "___ deine Jacke an.", options: ["Zieh", "Ziehe", "Zieht", "Ziehen"], correctIndex: 0, explanation: "Imperative (du-form) of 'anziehen' → 'Zieh … an'.", difficulty: 1 },
  { id: "ex013", topic: "koerper", level: "A2", sentence: "Ich ___ ein Pflaster.", options: ["brauche", "braucht", "brauchst", "brauchen"], correctIndex: 0, explanation: "'Brauchen' with 'ich' → 'brauche'.", difficulty: 1 },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — separable verbs, two-way prepositions, subordinate clauses
  // ═══════════════════════════════════════════════════════════════════

  { id: "ex014", topic: "spielplatz", level: "B1", sentence: "Willst du auf ___ Schaukel?", options: ["die", "der", "das", "den"], correctIndex: 0, explanation: "'Die Schaukel' is feminine, 'auf' + accusative (direction) = 'auf die'.", difficulty: 1 },
  { id: "ex015", topic: "spielplatz", level: "B1", sentence: "Sollen wir Sandkuchen ___?", options: ["backen", "machen", "kochen", "bauen"], correctIndex: 0, explanation: "You 'bake' (backen) sand cakes in German.", difficulty: 1 },
  { id: "ex016", topic: "spielplatz", level: "B1", sentence: "Frag mal, ___ du auch mal darfst.", options: ["ob", "dass", "wenn", "weil"], correctIndex: 0, explanation: "'Ob' introduces an indirect yes/no question.", difficulty: 2 },
  { id: "ex017", topic: "spielplatz", level: "B1", sentence: "Die Kinder ___ sich super.", options: ["verstehen", "kennen", "wissen", "mögen"], correctIndex: 0, explanation: "'Sich verstehen' = to get along well.", difficulty: 1 },
  { id: "ex018", topic: "spielplatz", level: "B1", sentence: "Du musst warten, bis du ___ bist.", options: ["dran", "da", "hier", "fertig"], correctIndex: 0, explanation: "'Dran sein' = it's your turn.", difficulty: 1 },
  { id: "ex019", topic: "spielplatz", level: "B1", sentence: "Wollen wir ___ mal treffen?", options: ["uns", "sich", "euch", "mich"], correctIndex: 0, explanation: "'Wir treffen uns' — reflexive pronoun for 'wir' is 'uns'.", difficulty: 2 },

  { id: "ex020", topic: "kita", level: "B1", sentence: "Ich ___ ihn heute etwas früher ab.", options: ["hole", "bringe", "nehme", "gebe"], correctIndex: 0, explanation: "'Abholen' (separable): 'ich hole … ab' = to pick up.", difficulty: 1 },
  { id: "ex021", topic: "kita", level: "B1", sentence: "Die Windeln sind ___.", options: ["alle", "leer", "fertig", "vorbei"], correctIndex: 0, explanation: "'Alle' = all gone/used up (colloquial).", difficulty: 1 },
  { id: "ex022", topic: "kita", level: "B1", sentence: "Wie ___ die Eingewöhnung?", options: ["läuft", "geht", "macht", "ist"], correctIndex: 0, explanation: "'Wie läuft...?' = how is it going? For ongoing processes.", difficulty: 2 },
  { id: "ex023", topic: "kita", level: "B1", sentence: "Die Erzieherin hat ihn ___.", options: ["getröstet", "beruhigt", "gehalten", "gestoppt"], correctIndex: 0, explanation: "'Trösten' = to comfort. Past participle: 'getröstet'.", difficulty: 1 },
  { id: "ex024", topic: "kita", level: "B1", sentence: "Er hat ___ schon gefrühstückt.", options: ["schon", "noch", "gerade", "erst"], correctIndex: 0, explanation: "'Schon' (already) — tells Kita he doesn't need breakfast.", difficulty: 1 },

  { id: "ex025", topic: "konflikte", level: "B1", sentence: "Das war bestimmt keine ___.", options: ["Absicht", "Schuld", "Idee", "Meinung"], correctIndex: 0, explanation: "'Keine Absicht' = not on purpose.", difficulty: 1 },
  { id: "ex026", topic: "konflikte", level: "B1", sentence: "Kannst du dich ___?", options: ["entschuldigen", "entschuldigung", "verzeihen", "bereuen"], correctIndex: 0, explanation: "'Sich entschuldigen' = to apologize (reflexive).", difficulty: 1 },
  { id: "ex027", topic: "konflikte", level: "B1", sentence: "Er hat ihr die Schaufel ___.", options: ["weggenommen", "genommen", "gestohlen", "geholt"], correctIndex: 0, explanation: "'Wegnehmen' = to take away. Standard playground word.", difficulty: 1 },
  { id: "ex028", topic: "konflikte", level: "B1", sentence: "Du darfst traurig sein, aber nicht ___.", options: ["hauen", "schlagen", "boxen", "kämpfen"], correctIndex: 0, explanation: "'Hauen' is the kid-register word for hitting.", difficulty: 1 },
  { id: "ex029", topic: "konflikte", level: "B1", sentence: "Könnt ihr euch ___?", options: ["abwechseln", "wechseln", "tauschen", "ändern"], correctIndex: 0, explanation: "'Sich abwechseln' = to take turns.", difficulty: 2 },
  { id: "ex030", topic: "konflikte", level: "B1", sentence: "Habt ihr euch wieder ___?", options: ["vertragen", "versöhnt", "beruhigt", "verstanden"], correctIndex: 0, explanation: "'Sich vertragen' = to make up after a fight.", difficulty: 2 },

  { id: "ex031", topic: "verabredungen", level: "B1", sentence: "Passt es ___ am Samstag?", options: ["euch", "ihr", "dir", "Ihnen"], correctIndex: 0, explanation: "'Euch' (dative plural) — asking the whole family.", difficulty: 1 },
  { id: "ex032", topic: "verabredungen", level: "B1", sentence: "Bei ___ oder bei euch?", options: ["uns", "mir", "wir", "unser"], correctIndex: 0, explanation: "'Bei uns' = at our place. 'Bei' takes dative.", difficulty: 1 },
  { id: "ex033", topic: "verabredungen", level: "B1", sentence: "Er hat sich so ___, dass er kommen darf.", options: ["gefreut", "gewünscht", "gehofft", "gewollt"], correctIndex: 0, explanation: "'Sich freuen' = to be happy/excited. Past: 'gefreut'.", difficulty: 1 },
  { id: "ex034", topic: "verabredungen", level: "B1", sentence: "___ drei passt uns gut.", options: ["Gegen", "Um", "Bei", "An"], correctIndex: 0, explanation: "'Gegen drei' = around three. 'Um drei' = exactly at three.", difficulty: 2 },

  { id: "ex035", topic: "koerper", level: "B1", sentence: "Zeig mal, wo tut es ___?", options: ["weh", "schlecht", "schmerz", "Schmerzen"], correctIndex: 0, explanation: "'Wehtun' = to hurt. 'Wo tut es weh?'", difficulty: 1 },
  { id: "ex036", topic: "koerper", level: "B1", sentence: "Ich glaube, er ___ Zähne.", options: ["bekommt", "kriegt", "hat", "macht"], correctIndex: 0, explanation: "'Zähne bekommen' = teething.", difficulty: 1 },
  { id: "ex037", topic: "koerper", level: "B1", sentence: "Setz die Mütze ___, die Sonne ist stark.", options: ["auf", "an", "um", "ein"], correctIndex: 0, explanation: "'Aufsetzen' (separable) = to put on (hat).", difficulty: 1 },
  { id: "ex038", topic: "koerper", level: "B1", sentence: "Wir müssen ___ Kinderarzt.", options: ["zum", "bei dem", "an den", "nach dem"], correctIndex: 0, explanation: "'Zum' (= zu dem) Kinderarzt. Standard contraction.", difficulty: 2 },

  { id: "ex039", topic: "essen", level: "B1", sentence: "Sie hat eine ___.", options: ["Nussallergie", "Nussallergi", "Nüsseallergie", "Nussallergik"], correctIndex: 0, explanation: "Compound noun: Nuss + Allergie = Nussallergie.", difficulty: 1 },
  { id: "ex040", topic: "essen", level: "B1", sentence: "___ es dir?", options: ["Schmeckt", "Gefällt", "Passt", "Mag"], correctIndex: 0, explanation: "'Schmecken' = specifically for taste.", difficulty: 1 },
  { id: "ex041", topic: "essen", level: "B1", sentence: "Nicht mit vollem ___ reden.", options: ["Mund", "Maul", "Gesicht", "Backen"], correctIndex: 0, explanation: "'Mit vollem Mund' = with a full mouth.", difficulty: 1 },
  { id: "ex042", topic: "essen", level: "B1", sentence: "Er ist sehr ___ beim Essen.", options: ["wählerisch", "schwierig", "kompliziert", "eigen"], correctIndex: 0, explanation: "'Wählerisch' = picky. The polite word.", difficulty: 1 },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — Konjunktiv II, complex prepositions, relative clauses
  // ═══════════════════════════════════════════════════════════════════

  { id: "ex043", topic: "spielplatz", level: "B2", sentence: "Es ___ schön, wenn wir uns öfter treffen würden.", options: ["wäre", "ist", "wird", "war"], correctIndex: 0, explanation: "Konjunktiv II of 'sein' → 'wäre'. Polite/wishful.", difficulty: 2 },
  { id: "ex044", topic: "spielplatz", level: "B2", sentence: "Ich sitze auf ___ Bank.", options: ["der", "die", "dem", "den"], correctIndex: 0, explanation: "'Die Bank' is feminine. 'Auf' + dative (location) = 'auf der'.", difficulty: 2 },
  { id: "ex045", topic: "spielplatz", level: "B2", sentence: "Er ist schon oben auf ___ Klettergerüst.", options: ["dem", "das", "der", "den"], correctIndex: 0, explanation: "'Auf' + dative (location — he's already there) = 'auf dem'.", difficulty: 2 },
  { id: "ex046", topic: "spielplatz", level: "B2", sentence: "Mir ___ auf, dass er sich immer zurückzieht.", options: ["fällt", "geht", "kommt", "steht"], correctIndex: 0, explanation: "'Auffallen' (separable) = to notice. 'Mir fällt auf, dass...'", difficulty: 2 },
  { id: "ex047", topic: "spielplatz", level: "B2", sentence: "___ sie laufen kann, muss ich ihr ständig hinterherrennen.", options: ["Seitdem", "Weil", "Obwohl", "Wenn"], correctIndex: 0, explanation: "'Seitdem' = ever since. Introduces a temporal clause.", difficulty: 2 },

  { id: "ex048", topic: "kita", level: "B2", sentence: "Er tut sich noch schwer, ___ er die Kita eigentlich mag.", options: ["obwohl", "weil", "dass", "wenn"], correctIndex: 0, explanation: "'Obwohl' = although/even though. Concessive clause.", difficulty: 2 },
  { id: "ex049", topic: "kita", level: "B2", sentence: "Mir ___ es am Herzen, dass er sich wohlfühlt.", options: ["liegt", "geht", "ist", "steht"], correctIndex: 0, explanation: "'Am Herzen liegen' = to be close to one's heart. Idiomatic.", difficulty: 2 },
  { id: "ex050", topic: "kita", level: "B2", sentence: "___ es möglich, das Elterngespräch zu verschieben?", options: ["Wäre", "Ist", "Wird", "War"], correctIndex: 0, explanation: "Konjunktiv II: 'Wäre es möglich...' — very polite request form.", difficulty: 2 },
  { id: "ex051", topic: "kita", level: "B2", sentence: "Ich bin mir unsicher, ___ er schon so weit ist.", options: ["ob", "dass", "wenn", "weil"], correctIndex: 0, explanation: "'Ob' for indirect questions expressing doubt.", difficulty: 2 },
  { id: "ex052", topic: "kita", level: "B2", sentence: "Im ___ singen sie Lieder.", options: ["Morgenkreis", "Stuhlkreis", "Singkreis", "Kreis"], correctIndex: 0, explanation: "'Morgenkreis' = morning circle. Standard Kita term.", difficulty: 2 },

  { id: "ex053", topic: "konflikte", level: "B2", sentence: "Sag ihm, dass du das nicht ___, anstatt zurückzuhauen.", options: ["möchtest", "willst", "magst", "brauchst"], correctIndex: 0, explanation: "'Möchtest' — softer, more appropriate for teaching boundaries.", difficulty: 2 },
  { id: "ex054", topic: "konflikte", level: "B2", sentence: "Es ___ ihm noch schwer, seine Gefühle in Worte zu fassen.", options: ["fällt", "geht", "macht", "tut"], correctIndex: 0, explanation: "'Jemandem schwerfallen' = to find something difficult. 'Es fällt ihm schwer.'", difficulty: 2 },
  { id: "ex055", topic: "konflikte", level: "B2", sentence: "Die beiden brauchen gerade etwas Abstand ___.", options: ["voneinander", "zueinander", "miteinander", "füreinander"], correctIndex: 0, explanation: "'Abstand voneinander' = distance from each other.", difficulty: 2 },
  { id: "ex056", topic: "konflikte", level: "B2", sentence: "Ich ___ das nicht überbewerten.", options: ["möchte", "will", "muss", "soll"], correctIndex: 0, explanation: "'Möchte' softens the statement — diplomatic register.", difficulty: 2 },

  { id: "ex057", topic: "verabredungen", level: "B2", sentence: "Wir ___ auch was Spontanes machen.", options: ["könnten", "können", "sollten", "müssen"], correctIndex: 0, explanation: "'Könnten' (Konjunktiv II) — soft, non-committal suggestion.", difficulty: 2 },
  { id: "ex058", topic: "verabredungen", level: "B2", sentence: "Ich hoffe, es ___ euch nichts aus.", options: ["macht", "tut", "gibt", "ist"], correctIndex: 0, explanation: "'Ausmachen' — 'Es macht nichts aus' = it doesn't matter/mind.", difficulty: 2 },
  { id: "ex059", topic: "verabredungen", level: "B2", sentence: "Es ___ schade, wenn wir das nicht regelmäßig machen.", options: ["wäre", "ist", "wird", "war"], correctIndex: 0, explanation: "Konjunktiv II: hypothetical — 'it would be a shame'.", difficulty: 2 },

  { id: "ex060", topic: "koerper", level: "B2", sentence: "Er meinte, es ___ nichts Ernstes.", options: ["sei", "ist", "wäre", "war"], correctIndex: 0, explanation: "Konjunktiv I ('sei') for indirect speech — formal/written register.", difficulty: 3 },
  { id: "ex061", topic: "koerper", level: "B2", sentence: "___ er kein Fieber hat, darf er in die Kita.", options: ["Solange", "Weil", "Obwohl", "Wenn"], correctIndex: 0, explanation: "'Solange' = as long as.", difficulty: 2 },
  { id: "ex062", topic: "koerper", level: "B2", sentence: "Heute Morgen ___ es ihr wieder besser zu gehen.", options: ["scheint", "sieht", "geht", "kommt"], correctIndex: 0, explanation: "'Scheinen' + zu + infinitive = to seem to. 'Es scheint ihr besser zu gehen.'", difficulty: 2 },
  { id: "ex063", topic: "koerper", level: "B2", sentence: "Sie hat sich das Knie ___.", options: ["aufgeschürft", "aufgekratzt", "verletzt", "gestoßen"], correctIndex: 0, explanation: "'Aufschürfen' = to scrape/graze. Specific playground injury word.", difficulty: 2 },

  { id: "ex064", topic: "essen", level: "B2", sentence: "Er ___ keine Milch.", options: ["verträgt", "verkraftet", "verdaut", "mag"], correctIndex: 0, explanation: "'Vertragen' = to tolerate (food). Standard medical/everyday word.", difficulty: 2 },
  { id: "ex065", topic: "essen", level: "B2", sentence: "Wir versuchen, den Zuckerkonsum ___, auch wenn es nicht einfach ist.", options: ["einzuschränken", "einschränken", "zu einschränken", "eingeschränkt"], correctIndex: 0, explanation: "'Um … zu' / 'versuchen zu' + infinitive with separable prefix → 'einzuschränken'.", difficulty: 2 },
  { id: "ex066", topic: "essen", level: "B2", sentence: "Er würde am liebsten nur Nudeln essen, wenn man ihn ___.", options: ["ließe", "lässt", "lasse", "ließen"], correctIndex: 0, explanation: "Konjunktiv II of 'lassen' → 'ließe'. Hypothetical condition.", difficulty: 3 },
  { id: "ex067", topic: "essen", level: "B2", sentence: "___ er das Essen nicht anrührt, macht euch keine Sorgen.", options: ["Falls", "Weil", "Obwohl", "Wenn"], correctIndex: 0, explanation: "'Falls' = in case / if (for uncertain possibilities).", difficulty: 2 },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — complex syntax, bureaucratic/formal, idiomatic expressions
  // ═══════════════════════════════════════════════════════════════════

  { id: "ex068", topic: "kita", level: "C1", sentence: "Ich würde gerne verstehen, welche Haltung dem Konzept Ihrer Einrichtung ___ liegt.", options: ["zugrunde", "darunter", "dahinter", "darin"], correctIndex: 0, explanation: "'Zugrunde liegen' = to underlie. Formal/academic register.", difficulty: 3 },
  { id: "ex069", topic: "kita", level: "C1", sentence: "___ wird auf die individuellen Bedürfnisse eingegangen?", options: ["Inwiefern", "Wie", "Warum", "Wobei"], correctIndex: 0, explanation: "'Inwiefern' = to what extent / in what way. More precise than 'wie'.", difficulty: 3 },
  { id: "ex070", topic: "kita", level: "C1", sentence: "Uns ___ es wichtig, dass die Sprachförderung auch seine Erstsprache einbezieht.", options: ["wäre", "ist", "wird", "war"], correctIndex: 0, explanation: "Konjunktiv II ('wäre') — diplomatic register for parent requests.", difficulty: 3 },
  { id: "ex071", topic: "kita", level: "C1", sentence: "Ich habe den Eindruck, dass er in letzter Zeit etwas ___ ist.", options: ["unterfordert", "gelangweilt", "überfordert", "unzufrieden"], correctIndex: 0, explanation: "'Unterfordert' = under-challenged. Opposite of 'überfordert'.", difficulty: 3 },
  { id: "ex072", topic: "kita", level: "C1", sentence: "Wie ___ Sie es, wenn ein Kind besonderen Förderbedarf hat?", options: ["handhaben", "machen", "behandeln", "tun"], correctIndex: 0, explanation: "'Handhaben' = to handle (formal). More sophisticated than 'machen'.", difficulty: 3 },
  { id: "ex073", topic: "kita", level: "C1", sentence: "Wir sind gerade dabei, den ___ auf einen Kita-Gutschein zu stellen.", options: ["Antrag", "Vertrag", "Auftrag", "Beitrag"], correctIndex: 0, explanation: "'Einen Antrag stellen' = to submit an application. Bureaucratic German.", difficulty: 3 },
  { id: "ex074", topic: "kita", level: "C1", sentence: "Der ___ in dieser Einrichtung ist 1 zu 5.", options: ["Betreuungsschlüssel", "Betreuungsplan", "Personalschlüssel", "Kinderschlüssel"], correctIndex: 0, explanation: "'Betreuungsschlüssel' = staff-to-child ratio. Key Kita policy term.", difficulty: 3 },

  { id: "ex075", topic: "konflikte", level: "C1", sentence: "Das Verhalten ist auf eine gewisse Überforderung ___.", options: ["zurückzuführen", "zurückzuführend", "zurückgeführt", "zurückführbar"], correctIndex: 0, explanation: "'Zurückzuführen sein auf' = to be attributable to. Analytical register.", difficulty: 3 },
  { id: "ex076", topic: "konflikte", level: "C1", sentence: "Es liegt mir ___, jemandem die Schuld zuzuweisen.", options: ["fern", "nah", "schwer", "leicht"], correctIndex: 0, explanation: "'Es liegt mir fern' = it is far from my intention. Very formal.", difficulty: 3 },
  { id: "ex077", topic: "konflikte", level: "C1", sentence: "Wir sollten das nicht unter den ___ fallen lassen.", options: ["Tisch", "Boden", "Teppich", "Stuhl"], correctIndex: 0, explanation: "'Unter den Tisch fallen lassen' = to sweep under the carpet.", difficulty: 3 },
  { id: "ex078", topic: "konflikte", level: "C1", sentence: "Ich finde es ___, dass das immer wieder vorkommt.", options: ["bedenklich", "schlimm", "nervig", "ärgerlich"], correctIndex: 0, explanation: "'Bedenklich' = concerning/worrying. Formal, measured word.", difficulty: 3 },

  { id: "ex079", topic: "verabredungen", level: "C1", sentence: "___, dass das Wetter mitspielt, könnten wir zum See fahren.", options: ["Vorausgesetzt", "Angenommen", "Falls", "Wenn"], correctIndex: 0, explanation: "'Vorausgesetzt, dass' = provided that. Very precise conditional.", difficulty: 3 },
  { id: "ex080", topic: "verabredungen", level: "C1", sentence: "Uns wäre es am liebsten, wenn wir das möglichst ___ halten.", options: ["ungezwungen", "locker", "einfach", "relaxt"], correctIndex: 0, explanation: "'Ungezwungen' = casual, without formality. More refined than 'locker'.", difficulty: 3 },

  { id: "ex081", topic: "koerper", level: "C1", sentence: "Der Infekt sollte von ___ abklingen.", options: ["allein", "selbst", "alleine", "sich"], correctIndex: 0, explanation: "'Von allein abklingen' = to subside on its own. Medical register.", difficulty: 3 },
  { id: "ex082", topic: "koerper", level: "C1", sentence: "Wir sind hin- und hergerissen, ob wir den Termin ___ sollen.", options: ["vorziehen", "verschieben", "absagen", "ändern"], correctIndex: 0, explanation: "'Vorziehen' = to bring forward. 'Hin- und hergerissen' = torn.", difficulty: 3 },
  { id: "ex083", topic: "koerper", level: "C1", sentence: "Es könnte sich lohnen, eine Abklärung in ___ zu ziehen.", options: ["Betracht", "Erwägung", "Frage", "Überlegung"], correctIndex: 0, explanation: "'In Betracht ziehen' = to consider. Formal/medical. 'In Erwägung ziehen' also works.", difficulty: 3 },
  { id: "ex084", topic: "koerper", level: "C1", sentence: "Die ___ hat angedeutet, dass Ergotherapie sinnvoll sein könnte.", options: ["Kinderärztin", "Ärztin", "Doktorin", "Medizinerin"], correctIndex: 0, explanation: "'Kinderärztin' = female pediatrician. Standard term in this context.", difficulty: 2 },

  { id: "ex085", topic: "essen", level: "C1", sentence: "Wir achten darauf, dass er sich ausgewogen ___.", options: ["ernährt", "isst", "essen", "ernähren"], correctIndex: 0, explanation: "'Sich ernähren' = to eat/nourish oneself. 'Er ernährt sich' — reflexive.", difficulty: 3 },
  { id: "ex086", topic: "essen", level: "C1", sentence: "Falls es mit dem Essen zu einem ___ kommt, lasst ihn einfach.", options: ["Machtkampf", "Kampf", "Streit", "Problem"], correctIndex: 0, explanation: "'Machtkampf' = power struggle. A concept from parenting discourse.", difficulty: 3 },

  // ── Additional mixed B1/B2 ─────────────────────────────────────────
  { id: "ex087", topic: "kita", level: "B1", sentence: "Wer ist seine ___?", options: ["Bezugserzieherin", "Haupterzieherin", "Erzieherin", "Betreuerin"], correctIndex: 0, explanation: "'Bezugserzieherin' = primary assigned caregiver. Standard Kita term.", difficulty: 2 },
  { id: "ex088", topic: "kita", level: "B1", sentence: "Die ___ ist im August.", options: ["Schließzeit", "Urlaubszeit", "Ferienzeit", "Ruhezeit"], correctIndex: 0, explanation: "'Schließzeit' = official Kita closure period.", difficulty: 2 },
  { id: "ex089", topic: "kita", level: "B2", sentence: "Seine Sachen sind im ___.", options: ["Fach", "Schrank", "Regal", "Kasten"], correctIndex: 0, explanation: "'Das Fach' = cubby/shelf slot. Standard Kita term.", difficulty: 2 },
  { id: "ex090", topic: "spielplatz", level: "B1", sentence: "___ du mir deine Nummer geben?", options: ["Magst", "Willst", "Kannst", "Darfst"], correctIndex: 0, explanation: "'Magst du...?' — casual, friendly way to ask among parents.", difficulty: 2 },
  { id: "ex091", topic: "kita", level: "B2", sentence: "Ich wollte ___, ob es Auffälligkeiten gab.", options: ["nachfragen", "fragen", "wissen", "hören"], correctIndex: 0, explanation: "'Nachfragen' = to follow up / inquire. More specific than 'fragen'.", difficulty: 2 },

  { id: "ex092", topic: "spielplatz", level: "B2", sentence: "Ich hätte nichts ___, wenn die Kinder sich nochmal verabreden.", options: ["dagegen", "davon", "dafür", "damit"], correctIndex: 0, explanation: "'Nichts dagegen haben' = to not mind/have no objection.", difficulty: 2 },
  { id: "ex093", topic: "essen", level: "B1", sentence: "Ich habe Obst und Brezel ___.", options: ["eingepackt", "mitgenommen", "vorbereitet", "gemacht"], correctIndex: 0, explanation: "'Einpacken' = to pack (into a bag). Standard for packing snacks.", difficulty: 1 },

  { id: "ex094", topic: "koerper", level: "B2", sentence: "Ich bin mir nicht sicher, ob das ___ ist.", options: ["ansteckend", "gefährlich", "schlimm", "ernst"], correctIndex: 0, explanation: "'Ansteckend' = contagious. Essential Kita health vocab.", difficulty: 2 },
  { id: "ex095", topic: "koerper", level: "B1", sentence: "Hände waschen nicht ___!", options: ["vergessen", "verlieren", "vermeiden", "verpassen"], correctIndex: 0, explanation: "'Nicht vergessen' = don't forget.", difficulty: 1 },

  { id: "ex096", topic: "konflikte", level: "B1", sentence: "Die Kinder ___ sich um die Schaukel.", options: ["streiten", "kämpfen", "ärgern", "zanken"], correctIndex: 0, explanation: "'Sich streiten um' = to fight over. Most neutral word.", difficulty: 1 },
  { id: "ex097", topic: "konflikte", level: "B1", sentence: "Wir ___ anderen Kindern nichts weg.", options: ["nehmen", "holen", "tragen", "bringen"], correctIndex: 0, explanation: "'Wegnehmen' (separable): 'Wir nehmen … nichts weg.'", difficulty: 2 },

  { id: "ex098", topic: "spielplatz", level: "A2", sentence: "___ auf!", options: ["Pass", "Passe", "Passt", "Passen"], correctIndex: 0, explanation: "Imperative (du-form) of 'aufpassen' → 'Pass auf!'", difficulty: 1 },
  { id: "ex099", topic: "kita", level: "A2", sentence: "Ich bin ___ Mama von Max.", options: ["die", "der", "das", "eine"], correctIndex: 0, explanation: "'Die Mama' — definite article because it's a specific, known role.", difficulty: 1 },

  { id: "ex100", topic: "essen", level: "B2", sentence: "Es wäre gut, wenn ihr darauf achten ___, dass er genug trinkt.", options: ["könntet", "könnt", "konntet", "können"], correctIndex: 0, explanation: "Konjunktiv II of 'können' (ihr-form) → 'könntet'. Polite request.", difficulty: 3 },

  { id: "ex101", topic: "koerper", level: "C1", sentence: "Laut dem Kinderarzt ___ es sich um einen harmlosen Infekt.", options: ["handelt", "dreht", "geht", "kommt"], correctIndex: 0, explanation: "'Es handelt sich um' = it is a matter of / it concerns. Formal/medical.", difficulty: 3 },

  { id: "ex102", topic: "kita", level: "C1", sentence: "Könnten wir einen Termin ___, um über seine Entwicklung zu sprechen?", options: ["vereinbaren", "machen", "haben", "finden"], correctIndex: 0, explanation: "'Einen Termin vereinbaren' = to schedule an appointment. Formal register.", difficulty: 3 },

  { id: "ex103", topic: "spielplatz", level: "C1", sentence: "Was mich an dieser Gegend besonders ___, ist die Nähe zur Natur.", options: ["anspricht", "gefällt", "passt", "mag"], correctIndex: 0, explanation: "'Ansprechen' = to appeal to. More sophisticated than 'gefallen'.", difficulty: 3 },

  { id: "ex104", topic: "spielplatz", level: "C1", sentence: "Ich tue mich manchmal schwer damit, die Balance zwischen Überbehütung und ___ zu finden.", options: ["Loslassen", "Freilassen", "Erlauben", "Zulassen"], correctIndex: 0, explanation: "'Loslassen' = letting go. 'Überbehütung vs Loslassen' is a core parenting discourse pair.", difficulty: 3 },
];
