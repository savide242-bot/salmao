import type { Chapter } from "./types";

export const ch01: Chapter = {
  number: 1,
  title: "Nutritional Needs by Age",
  subtitle: "What your baby's body actually needs, month by month",
  image: "needs",
  intro:
    "Every parent asks the same quiet question at 2am: is my baby getting enough? The honest answer is that your baby's needs change dramatically in the first two years, faster than at almost any other stage of life. A newborn doubles their birth weight by around 5 months and triples it by 12 months, a growth rate that, if sustained into adulthood, would be biologically impossible to fuel. Understanding the actual numbers behind energy, protein, fat, iron, and fluid needs takes the guesswork out of feeding and replaces anxiety with confidence. This chapter walks through exactly what your baby needs at each stage, in plain language backed by pediatric nutrition science from the WHO, the AAP, and the NHS. We will cover breastfed and formula-fed babies, preterm infants, how to read a growth chart, and the red flags that mean it is time to call your pediatrician. By the end, you will be able to look at a plate, a bottle, or a growth curve and know whether it is doing its job.",
  blocks: [
    {
      type: "heading",
      text: "0 to 3 Months: Rapid Growth on Milk Alone",
      sub: "The steepest growth curve of your baby's life",
    },
    {
      type: "paragraph",
      text: "In the first three months, babies grow faster relative to their size than at any other point after birth. A term newborn needs roughly 95 to 115 kcal per kilogram of body weight per day, which works out to about 450 to 550 kcal per day for a baby around 4 to 5 kg. Protein needs are proportionally high too, about 1.5 to 2 g per kg per day, but because milk is nutrient-dense, this is easily met by breast milk or standard infant formula without any additional food or water.",
    },
    {
      type: "paragraph",
      text: "During this window, babies typically feed 8 to 12 times per day if breastfed, or take 2 to 4 ounces (60 to 120 ml) per feed every 3 to 4 hours if formula-fed, gradually increasing to 4 to 6 ounces (120 to 180 ml) per feed by 3 months. Cluster feeding in the evenings is normal and does not mean your milk supply is inadequate; it is a common pattern tied to circadian rhythm development. Weight gain of roughly 150 to 200 g (5 to 7 oz) per week is the expected benchmark for the first three months, though this naturally slows afterward.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Colostrum and early milk are calorie-dense by design",
      body: "In the first days of life, colostrum is low in volume (often just teaspoons per feed) but extremely concentrated in protein and immune factors. Do not judge early breastfeeding success by volume; judge it by wet diaper counts, which should reach 6 or more per day by day 5 to 6, and steady weight regain to birth weight by around day 10 to 14.",
    },
    {
      type: "table",
      title: "A Day in the Life: Typical Milk Intake by Age",
      headers: ["Age", "Feeds per day", "Volume per feed (formula)", "Total daily volume"],
      rows: [
        ["2 weeks", "8-10", "2-3 oz (60-90 ml)", "16-24 oz (480-720 ml)"],
        ["6 weeks", "6-8", "3-4 oz (90-120 ml)", "20-28 oz (600-840 ml)"],
        ["3 months", "5-7", "4-5 oz (120-150 ml)", "24-32 oz (720-950 ml)"],
        ["6 months", "4-6", "5-7 oz (150-210 ml)", "25-35 oz (750-1050 ml)"],
      ],
    },
    {
      type: "heading",
      text: "3 to 6 Months: Steady State Before Solids",
      sub: "Milk continues to meet every need",
    },
    {
      type: "paragraph",
      text: "By 3 to 6 months, growth velocity slows somewhat from the newborn pace but remains rapid. Energy needs rise modestly to about 500 to 600 kcal per day, and milk continues to supply 100 percent of it. This is also the period when many parents feel pressure, from relatives or social media, to start solids early. The evidence does not support this: introducing solids before 4 months offers no nutritional benefit and is associated with higher rates of eczema, respiratory infection, and even later obesity risk in some studies, likely because it can displace protective milk feeds.",
    },
    {
      type: "paragraph",
      text: "Micronutrient priorities in this window are vitamin D and, for exclusively breastfed babies, sometimes iron if the baby was preterm or low birth weight. Vitamin D synthesis from sunlight is unreliable in infants due to sun-avoidance recommendations, so supplementation is nearly universal advice regardless of feeding method, though formula-fed babies taking in over 32 oz per day of fortified formula usually reach adequate levels through formula alone.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "How to know a breastfed baby is getting enough without a scale",
      body: "Count diapers, not ounces. By 5 to 6 days of age, expect at least 6 wet diapers and 3 to 4 soft yellow stools per 24 hours. Audible swallowing during feeds, a relaxed and open hand (versus a tightly clenched fist), and spontaneous release of the breast at the end of a feed are all reassuring signs of adequate intake.",
    },
    {
      type: "heading",
      text: "Breastfed vs Formula-Fed: Key Differences",
      sub: "Both can nourish a baby fully and safely",
    },
    {
      type: "paragraph",
      text: "Breast milk composition actually changes within a single feed (higher fat 'hindmilk' toward the end) and across the day, and its nutrient profile shifts to match the baby's changing needs over months. Formula, by contrast, has a fixed nutrient profile per scoop, regulated to approximate the average composition of mature breast milk, which means formula-fed babies benefit from consistent, predictable preparation: always follow the can's water-to-powder ratio exactly, since over-diluting can cause inadequate growth and electrolyte problems, while under-diluting can strain immature kidneys.",
    },
    {
      type: "paragraph",
      text: "One practical difference is digestion speed: formula tends to digest more slowly than breast milk, which is why formula-fed babies often go slightly longer between feeds (3 to 4 hours versus 2 to 3 hours for many breastfed babies). Neither pattern is superior nutritionally when total daily intake and growth are adequate. Iron content also differs: virtually all infant formula sold in the US and UK is iron-fortified, while breast milk is naturally low in iron but that iron is very efficiently absorbed, roughly 50 percent absorption compared to about 10 percent from fortified formula.",
    },
    {
      type: "table",
      title: "Breastfed vs Formula-Fed: Practical Comparison",
      headers: ["Factor", "Breastfed", "Formula-fed"],
      rows: [
        ["Typical feed interval, 0-3 months", "2-3 hours", "3-4 hours"],
        ["Iron source", "Low content, high absorption", "Fortified, moderate absorption"],
        ["Vitamin D", "Supplement 400 IU/day required", "Usually adequate if 32+ oz/day"],
        ["Stool pattern, first months", "Frequent, soft, mustard-yellow", "Firmer, less frequent, tan-brown"],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: formula-fed babies need extra water",
      body: "Standard-concentration formula already contains all the water a baby needs. Adding extra water to bottles, or offering separate water before 6 months, can dilute electrolytes and in rare cases cause water intoxication, a genuine medical emergency. Prepare formula exactly to the manufacturer's instructions, no more diluted, no more concentrated.",
    },
    {
      type: "heading",
      text: "Preterm and Low Birth Weight Babies: Adjusted Needs",
      sub: "Catch-up growth changes the math",
    },
    {
      type: "paragraph",
      text: "Babies born before 37 weeks or under 2.5 kg often need higher energy and protein density than term babies of the same current weight, sometimes 110 to 135 kcal per kg per day, because they are working to catch up on growth that would have happened in utero. Many preterm babies are discharged on special post-discharge formulas or fortified breast milk for the first several months, under close pediatrician and dietitian supervision, precisely because standard term formula may not meet their elevated needs.",
    },
    {
      type: "paragraph",
      text: "Iron supplementation often starts earlier and at a higher dose for preterm babies, since the third-trimester iron transfer from mother to baby is cut short by early delivery; many preterm infants receive iron drops starting as early as 2 to 4 weeks of age rather than waiting until 4 to 6 months. Corrected age, not chronological age, should be used to interpret growth and developmental milestones until around 2 years old; a baby born 8 weeks early is developmentally and nutritionally more like a baby 8 weeks younger until that gap closes.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Always follow individualized preterm feeding plans",
      body: "General age-based guidance in this book is written for healthy term infants. If your baby was born preterm, had a low birth weight, or has a diagnosed feeding or growth condition, follow your pediatrician's or dietitian's specific plan, which may differ meaningfully from the averages presented here.",
    },
    {
      type: "heading",
      text: "6 to 8 Months: Solids Begin, Milk Still Leads",
      sub: "Complementary, not replacement",
    },
    {
      type: "paragraph",
      text: "At this stage solids are called 'complementary foods' for a reason: they complement milk rather than replace it. Milk should still provide roughly 70 to 80 percent of total calories. A baby this age needs about 650 to 750 kcal per day total, with solids contributing only 100 to 200 kcal initially, often just a tablespoon or two of iron-rich puree at first, offered once or twice a day after a milk feed, not instead of one.",
    },
    {
      type: "paragraph",
      text: "Iron becomes a priority now because a baby's prenatal iron stores, built up during the third trimester, begin to run low around 6 months. This is why pediatricians recommend iron-fortified cereal, pureed meats, or lentils as some of the very first foods, well before fruits or vegetables become the main focus. Zinc follows a similar pattern to iron: stores deplete around the same age, and the same foods (meat, legumes, fortified cereal) that supply iron also tend to supply zinc, which is why 'first foods should be fruit' is actually one of the least evidence-based pieces of common feeding advice.",
    },
    {
      type: "table",
      title: "Daily Energy and Protein Needs by Age",
      headers: ["Age", "Energy (kcal/day)", "Protein (g/day)", "Milk contribution"],
      rows: [
        ["0-3 months", "450-550", "9-11", "100%"],
        ["3-6 months", "500-600", "9-11", "100%"],
        ["6-8 months", "650-750", "11", "70-80%"],
        ["9-11 months", "750-900", "11", "50-60%"],
        ["12-18 months", "900-1000", "13", "35-45%"],
        ["18-24 months", "1000-1100", "13", "30-35%"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Watch the baby, not just the plate",
      body: "Hunger and fullness cues (leaning in, opening the mouth, grabbing the spoon, versus turning away, arching the back, or pushing the spoon) are more reliable guides to portion size than any chart. Let your baby's appetite fluctuate day to day without forcing extra bites; appetite naturally dips around growth plateaus and illness, and rebounds afterward.",
    },
    {
      type: "heading",
      text: "9 to 11 Months: Texture and Iron Take Center Stage",
      sub: "Building chewing skills and stores",
    },
    {
      type: "paragraph",
      text: "By 9 months, most babies are ready for mashed and soft finger foods rather than smooth purees exclusively. This is a critical window for developing chewing skills; delaying texture progression past 10 months is associated with later feeding difficulties, including a higher likelihood of picky eating and oral aversion at ages 2 to 3. A typical day might include oatmeal with mashed banana at breakfast, shredded chicken with soft-cooked carrots and rice at lunch, a yogurt and fruit snack mid-afternoon, and lentil dal with soft flatbread at dinner.",
    },
    {
      type: "paragraph",
      text: "Iron needs remain high at 11 mg per day, hard to meet through milk alone, so meals should regularly include iron sources: beef, chicken, lentils, beans, or fortified cereal, ideally paired with vitamin C foods like citrus, bell pepper, or tomato to boost non-heme iron absorption by up to threefold. At this age, three meals plus one to two snacks per day is a reasonable target, with milk feeds (breast or formula) still totaling around 24 to 30 oz (720 to 900 ml) across the day.",
    },
    {
      type: "list",
      title: "Good iron-rich first and second foods",
      items: [
        "Pureed or shredded beef, chicken, or turkey",
        "Iron-fortified infant cereal",
        "Lentils and split peas, well mashed",
        "Pureed beans (black, kidney, or white)",
        "Egg yolk, then whole egg once tolerated",
        "Fortified oat or wheat cereal mixed with vitamin C fruit puree",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Common gap: iron deficiency",
      body: "Iron deficiency remains one of the most common nutrient gaps in babies over 9 months, particularly for those who are still heavily reliant on milk or fruit-only purees. Untreated iron deficiency in infancy has been linked to lasting effects on cognitive development, so this is not a minor concern. If your baby eats mostly fruits and starchy vegetables, add a protein-rich iron source at every meal, and mention any concerns at the 9 or 12 month checkup so a hemoglobin check can be considered.",
    },
    {
      type: "heading",
      text: "12 to 18 Months: Joining Family Meals",
      sub: "Smaller body, surprisingly high needs",
    },
    {
      type: "paragraph",
      text: "After the first birthday, toddlers transition to whole cow's milk (if not breastfeeding) and eat mostly family foods, cut and cooked appropriately. Total energy needs rise only modestly to about 900 to 1000 kcal per day, but because toddlers are small, this concentrated need means every meal counts more than it did for an adult. Portion sizes are genuinely tiny by adult standards: 2 to 3 tablespoons of a vegetable, or a quarter cup of rice, is a completely normal full serving for an 18-month-old.",
    },
    {
      type: "paragraph",
      text: "Fat is especially important now: toddlers need about 30 to 40 percent of calories from fat to support rapid brain development, which continues at a remarkable pace through age 2. This is not the age for low-fat dairy or diet foods. Whole milk, avocado, olive oil, nut butters (thinned to avoid choking), and full-fat yogurt all belong on the plate. Limit cow's milk to about 16 to 20 oz per day; more than this can crowd out solid food intake and, in some toddlers, contribute to iron deficiency because milk itself contains very little iron.",
    },
    {
      type: "table",
      title: "Milk and Fluid Guidance by Age",
      headers: ["Age", "Milk type", "Typical daily volume", "Water needed?"],
      rows: [
        ["0-6 months", "Breast milk or formula", "24-32 oz (720-950 ml)", "No"],
        ["6-11 months", "Breast milk or formula", "24-30 oz (720-900 ml)", "A few sips with meals"],
        ["12-18 months", "Whole cow's milk", "16-20 oz (475-590 ml)", "Yes, with meals and play"],
        ["18-24 months", "Whole cow's milk", "16-20 oz (475-590 ml)", "Yes, 4-6 oz between meals"],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: toddlers need low-fat milk to avoid weight gain",
      body: "Whole milk (3.25 percent fat) is recommended until age 2 for most toddlers because dietary fat fuels the brain growth spurt happening right now. Switching to skim or low-fat milk early can unintentionally shortchange calorie and fatty acid needs. After age 2, a switch to reduced-fat milk can be discussed with your pediatrician based on overall diet and growth.",
    },
    {
      type: "quote",
      text: "Feed the child in front of you, not the chart. The numbers are a compass, not a rulebook.",
      author: "Pediatric dietitian saying, widely echoed in feeding clinics",
    },
    {
      type: "heading",
      text: "18 to 24 Months: Consolidating Habits",
      sub: "Appetite becomes less predictable, and that is normal",
    },
    {
      type: "paragraph",
      text: "Between 18 and 24 months, growth velocity slows further compared to the first year, and many toddlers eat noticeably less some days than others. This is one of the most common sources of parental worry, yet it is developmentally expected: a baby who tripled body weight in the first year would need to eat an enormous, physiologically implausible amount to keep gaining at the same rate into the second and third years. Micronutrient priorities at this stage remain iron, calcium (700 mg/day), zinc, and vitamin D (still 400 to 600 IU/day depending on diet and sun exposure).",
    },
    {
      type: "paragraph",
      text: "This is also the age where food jags (wanting the same food repeatedly) and sudden refusals of previously loved foods commonly appear. Continue offering variety without pressure; research on feeding behavior consistently shows that repeated, low-pressure exposure, sometimes 10 to 15 exposures to a new food, is what eventually builds acceptance, not persuasion or bribery in a single sitting.",
    },
    {
      type: "list",
      title: "Signs your toddler is getting enough overall",
      items: [
        "Steady growth along their own curve at checkups",
        "Consistent energy for play throughout the day",
        "Regular wet diapers or bathroom trips",
        "Interest in food most of the time, even if portions vary",
        "Normal sleep patterns without excessive night waking from hunger",
        "Hitting expected motor and language milestones for corrected age",
      ],
    },
    {
      type: "heading",
      text: "A Day in the Life: Concrete Examples by Age",
      sub: "What real feeding schedules look like",
    },
    {
      type: "paragraph",
      text: "At 2 months, a typical day might include 7 feeds of 3 to 4 oz each, spaced roughly every 3 hours, with one longer overnight stretch of 4 to 5 hours if the baby is developmentally ready. At 7 months, a typical day includes a morning milk feed, breakfast of iron-fortified cereal with fruit, a midday milk feed, lunch of pureed lentils and vegetable, an afternoon milk feed, dinner of mashed protein and starch, and a final bedtime milk feed, totaling around 24 to 28 oz of milk plus two to three small solid meals.",
    },
    {
      type: "paragraph",
      text: "At 15 months, a typical day looks much more like a small adult's: breakfast, morning snack, lunch, afternoon snack, dinner, and roughly 16 oz of whole milk split between meals, with water offered throughout the day, especially in warm weather or after active play. Recognizing these concrete patterns helps new parents calibrate expectations rather than comparing their baby's schedule to an idealized chart that rarely matches real life exactly.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Schedules are a guide, not a rulebook",
      body: "Every baby's rhythm will vary somewhat based on temperament, growth spurts, teething, illness, and daycare routines. Use example schedules as a starting reference point, then adjust based on your own baby's hunger cues and sleep needs rather than forcing an exact match.",
    },
    {
      type: "heading",
      text: "Reading a Growth Chart Without Panicking",
      sub: "Trends matter more than single points",
    },
    {
      type: "paragraph",
      text: "Growth charts (WHO charts for 0-2 years, then CDC or national charts after) plot weight, length or height, and head circumference against percentiles compared to a reference population. A baby at the 10th percentile is not underweight, and a baby at the 90th percentile is not overweight; percentiles describe rank, not health status on their own. What matters far more is trend: a baby tracking steadily along the 25th percentile line month after month is thriving just as much as one tracking along the 75th.",
    },
    {
      type: "paragraph",
      text: "A genuine red flag is a significant crossing of percentile lines, for example dropping from the 50th to the 10th percentile over two consecutive checkups, or a flattening weight curve despite adequate reported intake. Head circumference deserves particular attention in the first year since it reflects brain growth; a stalling head circumference trend should always be discussed with your pediatrician promptly rather than waiting for the next scheduled visit.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Breastfed and formula-fed babies grow differently, briefly",
      body: "Breastfed babies tend to gain weight slightly faster than formula-fed babies in the first 2 to 3 months, then slightly slower from about 3 to 12 months, which is exactly why the WHO growth charts (based on breastfed reference infants) are recommended for all babies during the first 2 years rather than older formula-industry-derived charts.",
    },
    {
      type: "heading",
      text: "Red Flags That Warrant a Call to Your Pediatrician",
      sub: "When to stop watching and start asking",
    },
    {
      type: "paragraph",
      text: "Most day-to-day feeding worries resolve on their own, but certain signs deserve a prompt call rather than a wait-and-see approach. These include: fewer than 6 wet diapers per day after day 5 of life, no weight gain over a 2 week period in the first 3 months, persistent refusal of all feeds for more than 8 to 12 hours, signs of dehydration (sunken fontanelle, dry mouth, no tears when crying, lethargy), or a consistent downward crossing of two or more percentile lines on the growth chart.",
    },
    {
      type: "paragraph",
      text: "For older babies and toddlers, additional red flags include gagging or choking with every meal regardless of texture, complete food refusal lasting more than a few days accompanied by weight loss, blood in stool, persistent vomiting after most feeds, or visible fatigue and reduced activity that seems out of proportion to a normal cold. None of these are meant to cause alarm on their own, they are simply the threshold where a professional assessment adds real value over continued home observation.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "Track total intake weekly, not daily",
      body: "Day-to-day intake naturally swings due to teething, minor illness, growth spurts, and simple mood. Instead of judging each day in isolation, mentally average intake over a full week; this smooths out normal variation and gives a much more accurate picture of whether your baby's overall nutrition is on track.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Iron RDA, 7-12 months", value: "11 mg/day" },
        { label: "Iron RDA, 1-3 years", value: "7 mg/day" },
        { label: "Calcium RDA, 12-24 months", value: "700 mg/day" },
        { label: "Vitamin D RDA, all infants", value: "400 IU/day" },
        { label: "Fat, percent of calories at 12-24 months", value: "30-40%" },
        { label: "Expected weight gain, 0-3 months", value: "150-200 g/week" },
        { label: "Expected weight gain, 3-6 months", value: "85-140 g/week" },
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Vitamin D is the one nearly everyone needs to supplement",
      body: "Breastfed babies typically need a 400 IU vitamin D supplement daily starting in the first days of life, since breast milk alone rarely provides enough. Formula-fed babies drinking at least 32 oz per day usually get sufficient vitamin D from formula alone, but always confirm the specific threshold with your formula's label and your pediatrician.",
    },
  ],
  takeaways: [
    "Milk supplies 100 percent of calories for the first 6 months, no exceptions needed.",
    "Iron and zinc needs spike at 6 months just as prenatal stores run low, making iron-rich foods a priority over fruit-first approaches.",
    "Total energy needs rise gradually, from about 500 kcal/day as a newborn to about 1000 to 1100 kcal/day by age 2.",
    "Fat should not be restricted in toddlers; it is essential fuel for brain development through at least age 2.",
    "Preterm and low birth weight babies often need adjusted, higher-density feeding plans and earlier iron supplementation.",
    "Growth curve trends over time matter far more than any single percentile or single weigh-in.",
    "Breastfed and formula-fed babies both thrive nutritionally, with small practical differences in feed interval and iron handling.",
    "Know the specific red flags (dehydration signs, percentile crossing, prolonged refusal) that warrant a pediatrician call.",
  ],
};
