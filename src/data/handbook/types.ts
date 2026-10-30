export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; sub?: string }
  | { type: "list"; title?: string; items: string[]; ordered?: boolean }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; kind: "tip" | "warning" | "myth" | "note"; title: string; body: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "keyfacts"; items: { label: string; value: string }[] };

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  intro: string;
  /** image key resolved by the PDF generator */
  image?: string;
  blocks: Block[];
  takeaways: string[];
}
