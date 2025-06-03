import React, { createContext } from "react";
import { IGridItemConfigPartial, isNumber } from "./grid.types";
import { useGrid } from "./hooks/use-grid";
import { ContextGridColumnsDefaults } from "./context.grid";

export interface IContextGridItemSpan {
  initial: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  "3xl": string;
  "4xl": string;
}

export interface IContextGridItemType {
  span: IContextGridItemSpan;
}

export const ContextGridItem = createContext<IContextGridItemType>({
  span: {
    initial: String(ContextGridColumnsDefaults),
    xs: String(ContextGridColumnsDefaults),
    sm: String(ContextGridColumnsDefaults),
    md: String(ContextGridColumnsDefaults),
    lg: String(ContextGridColumnsDefaults),
    xl: String(ContextGridColumnsDefaults),
    xxl: String(ContextGridColumnsDefaults),
    "3xl": String(ContextGridColumnsDefaults),
    "4xl": String(ContextGridColumnsDefaults),
  },
});

export const ContextProviderGridItem = (props: IGridItemConfigPartial) => {
  const { children, span } = props;
  const GridContext = useGrid();

  const CssSpan = span ?? {
    initial: GridContext.columns,
    xs: GridContext.columns,
    sm: GridContext.columns,
    md: GridContext.columns,
    lg: GridContext.columns,
    xl: GridContext.columns,
    xxl: GridContext.columns,
    "3xl": GridContext.columns,
    "4xl": GridContext.columns,
  };

  const SafeSpanInitial = isNumber(CssSpan) ? CssSpan : CssSpan.initial;
  const SafeSpanXs = isNumber(CssSpan)
    ? CssSpan
    : (CssSpan.xs ?? SafeSpanInitial);
  const SafeSpanSm = isNumber(CssSpan) ? CssSpan : (CssSpan.sm ?? SafeSpanXs);
  const SafeSpanMd = isNumber(CssSpan) ? CssSpan : (CssSpan.md ?? SafeSpanSm);
  const SafeSpanLg = isNumber(CssSpan) ? CssSpan : (CssSpan.lg ?? SafeSpanMd);
  const SafeSpanXl = isNumber(CssSpan) ? CssSpan : (CssSpan.xl ?? SafeSpanLg);
  const SafeSpanXxl = isNumber(CssSpan) ? CssSpan : (CssSpan.xxl ?? SafeSpanXl);
  const SafeSpan3xl = isNumber(CssSpan)
    ? CssSpan
    : (CssSpan["3xl"] ?? SafeSpanXxl);
  const SafeSpan4xl = isNumber(CssSpan)
    ? CssSpan
    : (CssSpan["4xl"] ?? SafeSpan3xl);

  if (SafeSpanInitial > GridContext.columns) {
    throw new Error(
      "span 'initial' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanXs > GridContext.columns) {
    throw new Error(
      "span 'xs' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanSm > GridContext.columns) {
    throw new Error(
      "span 'sm' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanMd > GridContext.columns) {
    throw new Error(
      "span 'md' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanLg > GridContext.columns) {
    throw new Error(
      "span 'lg' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanXl > GridContext.columns) {
    throw new Error(
      "span 'xl' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpanXxl > GridContext.columns) {
    throw new Error(
      "span 'xxl' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpan3xl > GridContext.columns) {
    throw new Error(
      "span '3xl' for Grid.Item can not be langer than defined columns",
    );
  }

  if (SafeSpan4xl > GridContext.columns) {
    throw new Error(
      "span '4xl' for Grid.Item can not be langer than defined columns",
    );
  }

  return (
    <ContextGridItem.Provider
      value={{
        span: {
          initial: String(SafeSpanInitial),
          xs: String(SafeSpanXs),
          sm: String(SafeSpanSm),
          md: String(SafeSpanMd),
          lg: String(SafeSpanLg),
          xl: String(SafeSpanXl),
          xxl: String(SafeSpanXxl),
          "3xl": String(SafeSpan3xl),
          "4xl": String(SafeSpan4xl),
        },
      }}
    >
      {children}
    </ContextGridItem.Provider>
  );
};
