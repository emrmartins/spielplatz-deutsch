import type { Phrase, Topic } from "./types";

// ---------------------------------------------------------------------------
// Topics
// ---------------------------------------------------------------------------
export const TOPICS: Topic[] = [
  { id: "spielplatz", label: "Spielplatz", en: "Playground", color: "#2E9B8B" },
  { id: "kita", label: "Kita-Alltag", en: "Daycare", color: "#E2823C" },
  { id: "konflikte", label: "Konflikte", en: "Conflicts", color: "#D9544E" },
  { id: "verabredungen", label: "Verabredungen", en: "Playdates", color: "#5E86C4" },
  { id: "koerper", label: "Körper & Gesundheit", en: "Body & health", color: "#9B6DB0" },
  { id: "essen", label: "Essen & Trinken", en: "Food & drink", color: "#6E9E52" },
];

// ---------------------------------------------------------------------------
// Phrases — ~120 items
// ---------------------------------------------------------------------------
export const PHRASES: Phrase[] = [
  // ── Spielplatz — talking to other parents ──────────────────────────
  { id: "p001", topic: "spielplatz", de: "Wie alt ist deiner?", en: "How old is yours?", note: "The go-to opener between parents. Use 'deine' for a girl.", situation: "on the bench" },
  { id: "p002", topic: "spielplatz", de: "Meiner ist auch gerade zwei geworden.", en: "Mine just turned two as well.", situation: "on the bench" },
  { id: "p003", topic: "spielplatz", de: "Die verstehen sich ja super!", en: "They really get along well!", situation: "watching kids play" },
  { id: "p004", topic: "spielplatz", de: "Geht ihr auch in die Kita hier um die Ecke?", en: "Do you also go to the daycare around the corner?", situation: "on the bench" },
  { id: "p005", topic: "spielplatz", de: "Magst du mir deine Nummer geben?", en: "Want to give me your number?", note: "Parents default to 'du' with each other at the playground." },
  { id: "p006", topic: "spielplatz", de: "Wollen wir uns mal verabreden?", en: "Shall we arrange to meet up?", situation: "on the bench" },
  { id: "p007", topic: "spielplatz", de: "Ist der Platz hier noch frei?", en: "Is this seat still free?", situation: "at the bench" },
  { id: "p008", topic: "spielplatz", de: "Wie heißt deine Kleine?", en: "What's your little one called?", note: "Use 'dein Kleiner' for a boy." },
  { id: "p009", topic: "spielplatz", de: "Seit wann wohnt ihr hier in der Gegend?", en: "How long have you lived around here?", situation: "small talk" },
  { id: "p010", topic: "spielplatz", de: "Kennt ihr einen guten Kinderarzt hier in der Nähe?", en: "Do you know a good pediatrician nearby?", situation: "small talk" },

  // ── Spielplatz — talking to your kid ───────────────────────────────
  { id: "p011", topic: "spielplatz", de: "Willst du auf die Schaukel?", en: "Do you want to go on the swing?" },
  { id: "p012", topic: "spielplatz", de: "Vorsichtig, festhalten!", en: "Careful, hold on!" },
  { id: "p013", topic: "spielplatz", de: "Frag mal, ob du auch mal darfst.", en: "Ask if you can have a go too.", note: "Teaching your kid to ask for a turn." },
  { id: "p014", topic: "spielplatz", de: "Komm, wir teilen.", en: "Come on, let's share." },
  { id: "p015", topic: "spielplatz", de: "Sollen wir Sandkuchen backen?", en: "Shall we make sand cakes?" },
  { id: "p016", topic: "spielplatz", de: "Nicht so hoch klettern!", en: "Don't climb so high!" },
  { id: "p017", topic: "spielplatz", de: "Warte, ich helfe dir hoch.", en: "Wait, I'll help you up." },
  { id: "p018", topic: "spielplatz", de: "Willst du rutschen oder schaukeln?", en: "Do you want to slide or swing?" },
  { id: "p019", topic: "spielplatz", de: "Wir müssen gleich nach Hause.", en: "We have to go home soon." },
  { id: "p020", topic: "spielplatz", de: "Noch fünf Minuten, dann gehen wir.", en: "Five more minutes, then we're going." },
  { id: "p021", topic: "spielplatz", de: "Pass auf, da kommt jemand die Rutsche runter.", en: "Watch out, someone's coming down the slide." },
  { id: "p022", topic: "spielplatz", de: "Du musst warten, bis du dran bist.", en: "You have to wait until it's your turn." },
  { id: "p023", topic: "spielplatz", de: "Guck mal, da drüben ist eine Wippe!", en: "Look, there's a seesaw over there!" },

  // ── Kita — drop-off ────────────────────────────────────────────────
  { id: "p024", topic: "kita", de: "Er hat heute Nacht schlecht geschlafen.", en: "He slept badly last night.", situation: "at drop-off" },
  { id: "p025", topic: "kita", de: "Sie ist vielleicht etwas quengelig heute.", en: "She might be a bit whiny today.", situation: "at drop-off" },
  { id: "p026", topic: "kita", de: "Er hat schon gefrühstückt.", en: "He's already had breakfast.", situation: "at drop-off" },
  { id: "p027", topic: "kita", de: "Kann sie heute draußen spielen? Sie hat eine leichte Erkältung.", en: "Can she play outside today? She has a slight cold.", situation: "at drop-off" },
  { id: "p028", topic: "kita", de: "Ich hole ihn heute etwas früher ab.", en: "I'll pick him up a bit earlier today.", situation: "at drop-off" },
  { id: "p029", topic: "kita", de: "Heute holt die Oma ab.", en: "Grandma is picking up today.", situation: "at drop-off" },
  { id: "p030", topic: "kita", de: "Wir haben Wechselklamotten mitgebracht.", en: "We've brought a change of clothes.", situation: "at drop-off" },
  { id: "p031", topic: "kita", de: "Die Windeln sind alle, ich bringe morgen neue mit.", en: "The diapers are all gone, I'll bring more tomorrow.", situation: "at drop-off" },
  { id: "p032", topic: "kita", de: "Er hat seinen Schnuller dabei.", en: "He has his pacifier with him.", situation: "at drop-off" },
  { id: "p033", topic: "kita", de: "Bitte Sonnencreme auftragen, wenn sie nach draußen gehen.", en: "Please apply sunscreen before they go outside.", situation: "at drop-off", register: "Sie" },

  // ── Kita — pickup ──────────────────────────────────────────────────
  { id: "p034", topic: "kita", de: "Wie war der Tag?", en: "How was the day?", situation: "at pickup" },
  { id: "p035", topic: "kita", de: "Hat sie gut gegessen?", en: "Did she eat well?", situation: "at pickup" },
  { id: "p036", topic: "kita", de: "Wie lange hat er geschlafen?", en: "How long did he sleep?", situation: "at pickup" },
  { id: "p037", topic: "kita", de: "Was haben sie heute gemacht?", en: "What did they do today?", situation: "at pickup" },
  { id: "p038", topic: "kita", de: "Hat er heute geweint?", en: "Did he cry today?", situation: "at pickup" },
  { id: "p039", topic: "kita", de: "Gab es irgendwelche Probleme?", en: "Were there any problems?", situation: "at pickup" },

  // ── Kita — general / Eingewöhnung ──────────────────────────────────
  { id: "p040", topic: "kita", de: "Wie läuft die Eingewöhnung?", en: "How's the settling-in going?", note: "Eingewöhnung is a structured multi-week process in German Kitas." },
  { id: "p041", topic: "kita", de: "Er tut sich noch schwer mit dem Abschied.", en: "He's still struggling with saying goodbye." },
  { id: "p042", topic: "kita", de: "Wann ist das nächste Elterngespräch?", en: "When is the next parent-teacher meeting?" },
  { id: "p043", topic: "kita", de: "Braucht ihr noch Bastelmaterial?", en: "Do you need more craft supplies?" },
  { id: "p044", topic: "kita", de: "Morgen ist er krank, er kann nicht kommen.", en: "He's sick tomorrow, he can't come." },
  { id: "p045", topic: "kita", de: "Wir fahren nächste Woche in den Urlaub.", en: "We're going on holiday next week." },
  { id: "p046", topic: "kita", de: "Wer ist seine Bezugserzieherin?", en: "Who is his primary caregiver?", note: "Bezugserzieherin is the assigned key person for your child." },
  { id: "p047", topic: "kita", de: "Sie hat ein neues Kuscheltier dabei.", en: "She has a new cuddly toy with her." },

  // ── Konflikte ──────────────────────────────────────────────────────
  { id: "p048", topic: "konflikte", de: "Was ist denn passiert?", en: "What happened?" },
  { id: "p049", topic: "konflikte", de: "Das war bestimmt keine Absicht.", en: "That surely wasn't on purpose.", note: "Defusing tension with another parent." },
  { id: "p050", topic: "konflikte", de: "Kannst du dich entschuldigen?", en: "Can you say sorry?" },
  { id: "p051", topic: "konflikte", de: "Alles wieder gut?", en: "All better now?" },
  { id: "p052", topic: "konflikte", de: "Kein Problem, das passiert.", en: "No problem, it happens.", note: "To another parent after their kid does something." },
  { id: "p053", topic: "konflikte", de: "Tut mir leid, das war mein Kleiner.", en: "Sorry, that was my little one." },
  { id: "p054", topic: "konflikte", de: "Nicht schubsen!", en: "No pushing!", note: "'Schubsen' is the everyday kid word, not 'stoßen'." },
  { id: "p055", topic: "konflikte", de: "Nicht hauen!", en: "No hitting!", note: "'Hauen' is what kids and parents actually say, not 'schlagen'." },
  { id: "p056", topic: "konflikte", de: "Wir nehmen anderen Kindern nichts weg.", en: "We don't take things from other children." },
  { id: "p057", topic: "konflikte", de: "Du darfst traurig sein, aber nicht hauen.", en: "You're allowed to be sad, but not to hit." },
  { id: "p058", topic: "konflikte", de: "Komm, wir suchen dir was anderes zum Spielen.", en: "Come on, let's find something else for you to play with." },
  { id: "p059", topic: "konflikte", de: "Könnt ihr euch abwechseln?", en: "Can you take turns?" },
  { id: "p060", topic: "konflikte", de: "Sag ihm, dass du das nicht möchtest.", en: "Tell him that you don't want that.", note: "Encouraging your child to set boundaries." },
  { id: "p061", topic: "konflikte", de: "Ich verstehe, dass du sauer bist.", en: "I understand that you're angry." },
  { id: "p062", topic: "konflikte", de: "Lass uns kurz eine Pause machen.", en: "Let's take a short break." },

  // ── Verabredungen ──────────────────────────────────────────────────
  { id: "p063", topic: "verabredungen", de: "Passt es euch am Samstag?", en: "Does Saturday work for you?" },
  { id: "p064", topic: "verabredungen", de: "Soll ich was zu essen mitbringen?", en: "Should I bring something to eat?" },
  { id: "p065", topic: "verabredungen", de: "Hat sie irgendwelche Allergien?", en: "Does she have any allergies?" },
  { id: "p066", topic: "verabredungen", de: "Ich bin um vier wieder da.", en: "I'll be back at four." },
  { id: "p067", topic: "verabredungen", de: "Bei uns oder bei euch?", en: "At ours or at yours?" },
  { id: "p068", topic: "verabredungen", de: "Können die Kinder auch im Garten spielen?", en: "Can the kids play in the garden too?" },
  { id: "p069", topic: "verabredungen", de: "Soll ich sie nachher wieder mitbringen?", en: "Shall I bring her back afterwards?" },
  { id: "p070", topic: "verabredungen", de: "Wollen wir uns nächste Woche wieder treffen?", en: "Shall we meet again next week?" },
  { id: "p071", topic: "verabredungen", de: "Die Kinder können bei uns übernachten, wenn ihr wollt.", en: "The kids can sleep over at ours if you like." },
  { id: "p072", topic: "verabredungen", de: "Wir könnten zusammen zum Schwimmbad gehen.", en: "We could go to the pool together." },
  { id: "p073", topic: "verabredungen", de: "Gegen drei passt uns gut.", en: "Around three works well for us." },
  { id: "p074", topic: "verabredungen", de: "Ich schick dir die Adresse per WhatsApp.", en: "I'll send you the address via WhatsApp." },
  { id: "p075", topic: "verabredungen", de: "Er hat sich so gefreut, dass er kommen darf.", en: "He was so excited that he can come." },

  // ── Körper & Gesundheit ────────────────────────────────────────────
  { id: "p076", topic: "koerper", de: "Er hat sich den Kopf gestoßen.", en: "He bumped his head.", situation: "at playground" },
  { id: "p077", topic: "koerper", de: "Sie hat sich das Knie aufgeschürft.", en: "She scraped her knee." },
  { id: "p078", topic: "koerper", de: "Hast du ein Pflaster dabei?", en: "Do you have a band-aid?" },
  { id: "p079", topic: "koerper", de: "Zeig mal, wo tut es weh?", en: "Show me, where does it hurt?" },
  { id: "p080", topic: "koerper", de: "Das ist nur ein kleiner Kratzer.", en: "That's just a small scratch." },
  { id: "p081", topic: "koerper", de: "Er hat Fieber, wir bleiben heute zu Hause.", en: "He has a fever, we're staying home today." },
  { id: "p082", topic: "koerper", de: "Sie hat Schnupfen, aber kein Fieber.", en: "She has a runny nose but no fever." },
  { id: "p083", topic: "koerper", de: "Wir müssen zum Kinderarzt.", en: "We need to go to the pediatrician." },
  { id: "p084", topic: "koerper", de: "Er muss noch seine Impfung bekommen.", en: "He still needs to get his vaccination." },
  { id: "p085", topic: "koerper", de: "Sie hat letzte Nacht erbrochen.", en: "She vomited last night." },
  { id: "p086", topic: "koerper", de: "Ich glaube, er bekommt Zähne.", en: "I think he's teething.", note: "'Zähne bekommen' is the natural way to say teething." },
  { id: "p087", topic: "koerper", de: "Musst du auf die Toilette?", en: "Do you need to go to the toilet?" },
  { id: "p088", topic: "koerper", de: "Lass mich mal pusten, dann geht es gleich besser.", en: "Let me blow on it, then it'll feel better soon." },
  { id: "p089", topic: "koerper", de: "Hände waschen nicht vergessen!", en: "Don't forget to wash your hands!" },
  { id: "p090", topic: "koerper", de: "Zieh dir die Jacke an, es ist kalt.", en: "Put your jacket on, it's cold." },
  { id: "p091", topic: "koerper", de: "Setz die Mütze auf, die Sonne ist stark.", en: "Put your hat on, the sun is strong." },

  // ── Essen & Trinken ────────────────────────────────────────────────
  { id: "p092", topic: "essen", de: "Hast du Hunger?", en: "Are you hungry?" },
  { id: "p093", topic: "essen", de: "Willst du Wasser oder Apfelschorle?", en: "Do you want water or apple spritzer?", note: "Apfelschorle is the classic German kids' drink." },
  { id: "p094", topic: "essen", de: "Ich habe Obst und Brezel eingepackt.", en: "I've packed fruit and a pretzel." },
  { id: "p095", topic: "essen", de: "Er isst kein Fleisch.", en: "He doesn't eat meat." },
  { id: "p096", topic: "essen", de: "Sie hat eine Nussallergie.", en: "She has a nut allergy." },
  { id: "p097", topic: "essen", de: "Er verträgt keine Milch.", en: "He's intolerant to milk.", note: "'Vertragen' is the everyday word for tolerating food." },
  { id: "p098", topic: "essen", de: "Probier mal, das schmeckt gut!", en: "Try it, it tastes good!" },
  { id: "p099", topic: "essen", de: "Nicht mit vollem Mund reden.", en: "Don't talk with your mouth full." },
  { id: "p100", topic: "essen", de: "Trink noch was, es ist so warm heute.", en: "Have something more to drink, it's so warm today." },
  { id: "p101", topic: "essen", de: "Was ist heute in der Brotdose?", en: "What's in the lunchbox today?" },
  { id: "p102", topic: "essen", de: "Magst du noch ein Stück Gurke?", en: "Would you like another piece of cucumber?" },
  { id: "p103", topic: "essen", de: "Er hat in der Kita gut gegessen.", en: "He ate well at daycare." },
  { id: "p104", topic: "essen", de: "Wir essen erst zu Hause.", en: "We'll eat at home first." },
  { id: "p105", topic: "essen", de: "Ich habe genug Snacks für alle dabei.", en: "I've got enough snacks for everyone." },
  { id: "p106", topic: "essen", de: "Kann sie bei euch mitessen?", en: "Can she eat with you?", situation: "playdate" },
  { id: "p107", topic: "essen", de: "Er ist ein bisschen wählerisch beim Essen.", en: "He's a bit picky with food.", note: "'Wählerisch' is the polite word; 'mäkelig' is more colloquial." },

  // ── More Spielplatz / general ──────────────────────────────────────
  { id: "p108", topic: "spielplatz", de: "Der Spielplatz ist heute ganz schön voll.", en: "The playground is pretty packed today." },
  { id: "p109", topic: "spielplatz", de: "Kennst du einen Spielplatz mit Wasserspielbereich?", en: "Do you know a playground with a water play area?" },
  { id: "p110", topic: "spielplatz", de: "Gehst du auch zum Eltern-Kind-Turnen?", en: "Do you also go to parent-child gymnastics?" },
  { id: "p111", topic: "spielplatz", de: "Welche Krabbelgruppe geht ihr?", en: "Which baby group do you go to?", note: "Krabbelgruppe = baby/toddler playgroup." },

  // ── More Kita ──────────────────────────────────────────────────────
  { id: "p112", topic: "kita", de: "Könnte er eine Nummer kleiner Hausschuhe bekommen?", en: "Could he get a size smaller indoor shoes?", register: "Sie" },
  { id: "p113", topic: "kita", de: "Wann ist die Schließzeit?", en: "When is the closure period?", note: "Kitas close for several weeks a year — Schließzeit." },
  { id: "p114", topic: "kita", de: "Gibt es morgen einen Ausflug?", en: "Is there a trip tomorrow?" },
  { id: "p115", topic: "kita", de: "Bitte gebt ihm die Medizin nach dem Mittagessen.", en: "Please give him the medicine after lunch.", register: "Sie" },
  { id: "p116", topic: "kita", de: "Hat sie sich gut eingelebt?", en: "Has she settled in well?" },

  // ── More Verabredungen ─────────────────────────────────────────────
  { id: "p117", topic: "verabredungen", de: "Unsere Kinder sind im gleichen Alter, die sollten sich mal treffen.", en: "Our kids are the same age, they should meet up." },
  { id: "p118", topic: "verabredungen", de: "Darf er heute bei euch spielen?", en: "Can he play at yours today?" },
  { id: "p119", topic: "verabredungen", de: "Wir könnten mal zusammen in den Zoo gehen.", en: "We could go to the zoo together sometime." },
  { id: "p120", topic: "verabredungen", de: "Ruf mich an, falls irgendwas ist.", en: "Call me if anything comes up.", situation: "dropping off at playdate" },
];
