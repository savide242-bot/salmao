import type { Chapter } from "@/data/handbook/types";

export const ch09: Chapter = {
  number: 9,
  title: "Responsive Feeding and the Division of Responsibility",
  subtitle: "You decide what, when and where. Your baby decides whether and how much",
  image: "mealtime",
  intro:
    "If you take only one framework from this entire book, make it this one. The Division of Responsibility in feeding, developed by dietitian and family therapist Ellyn Satter, is the single most researched and most practically useful model for raising a child who eats well, without a fight, for life. It is not a technique for getting more food into your baby tonight. It is a structure that, held consistently over months and years, produces children who self-regulate their intake, accept a wide variety of foods, and do not carry food anxiety, sneaking, or restriction into adulthood. This chapter lays out exactly what the division of responsibility means in practice, at every meal, with every relative in the room, and gives you the specific words to say when pressure creeps in, because it always does. We will cover the physiology of hunger and fullness cues by age, the research on why pressure backwards backfires, why distraction feeding undermines self-regulation, how praise can be just as counterproductive as bribery, and the structural habits, meal timing, plating, modelling, that make responsive feeding actually workable on a Tuesday night with a tired toddler and no time.",
  blocks: [
    {
      type: "heading",
      text: "The Division of Responsibility, in Full",
      sub: "Two short lists that resolve almost every mealtime conflict",
    },
    {
      type: "paragraph",
      text: "Ellyn Satter's model divides feeding into jobs that belong to the parent and jobs that belong to the child, and it insists, firmly, that neither party should do the other's job. The parent is responsible for what food is offered, when meals and snacks happen, and where eating takes place. The child is responsible for whether they eat at all, and how much of what is offered they eat. That is the entire model. It sounds almost too simple to be a solution to years of dinner-table battles, but the vast majority of feeding conflict in toddlers and preschoolers comes from one party quietly, often unintentionally, taking over the other's job.",
    },
    {
      type: "paragraph",
      text: "When a parent decides not just what is served but insists the child eat three more bites of broccoli before leaving the table, the parent has stepped into the child's job of deciding how much. When a toddler refuses everything except crackers and a parent responds by making a separate plate of buttered noodles every single night, the child has effectively taken over the parent's job of deciding what is offered. Both patterns feel reasonable in the moment and both reliably make feeding worse over the following weeks and months, because they remove the child's opportunity to practise reading and trusting their own internal hunger and fullness signals.",
    },
    {
      type: "table",
      title: "The Division of Responsibility at a Glance",
      headers: ["Job", "Who owns it", "What this looks like in practice"],
      rows: [
        ["What food is offered", "Parent", "Choose the menu, include at least one food the child reliably eats"],
        ["When meals and snacks happen", "Parent", "3 meals plus 2 planned snacks, spaced 2.5-3.5 hours apart"],
        ["Where eating happens", "Parent", "High chair or table, no grazing around the house, no screens"],
        ["Whether to eat", "Child", "Never forced, bribed or coaxed to take a bite"],
        ["How much to eat", "Child", "Portion decided by the child, plate not monitored bite by bite"],
      ],
    },
    {
      type: "callout",
      kind: "note",
      title: "Why this is not permissive feeding",
      body: "The division of responsibility is often misread as 'let the child eat whatever they want whenever they want,' which is the opposite of what it says. The structure around meals, what is offered, when, and where, is entirely parent-led and non-negotiable. Only the eating itself, the amount and the choice among what is offered, belongs to the child. This is structured permissiveness, not chaos.",
    },
    {
      type: "heading",
      text: "Hunger and Fullness Cues by Age",
      sub: "Learning to read the signals instead of the clock or the plate",
    },
    {
      type: "paragraph",
      text: "Babies and toddlers communicate hunger and fullness constantly, but the signals change shape as fine motor and verbal skills develop. A 6-month-old leaning forward with an open mouth toward the spoon is showing hunger exactly as clearly as a 3-year-old who says 'I'm still hungry, more please.' Learning your own child's version of these cues, rather than defaulting to the clock, the size of the portion you made, or what a chart in a book says is 'normal,' is the practical skill underneath the whole division of responsibility.",
    },
    {
      type: "table",
      title: "Reading Hunger and Fullness Cues by Age",
      headers: ["Age", "Hunger cues", "Fullness cues"],
      rows: [
        ["6-9 months", "Leaning toward spoon, opening mouth, reaching for food, excited movements when food appears", "Turning head away, closing mouth, pushing spoon away, slowing down, leaning back"],
        ["9-12 months", "Pointing at food, banging tray, vocalizing when food is in sight, grabbing for more", "Dropping food deliberately, throwing food, batting at spoon, arching back"],
        ["12-24 months", "Saying 'more', bringing you food or a bowl, pulling your hand toward the highchair, opening mouth wide", "Saying 'no', 'done', 'finished', pushing plate away, standing up, wanting down from the chair"],
        ["2-4 years", "Asking for a specific food, saying 'my tummy is hungry', increased focus at the table", "Playing with food, talking more than eating, saying 'my tummy is full', asking to leave the table"],
      ],
    },
    {
      type: "paragraph",
      text: "Note that many fullness cues look, on the surface, like misbehaviour: throwing food, standing up, batting the spoon away. Chapter 10 goes into these behaviours in depth, but the core reframe belongs here, in the division of responsibility. If a behaviour is your baby's fullness signal, the correct response is to end the meal, calmly, not to intensify efforts to get more food in. Treating a fullness cue as a discipline problem confuses your child about what their own body is telling them, and over months this confusion is a well-documented driver of both overeating and undereating later in childhood.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Meals per day", value: "3 main meals" },
        { label: "Snacks per day", value: "2 planned snacks" },
        { label: "Spacing between eating opportunities", value: "2.5 to 3.5 hours" },
        { label: "Milk timing", value: "Offered after solids, or between meals, not as a substitute for a meal" },
        { label: "Meal duration before ending calmly", value: "20 to 30 minutes maximum" },
        { label: "Parent's core question at every meal", value: "What, when, where, never whether or how much" },
      ],
    },
    {
      type: "heading",
      text: "Why Pressure Reduces Intake, Not Increases It",
      sub: "The research behind 'just one more bite'",
    },
    {
      type: "paragraph",
      text: "Pressure to eat is intuitive. If a child has eaten three bites of dinner and you want them to eat more, asking, encouraging, or insisting on more bites feels like the obvious lever to pull. Decades of feeding research say the opposite happens. Studies on pressure to eat, going back to work by Leann Birch in the 1980s and replicated many times since in both lab and home settings, consistently show that children who are pressured to eat a food, whether through verbal insistence, bribery, or the classic 'clean plate' rule, eat less of that food over time, not more, and rate it as less liked when surveyed weeks later.",
    },
    {
      type: "paragraph",
      text: "The mechanism is thought to work on two levels. First, pressure creates a negative emotional association with the specific food and with mealtimes generally, and taste preference is highly sensitive to emotional context in young children. Second, and more structurally important, pressure interrupts the feedback loop between internal fullness signals and eating behaviour. A child who is taught, meal after meal, that the amount they eat is decided by an adult's verbal insistence rather than by their own stomach gradually becomes less accurate at detecting their own fullness, a pattern researchers have linked to higher rates of overeating in response to external food cues later in childhood, and in some longitudinal studies, into adolescence.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "The clean plate club has no nutritional benefit",
      body: "Requiring a child to finish everything on their plate before leaving the table does not improve nutrient intake over a day or a week; children who are allowed to stop eating when full simply eat more at the next meal or snack if they need to. What the clean plate rule reliably does is override the child's own satiety signal, teaching them to eat by external rule rather than internal cue, a pattern strongly associated with weight regulation difficulty later in life.",
    },
    {
      type: "paragraph",
      text: "Pressure does not have to look dramatic to count as pressure. 'Just try it', 'one more bite for mommy', 'you loved this last week', 'you can't have dessert until you finish your vegetables', and even enthusiastic cheering every time a bite goes in are all forms of pressure, because each one makes eating (or not eating) about pleasing or displeasing an adult rather than about the food and the child's own hunger. The goal is neutral, warm, low-key mealtimes where food is offered without commentary on how much is or is not eaten.",
    },
    {
      type: "heading",
      text: "Praise Can Backfire Just Like Bribery",
      sub: "Why 'good job eating your peas' is not as harmless as it sounds",
    },
    {
      type: "paragraph",
      text: "Many parents who have heard not to bribe or threaten still lean heavily on praise, cheering, clapping, or exaggerated excitement every time a bite of a non-preferred food goes in. This feels positive rather than coercive, but functionally it operates the same way as pressure: it makes eating about earning an adult's approval rather than about the food itself, and it can make a child self-conscious or performative at the table rather than tuned in to their own appetite. Some children respond to a pattern of heavy praise by developing an aversion to eating in front of others at all, wary of the attention any bite will draw.",
    },
    {
      type: "paragraph",
      text: "The alternative is neutral narration rather than evaluation. Describe what the food is, how it was made, what it tastes or feels like, without grading the child's performance in eating it. 'These are the roasted carrots we made together, they're a little sweet' is neutral description. 'Wow, look at you eating your carrots, such a good boy!' is evaluation, and it puts the child's identity and your approval on the line every time they pick up a fork.",
    },
    {
      type: "table",
      title: "Say This, Not That: Reframing Mealtime Language",
      headers: ["Instead of saying", "Say this"],
      rows: [
        ["Just one more bite for me", "You can stop whenever your tummy feels done"],
        ["You loved this last week, why won't you eat it now", "Some days we like foods more than others, that's okay"],
        ["Good job eating your vegetables", "Those green beans are from the garden we visited"],
        ["No dessert until you finish your dinner", "We'll clear plates when everyone is done eating dinner"],
        ["Eat three more bites and then you're done", "You can be done whenever you feel done"],
        ["Look how much Sam ate, be like Sam", "Everyone's tummy is different sizes at different meals"],
        ["Come on, open up, here comes the airplane", "Here is the spoon when you want it"],
      ],
    },
    {
      type: "heading",
      text: "Distraction Feeding and Screens",
      sub: "Why the tablet at the table quietly undermines self-regulation",
    },
    {
      type: "paragraph",
      text: "Screens, toys, and games used to get more bites into a distracted or resistant eater are extremely common and extremely understandable, a screaming toddler and a plate of untouched vegetables at 6pm after a long day will make almost any parent reach for a phone. But distraction feeding works by disconnecting eating from the sensations that should guide it: taste, texture, hunger, fullness. A child watching a screen while being fed continues to accept bites well past the point of fullness because their attention is not on their body at all, which is precisely why distraction feeding can look, in the short term, like it 'solves' a refusal problem. It does not solve it; it bypasses the child's own regulation system, and children fed this way regularly show poorer recognition of their own fullness cues on later testing, along with higher rates of overeating in distraction-heavy contexts like watching television as older children and adults.",
    },
    {
      type: "paragraph",
      text: "The fix is not to force a screen-free meal through sheer willpower during a rough patch, it is to build screen-free, toy-free mealtimes as a firm structural rule from early on, the same way car seats are non-negotiable regardless of protest. If screens have already become part of your mealtime routine, wean off gradually: start with one screen-free meal a day, typically breakfast when everyone is calmer, and expand from there over two to three weeks, expecting a temporary increase in protest as the old pattern is unlearned.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "What to do with the wriggly, bored toddler instead",
      body: "Give hands something food-related to do rather than a screen: a spoon to hold even if it's not used efficiently, a piece of bread to tear, a small unbreakable bowl to move food between. Conversation, songs, or simply sitting and eating your own food alongside them is engaging enough for most toddlers once the expectation of a screen has been removed consistently for a week or two.",
    },
    {
      type: "heading",
      text: "The One Safe Food Rule for Family Meals",
      sub: "Removing the short-order-cook trap without starving anyone",
    },
    {
      type: "paragraph",
      text: "A frequent worry that pushes parents toward pressure or separate meals is the fear that a child will go hungry if the family meal contains foods they are unlikely to eat. The one safe food rule solves this directly: at every family meal, include at least one component you are highly confident your child will eat, alongside the rest of the meal that is being served to everyone else. This might be bread, rice, plain pasta, a familiar fruit, or plain yogurt. It is served without comment, without being framed as a backup or a reward, simply as one more thing on the table.",
    },
    {
      type: "paragraph",
      text: "This is different from short-order cooking, where an entirely separate meal is prepared to the child's specification after they reject the family meal. The safe food sits on the table from the start, offered to everyone the same way the rest of the meal is, and no new food is cooked in response to refusal mid-meal. If your child eats only the safe food at a given meal, that is entirely acceptable under the division of responsibility; your job was to offer a balanced spread including something they could eat, and you did it.",
    },
    {
      type: "list",
      title: "Reliable Safe Foods to Rotate Through Family Meals",
      items: [
        "Plain rice, pasta, or bread, unseasoned or lightly seasoned",
        "A fruit your child reliably eats, sliced and ready",
        "Plain yogurt or a familiar cheese",
        "A vegetable your child has accepted before, even if inconsistently",
        "Plain crackers as a table addition, not a meal replacement",
      ],
    },
    {
      type: "heading",
      text: "Modelling and Family-Style Serving",
      sub: "The most underused tool in the whole toolkit",
    },
    {
      type: "paragraph",
      text: "Children learn what and how much to eat largely by watching people they trust eat, a phenomenon researchers call social facilitation of eating. A toddler is far more likely to try a new vegetable if they watch a parent or older sibling eat it with apparent enjoyment at the same table, in the same meal, than if the vegetable is placed in front of them alone while adults eat something else or nothing at all. This is one of the most consistent findings in pediatric feeding research and one of the least expensive interventions available: eat the same meal, at the same table, at the same time as your child, as often as you realistically can.",
    },
    {
      type: "paragraph",
      text: "Family-style serving, placing food in shared serving dishes at the centre of the table and letting each person, including toddlers with appropriate help, serve themselves, reinforces the child's side of the division of responsibility directly. A toddler who spoons their own portion, however small or lopsided, is practising the exact skill of matching intake to appetite that plated, parent-portioned meals do not offer. For children as young as 15 to 18 months, small tongs, a child-sized serving spoon, or simply letting them pick items off a shared platter with their hands works well.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "A simple weekly habit that moves the needle",
      body: "Pick at least one meal a day, realistically dinner for most families, where everyone eats the same food at the same table with no screens. Consistency across weeks matters far more than any single 'perfect' meal; researchers following family meal habits over years find the frequency of shared meals predicts diet quality and lower disordered eating risk in children better than the content of any individual meal.",
    },
    {
      type: "heading",
      text: "How to Stop the Airplane Spoon",
      sub: "Weaning off games, tricks and chasing the mouth",
    },
    {
      type: "paragraph",
      text: "The airplane spoon, chasing a moving or turned-away mouth with a spoon, making animal noises or games to sneak in 'just one more', is one of the most common pressure tactics because it feels playful rather than coercive. But a mouth turned away or a hand pushing the spoon back is a fullness or refusal cue, and chasing it with a spoon overrides that signal exactly the same way verbal insistence does, just with a friendlier soundtrack. If your family has relied on this for months, expect a short adjustment period when you stop.",
    },
    {
      type: "list",
      title: "Steps to Retire the Airplane Spoon",
      ordered: true,
      items: [
        "Decide in advance, before the next meal, that the spoon goes down the first time your child turns away, closes their mouth, or pushes it back",
        "Offer the spoon once more calmly, without sound effects, saying only 'here's your spoon if you want more'",
        "If refused a second time, place the spoon within reach and let your child feed themselves the rest of the meal, even messily",
        "Do not comment on how little was eaten; end the meal at the normal time without extending it to compensate",
        "Expect one to two weeks of a child eating less than usual as they recalibrate to feeding themselves; this is a normal and temporary phase, not evidence the new approach has failed",
      ],
    },
    {
      type: "quote",
      text: "The job of feeding a child well is not to control what goes in, but to provide reliable, pleasant opportunities to eat and then trust the child to do the rest.",
      author: "Adapted from Ellyn Satter, Registered Dietitian and Family Therapist",
    },
    {
      type: "heading",
      text: "Handling Grandparents, Daycare and Others Who Pressure",
      sub: "Getting the whole team on the same page without a fight",
    },
    {
      type: "paragraph",
      text: "One of the hardest parts of practising the division of responsibility is that it often contradicts how the current generation of grandparents fed their own children, and it can conflict with daycare or school routines built around finishing plates or earning dessert. Consistency across caregivers genuinely helps a child settle into a regulation pattern faster, so it is worth a direct, low-drama conversation rather than letting it become a recurring source of tension.",
    },
    {
      type: "paragraph",
      text: "Frame the conversation around what you have learned rather than what they did wrong; most grandparents respond far better to 'the pediatrician and the feeding books I've read all say this now' than to any implication that their own parenting was harmful. Keep the ask specific and small: not a full lecture on Satter's model, just concrete requests such as 'please don't ask him to take one more bite, just offer the food and let him decide' and 'please don't use dessert as a reward, just serve it alongside the meal.'",
    },
    {
      type: "table",
      title: "Scripts for Common Pressure Situations",
      headers: ["Situation", "What to say"],
      rows: [
        ["Grandparent says 'just one more bite, for me'", "We're actually working on letting her decide when she's full, it really helps in the long run, thank you for understanding"],
        ["Daycare uses a clean-plate or star chart for eating", "Could we skip the food-related rewards for her specifically, we're working on responsive feeding at home and consistency really helps"],
        ["Partner says 'he's not eating enough, make him finish it'", "I know it looks like not enough, but he's been growing fine and this is part of him learning to listen to his own body"],
        ["Relative offers dessert only after vegetables are finished", "Let's just put a small dessert on the plate with everything else tonight, no need to make it a reward"],
        ["Babysitter unsure what to do with a refused meal", "If she says she's done or pushes the plate away, just say okay and clear it, no need to encourage more"],
      ],
    },
    {
      type: "callout",
      kind: "note",
      title: "Pick your battles by exposure, not principle",
      body: "You will not convert every relative to the division of responsibility, and that is fine. A grandparent who sees your child twice a year and offers one extra cookie is a rounding error. A daily caregiver, a partner, or anyone feeding your child most meals is worth a real conversation, because the consistency of the approach across the majority of meals is what drives the outcome, not perfection at every single meal everywhere.",
    },
    {
      type: "heading",
      text: "Meal and Snack Structure That Supports Appetite",
      sub: "Building the container so the content can take care of itself",
    },
    {
      type: "paragraph",
      text: "Responsive feeding relies on a predictable structure of when food is offered, because a child's appetite needs a rhythm to regulate against. Grazing all day on small amounts of food or milk means a child is never particularly hungry or particularly full at any given moment, which erodes the very hunger and fullness signals the whole model depends on. The standard, well-supported structure for toddlers and preschoolers is three meals and two snacks a day, spaced roughly 2.5 to 3.5 hours apart, with nothing but water offered in between.",
    },
    {
      type: "table",
      title: "Sample Daily Structure, 12 Months to 3 Years",
      headers: ["Time", "Eating opportunity", "Notes"],
      rows: [
        ["7:00-7:30 am", "Breakfast", "Include a protein source and a fruit or vegetable if possible"],
        ["9:30-10:00 am", "Morning snack", "One or two food items, not a full meal"],
        ["12:00-12:30 pm", "Lunch", "Family-style where possible, include the safe food"],
        ["3:00-3:30 pm", "Afternoon snack", "Milk can accompany this snack rather than a meal"],
        ["5:30-6:30 pm", "Dinner", "Ideally shared with at least one adult eating the same food"],
      ],
    },
    {
      type: "paragraph",
      text: "Milk timing deserves specific attention because milk is calorie-dense and easy to over-offer. From 12 months, most toddlers need roughly 16 to 20 oz (480 to 600 ml) of milk a day, not more, and milk offered too close to a meal or in unlimited quantity between meals is one of the most common, and most fixable, causes of a toddler who 'won't eat solids.' Offer water between meals and snacks, and place milk at the end of a meal or alongside a snack rather than as a free-flowing beverage available all day from a sippy cup carried around the house.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "The wandering sippy cup is a hidden appetite killer",
      body: "A toddler who carries a cup of milk around all day, sipping periodically, can easily take in 24 to 32 oz without anyone noticing, which is enough calories to blunt appetite at meals significantly. If your toddler seems to eat very little at meals but is growing well, check total milk volume across the day before assuming a feeding problem exists.",
    },
    {
      type: "heading",
      text: "Putting It All Together: A Script Table for Real Life",
      sub: "The exact words for the moments that trip parents up",
    },
    {
      type: "paragraph",
      text: "Knowing the theory of the division of responsibility is one thing; having the actual sentence ready in the heat of a difficult moment is another. Below is a working reference of common flashpoints and the responsive feeding response, worded so you can use it directly, tonight, without having to compose it under pressure yourself.",
    },
    {
      type: "table",
      title: "Common Flashpoints and Responsive Feeding Scripts",
      headers: ["What happens", "What to say and do"],
      rows: [
        ["Child eats two bites and says 'all done'", "Okay, sounds like your tummy is done, say 'that's fine, I'll clear your plate then', without extending the meal or negotiating"],
        ["Child asks for dessert instead of dinner", "Say 'dessert is part of the meal, it's on the table with everything else, you can have it whenever during the meal'"],
        ["Child eats only bread at dinner", "Say nothing critical; note internally that you offered a balanced meal and this was the child's choice tonight"],
        ["Relative insists child needs to eat more vegetables right now", "Say 'she'll get more chances at the next meal, we're letting her decide today'"],
        ["Child cries for a snack 40 minutes after lunch", "Say 'snack is in a little while, you can have water now', and hold the next scheduled time"],
        ["Child wants only milk, refusing the plate entirely", "Offer water instead of milk during the meal itself, and hold milk until after the meal or at the next snack"],
      ],
    },
  ],
  takeaways: [
    "The division of responsibility gives parents control over what, when and where food is offered, and gives the child full control over whether and how much they eat, and mixing up these roles is the source of most mealtime conflict.",
    "Hunger and fullness cues change shape with age but are present from six months onward, and behaviours that look like misbehaviour, such as pushing a spoon away or throwing food, are frequently genuine fullness signals that deserve a calm end to the meal rather than more pressure.",
    "Decades of research show that pressuring a child to eat, whether through bribery, praise, the clean plate rule, or the airplane spoon, reduces long-term acceptance of that food and damages a child's ability to read their own fullness accurately.",
    "Screens and other distractions at the table disconnect eating from hunger and fullness sensations and should be removed gradually and consistently rather than relied on to increase intake during difficult phases.",
    "Including one safe, reliably accepted food at every family meal removes the fear of a child going hungry without resorting to short-order cooking, and family-style serving lets children practise self-portioning directly.",
    "A predictable structure of three meals and two snacks, spaced roughly 2.5 to 3.5 hours apart, with milk offered around meals rather than continuously, gives a child's appetite the rhythm it needs to regulate itself.",
    "Getting other caregivers, grandparents, daycare, partners, aligned on this approach through specific, low-drama requests dramatically increases consistency and speeds up how quickly a child settles into confident, self-regulated eating.",
  ],
};
