import salmonCakesImg from "@/assets/recipe-salmon-sweet-potato-cakes.webp";
import {
  Check,
  Clock,
  Brain,
  Leaf,
  Heart,
  Sparkles,
  ShieldCheck,
  Flame,
  Snowflake,
  Download,
  Bell,
  CalendarCheck,
  Users,
  ChevronRight,
  MessageCircle,
  Star,
  Utensils,
  Video,
  Repeat,
  Package,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  ChefHat,
  Fish,
} from "lucide-react";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/INkLCwAKV3zDpg5z5xJZDs?s=cl&p=i&mlu=4&ilr=4&iam=2";

const LAUNCH_DATE = new Date("2026-11-30T00:00:00");

const daysLeft = (() => {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / 86_400_000));
})();

const steps: { title: string; body: string; tip?: string }[] = [
  {
    title: "Steam & mash the sweet potato",
    body: "Peel and cube the sweet potato. Steam or boil for 12–15 minutes until fork-tender. Drain thoroughly and mash with a fork until smooth and velvety. Let it cool for a few minutes.",
    tip: "Let excess steam evaporate before mixing — drier mash keeps the cakes firmly together.",
  },
  {
    title: "Flake the salmon & inspect for bones",
    body: "Using clean hands, gently flake the cooked salmon fillet into a bowl. Rub the flakes between your fingers to feel for and remove any stray pin bones.",
    tip: "Double-check for bones: running your fingers through flaked fish is the safest method for babies.",
  },
  {
    title: "Combine the mixture",
    body: "In a mixing bowl, combine the mashed sweet potato, flaked salmon, beaten egg, rolled oats, finely chopped fresh dill or parsley, lemon juice, and a pinch of garlic powder. Mix gently until just combined.",
    tip: "Don't over-mash the fish — leaving small, tender flakes gives great texture for chewing practice.",
  },
  {
    title: "Rest for 10 minutes",
    body: "Allow the mixture to rest at room temperature for 10 minutes. The oats will absorb excess moisture, making the mixture pliable, firm, and super easy to shape.",
  },
  {
    title: "Shape into mini cakes",
    body: "With lightly oiled or damp hands, scoop about 2 tablespoons of mixture per cake and shape into round patties (approx. 5 cm / 2 inches wide and 1.5 cm thick). Makes 8–10 cakes.",
    tip: "Damp hands prevent the mixture from sticking and give smooth golden edges.",
  },
  {
    title: "Bake or gently pan-sear",
    body: "Bake at 190°C (375°F) on a parchment-lined baking sheet for 18–20 minutes, flipping gently halfway, until lightly golden and set. Alternatively, pan-sear in a skillet with a brush of olive oil over medium-low heat for 3–4 minutes per side.",
  },
  {
    title: "Rest, check temperature & serve",
    body: "Let cool for 5–7 minutes on a plate. Test the temperature and softness by squishing a piece between your thumb and forefinger before serving according to your baby's age stage.",
  },
];

