import React, { createContext } from "react";
import {IGridConfigPartial, IGridGap, isUndef} from "./grid.types";
import { CSSGap, isCSSGap } from "./../../../src/types/css-gap";

export interface IContextGridBreakPoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  "3xl": string;
  "4xl": string;
}

export interface IContextGridGaps {
  initial: { row: string; column: string };
  xs: { row: string; column: string };
  sm: { row: string; column: string };
  md: { row: string; column: string };
  lg: { row: string; column: string };
  xl: { row: string; column: string };
  xxl: { row: string; column: string };
  "3xl": { row: string; column: string };
  "4xl": { row: string; column: string };
}

export interface IContextGridType {
  gap: IContextGridGaps;
  breakpoints: IContextGridBreakPoints;
  columns: number;
}

export const ContextGridColumnsDefaults = 12;

const ContextGridBreakpointsDefaults = {
  xs: "480px", // For very small screens like older phones (e.g., iPhone SE or similar):
  sm: "640px", // Mobile (small)
  md: "768px", // Tablets (medium)
  lg: "1024px", // Small laptops
  xl: "1280px", // Desktops
  xxl: "1536px", // Large desktops / 2K+
  "3xl": "1920px", // For ultra-wide monitors (e.g., 4K+ displays or dashboards):
  "4xl": "2560px", // For ultra-wide monitors (e.g., 4K+ displays or dashboards):
};

const ContextGridGapsDefaults = {
  initial: { row: "0", column: "0" },
  xs: { row: "0", column: "0" },
  sm: { row: "0", column: "0" },
  md: { row: "0", column: "0" },
  lg: { row: "0", column: "0" },
  xl: { row: "0", column: "0" },
  xxl: { row: "0", column: "0" },
  "3xl": { row: "0", column: "0" },
  "4xl": { row: "0", column: "0" },
};

export const ContextGrid = createContext<IContextGridType>({
  breakpoints: ContextGridBreakpointsDefaults,
  gap: ContextGridGapsDefaults,
  columns: ContextGridColumnsDefaults,
});

export const ContextProviderGrid = (props: IGridConfigPartial) => {
  const { gap, breakpoints, columns, children } = props;

  const CssGap = gap ?? {
    initial: "0",
    xs: "0",
    sm: "0",
    md: "0",
    lg: "0",
    xl: "0",
    xxl: "0",
    "3xl": "0",
    "4xl": "0",
  };

  const SafeGapRowInitial = isCSSGap(CssGap)
    ? CssGap
    : isCSSGap(CssGap.initial)
      ? CssGap.initial
      : (CssGap.initial.row ?? "0");
  const SafeGapColInitial = isCSSGap(CssGap)
    ? CssGap
    : isCSSGap(CssGap.initial)
      ? CssGap.initial
      : (CssGap.initial.column ?? "0");

  const SafeGapRowXs = getCssGap(CssGap, SafeGapRowInitial, "xs", "row");
  const SafeGapColXs = getCssGap(CssGap, SafeGapColInitial, "xs", "column");

  const SafeGapRowSm = getCssGap(CssGap, SafeGapRowXs, "sm", "row");
  const SafeGapColSm = getCssGap(CssGap, SafeGapColXs, "sm", "column");

  const SafeGapRowMd = getCssGap(CssGap, SafeGapRowSm, "md", "row");
  const SafeGapColMd = getCssGap(CssGap, SafeGapColSm, "md", "column");

  const SafeGapRowLg = getCssGap(CssGap, SafeGapRowMd, "lg", "row");
  const SafeGapColLg = getCssGap(CssGap, SafeGapColMd, "lg", "column");

  const SafeGapRowXl = getCssGap(CssGap, SafeGapRowLg, "xl", "row");
  const SafeGapColXl = getCssGap(CssGap, SafeGapColLg, "xl", "column");

  const SafeGapRowXxl = getCssGap(CssGap, SafeGapRowXl, "xxl", "row");
  const SafeGapColXxl = getCssGap(CssGap, SafeGapColXl, "xxl", "column");

  const SafeGapRow3xl = getCssGap(CssGap, SafeGapRowXxl, "3xl", "row");
  const SafeGapCol3xl = getCssGap(CssGap, SafeGapColXxl, "3xl", "column");

  const SafeGapRow4xl = getCssGap(CssGap, SafeGapRow3xl, "4xl", "row");
  const SafeGapCol4xl = getCssGap(CssGap, SafeGapCol3xl, "4xl", "column");

  const gapConfig = {
    initial: {
      row: SafeGapRowInitial,
      column: SafeGapColInitial,
    },
    xs: {
      row: SafeGapRowXs,
      column: SafeGapColXs,
    },
    sm: {
      row: SafeGapRowSm,
      column: SafeGapColSm,
    },
    md: {
      row: SafeGapRowMd,
      column: SafeGapColMd,
    },
    lg: {
      row: SafeGapRowLg,
      column: SafeGapColLg,
    },
    xl: {
      row: SafeGapRowXl,
      column: SafeGapColXl,
    },
    xxl: {
      row: SafeGapRowXxl,
      column: SafeGapColXxl,
    },
    "3xl": {
      row: SafeGapRow3xl,
      column: SafeGapCol3xl,
    },
    "4xl": {
      row: SafeGapRow4xl,
      column: SafeGapCol4xl,
    },
  };

  return (
    <ContextGrid.Provider
      value={{
        gap: gapConfig,
        breakpoints: ContextGridBreakpointsDefaults,
        columns: isUndef(columns) ? ContextGridColumnsDefaults : columns,
      }}
    >
      {children}
    </ContextGrid.Provider>
  );
};

function getCssGap(
  gap: IGridGap | CSSGap,
  initial: CSSGap,
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl",
  key: "row" | "column",
): CSSGap {
  // If gap is a CSSGap, return it
  if (isCSSGap(gap)) {
    return gap;
  }

  // If gap[size] doesn't exist, return the initial value
  if (!gap[size]) {
    return initial;
  }

  // If gap[size] is a CSSGap, return it
  if (isCSSGap(gap[size])) {
    return gap[size] as CSSGap;
  }

  // If gap[size] is an object with the key property, return that property
  if (typeof gap[size] === "object" && gap[size] !== null && key in gap[size]) {
    const value = gap[size][key];
    if (value !== undefined && value !== null) {
      return value;
    }
  }

  // If we couldn't find a valid value, return the initial value
  return initial;
}
