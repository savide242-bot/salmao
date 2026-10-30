import type { Chapter } from "@/data/handbook/types";

export const ch02: Chapter = {
  number: 2,
  title: "Is Your Baby Ready? Reading the Real Signs",
  subtitle: "Readiness is a set of observable skills, not a birthday",
  image: "foundation",
  intro:
    "Around 6 months, most parents start hearing a chorus of conflicting advice: relatives insisting it is 'time,' a pediatrician mentioning readiness at a checkup, an app sending a push notification counting down to a milestone that has nothing to do with the baby actually in front of them. The truth is that readiness for self-feeding is not a date on a calendar; it is a cluster of physical and developmental skills that can appear anywhere from about 5.5 months to 7 or 8 months in typically developing term infants, and later still in babies born preterm once corrected age is taken into account. This chapter gives you a concrete, testable way to evaluate whether your baby has the postural stability, oral-motor maturity, and hand-eye coordination needed to begin, along with a minute-by-minute picture of what a genuinely first self-feeding session looks like, a readiness checklist you can use at home without any special equipment, and a clear list of red flags that warrant a conversation with your pediatrician or a referral to a feeding specialist before you proceed. Getting the timing right, rather than forcing an arbitrary start date, sets the entire trajectory of self-feeding up for a smoother, safer beginning.",
  blocks: [
    {
      type: "heading",
      text: "The Four Core Readiness Signs",
      sub: "What major health bodies actually look for",
    },
    {
      type: "paragraph",
      text: "The WHO, AAP, and NHS converge on a consistent cluster of readiness indicators rather than a fixed age, though all three organizations note that readiness rarely appears before 4 months and complementary feeding should not start before that point regardless of how advanced a baby seems. The four core signs are: the ability to sit with good head and trunk control, either independently or with minimal support; the loss of the tongue-thrust (extrusion) reflex that otherwise pushes solid objects back out of the mouth; the ability to bring an object to the mouth accurately using the hand rather than relying on someone else to place it there; and clear behavioral interest in food, such as watching family members eat, leaning toward food, opening the mouth as a spoon or piece of food approaches, or reaching for items on a plate.",
    },
    {
      type: "paragraph",
      text: "It is worth being precise about why each of these four matters mechanically, not just as a checklist item. Trunk and head control matters because the airway needs to be aligned properly, chin slightly tucked rather than tipped back, for safe swallowing; a baby slumped or reclined in a highchair has a compromised airway position regardless of how interested they seem in food. Loss of the tongue-thrust reflex matters because a baby who still reflexively pushes a spoon or piece of food back out is not being stubborn or refusing food, they are demonstrating an immature oral reflex that has not yet integrated, and forcing food past this reflex increases the risk of gagging, aversion, and inefficient intake. Hand-to-mouth accuracy matters because self-feeding is, definitionally, dependent on the baby's own capacity to get food to their mouth; without it, any attempt becomes caregiver-assisted rather than baby-led, which is a different skill being trained. And behavioral interest matters because a baby who is not motivated will not engage in the repeated practice needed to build the skill, regardless of physical readiness.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Typical readiness window", value: "5.5 to 7 months (term infants)" },
        { label: "Absolute earliest recommended start", value: "4 months (only with clear medical indication)" },
        { label: "WHO/AAP standard recommendation", value: "Around 6 months" },
        { label: "Tongue-thrust reflex typically fades", value: "4 to 6 months" },
        { label: "Independent sitting typically achieved", value: "6 to 8 months" },
        { label: "Use corrected age for preemies until", value: "Approximately 24 months" },
      ],
    },
    {
      type: "heading",
      text: "Testing Sitting Stability at Home",
      sub: "Three simple, low-tech checks",
    },
    {
      type: "paragraph",
      text: "You do not need any special equipment to assess sitting stability; a firm chair, a highchair, or even the floor will do. The first check is the '3-second unassisted lean test': sit the baby on the floor with your hands hovering nearby but not touching, and see whether they can maintain an upright trunk without tipping to the side or falling forward for at least a few seconds while looking around. The second check, the 'reach without collapse test,' involves placing an interesting toy just outside the baby's easy reach while they are seated, and observing whether they can lean forward to grab it and return to an upright seated position without toppling. The third is the 'highchair posture check': in the actual highchair or feeding seat you plan to use, confirm the baby's hips, knees, and ankles are each at roughly a 90-degree angle, feet supported on a footrest or tray rather than dangling, and the head stays upright and midline rather than lolling to one side, since dangling feet and unsupported hips both reduce core stability needed for safe swallowing.",
    },
    {
      type: "table",
      title: "Sitting Stability Milestones and What They Mean for Feeding",
      headers: ["Stage", "Typical age", "Feeding implication"],
      rows: [
        ["Sits with full support (propped)", "4-5 months", "Not yet ready; airway alignment not reliably controlled"],
        ["Sits with hands for support (tripod)", "5-6 months", "Borderline; supportive highchair with good hip/foot support needed"],
        ["Sits independently, brief periods", "6-7 months", "Generally ready if other signs also present"],
        ["Sits independently, stable, can reach and recover", "7-8 months", "Fully ready; can also transition toward less restrictive seating"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Do not prop a baby who cannot sit independently just to start solids",
      body: "Using pillows, rolled towels, or a reclined car-seat-style insert to force an upright position in a baby who cannot yet maintain trunk control on their own does not create genuine readiness; it manufactures the appearance of it while leaving the underlying airway and postural control unresolved. Wait until the baby achieves the postural milestone on their own, generally within a few weeks for most term infants approaching 6 months.",
    },
    {
      type: "heading",
      text: "The Tongue-Thrust Reflex: What It Is and How It Fades",
      sub: "A protective newborn reflex that must resolve before solids",
    },
    {
      type: "paragraph",
      text: "The tongue-thrust or extrusion reflex is present from birth and serves an important protective purpose in early infancy: it causes the tongue to push forward and outward against anything placed on the front of it, which prevents a young baby from swallowing non-milk substances before their swallowing coordination is mature enough to handle them safely. This reflex typically begins to fade between 4 and 6 months, though the exact timing varies meaningfully between individual babies. You can get a rough sense of whether the reflex has faded by offering a small, safe taste of food (a clean finger dipped in purees, or a soft steamed vegetable stick) on a spoon or the front of the tongue; if the baby consistently pushes it straight back out with the tongue rather than showing any capacity to move it toward the back of the mouth, the reflex is likely still active. A baby whose tongue-thrust has faded will still gag and may still spit out food they do not like, which is a taste or texture preference response, not a reflex; the distinguishing feature of a true tongue-thrust reflex is that it happens with essentially any substance placed on the front of the tongue, regardless of taste.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: spitting out food always means a baby dislikes it",
      body: "Especially before the tongue-thrust reflex has fully faded, a baby pushing food back out may simply be exhibiting an involuntary reflex rather than rejecting the flavor. Distinguishing reflex from preference matters because retrying the same food a day or two later, once the reflex is more settled, often produces a very different reaction than concluding the baby 'hates' that food after a single reflexive spit-out.",
    },
    {
      type: "heading",
      text: "Hand-to-Mouth Accuracy and Interest Cues",
      sub: "Watching for reach, grasp, and motivation",
    },
    {
      type: "paragraph",
      text: "Hand-to-mouth accuracy can be observed well before mealtimes even start, simply by watching how a baby handles toys, teethers, or their own hands. A baby who reliably brings a rattle or teether to their mouth, rather than only occasionally and inefficiently making contact with their cheek or ear, has developed the basic proprioceptive mapping needed to do the same thing with food. This usually develops in parallel with, or slightly before, sitting stability, so by the time a baby can sit reasonably well, hand-to-mouth accuracy is often already present, though it is worth confirming directly rather than assuming.",
    },
    {
      type: "paragraph",
      text: "Interest cues are the most emotionally satisfying sign for parents to observe because they are visible and unambiguous. Watch for a baby who tracks food or a utensil moving from plate to an adult's mouth, leans their body or head toward the plate, opens their mouth in anticipation as a spoon approaches, reaches toward food on someone else's plate, or shows frustration or vocalizes when they are held near a mealtime but not included. The absence of interest at 6 months is not necessarily a red flag on its own; some babies are simply more food-neutral early on and become interested by 7 to 8 months, especially if solids are introduced gradually and without pressure.",
    },
    {
      type: "list",
      title: "Quick interest-cue checklist you can observe over a few family meals",
      items: [
        "Does the baby's gaze follow food or utensils from plate to mouth across the table?",
        "Does the baby lean or reach toward the plate when seated nearby during a meal?",
        "Does the baby open their mouth or make chewing motions when watching others eat?",
        "Does the baby attempt to grab at food, a spoon, or a cup within reach?",
        "Does the baby seem calm and engaged rather than distressed when included at the table?",
      ],
    },
    {
      type: "heading",
      text: "Corrected Age for Preterm Babies",
      sub: "Why the calendar can mislead by months",
    },
    {
      type: "paragraph",
      text: "For any baby born before 37 weeks of gestation, readiness should be assessed using corrected age, not chronological age, until roughly 24 months. Corrected age is calculated by subtracting the number of weeks born early from the baby's chronological age; a baby born 8 weeks early who is 6 months old chronologically has a corrected age of about 4 months, and should generally not be expected to show self-feeding readiness signs until their corrected age approaches the typical 5.5 to 7 month window, meaning chronologically closer to 7.5 to 9 months in this example. Preterm babies may also have additional oral-motor considerations, including a history of tube feeding, delayed oral feeding experience, or lower muscle tone, that can shift the readiness timeline further regardless of corrected age; a neonatal follow-up clinic, pediatrician, or feeding therapist experienced with preterm infants should ideally weigh in before starting solids in a baby with a complicated NICU course.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "How to calculate corrected age quickly",
      body: "Take the baby's chronological age in weeks, subtract the number of weeks premature (40 weeks minus gestational age at birth), and the result is corrected age in weeks. For example, a baby born at 32 weeks gestation (8 weeks early) who is now 28 weeks old chronologically has a corrected age of 20 weeks, or 5 months, not 7 months.",
    },
    {
      type: "heading",
      text: "When NOT to Start",
      sub: "Situations that call for a pause, not a race",
    },
    {
      type: "paragraph",
      text: "There are several situations where it is appropriate to delay starting self-feeding even if the baby has technically reached 6 months chronologically. These include a baby who cannot yet sit with reasonable trunk stability even with a supportive highchair, a baby recovering from a recent significant illness, hospitalization, or surgery, especially anything involving the airway or gastrointestinal tract, a baby with a diagnosed swallowing disorder or known aspiration risk who has not yet been cleared by a swallow study or feeding therapist, and a baby who consistently shows strong distress, arching, or crying specifically in response to any food or spoon approaching, which can indicate an oral aversion that benefits from a slower, therapist-guided introduction rather than a standard timeline.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Do not start on a fixed calendar date if any core sign is missing",
      body: "It is common for well-meaning advice to frame 6 months as an appointment to keep rather than an approximate window. If your baby is 6 months old but still cannot sit with reasonable stability, still shows a strong tongue-thrust reflex with most foods, or shows no interest at all after a couple of relaxed attempts, it is appropriate and safe to wait another 1 to 3 weeks and reassess rather than push ahead on schedule.",
    },
    {
      type: "heading",
      text: "A Readiness Checklist You Can Use This Week",
      sub: "Score it honestly before your first meal",
    },
    {
      type: "table",
      title: "Home Readiness Checklist",
      headers: ["Sign", "How to check", "Ready if..."],
      rows: [
        ["Trunk and head control", "3-second unassisted lean test, highchair posture check", "Sits upright, head midline, minimal wobble for several seconds"],
        ["Tongue-thrust reflex", "Offer a small taste on a spoon or clean finger", "Food is sometimes managed or moved back, not uniformly ejected every time"],
        ["Hand-to-mouth accuracy", "Observe with a toy or teether", "Reliably brings object to mouth with reasonable accuracy"],
        ["Interest in food", "Observe during 2-3 family meals", "Leans, reaches, opens mouth, or tracks food with clear engagement"],
        ["Age and corrected age", "Chronological age; adjust if born before 37 weeks", "At least 4 months chronological, ideally close to 6 months corrected"],
        ["General health", "Recent illness, medications, GI symptoms", "No acute illness, no unresolved swallowing or reflux concerns"],
      ],
    },
    {
      type: "callout",
      kind: "note",
      title: "You do not need a perfect score on day one",
      body: "Most babies will show four or five of these signs solidly and one that is still emerging, most commonly sitting stability or pincer-adjacent grasp refinement, which continues to develop for months after solids begin. A slightly imperfect but broadly present set of readiness signs is normal; a completely absent set (no sitting, strong reflex, zero interest) is the signal to wait.",
    },
    {
      type: "heading",
      text: "Minute by Minute: What a First Self-Feeding Session Looks Like",
      sub: "A realistic walkthrough, not an idealized one",
    },
    {
      type: "paragraph",
      text: "Minute 0 to 1: the baby is placed in the highchair with hips, knees, and ankles at roughly 90 degrees and feet supported. One or two pieces of soft, appropriately sized food are placed directly on the tray, not handed into the baby's fist, since placing food within reach rather than into the hand encourages the baby's own grasp and reach rather than a passive handoff. Minute 1 to 3: the baby typically investigates before eating, patting the food, picking it up and putting it down, sometimes squeezing it into an unrecognizable paste. This is normal exploratory behavior and should not be interrupted or redirected toward 'proper' eating.",
    },
    {
      type: "paragraph",
      text: "Minute 3 to 6: the first attempts at bringing food to the mouth usually appear, often missing the mouth entirely on the first one or two tries, landing on the cheek, chin, or forehead. Some food may reach the lips and be gummed rather than truly chewed, especially before teeth erupt. A gag response is common in this window, particularly with a new texture, and typically resolves within a few seconds without intervention. Minute 6 to 10: interest often peaks and then begins to wane; many babies in their first sessions eat very little by volume and instead continue exploring texture with their hands, occasionally still bringing small amounts to the mouth. Minute 10 to 12: signs of being done appear, including turning the head away, pushing the tray, dropping food deliberately and repeatedly, or general fussiness, at which point the meal should end without pressure to continue.",
    },
    {
      type: "list",
      title: "What a caregiver should be doing during those 10-12 minutes",
      items: [
        "Sitting at the table with the baby, ideally eating something themselves, rather than standing over them",
        "Staying within arm's reach the entire time without exception, for choking safety",
        "Narrating occasionally (\"that's soft, that's a banana\") without pressuring bites or cheering after every mouthful",
        "Resisting the urge to load the baby's hand, guide it to the mouth, or hand-feed with a spoon during a self-feeding session",
        "Watching for true choking signs (silence, no airflow, bluish color) versus normal gagging (loud, coughing, retching)",
      ],
      ordered: true,
    },
    {
      type: "callout",
      kind: "tip",
      title: "A script for the first session if you feel nervous",
      body: "Say to yourself before the meal: \"My job is to offer safe food, sit close, and stay calm. Their job is to explore, taste, and decide how much to eat.\" If gagging happens, resist the urge to reach into the mouth or pull the baby out of the chair; instead, stay close, let it resolve on its own for a few seconds, and only intervene physically if true choking signs appear.",
    },
    {
      type: "heading",
      text: "Red Flags That Warrant Professional Evaluation",
      sub: "When to loop in a pediatrician, ENT, or feeding therapist",
    },
    {
      type: "paragraph",
      text: "Most babies progress through self-feeding readiness without any need for specialist input, but certain signs warrant a conversation with your pediatrician before continuing, and in some cases a referral to a pediatric feeding therapist, speech-language pathologist, or occupational therapist with feeding specialization, or an ENT if airway or swallowing concerns are suspected. These include persistent coughing, choking, or watery eyes with every single feeding attempt regardless of texture, wet or gurgly-sounding breathing or voice after swallowing, refusal of all textures beyond thin liquids well past 9 months, visible distress, arching, or crying specifically and consistently at the sight of food or the highchair, a history of reflux with feeding-related pain behaviors such as back-arching or food refusal that has not improved with medical management, or a diagnosed condition affecting muscle tone, oral structure (such as a significant tongue-tie that has not been assessed), or neurological development.",
    },
    {
      type: "list",
      title: "Red flags checklist to bring to a pediatrician appointment",
      items: [
        "Coughing, choking, or watery eyes with most or all feeding attempts",
        "Wet, gurgly, or raspy voice quality during or immediately after swallowing",
        "Complete refusal of any texture beyond thin puree or liquid well past 9 months",
        "Consistent crying, gagging, or arching specifically triggered by the sight of the highchair or food",
        "Little to no weight gain alongside feeding difficulty",
        "Known or suspected structural issues such as a significant tongue-tie, cleft, or low muscle tone",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "When in doubt, ask before you proceed",
      body: "None of the guidance in this book is a substitute for individualized medical advice. If you notice any combination of the red flags above, pause self-feeding attempts and speak with your pediatrician before continuing, rather than waiting to see if the baby simply outgrows the difficulty. Early referral to a feeding specialist, when warranted, tends to produce better outcomes than a wait-and-see approach stretched over several months.",
    },
    {
      type: "quote",
      text: "Readiness is not a birthday, it is a body that has quietly finished building the tools it needs, one week before you notice.",
      author: "Common pediatric feeding therapy framing",
    },
    {
      type: "heading",
      text: "Putting It Together: A Simple Decision Path",
      sub: "From observation to your first meal",
    },
    {
      type: "paragraph",
      text: "In practice, the decision path is straightforward once you have observed your baby over a few days. Confirm chronological age is at least 4 months, and ideally close to 6 months corrected if born preterm. Watch for two or three consecutive family meals to see whether interest cues are present. Perform the sitting stability checks in an actual highchair or feeding seat. Offer a small, low-risk taste to gauge whether the tongue-thrust reflex has faded meaningfully. If all four core signs are reasonably present and there are no active red flags, you are ready to move into planning your first sessions, which the following chapters cover in detail, including exact food shapes, sizes, and preparation methods matched to your baby's current oral-motor stage.",
    },
    {
      type: "callout",
      kind: "note",
      title: "It is fine to start small and slow",
      body: "There is no requirement to turn the first week into full meals three times a day. Many families begin with one relaxed, low-pressure self-feeding opportunity per day, at a time when the baby is not overtired or overly hungry, and expand frequency over the following one to two weeks as both baby and caregiver gain confidence.",
    },
  ],
  takeaways: [
    "Readiness for self-feeding is defined by four observable signs, not a birthday: stable sitting with head and trunk control, a faded tongue-thrust reflex, accurate hand-to-mouth movement, and clear behavioral interest in food.",
    "Most term babies show these signs somewhere between 5.5 and 7 months, but solids should never start before 4 months, and the exact timing should be based on the individual baby's development rather than a fixed calendar date.",
    "Preterm babies should be assessed using corrected age, not chronological age, until around 24 months, since a baby born several weeks early is developmentally younger than their birth-certificate age suggests.",
    "A true tongue-thrust reflex pushes any substance uniformly out of the mouth regardless of taste, and is different from a baby deliberately spitting out a food they dislike, a distinction that helps parents avoid mislabeling normal reflex behavior as food refusal.",
    "A realistic first self-feeding session lasts about 10 to 12 minutes and is dominated by exploration, occasional gagging, and low intake by volume, all of which are normal and expected rather than signs something is wrong.",
    "Certain signs, including persistent coughing or choking with feeds, a wet or gurgly voice after swallowing, total refusal of all textures past 9 months, or consistent distress at the sight of food, warrant a pediatrician conversation and possible referral to a feeding specialist before continuing.",
    "It is safe and appropriate to delay starting even at 6 months if core readiness signs are not yet present, and doing so tends to produce a smoother, less stressful introduction than pushing ahead on a fixed schedule.",
  ],
};
