import type { VocabEntry } from "./types";

export const VOCAB: VocabEntry[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — basic nouns, common verbs, simple adjectives
  // ═══════════════════════════════════════════════════════════════════

  // playground basics
  { id: "v001", topic: "spielplatz", level: "A2", word: "der Spielplatz", plural: "die Spielplätze", en: "playground", partOfSpeech: "noun" },
  { id: "v002", topic: "spielplatz", level: "A2", word: "die Schaukel", plural: "die Schaukeln", en: "swing", partOfSpeech: "noun" },
  { id: "v003", topic: "spielplatz", level: "A2", word: "die Rutsche", plural: "die Rutschen", en: "slide", partOfSpeech: "noun" },
  { id: "v004", topic: "spielplatz", level: "A2", word: "der Sandkasten", plural: "die Sandkästen", en: "sandbox", partOfSpeech: "noun" },
  { id: "v005", topic: "spielplatz", level: "A2", word: "der Ball", plural: "die Bälle", en: "ball", partOfSpeech: "noun" },
  { id: "v006", topic: "spielplatz", level: "A2", word: "spielen", en: "to play", example: "Die Kinder spielen.", partOfSpeech: "verb" },
  { id: "v007", topic: "spielplatz", level: "A2", word: "das Kind", plural: "die Kinder", en: "child", partOfSpeech: "noun" },
  { id: "v008", topic: "spielplatz", level: "A2", word: "der Junge", plural: "die Jungen", en: "boy", partOfSpeech: "noun" },
  { id: "v009", topic: "spielplatz", level: "A2", word: "das Mädchen", plural: "die Mädchen", en: "girl", partOfSpeech: "noun" },
  { id: "v010", topic: "spielplatz", level: "A2", word: "die Bank", plural: "die Bänke", en: "bench", partOfSpeech: "noun" },

  // kita basics
  { id: "v011", topic: "kita", level: "A2", word: "die Kita", en: "daycare", partOfSpeech: "noun" },
  { id: "v012", topic: "kita", level: "A2", word: "die Windel", plural: "die Windeln", en: "diaper", partOfSpeech: "noun" },
  { id: "v013", topic: "kita", level: "A2", word: "der Rucksack", plural: "die Rucksäcke", en: "backpack", partOfSpeech: "noun" },
  { id: "v014", topic: "kita", level: "A2", word: "die Schuhe", en: "shoes", partOfSpeech: "noun" },
  { id: "v015", topic: "kita", level: "A2", word: "schlafen", en: "to sleep", example: "Er schläft.", partOfSpeech: "verb" },

  // body basics
  { id: "v016", topic: "koerper", level: "A2", word: "der Kopf", plural: "die Köpfe", en: "head", partOfSpeech: "noun" },
  { id: "v017", topic: "koerper", level: "A2", word: "das Knie", plural: "die Knie", en: "knee", partOfSpeech: "noun" },
  { id: "v018", topic: "koerper", level: "A2", word: "die Hand", plural: "die Hände", en: "hand", partOfSpeech: "noun" },
  { id: "v019", topic: "koerper", level: "A2", word: "krank", en: "sick", example: "Er ist krank.", partOfSpeech: "adj" },
  { id: "v020", topic: "koerper", level: "A2", word: "müde", en: "tired", example: "Sie ist müde.", partOfSpeech: "adj" },
  { id: "v021", topic: "koerper", level: "A2", word: "weinen", en: "to cry", example: "Das Baby weint.", partOfSpeech: "verb" },

  // food basics
  { id: "v022", topic: "essen", level: "A2", word: "das Wasser", en: "water", partOfSpeech: "noun" },
  { id: "v023", topic: "essen", level: "A2", word: "das Brot", plural: "die Brote", en: "bread", partOfSpeech: "noun" },
  { id: "v024", topic: "essen", level: "A2", word: "der Apfel", plural: "die Äpfel", en: "apple", partOfSpeech: "noun" },
  { id: "v025", topic: "essen", level: "A2", word: "essen", en: "to eat", example: "Er isst.", partOfSpeech: "verb" },
  { id: "v026", topic: "essen", level: "A2", word: "trinken", en: "to drink", example: "Sie trinkt Wasser.", partOfSpeech: "verb" },
  { id: "v027", topic: "essen", level: "A2", word: "hungrig", en: "hungry", partOfSpeech: "adj" },

  // conflict basics
  { id: "v028", topic: "konflikte", level: "A2", word: "teilen", en: "to share", example: "Wir teilen.", partOfSpeech: "verb" },
  { id: "v029", topic: "konflikte", level: "A2", word: "weinen", en: "to cry", example: "Er weint.", partOfSpeech: "verb" },
  { id: "v030", topic: "konflikte", level: "A2", word: "böse", en: "angry / naughty", partOfSpeech: "adj" },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — playground equipment, Kita items, everyday parenting
  // ═══════════════════════════════════════════════════════════════════

  // playground
  { id: "v031", topic: "spielplatz", level: "B1", word: "das Klettergerüst", plural: "die Klettergerüste", en: "climbing frame", example: "Er ist ganz oben auf dem Klettergerüst.", partOfSpeech: "noun" },
  { id: "v032", topic: "spielplatz", level: "B1", word: "die Wippe", plural: "die Wippen", en: "seesaw", example: "Die Wippe ist frei.", partOfSpeech: "noun" },
  { id: "v033", topic: "spielplatz", level: "B1", word: "das Karussell", plural: "die Karussells", en: "roundabout", partOfSpeech: "noun" },
  { id: "v034", topic: "spielplatz", level: "B1", word: "die Schaufel", plural: "die Schaufeln", en: "shovel", partOfSpeech: "noun" },
  { id: "v035", topic: "spielplatz", level: "B1", word: "das Förmchen", plural: "die Förmchen", en: "sand mold", partOfSpeech: "noun" },
  { id: "v036", topic: "spielplatz", level: "B1", word: "der Eimer", plural: "die Eimer", en: "bucket", partOfSpeech: "noun" },
  { id: "v037", topic: "spielplatz", level: "B1", word: "schaukeln", en: "to swing", example: "Sie will schaukeln.", partOfSpeech: "verb" },
  { id: "v038", topic: "spielplatz", level: "B1", word: "rutschen", en: "to slide", example: "Willst du rutschen?", partOfSpeech: "verb" },
  { id: "v039", topic: "spielplatz", level: "B1", word: "klettern", en: "to climb", example: "Er kann schon alleine klettern.", partOfSpeech: "verb" },
  { id: "v040", topic: "spielplatz", level: "B1", word: "buddeln", en: "to dig (in sand)", example: "Wir buddeln ein Loch.", partOfSpeech: "verb" },
  { id: "v041", topic: "spielplatz", level: "B1", word: "festhalten", en: "to hold on", example: "Gut festhalten!", partOfSpeech: "verb" },
  { id: "v042", topic: "spielplatz", level: "B1", word: "anschubsen", en: "to push (on swing)", example: "Kannst du mich anschubsen?", partOfSpeech: "verb" },
  { id: "v043", topic: "spielplatz", level: "B1", word: "toben", en: "to romp around", example: "Die Kinder toben.", partOfSpeech: "verb" },
  { id: "v044", topic: "spielplatz", level: "B1", word: "das Laufrad", plural: "die Laufräder", en: "balance bike", partOfSpeech: "noun" },
  { id: "v045", topic: "spielplatz", level: "B1", word: "der Roller", plural: "die Roller", en: "scooter", partOfSpeech: "noun" },
  { id: "v046", topic: "spielplatz", level: "B1", word: "der Helm", plural: "die Helme", en: "helmet", partOfSpeech: "noun" },
  { id: "v047", topic: "spielplatz", level: "B1", word: "der Buggy", plural: "die Buggys", en: "stroller", partOfSpeech: "noun" },
  { id: "v048", topic: "spielplatz", level: "B1", word: "das Kleinkind", plural: "die Kleinkinder", en: "toddler", partOfSpeech: "noun" },
  { id: "v049", topic: "spielplatz", level: "B1", word: "das Baby", plural: "die Babys", en: "baby", partOfSpeech: "noun" },
  { id: "v050", topic: "spielplatz", level: "B1", word: "die Eltern", en: "parents", partOfSpeech: "noun" },
  { id: "v051", topic: "spielplatz", level: "B1", word: "die Pfütze", plural: "die Pfützen", en: "puddle", example: "Nicht in die Pfütze springen!", partOfSpeech: "noun" },

  // kita
  { id: "v052", topic: "kita", level: "B1", word: "die Krippe", plural: "die Krippen", en: "nursery (under 3s)", partOfSpeech: "noun" },
  { id: "v053", topic: "kita", level: "B1", word: "der Kindergarten", plural: "die Kindergärten", en: "kindergarten (3–6)", partOfSpeech: "noun" },
  { id: "v054", topic: "kita", level: "B1", word: "der Schnuller", plural: "die Schnuller", en: "pacifier", partOfSpeech: "noun" },
  { id: "v055", topic: "kita", level: "B1", word: "das Kuscheltier", plural: "die Kuscheltiere", en: "cuddly toy", partOfSpeech: "noun" },
  { id: "v056", topic: "kita", level: "B1", word: "die Brotdose", plural: "die Brotdosen", en: "lunchbox", partOfSpeech: "noun" },
  { id: "v057", topic: "kita", level: "B1", word: "die Wechselklamotten", en: "change of clothes", partOfSpeech: "noun" },
  { id: "v058", topic: "kita", level: "B1", word: "die Hausschuhe", en: "indoor shoes", partOfSpeech: "noun" },
  { id: "v059", topic: "kita", level: "B1", word: "die Matschhose", plural: "die Matschhosen", en: "mud pants / rain trousers", partOfSpeech: "noun" },
  { id: "v060", topic: "kita", level: "B1", word: "die Gummistiefel", en: "rain boots", partOfSpeech: "noun" },
  { id: "v061", topic: "kita", level: "B1", word: "der Erzieher / die Erzieherin", en: "daycare educator", partOfSpeech: "noun" },
  { id: "v062", topic: "kita", level: "B1", word: "die Eingewöhnung", en: "settling-in period", partOfSpeech: "noun" },
  { id: "v063", topic: "kita", level: "B1", word: "die Gruppe", plural: "die Gruppen", en: "group / class", partOfSpeech: "noun" },
  { id: "v064", topic: "kita", level: "B1", word: "der Mittagsschlaf", en: "midday nap", partOfSpeech: "noun" },
  { id: "v065", topic: "kita", level: "B1", word: "der Morgenkreis", en: "morning circle", partOfSpeech: "noun" },
  { id: "v066", topic: "kita", level: "B1", word: "abholen", en: "to pick up", example: "Ich hole ihn um drei ab.", partOfSpeech: "verb" },
  { id: "v067", topic: "kita", level: "B1", word: "bringen", en: "to drop off", example: "Ich bringe sie morgens.", partOfSpeech: "verb" },
  { id: "v068", topic: "kita", level: "B1", word: "basteln", en: "to do crafts", example: "Heute haben sie gebastelt.", partOfSpeech: "verb" },
  { id: "v069", topic: "kita", level: "B1", word: "wickeln", en: "to change a diaper", partOfSpeech: "verb" },
  { id: "v070", topic: "kita", level: "B1", word: "trösten", en: "to comfort", example: "Die Erzieherin hat ihn getröstet.", partOfSpeech: "verb" },
  { id: "v071", topic: "kita", level: "B1", word: "die Trinkflasche", plural: "die Trinkflaschen", en: "water bottle", partOfSpeech: "noun" },

  // conflicts
  { id: "v072", topic: "konflikte", level: "B1", word: "schubsen", en: "to push", example: "Er hat sie geschubst.", partOfSpeech: "verb" },
  { id: "v073", topic: "konflikte", level: "B1", word: "hauen", en: "to hit", example: "Nicht hauen!", partOfSpeech: "verb" },
  { id: "v074", topic: "konflikte", level: "B1", word: "wegnehmen", en: "to take away", example: "Er hat die Schaufel weggenommen.", partOfSpeech: "verb" },
  { id: "v075", topic: "konflikte", level: "B1", word: "sich streiten", en: "to argue / fight", example: "Sie streiten sich.", partOfSpeech: "verb" },
  { id: "v076", topic: "konflikte", level: "B1", word: "sich entschuldigen", en: "to apologize", partOfSpeech: "verb" },
  { id: "v077", topic: "konflikte", level: "B1", word: "sich vertragen", en: "to make up", example: "Habt ihr euch vertragen?", partOfSpeech: "verb" },
  { id: "v078", topic: "konflikte", level: "B1", word: "sich abwechseln", en: "to take turns", partOfSpeech: "verb" },
  { id: "v079", topic: "konflikte", level: "B1", word: "die Absicht", en: "intention", example: "Das war keine Absicht.", partOfSpeech: "noun" },
  { id: "v080", topic: "konflikte", level: "B1", word: "quengelig", en: "whiny / grizzly", partOfSpeech: "adj" },
  { id: "v081", topic: "konflikte", level: "B1", word: "trotzig", en: "defiant", example: "Die Trotzphase.", partOfSpeech: "adj" },
  { id: "v082", topic: "konflikte", level: "B1", word: "aufgedreht", en: "hyper / wound up", partOfSpeech: "adj" },
  { id: "v083", topic: "konflikte", level: "B1", word: "schüchtern", en: "shy", partOfSpeech: "adj" },
  { id: "v084", topic: "konflikte", level: "B1", word: "petzen", en: "to tattle", partOfSpeech: "verb" },
  { id: "v085", topic: "konflikte", level: "B1", word: "der Wutanfall", plural: "die Wutanfälle", en: "tantrum", partOfSpeech: "noun" },

  // playdates
  { id: "v086", topic: "verabredungen", level: "B1", word: "sich verabreden", en: "to arrange to meet", partOfSpeech: "verb" },
  { id: "v087", topic: "verabredungen", level: "B1", word: "der Kindergeburtstag", en: "children's birthday party", partOfSpeech: "noun" },
  { id: "v088", topic: "verabredungen", level: "B1", word: "die Einladung", plural: "die Einladungen", en: "invitation", partOfSpeech: "noun" },
  { id: "v089", topic: "verabredungen", level: "B1", word: "das Geschenk", plural: "die Geschenke", en: "present", partOfSpeech: "noun" },
  { id: "v090", topic: "verabredungen", level: "B1", word: "übernachten", en: "to sleep over", partOfSpeech: "verb" },
  { id: "v091", topic: "verabredungen", level: "B1", word: "die Geschwister", en: "siblings", partOfSpeech: "noun" },

  // body & health
  { id: "v092", topic: "koerper", level: "B1", word: "der Kinderarzt / die Kinderärztin", en: "pediatrician", partOfSpeech: "noun" },
  { id: "v093", topic: "koerper", level: "B1", word: "das Fieber", en: "fever", example: "Er hat 38,5 Fieber.", partOfSpeech: "noun" },
  { id: "v094", topic: "koerper", level: "B1", word: "der Schnupfen", en: "runny nose / cold", partOfSpeech: "noun" },
  { id: "v095", topic: "koerper", level: "B1", word: "der Husten", en: "cough", partOfSpeech: "noun" },
  { id: "v096", topic: "koerper", level: "B1", word: "das Pflaster", plural: "die Pflaster", en: "band-aid", partOfSpeech: "noun" },
  { id: "v097", topic: "koerper", level: "B1", word: "die Impfung", plural: "die Impfungen", en: "vaccination", partOfSpeech: "noun" },
  { id: "v098", topic: "koerper", level: "B1", word: "der Zahn", plural: "die Zähne", en: "tooth", partOfSpeech: "noun" },
  { id: "v099", topic: "koerper", level: "B1", word: "wehtun", en: "to hurt", example: "Tut es weh?", partOfSpeech: "verb" },
  { id: "v100", topic: "koerper", level: "B1", word: "die Sonnencreme", en: "sunscreen", partOfSpeech: "noun" },
  { id: "v101", topic: "koerper", level: "B1", word: "die Mütze", plural: "die Mützen", en: "hat / cap", partOfSpeech: "noun" },
  { id: "v102", topic: "koerper", level: "B1", word: "die Jacke", plural: "die Jacken", en: "jacket", partOfSpeech: "noun" },
  { id: "v103", topic: "koerper", level: "B1", word: "die Zecke", plural: "die Zecken", en: "tick (insect)", partOfSpeech: "noun" },
  { id: "v104", topic: "koerper", level: "B1", word: "das Töpfchen", en: "potty", example: "Willst du aufs Töpfchen?", partOfSpeech: "noun" },

  // food
  { id: "v105", topic: "essen", level: "B1", word: "die Brezel", plural: "die Brezeln", en: "pretzel", partOfSpeech: "noun" },
  { id: "v106", topic: "essen", level: "B1", word: "die Gurke", plural: "die Gurken", en: "cucumber", partOfSpeech: "noun" },
  { id: "v107", topic: "essen", level: "B1", word: "die Banane", plural: "die Bananen", en: "banana", partOfSpeech: "noun" },
  { id: "v108", topic: "essen", level: "B1", word: "der Käse", en: "cheese", partOfSpeech: "noun" },
  { id: "v109", topic: "essen", level: "B1", word: "der Joghurt", plural: "die Joghurts", en: "yogurt", partOfSpeech: "noun" },
  { id: "v110", topic: "essen", level: "B1", word: "der Keks", plural: "die Kekse", en: "cookie", partOfSpeech: "noun" },
  { id: "v111", topic: "essen", level: "B1", word: "das Eis", en: "ice cream", partOfSpeech: "noun" },
  { id: "v112", topic: "essen", level: "B1", word: "die Apfelschorle", en: "apple spritzer", partOfSpeech: "noun" },
  { id: "v113", topic: "essen", level: "B1", word: "die Allergie", plural: "die Allergien", en: "allergy", partOfSpeech: "noun" },
  { id: "v114", topic: "essen", level: "B1", word: "wählerisch", en: "picky (about food)", partOfSpeech: "adj" },
  { id: "v115", topic: "essen", level: "B1", word: "schmecken", en: "to taste", example: "Schmeckt es dir?", partOfSpeech: "verb" },
  { id: "v116", topic: "essen", level: "B1", word: "satt", en: "full (not hungry)", partOfSpeech: "adj" },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — idiomatic, more precise vocabulary
  // ═══════════════════════════════════════════════════════════════════

  { id: "v117", topic: "spielplatz", level: "B2", word: "der Wasserspielplatz", en: "water playground", partOfSpeech: "noun" },
  { id: "v118", topic: "spielplatz", level: "B2", word: "balancieren", en: "to balance", example: "Sie balanciert auf dem Baumstamm.", partOfSpeech: "verb" },
  { id: "v119", topic: "spielplatz", level: "B2", word: "Anschluss finden", en: "to connect socially", example: "Es ist schwer, hier Anschluss zu finden.", partOfSpeech: "phrase" },
  { id: "v120", topic: "spielplatz", level: "B2", word: "sich zurückziehen", en: "to withdraw", example: "Er zieht sich zurück.", partOfSpeech: "verb" },

  { id: "v121", topic: "kita", level: "B2", word: "die Bezugserzieherin", en: "primary caregiver (assigned)", partOfSpeech: "noun" },
  { id: "v122", topic: "kita", level: "B2", word: "die Schließzeit", en: "closure period", partOfSpeech: "noun" },
  { id: "v123", topic: "kita", level: "B2", word: "das Elterngespräch", en: "parent-teacher meeting", partOfSpeech: "noun" },
  { id: "v124", topic: "kita", level: "B2", word: "der Elternabend", en: "parents' evening", partOfSpeech: "noun" },
  { id: "v125", topic: "kita", level: "B2", word: "eingewöhnen", en: "to settle in", example: "Sie gewöhnt sich langsam ein.", partOfSpeech: "verb" },
  { id: "v126", topic: "kita", level: "B2", word: "die Garderobe", en: "coat area / cubbies", partOfSpeech: "noun" },
  { id: "v127", topic: "kita", level: "B2", word: "das Fach", plural: "die Fächer", en: "cubby / shelf slot", partOfSpeech: "noun" },
  { id: "v128", topic: "kita", level: "B2", word: "die Tagesmutter", plural: "die Tagesmütter", en: "childminder", partOfSpeech: "noun" },
  { id: "v129", topic: "kita", level: "B2", word: "die Krabbelgruppe", en: "baby playgroup", partOfSpeech: "noun" },
  { id: "v130", topic: "kita", level: "B2", word: "das Laternenumzug", en: "lantern parade", partOfSpeech: "noun" },

  { id: "v131", topic: "konflikte", level: "B2", word: "gemein", en: "mean", example: "Das war gemein!", partOfSpeech: "adj" },
  { id: "v132", topic: "konflikte", level: "B2", word: "die Trotzphase", en: "defiance phase (terrible twos)", partOfSpeech: "noun" },
  { id: "v133", topic: "konflikte", level: "B2", word: "böswillig", en: "malicious", example: "Das war nicht böswillig.", partOfSpeech: "adj" },
  { id: "v134", topic: "konflikte", level: "B2", word: "Grenzen setzen", en: "to set boundaries", partOfSpeech: "phrase" },

  { id: "v135", topic: "koerper", level: "B2", word: "die Erkältung", en: "cold (illness)", partOfSpeech: "noun" },
  { id: "v136", topic: "koerper", level: "B2", word: "die Beule", plural: "die Beulen", en: "bump / lump", partOfSpeech: "noun" },
  { id: "v137", topic: "koerper", level: "B2", word: "sich verletzen", en: "to injure oneself", partOfSpeech: "verb" },
  { id: "v138", topic: "koerper", level: "B2", word: "ansteckend", en: "contagious", example: "Ist das ansteckend?", partOfSpeech: "adj" },
  { id: "v139", topic: "koerper", level: "B2", word: "der Windelausschlag", en: "diaper rash", partOfSpeech: "noun" },
  { id: "v140", topic: "koerper", level: "B2", word: "die Läuse", en: "head lice", partOfSpeech: "noun" },
  { id: "v141", topic: "koerper", level: "B2", word: "trocken", en: "dry (potty-trained)", example: "Ist sie schon trocken?", partOfSpeech: "adj" },
  { id: "v142", topic: "koerper", level: "B2", word: "der Mückenstich", plural: "die Mückenstiche", en: "mosquito bite", partOfSpeech: "noun" },
  { id: "v143", topic: "koerper", level: "B2", word: "die Nebenwirkung", plural: "die Nebenwirkungen", en: "side effect", partOfSpeech: "noun" },

  { id: "v144", topic: "essen", level: "B2", word: "die Unverträglichkeit", en: "intolerance", example: "Laktoseunverträglichkeit.", partOfSpeech: "noun" },
  { id: "v145", topic: "essen", level: "B2", word: "vertragen", en: "to tolerate (food)", example: "Er verträgt keine Milch.", partOfSpeech: "verb" },
  { id: "v146", topic: "essen", level: "B2", word: "die Brotzeit", en: "snack time / packed meal", partOfSpeech: "noun" },
  { id: "v147", topic: "essen", level: "B2", word: "der Zuckerkonsum", en: "sugar consumption", partOfSpeech: "noun" },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — bureaucratic, medical, pedagogical vocabulary
  // ═══════════════════════════════════════════════════════════════════

  { id: "v148", topic: "kita", level: "C1", word: "die Einrichtung", plural: "die Einrichtungen", en: "institution (formal for Kita)", partOfSpeech: "noun" },
  { id: "v149", topic: "kita", level: "C1", word: "der Betreuungsschlüssel", en: "staff-to-child ratio", example: "Der Betreuungsschlüssel ist 1:5.", partOfSpeech: "noun" },
  { id: "v150", topic: "kita", level: "C1", word: "die Sprachförderung", en: "language development support", partOfSpeech: "noun" },
  { id: "v151", topic: "kita", level: "C1", word: "der Förderbedarf", en: "special educational needs", partOfSpeech: "noun" },
  { id: "v152", topic: "kita", level: "C1", word: "der Kita-Gutschein", en: "daycare voucher", partOfSpeech: "noun" },
  { id: "v153", topic: "kita", level: "C1", word: "der pädagogische Ansatz", en: "pedagogical approach", partOfSpeech: "phrase" },
  { id: "v154", topic: "kita", level: "C1", word: "die Entwicklungsstufe", plural: "die Entwicklungsstufen", en: "developmental stage", partOfSpeech: "noun" },
  { id: "v155", topic: "kita", level: "C1", word: "das Betreuungsangebot", en: "care provision", partOfSpeech: "noun" },
  { id: "v156", topic: "kita", level: "C1", word: "die Inklusion", en: "inclusion (educational)", partOfSpeech: "noun" },
  { id: "v157", topic: "kita", level: "C1", word: "die Kindertagesstätte", en: "daycare center (full formal name)", partOfSpeech: "noun" },
  { id: "v158", topic: "kita", level: "C1", word: "unterfordert", en: "under-challenged", example: "Er ist unterfordert.", partOfSpeech: "adj" },
  { id: "v159", topic: "kita", level: "C1", word: "überfordert", en: "overwhelmed", example: "Sie ist überfordert.", partOfSpeech: "adj" },
  { id: "v160", topic: "kita", level: "C1", word: "die Erstsprache", en: "first language / mother tongue", partOfSpeech: "noun" },

  { id: "v161", topic: "konflikte", level: "C1", word: "die Überforderung", en: "overwhelm / excessive demand", partOfSpeech: "noun" },
  { id: "v162", topic: "konflikte", level: "C1", word: "zurückzuführen sein auf", en: "to be attributable to", partOfSpeech: "phrase" },
  { id: "v163", topic: "konflikte", level: "C1", word: "unter den Tisch fallen lassen", en: "to sweep under the carpet", partOfSpeech: "phrase" },
  { id: "v164", topic: "konflikte", level: "C1", word: "bedenklich", en: "concerning / questionable", partOfSpeech: "adj" },
  { id: "v165", topic: "konflikte", level: "C1", word: "die Schuld zuweisen", en: "to assign blame", partOfSpeech: "phrase" },
  { id: "v166", topic: "konflikte", level: "C1", word: "die sozial-emotionale Entwicklung", en: "social-emotional development", partOfSpeech: "phrase" },

  { id: "v167", topic: "koerper", level: "C1", word: "die U-Untersuchung", en: "well-child checkup (U1–U9)", partOfSpeech: "noun" },
  { id: "v168", topic: "koerper", level: "C1", word: "die Abklärung", en: "clinical assessment", partOfSpeech: "noun" },
  { id: "v169", topic: "koerper", level: "C1", word: "abklingen", en: "to subside (medical)", example: "Die Symptome klingen ab.", partOfSpeech: "verb" },
  { id: "v170", topic: "koerper", level: "C1", word: "die Ergotherapie", en: "occupational therapy", partOfSpeech: "noun" },
  { id: "v171", topic: "koerper", level: "C1", word: "in Betracht ziehen", en: "to consider", partOfSpeech: "phrase" },
  { id: "v172", topic: "koerper", level: "C1", word: "der Befund", plural: "die Befunde", en: "medical findings", partOfSpeech: "noun" },

  { id: "v173", topic: "essen", level: "C1", word: "sich ausgewogen ernähren", en: "to eat a balanced diet", partOfSpeech: "phrase" },
  { id: "v174", topic: "essen", level: "C1", word: "der Machtkampf", en: "power struggle", example: "Essen wird zum Machtkampf.", partOfSpeech: "noun" },
  { id: "v175", topic: "essen", level: "C1", word: "die Beikost", en: "complementary food (for babies)", partOfSpeech: "noun" },

  { id: "v176", topic: "verabredungen", level: "B2", word: "ungezwungen", en: "casual / relaxed", example: "Lass uns das ungezwungen halten.", partOfSpeech: "adj" },
  { id: "v177", topic: "verabredungen", level: "C1", word: "vorausgesetzt, dass", en: "provided that", partOfSpeech: "phrase" },
];
