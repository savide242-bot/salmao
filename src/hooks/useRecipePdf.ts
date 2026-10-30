import { jsPDF } from "jspdf";

const CTA_URL = "https://page.babybites.space/";

interface Recipe {
  type: string;
  title: string;
  category: string;
  age: string;
  prep: string;
  cook: string;
  cooling: string;
  servings: string;
  intro: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  nutrition: { label: string; value: string }[];
  safety: string;
  storage: string;
  servingsByAge: string;
  variations: string;
  tip: string;
}

const recipes: Recipe[] = [
  {
    type: "BREAKFAST",
    title: "Banana Oat Pancakes",
    category: "Breakfast • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "8 minutes",
    cooling: "2 minutes",
    servings: "6 mini pancakes",
    intro: "Fluffy, naturally sweet mini pancakes made with just two core ingredients — soft enough for tiny hands and gummy chews.",
    ingredients: [
      "1 ripe banana, mashed",
      "1/2 cup rolled oats (blended into flour)",
      "1 egg, beaten",
      "1 tbsp breast milk, formula, or whole milk",
      "1/4 tsp cinnamon (optional)",
      "Butter or olive oil for the pan",
    ],
    instructions: [
      "Mash the banana in a bowl until smooth.",
      "Blend rolled oats in a food processor into a fine flour.",
      "Mix banana, oat flour, egg, milk and cinnamon into a batter.",
      "Warm a non-stick pan on low heat with a little butter.",
      "Spoon small pancakes and cook 2 minutes each side.",
      "Cool slightly, then serve as finger food.",
    ],
    benefits: [
      "Rich in slow-release energy from oats",
      "Naturally sweet — no added sugar",
      "Contains iron, potassium and B vitamins",
    ],
    nutrition: [
      { label: "Calories", value: "~85 kcal per pancake" },
      { label: "Protein", value: "2.5 g per serving" },
      { label: "Carbohydrates", value: "13 g per serving" },
      { label: "Fats", value: "2 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Iron, potassium, magnesium, vitamin B6" },
    ],
    safety: "Contains egg and gluten — introduce separately first to watch for reactions. Ensure pancakes are soft and cut into strips baby can grip. Never serve hot.",
    storage: "Refrigerate up to 2 days in an airtight container. Freeze up to 1 month between parchment layers. Reheat gently and check temperature before serving.",
    servingsByAge: "6–8 months: 1 pancake, cut into strips. 9–12 months: 2 pancakes, small pieces. 12+ months: 2–3 pancakes as part of breakfast.",
    variations: "Add mashed berries for a fruity twist, or swap banana for grated apple. For a dairy-free option, use plant-based milk.",
    tip: "Cook on low heat so the outside stays soft — no crispy edges for tiny gums.",
  },
  {
    type: "FINGER FOOD",
    title: "Sweet Potato & Cheese Bites",
    category: "Finger Food • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "10 minutes",
    cooling: "3 minutes",
    servings: "10 bites",
    intro: "Soft, cheesy mini bites that melt in the mouth — perfect for babies learning to self-feed.",
    ingredients: [
      "1 cup cooked mashed sweet potato",
      "1/3 cup mild grated cheese (low sodium)",
      "1 egg yolk",
      "3 tbsp fine breadcrumbs or oat flour",
      "Pinch of dried herbs (optional)",
    ],
    instructions: [
      "Preheat oven to 180°C (356°F) and line a tray with parchment.",
      "Mix all ingredients in a bowl until fully combined.",
      "Shape small balls or flat bites with damp hands.",
      "Place on the tray and bake 10 minutes until golden.",
      "Let cool completely before serving.",
    ],
    benefits: [
      "Rich in vitamin A for eye development",
      "Contains high-quality protein and calcium",
      "Provides gentle fiber for healthy digestion",
    ],
    nutrition: [
      { label: "Calories", value: "~45 kcal per bite" },
      { label: "Protein", value: "1.8 g per serving" },
      { label: "Carbohydrates", value: "5 g per serving" },
      { label: "Fats", value: "1.8 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Vitamin A, calcium, vitamin K, iron" },
    ],
    safety: "Contains egg and dairy — common allergens. Shape pieces small enough for baby to grip but soft enough to squash between thumb and forefinger. Avoid hard or browned crusts that could be a choking hazard.",
    storage: "Refrigerate up to 3 days in an airtight container. Freeze up to 1 month; reheat from frozen or refrigerated until steaming, then cool to a safe lukewarm temperature.",
    servingsByAge: "6–8 months: 1–2 bites. 9–12 months: 2–3 bites. 12+ months: 3–4 bites with a side of veg.",
    variations: "Use pumpkin or butternut squash instead of sweet potato. Swap cheese for a milder one or cottage cheese. Add a pinch of finely chopped parsley if already introduced.",
    tip: "Bake until just set — soft inside is what you want for gummy babies.",
  },
  {
    type: "SNACK",
    title: "Avocado Toast Fingers",
    category: "Snack • Age: 6+ months",
    age: "6+ months",
    prep: "3 minutes",
    cook: "2 minutes",
    cooling: "0 minutes",
    servings: "4 finger strips",
    intro: "The easiest 5-minute snack — creamy avocado on soft toast strips baby can grab with both hands.",
    ingredients: [
      "1 slice soft whole-grain bread",
      "1/2 ripe avocado",
      "Squeeze of lemon (optional)",
      "Tiny sprinkle of hemp seeds or ground flax (optional)",
    ],
    instructions: [
      "Lightly toast the bread — soft, not crispy.",
      "Mash avocado with a fork and add a squeeze of lemon.",
      "Spread thickly over the toast.",
      "Cut into 4 long finger strips baby can grip.",
      "Serve immediately.",
    ],
    benefits: [
      "Healthy fats for brain development",
      "Whole grains provide slow-release energy",
      "Rich in folate, potassium and vitamin E",
    ],
    nutrition: [
      { label: "Calories", value: "~180 kcal per serving" },
      { label: "Protein", value: "4 g per serving" },
      { label: "Carbohydrates", value: "18 g per serving" },
      { label: "Fats", value: "10 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Folate, vitamin E, potassium, fiber" },
    ],
    safety: "Contains gluten — introduce carefully if new. Cut into long strips (not small cubes) so baby can hold and gnaw safely. Choose low-salt bread.",
    storage: "Best served fresh. Not suitable for storing — avocado browns quickly.",
    servingsByAge: "6–8 months: 1–2 strips. 9–12 months: 2–3 strips. 12+ months: full slice cut into fingers.",
    variations: "Top with mashed banana, ricotta, or a thin layer of hummus (once introduced). Add cucumber sticks on the side.",
    tip: "Squeeze the avocado gently — if it gives a little, it's baby-perfect ripe.",
  },
  {
    type: "BREAKFAST",
    title: "Baby Scrambled Eggs with Spinach",
    category: "Breakfast • Age: 6+ months",
    age: "6+ months",
    prep: "3 minutes",
    cook: "5 minutes",
    cooling: "2 minutes",
    servings: "1 baby portion",
    intro: "Soft, fluffy scrambled eggs with a whisper of spinach — protein and iron in one silky bite.",
    ingredients: [
      "1 whole egg",
      "1 tbsp whole milk or breast milk",
      "1 small handful baby spinach, finely chopped",
      "Tiny knob of butter",
    ],
    instructions: [
      "Whisk egg and milk together until smooth.",
      "Melt butter in a non-stick pan on low heat.",
      "Add chopped spinach and stir for 30 seconds until wilted.",
      "Pour in the egg mixture and stir gently.",
      "Cook slowly until soft curds form — don't overcook.",
      "Cool slightly and serve in soft small pieces.",
    ],
    benefits: [
      "Complete protein for growing muscles",
      "Iron and folate from spinach",
      "Choline for brain and memory development",
    ],
    nutrition: [
      { label: "Calories", value: "~120 kcal per serving" },
      { label: "Protein", value: "8 g per serving" },
      { label: "Carbohydrates", value: "1.5 g per serving" },
      { label: "Fats", value: "9 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Iron, choline, vitamin D, B12, folate" },
    ],
    safety: "Egg is a common allergen — introduce alone the first time. Always cook egg fully (no runny yolk or white) for babies under 12 months unless using British Lion or equivalent quality-marked eggs.",
    storage: "Best served fresh. Refrigerate leftovers up to 24 hours; reheat once until piping hot and cool to lukewarm before serving.",
    servingsByAge: "6–8 months: 1–2 tbsp, soft curds. 9–12 months: 2–3 tbsp. 12+ months: a full small portion with toast fingers.",
    variations: "Swap spinach for finely chopped tomato, avocado or grated cheese. Add a pinch of chives if already introduced.",
    tip: "Low and slow is the secret — high heat makes rubbery curds that are harder for baby to swallow.",
  },
  {
    type: "FINGER FOOD",
    title: "Broccoli & Cheese Mini Muffins",
    category: "Finger Food • Age: 6+ months",
    age: "6+ months",
    prep: "8 minutes",
    cook: "15 minutes",
    cooling: "5 minutes",
    servings: "8 mini muffins",
    intro: "Savory grab-and-go muffins packed with hidden greens — freezer-friendly and lunchbox gold.",
    ingredients: [
      "1 cup finely chopped steamed broccoli",
      "1/2 cup mild grated cheese (low sodium)",
      "2 eggs",
      "3/4 cup self-raising flour (or plain flour + 1 tsp baking powder)",
      "1/4 cup whole milk",
      "1 tbsp olive oil",
    ],
    instructions: [
      "Preheat oven to 180°C (356°F) and grease a mini muffin tray.",
      "Whisk eggs, milk and olive oil in a bowl.",
      "Fold in flour, broccoli and cheese until just combined.",
      "Spoon into the muffin tray, filling each 3/4 full.",
      "Bake 15 minutes until golden and set.",
      "Cool completely before serving.",
    ],
    benefits: [
      "Rich in calcium for bones",
      "Contains high-quality protein",
      "Provides vitamin C and fiber from broccoli",
    ],
    nutrition: [
      { label: "Calories", value: "~75 kcal per muffin" },
      { label: "Protein", value: "3 g per serving" },
      { label: "Carbohydrates", value: "8 g per serving" },
      { label: "Fats", value: "3.5 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Calcium (cheese), vitamin C and K (broccoli), vitamin A, folate, iron (small amount)" },
    ],
    safety: "Contains egg, gluten and dairy — introduce each allergen separately first. Ensure muffins are soft and cut in half or quarters for younger babies. Do not add salt or honey.",
    storage: "Refrigerate up to 4 days in an airtight container. Freeze up to 2 months; defrost overnight or reheat gently and cool before serving.",
    servingsByAge: "6–8 months: 1/2 muffin, torn into soft pieces. 9–12 months: 1 whole muffin. 12+ months: 1–2 muffins with a side.",
    variations: "Swap broccoli for grated zucchini or finely chopped spinach. Try feta instead of cheddar for older babies.",
    tip: "Grate the cheese finely so it melts evenly through every bite — no big chewy pockets.",
  },
  {
    type: "LUNCH",
    title: "Soft Chicken & Carrot Meatballs",
    category: "Lunch • Age: 6+ months",
    age: "6+ months",
    prep: "8 minutes",
    cook: "12 minutes",
    cooling: "3 minutes",
    servings: "10 mini meatballs",
    intro: "Tender, juicy mini meatballs with sweet grated carrot — no salt needed, all flavor.",
    ingredients: [
      "200 g ground chicken",
      "1 small carrot, finely grated",
      "2 tbsp fine breadcrumbs or oat flour",
      "1 egg yolk",
      "1 tsp olive oil",
      "Pinch of dried oregano (optional)",
    ],
    instructions: [
      "Preheat oven to 190°C (375°F) and line a tray.",
      "Mix chicken, carrot, breadcrumbs, egg yolk and oregano.",
      "Roll into small meatballs with damp hands.",
      "Brush lightly with olive oil.",
      "Bake 12 minutes until cooked through and juicy.",
      "Cool slightly and cut in halves or quarters.",
    ],
    benefits: [
      "Excellent source of iron and zinc",
      "High-quality lean protein",
      "Beta-carotene from carrot for eye health",
    ],
    nutrition: [
      { label: "Calories", value: "~55 kcal per meatball" },
      { label: "Protein", value: "6 g per serving" },
      { label: "Carbohydrates", value: "2 g per serving" },
      { label: "Fats", value: "2.5 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Iron, zinc, vitamin A, B12, selenium" },
    ],
    safety: "Contains egg and gluten. Always cook chicken fully — no pink inside. Cut meatballs into soft pieces small enough that baby cannot inhale a whole ball.",
    storage: "Refrigerate up to 3 days. Freeze up to 2 months; reheat until piping hot throughout and cool before serving.",
    servingsByAge: "6–8 months: 1 meatball, mashed with a fork. 9–12 months: 2 meatballs, cut into quarters. 12+ months: 3 meatballs with veg or pasta.",
    variations: "Use turkey or beef instead. Add grated zucchini or finely chopped mushrooms for extra hidden veg.",
    tip: "Don't skip the grated carrot — it keeps the meatballs moist and tender for tiny gums.",
  },
  {
    type: "SNACK",
    title: "Apple & Cinnamon Oat Bites",
    category: "Snack • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "10 minutes",
    cooling: "5 minutes",
    servings: "8 soft bites",
    intro: "Naturally sweet, no-added-sugar oat bites with grated apple and cozy cinnamon — like a hug for tiny tummies.",
    ingredients: [
      "1 cup rolled oats",
      "1 apple, peeled and finely grated",
      "1 ripe banana, mashed",
      "1 tbsp nut butter (optional, once introduced) or 1 tbsp olive oil",
      "1/4 tsp cinnamon",
    ],
    instructions: [
      "Preheat oven to 180°C (356°F) and line a tray.",
      "Mix all ingredients in a bowl until it holds together.",
      "Shape into small flat rounds.",
      "Bake 10 minutes until lightly golden and soft.",
      "Let cool completely before serving.",
    ],
    benefits: [
      "Slow-release energy from oats",
      "Natural sweetness from fruit — no added sugar",
      "Fiber supports healthy digestion",
    ],
    nutrition: [
      { label: "Calories", value: "~60 kcal per bite" },
      { label: "Protein", value: "1.5 g per serving" },
      { label: "Carbohydrates", value: "11 g per serving" },
      { label: "Fats", value: "1.2 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Fiber, vitamin C, potassium, magnesium" },
    ],
    safety: "May contain gluten (oats can be cross-contaminated — use certified gluten-free if needed). If using nut butter, introduce peanut/nut allergens carefully. Ensure bites are soft and small enough.",
    storage: "Refrigerate up to 4 days. Freeze up to 1 month; defrost at room temperature before serving.",
    servingsByAge: "6–8 months: 1 bite, broken into small soft pieces. 9–12 months: 1–2 bites. 12+ months: 2–3 bites as snack.",
    variations: "Swap apple for pear or grated zucchini. Add a spoon of unsweetened applesauce for extra softness.",
    tip: "Grate the apple finely so it cooks through — no crunchy chunks left behind.",
  },
  {
    type: "LUNCH",
    title: "Salmon & Sweet Potato Cakes",
    category: "Lunch • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "10 minutes",
    cooling: "3 minutes",
    servings: "6 small cakes",
    intro: "Soft, flaky salmon cakes rich in omega-3 for growing baby brains — ready faster than takeaway.",
    ingredients: [
      "150 g cooked salmon fillet, flaked (all bones removed)",
      "1 cup mashed sweet potato",
      "1 egg yolk",
      "2 tbsp fine breadcrumbs or oat flour",
      "1 tsp olive oil",
      "Squeeze of lemon (optional)",
    ],
    instructions: [
      "Mix all ingredients in a bowl until combined.",
      "Shape into small flat cakes with damp hands.",
      "Warm olive oil in a non-stick pan on medium-low heat.",
      "Cook cakes 3 minutes each side until golden.",
      "Cool slightly and cut into finger strips.",
    ],
    benefits: [
      "Rich in omega-3 for brain development",
      "Excellent source of vitamin D",
      "High-quality protein and iron",
    ],
    nutrition: [
      { label: "Calories", value: "~90 kcal per cake" },
      { label: "Protein", value: "6 g per serving" },
      { label: "Carbohydrates", value: "6 g per serving" },
      { label: "Fats", value: "4 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Omega-3 (DHA), vitamin D, B12, selenium, iron" },
    ],
    safety: "Fish is a common allergen — introduce alone first. Always check for bones. Use low-mercury fish like salmon; avoid tuna, swordfish and shark for babies.",
    storage: "Refrigerate up to 2 days. Freeze up to 1 month; reheat until piping hot and cool to lukewarm before serving.",
    servingsByAge: "6–8 months: 1 cake, cut into strips. 9–12 months: 1–2 cakes, quartered. 12+ months: 2 cakes with steamed veg.",
    variations: "Use tinned salmon (no added salt) for a shortcut. Swap sweet potato for mashed pumpkin or peas.",
    tip: "Keep cakes small and thin — they cook faster and stay tender for baby.",
  },
  {
    type: "DINNER",
    title: "Zucchini & Cheese Fritters",
    category: "Dinner • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "8 minutes",
    cooling: "3 minutes",
    servings: "8 small fritters",
    intro: "Golden, soft fritters that sneak veggies into every bite — dinner sorted in under 15 minutes.",
    ingredients: [
      "1 medium zucchini, grated (excess water squeezed out)",
      "1/3 cup mild grated cheese",
      "1 egg",
      "3 tbsp plain flour or oat flour",
      "1 tsp olive oil for the pan",
    ],
    instructions: [
      "Squeeze grated zucchini in a clean cloth to remove water.",
      "Mix zucchini, cheese, egg and flour in a bowl.",
      "Warm olive oil in a non-stick pan on low heat.",
      "Drop small spoonfuls and flatten gently.",
      "Cook 3 minutes each side until golden and soft.",
      "Cool slightly before serving.",
    ],
    benefits: [
      "Sneaky veg intake babies love",
      "Calcium and protein in every bite",
      "Light and easy to digest",
    ],
    nutrition: [
      { label: "Calories", value: "~55 kcal per fritter" },
      { label: "Protein", value: "2.5 g per serving" },
      { label: "Carbohydrates", value: "4 g per serving" },
      { label: "Fats", value: "3 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Calcium, vitamin A, vitamin C, folate" },
    ],
    safety: "Contains egg, gluten and dairy. Cook fully so egg is set. Keep fritters small and soft — no crispy dark edges.",
    storage: "Refrigerate up to 3 days. Freeze up to 1 month; reheat until piping hot and cool before serving.",
    servingsByAge: "6–8 months: 1 fritter, torn into pieces. 9–12 months: 2 fritters. 12+ months: 2–3 fritters with a side.",
    variations: "Add grated carrot or finely chopped spinach. Swap cheese for ricotta or feta for older babies.",
    tip: "Squeeze the zucchini really well — dry zucchini = golden fritters, wet zucchini = soggy pancakes.",
  },
  {
    type: "SNACK",
    title: "Yogurt & Berry Fruit Cups",
    category: "Snack • Age: 6+ months",
    age: "6+ months",
    prep: "5 minutes",
    cook: "0 minutes",
    cooling: "0 minutes",
    servings: "2 small cups",
    intro: "A creamy, fruity, probiotic-rich snack — the easiest way to sneak calcium and antioxidants into baby's day.",
    ingredients: [
      "1/2 cup plain full-fat Greek yogurt (unsweetened)",
      "1/4 cup soft berries (blueberries, raspberries or strawberries), mashed",
      "1 tbsp mashed banana",
      "Tiny sprinkle of ground flaxseed (optional)",
    ],
    instructions: [
      "Mash the berries with a fork.",
      "Layer yogurt, mashed berries and banana in a small cup.",
      "Sprinkle flaxseed on top if using.",
      "Serve immediately with a soft baby spoon.",
    ],
    benefits: [
      "Probiotics support gut health",
      "Calcium and protein for growing bones",
      "Antioxidants from fresh berries",
    ],
    nutrition: [
      { label: "Calories", value: "~90 kcal per cup" },
      { label: "Protein", value: "6 g per serving" },
      { label: "Carbohydrates", value: "9 g per serving" },
      { label: "Fats", value: "3 g per serving" },
      { label: "Key Vitamins & Minerals", value: "Calcium, vitamin C, probiotics, potassium" },
    ],
    safety: "Contains dairy — a common allergen. Always use full-fat, unsweetened yogurt for babies. Mash berries well to avoid choking; whole blueberries are a hazard until baby chews confidently.",
    storage: "Best served fresh. Refrigerate up to 24 hours in a covered cup.",
    servingsByAge: "6–8 months: 2–3 tbsp, well mashed. 9–12 months: 1 small cup. 12+ months: 1 cup, berries lightly mashed.",
    variations: "Swap berries for mashed peach, mango or kiwi. Stir in a spoon of nut butter (once introduced).",
    tip: "Choose plain yogurt with no added sugar — the fruit brings all the sweetness baby needs.",
  },
];

