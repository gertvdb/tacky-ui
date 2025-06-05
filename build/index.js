import React3, { createContext, Children, useContext } from 'react';
import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/types/css-gap.ts
function isCSSGap(value) {
  if (typeof value !== "string") return false;
  if (value === "normal" || value === "inherit" || value === "initial" || value === "unset") {
    return true;
  }
  if (value === "0") return true;
  const cssUnitRegex = /^[0-9]+(\.[0-9]+)?(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;
  return cssUnitRegex.test(value);
}
__name(isCSSGap, "isCSSGap");

// src/layouts/grid/grid.types.ts
var isNumber = /* @__PURE__ */ __name((value) => typeof value === "number" && !isNaN(value) && isFinite(value), "isNumber");
var isUndef = /* @__PURE__ */ __name((value) => typeof value === "undefined", "isUndef");
var ContextGridColumnsDefaults = 12;
var ContextGridBreakpointsDefaults = {
  xs: "480px",
  // For very small screens like older phones (e.g., iPhone SE or similar):
  sm: "640px",
  // Mobile (small)
  md: "768px",
  // Tablets (medium)
  lg: "1024px",
  // Small laptops
  xl: "1280px",
  // Desktops
  xxl: "1536px",
  // Large desktops / 2K+
  "3xl": "1920px",
  // For ultra-wide monitors (e.g., 4K+ displays or dashboards):
  "4xl": "2560px"
  // For ultra-wide monitors (e.g., 4K+ displays or dashboards):
};
var ContextGridGapsDefaults = {
  initial: { row: "0", column: "0" },
  xs: { row: "0", column: "0" },
  sm: { row: "0", column: "0" },
  md: { row: "0", column: "0" },
  lg: { row: "0", column: "0" },
  xl: { row: "0", column: "0" },
  xxl: { row: "0", column: "0" },
  "3xl": { row: "0", column: "0" },
  "4xl": { row: "0", column: "0" }
};
var ContextGrid = createContext({
  breakpoints: ContextGridBreakpointsDefaults,
  gap: ContextGridGapsDefaults,
  columns: ContextGridColumnsDefaults
});
var ContextProviderGrid = /* @__PURE__ */ __name((props) => {
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
    "4xl": "0"
  };
  const SafeGapRowInitial = isCSSGap(CssGap) ? CssGap : isCSSGap(CssGap.initial) ? CssGap.initial : CssGap.initial.row ?? "0";
  const SafeGapColInitial = isCSSGap(CssGap) ? CssGap : isCSSGap(CssGap.initial) ? CssGap.initial : CssGap.initial.column ?? "0";
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
      column: SafeGapColInitial
    },
    xs: {
      row: SafeGapRowXs,
      column: SafeGapColXs
    },
    sm: {
      row: SafeGapRowSm,
      column: SafeGapColSm
    },
    md: {
      row: SafeGapRowMd,
      column: SafeGapColMd
    },
    lg: {
      row: SafeGapRowLg,
      column: SafeGapColLg
    },
    xl: {
      row: SafeGapRowXl,
      column: SafeGapColXl
    },
    xxl: {
      row: SafeGapRowXxl,
      column: SafeGapColXxl
    },
    "3xl": {
      row: SafeGapRow3xl,
      column: SafeGapCol3xl
    },
    "4xl": {
      row: SafeGapRow4xl,
      column: SafeGapCol4xl
    }
  };
  return /* @__PURE__ */ jsx(
    ContextGrid.Provider,
    {
      value: {
        gap: gapConfig,
        breakpoints: ContextGridBreakpointsDefaults,
        columns: isUndef(columns) ? ContextGridColumnsDefaults : columns
      },
      children
    }
  );
}, "ContextProviderGrid");
function getCssGap(gap, initial, size, key) {
  if (isCSSGap(gap)) {
    return gap;
  }
  if (!gap[size]) {
    return initial;
  }
  if (isCSSGap(gap[size])) {
    return gap[size];
  }
  if (typeof gap[size] === "object" && gap[size] !== null && key in gap[size]) {
    const value = gap[size][key];
    if (value !== void 0 && value !== null) {
      return value;
    }
  }
  return initial;
}
__name(getCssGap, "getCssGap");

