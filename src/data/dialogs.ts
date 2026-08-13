import type { Dialog } from "./types";

export const DIALOGS: Dialog[] = [
  // ═══════════════════════════════════════════════════════════════════
  // A2 — short, simple exchanges, present tense
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "d001",
    topic: "spielplatz",
    level: "A2",
    titleDe: "Auf dem Spielplatz",
    titleEn: "At the playground",
    situation: "You're sitting on a bench. Another parent sits down next to you with their child.",
    lines: [
      { speaker: "Du", de: "Hallo! Ist der Platz noch frei?", en: "Hello! Is this seat still free?" },
      { speaker: "Andere Mama", de: "Ja, klar! Setz dich.", en: "Yes, of course! Sit down." },
      { speaker: "Du", de: "Wie alt ist dein Kind?", en: "How old is your child?" },
      { speaker: "Andere Mama", de: "Er ist drei. Und deins?", en: "He's three. And yours?" },
      { speaker: "Du", de: "Meine ist auch drei!", en: "Mine is also three!" },
      { speaker: "Andere Mama", de: "Oh, toll! Willst du spielen?", en: "Oh, great! Do you want to play?", note: "She's asking your child, not you." },
    ],
    vocabIds: ["v001", "v010"],
  },

  {
    id: "d002",
    topic: "kita",
    level: "A2",
    titleDe: "Tschüss sagen",
    titleEn: "Saying goodbye",
    situation: "You're dropping your child off at Kita for the first time in the morning.",
    lines: [
      { speaker: "Du", de: "Guten Morgen!", en: "Good morning!" },
      { speaker: "Erzieherin", de: "Guten Morgen! Hallo, Max!", en: "Good morning! Hello, Max!" },
      { speaker: "Du", de: "Tschüss, mein Schatz. Bis nachher!", en: "Bye, sweetheart. See you later!" },
      { speaker: "Kind", de: "Mama, bleib hier!", en: "Mama, stay here!" },
      { speaker: "Du", de: "Ich komme dich nachher abholen. Hab einen schönen Tag!", en: "I'll come pick you up later. Have a nice day!" },
    ],
    vocabIds: ["v066"],
  },

  {
    id: "d003",
    topic: "essen",
    level: "A2",
    titleDe: "Snackpause auf dem Spielplatz",
    titleEn: "Snack break at the playground",
    situation: "Your child runs over to you, hungry after playing.",
    lines: [
      { speaker: "Kind", de: "Mama, ich habe Hunger!", en: "Mom, I'm hungry!" },
      { speaker: "Du", de: "Willst du einen Apfel oder eine Banane?", en: "Do you want an apple or a banana?" },
      { speaker: "Kind", de: "Banane!", en: "Banana!" },
      { speaker: "Du", de: "Hier. Willst du auch Wasser?", en: "Here. Do you want water too?" },
      { speaker: "Kind", de: "Ja, bitte.", en: "Yes, please." },
      { speaker: "Du", de: "Hände waschen nicht vergessen!", en: "Don't forget to wash your hands!", note: "You won't find a sink at the playground — parents carry wet wipes." },
    ],
    vocabIds: ["v024", "v022"],
  },

  {
    id: "d004",
    topic: "konflikte",
    level: "A2",
    titleDe: "Das ist meins!",
    titleEn: "That's mine!",
    situation: "Your child is fighting over a toy with another child at the sandbox.",
    lines: [
      { speaker: "Kind", de: "Das ist meine Schaufel!", en: "That's my shovel!" },
      { speaker: "Anderes Kind", de: "Nein, ich will die haben!", en: "No, I want it!" },
      { speaker: "Du", de: "Hey, wir teilen. Ihr könnt zusammen spielen.", en: "Hey, we share. You can play together." },
      { speaker: "Kind", de: "Aber ich hatte sie zuerst!", en: "But I had it first!" },
      { speaker: "Du", de: "Ich weiß. Aber teilen ist schön. Du bekommst sie gleich zurück.", en: "I know. But sharing is nice. You'll get it back in a moment." },
    ],
    vocabIds: ["v028", "v034"],
  },

  {
    id: "d005",
    topic: "koerper",
    level: "A2",
    titleDe: "Aua!",
    titleEn: "Ouch!",
    situation: "Your child falls at the playground and starts crying.",
    lines: [
      { speaker: "Kind", de: "Aua! Mama!", en: "Ouch! Mom!" },
      { speaker: "Du", de: "Was ist passiert? Zeig mal.", en: "What happened? Show me." },
      { speaker: "Kind", de: "Mein Knie tut weh!", en: "My knee hurts!" },
      { speaker: "Du", de: "Lass mal gucken. Das ist nur ein kleiner Kratzer.", en: "Let me see. That's just a small scratch." },
      { speaker: "Du", de: "Ich mache ein Pflaster drauf. Besser?", en: "I'll put a band-aid on it. Better?" },
      { speaker: "Kind", de: "Ja...", en: "Yes..." },
    ],
    vocabIds: ["v017", "v096"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // B1 — past tense, subordinate clauses, Kita-specific situations
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "d006",
    topic: "spielplatz",
    level: "B1",
    titleDe: "Nummern tauschen",
    titleEn: "Exchanging numbers",
    situation: "You've been chatting with another parent for a while. Your kids are playing well together.",
    lines: [
      { speaker: "Du", de: "Die verstehen sich ja super!", en: "They really get along well!" },
      { speaker: "Andere Mama", de: "Ja, total! Meiner fragt auch schon die ganze Zeit, ob sie sich nochmal treffen können.", en: "Yes, totally! Mine has been asking the whole time if they can meet again." },
      { speaker: "Du", de: "Wollen wir uns mal verabreden? Magst du mir deine Nummer geben?", en: "Shall we arrange to meet? Want to give me your number?" },
      { speaker: "Andere Mama", de: "Ja, gerne! Ich schick dir dann eine Nachricht.", en: "Yes, gladly! I'll send you a message then." },
      { speaker: "Du", de: "Passt euch vielleicht nächste Woche?", en: "Does next week work for you maybe?" },
      { speaker: "Andere Mama", de: "Ich guck mal und melde mich!", en: "I'll have a look and get back to you!", note: "'Sich melden' — to get in touch/get back to someone." },
    ],
    vocabIds: ["v086"],
  },

  {
    id: "d007",
    topic: "kita",
    level: "B1",
    titleDe: "Morgens beim Bringen",
    titleEn: "Morning drop-off",
    situation: "Your child had a bad night. You're explaining the situation to the Erzieher.",
    lines: [
      { speaker: "Du", de: "Guten Morgen. Er hat heute Nacht schlecht geschlafen, er ist vielleicht etwas quengelig.", en: "Good morning. He slept badly last night, he might be a bit whiny." },
      { speaker: "Erzieherin", de: "Danke für die Info. Hat er schon gefrühstückt?", en: "Thanks for the heads-up. Has he had breakfast already?" },
      { speaker: "Du", de: "Ja, er hat schon gegessen. Die Brotdose ist im Rucksack.", en: "Yes, he's already eaten. The lunchbox is in the backpack." },
      { speaker: "Erzieherin", de: "Alles klar. Und die Windeln?", en: "Got it. And the diapers?" },
      { speaker: "Du", de: "Die sind alle, ich bringe morgen neue mit.", en: "They're all gone, I'll bring more tomorrow." },
      { speaker: "Erzieherin", de: "Kein Problem. Ich hole welche aus dem Vorrat.", en: "No problem. I'll get some from the supplies.", note: "'Vorrat' — supply/stock. Kitas usually keep a backup." },
      { speaker: "Du", de: "Super, danke. Ich hole ihn heute gegen drei ab.", en: "Great, thanks. I'll pick him up around three today." },
    ],
    vocabIds: ["v056", "v025", "v066", "v080"],
  },

  {
    id: "d008",
    topic: "konflikte",
    level: "B1",
    titleDe: "Nach dem Schubsen",
    titleEn: "After the pushing",
    situation: "Your child pushed another child off a swing. The other parent comes over.",
    lines: [
      { speaker: "Andere Mama", de: "Entschuldigung, dein Sohn hat gerade meine Tochter geschubst.", en: "Excuse me, your son just pushed my daughter." },
      { speaker: "Du", de: "Oh, tut mir leid! Das war bestimmt keine Absicht. Max, komm mal her.", en: "Oh, I'm sorry! That surely wasn't on purpose. Max, come here." },
      { speaker: "Kind", de: "Aber ich wollte schaukeln!", en: "But I wanted to swing!" },
      { speaker: "Du", de: "Ich weiß, aber wir schubsen nicht. Kannst du dich entschuldigen?", en: "I know, but we don't push. Can you say sorry?" },
      { speaker: "Kind", de: "Entschuldigung...", en: "Sorry..." },
      { speaker: "Du", de: "Du musst warten, bis du dran bist. Frag mal, ob du auch mal darfst.", en: "You have to wait until it's your turn. Ask if you can have a go too." },
      { speaker: "Andere Mama", de: "Kein Problem, das passiert. Alles wieder gut?", en: "No problem, it happens. All better?" },
    ],
    vocabIds: ["v072", "v079", "v076"],
  },

  {
    id: "d009",
    topic: "verabredungen",
    level: "B1",
    titleDe: "Spieldate organisieren",
    titleEn: "Setting up a playdate",
    situation: "You're texting with another parent to arrange a playdate.",
    lines: [
      { speaker: "Du", de: "Hey! Passt es euch am Samstag zum Spielen?", en: "Hey! Does Saturday work for you to play?" },
      { speaker: "Andere Mama", de: "Ja, super! Bei uns oder bei euch?", en: "Yes, great! At ours or at yours?" },
      { speaker: "Du", de: "Kommt doch zu uns, wir haben einen Garten. Gegen drei?", en: "Come to ours, we have a garden. Around three?" },
      { speaker: "Andere Mama", de: "Gegen drei passt uns gut. Soll ich was zu essen mitbringen?", en: "Around three works well. Should I bring something to eat?" },
      { speaker: "Du", de: "Nicht nötig, ich hab genug Snacks da. Hat sie irgendwelche Allergien?", en: "Not necessary, I've got enough snacks. Does she have any allergies?" },
      { speaker: "Andere Mama", de: "Nein, alles gut. Sie isst alles!", en: "No, all good. She eats everything!" },
      { speaker: "Du", de: "Perfekt. Ich schick dir die Adresse per WhatsApp.", en: "Perfect. I'll send you the address via WhatsApp." },
    ],
    vocabIds: ["v086", "v088", "v113"],
  },

  {
    id: "d010",
    topic: "koerper",
    level: "B1",
    titleDe: "Tut es noch weh?",
    titleEn: "Does it still hurt?",
    situation: "Your child fell at the climbing frame and scraped their knee. Another parent helps.",
    lines: [
      { speaker: "Andere Mama", de: "Oh je, sie hat sich das Knie aufgeschürft!", en: "Oh no, she scraped her knee!" },
      { speaker: "Du", de: "Zeig mal, wo tut es weh? Ah, das ist nur ein kleiner Kratzer.", en: "Show me, where does it hurt? Ah, that's just a small scratch." },
      { speaker: "Kind", de: "Es tut weh!", en: "It hurts!" },
      { speaker: "Du", de: "Lass mich mal pusten, dann geht es gleich besser.", en: "Let me blow on it, then it'll feel better." },
      { speaker: "Andere Mama", de: "Hast du ein Pflaster dabei? Ich hab leider keins.", en: "Do you have a band-aid? I unfortunately don't." },
      { speaker: "Du", de: "Ja, warte kurz. So, Pflaster drauf. Alles wieder gut?", en: "Yes, wait a sec. There, band-aid on. All better?" },
      { speaker: "Kind", de: "Ja... kann ich weiter spielen?", en: "Yes... can I keep playing?" },
    ],
    vocabIds: ["v096", "v099", "v031"],
  },

  {
    id: "d011",
    topic: "essen",
    level: "B1",
    titleDe: "Allergie beim Spieldate",
    titleEn: "Allergy at a playdate",
    situation: "You're hosting a playdate and need to check about food before serving snacks.",
    lines: [
      { speaker: "Du", de: "Ich wollte Obst und Brezeln hinstellen. Verträgt er alles?", en: "I was going to put out fruit and pretzels. Can he have everything?" },
      { speaker: "Andere Mama", de: "Er hat eine Nussallergie. Also bitte keine Nüsse.", en: "He has a nut allergy. So no nuts please." },
      { speaker: "Du", de: "Alles klar, kein Problem. Und Milch?", en: "Got it, no problem. And milk?" },
      { speaker: "Andere Mama", de: "Milch verträgt er, nur Nüsse nicht.", en: "He can have milk, just not nuts." },
      { speaker: "Du", de: "Willst du Wasser oder Apfelschorle?", en: "Do you want water or apple spritzer?" },
      { speaker: "Andere Mama", de: "Apfelschorle wäre toll. Er ist übrigens ein bisschen wählerisch beim Essen — nicht wundern.", en: "Apple spritzer would be great. He's a bit picky with food by the way — don't be surprised.", note: "'Nicht wundern' — don't be surprised. Common conversational softener." },
    ],
    vocabIds: ["v113", "v112", "v114"],
  },

  {
    id: "d012",
    topic: "kita",
    level: "B1",
    titleDe: "Nachmittags beim Abholen",
    titleEn: "Afternoon pickup",
    situation: "You're picking up your child and checking in with the Erzieher about the day.",
    lines: [
      { speaker: "Du", de: "Hallo! Wie war der Tag?", en: "Hello! How was the day?" },
      { speaker: "Erzieherin", de: "Gut! Sie hat heute viel gebastelt und draußen im Sandkasten gespielt.", en: "Good! She did lots of crafts today and played outside in the sandbox." },
      { speaker: "Du", de: "Hat sie gut gegessen?", en: "Did she eat well?" },
      { speaker: "Erzieherin", de: "Ja, alles aufgegessen. Und sie hat anderthalb Stunden Mittagsschlaf gemacht.", en: "Yes, ate everything. And she had an hour and a half nap." },
      { speaker: "Du", de: "Super. Gab es irgendwelche Probleme?", en: "Great. Were there any problems?" },
      { speaker: "Erzieherin", de: "Nein, alles gut. Sie hat sich mit dem neuen Mädchen gut verstanden.", en: "No, all fine. She got along well with the new girl." },
      { speaker: "Du", de: "Das freut mich! Dann bis morgen.", en: "That makes me happy! See you tomorrow then." },
    ],
    vocabIds: ["v066", "v064", "v068"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // B2 — Konjunktiv, nuanced social dynamics, longer exchanges
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "d013",
    topic: "kita",
    level: "B2",
    titleDe: "Eingewöhnung besprechen",
    titleEn: "Discussing the settling-in",
    situation: "Your child has been at Kita for two weeks. You're checking in with the Bezugserzieherin about progress.",
    lines: [
      { speaker: "Du", de: "Ich wollte mal nachfragen, wie die Eingewöhnung läuft. Er tut sich noch schwer mit dem Abschied.", en: "I wanted to check in on how the settling-in is going. He still struggles with saying goodbye." },
      { speaker: "Erzieherin", de: "Ja, das merken wir auch. Aber sobald Sie weg sind, beruhigt er sich eigentlich schnell.", en: "Yes, we notice that too. But as soon as you leave, he calms down pretty quickly.", note: "The Erzieherin uses 'Sie' — formal register typical for new relationships." },
      { speaker: "Du", de: "Das ist gut zu hören. Uns ist aufgefallen, dass er zu Hause abends sehr unruhig ist, seitdem er in der Kita ist.", en: "That's good to hear. We've noticed that he's been very restless at home in the evenings since he started daycare." },
      { speaker: "Erzieherin", de: "Das ist ganz normal in der Eingewöhnungsphase. Er verarbeitet die vielen neuen Eindrücke.", en: "That's completely normal during the settling-in phase. He's processing all the new impressions.", note: "'Verarbeiten' — to process/digest (experiences). Common in German pedagogical language." },
      { speaker: "Du", de: "Mir liegt es am Herzen, dass er sich in der Gruppe wohlfühlt. Wer ist eigentlich seine Bezugserzieherin?", en: "It's important to me that he feels comfortable in the group. Who is actually his primary caregiver?" },
      { speaker: "Erzieherin", de: "Das bin ich. Ich bin seine feste Ansprechperson. Wenn Sie möchten, können wir nächste Woche ein kurzes Elterngespräch machen.", en: "That's me. I'm his designated contact person. If you'd like, we can have a short parent-teacher meeting next week." },
      { speaker: "Du", de: "Ja, das wäre toll. Wäre es möglich, dass wir das auf nachmittags legen?", en: "Yes, that would be great. Would it be possible to schedule it for the afternoon?" },
    ],
    vocabIds: ["v062", "v121", "v123", "v125"],
  },

  {
    id: "d014",
    topic: "konflikte",
    level: "B2",
    titleDe: "Schwieriges Gespräch unter Eltern",
    titleEn: "Difficult conversation between parents",
    situation: "Another child has been hitting yours repeatedly at the playground. You decide to address it with the parent.",
    lines: [
      { speaker: "Du", de: "Entschuldigung, ich möchte das nicht überbewerten, aber dein Sohn hat meinen jetzt schon zum dritten Mal gehauen.", en: "Excuse me, I don't want to make too much of it, but your son has hit mine for the third time now." },
      { speaker: "Anderer Papa", de: "Oh. Tut mir leid, das habe ich nicht mitbekommen.", en: "Oh. I'm sorry, I didn't notice." },
      { speaker: "Du", de: "Kein Vorwurf. Es fällt ihm wahrscheinlich noch schwer, seine Gefühle in Worte zu fassen. Das kennen wir auch.", en: "No accusation. He probably still finds it hard to put his feelings into words. We know that too." },
      { speaker: "Anderer Papa", de: "Ja, er ist gerade mitten in der Trotzphase. Es tut mir wirklich leid.", en: "Yes, he's right in the middle of the defiance phase. I'm really sorry." },
      { speaker: "Du", de: "Mir ist wichtig, dass mein Sohn lernt, Grenzen zu setzen, ohne aggressiv zu werden. Vielleicht können wir ihnen zeigen, wie man sich abwechselt?", en: "It's important to me that my son learns to set boundaries without getting aggressive. Maybe we can show them how to take turns?" },
      { speaker: "Anderer Papa", de: "Ja, gute Idee. Ich glaube, die beiden brauchen gerade etwas Abstand voneinander, und dann versuchen wir es nochmal.", en: "Yes, good idea. I think the two of them need a bit of distance from each other, and then we'll try again." },
    ],
    vocabIds: ["v132", "v134", "v131"],
  },

  {
    id: "d015",
    topic: "spielplatz",
    level: "B2",
    titleDe: "Anschluss finden",
    titleEn: "Finding your social circle",
    situation: "You recently moved to a new neighborhood. You're at the playground trying to connect with other parents.",
    lines: [
      { speaker: "Du", de: "Seid ihr öfter hier? Wir sind erst vor kurzem hergezogen und kennen noch niemanden.", en: "Do you come here often? We only moved here recently and don't know anyone yet." },
      { speaker: "Andere Mama", de: "Ja, wir sind fast jeden Nachmittag hier. Woher kommt ihr denn?", en: "Yes, we're here almost every afternoon. Where are you from?" },
      { speaker: "Du", de: "Aus England. Ich finde es echt schwierig, hier Anschluss zu finden.", en: "From England. I find it really hard to connect with people here." },
      { speaker: "Andere Mama", de: "Das kann ich mir vorstellen. Geht ihr schon in eine Krabbelgruppe? Da lernt man schnell andere Eltern kennen.", en: "I can imagine. Do you go to a baby group already? You get to know other parents quickly there." },
      { speaker: "Du", de: "Nein, noch nicht. Kannst du mir eine empfehlen?", en: "No, not yet. Can you recommend one?" },
      { speaker: "Andere Mama", de: "Ja, die in der Familienbildungsstätte ist super. Dienstags um zehn. Ich schick dir den Link.", en: "Yes, the one at the family education center is great. Tuesdays at ten. I'll send you the link.", note: "'Familienbildungsstätte' — family education center. Common in German cities, offers parenting courses and baby groups." },
      { speaker: "Du", de: "Das wäre toll, danke! Es wäre schön, wenn wir uns öfter hier treffen würden.", en: "That would be great, thanks! It'd be nice if we met here more often." },
    ],
    vocabIds: ["v119", "v129"],
  },

  {
    id: "d016",
    topic: "koerper",
    level: "B2",
    titleDe: "Krank — Kita ja oder nein?",
    titleEn: "Sick — Kita or not?",
    situation: "Your child has a runny nose but no fever. You're on the phone with the Kita deciding whether to bring them.",
    lines: [
      { speaker: "Du", de: "Hallo, ich wollte fragen — sie hat Schnupfen, aber kein Fieber. Darf sie trotzdem kommen?", en: "Hello, I wanted to ask — she has a runny nose but no fever. Can she still come?" },
      { speaker: "Erzieherin", de: "Solange sie kein Fieber hat und es ihr gut geht, ist das kein Problem.", en: "As long as she doesn't have a fever and she's feeling fine, that's no problem." },
      { speaker: "Du", de: "Ich bin mir nicht sicher, ob das ansteckend ist. Sie hat letzte Nacht auch ein bisschen gehustet.", en: "I'm not sure whether it's contagious. She also coughed a bit last night." },
      { speaker: "Erzieherin", de: "Wenn es nur ein leichter Schnupfen ist, darf sie kommen. Wenn sich der Husten verschlechtert, rufen wir Sie an.", en: "If it's just a light cold, she can come. If the cough gets worse, we'll call you." },
      { speaker: "Du", de: "In Ordnung. Sicherheitshalber gebe ich Taschentücher mit. Danke!", en: "Alright. Just to be safe, I'll pack tissues. Thanks!", note: "'Sicherheitshalber' — just to be on the safe side. Useful cautious-parent word." },
    ],
    vocabIds: ["v094", "v138", "v135"],
  },

  {
    id: "d017",
    topic: "essen",
    level: "B2",
    titleDe: "Machtkampf ums Essen",
    titleEn: "Food power struggle",
    situation: "You're talking to another parent at a playdate about picky eating.",
    lines: [
      { speaker: "Andere Mama", de: "Er würde am liebsten den ganzen Tag nur Nudeln essen, wenn man ihn ließe.", en: "He'd eat nothing but pasta all day if you let him." },
      { speaker: "Du", de: "Das kenne ich. Wir versuchen, den Zuckerkonsum einzuschränken, auch wenn es nicht immer einfach ist.", en: "I know the feeling. We try to limit sugar intake, even though it's not always easy." },
      { speaker: "Andere Mama", de: "Ja, und wenn es mit dem Essen zu einem Machtkampf kommt, wird es richtig anstrengend.", en: "Yes, and when eating becomes a power struggle, it gets really exhausting." },
      { speaker: "Du", de: "Unser Kinderarzt meinte, man soll keinen Druck ausüben. Er isst, wenn er Hunger hat.", en: "Our pediatrician said you shouldn't apply pressure. He eats when he's hungry." },
      { speaker: "Andere Mama", de: "Das stimmt. Wir achten darauf, dass er sich ausgewogen ernährt, aber zwingen tun wir ihn nicht.", en: "That's true. We make sure he eats balanced, but we don't force him." },
      { speaker: "Du", de: "Falls er das Essen nicht anrührt, macht euch keine Sorgen. Er regelt das schon.", en: "If he doesn't touch the food, don't worry. He'll sort it out." },
    ],
    vocabIds: ["v174", "v147", "v173"],
  },

  {
    id: "d018",
    topic: "verabredungen",
    level: "B2",
    titleDe: "Übernachtung planen",
    titleEn: "Planning a sleepover",
    situation: "Your child's best friend's parent is suggesting a sleepover for the first time.",
    lines: [
      { speaker: "Andere Mama", de: "Die Kinder spielen so gut zusammen. Es wäre schade, wenn wir das nicht regelmäßig machen.", en: "The kids play so well together. It'd be a shame if we didn't do this regularly." },
      { speaker: "Du", de: "Ja, total. Er hat sich so gefreut, dass er kommen darf.", en: "Yes, totally. He was so excited that he can come." },
      { speaker: "Andere Mama", de: "Was hältst du davon, wenn die Kinder mal bei uns übernachten?", en: "What do you think about the kids sleeping over at ours?" },
      { speaker: "Du", de: "Ich hätte nichts dagegen, aber ich bin mir unsicher, ob er schon so weit ist.", en: "I wouldn't mind, but I'm not sure if he's ready yet." },
      { speaker: "Andere Mama", de: "Wir könnten es ja mal ausprobieren. Falls es zu viel wird, rufst du mich einfach an und holst ihn ab.", en: "We could try it out. If it gets too much, you just call me and pick him up." },
      { speaker: "Du", de: "Das klingt gut. Ruf mich an, falls irgendwas ist. Er braucht sein Kuscheltier zum Einschlafen.", en: "That sounds good. Call me if anything comes up. He needs his cuddly toy to fall asleep." },
    ],
    vocabIds: ["v090", "v055"],
  },

  // ═══════════════════════════════════════════════════════════════════
  // C1 — formal register, bureaucratic, pedagogical vocabulary
  // ═══════════════════════════════════════════════════════════════════

  {
    id: "d019",
    topic: "kita",
    level: "C1",
    titleDe: "Elterngespräch über die Entwicklung",
    titleEn: "Parent-teacher meeting about development",
    situation: "You have a scheduled meeting with the Bezugserzieherin to discuss your child's development. Formal register.",
    lines: [
      { speaker: "Erzieherin", de: "Vielen Dank, dass Sie sich die Zeit genommen haben. Ich möchte mit Ihnen über Leons sozial-emotionale Entwicklung sprechen.", en: "Thank you for taking the time. I'd like to talk with you about Leon's social-emotional development.", note: "Formal 'Sie' throughout — this is an official meeting." },
      { speaker: "Du", de: "Gerne. Ich habe den Eindruck, dass er in letzter Zeit etwas unterfordert ist. Gibt es Möglichkeiten, ihn stärker zu fördern?", en: "Of course. I have the impression that he's been a bit under-challenged lately. Are there ways to support his development more?" },
      { speaker: "Erzieherin", de: "Das haben wir auch bemerkt. Er zeigt großes Interesse an Zahlen und Buchstaben. Wir könnten ihn in die Vorschulgruppe einbeziehen, obwohl er altersmäßig noch nicht dran wäre.", en: "We've noticed that too. He shows great interest in numbers and letters. We could include him in the preschool group, even though age-wise it wouldn't be his turn yet." },
      { speaker: "Du", de: "Das wäre toll. Uns wäre es auch wichtig, dass die Sprachförderung nicht nur auf Deutsch, sondern auch auf seine Erstsprache eingeht.", en: "That would be great. It would also be important to us that language support addresses not only German but also his first language." },
      { speaker: "Erzieherin", de: "Da bin ich ganz bei Ihnen. Inwiefern wird zu Hause die Erstsprache gefördert?", en: "I completely agree with you there. In what way is the first language supported at home?" },
      { speaker: "Du", de: "Wir sprechen zu Hause Englisch, und er bekommt englische Bücher vorgelesen. Könnten wir einen regelmäßigen Termin vereinbaren, um über seine Fortschritte zu sprechen?", en: "We speak English at home and he gets read English books. Could we schedule a regular appointment to discuss his progress?" },
      { speaker: "Erzieherin", de: "Selbstverständlich. Ich schlage vor, dass wir uns einmal im Quartal zusammensetzen.", en: "Of course. I suggest we sit down once a quarter." },
    ],
    vocabIds: ["v150", "v160", "v158", "v166"],
  },

  {
    id: "d020",
    topic: "kita",
    level: "C1",
    titleDe: "Kita-Gutschein beantragen",
    titleEn: "Applying for a daycare voucher",
    situation: "You're asking the Kita administration about the Kita-Gutschein application process.",
    lines: [
      { speaker: "Du", de: "Wir sind gerade dabei, den Antrag auf einen Kita-Gutschein zu stellen. Können Sie uns sagen, welche Unterlagen wir brauchen?", en: "We're currently applying for a daycare voucher. Can you tell us what documents we need?", note: "'Unterlagen' — documents/paperwork. Essential bureaucratic German." },
      { speaker: "Verwaltung", de: "Sie brauchen eine Einkommensbescheinigung, den Meldenachweis und den Arbeitsvertrag oder eine Immatrikulationsbescheinigung.", en: "You need proof of income, proof of registration, and your employment contract or enrollment certificate." },
      { speaker: "Du", de: "Wie lange dauert die Bearbeitung in der Regel?", en: "How long does processing usually take?" },
      { speaker: "Verwaltung", de: "In der Regel vier bis sechs Wochen. Der Gutschein wird dann rückwirkend ab dem Betreuungsbeginn ausgestellt.", en: "Usually four to six weeks. The voucher is then issued retroactively from the start of care.", note: "'Rückwirkend' — retroactively. A key word in German bureaucracy." },
      { speaker: "Du", de: "Und wie verhält es sich mit dem Betreuungsschlüssel in Ihrer Einrichtung?", en: "And what is the staff-to-child ratio like in your institution?" },
      { speaker: "Verwaltung", de: "Wir haben einen Betreuungsschlüssel von eins zu fünf in der Krippe und eins zu acht im Kindergartenbereich.", en: "We have a ratio of one to five in the nursery and one to eight in the kindergarten section." },
    ],
    vocabIds: ["v152", "v149", "v148"],
  },

  {
    id: "d021",
    topic: "konflikte",
    level: "C1",
    titleDe: "Beschwerde beim Elternabend",
    titleEn: "Raising a concern at parents' evening",
    situation: "At the Elternabend, you raise a concern about recurring conflicts that aren't being addressed.",
    lines: [
      { speaker: "Du", de: "Ich möchte ein Thema ansprechen, das mir schon länger auf dem Herzen liegt. Ich finde es bedenklich, dass bestimmte Konflikte zwischen den Kindern immer wieder vorkommen, ohne dass darauf eingegangen wird.", en: "I'd like to raise a topic that's been on my mind for a while. I find it concerning that certain conflicts between the children keep occurring without being addressed." },
      { speaker: "Erzieherin", de: "Können Sie das konkretisieren?", en: "Can you be more specific?", note: "'Konkretisieren' — to make concrete/specify. Formal meeting language." },
      { speaker: "Du", de: "Es liegt mir fern, jemandem die Schuld zuzuweisen, aber mein Sohn kommt regelmäßig nach Hause und erzählt, dass er geschubst oder gehauen wird.", en: "It's far from my intention to assign blame, but my son regularly comes home and says he's being pushed or hit." },
      { speaker: "Erzieherin", de: "Das nehmen wir sehr ernst. Wir werden das im Team besprechen und gezielte Maßnahmen ergreifen.", en: "We take that very seriously. We'll discuss it in the team and take targeted measures.", note: "'Gezielte Maßnahmen ergreifen' — to take targeted measures. Very formal/institutional." },
      { speaker: "Du", de: "Mir wäre daran gelegen, dass wir das nicht unter den Tisch fallen lassen. Könnten wir in zwei Wochen nochmal darauf zurückkommen?", en: "I would appreciate it if we didn't sweep this under the carpet. Could we come back to this in two weeks?" },
      { speaker: "Erzieherin", de: "Selbstverständlich. Ich schlage vor, dass wir das als festen Punkt auf die Agenda des nächsten Elternabends setzen.", en: "Of course. I suggest we put this as a fixed item on the agenda for the next parents' evening." },
    ],
    vocabIds: ["v164", "v163", "v165"],
  },

  {
    id: "d022",
    topic: "koerper",
    level: "C1",
    titleDe: "Beim Kinderarzt — Entwicklungsgespräch",
    titleEn: "At the pediatrician — developmental discussion",
    situation: "The pediatrician has raised the possibility of an occupational therapy assessment for your child.",
    lines: [
      { speaker: "Kinderärztin", de: "Bei der U7 ist mir aufgefallen, dass Leon in der Feinmotorik etwas hinter der Altersgruppe liegt.", en: "During the U7 checkup, I noticed that Leon is a bit behind his age group in fine motor skills.", note: "'U7' — the well-child checkup at age 2. Part of the U1-U9 series." },
      { speaker: "Du", de: "Das hat die Erzieherin auch angedeutet. Woran merken Sie das konkret?", en: "The daycare educator hinted at that too. What specifically makes you notice that?" },
      { speaker: "Kinderärztin", de: "Beim Malen und beim Stapeln von Klötzchen zeigt er Unsicherheiten, die in dem Alter normalerweise nicht mehr auftreten.", en: "When drawing and stacking blocks, he shows uncertainties that normally no longer occur at this age." },
      { speaker: "Du", de: "Ich würde gern wissen, ob es sich lohnen könnte, eine ergotherapeutische Abklärung in Betracht zu ziehen.", en: "I'd like to know whether it might be worth considering an occupational therapy assessment." },
      { speaker: "Kinderärztin", de: "Genau das wollte ich Ihnen vorschlagen. Laut den Befunden handelt es sich wahrscheinlich um eine leichte Entwicklungsverzögerung, die sich mit Ergotherapie gut aufholen lässt.", en: "That's exactly what I was going to suggest. Based on the findings, it's probably a mild developmental delay that can be caught up well with occupational therapy.", note: "'Entwicklungsverzögerung' — developmental delay. 'Aufholen' — to catch up." },
      { speaker: "Du", de: "Wie gehen wir jetzt am besten vor? Brauchen wir eine Überweisung?", en: "What's the best way to proceed now? Do we need a referral?" },
      { speaker: "Kinderärztin", de: "Ja, ich stelle Ihnen eine Verordnung aus. Sie können sich dann direkt an eine ergotherapeutische Praxis wenden.", en: "Yes, I'll issue you a prescription. You can then contact an occupational therapy practice directly." },
    ],
    vocabIds: ["v167", "v168", "v170", "v172"],
  },

  {
    id: "d023",
    topic: "spielplatz",
    level: "C1",
    titleDe: "Überbehütung und Loslassen",
    titleEn: "Overprotecting and letting go",
    situation: "You're having a deeper conversation with a parent friend about parenting styles while watching the kids at the playground.",
    lines: [
      { speaker: "Andere Mama", de: "Schau mal, meiner klettert schon ganz oben. Mir wird jedes Mal schlecht, wenn ich das sehe.", en: "Look, mine is climbing right at the top. I feel sick every time I see it." },
      { speaker: "Du", de: "Ich tue mich manchmal schwer damit, die Balance zwischen Überbehütung und Loslassen zu finden.", en: "I sometimes struggle to find the balance between overprotecting and letting go." },
      { speaker: "Andere Mama", de: "Was mich an dieser Gegend anspricht, ist, dass es so viele naturnahe Spielplätze gibt. Die Kinder können hier richtig Risiken eingehen.", en: "What appeals to me about this area is that there are so many nature-focused playgrounds. The kids can really take risks here." },
      { speaker: "Du", de: "Ja, aber inwiefern unterscheidet sich der Ansatz hier von dem, was du aus deiner Kindheit kennst?", en: "Yes, but in what way does the approach here differ from what you know from your own childhood?" },
      { speaker: "Andere Mama", de: "Ich finde, in Deutschland wird viel Wert darauf gelegt, dass Kinder selbstständig Erfahrungen machen. Manchmal muss man einfach loslassen.", en: "I think in Germany a lot of value is placed on children having independent experiences. Sometimes you just have to let go.", note: "'Selbstständig Erfahrungen machen' — to have experiences independently. A core principle in German pedagogy." },
      { speaker: "Du", de: "Stimmt. Und solange sie sich nicht ernsthaft verletzen, lernen sie dabei am meisten.", en: "True. And as long as they don't seriously injure themselves, they learn the most from it." },
    ],
    vocabIds: ["v119", "v118"],
  },

  {
    id: "d024",
    topic: "verabredungen",
    level: "C1",
    titleDe: "Kindergeburtstag planen",
    titleEn: "Planning a children's birthday party",
    situation: "You're organizing your child's birthday and discussing logistics with another parent who is helping.",
    lines: [
      { speaker: "Du", de: "Vorausgesetzt, dass das Wetter mitspielt, könnten wir die Party im Garten machen. Sonst müssten wir drinnen umplanen.", en: "Provided the weather cooperates, we could have the party in the garden. Otherwise we'd have to reorganize indoors." },
      { speaker: "Andere Mama", de: "Wie viele Kinder hast du eingeladen?", en: "How many kids have you invited?" },
      { speaker: "Du", de: "Acht. Uns wäre es am liebsten, wenn wir das möglichst ungezwungen halten — die Kinder sollen einfach spielen können.", en: "Eight. We'd prefer to keep it as relaxed as possible — the kids should just be able to play." },
      { speaker: "Andere Mama", de: "Gute Idee. Hast du an die Allergien gedacht? Die Kleine von Familie Schmidt hat eine Laktoseunverträglichkeit.", en: "Good idea. Have you thought about allergies? The Schmidts' daughter has lactose intolerance." },
      { speaker: "Du", de: "Ja, ich frage bei allen Eltern nochmal nach. Ich möchte nicht, dass es irgendwelche Zwischenfälle gibt.", en: "Yes, I'll check again with all the parents. I don't want any incidents.", note: "'Zwischenfälle' — incidents. Slightly formal but commonly used by careful parents." },
      { speaker: "Andere Mama", de: "Soll ich den Kuchen übernehmen? Dann kannst du dich um die Spiele kümmern.", en: "Shall I take care of the cake? Then you can deal with the games." },
      { speaker: "Du", de: "Das wäre eine riesige Hilfe. Ich schick dir die Allergieliste, damit du Bescheid weißt.", en: "That would be a huge help. I'll send you the allergy list so you're informed." },
    ],
    vocabIds: ["v177", "v176", "v068", "v144"],
  },
];