// Colors matching the reference
const C = {
  bg: [255, 251, 235] as [number, number, number], // amber-50
  headerBar: [255, 237, 213] as [number, number, number],
  amberDark: [180, 83, 9] as [number, number, number],
  gray900: [31, 41, 55] as [number, number, number],
  gray700: [55, 65, 81] as [number, number, number],
  gray600: [75, 85, 99] as [number, number, number],
  gray500: [107, 114, 128] as [number, number, number],
  orange: [249, 115, 22] as [number, number, number], // ingredients bar
  blue: [59, 130, 246] as [number, number, number], // instructions
  green: [34, 197, 94] as [number, number, number], // benefits
  purple: [168, 85, 247] as [number, number, number], // nutrition
  pink: [244, 114, 182] as [number, number, number],
  teal: [20, 184, 166] as [number, number, number],
  amberSoft: [254, 243, 199] as [number, number, number],
};

const setFill = (doc: jsPDF, c: [number, number, number]) => doc.setFillColor(c[0], c[1], c[2]);
const setText = (doc: jsPDF, c: [number, number, number]) => doc.setTextColor(c[0], c[1], c[2]);
const setDraw = (doc: jsPDF, c: [number, number, number]) => doc.setDrawColor(c[0], c[1], c[2]);

export const generateRecipePdf = () => {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentW = pageW - margin * 2;

  const pageBg = () => {
    setFill(doc, C.bg);
    doc.rect(0, 0, pageW, pageH, "F");
  };

  const drawFooter = (pageNum: number) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    setText(doc, C.gray500);
    doc.text("BabyBites • Healthy Recipes for Babies 6+ Months", margin, pageH - 6);
    doc.text(`Page ${pageNum}`, pageW - margin, pageH - 6, { align: "right" });
  };

  const drawSectionHeader = (y: number, color: [number, number, number], label: string): number => {
    setFill(doc, color);
    doc.roundedRect(margin, y, contentW, 6, 1, 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setText(doc, [255, 255, 255]);
    doc.text(label, margin + 3, y + 4.2);
    return y + 8;
  };

  const drawCallout = (
    y: number,
    color: [number, number, number],
    title: string,
    body: string
  ): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setText(doc, color);
    doc.text(title, margin + 2, y);
    y += 3.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, C.gray600);
    const lines = doc.splitTextToSize(body, contentW - 4);
    doc.text(lines, margin + 2, y);
    return y + lines.length * 3.5 + 2;
  };

  // ============ COVER PAGE ============
  setFill(doc, C.amberSoft);
  doc.rect(0, 0, pageW, pageH, "F");

  // Decorative circles
  setFill(doc, [251, 191, 36]);
  doc.circle(pageW - 20, 25, 30, "F");
  setFill(doc, [249, 115, 22]);
  doc.circle(25, pageH - 40, 25, "F");
  setFill(doc, [253, 186, 116]);
  doc.circle(pageW - 40, pageH - 60, 15, "F");

  // Brand
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  setText(doc, C.amberDark);
  doc.text("BABYBITES", pageW / 2, 40, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setText(doc, C.gray600);
  doc.text("• Real food, real love •", pageW / 2, 46, { align: "center" });

  // Main title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  setText(doc, C.gray900);
  doc.text("Healthy Baby", pageW / 2, 110, { align: "center" });
  doc.text("Recipes", pageW / 2, 125, { align: "center" });

  // Underline accent
  setFill(doc, [249, 115, 22]);
  doc.roundedRect(pageW / 2 - 25, 132, 50, 2, 1, 1, "F");

  // Subtitle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  setText(doc, C.gray700);
  doc.text("Easy, Nutritious Meals", pageW / 2, 148, { align: "center" });
  doc.text("for Babies 6+ Months", pageW / 2, 156, { align: "center" });

  // Tagline box
  setFill(doc, [255, 255, 255]);
  doc.roundedRect(margin + 15, 180, contentW - 30, 30, 3, 3, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  setText(doc, C.gray700);
  doc.text("A gentle little collection of wholesome recipes", pageW / 2, 192, { align: "center" });
  doc.text("made with love, for the tiniest food lovers.", pageW / 2, 198, { align: "center" });
  doc.setFont("helvetica", "bold");
  setText(doc, C.amberDark);
  doc.text("Ready in 15 minutes or less", pageW / 2, 205, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, C.amberDark);
  doc.text("A GIFT FROM BABYBITES", pageW / 2, pageH - 20, { align: "center" });

  // ============ INTRO PAGE ============
  doc.addPage();
  pageBg();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, C.amberDark);
  doc.text("WELCOME, MOM", pageW / 2, 22, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  setText(doc, C.gray900);
  doc.text("Feeding Baby, Simplified", pageW / 2, 34, { align: "center" });

  setFill(doc, [249, 115, 22]);
  doc.roundedRect(pageW / 2 - 15, 38, 30, 1.2, 0.5, 0.5, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setText(doc, C.gray700);
  const intro = [
    "Starting solids is one of the most magical (and slightly nerve-wracking) chapters",
    "of your baby's first year. This little recipe collection was made to take the stress",
    "away and put the joy back into mealtimes.",
    "",
    "Every recipe inside is designed for babies from 6 months, easy enough for the busiest",
    "mornings, and packed with the nutrients your growing baby actually needs.",
  ];
  let iy = 50;
  intro.forEach((l) => {
    doc.text(l, pageW / 2, iy, { align: "center" });
    iy += 5;
  });

  // Feature cards
  const features = [
    { title: "Real Food, No Purées", body: "Textures that build confident little eaters — soft, safe and self-feeding friendly." },
    { title: "Ready in 15 Minutes", body: "Because tired moms deserve recipes that respect their time." },
    { title: "Nutrition That Matters", body: "Every recipe covers key nutrients: iron, protein, healthy fats, vitamins & more." },
    { title: "Safety First, Always", body: "Allergy notes, choking safety and storage tips built into every page." },
  ];

  let fy = 95;
  features.forEach((f) => {
    setFill(doc, [255, 255, 255]);
    doc.roundedRect(margin, fy, contentW, 22, 2, 2, "F");
    setDraw(doc, [253, 230, 138]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, fy, contentW, 22, 2, 2, "S");

    setFill(doc, [249, 115, 22]);
    doc.circle(margin + 6, fy + 11, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    setText(doc, C.gray900);
    doc.text(f.title, margin + 14, fy + 9);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setText(doc, C.gray600);
    const lns = doc.splitTextToSize(f.body, contentW - 20);
    doc.text(lns, margin + 14, fy + 14.5);
    fy += 26;
  });

  // Safety note
  setFill(doc, [254, 226, 226]);
  doc.roundedRect(margin, fy + 4, contentW, 22, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, [153, 27, 27]);
  doc.text("A Quick Note on Safety", margin + 3, fy + 11);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setText(doc, C.gray700);
  const safeLns = doc.splitTextToSize(
    "Always introduce new foods one at a time and watch for reactions. Stay with baby during meals, cut foods to safe sizes, and check with your pediatrician if you have any concerns.",
    contentW - 6
  );
  doc.text(safeLns, margin + 3, fy + 16);

  drawFooter(2);

  // ============ RECIPE PAGES ============
  recipes.forEach((r, idx) => {
    doc.addPage();
    pageBg();

    let y = 12;

    // Top type bar
    setFill(doc, C.amberDark);
    doc.roundedRect(margin, y, contentW, 5, 1, 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setText(doc, [255, 255, 255]);
    doc.text(r.type, pageW / 2, y + 3.5, { align: "center" });
    y += 9;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    setText(doc, C.gray900);
    doc.text(r.title, pageW / 2, y + 4, { align: "center" });
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, C.gray500);
    doc.text(r.category, pageW / 2, y, { align: "center" });
    y += 5;

    // Meta row (Prep / Cook / Cooling / Servings)
    setFill(doc, C.headerBar);
    doc.roundedRect(margin, y, contentW, 12, 1.5, 1.5, "F");
    const metas = [
      { label: "PREP TIME", value: r.prep },
      { label: "COOK TIME", value: r.cook },
      { label: "COOLING", value: r.cooling },
      { label: "SERVINGS", value: r.servings },
    ];
    const cw = contentW / 4;
    metas.forEach((m, i) => {
      const cx = margin + cw * i + 3;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.5);
      setText(doc, C.amberDark);
      doc.text(m.label, cx, y + 4);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      setText(doc, C.gray700);
      doc.text(m.value, cx, y + 9);
    });
    y += 14;

    // Intro line
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    setText(doc, C.gray600);
    const introLns = doc.splitTextToSize(r.intro, contentW);
    doc.text(introLns, margin, y);
    y += introLns.length * 3.5 + 3;

    // Ingredients
    y = drawSectionHeader(y, C.orange, "INGREDIENTS");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, C.gray700);
    r.ingredients.forEach((ing) => {
      setFill(doc, C.orange);
      doc.circle(margin + 2, y - 0.8, 0.7, "F");
      doc.text(ing, margin + 5, y);
      y += 4;
    });
    y += 2;

    // Instructions
    y = drawSectionHeader(y, C.blue, "INSTRUCTIONS");
    doc.setFontSize(8);
    r.instructions.forEach((step, i) => {
      doc.setFont("helvetica", "bold");
      setText(doc, C.blue);
      doc.text(`${i + 1}.`, margin + 2, y);
      doc.setFont("helvetica", "normal");
      setText(doc, C.gray700);
      const stepLns = doc.splitTextToSize(step, contentW - 10);
      doc.text(stepLns, margin + 7, y);
      y += stepLns.length * 3.5 + 1.5;
    });
    y += 1;

    // Nutritional Benefits
    y = drawSectionHeader(y, C.green, "NUTRITIONAL BENEFITS");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, C.gray700);
    r.benefits.forEach((b) => {
      setText(doc, C.green);
      doc.text("✓", margin + 2, y);
      setText(doc, C.gray700);
      doc.text(b, margin + 6, y);
      y += 4;
    });
    y += 2;

    // Nutritional Information
    y = drawSectionHeader(y, C.purple, "NUTRITIONAL INFORMATION (PER SERVING)");
    doc.setFontSize(7.5);
    const labelCol = 55;
    r.nutrition.forEach((n) => {
      doc.setFont("helvetica", "bold");
      setText(doc, C.gray900);
      doc.text(n.label, margin + 2, y);
      doc.setFont("helvetica", "normal");
      setText(doc, C.gray600);
      const vLns = doc.splitTextToSize(n.value, contentW - labelCol - 4);
      doc.text(vLns, margin + labelCol, y);
      y += Math.max(vLns.length * 3.2, 3.8);
    });
    y += 2;

    // Callouts
    y = drawCallout(y, C.pink, "Safety Notes:", r.safety);
    y = drawCallout(y, [217, 119, 6], "Storage Notes:", r.storage);
    y = drawCallout(y, C.teal, "Servings by Age:", r.servingsByAge);
    y = drawCallout(y, [161, 98, 7], "Variations:", r.variations);

    // Tip
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    setText(doc, C.gray500);
    const tipLns = doc.splitTextToSize(`Tip: ${r.tip}`, contentW);
    doc.text(tipLns, margin, Math.min(y, pageH - 20));

    // Bonus CTA band on recipe 5
    if (idx === 4) {
      const cy = pageH - 18;
      setFill(doc, [249, 115, 22]);
      doc.roundedRect(margin, cy, contentW, 10, 2, 2, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      setText(doc, [255, 255, 255]);
      doc.text("Get 100+ Healthy & Nutritious Recipes for My Baby →", pageW / 2, cy + 6.3, {
        align: "center",
      });
      doc.link(margin, cy, contentW, 10, { url: CTA_URL });
    }

    drawFooter(3 + idx);
  });

  // ============ FINAL PAGE — DEMO EBOOK CTA ============
  doc.addPage();
  pageBg();

  // Decorative circles
  setFill(doc, [251, 191, 36]);
  doc.circle(pageW - 15, 20, 22, "F");
  setFill(doc, [249, 115, 22]);
  doc.circle(15, pageH - 30, 20, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, C.amberDark);
  doc.text("THIS IS JUST A TASTE", pageW / 2, 30, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  setText(doc, C.gray900);
  doc.text("Loved These Recipes?", pageW / 2, 48, { align: "center" });
  doc.setFontSize(18);
  setText(doc, C.amberDark);
  doc.text("There Are 100+ More Waiting.", pageW / 2, 60, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setText(doc, C.gray700);
  const pitch = [
    "This little collection you're holding is a demo ebook — a small preview",
    "of what's inside the full BabyBites Recipe Book.",
    "",
    "Inside the full book, you'll unlock over 100 healthy, easy recipes for every",
    "occasion: breakfasts, snacks, finger foods, lunches, dinners, weekend treats,",
    "on-the-go meals, sick-day comforts, birthday bites and so much more.",
    "",
    "No more scrolling Pinterest at 6 a.m. wondering what to feed your baby.",
    "No more guessing about textures, allergens or portions.",
    "Just open the book, pick a recipe, and cook with confidence.",
  ];
  let py = 78;
  pitch.forEach((l) => {
    doc.text(l, pageW / 2, py, { align: "center" });
    py += 5;
  });

  // What's inside box
  setFill(doc, [255, 255, 255]);
  doc.roundedRect(margin + 10, py + 4, contentW - 20, 42, 3, 3, "F");
  setDraw(doc, [253, 230, 138]);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin + 10, py + 4, contentW - 20, 42, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  setText(doc, C.amberDark);
  doc.text("INSIDE THE FULL BOOK", pageW / 2, py + 11, { align: "center" });

  const bullets = [
    "100+ pediatrician-friendly recipes for every stage",
    "Complete nutrition breakdown on every recipe",
    "Storage, safety & allergy notes built in",
    "Weekly meal ideas — no more decision fatigue",
    "Instant lifetime access, download & keep forever",
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setText(doc, C.gray700);
  let by = py + 17;
  bullets.forEach((b) => {
    setText(doc, C.green);
    doc.text("✓", margin + 16, by);
    setText(doc, C.gray700);
    doc.text(b, margin + 20, by);
    by += 5;
  });

  py = by + 6;

  // Scarcity strip
  setFill(doc, [239, 68, 68]);
  doc.roundedRect(margin + 30, py, contentW - 60, 7, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setText(doc, [255, 255, 255]);
  doc.text("⚡ SPECIAL LAUNCH PRICE — LIMITED TIME", pageW / 2, py + 4.6, { align: "center" });
  py += 12;

  // CTA button
  const btnW = 130;
  const btnH = 14;
  const btnX = (pageW - btnW) / 2;
  const btnY = py;

  setFill(doc, [217, 119, 6]);
  doc.roundedRect(btnX + 1.2, btnY + 1.2, btnW, btnH, 6, 6, "F");
  setFill(doc, [249, 115, 22]);
  doc.roundedRect(btnX, btnY, btnW, btnH, 6, 6, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setText(doc, [255, 255, 255]);
  doc.text("GET THE FULL RECIPE BOOK →", pageW / 2, btnY + 9, { align: "center" });

  doc.link(btnX, btnY, btnW, btnH, { url: CTA_URL });

  py += btnH + 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setText(doc, C.gray600);
  doc.text("Instant download • Lifetime access • Loved by 1,000+ moms", pageW / 2, py, {
    align: "center",
  });

  // Signature
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  setText(doc, C.amberDark);
  doc.text("With love,", pageW / 2, pageH - 22, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("The BabyBites Team ♡", pageW / 2, pageH - 16, { align: "center" });

  drawFooter(3 + recipes.length);

  doc.save("babybites-recipe-ebook.pdf");
};

export const useRecipePdf = () => {
  return { generateRecipePdf };
};