// src/layouts/grid/hooks/use-grid.tsx
var useGrid = /* @__PURE__ */ __name(() => {
  const context = useContext(ContextGrid);
  if (context === void 0) {
    throw new Error("useGrid must be used within a ContextGrid item");
  }
  return context;
}, "useGrid");
var ContextGridItem = createContext({
  span: {
    initial: String(ContextGridColumnsDefaults),
    xs: String(ContextGridColumnsDefaults),
    sm: String(ContextGridColumnsDefaults),
    md: String(ContextGridColumnsDefaults),
    lg: String(ContextGridColumnsDefaults),
    xl: String(ContextGridColumnsDefaults),
    xxl: String(ContextGridColumnsDefaults),
    "3xl": String(ContextGridColumnsDefaults),
    "4xl": String(ContextGridColumnsDefaults)
  }
});
var ContextProviderGridItem = /* @__PURE__ */ __name((props) => {
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
    "4xl": GridContext.columns
  };
  const SafeSpanInitial = isNumber(CssSpan) ? CssSpan : CssSpan.initial;
  const SafeSpanXs = isNumber(CssSpan) ? CssSpan : CssSpan.xs ?? SafeSpanInitial;
  const SafeSpanSm = isNumber(CssSpan) ? CssSpan : CssSpan.sm ?? SafeSpanXs;
  const SafeSpanMd = isNumber(CssSpan) ? CssSpan : CssSpan.md ?? SafeSpanSm;
  const SafeSpanLg = isNumber(CssSpan) ? CssSpan : CssSpan.lg ?? SafeSpanMd;
  const SafeSpanXl = isNumber(CssSpan) ? CssSpan : CssSpan.xl ?? SafeSpanLg;
  const SafeSpanXxl = isNumber(CssSpan) ? CssSpan : CssSpan.xxl ?? SafeSpanXl;
  const SafeSpan3xl = isNumber(CssSpan) ? CssSpan : CssSpan["3xl"] ?? SafeSpanXxl;
  const SafeSpan4xl = isNumber(CssSpan) ? CssSpan : CssSpan["4xl"] ?? SafeSpan3xl;
  if (SafeSpanInitial > GridContext.columns) {
    throw new Error(
      "span 'initial' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanXs > GridContext.columns) {
    throw new Error(
      "span 'xs' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanSm > GridContext.columns) {
    throw new Error(
      "span 'sm' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanMd > GridContext.columns) {
    throw new Error(
      "span 'md' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanLg > GridContext.columns) {
    throw new Error(
      "span 'lg' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanXl > GridContext.columns) {
    throw new Error(
      "span 'xl' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpanXxl > GridContext.columns) {
    throw new Error(
      "span 'xxl' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpan3xl > GridContext.columns) {
    throw new Error(
      "span '3xl' for Grid.Item can not be langer than defined columns"
    );
  }
  if (SafeSpan4xl > GridContext.columns) {
    throw new Error(
      "span '4xl' for Grid.Item can not be langer than defined columns"
    );
  }
  return /* @__PURE__ */ jsx(
    ContextGridItem.Provider,
    {
      value: {
        span: {
          initial: String(SafeSpanInitial),
          xs: String(SafeSpanXs),
          sm: String(SafeSpanSm),
          md: String(SafeSpanMd),
          lg: String(SafeSpanLg),
          xl: String(SafeSpanXl),
          xxl: String(SafeSpanXxl),
          "3xl": String(SafeSpan3xl),
          "4xl": String(SafeSpan4xl)
        }
      },
      children
    }
  );
}, "ContextProviderGridItem");
var StyledGridContainer = styled.div`
  container-type: inline-size;
  container-name: grid;
  width: 100%;
`;
var StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, minmax(0, 1fr));
  row-gap: ${(props) => props.$gaps.initial.row};
  column-gap: ${(props) => props.$gaps.initial.column};

  @container grid (min-width: ${(props) => props.$breakpoints.xs}) {
    row-gap: ${(props) => props.$gaps.xs.row};
    column-gap: ${(props) => props.$gaps.xs.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.sm}) {
    row-gap: ${(props) => props.$gaps.sm.row};
    column-gap: ${(props) => props.$gaps.sm.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.md}) {
    row-gap: ${(props) => props.$gaps.md.row};
    column-gap: ${(props) => props.$gaps.md.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.lg}) {
    row-gap: ${(props) => props.$gaps.lg.row};
    column-gap: ${(props) => props.$gaps.lg.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.xl}) {
    row-gap: ${(props) => props.$gaps.xl.row};
    column-gap: ${(props) => props.$gaps.xl.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.xxl}) {
    row-gap: ${(props) => props.$gaps.xxl.row};
    column-gap: ${(props) => props.$gaps.xxl.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["3xl"]}) {
    row-gap: ${(props) => props.$gaps["3xl"].row};
    column-gap: ${(props) => props.$gaps["3xl"].column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["4xl"]}) {
    row-gap: ${(props) => props.$gaps["4xl"].row};
    column-gap: ${(props) => props.$gaps["4xl"].column};
  }
`;
var StyledGridItem = styled.div`
  display: block;
  min-width: 0;
  height: 100%;

  grid-column: span ${(props) => props.$spans.initial} / span
    ${(props) => props.$spans.initial};

  @container grid (min-width: ${(props) => props.$breakpoints.xs}) {
    grid-column: span ${(props) => props.$spans.xs} / span
      ${(props) => props.$spans.xs};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.sm}) {
    grid-column: span ${(props) => props.$spans.sm} / span
      ${(props) => props.$spans.sm};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.md}) {
    grid-column: span ${(props) => props.$spans.md} / span
      ${(props) => props.$spans.md};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.lg}) {
    grid-column: span ${(props) => props.$spans.lg} / span
      ${(props) => props.$spans.lg};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.xl}) {
    grid-column: span ${(props) => props.$spans.xl} / span
      ${(props) => props.$spans.xl};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.xxl}) {
    grid-column: span ${(props) => props.$spans.xxl} / span
      ${(props) => props.$spans.xxl};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["3xl"]}) {
    grid-column: span ${(props) => props.$spans["3xl"]} / span
      ${(props) => props.$spans["3xl"]};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["4xl"]}) {
    grid-column: span ${(props) => props.$spans["4xl"]} / span
      ${(props) => props.$spans["4xl"]};
  }
