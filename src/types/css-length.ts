export type CSSUnit =
  | "px"
  | "em"
  | "rem"
  | "%"
  | "vh"
  | "vw"
  | "vmin"
  | "vmax"
  | "ch"
  | "ex"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc";

export type CSSLength = "0" | `${number}${CSSUnit}`;
