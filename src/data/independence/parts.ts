export interface Part {
  number: number;
  kicker: string;
  title: string;
  promise: string;
  explainer: string;
  covered: string[];
  image: string;
  chapters: number[];
}

export const independenceParts: Part[] = [
  {
    number: 1,
    kicker: "The Foundation",
    title: "Why Independent Eating Changes Everything",
    promise:
      "Understand what self-feeding really builds — and why the messy months are the most valuable ones.",
    explainer:
      "Before you change a single thing about mealtimes, it helps to know what you are actually growing. Self-feeding is not a convenience trick for tired parents. It is oral-motor development, hand-eye coordination, appetite regulation and food acceptance, all trained at the same table. This part gives you the evidence and the mindset that makes every later step obvious.",
    covered: [
      "What independent eating develops physically, cognitively and emotionally",
      "The research behind responsive, baby-led approaches",
      "The exact readiness signs that say your baby is ready to lead",
      "How to set expectations for the first four weeks",
    ],
    image: "foundation",
    chapters: [1, 2],
  },
  {
    number: 2,
    kicker: "The Setup",
    title: "The Chair, the Tools and the Table",
    promise:
      "Get the environment right once, and your baby's hands do the rest without you hovering.",
    explainer:
      "Most self-feeding struggles are posture and equipment problems in disguise. A baby who is sliding, unsupported or seated too low cannot use their hands well and cannot swallow safely. This part walks through seating, foot support, plates, spoons, cups and the tiny environmental changes that turn a chaotic meal into a calm one.",
    covered: [
      "How to check high chair fit: hips, feet, tray height and posture",
      "Which utensils, plates and cups actually help — and which slow progress",
      "Open cups, straw cups and how to teach both",
      "Building a mealtime routine your baby can predict",
    ],
    image: "setup",
    chapters: [3, 4],
  },
  {
    number: 3,
    kicker: "The Skills",
    title: "From Fistfuls to Pincer Grasp",
    promise:
      "A clear skill ladder so you always know what to offer next, and what size and shape it should be.",
    explainer:
      "Independent eating is a sequence of motor skills that arrive in a predictable order. When food shape matches the current grasp, babies succeed. When it does not, they get frustrated and you get blamed. This part maps every stage from raking to neat pincer, with the exact food sizes, textures and pre-loading techniques for each.",
    covered: [
      "The grasp progression month by month and the foods that match it",
      "Finger-food shapes, sizes and textures that are safe and graspable",
      "Teaching spoon, fork and pre-loading without taking over",
      "Chewing, tongue lateralisation and moving beyond purees",
    ],
    image: "skills",
    chapters: [5, 6],
  },
  {
    number: 4,
    kicker: "The Safety",
    title: "Confident, Not Fearful",
    promise:
      "Know exactly what is normal, what is not, and precisely what to do in the rare moment it matters.",
    explainer:
      "Fear is the single biggest reason parents take the spoon back. Almost all of that fear comes from confusing gagging with choking. This part gives you the physiology, the visual differences, the hard list of unsafe foods, correct food modification, and step-by-step response protocols — plus how to introduce allergens safely while your baby self-feeds.",
    covered: [
      "Gagging vs choking: how to tell them apart in real time",
      "The complete choking-risk food list and how to modify each one",
      "Infant choking response, step by step",
      "Introducing the common allergens safely and on schedule",
    ],
    image: "safety",
    chapters: [7, 8],
  },
  {
    number: 5,
    kicker: "The Dynamic",
    title: "Who Decides What at the Table",
    promise:
      "End the negotiation, the airplane spoon and the bargaining — with one boundary that holds for years.",
    explainer:
      "Independence is as much relational as it is physical. This part covers responsive feeding, the division of responsibility, and every hard behaviour that shows up along the way: throwing, refusing, playing, grazing, and the normal appetite drop that scares parents at twelve months.",
    covered: [
      "The division of responsibility and how to apply it daily",
      "Pressure, praise and bribes: why they backfire and what to say instead",
      "Throwing, refusal, spitting and food play decoded",
      "Neophobia, picky phases and the 15-exposure rule",
    ],
    image: "mealtime",
    chapters: [9, 10],
  },
  {
    number: 6,
    kicker: "The Plan",
    title: "Your 90-Day Independence Roadmap",
    promise:
      "A week-by-week plan that takes your baby from first grasp to eating the family meal alone.",
    explainer:
      "Everything in this book, sequenced. Twelve weeks of concrete actions, foods, skills and troubleshooting — followed by a reference toolkit for restaurants, daycare, travel, illness and every question parents ask once the basics are working.",
    covered: [
      "A twelve-week plan with weekly goals, foods and skills",
      "Progress markers so you can see real advancement",
      "Eating out, daycare, travel and family gatherings",
      "The complete troubleshooting index and printable checklists",
    ],
    image: "plan",
    chapters: [11, 12],
  },
];
