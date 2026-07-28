import type { Phrase, Topic } from "./types";

export const TOPICS: Topic[] = [
  { id: "spielplatz", label: "Spielplatz", en: "Playground", color: "#2E9B8B" },
  { id: "kita", label: "Kita-Alltag", en: "Daycare", color: "#E2823C" },
  { id: "konflikte", label: "Konflikte", en: "Conflicts", color: "#D9544E" },
  { id: "verabredungen", label: "Verabredungen", en: "Playdates", color: "#5E86C4" },
  { id: "koerper", label: "Körper & Gesundheit", en: "Body & health", color: "#9B6DB0" },
  { id: "essen", label: "Essen & Trinken", en: "Food & drink", color: "#6E9E52" },
];

export const PHRASES: Phrase[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — simple present, basic questions, short sentences
  // ═══════════════════════════════════════════════════════════════════

  // ── Spielplatz A2 ──────────────────────────────────────────────────
  { id: "p001", topic: "spielplatz", level: "A2", de: "Wie heißt du?", en: "What's your name?", situation: "meeting another child" },
  { id: "p002", topic: "spielplatz", level: "A2", de: "Wie alt bist du?", en: "How old are you?", situation: "to another child" },
  { id: "p003", topic: "spielplatz", level: "A2", de: "Darf ich mitspielen?", en: "Can I play too?" },
  { id: "p004", topic: "spielplatz", level: "A2", de: "Das ist mein Kind.", en: "That's my child." },
  { id: "p005", topic: "spielplatz", level: "A2", de: "Wo ist die Toilette?", en: "Where is the toilet?" },
  { id: "p006", topic: "spielplatz", level: "A2", de: "Wir gehen jetzt.", en: "We're going now." },
  { id: "p007", topic: "spielplatz", level: "A2", de: "Pass auf!", en: "Watch out!" },
  { id: "p008", topic: "spielplatz", level: "A2", de: "Willst du spielen?", en: "Do you want to play?" },
  { id: "p009", topic: "spielplatz", level: "A2", de: "Die Rutsche ist nass.", en: "The slide is wet." },
  { id: "p010", topic: "spielplatz", level: "A2", de: "Komm, wir gehen nach Hause.", en: "Come on, let's go home." },
  { id: "p011", topic: "spielplatz", level: "A2", de: "Er ist drei Jahre alt.", en: "He is three years old." },

  // ── Kita A2 ────────────────────────────────────────────────────────
  { id: "p012", topic: "kita", level: "A2", de: "Guten Morgen!", en: "Good morning!", situation: "at drop-off" },
  { id: "p013", topic: "kita", level: "A2", de: "Tschüss, bis nachher!", en: "Bye, see you later!", situation: "at drop-off" },
  { id: "p014", topic: "kita", level: "A2", de: "Ich bin die Mama von Max.", en: "I'm Max's mom.", situation: "introducing yourself" },
  { id: "p015", topic: "kita", level: "A2", de: "Wann kann ich ihn abholen?", en: "When can I pick him up?" },
  { id: "p016", topic: "kita", level: "A2", de: "Er ist heute krank.", en: "He is sick today." },
  { id: "p017", topic: "kita", level: "A2", de: "Hat sie gut geschlafen?", en: "Did she sleep well?", situation: "at pickup" },
  { id: "p018", topic: "kita", level: "A2", de: "Wo sind seine Schuhe?", en: "Where are his shoes?" },

  // ── Konflikte A2 ───────────────────────────────────────────────────
  { id: "p019", topic: "konflikte", level: "A2", de: "Nicht hauen!", en: "No hitting!" },
  { id: "p020", topic: "konflikte", level: "A2", de: "Sag bitte Entschuldigung.", en: "Say sorry please." },
  { id: "p021", topic: "konflikte", level: "A2", de: "Das ist meins!", en: "That's mine!" },
  { id: "p022", topic: "konflikte", level: "A2", de: "Hör auf!", en: "Stop it!" },
  { id: "p023", topic: "konflikte", level: "A2", de: "Wir teilen.", en: "We share." },
  { id: "p024", topic: "konflikte", level: "A2", de: "Er weint.", en: "He's crying." },
  { id: "p025", topic: "konflikte", level: "A2", de: "Das tut mir leid.", en: "I'm sorry." },

  // ── Verabredungen A2 ───────────────────────────────────────────────
  { id: "p026", topic: "verabredungen", level: "A2", de: "Wann hast du Zeit?", en: "When do you have time?" },
  { id: "p027", topic: "verabredungen", level: "A2", de: "Samstag ist gut.", en: "Saturday is good." },
  { id: "p028", topic: "verabredungen", level: "A2", de: "Wo wohnst du?", en: "Where do you live?" },
  { id: "p029", topic: "verabredungen", level: "A2", de: "Ich komme um drei.", en: "I'll come at three." },

  // ── Körper A2 ──────────────────────────────────────────────────────
  { id: "p030", topic: "koerper", level: "A2", de: "Tut es weh?", en: "Does it hurt?" },
  { id: "p031", topic: "koerper", level: "A2", de: "Ich brauche ein Pflaster.", en: "I need a band-aid." },
  { id: "p032", topic: "koerper", level: "A2", de: "Er ist müde.", en: "He's tired." },
  { id: "p033", topic: "koerper", level: "A2", de: "Hände waschen!", en: "Wash your hands!" },
  { id: "p034", topic: "koerper", level: "A2", de: "Zieh deine Jacke an.", en: "Put your jacket on." },

  // ── Essen A2 ───────────────────────────────────────────────────────
  { id: "p035", topic: "essen", level: "A2", de: "Hast du Hunger?", en: "Are you hungry?" },
  { id: "p036", topic: "essen", level: "A2", de: "Willst du Wasser?", en: "Do you want water?" },
  { id: "p037", topic: "essen", level: "A2", de: "Das schmeckt gut.", en: "That tastes good." },
  { id: "p038", topic: "essen", level: "A2", de: "Ich bin satt.", en: "I'm full." },
  { id: "p039", topic: "essen", level: "A2", de: "Noch ein Stück?", en: "Another piece?" },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — compound sentences, past tense, everyday idioms
  // ═══════════════════════════════════════════════════════════════════

  // ── Spielplatz B1 ──────────────────────────────────────────────────
  { id: "p040", topic: "spielplatz", level: "B1", de: "Wie alt ist deiner?", en: "How old is yours?", note: "Use 'deine' for a girl. The go-to opener between parents.", situation: "on the bench" },
  { id: "p041", topic: "spielplatz", level: "B1", de: "Meiner ist auch gerade zwei geworden.", en: "Mine just turned two as well." },
  { id: "p042", topic: "spielplatz", level: "B1", de: "Die verstehen sich ja super!", en: "They really get along well!" },
  { id: "p043", topic: "spielplatz", level: "B1", de: "Magst du mir deine Nummer geben?", en: "Want to give me your number?", note: "Parents default to 'du' with each other at the playground." },
  { id: "p044", topic: "spielplatz", level: "B1", de: "Wollen wir uns mal verabreden?", en: "Shall we arrange to meet up?" },
  { id: "p045", topic: "spielplatz", level: "B1", de: "Frag mal, ob du auch mal darfst.", en: "Ask if you can have a go too.", note: "Teaching your kid to ask for a turn." },
  { id: "p046", topic: "spielplatz", level: "B1", de: "Komm, wir teilen.", en: "Come on, let's share." },
  { id: "p047", topic: "spielplatz", level: "B1", de: "Sollen wir Sandkuchen backen?", en: "Shall we make sand cakes?" },
  { id: "p048", topic: "spielplatz", level: "B1", de: "Noch fünf Minuten, dann gehen wir.", en: "Five more minutes, then we're going." },
  { id: "p049", topic: "spielplatz", level: "B1", de: "Pass auf, da kommt jemand die Rutsche runter.", en: "Watch out, someone's coming down the slide." },
  { id: "p050", topic: "spielplatz", level: "B1", de: "Guck mal, da drüben ist eine Wippe!", en: "Look, there's a seesaw over there!" },
  { id: "p051", topic: "spielplatz", level: "B1", de: "Kennt ihr einen guten Kinderarzt hier in der Nähe?", en: "Do you know a good pediatrician nearby?" },
  { id: "p052", topic: "spielplatz", level: "B1", de: "Der Spielplatz ist heute ganz schön voll.", en: "The playground is pretty packed today." },

  // ── Kita B1 ────────────────────────────────────────────────────────
  { id: "p053", topic: "kita", level: "B1", de: "Er hat heute Nacht schlecht geschlafen.", en: "He slept badly last night.", situation: "at drop-off" },
  { id: "p054", topic: "kita", level: "B1", de: "Sie ist vielleicht etwas quengelig heute.", en: "She might be a bit whiny today.", situation: "at drop-off" },
  { id: "p055", topic: "kita", level: "B1", de: "Die Windeln sind alle, ich bringe morgen neue mit.", en: "The diapers are all gone, I'll bring more tomorrow." },
  { id: "p056", topic: "kita", level: "B1", de: "Ich hole ihn heute etwas früher ab.", en: "I'll pick him up a bit earlier today." },
  { id: "p057", topic: "kita", level: "B1", de: "Heute holt die Oma ab.", en: "Grandma is picking up today." },
  { id: "p058", topic: "kita", level: "B1", de: "Was haben sie heute gemacht?", en: "What did they do today?", situation: "at pickup" },
  { id: "p059", topic: "kita", level: "B1", de: "Wie läuft die Eingewöhnung?", en: "How's the settling-in going?", note: "Eingewöhnung is a structured multi-week process in German Kitas." },
  { id: "p060", topic: "kita", level: "B1", de: "Wann ist das nächste Elterngespräch?", en: "When is the next parent-teacher meeting?" },
  { id: "p061", topic: "kita", level: "B1", de: "Morgen ist er krank, er kann nicht kommen.", en: "He's sick tomorrow, he can't come." },
  { id: "p062", topic: "kita", level: "B1", de: "Wir fahren nächste Woche in den Urlaub.", en: "We're going on holiday next week." },
  { id: "p063", topic: "kita", level: "B1", de: "Bitte Sonnencreme auftragen, wenn sie nach draußen gehen.", en: "Please apply sunscreen before they go outside.", register: "Sie" },

  // ── Konflikte B1 ───────────────────────────────────────────────────
  { id: "p064", topic: "konflikte", level: "B1", de: "Was ist denn passiert?", en: "What happened?" },
  { id: "p065", topic: "konflikte", level: "B1", de: "Das war bestimmt keine Absicht.", en: "That surely wasn't on purpose." },
  { id: "p066", topic: "konflikte", level: "B1", de: "Kannst du dich entschuldigen?", en: "Can you say sorry?" },
  { id: "p067", topic: "konflikte", level: "B1", de: "Kein Problem, das passiert.", en: "No problem, it happens." },
  { id: "p068", topic: "konflikte", level: "B1", de: "Tut mir leid, das war mein Kleiner.", en: "Sorry, that was my little one." },
  { id: "p069", topic: "konflikte", level: "B1", de: "Wir nehmen anderen Kindern nichts weg.", en: "We don't take things from other children." },
  { id: "p070", topic: "konflikte", level: "B1", de: "Du darfst traurig sein, aber nicht hauen.", en: "You're allowed to be sad, but not to hit." },
  { id: "p071", topic: "konflikte", level: "B1", de: "Könnt ihr euch abwechseln?", en: "Can you take turns?" },
  { id: "p072", topic: "konflikte", level: "B1", de: "Ich verstehe, dass du sauer bist.", en: "I understand that you're angry." },

  // ── Verabredungen B1 ───────────────────────────────────────────────
  { id: "p073", topic: "verabredungen", level: "B1", de: "Passt es euch am Samstag?", en: "Does Saturday work for you?" },
  { id: "p074", topic: "verabredungen", level: "B1", de: "Soll ich was zu essen mitbringen?", en: "Should I bring something to eat?" },
  { id: "p075", topic: "verabredungen", level: "B1", de: "Hat sie irgendwelche Allergien?", en: "Does she have any allergies?" },
  { id: "p076", topic: "verabredungen", level: "B1", de: "Bei uns oder bei euch?", en: "At ours or at yours?" },
  { id: "p077", topic: "verabredungen", level: "B1", de: "Ruf mich an, falls irgendwas ist.", en: "Call me if anything comes up." },
  { id: "p078", topic: "verabredungen", level: "B1", de: "Er hat sich so gefreut, dass er kommen darf.", en: "He was so excited that he can come." },
  { id: "p079", topic: "verabredungen", level: "B1", de: "Ich schick dir die Adresse per WhatsApp.", en: "I'll send you the address via WhatsApp." },

  // ── Körper B1 ──────────────────────────────────────────────────────
  { id: "p080", topic: "koerper", level: "B1", de: "Er hat sich den Kopf gestoßen.", en: "He bumped his head." },
  { id: "p081", topic: "koerper", level: "B1", de: "Hast du ein Pflaster dabei?", en: "Do you have a band-aid?" },
  { id: "p082", topic: "koerper", level: "B1", de: "Zeig mal, wo tut es weh?", en: "Show me, where does it hurt?" },
  { id: "p083", topic: "koerper", level: "B1", de: "Er hat Fieber, wir bleiben heute zu Hause.", en: "He has a fever, we're staying home today." },
  { id: "p084", topic: "koerper", level: "B1", de: "Wir müssen zum Kinderarzt.", en: "We need to go to the pediatrician." },
  { id: "p085", topic: "koerper", level: "B1", de: "Ich glaube, er bekommt Zähne.", en: "I think he's teething.", note: "'Zähne bekommen' is the natural way to say teething." },
  { id: "p086", topic: "koerper", level: "B1", de: "Setz die Mütze auf, die Sonne ist stark.", en: "Put your hat on, the sun is strong." },
  { id: "p087", topic: "koerper", level: "B1", de: "Lass mich mal pusten, dann geht es gleich besser.", en: "Let me blow on it, then it'll feel better soon." },

  // ── Essen B1 ───────────────────────────────────────────────────────
  { id: "p088", topic: "essen", level: "B1", de: "Willst du Wasser oder Apfelschorle?", en: "Do you want water or apple spritzer?", note: "Apfelschorle is the classic German kids' drink." },
  { id: "p089", topic: "essen", level: "B1", de: "Sie hat eine Nussallergie.", en: "She has a nut allergy." },
  { id: "p090", topic: "essen", level: "B1", de: "Er verträgt keine Milch.", en: "He can't tolerate milk.", note: "'Vertragen' is the everyday word for food tolerance." },
  { id: "p091", topic: "essen", level: "B1", de: "Er ist ein bisschen wählerisch beim Essen.", en: "He's a bit picky with food." },
  { id: "p092", topic: "essen", level: "B1", de: "Ich habe genug Snacks für alle dabei.", en: "I've got enough snacks for everyone." },
  { id: "p093", topic: "essen", level: "B1", de: "Kann sie bei euch mitessen?", en: "Can she eat with you?", situation: "playdate" },
  { id: "p094", topic: "essen", level: "B1", de: "Trink noch was, es ist so warm heute.", en: "Have something more to drink, it's so warm today." },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — subjunctive, idiomatic, nuanced social situations
  // ═══════════════════════════════════════════════════════════════════

  // ── Spielplatz B2 ──────────────────────────────────────────────────
  { id: "p095", topic: "spielplatz", level: "B2", de: "Es wäre schön, wenn wir uns öfter hier treffen würden.", en: "It would be nice if we met here more often.", note: "Konjunktiv II — polite/wishful suggestion." },
  { id: "p096", topic: "spielplatz", level: "B2", de: "Ich finde es echt schwierig, hier Anschluss zu finden.", en: "I find it really hard to connect with people here.", note: "'Anschluss finden' — to find social connection. A real feeling for expat parents." },
  { id: "p097", topic: "spielplatz", level: "B2", de: "Seitdem sie laufen kann, muss ich ihr ständig hinterherrennen.", en: "Ever since she could walk, I've had to run after her constantly." },
  { id: "p098", topic: "spielplatz", level: "B2", de: "Ich hätte nichts dagegen, wenn die Kinder sich nochmal verabreden.", en: "I wouldn't mind if the kids got together again." },
  { id: "p099", topic: "spielplatz", level: "B2", de: "Mir fällt auf, dass er sich immer zurückzieht, wenn viele Kinder da sind.", en: "I notice that he always withdraws when there are lots of kids around." },
  { id: "p100", topic: "spielplatz", level: "B2", de: "Geht ihr auch zum Eltern-Kind-Turnen? Das kann ich nur empfehlen.", en: "Do you also go to parent-child gym? I can really recommend it." },

  // ── Kita B2 ────────────────────────────────────────────────────────
  { id: "p101", topic: "kita", level: "B2", de: "Er tut sich noch schwer mit dem Abschied, obwohl er die Kita eigentlich mag.", en: "He still struggles with saying goodbye, even though he actually likes daycare." },
  { id: "p102", topic: "kita", level: "B2", de: "Könnten Sie mir sagen, wie er sich in der Gruppe verhält?", en: "Could you tell me how he behaves in the group?", register: "Sie" },
  { id: "p103", topic: "kita", level: "B2", de: "Uns ist aufgefallen, dass sie zu Hause sehr unruhig ist, seitdem sie in der Kita ist.", en: "We've noticed that she's been very restless at home since she started daycare." },
  { id: "p104", topic: "kita", level: "B2", de: "Ich wollte nachfragen, ob es bei der Eingewöhnung irgendwelche Auffälligkeiten gab.", en: "I wanted to ask whether there were any issues during the settling-in period.", register: "Sie" },
  { id: "p105", topic: "kita", level: "B2", de: "Wäre es möglich, dass wir das Elterngespräch um eine Woche verschieben?", en: "Would it be possible to postpone the parent-teacher meeting by a week?", register: "Sie" },
  { id: "p106", topic: "kita", level: "B2", de: "Mir liegt es am Herzen, dass er sich in der Gruppe wohlfühlt.", en: "It's important to me that he feels comfortable in the group.", note: "'Am Herzen liegen' — to be close to one's heart." },
  { id: "p107", topic: "kita", level: "B2", de: "Ich bin mir unsicher, ob er schon so weit ist, ohne Windel in die Kita zu gehen.", en: "I'm not sure whether he's ready to go to daycare without diapers yet." },

  // ── Konflikte B2 ───────────────────────────────────────────────────
  { id: "p108", topic: "konflikte", level: "B2", de: "Ich möchte das nicht überbewerten, aber so ein Verhalten sollte man schon ansprechen.", en: "I don't want to make too much of it, but that kind of behavior should be addressed." },
  { id: "p109", topic: "konflikte", level: "B2", de: "Sag ihm, dass du das nicht möchtest, anstatt zurückzuhauen.", en: "Tell him that you don't want that, instead of hitting back.", note: "'Anstatt zu' + infinitive — instead of." },
  { id: "p110", topic: "konflikte", level: "B2", de: "Es fällt ihm noch schwer, seine Gefühle in Worte zu fassen.", en: "He still finds it hard to put his feelings into words." },
  { id: "p111", topic: "konflikte", level: "B2", de: "Es tut mir leid — er macht das nicht böswillig, er weiß einfach noch nicht, wie man teilt.", en: "I'm sorry — he doesn't do it maliciously, he just doesn't know how to share yet.", note: "'Böswillig' — malicious/with ill intent." },
  { id: "p112", topic: "konflikte", level: "B2", de: "Mir ist wichtig, dass sie lernt, Grenzen zu setzen, ohne aggressiv zu werden.", en: "It's important to me that she learns to set boundaries without becoming aggressive." },
  { id: "p113", topic: "konflikte", level: "B2", de: "Ich glaube, die beiden brauchen gerade etwas Abstand voneinander.", en: "I think the two of them need a bit of distance from each other right now." },

  // ── Verabredungen B2 ───────────────────────────────────────────────
  { id: "p114", topic: "verabredungen", level: "B2", de: "Wir könnten auch was Spontanes machen, wenn es bei euch zeitlich passt.", en: "We could also do something spontaneous, if it works time-wise for you." },
  { id: "p115", topic: "verabredungen", level: "B2", de: "Falls es zu viel wird, sag einfach Bescheid, dann hole ich sie früher ab.", en: "If it gets too much, just let me know and I'll pick her up earlier." },
  { id: "p116", topic: "verabredungen", level: "B2", de: "Die Kinder spielen so gut zusammen — es wäre schade, wenn wir das nicht regelmäßig machen.", en: "The kids play so well together — it'd be a shame if we didn't do this regularly." },
  { id: "p117", topic: "verabredungen", level: "B2", de: "Ich hoffe, es macht euch nichts aus, dass er manchmal etwas wild ist.", en: "I hope you don't mind that he's sometimes a bit wild." },

  // ── Körper B2 ──────────────────────────────────────────────────────
  { id: "p118", topic: "koerper", level: "B2", de: "Wir waren beim Kinderarzt, und er meinte, es sei nichts Ernstes.", en: "We went to the pediatrician and he said it was nothing serious.", note: "Indirect speech uses Konjunktiv I: 'sei' instead of 'ist'." },
  { id: "p119", topic: "koerper", level: "B2", de: "Ich bin mir nicht sicher, ob das ansteckend ist — sicherheitshalber bleiben wir mal zu Hause.", en: "I'm not sure if it's contagious — just to be safe, we'll stay home." },
  { id: "p120", topic: "koerper", level: "B2", de: "Sie hat sich letzte Nacht übergeben, aber heute Morgen scheint es ihr wieder besser zu gehen.", en: "She vomited last night, but this morning she seems to be feeling better." },
  { id: "p121", topic: "koerper", level: "B2", de: "Solange er kein Fieber hat, darf er doch in die Kita, oder?", en: "As long as he doesn't have a fever, he's allowed to go to daycare, right?" },
  { id: "p122", topic: "koerper", level: "B2", de: "Ich würde gern wissen, ob die Impfung Nebenwirkungen hatte.", en: "I'd like to know whether the vaccination had any side effects." },

  // ── Essen B2 ───────────────────────────────────────────────────────
  { id: "p123", topic: "essen", level: "B2", de: "Er würde am liebsten den ganzen Tag nur Nudeln essen, wenn man ihn ließe.", en: "He'd eat nothing but pasta all day if you let him.", note: "Konjunktiv II: 'ließe' — subjunctive of 'lassen'." },
  { id: "p124", topic: "essen", level: "B2", de: "Es wäre gut, wenn ihr darauf achten könntet, dass er genug trinkt.", en: "It'd be good if you could make sure he drinks enough.", register: "Sie" },
  { id: "p125", topic: "essen", level: "B2", de: "Wir versuchen, den Zuckerkonsum einzuschränken, auch wenn es nicht immer einfach ist.", en: "We try to limit sugar intake, even though it's not always easy." },
  { id: "p126", topic: "essen", level: "B2", de: "Falls er das Essen nicht anrührt, macht euch keine Sorgen — er isst dann zu Hause.", en: "If he doesn't touch the food, don't worry — he'll eat at home." },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — complex clauses, bureaucratic register, subtle nuance
  // ═══════════════════════════════════════════════════════════════════

  // ── Spielplatz C1 ──────────────────────────────────────────────────
  { id: "p127", topic: "spielplatz", level: "C1", de: "Inwiefern unterscheidet sich der pädagogische Ansatz hier von dem, was ihr vorher hattet?", en: "In what way does the pedagogical approach here differ from what you had before?", note: "'Inwiefern' — a more precise version of 'wie'." },
  { id: "p128", topic: "spielplatz", level: "C1", de: "Was mich an dieser Gegend besonders anspricht, ist, dass es so viele naturnahe Spielplätze gibt.", en: "What particularly appeals to me about this area is that there are so many nature-focused playgrounds.", note: "'Naturnah' — close to nature, a valued quality in German parenting culture." },
  { id: "p129", topic: "spielplatz", level: "C1", de: "Ich tue mich manchmal schwer damit, die Balance zwischen Überbehütung und Loslassen zu finden.", en: "I sometimes struggle to find the balance between overprotecting and letting go.", note: "'Überbehütung' — helicopter parenting. A common topic among German parents." },

  // ── Kita C1 ────────────────────────────────────────────────────────
  { id: "p130", topic: "kita", level: "C1", de: "Ich würde gerne verstehen, welche pädagogische Haltung dem Konzept Ihrer Einrichtung zugrunde liegt.", en: "I'd like to understand the pedagogical philosophy underlying your institution's concept.", register: "Sie", note: "Formal register for initial meetings. 'Einrichtung' = institution (formal for Kita)." },
  { id: "p131", topic: "kita", level: "C1", de: "Inwiefern wird auf die individuellen Bedürfnisse der Kinder im Hinblick auf ihre Entwicklungsstufe eingegangen?", en: "To what extent are children's individual needs addressed with regard to their developmental stage?", register: "Sie" },
  { id: "p132", topic: "kita", level: "C1", de: "Uns wäre es wichtig, dass die Sprachförderung nicht nur auf Deutsch, sondern auch auf seine Erstsprache eingeht.", en: "It would be important to us that language support addresses not only German but also his first language.", note: "'Sprachförderung' — language development support, a key concept in German early education." },
  { id: "p133", topic: "kita", level: "C1", de: "Ich habe den Eindruck, dass er in letzter Zeit etwas unterfordert ist — gibt es Möglichkeiten, ihn stärker zu fördern?", en: "I have the impression he's been a bit under-challenged lately — are there ways to support his development more?", note: "'Unterfordert' vs 'überfordert' — under-challenged vs overwhelmed." },
  { id: "p134", topic: "kita", level: "C1", de: "Wie handhaben Sie es, wenn sich herausstellt, dass ein Kind einen besonderen Förderbedarf hat?", en: "How do you handle it when it turns out a child has special educational needs?", register: "Sie", note: "'Förderbedarf' — special educational needs. Official German terminology." },
  { id: "p135", topic: "kita", level: "C1", de: "Wir sind gerade dabei, den Antrag auf einen Kita-Gutschein zu stellen.", en: "We're currently in the process of applying for a daycare voucher.", note: "'Kita-Gutschein' — the voucher system used in some German states to fund daycare places." },
  { id: "p136", topic: "kita", level: "C1", de: "Könnten wir einen Termin vereinbaren, um über seine sozial-emotionale Entwicklung zu sprechen?", en: "Could we schedule an appointment to discuss his social-emotional development?", register: "Sie" },

  // ── Konflikte C1 ───────────────────────────────────────────────────
  { id: "p137", topic: "konflikte", level: "C1", de: "Ich habe den Eindruck, dass das Verhalten auf eine gewisse Überforderung zurückzuführen ist.", en: "I have the impression that the behavior can be attributed to a certain sense of being overwhelmed.", note: "'Zurückzuführen sein auf' — to be attributable to. Formal analytical register." },
  { id: "p138", topic: "konflikte", level: "C1", de: "Mir wäre daran gelegen, dass wir das gemeinsam mit den Erziehern ansprechen, anstatt es unter den Tisch fallen zu lassen.", en: "I would appreciate it if we addressed this together with the educators, rather than sweeping it under the carpet.", note: "'Unter den Tisch fallen lassen' — to sweep under the carpet." },
  { id: "p139", topic: "konflikte", level: "C1", de: "Es liegt mir fern, jemandem die Schuld zuzuweisen, aber wir sollten darüber reden, wie wir solche Situationen in Zukunft vermeiden.", en: "It's far from my intention to assign blame, but we should discuss how to avoid such situations in the future.", note: "'Es liegt mir fern' — it is far from my intention." },
  { id: "p140", topic: "konflikte", level: "C1", de: "Ich finde es bedenklich, dass diese Art von Konflikten immer wieder vorkommt, ohne dass darauf eingegangen wird.", en: "I find it concerning that this type of conflict keeps occurring without being addressed." },

  // ── Verabredungen C1 ───────────────────────────────────────────────
  { id: "p141", topic: "verabredungen", level: "C1", de: "Vorausgesetzt, dass das Wetter mitspielt, könnten wir den Ausflug an den See machen, von dem wir gesprochen haben.", en: "Provided the weather cooperates, we could do the trip to the lake we talked about.", note: "'Vorausgesetzt, dass' — provided that. 'Mitspielen' — to cooperate (colloquial)." },
  { id: "p142", topic: "verabredungen", level: "C1", de: "Uns wäre es am liebsten, wenn wir das möglichst ungezwungen halten — die Kinder sollen einfach spielen können.", en: "We'd prefer to keep it as relaxed as possible — the kids should just be able to play.", note: "'Ungezwungen' — casual, relaxed, without formality." },

  // ── Körper C1 ──────────────────────────────────────────────────────
  { id: "p143", topic: "koerper", level: "C1", de: "Laut dem Kinderarzt handelt es sich um einen harmlosen viralen Infekt, der von allein abklingen sollte.", en: "According to the pediatrician, it's a harmless viral infection that should resolve on its own.", note: "'Abklingen' — to subside, die down (medical register)." },
  { id: "p144", topic: "koerper", level: "C1", de: "Wir sind hin- und hergerissen, ob wir den U-Untersuchungstermin vorziehen sollen.", en: "We're torn on whether to move the well-child checkup appointment forward.", note: "'U-Untersuchung' — the numbered wellness checkups (U1–U9) that are a core part of German pediatric care." },
  { id: "p145", topic: "koerper", level: "C1", de: "Die Kinderärztin hat angedeutet, dass es sich lohnen könnte, eine ergotherapeutische Abklärung in Betracht zu ziehen.", en: "The pediatrician hinted that it might be worth considering an occupational therapy assessment.", note: "'In Betracht ziehen' — to consider. 'Abklärung' — clinical assessment." },

  // ── Essen C1 ───────────────────────────────────────────────────────
  { id: "p146", topic: "essen", level: "C1", de: "Wir achten darauf, dass er sich ausgewogen ernährt, wobei wir versuchen, keinen Druck auszuüben.", en: "We make sure he eats a balanced diet, while trying not to apply pressure.", note: "'Sich ausgewogen ernähren' — to eat a balanced diet. 'Druck ausüben' — to apply pressure." },
  { id: "p147", topic: "essen", level: "C1", de: "Falls es mit dem Essen zu einem Machtkampf kommt, lasst ihn einfach — er regelt das selbst, wenn er Hunger hat.", en: "If eating becomes a power struggle, just leave him — he'll sort it out himself when he's hungry.", note: "'Machtkampf' — power struggle. A concept from parenting discourse." },
];
