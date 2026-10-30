import { jsPDF } from "jspdf";
import type { Block, Chapter } from "@/data/handbook/types";
import { independenceChapterByNumber } from "@/data/independence/chapters";
import { independenceParts as parts } from "@/data/independence/parts";

import coverImg from "@/assets/independence/cover.jpg";
import foundationImg from "@/assets/independence/foundation.jpg";
import setupImg from "@/assets/independence/setup.jpg";
import skillsImg from "@/assets/independence/skills.jpg";
import safetyImg from "@/assets/independence/safety.jpg";
import mealtimeImg from "@/assets/independence/mealtime.jpg";
import planImg from "@/assets/independence/plan.jpg";

/* ------------------------------------------------------------------ */

const PW = 210;
const PH = 297;
const M = 20;
const CW = PW - M * 2;
const TOP = 30;
const BOTTOM = PH - 24;
const CTA_URL = "https://page.babybites.space/";
const BOOK_TITLE = "TEACH YOUR BABY TO EAT INDEPENDENTLY";

type RGB = [number, number, number];

const INK: RGB = [34, 38, 36];
const SOFT_INK: RGB = [74, 79, 76];
const MUTED: RGB = [124, 130, 126];
const LINE: RGB = [222, 228, 222];
const CREAM: RGB = [251, 250, 246];
const WHITE: RGB = [255, 255, 255];
const ACCENT: RGB = [200, 124, 52];
const ACCENT_DEEP: RGB = [146, 82, 32];
const ACCENT_TINT: RGB = [250, 240, 226];

const CALLOUT: Record<string, { bar: RGB; tint: RGB; label: string }> = {
  tip: { bar: [76, 124, 92], tint: [235, 244, 236], label: "TRY THIS" },
  warning: { bar: [178, 73, 60], tint: [250, 234, 230], label: "SAFETY FIRST" },
  myth: { bar: [116, 86, 150], tint: [242, 236, 250], label: "MYTH BUSTER" },
  note: { bar: [70, 105, 140], tint: [232, 240, 248], label: "GOOD TO KNOW" },
};

const IMAGES: Record<string, string> = {
  cover: coverImg,
  foundation: foundationImg,
  setup: setupImg,
  skills: skillsImg,
  safety: safetyImg,
  mealtime: mealtimeImg,
  plan: planImg,
};

