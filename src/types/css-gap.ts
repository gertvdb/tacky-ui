import { CSSLength } from "@/types/css-length";

type CSSGapKeyword = "normal" | "inherit" | "initial" | "unset";

export type CSSGap = CSSLength | CSSGapKeyword;

export function isCSSGap(value: any): value is CSSGap {
  if (typeof value !== "string") return false;

  // Check if it's a CSSGapKeyword
  if (
    value === "normal" ||
    value === "inherit" ||
    value === "initial" ||
    value === "unset"
  ) {
    return true;
  }

  // Check if it's a CSSLength
  if (value === "0") return true;

  // Check if it matches the pattern ${number}${CSSUnit}
  const cssUnitRegex =
    /^[0-9]+(\.[0-9]+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;
  return cssUnitRegex.test(value);
}