`;
var useGridItem = /* @__PURE__ */ __name(() => {
  const context = useContext(ContextGridItem);
  if (context === void 0) {
    throw new Error("useGridItem must be used within a ContextGridItem");
  }
  return context;
}, "useGridItem");
var GridItemContent = /* @__PURE__ */ __name((props) => {
  const { children } = props;
  const GridContext = useGrid();
  const GridItemContext = useGridItem();
  return /* @__PURE__ */ jsx(
    StyledGridItem,
    {
      className: "grid_item",
      $spans: GridItemContext.span,
      $breakpoints: GridContext.breakpoints,
      children
    }
  );
}, "GridItemContent");
var Item = /* @__PURE__ */ __name((props) => {
  const { config, children } = props;
  return /* @__PURE__ */ jsx(ContextProviderGridItem, { span: config ? config.span : void 0, children: /* @__PURE__ */ jsx(GridItemContent, { children }) });
}, "Item");
var GridContent = /* @__PURE__ */ __name((props) => {
  const { children } = props;
  const GridContext = useGrid();
  const mappedChildren = Children.map(
    children,
    (child, index) => /* @__PURE__ */ jsx(React3.Fragment, { children: child }, index)
  );
  return /* @__PURE__ */ jsx(StyledGridContainer, { children: /* @__PURE__ */ jsx(
    StyledGrid,
    {
      $breakpoints: GridContext.breakpoints,
      $gaps: GridContext.gap,
      $columns: GridContext.columns,
      className: "grid",
      children: mappedChildren
    }
  ) });
}, "GridContent");
var Grid = /* @__PURE__ */ __name((props) => {
  const { config, children } = props;
  return /* @__PURE__ */ jsx(
    ContextProviderGrid,
    {
      gap: config ? config.gap : void 0,
      breakpoints: config ? config.breakpoints : void 0,
      columns: config ? config.columns : void 0,
      children: /* @__PURE__ */ jsx(GridContent, { children })
    }
  );
}, "Grid");
Grid.Item = Item;

export { Grid };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map