async function toDataUrl(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/* ------------------------------------------------------------------ */

export async function buildIndependenceDoc(): Promise<jsPDF> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const loaded = await Promise.all(
    Object.entries(IMAGES).map(async ([k, url]) => [k, await toDataUrl(url)] as const),
  );
  const img: Record<string, string> = Object.fromEntries(loaded);

  let y = TOP;
  let runningTitle = "";
  let showChrome = false;

  const setFill = (c: RGB) => doc.setFillColor(c[0], c[1], c[2]);
  const setDraw = (c: RGB) => doc.setDrawColor(c[0], c[1], c[2]);
  const setText = (c: RGB) => doc.setTextColor(c[0], c[1], c[2]);

  const pageBg = () => {
    setFill(CREAM);
    doc.rect(0, 0, PW, PH, "F");
  };

  const chrome = () => {
    if (!showChrome) return;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    setText(MUTED);
    doc.text(BOOK_TITLE, M, 15);
    const rt = runningTitle.toUpperCase();
    doc.text(rt.length > 42 ? rt.slice(0, 40).trimEnd() + "…" : rt, PW - M, 15, { align: "right" });
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.line(M, 18.5, PW - M, 18.5);
  };

  const footer = (pageNo: number) => {
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.line(M, PH - 18, PW - M, PH - 18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setText(MUTED);
    doc.text("BabyBites", M, PH - 13);
    setText(ACCENT_DEEP);
    doc.setFont("helvetica", "bold");
    doc.text(String(pageNo), PW - M, PH - 13, { align: "right" });
  };

  const newPage = () => {
    doc.addPage();
    pageBg();
    chrome();
    y = TOP;
  };

  const need = (h: number) => {
    if (y + h > BOTTOM) newPage();
  };

  const wrap = (t: string, w: number) => doc.splitTextToSize(t, w) as string[];

  /* ---------------- primitives ---------------- */

  const paragraph = (text: string, size = 9.6, color: RGB = SOFT_INK, lead = 4.9) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    setText(color);
    wrap(text, CW).forEach((l) => {
      need(lead);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(size);
      setText(color);
      doc.text(l, M, y);
      y += lead;
    });
    y += 2.6;
  };

  const heading = (text: string, sub?: string) => {
    need(20);
    setFill(ACCENT);
    doc.roundedRect(M, y - 3.6, 2, 8.4, 1, 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12.5);
    setText(ACCENT_DEEP);
    wrap(text, CW - 6).forEach((l, i) => {
      doc.text(l, M + 5.5, y + 2.4 + i * 6.6);
      if (i > 0) y += 6.6;
    });
    y += 9;
    if (sub) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.6);
      setText(MUTED);
      wrap(sub, CW - 5.5).forEach((l) => {
        doc.text(l, M + 5.5, y);
        y += 4.3;
      });
      y += 1;
    }
    y += 1.5;
  };

  const list = (items: string[], title?: string, ordered = false) => {
    if (title) {
      need(9);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.8);
      setText(INK);
      doc.text(title, M, y);
      y += 5.6;
    }
    items.forEach((item, i) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.4);
      const lines = wrap(item, CW - 8);
      need(lines.length * 4.7 + 1.4);
      if (ordered) {
        setFill(ACCENT_TINT);
        doc.circle(M + 2.4, y - 1.1, 2.4, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        setText(ACCENT_DEEP);
        doc.text(String(i + 1), M + 2.4, y + 0.3, { align: "center" });
      } else {
        setFill(ACCENT);
        doc.circle(M + 2.2, y - 1.2, 0.9, "F");
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.4);
      setText(SOFT_INK);
      lines.forEach((l, idx) => doc.text(l, M + 8, y + idx * 4.7));
      y += lines.length * 4.7 + 1.6;
    });
    y += 2.4;
  };

  const table = (headers: string[], rows: string[][], title?: string) => {
    const weights = headers.map((h, i) => {
      const maxLen = Math.max(h.length, ...rows.map((r) => (r[i] || "").length));
      return Math.max(maxLen, 6);
    });
    const total = weights.reduce((a, b) => a + b, 0);
    const widths = weights.map((w) => Math.max(18, (w / total) * CW));
    const scale = CW / widths.reduce((a, b) => a + b, 0);
    const colW = widths.map((w) => w * scale);

    if (title) {
      need(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.8);
      setText(INK);
      doc.text(title, M, y);
      y += 5.8;
    }

    const drawHead = () => {
      need(11);
      setFill(ACCENT_DEEP);
      doc.rect(M, y, CW, 8.4, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      setText(WHITE);
      let x = M;
      headers.forEach((h, i) => {
        wrap(h, colW[i] - 4).slice(0, 1).forEach((l) => doc.text(l, x + 2.4, y + 5.4));
        x += colW[i];
      });
      y += 8.4;
    };

    drawHead();

    rows.forEach((row, ri) => {
      doc.setFontSize(8.2);
      const cellLines = row.map((c, i) => {
        doc.setFont("helvetica", i === 0 ? "bold" : "normal");
        return wrap(c || "", colW[i] - 5);
      });
      doc.setFont("helvetica", "normal");
      const h = Math.max(...cellLines.map((l) => l.length)) * 4.1 + 3.6;
      if (y + h > BOTTOM) {
        newPage();
        drawHead();
      }
      setFill(ri % 2 === 0 ? WHITE : ([248, 245, 238] as RGB));
      doc.rect(M, y, CW, h, "F");
      setDraw(LINE);
      doc.setLineWidth(0.15);
      doc.line(M, y + h, M + CW, y + h);
      let x = M;
      cellLines.forEach((lines, i) => {
        doc.setFont("helvetica", i === 0 ? "bold" : "normal");
        setText(i === 0 ? INK : SOFT_INK);
        doc.setFontSize(8.2);
        lines.forEach((l, li) => doc.text(l, x + 2.5, y + 5 + li * 4.1));
        x += colW[i];
      });
      y += h;
    });
    y += 6;
  };

  const callout = (kind: string, title: string, body: string) => {
    const c = CALLOUT[kind] || CALLOUT.note;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.8);
    const lines = wrap(body, CW - 14);
    const h = lines.length * 4.5 + 15;
    if (y + h > BOTTOM) newPage();
    setFill(c.tint);
    doc.roundedRect(M, y, CW, h, 2.4, 2.4, "F");
    setFill(c.bar);
    doc.roundedRect(M, y, 2.6, h, 1.3, 1.3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.8);
    setText(c.bar);
    doc.text(c.label, M + 7, y + 6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.4);
    setText(INK);
    wrap(title, CW - 16).slice(0, 1).forEach((l) => doc.text(l, M + 7, y + 11.6));
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.8);
    setText(SOFT_INK);
    lines.forEach((l, i) => doc.text(l, M + 7, y + 16.8 + i * 4.5));
    y += h + 6;
  };

  const quote = (text: string, author?: string) => {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    const lines = wrap(text, CW - 20);
    const h = lines.length * 5.6 + (author ? 8 : 2) + 10;
    if (y + h > BOTTOM) newPage();
    setDraw(ACCENT);
    doc.setLineWidth(0.6);
    doc.line(M + 4, y + 2, M + 4, y + h - 6);
    setText(ACCENT_DEEP);
    lines.forEach((l, i) => doc.text(l, M + 11, y + 8 + i * 5.6));
    if (author) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      setText(MUTED);
      doc.text("- " + author, M + 11, y + 8 + lines.length * 5.6 + 2.5);
    }
    y += h + 4;
  };

  const keyfacts = (items: { label: string; value: string }[]) => {
    const rows = Math.ceil(items.length / 2);
    const h = rows * 15 + 14;
    if (y + h > BOTTOM) newPage();
    setFill(ACCENT_TINT);
    doc.roundedRect(M, y, CW, h, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    setText(ACCENT_DEEP);
    doc.text("KEY FACTS AT A GLANCE", M + 7, y + 8);
    const colW = (CW - 20) / 2;
    items.forEach((it, i) => {
      const cx = M + 7 + (i % 2) * (colW + 6);
      const cy = y + 17 + Math.floor(i / 2) * 15;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      setText(INK);
      wrap(it.value, colW).slice(0, 1).forEach((l) => doc.text(l, cx, cy + 3));
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.6);
      setText(MUTED);
      wrap(it.label, colW).slice(0, 2).forEach((l, li) => doc.text(l, cx, cy + 8 + li * 3.6));
    });
    y += h + 7;
  };

  const renderBlock = (b: Block) => {
    switch (b.type) {
      case "paragraph":
        paragraph(b.text);
        break;
      case "heading":
        heading(b.text, b.sub);
        break;
      case "list":
        list(b.items, b.title, b.ordered);
        break;
      case "table":
        table(b.headers, b.rows, b.title);
        break;
      case "callout":
        callout(b.kind, b.title, b.body);
        break;
      case "quote":
        quote(b.text, b.author);
        break;
      case "keyfacts":
        keyfacts(b.items);
        break;
    }
  };

  /* ---------------- cover ---------------- */

  pageBg();
  doc.addImage(img.cover, "JPEG", 0, 0, PW, 168, undefined, "FAST");
  setFill(CREAM);
  doc.rect(0, 160, PW, PH - 160, "F");
  setFill(ACCENT);
  doc.rect(0, 158, PW, 2.4, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setText(ACCENT_DEEP);
  doc.text("B A B Y B I T E S   P R E S E N T S", PW / 2, 180, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  setText(INK);
  doc.text("TEACH YOUR BABY", PW / 2, 200, { align: "center" });
  doc.text("TO EAT", PW / 2, 213, { align: "center" });
  setText(ACCENT_DEEP);
  doc.text("INDEPENDENTLY", PW / 2, 226, { align: "center" });

  setDraw(ACCENT);
  doc.setLineWidth(0.5);
  doc.line(PW / 2 - 22, 234, PW / 2 + 22, 234);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.6);
  setText(SOFT_INK);
  doc.text("The complete, step-by-step method for raising a confident", PW / 2, 244, { align: "center" });
  doc.text("self-feeder - safely, calmly and from the very first bite", PW / 2, 251, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.4);
  setText(ACCENT_DEEP);
  doc.text("6 PARTS   |   12 CHAPTERS   |   90-DAY PLAN INCLUDED", PW / 2, 270, { align: "center" });

  /* ---------------- copyright ---------------- */

  newPage();
  y = 60;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setText(INK);
  doc.text("Teach Your Baby to Eat Independently", M, y);
  y += 10;
  paragraph(
    "Published by BabyBites. All rights reserved. No part of this publication may be reproduced, distributed or transmitted in any form without the prior written permission of the publisher.",
    9,
    MUTED,
  );
  y += 4;
  callout(
    "warning",
    "Medical and safety disclaimer",
    "This book is an educational resource based on widely accepted infant feeding guidance from major health authorities. It does not replace personalised advice from your pediatrician, family doctor, dietitian or feeding therapist, and it is not a substitute for a certified infant first aid and choking response course. Always supervise your baby during every meal, and speak to your child's healthcare provider before starting solids, introducing allergens, or if you have any concern about growth, swallowing, allergies or development.",
  );
  y += 4;
  paragraph("Edition 1. Written for parents and caregivers of babies aged 6 to 24 months.", 9, MUTED);

  /* ---------------- welcome ---------------- */

  newPage();
  y = 42;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setText(ACCENT_DEEP);
  doc.text("WELCOME", M, y);
  y += 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  setText(INK);
  doc.text("Put the spoon down.", M, y);
  y += 12;
  doc.text("Your baby is ready.", M, y);
  y += 14;
  paragraph(
    "Imagine your baby happily picking up food, exploring new flavours and building healthy eating habits from the very beginning - while you sit beside them feeling calm instead of anxious. That is not a personality trait some lucky babies are born with. It is a set of skills, and skills can be taught.",
  );
  paragraph(
    "This book is the complete method. It covers what independent eating actually develops, how to recognise readiness, how to set up the chair and the tools, how to cut every food to match your baby's current grasp, how to tell gagging apart from choking and respond correctly, how to introduce allergens while your baby feeds themselves, how to hold boundaries without pressure, and finally a twelve-week plan that takes you from the first fistful to a baby eating the family meal on their own.",
  );
  paragraph(
    "Nothing here is theory for its own sake. Every chapter ends with takeaways you can act on at the next meal, and every recommendation reflects current guidance from major pediatric health authorities. Read it in order the first time, then keep it as the reference you return to whenever a new phase begins.",
  );
  y += 2;
  heading("How to use this book");
  list([
    "Read Part 1 and Part 2 before your baby's next meal. Readiness and posture come before food.",
    "Keep the cutting tables in Part 3 open on your phone while you prepare food for the first month.",
    "Read Part 4 completely, twice, and book a certified infant first aid course. Confidence removes the urge to take over.",
    "Use the scripts in Part 5 word for word until they feel natural.",
    "Follow the 90-day plan in Part 6 week by week, and use the troubleshooting index whenever something changes.",
  ]);
  callout(
    "tip",
    "The single rule that carries all the others",
    "You decide what food is offered, when it is offered and where it is offered. Your baby decides whether to eat it and how much. Every technique in this book protects that boundary, because it is what turns a self-feeder into a self-regulating eater for life.",
  );

  /* ---------------- ordered structure ---------------- */

  type Entry =
    | { kind: "part"; part: (typeof parts)[number] }
    | { kind: "chapter"; ch: Chapter; display: number; part: (typeof parts)[number] };

  const entries: Entry[] = [];
  let displayNo = 0;
  parts.forEach((p) => {
    entries.push({ kind: "part", part: p });
    p.chapters.forEach((n) => {
      const ch = independenceChapterByNumber.get(n);
      if (!ch) return;
      displayNo += 1;
      entries.push({ kind: "chapter", ch, display: displayNo, part: p });
    });
  });

  /* ---------------- table of contents ---------------- */

  newPage();
  y = 42;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setText(ACCENT_DEEP);
  doc.text("CONTENTS", M, y);
  y += 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  setText(INK);
  doc.text("What is inside", M, y);
  y += 8;
  setDraw(ACCENT);
  doc.setLineWidth(0.5);
  doc.line(M, y, M + 30, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setText(MUTED);
  doc.text("Six parts, in the exact order your baby will need them.", M, y);
  y += 12;

  const tocY: number[] = [];
  const tocPages: number[] = [];

  entries.forEach((e) => {
    const h = e.kind === "part" ? 18 : 13;
    if (y + h > BOTTOM) {
      newPage();
      y = 34;
    }
    tocY.push(y);
    tocPages.push(doc.getNumberOfPages());

    if (e.kind === "part") {
      y += 3;
      setFill(ACCENT_TINT);
      doc.roundedRect(M, y - 5.6, CW, 12.4, 2, 2, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      setText(ACCENT_DEEP);
      doc.text(`PART ${String(e.part.number).padStart(2, "0")}`, M + 3.5, y - 1.2);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.4);
      setText(INK);
      doc.text(e.part.title.slice(0, 52), M + 22, y - 1.2);
      y += 15;
    } else {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.8);
      setText(INK);
      doc.text(`${String(e.display).padStart(2, "0")}   ${e.ch.title}`, M + 6, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.8);
      setText(MUTED);
      doc.text(e.ch.subtitle.slice(0, 90), M + 16, y + 4.2);
      setDraw(LINE);
      doc.setLineWidth(0.15);
      doc.line(M + 6, y + 7.8, PW - M, y + 7.8);
      y += 13;
    }
  });

  /* ---------------- parts + chapters ---------------- */

  const entryPages: number[] = [];

  const partDivider = (p: (typeof parts)[number]) => {
    showChrome = false;
    newPage();
    entryPages.push(doc.getNumberOfPages());
    runningTitle = p.kicker;

    const hero = img[p.image];
    if (hero) doc.addImage(hero, "JPEG", 0, 0, PW, 132, undefined, "FAST");
    setFill(CREAM);
    doc.rect(0, 130, PW, PH - 130, "F");
    setFill(ACCENT);
    doc.rect(0, 128, PW, 2.4, "F");

    setFill(ACCENT_DEEP);
    doc.roundedRect(M, 112, 40, 13, 6.5, 6.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.6);
    setText(WHITE);
    doc.text(`PART ${String(p.number).padStart(2, "0")}`, M + 20, 120.4, { align: "center" });

    y = 148;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setText(ACCENT_DEEP);
    doc.text(p.kicker.toUpperCase(), M, y);
    y += 12;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(21);
    setText(INK);
    wrap(p.title, CW - 10).forEach((l) => {
      doc.text(l, M, y);
      y += 10.5;
    });
    y += 2;
    setDraw(ACCENT);
    doc.setLineWidth(0.5);
    doc.line(M, y, M + 26, y);
    y += 9;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10.4);
    setText(ACCENT_DEEP);
    wrap(p.promise, CW - 6).forEach((l) => {
      doc.text(l, M, y);
      y += 5.6;
    });
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.4);
    setText(SOFT_INK);
    wrap(p.explainer, CW).forEach((l) => {
      doc.text(l, M, y);
      y += 4.9;
    });
    y += 6;

    const cl = p.covered.map((c) => wrap(c, CW - 26));
    const boxH = cl.reduce((a, l) => a + l.length * 4.7 + 1.6, 0) + 20;
    setFill([243, 238, 229]);
    doc.roundedRect(M, y, CW, boxH, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    setText(ACCENT_DEEP);
    doc.text("WHAT THIS PART COVERS", M + 7, y + 8);
    let cy = y + 16.5;
    cl.forEach((lines) => {
      setFill(ACCENT);
      doc.circle(M + 8, cy - 1.1, 0.9, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.2);
      setText(SOFT_INK);
      lines.forEach((l, li) => doc.text(l, M + 12.5, cy + li * 4.7));
      cy += lines.length * 4.7 + 1.6;
    });
  };

  entries.forEach((e) => {
    if (e.kind === "part") {
      partDivider(e.part);
      return;
    }
    const ch = e.ch;
    showChrome = false;
    newPage();
    entryPages.push(doc.getNumberOfPages());
    runningTitle = ch.title;

    y = 60;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setText(ACCENT_DEEP);
    doc.text(
      `PART ${String(e.part.number).padStart(2, "0")}   |   CHAPTER ${String(e.display).padStart(2, "0")}`,
      M,
      y,
    );
    y += 13;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(23);
    setText(INK);
    wrap(ch.title, CW).forEach((l) => {
      doc.text(l, M, y);
      y += 11.5;
    });
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    setText(ACCENT_DEEP);
    wrap(ch.subtitle, CW).forEach((l) => {
      doc.text(l, M, y);
      y += 6;
    });
    y += 7;
    setDraw(LINE);
    doc.setLineWidth(0.2);
    doc.line(M, y, PW - M, y);
    y += 9;
    paragraph(ch.intro, 10, SOFT_INK, 5.2);

    showChrome = true;
    newPage();
    ch.blocks.forEach(renderBlock);

    /* takeaways */
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const tLines = ch.takeaways.map((t) => wrap(t, CW - 22));
    const th = tLines.reduce((a, l) => a + l.length * 4.8 + 1.8, 0) + 22;
    if (y + th > BOTTOM) newPage();
    setFill([243, 238, 229]);
    doc.roundedRect(M, y, CW, th, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    setText(ACCENT_DEEP);
    doc.text("CHAPTER TAKEAWAYS", M + 7, y + 8);
    let ty = y + 16.5;
    tLines.forEach((lines) => {
      setFill(ACCENT);
      doc.circle(M + 8, ty - 1.1, 0.9, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      setText(SOFT_INK);
      lines.forEach((l, li) => doc.text(l, M + 12.5, ty + li * 4.8));
      ty += lines.length * 4.8 + 1.8;
    });
    y += th + 6;
  });

  /* ---------------- final CTA ---------------- */

  showChrome = false;
  newPage();
  setFill(ACCENT_DEEP);
  doc.rect(0, 0, PW, PH, "F");
  setFill([214, 128, 60]);
  doc.circle(PW - 10, 24, 46, "F");
  setFill(ACCENT_DEEP);
  doc.circle(PW - 10, 24, 34, "F");

  y = 52;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setText([245, 216, 186]);
  doc.text("YOUR BABY CAN DO IT. NOW MAKE IT EASY ON YOU.", M, y);
  y += 16;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  setText(WHITE);
  doc.text("Never wonder what", M, y);
  y += 13;
  doc.text("to serve them again.", M, y);
  y += 16;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.4);
  setText([245, 228, 210]);
  [
    "You now know how to teach the skill. The BabyBites app hands you the food:",
    "300+ pediatrician-reviewed recipes filtered by age and texture, self-feeding",
    "cutting guides, weekly meal plans, automatic shopping lists and an allergen",
    "tracker - so every meal is one you already know is safe and graspable.",
  ].forEach((l) => {
    doc.text(l, M, y);
    y += 6;
  });

  y += 8;
  [
    "300+ recipes filtered by age, texture and allergen",
    "Finger-food cutting guides for every stage",
    "Weekly meal plans that follow this exact method",
    "Smart shopping lists generated in one tap",
    "Allergen tracker and food safety scanner",
  ].forEach((t) => {
    setFill([234, 168, 106]);
    doc.circle(M + 2, y - 1.2, 1.3, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    setText(WHITE);
    doc.text(t, M + 7, y);
    y += 8;
  });

  y += 6;
  setFill(WHITE);
  doc.roundedRect(M, y, CW, 20, 10, 10, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setText(ACCENT_DEEP);
  doc.text("Get instant access - free to start", PW / 2, y + 12.8, { align: "center" });
  doc.link(M, y, CW, 20, { url: CTA_URL });
  y += 27;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setText([245, 216, 186]);
  doc.text(CTA_URL, PW / 2, y, { align: "center" });
  y += 14;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.6);
  setText([250, 236, 220]);
  doc.text('"He went from refusing the spoon to feeding himself dinner in six weeks.', PW / 2, y, { align: "center" });
  doc.text('I finally eat my own meal while it is still warm."', PW / 2, y + 5.6, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Marta R., mom of a 10-month-old", PW / 2, y + 13, { align: "center" });

  /* ---------------- toc links + footers ---------------- */

  entries.forEach((e, i) => {
    doc.setPage(tocPages[i]);
    const py = tocY[i];
    doc.setFont("helvetica", "bold");
    doc.setFontSize(e.kind === "part" ? 8.6 : 9.4);
    setText(ACCENT_DEEP);
    const ly = e.kind === "part" ? py + 1.8 : py;
    doc.text(String(entryPages[i]), PW - M - (e.kind === "part" ? 3.5 : 0), ly, { align: "right" });
    doc.link(M, ly - 6, CW, 13, { pageNumber: entryPages[i] });
  });

  const total = doc.getNumberOfPages();
  for (let p = 2; p < total; p++) {
    doc.setPage(p);
    footer(p);
  }

  return doc;
}

export async function generateIndependencePdf() {
  const doc = await buildIndependenceDoc();
  doc.save("teach-your-baby-to-eat-independently.pdf");
}
