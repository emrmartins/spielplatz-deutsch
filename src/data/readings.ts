import type { ReadingText } from "./types";

export const READINGS: ReadingText[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — short, simple texts, present tense, basic vocabulary
  // ~150–200 words, ~5 min reading time
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "r001",
    topic: "spielplatz",
    level: "A2",
    titleDe: "Ein Nachmittag auf dem Spielplatz",
    titleEn: "An afternoon at the playground",
    intro: "A simple description of a typical afternoon at a German playground with a toddler.",
    readingTimeMinutes: 5,
    paragraphs: [
      { de: "Es ist Dienstag, drei Uhr. Ich gehe mit meiner Tochter Mia zum Spielplatz. Der Spielplatz ist gleich um die Ecke. Mia ist zwei Jahre alt.", en: "It's Tuesday, three o'clock. I'm going to the playground with my daughter Mia. The playground is just around the corner. Mia is two years old." },
      { de: "Auf dem Spielplatz sind schon viele Kinder. Mia will sofort auf die Rutsche. „Vorsichtig!“, sage ich. Dann geht sie zum Sandkasten. Sie hat ihre Schaufel und ihr Förmchen dabei.", en: "There are already lots of children at the playground. Mia wants to go on the slide immediately. 'Careful!' I say. Then she goes to the sandbox. She has her shovel and her sand mold with her." },
      { de: "Eine andere Mama sitzt auf der Bank. „Wie alt ist deine?“, fragt sie. „Zwei“, sage ich. „Meiner auch!“, sagt sie. Die Kinder spielen zusammen. Das ist schön.", en: "Another mom is sitting on the bench. 'How old is yours?' she asks. 'Two,' I say. 'Mine too!' she says. The children play together. That's nice." },
      { de: "Um fünf Uhr sage ich: „Mia, wir gehen jetzt nach Hause.“ Mia sagt: „Nein! Noch spielen!“ Ich sage: „Noch fünf Minuten, dann gehen wir.“ Das sage ich jeden Tag.", en: "At five o'clock I say: 'Mia, we're going home now.' Mia says: 'No! Still playing!' I say: 'Five more minutes, then we're going.' I say that every day." },
    ],
    questions: [
      { question: "Wie alt ist Mia?", options: ["Eins", "Zwei", "Drei", "Vier"], correctIndex: 1, explanationDe: "Im Text steht: „Mia ist zwei Jahre alt.“", explanationEn: "The text says: 'Mia is two years old.'" },
      { question: "Wohin geht Mia zuerst?", options: ["Zum Sandkasten", "Auf die Schaukel", "Auf die Rutsche", "Zur Bank"], correctIndex: 2, explanationDe: "„Mia will sofort auf die Rutsche.“", explanationEn: "'Mia wants to go on the slide immediately.'" },
      { question: "Was sagt Mia, als sie nach Hause gehen sollen?", options: ["Ja, okay!", "Nein! Noch spielen!", "Ich bin müde.", "Ich habe Hunger."], correctIndex: 1, explanationDe: "Mia sagt: „Nein! Noch spielen!“", explanationEn: "Mia says: 'No! Still playing!'" },
    ],
    vocabIds: ["v002", "v003", "v004", "v034", "v035", "v010"],
  },

  {
    id: "r002",
    topic: "kita",
    level: "A2",
    titleDe: "Der erste Tag in der Kita",
    titleEn: "The first day at daycare",
    intro: "A parent describes their child's very first day at Kita — what to bring, what happens.",
    readingTimeMinutes: 5,
    paragraphs: [
      { de: "Heute ist ein besonderer Tag. Leon geht zum ersten Mal in die Kita. Er ist ein Jahr und acht Monate alt. Ich bin nervös. Leon auch — aber er weiß es noch nicht.", en: "Today is a special day. Leon is going to daycare for the first time. He is one year and eight months old. I'm nervous. Leon too — but he doesn't know it yet." },
      { de: "Ich packe seinen Rucksack: Windeln, Wechselklamotten, Schnuller, Kuscheltier und die Trinkflasche. Die Brotdose hat Brot mit Käse und ein Stück Gurke. Das isst er gern.", en: "I pack his backpack: diapers, change of clothes, pacifier, cuddly toy, and his water bottle. The lunchbox has bread with cheese and a piece of cucumber. He likes eating that." },
      { de: "In der Kita ist die Erzieherin sehr nett. Sie heißt Frau Schmidt. „Guten Morgen, Leon!“, sagt sie. Leon versteckt sich hinter meinem Bein.", en: "At the Kita, the educator is very nice. Her name is Frau Schmidt. 'Good morning, Leon!' she says. Leon hides behind my leg." },
      { de: "Ich bleibe heute die ganze Zeit in der Kita. Das ist der erste Tag von der Eingewöhnung. Morgen bleibe ich auch. Nächste Woche gehe ich dann vielleicht für zehn Minuten raus.", en: "I'm staying at Kita the whole time today. This is the first day of the settling-in. I'm staying tomorrow too. Next week I might go out for ten minutes.", note: "The Eingewöhnung (settling-in) usually takes 2-4 weeks. Parents stay at first, then gradually leave for longer." },
    ],
    questions: [
      { question: "Wie alt ist Leon?", options: ["Ein Jahr", "Ein Jahr und acht Monate", "Zwei Jahre", "Drei Jahre"], correctIndex: 1, explanationDe: "„Er ist ein Jahr und acht Monate alt.“", explanationEn: "'He is one year and eight months old.'" },
      { question: "Was macht Leon, als die Erzieherin ihn begrüßt?", options: ["Er weint.", "Er lacht.", "Er versteckt sich.", "Er spielt."], correctIndex: 2, explanationDe: "„Leon versteckt sich hinter meinem Bein.“", explanationEn: "'Leon hides behind my leg.'" },
      { question: "Wie lange bleibt die Mama am ersten Tag?", options: ["Zehn Minuten", "Eine Stunde", "Den ganzen Tag", "Bis zum Mittagessen"], correctIndex: 2, explanationDe: "„Ich bleibe heute die ganze Zeit in der Kita.“", explanationEn: "'I'm staying at Kita the whole time today.'" },
    ],
    vocabIds: ["v012", "v057", "v054", "v055", "v056", "v061", "v062"],
  },

  {
    id: "r003",
    topic: "essen",
    level: "A2",
    titleDe: "Was kommt in die Brotdose?",
    titleEn: "What goes in the lunchbox?",
    intro: "A parent thinks about what to pack for Kita lunch — typical German kids' food.",
    readingTimeMinutes: 5,
    paragraphs: [
      { de: "Jeden Morgen packe ich die Brotdose für die Kita. Das ist nicht immer einfach. Mein Sohn isst nicht alles. Er ist wählerisch.", en: "Every morning I pack the lunchbox for Kita. It's not always easy. My son doesn't eat everything. He's picky." },
      { de: "Brot mit Käse geht immer. Manchmal Brot mit Wurst. Dazu ein paar Gurkenstücke oder Paprika. Und immer Obst: Apfel, Banane oder Weintrauben.", en: "Bread with cheese always works. Sometimes bread with cold cuts. Plus a few pieces of cucumber or bell pepper. And always fruit: apple, banana, or grapes." },
      { de: "Süßigkeiten sind in der Kita nicht erlaubt. Kein Schokolade, keine Kekse. Manche Kitas erlauben auch keine Joghurts mit Zucker. In Leons Kita ist das okay.", en: "Sweets are not allowed at Kita. No chocolate, no cookies. Some Kitas don't allow yogurts with sugar either. In Leon's Kita that's okay.", note: "Most German Kitas have rules about what can go in the Brotdose. Sugar-free is the norm." },
      { de: "Die Trinkflasche ist auch wichtig. Nur Wasser — kein Saft. Manche Kinder trinken zu wenig. „Trink noch was!“, sage ich jeden Tag.", en: "The water bottle is also important. Only water — no juice. Some children don't drink enough. 'Drink some more!' I say every day." },
    ],
    questions: [
      { question: "Was ist in der Kita nicht erlaubt?", options: ["Obst", "Brot", "Süßigkeiten", "Käse"], correctIndex: 2, explanationDe: "„Süßigkeiten sind in der Kita nicht erlaubt.“", explanationEn: "'Sweets are not allowed at Kita.'" },
      { question: "Was kommt in die Trinkflasche?", options: ["Saft", "Milch", "Apfelschorle", "Wasser"], correctIndex: 3, explanationDe: "„Nur Wasser — kein Saft.“", explanationEn: "'Only water — no juice.'" },
    ],
    vocabIds: ["v056", "v071", "v114", "v105", "v023", "v108"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — compound sentences, past tense, real situations
  // ~250–350 words, ~6-7 min reading time
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "r004",
    topic: "kita",
    level: "B1",
    titleDe: "Die Eingewöhnung — Woche für Woche",
    titleEn: "The settling-in — week by week",
    intro: "A parent's diary of the Eingewöhnung process over four weeks. What really happens.",
    readingTimeMinutes: 7,
    paragraphs: [
      { de: "Woche 1: Ich bin die ganze Zeit dabei. Leon spielt, aber er guckt alle zwei Minuten, ob ich noch da bin. Die Bezugserzieherin, Frau Schmidt, versucht langsam Kontakt aufzubauen. Leon will noch nicht von ihr getröstet werden. Das ist normal, sagt sie.", en: "Week 1: I'm there the whole time. Leon plays, but he checks every two minutes whether I'm still there. The primary caregiver, Frau Schmidt, slowly tries to build a connection. Leon doesn't want to be comforted by her yet. That's normal, she says." },
      { de: "Woche 2: Am Dienstag gehe ich zum ersten Mal für zehn Minuten raus. Leon weint sofort. Frau Schmidt sagt, er hat sich nach drei Minuten beruhigt und danach gespielt. Trotzdem habe ich ein schlechtes Gewissen.", en: "Week 2: On Tuesday I leave for the first time for ten minutes. Leon cries immediately. Frau Schmidt says he calmed down after three minutes and then played. Still, I feel guilty.", note: "'Ein schlechtes Gewissen haben' — to feel guilty. Every parent during Eingewöhnung." },
      { de: "Woche 3: Ich bin jetzt eine Stunde weg. Leon weint beim Abschied, aber er beruhigt sich schneller. Beim Abholen strahlt er mich an und zeigt mir, was er gebastelt hat. Zu Hause ist er abends sehr müde und etwas quengelig.", en: "Week 3: I'm away for an hour now. Leon cries at the goodbye, but he calms down faster. When I pick him up, he beams at me and shows me what he crafted. At home he's very tired in the evening and a bit whiny." },
      { de: "Woche 4: Der Abschied ist immer noch schwer, aber Frau Schmidt sagt, danach spielt er fröhlich mit den anderen Kindern. Er hat sogar einen Freund gefunden: Tim. Am Freitag sage ich beim Abholen: „Wie war der Tag?“ Und Frau Schmidt sagt: „Toll. Er hat die Eingewöhnung geschafft.“ Ich bin so erleichtert.", en: "Week 4: Saying goodbye is still hard, but Frau Schmidt says he plays happily with the other children afterwards. He's even found a friend: Tim. On Friday I say at pickup: 'How was the day?' And Frau Schmidt says: 'Great. He's completed the settling-in.' I'm so relieved." },
    ],
    questions: [
      { question: "Was passiert in Woche 2, als die Mama zum ersten Mal rausgeht?", options: ["Leon spielt weiter.", "Leon weint sofort.", "Leon schläft ein.", "Leon isst."], correctIndex: 1, explanationDe: "„Leon weint sofort.“", explanationEn: "'Leon cries immediately.'" },
      { question: "Wie fühlt sich Leon abends in Woche 3?", options: ["Fröhlich und aufgedreht", "Müde und quengelig", "Hungrig und durstig", "Krank und traurig"], correctIndex: 1, explanationDe: "„Zu Hause ist er abends sehr müde und etwas quengelig.“", explanationEn: "'At home he's very tired in the evening and a bit whiny.'" },
      { question: "Was sagt Frau Schmidt am Ende von Woche 4?", options: ["Er braucht noch Zeit.", "Er hat die Eingewöhnung geschafft.", "Er soll zu Hause bleiben.", "Er weint noch jeden Tag."], correctIndex: 1, explanationDe: "„Er hat die Eingewöhnung geschafft.“", explanationEn: "'He's completed the settling-in.'" },
    ],
    vocabIds: ["v062", "v121", "v070", "v066", "v080", "v068"],
  },

  {
    id: "r005",
    topic: "konflikte",
    level: "B1",
    titleDe: "Die Trotzphase — und wie man sie überlebt",
    titleEn: "The defiance phase — and how to survive it",
    intro: "An honest account of what the Trotzphase looks like in daily life and at the playground.",
    readingTimeMinutes: 6,
    paragraphs: [
      { de: "Mia ist zweieinhalb und mitten in der Trotzphase. Alles wird zum Drama. Sie will die Jacke nicht anziehen. Sie will ihre Schuhe nicht anziehen. Sie will nicht nach Hause gehen. Sie will nicht essen. Aber wenn ich ihr sage, dass sie kein Eis bekommt, liegt sie schreiend auf dem Boden.", en: "Mia is two and a half and right in the middle of the defiance phase. Everything becomes a drama. She doesn't want to put on her jacket. She doesn't want to put on her shoes. She doesn't want to go home. She doesn't want to eat. But if I tell her she can't have ice cream, she's lying on the floor screaming." },
      { de: "Auf dem Spielplatz ist es besonders schwierig. Gestern hat sie einem anderen Kind die Schaufel weggenommen. Als ich gesagt habe: „Wir nehmen anderen Kindern nichts weg“, hat sie einen Wutanfall bekommen. Die anderen Eltern haben geguckt. Ich wollte im Boden versinken.", en: "At the playground it's especially difficult. Yesterday she took another child's shovel. When I said: 'We don't take things from other children,' she had a tantrum. The other parents looked. I wanted the ground to swallow me.", note: "'Im Boden versinken wollen' — to want the ground to swallow you. That universal parental feeling." },
      { de: "Unser Kinderarzt sagt, die Trotzphase ist völlig normal. Kinder lernen, dass sie einen eigenen Willen haben. Sie testen Grenzen. Das ist gut für die Entwicklung — auch wenn es sich nicht so anfühlt.", en: "Our pediatrician says the defiance phase is completely normal. Children are learning that they have their own will. They're testing boundaries. That's good for development — even if it doesn't feel like it." },
      { de: "Was mir hilft: Ich sage nicht mehr „Nein!“ zu allem. Ich gebe ihr Auswahl: „Willst du den roten oder den blauen Becher?“ Dann fühlt sie sich ernst genommen. Und wenn der Wutanfall kommt, bleibe ich ruhig und sage: „Ich verstehe, dass du sauer bist. Aber wir hauen nicht.“", en: "What helps me: I don't say 'No!' to everything anymore. I give her choices: 'Do you want the red or the blue cup?' Then she feels taken seriously. And when the tantrum comes, I stay calm and say: 'I understand that you're angry. But we don't hit.'" },
    ],
    questions: [
      { question: "Was ist Mias Reaktion, wenn sie kein Eis bekommt?", options: ["Sie weint leise.", "Sie sagt okay.", "Sie liegt schreiend auf dem Boden.", "Sie geht nach Hause."], correctIndex: 2, explanationDe: "„... liegt sie schreiend auf dem Boden.“", explanationEn: "'...she's lying on the floor screaming.'" },
      { question: "Was sagt der Kinderarzt über die Trotzphase?", options: ["Das Kind braucht Hilfe.", "Es ist völlig normal.", "Es ist ein Problem.", "Man soll zum Arzt gehen."], correctIndex: 1, explanationDe: "„Die Trotzphase ist völlig normal.“", explanationEn: "'The defiance phase is completely normal.'" },
      { question: "Was hilft der Mama?", options: ["Immer Nein sagen", "Dem Kind Auswahl geben", "Das Kind ignorieren", "Auf den Spielplatz gehen"], correctIndex: 1, explanationDe: "„Ich gebe ihr Auswahl.“", explanationEn: "'I give her choices.'" },
    ],
    vocabIds: ["v132", "v085", "v081", "v074", "v134"],
  },

  {
    id: "r006",
    topic: "verabredungen",
    level: "B1",
    titleDe: "Der erste Kindergeburtstag",
    titleEn: "The first children's birthday party",
    intro: "Planning and hosting a Kindergeburtstag in Germany — what's expected and what can go wrong.",
    readingTimeMinutes: 6,
    paragraphs: [
      { de: "Leon wird drei und wir machen seinen ersten Kindergeburtstag. In Deutschland lädt man so viele Kinder ein, wie das Kind alt wird — also drei. Plus Geschwister. Also eigentlich fünf. Okay, sechs.", en: "Leon turns three and we're having his first children's birthday party. In Germany, you invite as many children as the child's age — so three. Plus siblings. So actually five. Okay, six." },
      { de: "Ich habe Einladungen gebastelt und in die Kita-Fächer gelegt. Bei allen Eltern habe ich nachgefragt: Allergien? Unverträglichkeiten? Ein Kind hat eine Nussallergie, eins verträgt keine Milch. Der Kuchen wird eine Herausforderung.", en: "I crafted invitations and put them in the Kita cubbies. I checked with all parents: Allergies? Intolerances? One child has a nut allergy, one can't have milk. The cake is going to be a challenge.", note: "'In die Fächer legen' — putting things in the children's cubbies is how you communicate with parents in German Kitas." },
      { de: "Am Tag der Party regnet es natürlich. Plan B: alles drinnen. Sechs Dreijährige in einer Wohnung. Die Kinder toben, einer weint, einer will nicht teilen, einer hat sich den Kopf gestoßen. Eine Mama hat gesagt: „Kein Problem, das passiert.“ Ich liebe diese Frau.", en: "On the day of the party, it rains of course. Plan B: everything indoors. Six three-year-olds in an apartment. The children romp around, one cries, one won't share, one bumped his head. One mom said: 'No problem, it happens.' I love that woman." },
      { de: "Am Ende sind alle glücklich, voller Kuchen und müde. Leon sagt: „Bester Tag!“ Das reicht.", en: "In the end, everyone is happy, full of cake, and tired. Leon says: 'Best day!' That's enough." },
    ],
    questions: [
      { question: "Wie viele Kinder werden eingeladen?", options: ["Drei", "Vier", "Fünf", "Sechs"], correctIndex: 3, explanationDe: "Am Ende werden es sechs Kinder.", explanationEn: "In the end, it's six children." },
      { question: "Was passiert am Tag der Party mit dem Wetter?", options: ["Es schneit.", "Die Sonne scheint.", "Es regnet.", "Es ist windig."], correctIndex: 2, explanationDe: "„Am Tag der Party regnet es natürlich.“", explanationEn: "'On the day of the party, it rains of course.'" },
    ],
    vocabIds: ["v087", "v088", "v089", "v113", "v144", "v127"],
  },

  {
    id: "r007",
    topic: "koerper",
    level: "B1",
    titleDe: "Läuse-Alarm in der Kita",
    titleEn: "Head lice alert at Kita",
    intro: "The dreaded email every Kita parent gets — and what you actually need to do about it.",
    readingTimeMinutes: 6,
    paragraphs: [
      { de: "Die E-Mail kommt um 14 Uhr: „Liebe Eltern, in unserer Einrichtung wurde ein Fall von Kopfläusen festgestellt. Bitte kontrollieren Sie Ihr Kind.“ Mein Herz bleibt stehen.", en: "The email arrives at 2 PM: 'Dear parents, a case of head lice has been found in our institution. Please check your child.' My heart stops." },
      { de: "Ich google sofort: „Wie erkennt man Läuse?“ Man braucht einen Nissenkamm. Haare nass machen, Spülung rein, Strähne für Strähne durchkämmen. Bei Leon finde ich nichts. Bei Mia — drei lebende Läuse.", en: "I immediately google: 'How do you spot lice?' You need a nit comb. Make hair wet, put in conditioner, comb through strand by strand. With Leon, I find nothing. With Mia — three live lice." },
      { de: "In die Apotheke: Läusemittel kaufen. Die Apothekerin sagt: „Das kommt sehr häufig vor. Waschen Sie alle Bettwäsche und Kuscheltiere bei 60 Grad.“ Mia weint, weil das Mittel „eklig“ riecht.", en: "To the pharmacy: buy lice treatment. The pharmacist says: 'This happens very frequently. Wash all bed linen and cuddly toys at 60 degrees.' Mia cries because the treatment smells 'gross'." },
      { de: "Die Kita will eine Bescheinigung, dass Mia behandelt wurde. Ohne Bescheinigung darf sie nicht wiederkommen. Am nächsten Tag gehe ich zum Kinderarzt. Er schaut kurz in die Haare und sagt: „Alles gut, sie kann morgen wieder in die Kita.“ Endlich.", en: "The Kita wants a certificate that Mia has been treated. Without a certificate, she can't come back. The next day I go to the pediatrician. He briefly looks at her hair and says: 'All good, she can go back to Kita tomorrow.' Finally.", note: "In Germany, you need a doctor's certificate (Bescheinigung) confirming treatment before the child can return to Kita after lice." },
    ],
    questions: [
      { question: "Was braucht man, um Läuse zu finden?", options: ["Eine Lupe", "Einen Nissenkamm", "Ein Shampoo", "Einen Spiegel"], correctIndex: 1, explanationDe: "„Man braucht einen Nissenkamm.“", explanationEn: "'You need a nit comb.'" },
      { question: "Was verlangt die Kita?", options: ["Einen Anruf", "Neue Bettwäsche", "Eine Bescheinigung vom Arzt", "Zehn Euro"], correctIndex: 2, explanationDe: "„Die Kita will eine Bescheinigung, dass Mia behandelt wurde.“", explanationEn: "'The Kita wants a certificate that Mia has been treated.'" },
    ],
    vocabIds: ["v140", "v138", "v092"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — complex structures, idiomatic, opinion pieces
  // ~350–450 words, ~7-8 min reading time
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "r008",
    topic: "konflikte",
    level: "B2",
    titleDe: "Helikopter-Eltern auf dem Spielplatz",
    titleEn: "Helicopter parents at the playground",
    intro: "A reflection on different parenting styles you'll observe at German playgrounds — and the tension between them.",
    readingTimeMinutes: 8,
    paragraphs: [
      { de: "Auf jedem Spielplatz gibt es sie: die Mama, die bei jeder Sprosse am Klettergerüst „Vorsichtig!“ ruft, und den Papa, der auf der Bank sitzt und nicht mal aufschaut. Die meisten von uns sind irgendwo dazwischen.", en: "You find them at every playground: the mom who shouts 'Careful!' at every rung of the climbing frame, and the dad who sits on the bench and doesn't even look up. Most of us are somewhere in between." },
      { de: "In Deutschland wird viel Wert darauf gelegt, dass Kinder selbstständig Erfahrungen machen dürfen — auch wenn das bedeutet, dass sie mal hinfallen. „Kinder müssen Risiken eingehen, um zu lernen“, sagen Pädagogen. Das klingt logisch, bis es das eigene Kind ist, das kopfüber am Klettergerüst hängt.", en: "In Germany, a lot of value is placed on children being allowed to have independent experiences — even if that means they fall sometimes. 'Children need to take risks in order to learn,' say educators. That sounds logical, until it's your own child hanging upside down on the climbing frame." },
      { de: "Ich habe mich dabei erwischt, wie ich meiner Tochter hinterhergerannt bin, obwohl sie längst alleine klettern konnte. Eine andere Mutter sagte mir: „Wenn du ihr nicht zutraust, dass sie das kann, traut sie es sich auch nicht zu.“ Das hat gesessen.", en: "I caught myself running after my daughter, even though she could climb on her own long ago. Another mother told me: 'If you don't trust her to do it, she won't trust herself to do it either.' That hit home.", note: "'Das hat gesessen' — that hit home / that landed. Colloquial but widely used." },
      { de: "Trotzdem: Die Grenze zwischen Loslassen und Vernachlässigung ist nicht immer leicht zu finden. Ich will kein Helikopter-Elternteil sein, aber ich will auch nicht das Elternteil sein, das nicht hinschaut, wenn sein Kind von der Rutsche fällt. Vielleicht ist die Wahrheit, dass es keine perfekte Balance gibt — nur den täglichen Versuch, es halbwegs richtig zu machen.", en: "Still: the line between letting go and neglect isn't always easy to find. I don't want to be a helicopter parent, but I also don't want to be the parent who isn't watching when their child falls off the slide. Maybe the truth is that there's no perfect balance — just the daily attempt to get it roughly right." },
    ],
    questions: [
      { question: "Was sagen deutsche Pädagogen über Risiken?", options: ["Risiken sind gefährlich.", "Kinder sollen immer beschützt werden.", "Kinder müssen Risiken eingehen, um zu lernen.", "Nur Erwachsene dürfen Risiken eingehen."], correctIndex: 2, explanationDe: "„Kinder müssen Risiken eingehen, um zu lernen.“", explanationEn: "'Children need to take risks in order to learn.'" },
      { question: "Was hat die andere Mutter zur Erzählerin gesagt?", options: ["Du musst besser aufpassen.", "Dein Kind ist zu klein.", "Wenn du ihr nicht zutraust, traut sie es sich nicht zu.", "Lass sie in Ruhe."], correctIndex: 2, explanationDe: "Die Mutter sagt, dass Vertrauen wichtig ist.", explanationEn: "The mother says that trust is important." },
    ],
    vocabIds: ["v120", "v134", "v119"],
  },

  {
    id: "r009",
    topic: "kita",
    level: "B2",
    titleDe: "Wenn das Kind nicht in die Kita will",
    titleEn: "When your child doesn't want to go to Kita",
    intro: "Dealing with Kita refusal after the Eingewöhnung is over — causes and what actually helps.",
    readingTimeMinutes: 7,
    paragraphs: [
      { de: "Die Eingewöhnung war geschafft, alles lief gut — und dann, nach den Weihnachtsferien, wollte Leon plötzlich nicht mehr in die Kita. Jeden Morgen das gleiche Drama: „Ich will nicht! Ich will zu Hause bleiben!“ Ich war ratlos.", en: "The settling-in was done, everything was going well — and then, after the Christmas holidays, Leon suddenly didn't want to go to Kita anymore. Every morning the same drama: 'I don't want to! I want to stay home!' I was at a loss." },
      { de: "Die Bezugserzieherin meinte, das sei nach längeren Pausen ganz normal. Kinder müssten sich jedes Mal neu eingewöhnen. Sie schlug vor, dass ich morgens ein festes Abschiedsritual einführe: drei Küsse, einmal winken, dann gehen — und nicht zurückkommen.", en: "The primary caregiver said this was completely normal after longer breaks. Children need to re-settle every time. She suggested I introduce a fixed goodbye ritual in the morning: three kisses, one wave, then go — and don't come back.", note: "The advice to not come back after saying goodbye is standard German Kita practice — returning after leaving makes the separation harder." },
      { de: "Mir fiel auf, dass es an manchen Tagen schlimmer war als an anderen. An den Tagen, an denen er schlecht geschlafen hatte oder morgens gehetzt wurde, war der Abschied am schwierigsten. Also habe ich angefangen, morgens mehr Zeit einzuplanen — zehn Minuten früher aufstehen, in Ruhe frühstücken, zusammen die Brotdose packen.", en: "I noticed that it was worse on some days than others. On the days when he'd slept badly or was rushed in the morning, the goodbye was hardest. So I started planning more time in the morning — getting up ten minutes earlier, having breakfast calmly, packing the lunchbox together." },
      { de: "Nach zwei Wochen wurde es besser. Nicht perfekt — er hat immer noch manchmal beim Abschied geweint. Aber er hat sich schneller beruhigt. Und wenn ich ihn nachmittags abgeholt habe, hat er mir strahlend erzählt, was er gemacht hat.", en: "After two weeks, it got better. Not perfect — he still cried at goodbye sometimes. But he calmed down faster. And when I picked him up in the afternoon, he told me beamingly what he'd been doing." },
    ],
    questions: [
      { question: "Wann wollte Leon nicht mehr in die Kita?", options: ["Am ersten Tag", "Nach der Eingewöhnung", "Nach den Weihnachtsferien", "Nach einem Streit"], correctIndex: 2, explanationDe: "„Nach den Weihnachtsferien wollte Leon plötzlich nicht mehr.“", explanationEn: "'After the Christmas holidays, Leon suddenly didn't want to go anymore.'" },
      { question: "Was war das Abschiedsritual?", options: ["Fünf Minuten kuscheln", "Drei Küsse, einmal winken, dann gehen", "Ein Lied singen", "Zusammen zur Tür gehen"], correctIndex: 1, explanationDe: "„Drei Küsse, einmal winken, dann gehen.“", explanationEn: "'Three kisses, one wave, then go.'" },
      { question: "Was hat morgens geholfen?", options: ["Später aufstehen", "Mehr Zeit einplanen", "In die Kita fahren", "Den Schnuller mitnehmen"], correctIndex: 1, explanationDe: "Die Mama hat angefangen, morgens mehr Zeit einzuplanen.", explanationEn: "The mom started planning more time in the morning." },
    ],
    vocabIds: ["v062", "v121", "v066", "v067"],
  },

  {
    id: "r010",
    topic: "spielplatz",
    level: "B2",
    titleDe: "Freundschaften unter Eltern — die Spielplatz-Blase",
    titleEn: "Friendships between parents — the playground bubble",
    intro: "How parent friendships form at the playground, and why they're different from other friendships.",
    readingTimeMinutes: 7,
    paragraphs: [
      { de: "Bevor ich Kinder hatte, hätte ich nie gedacht, dass meine engsten Freundschaften durch einen Sandkasten entstehen würden. Aber so ist es. Die Eltern, die ich am Spielplatz kennengelernt habe, sind die Menschen, die ich am häufigsten sehe.", en: "Before I had children, I never would have thought that my closest friendships would form through a sandbox. But that's how it is. The parents I met at the playground are the people I see most often." },
      { de: "Spielplatz-Freundschaften funktionieren anders als normale Freundschaften. Man wählt sich nicht aus, weil man die gleiche Musik hört oder die gleichen Filme mag. Man wird Freunde, weil die Kinder im gleichen Alter sind und man zufällig auf der gleichen Bank sitzt.", en: "Playground friendships work differently from normal friendships. You don't choose each other because you listen to the same music or like the same films. You become friends because the children are the same age and you happen to sit on the same bench." },
      { de: "Trotzdem entstehen daraus echte Verbindungen. Man spricht über Dinge, die man mit Kollegen nie besprechen würde: Schlafprobleme, Trotzanfälle, die Angst, etwas falsch zu machen. Es gibt eine Offenheit unter Eltern, die ich vorher nicht kannte.", en: "Still, real connections form from this. You talk about things you'd never discuss with colleagues: sleep problems, tantrums, the fear of doing something wrong. There's an openness among parents that I didn't know before." },
      { de: "Was mich als zugezogener Elternteil überrascht hat: Viele deutsche Eltern duzen sich sofort am Spielplatz, selbst wenn sie sich gerade erst kennengelernt haben. In anderen Situationen wäre das undenkbar. Der Spielplatz hat seine eigenen Regeln.", en: "What surprised me as a parent who moved here: many German parents immediately use 'du' with each other at the playground, even if they've just met. In other situations, that would be unthinkable. The playground has its own rules.", note: "The automatic 'du' between parents at playgrounds is a genuine cultural phenomenon in Germany — it's one of the few contexts where strangers skip the formal 'Sie'." },
    ],
    questions: [
      { question: "Warum werden Eltern am Spielplatz Freunde?", options: ["Weil sie die gleichen Hobbys haben.", "Weil die Kinder im gleichen Alter sind.", "Weil sie Nachbarn sind.", "Weil sie zusammen arbeiten."], correctIndex: 1, explanationDe: "Man wird Freunde, weil die Kinder im gleichen Alter sind.", explanationEn: "You become friends because the children are the same age." },
      { question: "Was hat den Erzähler überrascht?", options: ["Dass Spielplätze teuer sind.", "Dass Eltern sich sofort duzen.", "Dass niemand redet.", "Dass die Kinder laut sind."], correctIndex: 1, explanationDe: "Deutsche Eltern duzen sich sofort am Spielplatz.", explanationEn: "German parents immediately use 'du' at the playground." },
    ],
    vocabIds: ["v119", "v010", "v050"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — complex syntax, formal/analytical register
  // ~400–500 words, ~8-10 min reading time
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "r011",
    topic: "kita",
    level: "C1",
    titleDe: "Das deutsche Kita-System — eine Einführung",
    titleEn: "The German Kita system — an introduction",
    intro: "Understanding the structure, funding, and philosophy of German early childcare — essential knowledge for navigating the system.",
    readingTimeMinutes: 9,
    paragraphs: [
      { de: "Das deutsche Kita-System unterscheidet sich grundlegend von dem vieler anderer Länder. Zum einen gibt es seit 2013 einen Rechtsanspruch auf einen Betreuungsplatz ab dem ersten Lebensjahr. Das klingt großartig — in der Praxis bedeutet es jedoch nicht, dass man auch tatsächlich einen Platz in der Wunsch-Kita bekommt.", en: "The German Kita system differs fundamentally from that of many other countries. For one, since 2013 there has been a legal right to a childcare place from the age of one. That sounds great — in practice, however, it doesn't mean you'll actually get a place at your preferred Kita.", note: "'Rechtsanspruch' — legal entitlement. A key concept in German social policy." },
      { de: "Die Einrichtungen werden von unterschiedlichen Trägern betrieben: kommunale Kitas, kirchliche Träger, freie Träger wie der Paritätische oder die AWO, und Elterninitiativen. Jeder Träger hat ein eigenes pädagogisches Konzept — von Waldorf über Montessori bis hin zu situationsorientierten Ansätzen. Es lohnt sich, vor der Anmeldung mehrere Kitas zu besichtigen.", en: "The institutions are run by different providers: municipal Kitas, church-run providers, independent providers like the Paritätische or AWO, and parent-initiated Kitas. Each provider has its own pedagogical concept — from Waldorf to Montessori to situation-oriented approaches. It's worth visiting several Kitas before registering." },
      { de: "Die Kosten variieren je nach Bundesland, Einkommen und Träger erheblich. In manchen Städten, wie Berlin, ist die Kita seit 2019 beitragsfrei. In anderen Städten zahlt man je nach Einkommen zwischen 100 und 800 Euro monatlich. Hinzu kommt meist ein Verpflegungsbeitrag für das Mittagessen.", en: "Costs vary considerably depending on the federal state, income, and provider. In some cities, like Berlin, Kita has been fee-free since 2019. In other cities, you pay between 100 and 800 euros per month depending on income. On top of that, there's usually a meal contribution for lunch." },
      { de: "Was viele zugezogene Eltern nicht wissen: Die Kita ist in Deutschland nicht nur ein Betreuungsangebot, sondern ein Bildungsangebot. Der Bildungsauftrag der Kita ist gesetzlich verankert. Kinder sollen in ihrer sprachlichen, motorischen, sozialen und emotionalen Entwicklung gefördert werden. Das ist der Grund, warum die Eingewöhnung so ernst genommen wird und warum es regelmäßige Elterngespräche gibt — es geht nicht nur ums Aufpassen, sondern um eine ganzheitliche Förderung.", en: "What many newcomer parents don't know: Kita in Germany is not just a care provision, but an educational provision. The educational mandate of Kita is enshrined in law. Children are to be supported in their linguistic, motor, social, and emotional development. That's why the settling-in is taken so seriously and why there are regular parent-teacher meetings — it's not just about supervision, but about holistic development.", note: "'Ganzheitliche Förderung' — holistic development support. The philosophical underpinning of German early education." },
    ],
    questions: [
      { question: "Seit wann gibt es einen Rechtsanspruch auf einen Kita-Platz?", options: ["2008", "2010", "2013", "2019"], correctIndex: 2, explanationDe: "„Seit 2013 gibt es einen Rechtsanspruch.“", explanationEn: "'Since 2013 there has been a legal right.'" },
      { question: "Was ist der Bildungsauftrag der Kita?", options: ["Nur Betreuung", "Nur Sprachförderung", "Ganzheitliche Förderung", "Schulvorbereitung"], correctIndex: 2, explanationDe: "Kinder sollen ganzheitlich gefördert werden — sprachlich, motorisch, sozial und emotional.", explanationEn: "Children should be supported holistically — linguistically, physically, socially, and emotionally." },
    ],
    vocabIds: ["v148", "v149", "v150", "v155", "v157", "v153"],
  },

  {
    id: "r012",
    topic: "koerper",
    level: "C1",
    titleDe: "Die U-Untersuchungen — was Eltern wissen sollten",
    titleEn: "The U-checkups — what parents should know",
    intro: "A guide to the U1–U9 well-child checkup system — what happens, why it matters, and what to expect at each stage.",
    readingTimeMinutes: 8,
    paragraphs: [
      { de: "Die U-Untersuchungen sind ein zentraler Bestandteil der Kindergesundheitsvorsorge in Deutschland. Von der U1 direkt nach der Geburt bis zur U9 mit fünf Jahren begleiten insgesamt zehn Vorsorgeuntersuchungen die Entwicklung des Kindes. Sie sind kostenlos und werden dringend empfohlen — in einigen Bundesländern sind sie sogar verpflichtend.", en: "The U-checkups are a central component of child health prevention in Germany. From the U1 directly after birth to the U9 at age five, a total of ten preventive checkups accompany the child's development. They're free and strongly recommended — in some federal states, they're even mandatory." },
      { de: "Was die meisten Eltern verunsichert: Bei jeder U-Untersuchung wird die Entwicklung des Kindes mit Normwerten verglichen. Kann es schon krabbeln? Sagt es schon einzelne Wörter? Stapelt es Klötzchen? Wenn das eigene Kind in einem Bereich etwas langsamer ist, gerät man schnell in Panik. Die Kinderärzte betonen jedoch, dass die Entwicklung individuell verläuft und Abweichungen in den meisten Fällen harmlos sind.", en: "What unsettles most parents: at each U-checkup, the child's development is compared to norm values. Can they crawl yet? Do they say individual words yet? Do they stack blocks? When your own child is a bit slower in one area, you quickly start panicking. Pediatricians emphasize, however, that development is individual and deviations are harmless in most cases." },
      { de: "Besonders wichtig sind die U7 (mit zwei Jahren) und die U7a (mit drei Jahren), bei denen die Sprachentwicklung und das Sozialverhalten im Vordergrund stehen. Hier werden häufig Empfehlungen für Frühförderung, Logopädie oder Ergotherapie ausgesprochen. Das bedeutet nicht automatisch, dass etwas „falsch“ ist — es bedeutet, dass eine Abklärung sinnvoll sein könnte.", en: "Particularly important are the U7 (at age two) and U7a (at age three), which focus on language development and social behavior. This is where recommendations for early intervention, speech therapy, or occupational therapy are often made. That doesn't automatically mean something is 'wrong' — it means that an assessment might be worthwhile." },
      { de: "Ein praktischer Tipp: Bringen Sie das gelbe U-Heft zu jedem Termin mit. Ohne das Heft kann die Untersuchung nicht dokumentiert werden. Und notieren Sie sich vorher Ihre Fragen — im Sprechzimmer vergisst man leicht die Hälfte.", en: "A practical tip: bring the yellow U-booklet to every appointment. Without the booklet, the checkup can't be documented. And write down your questions beforehand — in the doctor's office, you easily forget half of them.", note: "The 'gelbes U-Heft' is the yellow booklet every child in Germany gets at birth. It documents all U-checkups and must be brought to every appointment." },
    ],
    questions: [
      { question: "Wie viele U-Untersuchungen gibt es insgesamt?", options: ["Fünf", "Sieben", "Neun", "Zehn"], correctIndex: 3, explanationDe: "„Insgesamt zehn Vorsorgeuntersuchungen.“", explanationEn: "'A total of ten preventive checkups.'" },
      { question: "Was steht bei der U7 im Vordergrund?", options: ["Gewicht und Größe", "Sprachentwicklung und Sozialverhalten", "Impfungen", "Zähne"], correctIndex: 1, explanationDe: "Bei der U7 stehen Sprachentwicklung und Sozialverhalten im Vordergrund.", explanationEn: "The U7 focuses on language development and social behavior." },
      { question: "Was muss man zum Termin mitbringen?", options: ["Die Krankenversicherungskarte", "Das gelbe U-Heft", "Den Impfpass", "Alle drei"], correctIndex: 1, explanationDe: "„Bringen Sie das gelbe U-Heft zu jedem Termin mit.“", explanationEn: "'Bring the yellow U-booklet to every appointment.'" },
    ],
    vocabIds: ["v167", "v168", "v170", "v150", "v092"],
  },

  {
    id: "r013",
    topic: "essen",
    level: "C1",
    titleDe: "Ernährung und Erziehung — warum Essen am Familientisch politisch ist",
    titleEn: "Food and parenting — why eating at the family table is political",
    intro: "How food choices become a parenting battlefield in Germany, and the cultural expectations around children's diets.",
    readingTimeMinutes: 8,
    paragraphs: [
      { de: "In wenigen Bereichen des Elternseins wird so viel beurteilt wie beim Essen. Gibt man dem Kind einen Schokoriegel, erntet man skeptische Blicke. Besteht man darauf, dass alles zuckerfrei und bio ist, gilt man als übertrieben. Als Eltern kann man es beim Thema Ernährung niemandem recht machen — am wenigsten dem Kind, das ohnehin nur Nudeln mit Butter essen will.", en: "In few areas of parenting is there as much judgment as around food. Give your child a chocolate bar and you get skeptical looks. Insist that everything is sugar-free and organic and you're considered excessive. As a parent, you can't please anyone when it comes to food — least of all the child, who only wants to eat pasta with butter anyway." },
      { de: "In der Kita wird das Thema noch komplexer. Die meisten Einrichtungen haben strenge Regeln für die Brotdose: kein Zucker, keine Süßigkeiten, idealerweise Vollkornbrot und Gemüse. Das ist pädagogisch nachvollziehbar, führt aber regelmäßig zu Konflikten. Ein Joghurt mit Erdbeergeschmack? „Zu viel Zucker.“ Ein Müsliriegel? „Das ist im Grunde eine Süßigkeit.“ Manche Eltern fühlen sich bevormundet.", en: "At Kita, the topic becomes even more complex. Most institutions have strict rules for the lunchbox: no sugar, no sweets, ideally whole grain bread and vegetables. That's pedagogically understandable, but regularly leads to conflicts. A strawberry-flavored yogurt? 'Too much sugar.' A granola bar? 'That's basically a sweet.' Some parents feel patronized.", note: "'Sich bevormundet fühlen' — to feel patronized/told what to do. A friction point between Kita rules and parental autonomy." },
      { de: "Was die Wissenschaft sagt: Kinder regulieren ihren Appetit in der Regel selbst, wenn man sie lässt. Druck — ob in Form von „Iss deinen Teller leer“ oder „Du darfst keinen Nachtisch, wenn du nicht aufisst“ — führt langfristig eher zu einem gestörten Essverhalten als zu einer gesunden Ernährung. Die Aufgabe der Eltern ist es, das Angebot zu gestalten. Was das Kind davon isst und wie viel, entscheidet es selbst.", en: "What science says: children generally regulate their own appetite if you let them. Pressure — whether in the form of 'Finish your plate' or 'No dessert if you don't finish' — leads in the long run more to disordered eating than to a healthy diet. The parents' job is to shape what's offered. What the child eats from it and how much, they decide themselves." },
      { de: "Der pragmatische Ansatz, der mir am meisten geholfen hat: Ich biete an, aber ich zwinge nicht. Wenn er die Gurke nicht will, esse ich sie. Wenn er dreimal hintereinander nur Brot isst, ist das okay. Und ja, manchmal gibt es auch Eis. Das Leben ist zu kurz für Machtkämpfe am Abendbrottisch.", en: "The pragmatic approach that has helped me the most: I offer, but I don't force. If he doesn't want the cucumber, I eat it. If he eats nothing but bread three times in a row, that's okay. And yes, sometimes there's ice cream too. Life is too short for power struggles at the dinner table." },
    ],
    questions: [
      { question: "Was sagt die Wissenschaft über Druck beim Essen?", options: ["Er hilft Kindern, gesund zu essen.", "Er führt langfristig eher zu gestörtem Essverhalten.", "Er ist in Maßen gut.", "Er ist nur bei Süßigkeiten ein Problem."], correctIndex: 1, explanationDe: "Druck führt langfristig eher zu einem gestörten Essverhalten.", explanationEn: "Pressure leads in the long run more to disordered eating." },
      { question: "Was ist die Aufgabe der Eltern laut dem Text?", options: ["Das Kind zum Essen zwingen.", "Das Angebot gestalten.", "Nur Bio-Essen kaufen.", "Süßigkeiten verbieten."], correctIndex: 1, explanationDe: "„Die Aufgabe der Eltern ist es, das Angebot zu gestalten.“", explanationEn: "'The parents' job is to shape what's offered.'" },
    ],
    vocabIds: ["v174", "v173", "v147"],
  },

  {
    id: "r014",
    topic: "kita",
    level: "C1",
    titleDe: "Mehrsprachige Erziehung — zwischen Förderung und Überforderung",
    titleEn: "Multilingual parenting — between support and overwhelm",
    intro: "Raising bilingual children in Germany — what the research says, what Kitas do, and what actually works.",
    readingTimeMinutes: 9,
    paragraphs: [
      { de: "Für Familien, in denen zu Hause eine andere Sprache als Deutsch gesprochen wird, stellt sich früher oder später die Frage: Wie gehen wir mit der Mehrsprachigkeit um? Die Antwort, die man von Pädagogen und Logopäden am häufigsten hört, lautet: „Jeder Elternteil spricht konsequent seine Sprache.“ Dieses Prinzip — One Person, One Language — ist in der Forschung gut belegt, aber in der Praxis nicht immer umsetzbar.", en: "For families where a language other than German is spoken at home, sooner or later the question arises: how do we handle multilingualism? The answer you hear most often from educators and speech therapists is: 'Each parent consistently speaks their language.' This principle — One Person, One Language — is well supported in research, but not always practical in real life." },
      { de: "In der Kita kann die Mehrsprachigkeit zu Missverständnissen führen. Manche Erzieherinnen interpretieren eine langsamere Sprachentwicklung auf Deutsch als Auffälligkeit, obwohl das Kind in seiner Erstsprache altersgerecht spricht. Die Forschung zeigt: Mehrsprachige Kinder mischen Sprachen — das ist kein Defizit, sondern eine kognitive Leistung. Sie lernen, zwischen Systemen zu wechseln, was langfristig ihre kognitiven Fähigkeiten stärkt.", en: "At Kita, multilingualism can lead to misunderstandings. Some educators interpret slower language development in German as an issue, even though the child speaks at age-appropriate levels in their first language. Research shows: multilingual children mix languages — that's not a deficit, but a cognitive achievement. They learn to switch between systems, which strengthens their cognitive abilities long-term." },
      { de: "Uns war es wichtig, dass die Sprachförderung in der Kita nicht nur auf Deutsch ausgerichtet ist, sondern auch die Erstsprache wertschätzt. Bei Leons Elterngespräch habe ich gesagt: „Uns wäre es wichtig, dass seine Erstsprache nicht als Hindernis gesehen wird, sondern als Ressource.“ Die Erzieherin war offen dafür — aber nicht alle Einrichtungen sind das.", en: "It was important to us that language support at Kita isn't only focused on German, but also values the first language. At Leon's parent-teacher meeting, I said: 'It would be important to us that his first language is not seen as an obstacle, but as a resource.' The educator was open to it — but not all institutions are." },
      { de: "Ein Rat, den ich von einer Logopädin bekommen habe: „Sprechen Sie mit Ihrem Kind in der Sprache, in der Sie sich am wohlsten fühlen. Eine emotional reiche Sprache ist wichtiger als die ‚richtige' Sprache.“ Das hat mir den Druck genommen.", en: "A piece of advice I got from a speech therapist: 'Speak with your child in the language you feel most comfortable in. An emotionally rich language is more important than the \"right\" language.' That took the pressure off." },
    ],
    questions: [
      { question: "Was ist das 'One Person, One Language'-Prinzip?", options: ["Kinder lernen nur eine Sprache.", "Jeder Elternteil spricht konsequent seine Sprache.", "In der Kita wird nur Deutsch gesprochen.", "Kinder sollen keine Sprachen mischen."], correctIndex: 1, explanationDe: "Jeder Elternteil spricht konsequent seine Sprache.", explanationEn: "Each parent consistently speaks their language." },
      { question: "Was sagt die Forschung über Sprachmischung bei Kindern?", options: ["Es ist ein Problem.", "Es ist ein kognitives Defizit.", "Es ist eine kognitive Leistung.", "Es muss behandelt werden."], correctIndex: 2, explanationDe: "Sprachmischung ist kein Defizit, sondern eine kognitive Leistung.", explanationEn: "Language mixing is not a deficit, but a cognitive achievement." },
      { question: "Was rät die Logopädin?", options: ["Nur Deutsch sprechen.", "Die Sprache sprechen, in der man sich am wohlsten fühlt.", "Kein Englisch zu Hause.", "Beide Sprachen strikt trennen."], correctIndex: 1, explanationDe: "Man soll in der Sprache sprechen, in der man sich am wohlsten fühlt.", explanationEn: "Speak in the language you feel most comfortable in." },
    ],
    vocabIds: ["v160", "v150", "v151", "v153"],
  },
];
