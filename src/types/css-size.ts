import { CSSLength } from "@/types/css-length";

export type CSSSizeKeyword =
  | "auto"
  | "fit-content"
  | "max-content"
  | "min-content"
  | "inherit"
  | "initial"
  | "unset";

export type CSSSize = CSSLength | CSSSizeKeyword;
