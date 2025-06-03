import React, { PropsWithChildren } from "react";
import { CSSGap, isCSSGap } from "./../../../src/types/css-gap";
import { CSSBreakpoint } from "./../../../src/types/css-breakpoint-unit";

export type IGridGapItemKey = "row" | "column";

export interface IGridGapItem {
  row: CSSGap;
  column: CSSGap;
}

export interface IPartialGridGapItem {
  row?: CSSGap;
  column?: CSSGap;
}

export function isGridGapItem(value: any): value is IGridGapItem {
  return (
    typeof value === "object" &&
    value !== null &&
    "row" in value &&
    "column" in value &&
    isCSSGap(value.row) &&
    isCSSGap(value.column)
  );
}

export function isPartialGridGapItem(value: any): value is IPartialGridGapItem {
  return (
    typeof value === "object" &&
    value !== null &&
    (("row" in value && isCSSGap(value.row)) ||
      ("column" in value && isCSSGap(value.column)))
  );
}

export interface IGridGap {
  initial: IGridGapItem | CSSGap;
  xs?: IGridGapItem | CSSGap;
  sm?: IGridGapItem | CSSGap;
  md?: IGridGapItem | CSSGap;
  lg?: IGridGapItem | CSSGap;
  xl?: IGridGapItem | CSSGap;
  xxl?: IGridGapItem | CSSGap;
  "3xl"?: IGridGapItem | CSSGap;
  "4xl"?: IGridGapItem | CSSGap;
}

export interface IGridBreakpoints {
  xs: CSSBreakpoint;
  sm: CSSBreakpoint;
  md: CSSBreakpoint;
  lg: CSSBreakpoint;
  xl: CSSBreakpoint;
  xxl: CSSBreakpoint;
  "3xl": CSSBreakpoint;
  "4xl": CSSBreakpoint;
}
export type IGridBreakpointsPartial = Partial<IGridBreakpoints>;

export interface IGridConfig extends PropsWithChildren {
  gap: IGridGap | CSSGap;
  breakpoints: Partial<IGridBreakpoints>;
  columns: number;
}

export type IGridConfigPartial = Partial<IGridConfig>;

export interface IGrid extends PropsWithChildren {
  config?: IGridConfigPartial;
}

export interface IGridItemSpan {
  initial: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  "3xl"?: number;
  "4xl"?: number;
}

export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value) && isFinite(value); // Exclude NaN

export const isUndef = (value: unknown): value is undefined =>
    typeof value === "undefined";

export interface IGridItemConfig extends PropsWithChildren {
  span: IGridItemSpan | number;
}

export type IGridItemConfigPartial = Partial<IGridItemConfig>;

export interface IGridItem extends PropsWithChildren {
  config?: IGridItemConfigPartial;
}

export interface GridItemProps {
  children: React.ReactNode;
  initial?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export interface StyledGridProps {
  gapRow: string;
  gapColumn: string;
  smGapRow: string;
  smGapColumn: string;
  mdGapRow: string;
  mdGapColumn: string;
  lgGapRow: string;
  lgGapColumn: string;
  xlGapRow: string;
  xlGapColumn: string;
  xxlGapRow: string;
  xxlGapColumn: string;
  smBreakpoint: string;
  mdBreakpoint: string;
  lgBreakpoint: string;
  xlBreakpoint: string;
  xxlBreakpoint: string;
  alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

export interface StyledGridItemProps {
  initial: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  smBreakpoint: string;
  mdBreakpoint: string;
  lgBreakpoint: string;
  xlBreakpoint: string;
  xxlBreakpoint: string;
}
