import { jsPDF } from "jspdf";
import type { AgeGroup, Recipe, Week } from "@/data/mealPlan/types";
import { age6to9 } from "@/data/mealPlan/age6to9";
import { age9to12 } from "@/data/mealPlan/age9to12";
import { age12plus } from "@/data/mealPlan/age12plus";

/* ------------------------------------------------------------------ */
/* Layout constants                                                     */
/* ------------------------------------------------------------------ */

const PW = 210;
const PH = 297;
const M = 18;
const CW = PW - M * 2;
const TOP = 26;
const BOTTOM = PH - 22;
const CTA_URL = "https://page.babybites.space/";

type RGB = [number, number, number];

const INK: RGB = [47, 50, 53];
const MUTED: RGB = [122, 128, 133];
const LINE: RGB = [226, 224, 219];
const CREAM: RGB = [251, 248, 243];
const WHITE: RGB = [255, 255, 255];

interface Theme {
  dark: RGB;
  mid: RGB;
  soft: RGB;
  tint: RGB;
}

const THEMES: Record<string, Theme> = {
  "6to9": { dark: [93, 122, 99], mid: [143, 173, 148], soft: [211, 226, 212], tint: [238, 244, 238] },
  "9to12": { dark: [176, 122, 96], mid: [214, 166, 138], soft: [240, 214, 197], tint: [251, 240, 232] },
  "12plus": { dark: [98, 122, 150], mid: [149, 173, 199], soft: [206, 222, 236], tint: [237, 244, 250] },
};

const GROUPS: AgeGroup[] = [age6to9, age9to12, age12plus];

interface TocEntry {
  label: string;
  page: number;
  level: 0 | 1 | 2;
  theme: Theme;
}

/* ------------------------------------------------------------------ */

