import type { Chapter } from "./types";

export const ch06: Chapter = {
  number: 6,
  title: "Water and Drinks",
  subtitle: "What to offer, how much, and what to skip",
  image: "water",
  intro:
    "Once solid foods enter the picture, questions about drinks multiply fast: does my baby need water now, how much is too much, when can they finally have cow's milk, and what about the juice box grandma keeps offering at the park? This chapter untangles the full picture of fluids for babies and toddlers, covering infant fluid physiology, how much milk is still needed at each stage, water safety from the tap to the bottle, a week-by-week method for teaching cup drinking, and a full comparison of cow's milk against the plant-based alternatives now crowding supermarket shelves. We will also cover juice, smoothies, tea, herbal infusions and caffeine, along with the practical side of hydration during hot weather and illness, dehydration warning signs, a simple oral rehydration solution recipe, and the surprisingly large role drinks play in long-term dental health. Getting drinks right is a quieter but equally important part of building lifelong healthy habits alongside solid foods, and the choices made in these early years set patterns that often persist for a decade or more.",
  blocks: [
    {
      type: "heading",
      text: "Fluid physiology in infants",
      sub: "Why babies cannot handle water the way adults do",
    },
    {
      type: "paragraph",
      text: "An infant's kidneys are structurally and functionally immature at birth and take roughly the first two years of life to reach full adult concentrating capacity. This means a young baby's kidneys cannot dilute or excrete large volumes of free water as efficiently as an older child's or adult's, and a baby's body composition is also proportionally higher in water and lower in the fat and muscle mass that buffers fluid shifts in older bodies. Combined, these two facts explain why excess plain water intake before 6 months is not just unnecessary but genuinely risky: it can dilute the sodium concentration in the blood, a condition called water intoxication or hyponatremia, which in severe cases causes seizures, low body temperature, lethargy and in rare cases can be fatal.",
    },
    {
      type: "paragraph",
      text: "Breast milk and formula are formulated with exactly the sodium, electrolyte and fluid balance an infant needs, and because they also provide calories, an infant who is fed a normal volume of milk on demand is essentially never at risk of dehydration in temperate conditions, even in hot weather, provided feeding continues normally. As solid foods are introduced from around 6 months, the total volume of food and its lower water content compared to milk means that offering small amounts of plain water alongside meals becomes both safe and useful, helping a baby learn to associate a cup with mealtimes and easing the work the gut does to process more concentrated solid foods.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Water needed before 6 months", value: "None; breast milk or formula is sufficient even in heat" },
        { label: "Water introduction", value: "Small sips from around 6 months, offered in a cup at meals" },
        { label: "Total water by 12 months", value: "About 800 ml to 1 liter per day from all fluids and food combined" },
        { label: "Cow's milk as a main drink", value: "From 12 months onward, 350-500 ml per day" },
        { label: "Juice recommendation", value: "Avoid before 12 months; limit to 100-120 ml/day after, diluted" },
        { label: "Cup introduction", value: "Open or straw cup from around 6 months" },
        { label: "Bottle weaning target", value: "Fully off bottles by 12-18 months" },
      ],
    },
    {
      type: "heading",
      text: "Water by age, in real amounts",
    },
    {
      type: "paragraph",
      text: "From 6 to 12 months, plain water should be offered in small sips alongside meals rather than as a way to quench large thirst, since milk still supplies the bulk of hydration; a realistic target is 60 to 120 ml total across the day by around 9 to 12 months, mostly sipped in small amounts from an open or straw cup during 2 to 3 meals. From 12 to 24 months, as milk volume naturally decreases toward 350 to 500 ml per day, water intake rises to fill the gap, and toddlers in this age range typically need roughly 800 ml to 1 liter of total fluid per day from water, milk and the water content of food combined, though this varies with climate, activity level and diet.",
    },
    {
      type: "table",
      title: "Drinks by age: type, amount and notes",
      headers: ["Drink type", "From what age", "Daily amount", "Notes"],
      rows: [
        ["Breast milk or formula", "Birth onward", "On demand, gradually decreasing after 12 months", "Main source of nutrition and hydration through first year"],
        ["Plain water", "6 months", "60-120 ml by 12 months; 800ml-1L total fluid by 24 months", "Offer in an open or straw cup, not a bottle, alongside meals"],
        ["Cow's milk (whole)", "12 months", "About 350-500 ml per day", "Should not replace all other foods or crowd out solid meals"],
        ["100% fruit juice", "Avoid under 12 months; limit 12+", "Max 100-120 ml per day if given at all", "Dilute 1 part juice to 1 part water; whole fruit is always better"],
        ["Flavored or sweetened drinks / soda", "Not recommended at any age in early childhood", "None", "No nutritional benefit, promotes sugar preference and tooth decay"],
        ["Plant-based milks (fortified)", "12 months, with pediatric guidance", "As advised by a health professional", "Check protein and fat content; not a direct breast milk/formula substitute before 12m"],
        ["Herbal tea (caffeine-free, weak)", "12 months, occasional", "Small amounts, occasional", "Not a replacement for water or milk; check ingredient safety"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Never dilute formula or add extra water to bottles",
      body: "Adding extra water to stretch formula or to a bottle of expressed milk reduces caloric and nutrient intake and can also risk water intoxication in a young infant. Always prepare formula exactly according to the manufacturer's instructions, using the provided scoop and level measurements.",
    },
    {
      type: "heading",
      text: "Water safety: source, treatment and what to check",
    },
    {
      type: "paragraph",
      text: "Tap water in most developed countries is safe for babies over 6 months without special treatment, but a few specific situations warrant caution. Well water should be tested for nitrates and bacteria before use with an infant, since high nitrate levels have been linked to a serious blood condition in babies under 6 months called methemoglobinemia, sometimes referred to as blue baby syndrome; a nitrate level above 10 mg/L (the standard safety threshold) means the water should not be used to prepare formula or given directly to a baby under 6 months. If you are unsure of your water source's safety, or are traveling in an area with questionable water quality, boil water for one minute (three minutes above 2000 meters altitude) and let it cool to room temperature before using it for drinking or formula preparation.",
    },
    {
      type: "paragraph",
      text: "Fluoride is a separate consideration: most municipal water supplies are fluoridated at levels considered safe and beneficial for dental health, but babies fed formula reconstituted exclusively with fluoridated water from birth may be at a slightly increased risk of mild fluorosis (faint white marks on adult teeth that emerge years later), so some pediatric dentists suggest using low-fluoride bottled water for formula preparation in infants under 6 months if fluoride levels are high, though this is a minor cosmetic concern rather than a health risk. Bottled water is not inherently safer than treated tap water and, unless labeled as suitable for infants, may contain higher mineral or sodium content than is ideal; if you do use bottled water, choose a low-mineral-content option and check the label for sodium under 20 mg/L.",
    },
    {
      type: "list",
      title: "Water safety checklist",
      items: [
        "Test well water for nitrates and bacteria annually, or before first use with an infant",
        "Boil water for 1 minute if source safety is uncertain, then cool before use",
        "Never use water labeled 'not for infant consumption' from decorative or unfiltered sources",
        "Check bottled water labels for sodium content under 20 mg/L if used regularly",
        "Run the tap for a few seconds before filling if using an older home's plumbing, to flush any standing lead",
      ],
    },
    {
      type: "callout",
      kind: "note",
      title: "Home water filters and softeners",
      body: "Water softeners add sodium during the softening process and are not recommended as the sole water source for infant formula preparation; use an unsoftened tap or a certified filter instead. Standard carbon filter pitchers are fine for general drinking water once a baby is on water regularly from 6 months.",
    },
    {
      type: "heading",
      text: "Cup progression: a week-by-week teaching method",
    },
    {
      type: "paragraph",
      text: "Open cups, though messier at first, teach the most natural, mature drinking pattern and are worth the practice from around 6 months with close supervision. Straw cups are a helpful complementary tool, encouraging tongue and lip movements similar to those used in speech development, while spouted sippy cups, though convenient for travel, are best used sparingly and phased out well before age two, since prolonged sucking on a spout can encourage an immature swallow pattern and allow liquid to pool against the front teeth for long stretches, both of which pediatric dentists flag as concerns.",
    },
    {
      type: "table",
      title: "Cup training: week-by-week plan from 6 months",
      headers: ["Timeframe", "Cup type", "Goal", "What to expect"],
      rows: [
        ["Week 1-2", "Small open cup (shot-glass sized), 15-30 ml water", "Get comfortable with cup at mouth, tipping motion", "Lots of spills, dribbling, more play than drinking"],
        ["Week 3-4", "Open cup, hand-over-hand help", "Coordinate tip and swallow, 1-2 real sips per meal", "Improving control, still messy, offer at every meal"],
        ["Month 2-3", "Open cup + introduce straw cup", "Independent short sips from open cup", "Straw may need practice; try squeezing a pouch to prime it"],
        ["Month 3-4", "Both cup types in rotation", "Drink 30-60 ml across a meal independently", "Fewer spills, baby lifts and tips cup unassisted"],
        ["Month 5-6 (approx 11-12m)", "Open and straw cups; phase out bottle", "Full meal's fluid from a cup, bottle only for milk if any", "Ready for full bottle weaning by 12-18 months"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Make cup practice low-stakes",
      body: "Do cup practice over a towel or outside, and expect the first several weeks to be more spill than success. Fill the cup with only a small amount of water at a time so spills are minor, and follow your baby's lead rather than forcing a fixed volume.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Sippy cup pitfalls",
      body: "Avoid letting a toddler carry a sippy cup of milk or juice around all day for constant sipping; this pattern is strongly linked to early childhood tooth decay because it keeps sugars in contact with teeth for extended periods. Offer drinks at defined times, mainly with or after meals, rather than as a constant companion.",
    },
    {
      type: "heading",
      text: "Breast milk and formula volumes through the first year",
    },
    {
      type: "paragraph",
      text: "Breast milk or formula should remain the primary source of nutrition and hydration through the first year of life, with solid foods complementing rather than replacing milk feeds, especially before 9 months. In the 6 to 9 month range, most babies still take roughly 700 to 900 ml of breast milk or formula per day across 3 to 5 feeds, even as they begin eating one to three small meals of solids daily. Between 9 and 12 months, milk intake typically eases slightly to around 500 to 750 ml per day as solids become more substantial, and by 12 months many toddlers naturally settle around 350 to 500 ml of milk (now often cow's milk) per day alongside three meals and one to two snacks of solid food.",
    },
    {
      type: "paragraph",
      text: "It is normal and expected for milk volume to decrease gradually as solid food volume increases; parents should not chase a fixed milk number so rigidly that it crowds out appetite for meals, nor should they cut milk abruptly, since it remains an important source of fat, calories and, in the case of formula, iron through the entire first year. Breastfeeding can continue well beyond 12 months for as long as both mother and baby wish, with the World Health Organization recommending continued breastfeeding alongside solid foods up to 2 years of age or beyond.",
    },
    {
      type: "heading",
      text: "Cow's milk and plant-based milks compared",
    },
    {
      type: "paragraph",
      text: "From 12 months, whole cow's milk becomes an appropriate main drink, chosen specifically for its full fat content, which supports the brain development still underway through toddlerhood; reduced-fat and skim milks are not recommended before age 2 unless specifically advised by a pediatrician for a child with excess weight gain or a family history of high cholesterol. Plant-based milks vary enormously in nutritional adequacy and should not be assumed interchangeable with cow's milk or with each other; unfortified almond or rice milk, for instance, provides only a small fraction of the protein and calcium of cow's milk and is not suitable as a primary drink for young toddlers without careful dietary planning around protein elsewhere.",
    },
    {
      type: "table",
      title: "Milk and milk-alternative comparison (per 250 ml serving)",
      headers: ["Milk type", "Protein (g)", "Fat (g)", "Calcium (mg, fortified where noted)", "Suitability as main drink under 2"],
      rows: [
        ["Whole cow's milk", "8", "8", "300", "Suitable from 12 months as main drink"],
        ["Breast milk", "1", "4-5", "25-35 (highly bioavailable)", "Primary food through 12+ months, continued as desired"],
        ["Infant formula (prepared)", "2", "5-6", "80-100 (fortified)", "Primary food through 12 months"],
        ["Soy milk (fortified, whole)", "7", "4", "300 (fortified)", "Possible from 12 months with pediatric input; check added sugar"],
        ["Oat milk (fortified)", "2-3", "3-5", "300 (fortified)", "Not recommended as sole main drink under 2; low protein"],
        ["Almond milk (unfortified)", "1", "2.5", "0-450 (varies, check label)", "Not suitable as a main drink; very low protein"],
        ["Rice milk", "0.5", "2.5", "0-300 (fortified varieties)", "Avoid as main drink; also an arsenic exposure concern in excess"],
        ["Goat's milk (pasteurized, fortified)", "8", "8", "300", "Similar rules to cow's milk; must be fortified with folate/B12"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Rice milk and arsenic",
      body: "Rice naturally accumulates more arsenic from soil and water than most other grains, and rice milk given regularly in large volumes has been flagged by food safety agencies as a potential arsenic exposure concern for young children. It should not be used as a primary drink for infants or toddlers.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "If choosing a plant milk after 12 months",
      body: "Fortified whole soy milk is the closest nutritional match to cow's milk among common plant milks, particularly for protein content. If your family avoids dairy entirely, discuss the choice with a pediatrician or dietitian to ensure protein, calcium, vitamin D and B12 needs are met through the overall diet.",
    },
    {
      type: "heading",
      text: "Juice, smoothies and sweetened drinks",
    },
    {
      type: "paragraph",
      text: "The American Academy of Pediatrics recommends no fruit juice at all before 12 months of age, and even after that, limiting juice to no more than 120 ml per day for toddlers aged 1 to 3, ideally diluted and served with a meal rather than sipped throughout the day. Juice, even 100 percent juice with no added sugar, delivers concentrated natural sugars without the fiber that slows sugar absorption in whole fruit, making it far easier to overconsume calories and sugar in liquid form than by eating the fruit itself; a small glass of apple juice can contain the sugar of two to three whole apples with none of the fiber or chewing effort.",
    },
    {
      type: "paragraph",
      text: "Smoothies occupy a middle ground: because they are blended whole fruit (and sometimes vegetables, yogurt or milk), they retain more fiber than juice and can be a reasonable way to include fruit servings from around 12 months, particularly for toddlers going through a picky phase with whole fruit pieces. Even so, portion control matters, since it remains easy to drink far more fruit in smoothie form than a toddler would ever eat whole; a sensible smoothie portion for a toddler is around 100 to 125 ml, treated as one fruit serving rather than an unlimited drink. Sweetened drinks, including soda, sports drinks, flavored milks with added sugar, and drinks marketed as toddler juices or fruit drinks, have no place in a young child's diet; they offer no nutritional benefit, actively train a preference for intense sweetness that can affect food acceptance for years, and are strongly linked to early childhood dental decay and excess weight gain.",
    },
    {
      type: "list",
      title: "Why juice and sweet drinks are best avoided or strictly limited",
      items: [
        "They displace more nutritious foods and milk in a small stomach",
        "They deliver concentrated sugar without the fiber of whole fruit",
        "Frequent sipping bathes teeth in sugar for hours, sharply raising cavity risk",
        "They train a preference for intense sweetness that can affect eating habits later",
        "Even 100% juice offers little advantage over eating the whole fruit",
        "Excess juice intake in toddlers is linked to loose stools and poor weight gain in some children",
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Juice is a healthy way to get fruit servings",
      body: "Juice removes the fiber and much of the chewing effort found in whole fruit, and it is far easier to over-consume in liquid form. A piece of real fruit is almost always the better choice for both nutrition and dental health, and whole fruit should always be offered first.",
    },
    {
      type: "heading",
      text: "Tea, herbal infusions and caffeine",
    },
    {
      type: "paragraph",
      text: "Caffeinated drinks, including regular tea, coffee, cola and energy drinks, should not be given to infants or toddlers; caffeine is a stimulant that can affect sleep, heart rate and calcium absorption in a small body with no established safe caffeine threshold at this age. Herbal teas marketed for babies (such as chamomile or fennel preparations) are sometimes used traditionally for colic or teething discomfort, but they are not necessary, offer no proven nutritional benefit, can displace milk intake in small volumes, and some herbal ingredients have not been rigorously tested for infant safety, so any herbal tea should only be given occasionally, in small amounts, after checking ingredients with a pediatrician, and generally not before 6 to 12 months.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Never give honey-sweetened tea or drinks under 12 months",
      body: "Honey, including as a tea sweetener, can contain Clostridium botulinum spores that an infant's immature gut cannot yet neutralize, risking infant botulism. Do not give honey in any form, including baked into foods or dissolved in a drink, before 12 months of age.",
    },
    {
      type: "heading",
      text: "Dehydration assessment and oral rehydration",
    },
    {
      type: "paragraph",
      text: "In hot weather or during fever, vomiting or diarrhea, babies and toddlers lose fluid faster than usual and need more frequent offers of milk, water, or, when illness involves significant fluid loss, an oral rehydration solution (ORS) formulated with the correct balance of salts and sugar. Continue breastfeeding or formula on demand during illness, since these remain excellent sources of both fluid and calories and should not be withheld; for toddlers already eating a full diet, offer small sips of water or ORS frequently, every 10 to 15 minutes, rather than a large volume at once, which is more likely to be vomited back up.",
    },
    {
      type: "table",
      title: "Signs of dehydration by severity",
      headers: ["Sign", "Mild dehydration", "Moderate to severe dehydration"],
      rows: [
        ["Wet diapers", "Slightly fewer than usual", "Fewer than 3-4 in 24 hours, or none in 6-8 hours"],
        ["Mouth and lips", "Slightly dry", "Very dry, sticky saliva or none"],
        ["Behavior", "Mildly fussy or thirsty", "Lethargic, unusually sleepy, hard to rouse"],
        ["Fontanelle (under 18 months)", "Normal", "Visibly sunken"],
        ["Tears when crying", "Present", "Absent"],
        ["Eyes", "Normal", "Sunken-looking"],
        ["Skin", "Normal elasticity", "Slow to spring back when gently pinched"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "When to call a doctor about dehydration",
      body: "If your baby shows any moderate to severe signs above, is under 3 months with any signs of dehydration at all, cannot keep fluids down for more than a few hours, or has blood in vomit or stool, contact your pediatrician promptly or seek urgent care rather than waiting.",
    },
    {
      type: "callout",
      kind: "note",
      title: "A basic oral rehydration solution recipe",
      body: "A standard homemade ORS recipe when commercial packets are unavailable is 1 liter of clean, boiled and cooled water, 6 level teaspoons of sugar, and half a level teaspoon of salt, mixed thoroughly. This should only be used as a stopgap and discussed with a healthcare provider as soon as possible; commercial ORS packets (like Pedialyte or WHO-formula sachets) are preferred whenever available because the electrolyte balance is precisely calibrated.",
    },
    {
      type: "list",
      title: "Practical hydration steps during illness",
      items: [
        "Offer breast milk or formula on demand; do not restrict it during illness",
        "Offer small sips of water or ORS every 10-15 minutes during active vomiting or diarrhea",
        "Avoid full-strength juice or soda during a stomach illness; the sugar can worsen diarrhea",
        "Resume normal solid foods as soon as your child is willing and able to eat",
        "Weigh a young infant if illness is prolonged, since weight loss is an objective marker of fluid loss",
      ],
    },
    {
      type: "quote",
      text: "Water is the simplest gift you can offer your child's growing body, but timing, quantity and source are what make it truly helpful rather than harmful.",
      author: "Pediatric hydration guidance, commonly cited",
    },
    {
      type: "quote",
      text: "A baby who is feeding well on breast milk or formula is essentially never dehydrated from heat alone; the drinks that cause the most trouble are the ones we add unnecessarily.",
      author: "Pediatric nutrition consensus, summarized",
    },
    {
      type: "heading",
      text: "Hot weather, increased activity and travel",
    },
    {
      type: "paragraph",
      text: "In hot climates or during travel, increase the frequency of milk feeds for babies under 6 months rather than adding water, since breast milk and formula remain sufficient hydration even in warm weather when fed on demand; a baby who seems unsettled in the heat usually needs an extra feed, not a bottle of water. For babies and toddlers over 6 months, offer water more frequently throughout a hot day, in small, regular sips rather than one large serving, and dress your child in light, breathable clothing and limit direct sun exposure to reduce fluid loss in the first place. Increased activity as toddlers become more mobile also raises fluid needs meaningfully; offer water proactively through the day during active play, rather than waiting for a request, since young children are not always reliable at recognizing or communicating thirst until they are already somewhat dehydrated.",
    },
    {
      type: "heading",
      text: "Oral health and drinks",
    },
    {
      type: "paragraph",
      text: "The pattern and timing of drink exposure matters as much as sugar content for dental health. Any sweetened drink, including juice and flavored milk, left in a bottle or sippy cup for a child to sip throughout the day or, worse, to fall asleep with, bathes the teeth in sugar for extended periods and is one of the strongest known risk factors for early childhood caries, sometimes called baby bottle tooth decay, which can affect teeth as soon as they emerge. Water is the only drink that is safe to sip freely between meals without a dental health tradeoff, which is one more reason to make it the default drink from 6 months onward and to move all milk and any occasional juice to mealtimes rather than constant grazing.",
    },
    {
      type: "list",
      title: "Drink habits that protect teeth",
      items: [
        "Never put a baby or toddler to bed with a bottle of milk, juice or any sweetened drink",
        "Offer milk and juice with meals, and water freely between meals",
        "Move from bottle to cup by 12-18 months to limit prolonged sipping",
        "Wipe gums and brush emerging teeth after the last drink of the evening",
        "Choose plain water for thirst, saving milk and any juice for designated times",
      ],
    },
  ],
  takeaways: [
    "Breast milk or formula remains the main drink through the first year; water is not needed, and can be risky, before 6 months.",
    "Introduce small sips of water in an open or straw cup around 6 months, alongside meals, building to about 60-120 ml by 12 months.",
    "Hold off on cow's milk as a main drink until 12 months, choose whole milk, and check plant milk labels carefully before relying on them.",
    "Avoid juice before 12 months entirely and limit it to about 100-120 ml a day after, diluted and served with meals, not sipped all day.",
    "Test well water for nitrates, boil water if source safety is uncertain, and never dilute infant formula with extra water.",
    "Teach cup drinking gradually from 6 months with an open or straw cup, aiming to be fully off bottles by 12-18 months.",
    "Watch for dehydration signs during hot weather or illness, offer fluids frequently, and use a proper oral rehydration solution when advised.",
    "Never let a baby sip sweetened drinks throughout the day or fall asleep with a bottle; this is a leading cause of early tooth decay.",
  ],
};