const appFeatures = [
  {
    icon: Utensils,
    title: "300+ Recipes (6–36 Mo)",
    text: "Age-adapted with pediatrician guidelines & texture stages",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Meal Planner & Feeds",
    text: "Done-for-you menus with automated grocery shopping lists",
  },
  {
    icon: Users,
    title: "In-App Mom Community",
    text: "Moms share real photos, feeding videos, wins & experiences",
  },
  {
    icon: ShieldCheck,
    title: "Safe Allergen Tracker",
    text: "Step-by-step introduction of top allergens & reaction log",
  },
  {
    icon: Snowflake,
    title: "Freezer Prep & Batch Cook",
    text: "Cook once, freeze safely & ready in under 3 minutes",
  },
  {
    icon: Package,
    title: "Smart Pantry Helper",
    text: "Cook nutritious meals with what you already have at home",
  },
  {
    icon: Repeat,
    title: "1-Tap Ingredient Swap",
    text: "Safe substitutions for allergies or missing ingredients",
  },
  {
    icon: TrendingUp,
    title: "Growth & Milestones",
    text: "Track chewing, self-feeding leaps & food variety score",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="relative overflow-hidden">
          <img
            src={salmonCakesImg}
            alt="Golden baked salmon and sweet potato cakes on a white plate, one opened showing tender pink salmon and sweet potato inside"
            width={1408}
            height={1920}
            className="w-full h-[300px] object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent" />
          <div className="absolute top-3 left-4 right-4 flex justify-between items-center">
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow">
              DHA Brain Fuel • BLW
            </span>
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
              6+ to 8+ months
            </span>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 bg-amber-50">
          <div className="inline-block bg-amber-100 text-amber-800 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-1">
            Idade recomendada: a partir de 6 a 8 meses (BLW ou amassadinho)
          </div>
          <h1 className="text-xl font-extrabold text-foreground leading-tight mb-1">
            Salmon &amp; Sweet Potato Cakes
          </h1>
          <p className="text-xs text-muted-foreground mb-3 leading-snug">
            Tender, flaky salmon combined with naturally sweet roasted sweet potato.
            Crispy golden outside, soft and melt-in-the-mouth inside — designed specifically for little hands.
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { icon: Clock, label: "Prep", value: "15 min" },
              { icon: Flame, label: "Cook", value: "20 min" },
              { icon: Users, label: "Makes", value: "8–10" },
              { icon: Snowflake, label: "Freezes", value: "3 Mo" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-lg border border-amber-200 py-2"
              >
                <Icon className="w-3.5 h-3.5 mx-auto text-amber-600 mb-0.5" />
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-[11px] font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { icon: Brain, label: "Omega-3 DHA" },
            { icon: Leaf, label: "Sweet Potato" },
            { icon: Heart, label: "Gentle Protein" },
            { icon: Sparkles, label: "Easy Grip" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200"
            >
              <Icon className="w-4 h-4 mx-auto text-amber-600 mb-1" />
              <p className="text-[9px] text-amber-700 font-medium">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed mt-3">
          Wild salmon provides essential DHA and Omega-3 fatty acids critical for brain and eye development,
          while naturally sweet potato balances the flavor so even selective eaters love it.
          Ultra-tender, squashable texture ensures a safe and joyful self-feeding experience.
        </p>
      </section>

      {/* Ingredients */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Ingredients</h2>
        <ul className="space-y-1.5">
          {[
            "280 g (approx. 2 fillets) cooked salmon, flaked (fresh baked or low-sodium wild canned)",
            "1 medium sweet potato (approx. 250 g), steamed and mashed smooth",
            "1 egg (binder)",
            "50 g (1/2 cup) rolled oats (or unsalted breadcrumbs)",
            "2 tbsp fresh parsley or dill, finely minced",
            "1 tsp fresh lemon juice (brightens the salmon flavor)",
            "1/4 tsp garlic powder (optional)",
            "1 tbsp extra virgin olive oil (for brushing/cooking)",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2.5 bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[11px] text-foreground/80 flex gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Allergen notes:</strong> Fish and eggs are common allergens. Introduce salmon and egg individually first. For egg-free: substitute with 2 tbsp extra mashed sweet potato + 1 tbsp ground flaxseed mixed with 2.5 tbsp water.
          </span>
        </div>
      </section>

      {/* Step by step */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          Step by Step
        </h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 shadow-sm">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground leading-snug">
                  {step.title}
                </p>
                <p className="text-[11px] text-foreground/75 leading-relaxed mt-0.5">
                  {step.body}
                </p>
                {step.tip && (
                  <p className="text-[10.5px] text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-2 py-1 mt-1.5 leading-snug">
                    💡 {step.tip}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Servings by age */}
      <section className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-foreground">
            Serving by Age (Idade Recomendada)
          </h2>
          <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            6m to 36m+
          </span>
        </div>
        <div className="space-y-2">
          {[
            {
              age: "6–8 mo (Early BLW)",
              text: "Cut cake into wide finger-length strips (about the width of two adult fingers) or lightly flake and mash onto a pre-loaded spoon. Keep it super soft and moist.",
            },
            {
              age: "9–12 mo (Pincer Grasp)",
              text: "Cut into small, bite-sized chickpea pieces for baby to practice the pincer grasp with fingers, or offer half a cake for small bites.",
            },
            {
              age: "12–36 mo (Toddlers)",
              text: "Serve a whole cake as a mini burger patty with a dollop of Greek yogurt or avocado mash. Perfect for confident independent chewing.",
            },
          ].map((row) => (
            <div
              key={row.age}
              className="flex gap-3 bg-white border border-amber-100 rounded-lg p-2.5"
            >
              <span className="text-[10px] font-bold text-white bg-amber-500 rounded-full px-2 py-1 h-fit flex-shrink-0 text-center min-w-[70px]">
                {row.age}
              </span>
              <p className="text-[11px] text-foreground/80 leading-snug">
                {row.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-3 flex gap-2">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>
            Always do the <strong>squish test</strong>: press a piece between your thumb and forefinger — it must yield and flatten easily before giving it to baby. Never serve piping hot.
          </span>
        </p>
      </section>

      {/* Nutrition */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          🧡 Why Moms Love It
        </h2>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <ul className="space-y-2 text-[11px] text-foreground">
            <li>
              <strong>DHA &amp; Omega-3s</strong> — wild salmon fuels cognitive development and retinal growth
            </li>
            <li>
              <strong>Vitamin A &amp; Beta-Carotene</strong> — sweet potatoes bolster immune system defenses and vision
            </li>
            <li>
              <strong>Gentle Digestion</strong> — oat fiber and velvety sweet potato keep little stomachs happy
            </li>
            <li>
              <strong>Picky-Eater Approved</strong> — naturally sweet taste masks strong fishiness completely
            </li>
            <li>
              <strong>Batch-Cook Superhero</strong> — bake once and store up to 3 months of emergency nutritious lunches
            </li>
          </ul>
        </div>
      </section>

      {/* Storage */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-1">Storage &amp; Freezing</h2>
        <ul className="space-y-1.5">
          {[
            "Fridge: store in an airtight container for up to 3 days.",
            "Freezer: freeze individually on a parchment tray for 1 hour, then transfer into a sealed freezer bag for up to 3 months.",
            "Reheat: warm in a skillet on low or in an oven at 175°C (350°F) for 8–10 min until heated through. Cool to warm before serving.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[11px] text-muted-foreground"
            >
              <Snowflake className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= APP LAUNCH ================= */}
      <section id="launch" className="px-4 py-5 bg-amber-50/50">
        <div className="bg-white rounded-2xl border-2 border-amber-200 p-4 sm:p-5 shadow-sm">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Official Launch • November 30</span>
            </div>
            <h2 className="text-xl font-extrabold text-foreground leading-tight">
              The BabyBites App
            </h2>
            <p className="text-[11.5px] text-muted-foreground leading-snug mt-0.5">
              Everything you need to feed your baby from 6 to 36 months — in one single app.
            </p>
          </div>

          {/* Punchy Sales Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5 text-left">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-start gap-2 p-2 rounded-lg bg-amber-50/60 border border-amber-100/80"
                >
                  <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] font-bold text-foreground leading-tight">
                      {feat.title}
                    </p>
                    <p className="text-[10.5px] text-muted-foreground leading-snug">
                      {feat.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sales Highlight Banner */}
          <div className="bg-amber-100/60 border border-amber-200 rounded-xl px-3 py-2 text-center text-[11px] font-semibold text-amber-900 mb-3">
            ✨ 300+ recipes, meal planner, mom community &amp; smart tools — unified in ONE app.
          </div>

          {/* WhatsApp VIP Announcement Box */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-xl p-3 border border-amber-200 text-center mb-2">
            <p className="text-xs font-bold text-amber-900 mb-0.5">
              Exclusive details &amp; download link drop in WhatsApp first 🔔
            </p>
            <p className="text-[11px] text-muted-foreground leading-snug mb-2.5">
              Early app walkthrough videos, sneak peeks, and founding-member perks are shared strictly inside our VIP group.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-xl py-3 px-4 shadow flex items-center justify-center gap-2 text-xs sm:text-sm transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Join the VIP WhatsApp Group</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          <p className="text-center text-[10.5px] text-muted-foreground flex items-center justify-center gap-1">
            <Download className="w-3 h-3 text-amber-600" />
            The app will be free to download on November 30 — details in the group
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Made with care for busy, loving parents. 🧡
        </p>
      </footer>
    </div>
  );
};

export default Index;