export function buildMealPlannerDoc(): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const toc: TocEntry[] = [];
  let theme: Theme = THEMES["6to9"];
  let runningTitle = "";
  let y = TOP;

  const setFill = (c: RGB) => doc.setFillColor(c[0], c[1], c[2]);
  const setDraw = (c: RGB) => doc.setDrawColor(c[0], c[1], c[2]);
  const setText = (c: RGB) => doc.setTextColor(c[0], c[1], c[2]);

  const pageBg = () => {
    setFill(CREAM);
    doc.rect(0, 0, PW, PH, "F");
  };

  const header = () => {
    if (!runningTitle) return;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setText(MUTED);
    doc.text("BABY MEAL PLANNER", M, 14);
    doc.text(runningTitle.toUpperCase(), PW - M, 14, { align: "right" });
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.line(M, 17, PW - M, 17);
  };

  const newPage = () => {
    doc.addPage();
    pageBg();
    header();
    y = TOP;
  };

  const need = (h: number) => {
    if (y + h > BOTTOM) newPage();
  };

  const wrap = (text: string, w: number) => doc.splitTextToSize(text, w) as string[];

  /* ---------------- shared blocks ---------------- */

  const sectionTitle = (label: string, sub?: string) => {
    need(20);
    setFill(theme.tint);
    doc.roundedRect(M, y, CW, sub ? 15 : 11, 2.5, 2.5, "F");
    setFill(theme.dark);
    doc.roundedRect(M, y, 2.2, sub ? 15 : 11, 1.1, 1.1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    setText(theme.dark);
    doc.text(label, M + 6, y + 7.4);
    if (sub) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      setText(MUTED);
      doc.text(sub, M + 6, y + 12.2);
    }
    y += (sub ? 15 : 11) + 6;
  };

  const paragraph = (text: string, size = 9, color: RGB = MUTED) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    setText(color);
    const lines = wrap(text, CW);
    lines.forEach((l) => {
      need(size * 0.55);
      doc.text(l, M, y);
      y += size * 0.52;
    });
    y += 2;
  };

  /* ---------------- cover ---------------- */

  const cover = () => {
    pageBg();
    setFill([245, 240, 232]);
    doc.rect(0, 0, PW, PH, "F");

    // soft pastel arcs
    setFill(THEMES["6to9"].soft);
    doc.circle(PW - 20, 34, 46, "F");
    setFill(THEMES["9to12"].soft);
    doc.circle(24, PH - 30, 40, "F");
    setFill([245, 240, 232]);
    

    setDraw([214, 205, 190]);
    doc.setLineWidth(0.4);
    doc.roundedRect(14, 14, PW - 28, PH - 28, 4, 4, "S");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setText([150, 138, 120]);
    doc.text("B A B Y B I T E S   K I T C H E N", PW / 2, 52, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    setText(INK);
    doc.text("Baby Meal", PW / 2, 106, { align: "center" });
    doc.text("Planner", PW / 2, 122, { align: "center" });

    setDraw([196, 182, 160]);
    doc.setLineWidth(0.5);
    doc.line(PW / 2 - 22, 132, PW / 2 + 22, 132);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12.5);
    setText([90, 94, 98]);
    doc.text("4-Week Weekly Meal Plans", PW / 2, 145, { align: "center" });
    doc.setFontSize(11);
    doc.text("6 to 12+ Months", PW / 2, 154, { align: "center" });

    const pills = [
      { label: "6-9 Months", t: THEMES["6to9"] },
      { label: "9-12 Months", t: THEMES["9to12"] },
      { label: "12+ Months", t: THEMES["12plus"] },
    ];
    const pw = 46;
    const gap = 6;
    let px = (PW - (pw * 3 + gap * 2)) / 2;
    pills.forEach((p) => {
      setFill(p.t.soft);
      doc.roundedRect(px, 170, pw, 12, 6, 6, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      setText(p.t.dark);
      doc.text(p.label, px + pw / 2, 177.6, { align: "center" });
      px += pw + gap;
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setText([140, 132, 120]);
    doc.text("12 weekly planners  ·  shopping lists  ·  120 family recipes", PW / 2, 200, {
      align: "center",
    });

    doc.setFontSize(8);
    doc.text("A premium feeding guide for real, busy parents", PW / 2, PH - 30, { align: "center" });
  };

  /* ---------------- welcome ---------------- */

  const welcome = () => {
    doc.addPage();
    pageBg();
    runningTitle = "Welcome";
    header();
    y = TOP + 6;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    setText(INK);
    doc.text("Welcome to your meal planner", M, y);
    y += 12;

    paragraph(
      "This planner was built to take the daily guesswork out of feeding your baby. Inside you will find twelve complete weeks of meals, split into three developmental stages, each with a printable weekly planner, a categorised shopping list and every recipe written out step by step.",
      9.5,
      [90, 94, 98],
    );
    y += 2;

    const howTo = [
      ["1. Pick your stage", "Start with the age group that matches your baby today and move up as they grow."],
      ["2. Plan the week", "Use the weekly table as your map. Meals repeat on purpose so leftovers work for you."],
      ["3. Shop once", "Take the shopping list with you. Everything for the week, already grouped by aisle."],
      ["4. Cook simply", "Every recipe is designed for busy days, with texture guidance for each stage."],
    ];
    howTo.forEach(([t, d]) => {
      need(20);
      setFill(WHITE);
      setDraw(LINE);
      doc.setLineWidth(0.2);
      doc.roundedRect(M, y, CW, 17, 2.5, 2.5, "FD");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      setText(INK);
      doc.text(t, M + 6, y + 7);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      setText(MUTED);
      doc.text(wrap(d, CW - 12)[0], M + 6, y + 12.5);
      y += 21;
    });

    y += 2;
    theme = THEMES["6to9"];
    sectionTitle("Safety Essentials");
    const safety = [
      "Always supervise your baby while eating and keep them seated upright.",
      "No added salt, sugar or stock cubes; no honey before 12 months.",
      "Avoid whole nuts, grapes and other round foods unless quartered lengthways.",
      "Introduce one new allergen at a time, early in the day, and watch for reactions.",
      "Cool all food and always test the temperature before serving.",
    ];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    safety.forEach((s) => {
      need(8);
      setFill(theme.mid);
      doc.circle(M + 1.6, y - 1.1, 0.9, "F");
      setText([90, 94, 98]);
      const lines = wrap(s, CW - 8);
      lines.forEach((l, i) => {
        doc.text(l, M + 6, y + i * 4.4);
      });
      y += lines.length * 4.4 + 2.4;
    });

    y += 4;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    setText(MUTED);
    doc.text(
      wrap(
        "This planner is a general guide and does not replace personalised advice from your paediatrician or health visitor.",
        CW,
      ),
      M,
      y,
    );
  };

  /* ---------------- weekly planner table ---------------- */

  const plannerTable = (week: Week) => {
    const cols = [26, (CW - 26) / 4, (CW - 26) / 4, (CW - 26) / 4, (CW - 26) / 4];
    const heads = ["Day", "Breakfast", "Lunch", "Dinner", "Snack"];

    const drawHead = () => {
      need(12);
      setFill(theme.dark);
      doc.roundedRect(M, y, CW, 9, 1.6, 1.6, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      setText(WHITE);
      let x = M;
      heads.forEach((h, i) => {
        doc.text(h.toUpperCase(), x + 3, y + 5.9);
        x += cols[i];
      });
      y += 9;
    };

    drawHead();

    week.days.forEach((d, idx) => {
      const cells = [d.day, d.breakfast, d.lunch, d.dinner, d.snack || "—"];
      doc.setFontSize(7.6);
      const wrapped = cells.map((c, i) => wrap(c, cols[i] - 6));
      const rowH = Math.max(11, Math.max(...wrapped.map((w) => w.length)) * 3.6 + 6);

      if (y + rowH > BOTTOM) {
        newPage();
        drawHead();
      }

      setFill(idx % 2 === 0 ? WHITE : theme.tint);
      doc.rect(M, y, CW, rowH, "F");
      setDraw(LINE);
      doc.setLineWidth(0.15);
      doc.line(M, y + rowH, M + CW, y + rowH);

      let x = M;
      wrapped.forEach((lines, i) => {
        if (i > 0) {
          setDraw([236, 233, 227]);
          doc.line(x, y, x, y + rowH);
        }
        doc.setFont("helvetica", i === 0 ? "bold" : "normal");
        doc.setFontSize(i === 0 ? 8 : 7.6);
        setText(i === 0 ? theme.dark : [70, 74, 78]);
        lines.forEach((l, j) => doc.text(l, x + 3, y + 5.6 + j * 3.6));
        x += cols[i];
      });
      y += rowH;
    });

    setDraw(theme.soft);
    doc.setLineWidth(0.3);
    doc.roundedRect(M, y - 0.1, CW, 0.1, 0, 0, "S");
    y += 8;
  };

  /* ---------------- shopping list ---------------- */

  const shoppingList = (week: Week) => {
    const cats: [string, string[]][] = [
      ["Vegetables", week.shopping.vegetables],
      ["Fruits", week.shopping.fruits],
      ["Proteins", week.shopping.proteins],
      ["Dairy", week.shopping.dairy],
      ["Grains", week.shopping.grains],
      ["Pantry", week.shopping.pantry],
    ];

    const colW = (CW - 8) / 2;

    const drawBox = (x: number, top: number, name: string, list: string[], boxH: number) => {
      setFill(WHITE);
      setDraw(LINE);
      doc.setLineWidth(0.2);
      doc.roundedRect(x, top, colW, boxH, 2.5, 2.5, "FD");
      setFill(theme.soft);
      doc.roundedRect(x, top, colW, 8.5, 2.5, 2.5, "F");
      setFill(WHITE);
      doc.rect(x, top + 6.5, colW, 2, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      setText(theme.dark);
      doc.text(name.toUpperCase(), x + 4, top + 6);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      list.forEach((it, i) => {
        const ty = top + 15 + i * 5.2;
        setDraw([200, 198, 192]);
        doc.setLineWidth(0.2);
        doc.roundedRect(x + 4, ty - 2.6, 2.6, 2.6, 0.6, 0.6, "S");
        setText([70, 74, 78]);
        doc.text(wrap(it, colW - 12)[0], x + 9, ty);
      });
    };

    for (let i = 0; i < cats.length; i += 2) {
      const pair = cats.slice(i, i + 2);
      doc.setFontSize(8);
      const heights = pair.map(([, items]) => 14 + (items ?? []).length * 5.2);
      const rowH = Math.max(...heights);
      if (y + rowH > BOTTOM) newPage();
      pair.forEach(([name, items], j) => {
        drawBox(M + j * (colW + 8), y, name, items ?? [], rowH);
      });
      y += rowH + 8;
    }

    y += 2;
  };

  /* ---------------- recipe card ---------------- */

  const recipeCard = (r: Recipe) => {
    const notes: [string, string][] = [
      ["Serving", r.serving],
      ["Storage", r.storage],
      ["Freezing", r.freezing],
      ["Texture", r.texture],
    ];

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.3);
    const ingH = r.ingredients.reduce((a, i) => a + wrap(i, CW / 2 - 16).length * 4 + 1.4, 0);
    const stepH = r.steps.reduce((a, s) => a + wrap(s, CW / 2 - 16).length * 4 + 1.8, 0);
    doc.setFontSize(8);
    const notesH = notes.reduce((a, [, v]) => a + wrap(v, CW - 40).length * 4 + 2.4, 0);

    const cardH = 29.5 + Math.max(ingH, stepH) + 7 + notesH + 1;

    if (y + Math.min(cardH, 110) > BOTTOM) newPage();

    const top = y;
    setFill(WHITE);
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.roundedRect(M, top, CW, cardH, 3, 3, "FD");
    setFill(theme.tint);
    doc.roundedRect(M, top, CW, 17, 3, 3, "F");
    setFill(WHITE);
    doc.rect(M, top + 14, CW, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    setText(INK);
    doc.text(wrap(r.name, CW - 60)[0], M + 6, top + 8.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setText(theme.dark);
    doc.text(`${r.age}   ·   Prep ${r.prep}   ·   Cook ${r.cook}`, M + 6, top + 13.6);

    let iy = top + 24;
    const colX2 = M + CW / 2 + 2;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setText(theme.dark);
    doc.text("INGREDIENTS", M + 6, iy);
    doc.text("METHOD", colX2, iy);
    iy += 5.5;

    let ay = iy;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.3);
    r.ingredients.forEach((ing) => {
      const lines = wrap(ing, CW / 2 - 16);
      setFill(theme.mid);
      doc.circle(M + 7, ay - 1.1, 0.8, "F");
      setText([70, 74, 78]);
      lines.forEach((l, i) => doc.text(l, M + 11, ay + i * 4));
      ay += lines.length * 4 + 1.4;
    });

    let sy = iy;
    r.steps.forEach((st, i) => {
      const lines = wrap(st, CW / 2 - 16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.4);
      setText(theme.dark);
      doc.text(`${i + 1}`, colX2 + 0.6, sy);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.3);
      setText([70, 74, 78]);
      lines.forEach((l, j) => doc.text(l, colX2 + 5.5, sy + j * 4));
      sy += lines.length * 4 + 1.8;
    });

    let ny = Math.max(ay, sy) + 3;
    setDraw([238, 235, 229]);
    doc.setLineWidth(0.2);
    doc.line(M + 6, ny - 1, M + CW - 6, ny - 1);
    ny += 4;

    notes.forEach(([label, value]) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.6);
      setText(theme.dark);
      doc.text(label.toUpperCase(), M + 6, ny);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      setText([100, 104, 108]);
      const lines = wrap(value, CW - 40);
      lines.forEach((l, i) => doc.text(l, M + 28, ny + i * 4));
      ny += lines.length * 4 + 2.4;
    });

    y = top + cardH + 8;
  };

  /* ---------------- age group ---------------- */

  const ageTitlePage = (g: AgeGroup, t: Theme) => {
    doc.addPage();
    theme = t;
    runningTitle = "";
    setFill(t.tint);
    doc.rect(0, 0, PW, PH, "F");
    setFill(t.soft);
    doc.circle(PW - 26, 40, 40, "F");
    doc.circle(28, PH - 40, 30, "F");

    setDraw(t.mid);
    doc.setLineWidth(0.4);
    doc.roundedRect(16, 16, PW - 32, PH - 32, 4, 4, "S");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setText(t.dark);
    doc.text("A G E   G R O U P", PW / 2, 96, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(34);
    setText(INK);
    doc.text(g.title, PW / 2, 118, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    setText(t.dark);
    doc.text(g.subtitle, PW / 2, 130, { align: "center" });

    doc.setFontSize(9.5);
    setText([90, 94, 98]);
    const intro = wrap(g.intro, 130);
    intro.forEach((l, i) => doc.text(l, PW / 2, 146 + i * 5, { align: "center" }));

    let my = 146 + intro.length * 5 + 12;
    setFill(WHITE);
    doc.roundedRect(M + 10, my, CW - 20, 16 + g.milestones.length * 6, 3, 3, "F");
    my += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setText(t.dark);
    doc.text("WHAT TO EXPECT AT THIS STAGE", M + 18, my);
    my += 6.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.6);
    setText([80, 84, 88]);
    g.milestones.forEach((ms) => {
      setFill(t.mid);
      doc.circle(M + 19, my - 1.1, 0.9, "F");
      doc.text(wrap(ms, CW - 50)[0], M + 23, my);
      my += 6;
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setText(t.dark);
    doc.text("4 weekly planners  ·  4 shopping lists  ·  40 recipes", PW / 2, PH - 44, {
      align: "center",
    });

    y = TOP;
  };

  /* ---------------- build ---------------- */

  cover();
  welcome();

  // reserve 2 pages for the table of contents
  doc.addPage();
  const tocPage1 = doc.getNumberOfPages();
  doc.addPage();

  GROUPS.forEach((g, gi) => {
    const t = Object.values(THEMES)[gi];
    ageTitlePage(g, t);
    toc.push({ label: g.title, page: doc.getNumberOfPages(), level: 0, theme: t });

    g.weeks.forEach((w) => {
      // Planner
      newPage();
      runningTitle = `${g.title} · Week ${w.number}`;
      header();
      toc.push({ label: `${w.title}`, page: doc.getNumberOfPages(), level: 1, theme: t });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      setText(INK);
      doc.text(`Week ${w.number} Meal Planner`, M, y + 4);
      y += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      setText(MUTED);
      wrap(w.intro, CW).forEach((l) => {
        doc.text(l, M, y);
        y += 4.6;
      });
      y += 6;
      plannerTable(w);

      // Shopping list
      newPage();
      toc.push({ label: `Shopping List (Week ${w.number})`, page: doc.getNumberOfPages(), level: 2, theme: t });
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      setText(INK);
      doc.text(`Shopping List`, M, y + 4);
      y += 11;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      setText(MUTED);
      doc.text(`Everything you need for ${g.title} · Week ${w.number}`, M, y);
      y += 9;
      shoppingList(w);

      // Recipes
      newPage();
      toc.push({ label: `Recipe Instructions (Week ${w.number})`, page: doc.getNumberOfPages(), level: 2, theme: t });
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      setText(INK);
      doc.text(`Recipe Instructions`, M, y + 4);
      y += 11;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      setText(MUTED);
      doc.text(`Week ${w.number} · every recipe, step by step`, M, y);
      y += 9;
      w.recipes.forEach((r) => recipeCard(r));
    });
  });

  /* ---------------- final CTA ---------------- */

  doc.addPage();
  theme = THEMES["9to12"];
  runningTitle = "";
  setFill([245, 240, 232]);
  doc.rect(0, 0, PW, PH, "F");
  setFill(THEMES["6to9"].soft);
  doc.circle(20, 30, 34, "F");
  setFill(THEMES["12plus"].soft);
  doc.circle(PW - 18, PH - 34, 36, "F");
  setFill([245, 240, 232]);
  doc.rect(0, 58, PW, PH - 120, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  setText(INK);
  doc.text("You have twelve weeks sorted.", PW / 2, 96, { align: "center" });
  doc.setFontSize(24);
  doc.text("Now let us handle the rest.", PW / 2, 110, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  setText([90, 94, 98]);
  wrap(
    "The BabyBites app turns this planner into a living kitchen assistant: hundreds more recipes, automatic weekly plans built around what your baby already loves, a shopping list that fills itself, and allergy tracking that remembers so you do not have to.",
    150,
  ).forEach((l, i) => doc.text(l, PW / 2, 128 + i * 5.6, { align: "center" }));

  const perks = [
    "300+ recipes for every stage",
    "Weekly plans generated for you",
    "Automatic shopping lists",
    "Allergy and growth tracking",
  ];
  let py = 168;
  perks.forEach((p, i) => {
    const x = i % 2 === 0 ? M + 8 : PW / 2 + 2;
    if (i % 2 === 0 && i > 0) py += 12;
    setFill(WHITE);
    doc.roundedRect(x, py - 6, CW / 2 - 10, 10, 2, 2, "F");
    setFill(THEMES["6to9"].mid);
    doc.circle(x + 5, py - 1, 1.2, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.6);
    setText([70, 74, 78]);
    doc.text(p, x + 9, py + 0.5);
  });

  const btnY = 214;
  setFill([196, 122, 92]);
  doc.roundedRect(M + 20, btnY, CW - 40, 15, 7.5, 7.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  setText(WHITE);
  doc.text("Get the full BabyBites app", PW / 2, btnY + 9.6, { align: "center" });
  doc.link(M + 20, btnY, CW - 40, 15, { url: CTA_URL });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  setText([140, 132, 120]);
  doc.text("page.babybites.space", PW / 2, btnY + 24, { align: "center" });
  doc.link(PW / 2 - 25, btnY + 20, 50, 6, { url: CTA_URL });

  doc.setFontSize(8);
  doc.text("Made with care for parents who want mealtimes to feel easy.", PW / 2, PH - 26, {
    align: "center",
  });

  /* ---------------- table of contents ---------------- */

  const drawToc = () => {
    let tp = tocPage1;
    doc.setPage(tp);
    pageBg();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setText(MUTED);
    doc.text("BABY MEAL PLANNER", M, 14);
    doc.text("CONTENTS", PW - M, 14, { align: "right" });
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.line(M, 17, PW - M, 17);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    setText(INK);
    doc.text("Table of Contents", M, TOP + 4);
    let ty = TOP + 16;

    const nextTocPage = () => {
      tp += 1;
      doc.setPage(tp);
      pageBg();
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      setText(MUTED);
      doc.text("BABY MEAL PLANNER", M, 14);
      doc.text("CONTENTS", PW - M, 14, { align: "right" });
      setDraw(LINE);
      doc.line(M, 17, PW - M, 17);
      ty = TOP + 4;
    };

    toc.forEach((e) => {
      const h = e.level === 0 ? 15 : e.level === 1 ? 9 : 7.4;
      if (ty + h > BOTTOM) nextTocPage();

      if (e.level === 0) {
        ty += 5;
        setFill(e.theme.soft);
        doc.roundedRect(M, ty - 5.5, CW, 9.5, 2, 2, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10.5);
        setText(e.theme.dark);
        doc.text(e.label, M + 5, ty + 1);
        doc.text(String(e.page), PW - M - 5, ty + 1, { align: "right" });
      } else {
        const indent = e.level === 1 ? 6 : 12;
        doc.setFont("helvetica", e.level === 1 ? "bold" : "normal");
        doc.setFontSize(e.level === 1 ? 9 : 8.4);
        setText(e.level === 1 ? INK : [110, 114, 118]);
        doc.text(e.label, M + indent, ty);
        const labelEnd = M + indent + doc.getTextWidth(e.label) + 3;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.2);
        setText(MUTED);
        doc.text(String(e.page), PW - M, ty, { align: "right" });
        setDraw([232, 229, 223]);
        doc.setLineWidth(0.15);
        doc.line(labelEnd, ty - 1.2, PW - M - 8, ty - 1.2);
      }
      doc.link(M, ty - 5, CW, h, { pageNumber: e.page });
      ty += h;
    });
  };

  drawToc();

  /* ---------------- page numbers ---------------- */

  const total = doc.getNumberOfPages();
  for (let p = 2; p <= total; p += 1) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(MUTED);
    doc.text(String(p), PW / 2, PH - 12, { align: "center" });
  }

  return doc;
}

export function generateMealPlannerPdf() {
  buildMealPlannerDoc().save("baby-meal-planner-4-week-plans.pdf");
}
