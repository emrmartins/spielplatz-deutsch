import type { Exercise } from "./types";

// ---------------------------------------------------------------------------
// Fill-in-blank exercises — 80 items
// ---------------------------------------------------------------------------
export const EXERCISES: Exercise[] = [
  // ── Spielplatz — difficulty 1 ──────────────────────────────────────
  { id: "ex001", topic: "spielplatz", sentence: "Willst du auf ___ Schaukel?", options: ["die", "der", "das", "den"], correctIndex: 0, explanation: "'die Schaukel' is feminine, and 'auf' + accusative (direction) = 'auf die'.", difficulty: 1 },
  { id: "ex002", topic: "spielplatz", sentence: "Er klettert auf ___ Klettergerüst.", options: ["das", "die", "der", "dem"], correctIndex: 0, explanation: "'das Klettergerüst' is neuter, 'auf' + accusative (direction) = 'auf das'.", difficulty: 1 },
  { id: "ex003", topic: "spielplatz", sentence: "Sollen wir Sandkuchen ___?", options: ["backen", "machen", "kochen", "bauen"], correctIndex: 0, explanation: "In German, you 'bake' (backen) sand cakes, not 'make' or 'cook' them.", difficulty: 1 },
  { id: "ex004", topic: "spielplatz", sentence: "Vorsichtig, ___!", options: ["festhalten", "halten", "fangen", "greifen"], correctIndex: 0, explanation: "'Festhalten' (hold on tight) is the standard safety call at playgrounds.", difficulty: 1 },
  { id: "ex005", topic: "spielplatz", sentence: "Noch fünf Minuten, dann ___ wir.", options: ["gehen", "laufen", "fahren", "kommen"], correctIndex: 0, explanation: "'Gehen' is the natural word for leaving/going home from the playground.", difficulty: 1 },
  { id: "ex006", topic: "spielplatz", sentence: "Die Kinder ___ sich super.", options: ["verstehen", "kennen", "wissen", "mögen"], correctIndex: 0, explanation: "'Sich verstehen' means to get along well with each other.", difficulty: 1 },
  { id: "ex007", topic: "spielplatz", sentence: "___ du mir deine Nummer geben?", options: ["Magst", "Willst", "Kannst", "Darfst"], correctIndex: 0, explanation: "'Magst du...?' is the casual, friendly way to ask among parents. 'Willst du' is too direct.", difficulty: 2 },
  { id: "ex008", topic: "spielplatz", sentence: "Du musst warten, bis du ___ bist.", options: ["dran", "da", "hier", "fertig"], correctIndex: 0, explanation: "'Dran sein' means it's your turn — the standard phrase for turn-taking.", difficulty: 1 },

  // ── Spielplatz — difficulty 2 ──────────────────────────────────────
  { id: "ex009", topic: "spielplatz", sentence: "Frag mal, ___ du auch mal darfst.", options: ["ob", "dass", "wenn", "weil"], correctIndex: 0, explanation: "'Ob' introduces an indirect yes/no question: 'Ask whether you may'.", difficulty: 2 },
  { id: "ex010", topic: "spielplatz", sentence: "Da drüben ist ___ Wippe!", options: ["eine", "ein", "einer", "einem"], correctIndex: 0, explanation: "'die Wippe' is feminine → indefinite article is 'eine'.", difficulty: 2 },
  { id: "ex011", topic: "spielplatz", sentence: "Der Spielplatz ist heute ganz schön ___.", options: ["voll", "leer", "groß", "weit"], correctIndex: 0, explanation: "'Ganz schön voll' = pretty packed/crowded — a common observation.", difficulty: 1 },

  // ── Kita — difficulty 1 ────────────────────────────────────────────
  { id: "ex012", topic: "kita", sentence: "Ich ___ ihn heute etwas früher ab.", options: ["hole", "bringe", "nehme", "gebe"], correctIndex: 0, explanation: "'Abholen' (separable: ich hole … ab) means to pick up from Kita.", difficulty: 1 },
  { id: "ex013", topic: "kita", sentence: "Er hat heute Nacht schlecht ___.", options: ["geschlafen", "geträumt", "gelegen", "geruht"], correctIndex: 0, explanation: "'Schlecht geschlafen' (slept badly) is the standard drop-off report.", difficulty: 1 },
  { id: "ex014", topic: "kita", sentence: "Die Windeln sind ___.", options: ["alle", "leer", "fertig", "vorbei"], correctIndex: 0, explanation: "'Alle' means 'all gone/used up' in colloquial German — very common.", difficulty: 1 },
  { id: "ex015", topic: "kita", sentence: "Heute ___ die Oma ab.", options: ["holt", "bringt", "nimmt", "kommt"], correctIndex: 0, explanation: "'Abholen' — grandma picks up. 'Die Oma holt ab.'", difficulty: 1 },
  { id: "ex016", topic: "kita", sentence: "Wie ___ die Eingewöhnung?", options: ["läuft", "geht", "macht", "ist"], correctIndex: 0, explanation: "'Wie läuft...?' (how is it going?) is the natural phrasing for ongoing processes.", difficulty: 2 },
  { id: "ex017", topic: "kita", sentence: "Wir haben ___ mitgebracht.", options: ["Wechselklamotten", "Wechselkleidung", "Ersatzkleidung", "Umziehsachen"], correctIndex: 0, explanation: "'Wechselklamotten' is the word every Kita uses. The others are understood but not standard Kita vocabulary.", difficulty: 2 },
  { id: "ex018", topic: "kita", sentence: "Er hat ___ schon gefrühstückt.", options: ["schon", "noch", "gerade", "erst"], correctIndex: 0, explanation: "'Schon' (already) tells the Erzieher he doesn't need breakfast at Kita.", difficulty: 1 },
  { id: "ex019", topic: "kita", sentence: "Er tut sich noch schwer mit dem ___.", options: ["Abschied", "Tschüss", "Gehen", "Verlassen"], correctIndex: 0, explanation: "'Abschied' (farewell) is the word used for the separation difficulty during Eingewöhnung.", difficulty: 2 },

  // ── Kita — difficulty 2 ────────────────────────────────────────────
  { id: "ex020", topic: "kita", sentence: "Bitte ___ ihm die Medizin nach dem Mittagessen.", options: ["gebt", "gibt", "geben", "gab"], correctIndex: 0, explanation: "'Gebt' is the imperative plural (ihr-form), used when addressing the Erzieher team.", difficulty: 2 },
  { id: "ex021", topic: "kita", sentence: "Wer ist seine ___?", options: ["Bezugserzieherin", "Haupterzieherin", "Erzieherin", "Betreuerin"], correctIndex: 0, explanation: "'Bezugserzieherin' is the specific Kita term for the assigned primary caregiver.", difficulty: 2 },
  { id: "ex022", topic: "kita", sentence: "Im ___ singen sie Lieder.", options: ["Morgenkreis", "Stuhlkreis", "Singkreis", "Kreis"], correctIndex: 0, explanation: "'Morgenkreis' is the daily morning gathering circle in German Kitas.", difficulty: 2 },
  { id: "ex023", topic: "kita", sentence: "Seine Sachen sind im ___.", options: ["Fach", "Schrank", "Regal", "Kasten"], correctIndex: 0, explanation: "'Das Fach' is the standard word for a child's personal cubby/shelf slot at Kita.", difficulty: 2 },

  // ── Konflikte — difficulty 1 ───────────────────────────────────────
  { id: "ex024", topic: "konflikte", sentence: "Das war bestimmt keine ___.", options: ["Absicht", "Schuld", "Idee", "Meinung"], correctIndex: 0, explanation: "'Keine Absicht' = not on purpose. The standard phrase for de-escalation.", difficulty: 1 },
  { id: "ex025", topic: "konflikte", sentence: "Kannst du dich ___?", options: ["entschuldigen", "entschuldigung", "verzeihen", "bereuen"], correctIndex: 0, explanation: "'Sich entschuldigen' is the reflexive verb for apologizing.", difficulty: 1 },
  { id: "ex026", topic: "konflikte", sentence: "Er hat ihr die Schaufel ___.", options: ["weggenommen", "genommen", "gestohlen", "geholt"], correctIndex: 0, explanation: "'Wegnehmen' (to take away) is the standard word for playground snatching.", difficulty: 1 },
  { id: "ex027", topic: "konflikte", sentence: "Komm, wir ___.", options: ["teilen", "geben", "tauschen", "schenken"], correctIndex: 0, explanation: "'Teilen' (to share) — the most-used conflict resolution word with kids.", difficulty: 1 },
  { id: "ex028", topic: "konflikte", sentence: "Du darfst traurig sein, aber nicht ___.", options: ["hauen", "schlagen", "boxen", "kämpfen"], correctIndex: 0, explanation: "'Hauen' is the kid-register word for hitting. 'Schlagen' is too formal for playground talk.", difficulty: 1 },
  { id: "ex029", topic: "konflikte", sentence: "Könnt ihr euch ___?", options: ["abwechseln", "wechseln", "tauschen", "ändern"], correctIndex: 0, explanation: "'Sich abwechseln' = to take turns. 'Wechseln' alone means to change/exchange.", difficulty: 2 },
  { id: "ex030", topic: "konflikte", sentence: "Die Kinder ___ sich um die Schaukel.", options: ["streiten", "kämpfen", "ärgern", "zanken"], correctIndex: 0, explanation: "'Sich streiten um' = to fight over something. The most neutral word for kid conflicts.", difficulty: 1 },
  { id: "ex031", topic: "konflikte", sentence: "Habt ihr euch wieder ___?", options: ["vertragen", "versöhnt", "beruhigt", "verstanden"], correctIndex: 0, explanation: "'Sich vertragen' = to make up after a fight. Very common with kids.", difficulty: 2 },

  // ── Konflikte — difficulty 2 ───────────────────────────────────────
  { id: "ex032", topic: "konflikte", sentence: "Ich verstehe, dass du ___ bist.", options: ["sauer", "böse", "wütend", "all of these work"], correctIndex: 3, explanation: "All three — sauer, böse, wütend — work here. 'Sauer' is the most colloquial, 'wütend' the most expressive.", difficulty: 2 },
  { id: "ex033", topic: "konflikte", sentence: "Sag ihm, dass du das nicht ___.", options: ["möchtest", "willst", "magst", "brauchst"], correctIndex: 0, explanation: "'Möchtest' (would like) is softer and more appropriate for teaching boundary-setting.", difficulty: 2 },

  // ── Verabredungen — difficulty 1 ───────────────────────────────────
  { id: "ex034", topic: "verabredungen", sentence: "Passt es ___ am Samstag?", options: ["euch", "ihr", "dir", "Ihnen"], correctIndex: 0, explanation: "'Euch' (dative plural) — you're asking the whole family. 'Dir' would be just one person.", difficulty: 1 },
  { id: "ex035", topic: "verabredungen", sentence: "Bei ___ oder bei euch?", options: ["uns", "mir", "wir", "unser"], correctIndex: 0, explanation: "'Bei uns' = at our place. 'Bei' takes the dative.", difficulty: 1 },
  { id: "ex036", topic: "verabredungen", sentence: "Hat sie ___ Allergien?", options: ["irgendwelche", "einige", "manche", "welche"], correctIndex: 0, explanation: "'Irgendwelche' (any at all) is the standard way to ask about allergies.", difficulty: 2 },
  { id: "ex037", topic: "verabredungen", sentence: "Ich ___ dir die Adresse per WhatsApp.", options: ["schick", "sende", "gebe", "schreibe"], correctIndex: 0, explanation: "'Schicken' (to send) is the casual everyday word for messaging.", difficulty: 1 },
  { id: "ex038", topic: "verabredungen", sentence: "Er hat sich so ___, dass er kommen darf.", options: ["gefreut", "gewünscht", "gehofft", "gewollt"], correctIndex: 0, explanation: "'Sich freuen' = to be happy/excited. Past participle: 'gefreut'.", difficulty: 1 },
  { id: "ex039", topic: "verabredungen", sentence: "___ drei passt uns gut.", options: ["Gegen", "Um", "Bei", "An"], correctIndex: 0, explanation: "'Gegen drei' = around three. 'Um drei' means exactly at three.", difficulty: 2 },
  { id: "ex040", topic: "verabredungen", sentence: "Wir ___ mal zusammen in den Zoo gehen.", options: ["könnten", "können", "sollten", "müssen"], correctIndex: 0, explanation: "'Könnten' (could) is a soft suggestion — polite and non-committal.", difficulty: 2 },

  // ── Körper & Gesundheit — difficulty 1 ─────────────────────────────
  { id: "ex041", topic: "koerper", sentence: "Er hat sich den Kopf ___.", options: ["gestoßen", "geschlagen", "gehauen", "geklopft"], correctIndex: 0, explanation: "'Sich den Kopf stoßen' = to bump one's head. The standard phrase.", difficulty: 1 },
  { id: "ex042", topic: "koerper", sentence: "Zeig mal, wo tut es ___?", options: ["weh", "schlecht", "schmerz", "Schmerzen"], correctIndex: 0, explanation: "'Wehtun' = to hurt. 'Wo tut es weh?' is what every parent says.", difficulty: 1 },
  { id: "ex043", topic: "koerper", sentence: "Hast du ein ___ dabei?", options: ["Pflaster", "Verband", "Tuch", "Papier"], correctIndex: 0, explanation: "'Pflaster' = band-aid. The essential playground first-aid word.", difficulty: 1 },
  { id: "ex044", topic: "koerper", sentence: "Er hat 38,5 ___.", options: ["Fieber", "Grad", "Temperatur", "Wärme"], correctIndex: 0, explanation: "In German you say 'Er hat Fieber' (he has fever), and the number is understood as degrees.", difficulty: 1 },
  { id: "ex045", topic: "koerper", sentence: "Sie hat ___, aber kein Fieber.", options: ["Schnupfen", "Husten", "Kopfweh", "Bauchweh"], correctIndex: 0, explanation: "'Schnupfen' (runny nose) is the most common minor ailment. The structure 'X, aber kein Fieber' is a standard Kita report.", difficulty: 1 },
  { id: "ex046", topic: "koerper", sentence: "Ich glaube, er ___ Zähne.", options: ["bekommt", "kriegt", "hat", "macht"], correctIndex: 0, explanation: "'Zähne bekommen' (getting teeth) is the natural way to say teething in German.", difficulty: 1 },
  { id: "ex047", topic: "koerper", sentence: "Setz die Mütze ___, die Sonne ist stark.", options: ["auf", "an", "um", "ein"], correctIndex: 0, explanation: "'Aufsetzen' (separable) = to put on (hat). 'Setz die Mütze auf.'", difficulty: 1 },
  { id: "ex048", topic: "koerper", sentence: "___ dir die Jacke an, es ist kalt.", options: ["Zieh", "Mach", "Tu", "Leg"], correctIndex: 0, explanation: "'Anziehen' (separable) = to put on (clothing). 'Zieh dir die Jacke an.'", difficulty: 1 },
  { id: "ex049", topic: "koerper", sentence: "Hände waschen nicht ___!", options: ["vergessen", "verlieren", "vermeiden", "verpassen"], correctIndex: 0, explanation: "'Nicht vergessen' = don't forget. A daily parental reminder.", difficulty: 1 },

  // ── Körper — difficulty 2 ──────────────────────────────────────────
  { id: "ex050", topic: "koerper", sentence: "Sie hat sich das Knie ___.", options: ["aufgeschürft", "aufgekratzt", "verletzt", "gestoßen"], correctIndex: 0, explanation: "'Aufschürfen' = to scrape/graze. Very specific to playground injuries.", difficulty: 2 },
  { id: "ex051", topic: "koerper", sentence: "Wir müssen ___ Kinderarzt.", options: ["zum", "bei dem", "an den", "nach dem"], correctIndex: 0, explanation: "'Zum Kinderarzt' (= zu dem) is the standard contraction for going to the doctor.", difficulty: 2 },
  { id: "ex052", topic: "koerper", sentence: "Ist sie schon ___?", options: ["trocken", "sauber", "fertig", "groß"], correctIndex: 0, explanation: "'Trocken' (dry) is the word for potty-trained in German.", difficulty: 2 },
  { id: "ex053", topic: "koerper", sentence: "In der Kita gehen ___ um.", options: ["Läuse", "Krankheiten", "Viren", "Bazillen"], correctIndex: 0, explanation: "'Läuse gehen um' = head lice are going around. A dreaded but common Kita announcement.", difficulty: 2 },
  { id: "ex054", topic: "koerper", sentence: "Lass mich mal ___, dann geht es besser.", options: ["pusten", "blasen", "atmen", "hauchen"], correctIndex: 0, explanation: "'Pusten' = to blow (on a wound). The classic parent magic cure.", difficulty: 2 },

  // ── Essen — difficulty 1 ───────────────────────────────────────────
  { id: "ex055", topic: "essen", sentence: "Willst du Wasser oder ___?", options: ["Apfelschorle", "Apfelsaft", "Limonade", "Tee"], correctIndex: 0, explanation: "'Apfelschorle' (apple juice mixed with sparkling water) is the classic German kids' drink.", difficulty: 1 },
  { id: "ex056", topic: "essen", sentence: "Ich habe Obst und Brezel ___.", options: ["eingepackt", "mitgenommen", "vorbereitet", "gemacht"], correctIndex: 0, explanation: "'Einpacken' = to pack (into a bag). The standard word for packing snacks.", difficulty: 1 },
  { id: "ex057", topic: "essen", sentence: "Er ___ kein Fleisch.", options: ["isst", "esst", "esse", "essen"], correctIndex: 0, explanation: "'Er isst' — third person singular of 'essen'. Note the vowel change e→i.", difficulty: 1 },
  { id: "ex058", topic: "essen", sentence: "Sie hat eine ___.", options: ["Nussallergie", "Nussallergi", "Nüsseallergie", "Nussallergik"], correctIndex: 0, explanation: "Compound noun: Nuss + Allergie = Nussallergie. German loves compound nouns.", difficulty: 1 },
  { id: "ex059", topic: "essen", sentence: "___ es dir?", options: ["Schmeckt", "Gefällt", "Passt", "Mag"], correctIndex: 0, explanation: "'Schmecken' is specifically for taste. 'Schmeckt es dir?' = Does it taste good to you?", difficulty: 1 },
  { id: "ex060", topic: "essen", sentence: "Er ist sehr ___ beim Essen.", options: ["wählerisch", "schwierig", "kompliziert", "eigen"], correctIndex: 0, explanation: "'Wählerisch' = picky/choosy. The polite word for a fussy eater.", difficulty: 1 },
  { id: "ex061", topic: "essen", sentence: "Ich bin ___.", options: ["satt", "voll", "fertig", "genug"], correctIndex: 0, explanation: "'Satt' = full/satisfied (not hungry anymore). 'Voll' means full but sounds crude.", difficulty: 1 },
  { id: "ex062", topic: "essen", sentence: "Magst du noch ein ___ Gurke?", options: ["Stück", "Teil", "Bit", "Scheibe"], correctIndex: 0, explanation: "'Ein Stück' = a piece. The general-purpose word for a portion of food.", difficulty: 1 },

  // ── Essen — difficulty 2 ───────────────────────────────────────────
  { id: "ex063", topic: "essen", sentence: "Er ___ keine Milch.", options: ["verträgt", "verkraftet", "verdaut", "mag"], correctIndex: 0, explanation: "'Vertragen' = to tolerate (food). 'Er verträgt keine Milch' = he's milk-intolerant.", difficulty: 2 },
  { id: "ex064", topic: "essen", sentence: "Wir machen jetzt ___.", options: ["Brotzeit", "Essenszeit", "Mahlzeit", "Pause"], correctIndex: 0, explanation: "'Brotzeit' is the Bavarian/Southern German word for a packed snack break, widely understood.", difficulty: 2 },
  { id: "ex065", topic: "essen", sentence: "Nicht mit vollem ___ reden.", options: ["Mund", "Maul", "Gesicht", "Backen"], correctIndex: 0, explanation: "'Mit vollem Mund' = with a full mouth. Standard table manners phrase.", difficulty: 1 },

  // ── Mixed / harder ─────────────────────────────────────────────────
  { id: "ex066", topic: "kita", sentence: "Sie ___ sich langsam ein.", options: ["gewöhnt", "lebt", "findet", "fühlt"], correctIndex: 0, explanation: "'Sich eingewöhnen' (separable, reflexive) = to settle in. Central Kita concept.", difficulty: 2 },
  { id: "ex067", topic: "spielplatz", sentence: "Wollen wir ___ mal treffen?", options: ["uns", "sich", "euch", "mich"], correctIndex: 0, explanation: "'Wir treffen uns' — the reflexive pronoun for 'wir' is 'uns'.", difficulty: 2 },
  { id: "ex068", topic: "kita", sentence: "Die Erzieherin hat ihn ___.", options: ["getröstet", "beruhigt", "gehalten", "gestoppt"], correctIndex: 0, explanation: "'Trösten' = to comfort. Past participle: 'getröstet'.", difficulty: 1 },
  { id: "ex069", topic: "verabredungen", sentence: "Ruf mich an, ___ irgendwas ist.", options: ["falls", "wenn", "ob", "weil"], correctIndex: 0, explanation: "'Falls' = in case / if (for uncertain possibilities). Slightly more specific than 'wenn'.", difficulty: 2 },
  { id: "ex070", topic: "kita", sentence: "Die ___ ist im August.", options: ["Schließzeit", "Urlaubszeit", "Ferienzeit", "Ruhezeit"], correctIndex: 0, explanation: "'Schließzeit' is the official Kita term for the closure/holiday period.", difficulty: 2 },

  // ── Difficulty 3 — tricky grammar ──────────────────────────────────
  { id: "ex071", topic: "spielplatz", sentence: "Ich sitze auf ___ Bank.", options: ["der", "die", "dem", "den"], correctIndex: 0, explanation: "'Die Bank' is feminine. 'Auf' + dative (location, not direction) = 'auf der'.", difficulty: 3 },
  { id: "ex072", topic: "spielplatz", sentence: "Er ist schon ganz oben auf ___ Klettergerüst.", options: ["dem", "das", "der", "den"], correctIndex: 0, explanation: "'Auf dem' — location (he's already up there), so dative. 'Das Klettergerüst' → 'dem'.", difficulty: 3 },
  { id: "ex073", topic: "kita", sentence: "Häng die Jacke ___ die Garderobe.", options: ["an", "auf", "in", "bei"], correctIndex: 0, explanation: "'An die Garderobe hängen' — direction/movement, so accusative after 'an'.", difficulty: 3 },
  { id: "ex074", topic: "konflikte", sentence: "Er hat ___ die Schaufel weggenommen.", options: ["ihr", "sie", "ihr", "ihren"], correctIndex: 0, explanation: "'Ihr' (dative, 'from her'). 'Jemandem etwas wegnehmen' takes dative for the person.", difficulty: 3 },
  { id: "ex075", topic: "essen", sentence: "Ich habe genug Snacks für ___ dabei.", options: ["alle", "allen", "alles", "aller"], correctIndex: 0, explanation: "'Für' takes accusative. 'Alle' (all/everyone) in accusative stays 'alle'.", difficulty: 3 },
  { id: "ex076", topic: "koerper", sentence: "Sie hat sich ___ Knie verletzt.", options: ["am", "an dem", "beim", "im"], correctIndex: 0, explanation: "'Am Knie' (= an dem Knie) — location where the injury is.", difficulty: 3 },
  { id: "ex077", topic: "verabredungen", sentence: "Unsere Kinder sind ___ gleichen Alter.", options: ["im", "in dem", "am", "vom"], correctIndex: 0, explanation: "'Im gleichen Alter' (= in dem) is a fixed expression meaning 'the same age'.", difficulty: 3 },
  { id: "ex078", topic: "kita", sentence: "Er braucht seinen Schnuller ___ Schlafen.", options: ["zum", "für das", "beim", "am"], correctIndex: 0, explanation: "'Zum Schlafen' (= zu dem) — 'for sleeping'. 'Zu' + nominalized verb.", difficulty: 3 },
  { id: "ex079", topic: "spielplatz", sentence: "Pass auf, ___ kommt jemand die Rutsche runter.", options: ["da", "dort", "hier", "dann"], correctIndex: 0, explanation: "'Da' = there/look — used as an attention-getter before a warning.", difficulty: 2 },
  { id: "ex080", topic: "konflikte", sentence: "Wir ___ anderen Kindern nichts weg.", options: ["nehmen", "holen", "tragen", "bringen"], correctIndex: 0, explanation: "'Wegnehmen' (separable): 'Wir nehmen … nichts weg.' Standard boundary-setting phrase.", difficulty: 2 },
];
