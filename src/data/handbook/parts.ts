export interface Part {
  /** part number, 1-10 */
  number: number;
  /** short label above the title */
  kicker: string;
  title: string;
  /** the promise: what the reader gets out of this part */
  promise: string;
  /** deeper explanation of the topic, plain language */
  explainer: string;
  /** image key resolved by the PDF generator */
  image: string;
  /** what is covered, as bullet points */
  covered: string[];
  /** chapter numbers that belong to this part */
  chapters: number[];
}

export const parts: Part[] = [
  {
    number: 1,
    kicker: "NUTRITIONAL NEEDS BY AGE",
    title: "Exactly what your baby needs, at every stage",
    promise:
      "The precise nutrients your baby needs at each stage - 6 months, 9 months, 12 months and beyond - so you never again wonder whether what you are feeding truly meets what their body is asking for.",
    explainer:
      "A baby's nutritional needs change faster in the first two years than at any other point in life. Milk covers almost everything at six months and almost nothing by two years. This part gives you the real numbers behind that transition: energy, protein, iron, fat and fluid, broken down age by age, so every decision you make at the table is grounded in what your baby's body is actually doing right now.",
    image: "needs",
    covered: [
      "Energy, protein and fat targets from 6 to 24 months",
      "How much of the diet milk should still cover at each stage",
      "The nutrients that quietly run short after 6 months",
      "Reading growth as a curve instead of a single number",
    ],
    chapters: [1, 20],
  },
  {
    number: 2,
    kicker: "BUILDING A BALANCED PLATE",
    title: "A repeatable method for every single meal",
    promise:
      "A simple, repeatable method for combining protein, carbohydrate, fat and micronutrients in every meal - so balance becomes automatic instead of a daily puzzle.",
    explainer:
      "Balance is not about perfect meals; it is about a reliable pattern you can repeat when you are tired, rushed or out of ideas. This part turns nutrition theory into a visual formula you can build in ninety seconds, plus the daily rhythm and batch-cooking system that keeps that formula realistic across a whole week.",
    image: "plate",
    covered: [
      "The four-component plate formula and how to build it fast",
      "Portion architecture: what each component looks like on the tray",
      "Hour-by-hour feeding rhythms from 6 to 24 months",
      "Ninety-minute batch cooking, safe storage and reheating",
    ],
    chapters: [2, 15, 16],
  },
  {
    number: 3,
    kicker: "THE VITAMINS AND MINERALS THAT MATTER MOST",
    title: "The nutrients babies actually run short on",
    promise:
      "Which nutrients most commonly fall short in a baby's diet - iron, zinc, vitamin D and more - and simple, everyday ways to make sure yours is getting what they need.",
    explainer:
      "Only a handful of nutrients genuinely go missing in modern infant diets, and they are the same ones every time. This part explains what each one does, how much is needed, which foods deliver it in a form a baby can absorb, and the pairings that double absorption at no extra cost or effort.",
    image: "vitamins",
    covered: [
      "Iron, zinc, vitamin D, calcium, omega-3 and iodine explained",
      "Heme vs non-heme iron and the vitamin C pairing rule",
      "Absorption blockers that quietly cancel out good food",
      "When a supplement is genuinely needed, and when it is not",
    ],
    chapters: [3],
  },
  {
    number: 4,
    kicker: "THE RIGHT AMOUNT BY AGE",
    title: "How much to serve, with no more guessing",
    promise:
      "Exactly how much to serve - so you stop wondering whether you are overfeeding, underfeeding or throwing away food out of pure uncertainty.",
    explainer:
      "Babies are far better at regulating intake than adults are, but only when the amount offered is sane and the pressure is off. This part gives you realistic serving sizes for every age and food group, teaches you to read fullness and hunger cues accurately, and shows you how to handle the refusals and appetite dips that are completely normal.",
    image: "portions",
    covered: [
      "Serving sizes by age, food group and meal",
      "Hunger and fullness cues, and how to respond to each",
      "Why appetite swings and toddler slowdowns are expected",
      "Refusal, fussiness and rebuilding a calm table",
    ],
    chapters: [4, 14],
  },
  {
    number: 5,
    kicker: "INTRODUCING PROTEIN SAFELY",
    title: "Meat, eggs, fish and legumes without fear",
    promise:
      "A clear, step-by-step approach to adding meat, eggs, legumes and other proteins at the right moment for a still-developing digestive system.",
    explainer:
      "Protein foods are where most parents hesitate longest, and where the biggest nutritional wins are hiding. This part covers the safe order, texture and quantity for every protein source, then handles the topic that sits right beside it: allergens, why early introduction protects rather than endangers, and exactly how to introduce each one.",
    image: "protein",
    covered: [
      "Meat, poultry, fish, eggs, dairy and legumes step by step",
      "Textures that make protein safe and easy to eat",
      "The nine major allergens and the early-introduction protocol",
      "Recognising a reaction and knowing what to do next",
    ],
    chapters: [5, 11],
  },
  {
    number: 6,
    kicker: "HOW AND WHEN TO OFFER WATER",
    title: "Hydration that supports milk, not competes with it",
    promise:
      "The exact age and method for safely introducing water, without interfering with milk intake or throwing off your baby's hydration balance.",
    explainer:
      "Water is the simplest topic in infant feeding and the one with the most contradictory advice. This part gives you the amounts, the cups, the timing and the drinks to skip entirely - and then covers the digestive questions that hydration sits behind: constipation, reflux and gas.",
    image: "water",
    covered: [
      "How much water at each age, and which cup to use",
      "Drinks to avoid completely in the first two years",
      "Signs of dehydration and of too much fluid",
      "Constipation, reflux and gas: reading the gut's signals",
    ],
    chapters: [6, 19],
  },
  {
    number: 7,
    kicker: "WHEN TO INTRODUCE EACH FOOD",
    title: "A complete first-foods timeline",
    promise:
      "A complete timeline showing exactly which foods to introduce and when - removing all the uncertainty from your feeding calendar.",
    explainer:
      "This is the reference chapter you will come back to most. Every major food, mapped to the month it can safely appear, in the texture it should appear in - plus how the introduction method you choose changes the plan, and how to read a jar or pouch when you are buying instead of cooking.",
    image: "timeline",
    covered: [
      "A month-by-month map of every major food group",
      "First foods, second foods and family food",
      "Baby-led weaning, spoon feeding and combining both",
      "Reading labels and choosing store-bought food well",
    ],
    chapters: [7, 13, 17],
  },
  {
    number: 8,
    kicker: "FOODS TO AVOID AND WHY",
    title: "The complete safety list, with the reasoning",
    promise:
      "A clear list of foods that look harmless but should be avoided at this stage, and the specific risk behind each one.",
    explainer:
      "Rules you understand are rules you actually follow. This part lists every food to hold back in the first two years and explains precisely why - choking geometry, botulism risk, sodium load, nitrates - then teaches you to modify food shapes safely and respond correctly if something goes wrong.",
    image: "avoid",
    covered: [
      "Honey, salt, sugar, whole nuts, cow's milk and more",
      "Choking hazards and how to reshape food safely",
      "Gagging vs choking: telling them apart in real time",
      "Feeding through illness, teething and low appetite days",
    ],
    chapters: [8, 12, 18],
  },
  {
    number: 9,
    kicker: "SPOTTING SIGNS OF READINESS",
    title: "Let your baby tell you when it is time",
    promise:
      "Learn to read your baby's own signals - so you introduce new foods and textures exactly when their body, not a generic chart, says they are ready.",
    explainer:
      "Readiness is physical, and it is visible. This part shows you the developmental markers that mean a baby can safely swallow solid food, the false signals that fool almost every parent, and how to run a calm, successful first meal once the real signs are there.",
    image: "readiness",
    covered: [
      "The four core readiness signs and how to check each one",
      "False signals that look like readiness but are not",
      "Preterm babies and adjusted age",
      "How to run the first meal, and what to expect from it",
    ],
    chapters: [9],
  },
  {
    number: 10,
    kicker: "MYTHS AND TRUTHS",
    title: "Everything you were told that is simply not true",
    promise:
      "We dismantle the most common - and most repeated - feeding myths, the ones even well-meaning family members and older guides still pass along.",
    explainer:
      "Most feeding anxiety does not come from your baby. It comes from contradictory advice delivered with total confidence. This part takes the myths one by one, explains where each came from, and replaces it with what the evidence actually says - then hands you every table and checklist in the book in one place.",
    image: "myths",
    covered: [
      "40+ myths examined and answered plainly",
      "Where each piece of outdated advice originally came from",
      "How to respond to unsolicited advice without conflict",
      "The Quick Reference Toolkit: every chart in one place",
    ],
    chapters: [10, 25],
  },
];
