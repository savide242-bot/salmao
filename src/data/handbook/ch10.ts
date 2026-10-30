import type { Chapter } from "./types";

export const ch10: Chapter = {
  number: 10,
  title: "Myths and Truths",
  subtitle: "40+ things you have been told that are not true",
  image: "myths",
  intro:
    "Feeding advice comes from every direction: grandparents, well-meaning friends, social media influencers, baby food marketing, and even outdated books that once sat on a nurse's shelf. Some of it is helpful, but a surprising amount is outdated, oversimplified, or simply wrong, and repeating it confidently does not make it true. This chapter separates persistent myths from current evidence-based guidance, grouped by theme, so you can feed your baby with confidence instead of confusion. We will walk through more than forty of the most common myths across starting solids, textures and choking, nutrients and supplements, allergies, milk and weaning, behavior and appetite, sleep and food, commercial products, cultural and family advice, and internet trends, along with a practical framework for evaluating any new claim you encounter and polite scripts for responding to relatives who mean well.",
  blocks: [
    {
      type: "heading",
      text: "Why Myths Spread So Easily",
    },
    {
      type: "paragraph",
      text: "Feeding guidance has changed considerably over the past few decades, and advice that was once standard is often repeated long after the underlying research and guidelines have moved on. A grandmother who was told to delay peanuts until age three in the 1990s is not being difficult when she repeats that advice today; she is repeating what was, at the time, the genuine medical consensus. Add in cultural traditions passed through generations, aggressive marketing from baby food and supplement companies, algorithm-driven social media that rewards dramatic claims over careful nuance, and the natural anxiety of new parenthood, and myths spread far faster than corrections ever can.",
    },
    {
      type: "paragraph",
      text: "Understanding why a myth exists often makes it easier to let go of, because most myths did not appear from nowhere. Many were reasonable given the information available decades ago, some were built around a kernel of truth that got exaggerated or misapplied, and others originated as marketing designed to sell a specific product rather than to reflect medical evidence. Approaching myths with curiosity rather than judgment, both toward yourself for having believed one and toward others who repeat one, makes it much easier to update your own practice and to have calm conversations with family members.",
    },
    {
      type: "callout",
      kind: "note",
      title: "How to use this chapter",
      body: "Each myth is paired with the current, evidence-based truth and a concrete action step. When in doubt, always confirm guidance with your own pediatrician, since individual circumstances, allergies, and medical history can change recommendations for your specific baby.",
    },
    {
      type: "heading",
      text: "Myths About Starting Solids",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Starting Solids",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Rice cereal should always be the first food",
          "There is no required first food; single-ingredient vegetables, fruits, meats, or iron-rich foods are equally valid starting points",
          "Choose based on your baby's interest and iron needs, not tradition",
        ],
        [
          "Baby-led weaning is dangerous and causes more choking",
          "Research shows no significant difference in choking incidents between baby-led weaning and traditional purees when foods are prepared safely",
          "Use age-appropriate shapes and textures regardless of the method you choose",
        ],
        [
          "You must start solids at exactly 6 months, not a day earlier or later",
          "6 months is a guideline average; readiness signs matter more than the exact date, within the roughly 4-6 month window",
          "Use the four readiness signs from Chapter 9, not the calendar alone",
        ],
        [
          "Babies need teeth before they can start eating solid food",
          "Babies use their gums to mash soft foods effectively long before teeth erupt, often for many months",
          "Offer appropriately soft textures regardless of tooth count",
        ],
        [
          "Starting solids too early is always dangerous, so later is always safer",
          "Starting significantly later than 6-7 months, especially delaying allergens, can raise other risks including allergy and iron deficiency",
          "Aim for the 4-6 month readiness window rather than delaying out of caution",
        ],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Purees must always come before finger foods",
      body: "Truth: many babies safely and successfully start directly with soft, appropriately sized finger foods, following the baby-led weaning approach, without ever needing purees first. What to do: choose the method that fits your family's comfort level, or combine both.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: A baby who gags on solids is not ready",
      body: "Truth: gagging is a normal, protective part of learning to eat and happens more frequently with new textures, especially in the first few weeks. What to do: stay calm, do not intervene unless it becomes true choking, and keep offering varied textures.",
    },
    {
      type: "heading",
      text: "Myths About Textures and Choking",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Textures and Choking",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "All food must be pureed smooth until 9 months to be safe",
          "Progressing textures in a timely way, from smooth to lumpy to soft finger foods, actually reduces later feeding difficulties and picky eating",
          "Advance texture roughly every 2-4 weeks as tolerated, guided by your baby's response",
        ],
        [
          "Grapes, cherry tomatoes, and hot dogs are fine if cut in half",
          "A round food cut in half is still round and can fully plug a small airway; it must be quartered lengthwise",
          "Quarter round, firm foods lengthwise, not just in half, until at least age 4",
        ],
        [
          "Popcorn and whole nuts are okay in small amounts",
          "Whole nuts and popcorn are among the highest choking risk foods for children under 4 due to shape and hardness",
          "Offer nuts only as smooth butters thinned with water or milk, and avoid popcorn until age 4",
        ],
        [
          "If a baby has never choked, the food must be safe",
          "Absence of past incidents does not guarantee a food's safety profile for a given age; risk is about shape, size, and hardness, not luck so far",
          "Follow established choking-hazard guidelines for shape and size regardless of past experience",
        ],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "The most damaging myth in this section",
      body: "Believing 'my baby has never gagged or choked so I do not need to learn first aid' is dangerous because choking can occur with a food that has been eaten safely dozens of times before, often due to a distracted moment or a slightly larger-than-usual bite. Every caregiver should complete an infant choking and CPR course before solids begin, regardless of experience so far.",
    },
    {
      type: "list",
      title: "Additional texture and choking myths worth retiring",
      items: [
        "Myth: Bigger pieces are safer because baby cannot swallow them whole. Truth: pieces that are too big to swallow can still lodge in the airway; size and shape both matter.",
        "Myth: Chunks of raw apple or carrot are fine once baby has a few teeth. Truth: hard raw fruits and vegetables should be steamed soft or grated finely until molars develop, closer to 18-24 months.",
        "Myth: Baby needs to sit in a bouncer or car seat for feeding to stay contained. Truth: reclined seats increase aspiration risk; use an upright high chair only.",
        "Myth: A baby who chews well on teething toys is ready for any texture. Truth: chewing a firm silicone toy is different from managing food that can break apart unpredictably in the mouth.",
      ],
    },
    {
      type: "heading",
      text: "Myths About Nutrients and Supplements",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Nutrients and Supplements",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Homemade baby food is always healthier than store-bought",
          "Both can be nutritious; quality depends on the ingredients and preparation used, not simply the source",
          "Check ingredient lists on store-bought options and prioritize variety and iron content either way",
        ],
        [
          "Organic baby food is nutritionally superior",
          "Organic and conventional produce offer similar core nutritional value for infants; the difference is mainly pesticide exposure, not nutrients",
          "Choose based on your budget and values, not a belief in superior nutrition",
        ],
        [
          "A chubby baby is automatically a healthy, well-fed baby",
          "Growth should be tracked along an individual growth curve over time, not judged by chubbiness at a single point",
          "Discuss your baby's growth chart trend with your pediatrician rather than comparing appearances",
        ],
        [
          "Salt should be added to make food tastier for baby",
          "An infant's kidneys cannot process much sodium; added salt in the first year is linked to future kidney strain and taste preference shifts",
          "Season with herbs, mild spices, and natural flavors instead of added salt",
        ],
        [
          "Vitamin D drops are unnecessary if baby gets some sun",
          "Sun exposure guidance for infants specifically advises against direct sun, making dietary vitamin D supplementation important for breastfed babies especially",
          "Follow your pediatrician's vitamin D recommendation regardless of season or sun habits",
        ],
        [
          "Baby needs a multivitamin supplement once solids start",
          "Most babies eating a reasonably varied diet plus breast milk or formula do not need a general multivitamin; iron and vitamin D are the two nutrients most often actually needed",
          "Ask your pediatrician specifically about iron and vitamin D rather than buying a broad supplement",
        ],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Superfoods and powders (like maca, spirulina, or collagen) boost baby's development",
      body: "Truth: no infant-specific evidence supports these products, several are not tested for infant safety, and some (like certain algae supplements) can contain concerning contaminant levels. What to do: rely on a varied whole-food diet rather than powders or superfood marketing claims.",
    },
    {
      type: "heading",
      text: "Myths About Allergies",
    },
    {
      type: "paragraph",
      text: "Few areas of infant feeding have changed as dramatically in the last fifteen years as allergen introduction, which means outdated allergy advice is extremely common and, in some cases, genuinely counterproductive. Older guidance from the 1990s and 2000s recommended delaying common allergens like peanut, egg, and fish until age one, two, or even three for high-risk infants. Large randomized trials, most notably the LEAP study published in 2015, reversed this entirely: early introduction of allergens, generally around six months and sometimes as early as four months for high-risk infants under medical guidance, meaningfully reduces the risk of developing that allergy.",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Allergies",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "You must delay peanut, egg, and other allergens until age one",
          "Current guidelines recommend introducing common allergens around 6 months, and possibly earlier for high-risk infants, to reduce allergy risk",
          "Introduce common allergens one at a time, at home, around 6 months, unless your doctor advises a supervised setting",
        ],
        [
          "If there is no family history of allergies, you do not need to worry about introduction order",
          "Early, sustained introduction reduces allergy risk for all infants, not just those with family history, though high-risk infants benefit most",
          "Introduce allergens early regardless of family history, watching for reactions each time",
        ],
        [
          "A reaction the second time a food is given, after a fine first try, cannot be an allergy",
          "Allergic reactions can occasionally appear on a later exposure, not necessarily the very first one, especially with lower initial amounts",
          "Watch for reaction signs at every early exposure to a new allergen, not just the first",
        ],
        [
          "Introducing multiple allergens on the same day is fine to save time",
          "Introducing one new allergen at a time makes it possible to identify the cause if a reaction occurs",
          "Space new allergens by a few days apart, especially in the first weeks of solids",
        ],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "The most damaging myth in this section",
      body: "The belief that delaying allergens is always the 'safe' choice has likely contributed to rising peanut allergy rates in some populations, according to the researchers behind the LEAP trial. Delaying introduction without a specific medical reason is now understood to raise, not lower, allergy risk for most infants.",
    },
    {
      type: "quote",
      text: "We spent decades telling parents to avoid the very foods that, introduced early, could have prevented the allergy in the first place.",
      author: "Allergy researcher commenting on reversed guidance",
    },
    {
      type: "heading",
      text: "Myths About Milk and Weaning",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Milk and Weaning",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Starting solids means you should stop breastfeeding or formula right away",
          "Milk remains the primary nutrition source through roughly the first year; solids are complementary, not a replacement",
          "Keep milk feeds steady through at least 9-12 months while adding solids gradually",
        ],
        [
          "Weaning must be fully completed by 12 months",
          "There is no fixed deadline; many families and major health bodies support continued breastfeeding well past the first birthday",
          "Wean on a timeline that works for your family, not an external deadline",
        ],
        [
          "Formula-fed babies do not need the same careful, gradual food introduction",
          "All babies, regardless of milk source, benefit from the same thoughtful, gradual introduction of solids and allergens",
          "Apply the same readiness signs and introduction pace regardless of feeding method",
        ],
        [
          "Cow's milk as a drink is fine from 6 months since it is 'just milk'",
          "Cow's milk as a main drink should wait until 12 months due to low iron content and kidney load, though small amounts in cooking are fine earlier",
          "Use breast milk, formula, or water as drinks before 12 months; save cow's milk as a drink for after the first birthday",
        ],
        [
          "Once solids start, you should follow a strict feed-then-solids-then-feed order every time",
          "Order can vary by baby temperament; some do better with milk first, others with solids first, and this can even change week to week",
          "Experiment with order and keep whatever works best for your baby's mood and hunger cues",
        ],
      ],
    },
    {
      type: "heading",
      text: "Myths About Behavior and Appetite",
    },
    {
      type: "paragraph",
      text: "Beyond specific foods, many myths involve how and when a baby should eat, often creating unnecessary pressure for parents to control amounts, timing, or table manners well before a baby is developmentally capable of any of that. These behavioral myths are particularly persistent because they tie into deep cultural beliefs about discipline, gratitude for food, and what a 'good eater' looks like, beliefs that often trace back to a parent's or grandparent's own childhood rather than to current developmental science.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: A baby should always finish the last spoonful",
      body: "Truth: forcing the last bite overrides natural fullness cues and research links this pattern to overeating tendencies later in childhood. What to do: let your baby decide when they are done, even mid-bite.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: New foods must be tried only once before giving up",
      body: "Truth: it often takes eight to fifteen exposures before a baby accepts a new food, and giving up after one or two tries is the single most common reason foods get labeled as 'disliked' incorrectly. What to do: keep offering rejected foods in small amounts alongside preferred ones.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Beware of bottle-propping and feeding while distracted",
      body: "Screens, constant walking around, or toys at the table during meals can interfere with a baby's ability to notice their own hunger and fullness signals, and bottle-propping specifically increases choking and ear infection risk.",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Behavior and Appetite",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Bigger portions mean a healthier, better-fed baby",
          "Appetite naturally varies day to day and meal to meal, often tracking growth spurts and illness",
          "Offer age-appropriate portions and let intake vary without commentary",
        ],
        [
          "Snacking between meals ruins appetite and should be avoided",
          "Small, balanced snacks are a normal and developmentally appropriate part of an infant's eating pattern given tiny stomach capacity",
          "Offer 2-3 planned snacks between meals rather than none or constant grazing",
        ],
        [
          "A clean plate means the meal was a success",
          "Success is better measured by variety offered and a positive mealtime experience, not an empty bowl",
          "Track variety and mood over a week rather than judging any single meal",
        ],
        [
          "A baby who refuses a food dislikes it forever",
          "Preferences shift quickly and often return with repeated, low-pressure exposure over following weeks",
          "Reoffer refused foods regularly without pressure or negative comments",
        ],
      ],
    },
    {
      type: "heading",
      text: "Myths About Sleep and Food",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Sleep and Food",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Starting solids early helps a baby sleep through the night",
          "Multiple controlled studies show introducing solids earlier does not reliably improve infant sleep duration or waking frequency",
          "Start solids based on readiness signs, not as a sleep strategy",
        ],
        [
          "A bigger dinner guarantees a longer night's sleep",
          "Night waking is driven mainly by sleep-cycle maturity, associations, and comfort, with dinner size playing only a minor role for most babies",
          "Build a consistent bedtime routine rather than relying on food volume alone",
        ],
        [
          "Cereal in the bottle before bed helps babies sleep longer",
          "This practice is not supported by evidence, poses a choking risk, and is discouraged by pediatric guidelines",
          "Never add solid food or cereal to a bottle; offer solids by spoon or hand at the table",
        ],
      ],
    },
    {
      type: "heading",
      text: "Myths About Commercial Baby Food Products",
    },
    {
      type: "list",
      title: "Common product myths worth retiring",
      items: [
        "Myth: Pouches are just as good as eating from a spoon or hand for oral development. Truth: pouches, if used exclusively, can limit tongue and jaw practice; offer some meals with a spoon or finger foods instead.",
        "Myth: A 'toddler' or 'baby' label on a snack guarantees it is nutritionally appropriate. Truth: many commercial toddler snacks are high in sugar or salt despite marketing; read the label, not the front of the package.",
        "Myth: Baby food in a jar has fewer nutrients than fresh food. Truth: gentle commercial processing generally preserves nutrients reasonably well; freshness matters less than variety overall.",
        "Myth: Fortified baby cereal is required for adequate iron. Truth: iron-rich foods like meat, lentils, and fortified cereal are all valid options; no single product is mandatory.",
        "Myth: 'Organic' or 'natural' labeling means a product is automatically healthier for babies. Truth: these labels refer to farming methods, not sugar, salt, or overall nutritional balance.",
      ],
    },
    {
      type: "heading",
      text: "Myths from Cultural and Family Advice",
    },
    {
      type: "paragraph",
      text: "Every culture has its own long-standing feeding traditions, and many carry genuine wisdom, such as an emphasis on family meals or gentle, patient feeding pace, that current evidence actually supports. However, some traditional practices, formed before modern research on allergies, choking, and nutrition existed, no longer align with what we now know to be safest. Approaching these conversations with respect for the tradition while gently sharing updated information tends to work far better than dismissing family advice outright.",
    },
    {
      type: "table",
      title: "Myth / Truth / What To Do: Cultural and Family Advice",
      headers: ["Myth", "What Is Actually True", "What To Do"],
      rows: [
        [
          "Adding cereal or bread to a bottle helps a fussy baby settle",
          "This is a choking hazard and not supported by any pediatric body; it also overrides responsive feeding",
          "Offer extra comfort or a slightly earlier bedtime instead of altering the bottle",
        ],
        [
          "A baby must finish every jar or portion prepared, since wasting food is disrespectful",
          "Respecting fullness cues is more important than finishing a portion; smaller planned portions reduce both waste and pressure",
          "Prepare smaller amounts and offer seconds if wanted, rather than a large plate that must be cleared",
        ],
        [
          "Certain foods are 'too heavy' or 'too cold' for a baby's stomach regardless of any evidence",
          "Temperature and traditional food categorizations are cultural, not physiological, concerns for a healthy infant's digestion",
          "Focus on texture, allergen safety, and choking risk rather than traditional hot/cold food categories",
        ],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "A script for responding to a relative's outdated advice",
      body: "Try: 'I know that's what the guidance used to say, and I really appreciate you caring so much. Our pediatrician actually updated us on the newer research, want me to send you the article?' This validates their care, avoids conflict, and opens the door to sharing current information without confrontation.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "A script for a firmer boundary when needed",
      body: "Try: 'We've decided to follow our pediatrician's specific plan for [allergen introduction / texture progression], so please don't offer [food] without checking with us first. I know you want what's best for the baby, and this is what that looks like for us.'",
    },
    {
      type: "heading",
      text: "Myths from Internet Trends",
    },
    {
      type: "paragraph",
      text: "Social media has introduced a new category of feeding myth: the visually dramatic trend that spreads because it performs well on video, not because it has been studied or endorsed by any pediatric body. These trends often involve extreme claims (a single food that 'cures' allergies or eczema), elaborate meal-prep rituals presented as necessary rather than optional, or fear-based content suggesting that ordinary, well-established practices are secretly dangerous.",
    },
    {
      type: "list",
      title: "Common internet-trend myths",
      items: [
        "Myth: A specific viral 'allergy-proofing' smoothie or oil protects against all food allergies. Truth: no single food or supplement prevents allergies broadly; early, varied allergen exposure is the only evidence-based strategy.",
        "Myth: Baby must eat only foods prepared in an elaborate, color-coded system to be considered a good parent. Truth: consistent variety over weeks matters far more than any single day's presentation.",
        "Myth: A trending 'detox' or elimination diet will fix fussiness or reflux without medical guidance. Truth: unsupervised elimination diets in infants risk nutritional gaps and should only be done with a pediatrician or dietitian.",
        "Myth: If an influencer with a large following says it, it must be backed by research. Truth: follower count has no relationship to medical accuracy; check the actual source cited, if any.",
      ],
    },
    {
      type: "heading",
      text: "How to Evaluate Any New Claim",
    },
    {
      type: "paragraph",
      text: "When you encounter a new feeding claim, whether from a relative, a stranger online, or a product label, it helps to have a consistent framework rather than evaluating each one from scratch under time pressure. Start by asking where the claim originates: a claim traceable to a specific peer-reviewed study or a major pediatric body like the AAP, WHO, or NHS sits at the top of the reliability hierarchy, while a claim traceable only to 'I read somewhere' or a single influencer's personal experience sits at the bottom, regardless of how confidently it is stated.",
    },
    {
      type: "table",
      title: "Source Hierarchy for Feeding Claims",
      headers: ["Source Level", "Example", "How Much Weight to Give It"],
      rows: [
        ["Highest", "Major pediatric body guidelines (AAP, WHO, NHS) and systematic reviews", "Treat as current best practice; follow unless your own doctor advises otherwise"],
        ["High", "Individual randomized controlled trials in reputable journals", "Strong evidence, but check if it has been replicated or incorporated into guidelines yet"],
        ["Moderate", "Your own pediatrician's individualized advice", "Highly relevant to your specific baby, may reasonably differ from general guidelines"],
        ["Low", "Parenting books, blogs, and general articles", "Useful for ideas, but verify specific factual claims against a higher source"],
        ["Lowest", "Social media posts, forums, and anecdotes from one family", "Treat as a personal story, not evidence; do not change practice based on this alone"],
      ],
    },
    {
      type: "list",
      title: "Red flags that a claim is likely a myth",
      items: [
        "It promises a dramatic, single-cause fix ('this one food cures colic')",
        "It contradicts multiple major health organizations at once without citing new research",
        "It relies on fear or urgency language rather than calm explanation",
        "It is being sold alongside a specific product you are urged to buy immediately",
        "It cannot be traced back to any named study, guideline, or professional source",
        "It uses testimonials as its main form of proof",
      ],
    },
    {
      type: "list",
      title: "Questions to ask before changing your practice based on a claim",
      items: [
        "Where did this claim originate, and can I find the original source?",
        "Is this recommended for babies in general, or specifically for my baby's age and health situation?",
        "Does my pediatrician agree with this, and have I actually asked them?",
        "What would the downside be if this claim turns out to be wrong?",
        "Is anyone profiting from me believing and acting on this claim?",
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "When you hear a new claim",
      body: "Ask whether it comes from a current pediatric guideline or an outdated tradition, and check with your pediatrician before making a major change to your baby's diet or feeding routine.",
    },
    {
      type: "quote",
      text: "The goal is not a perfect eater, it is a confident, curious eater who trusts their own body.",
      author: "Registered pediatric dietitian",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Myths addressed in this chapter", value: "40+ across 9 themes" },
        { label: "Exposures often needed to accept a new food", value: "8 to 15 tries" },
        { label: "Recommended allergen introduction window", value: "Around 6 months (earlier if high-risk, per doctor)" },
        { label: "Age to avoid honey until", value: "12 months, due to botulism risk" },
        { label: "Age to introduce cow's milk as a drink", value: "12 months" },
        { label: "Choking risk difference, BLW vs purees", value: "No significant difference when done safely" },
        { label: "Highest-reliability sources for claims", value: "AAP, WHO, NHS guidelines and systematic reviews" },
      ],
    },
  ],
  takeaways: [
    "Many popular feeding rules are outdated traditions rather than current evidence, and that is understandable, not a failure by whoever repeats them.",
    "Allergens are now recommended earlier, around six months, not delayed until age one or beyond, and delaying can raise allergy risk.",
    "Round, firm foods must be quartered lengthwise, not just halved, and whole nuts and popcorn should wait until age 4.",
    "Gagging, food refusal, and appetite swings are normal and not signs of failure or a problem to fix.",
    "Forcing the last bite or a clean plate can override a baby's natural fullness cues and shape eating habits later.",
    "Cultural and family advice often comes from real care; respond with respectful scripts rather than dismissiveness.",
    "Evaluate new claims using a source hierarchy, watch for red flags like fear language or product sales, and ask direct questions before changing practice.",
    "When in doubt, check any new claim against current pediatric guidelines and confirm with your own doctor.",
  ],
};
