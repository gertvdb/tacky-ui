import { PropsWithChildren } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type CSSUnit = "px" | "em" | "rem" | "%" | "vh" | "vw" | "vmin" | "vmax" | "ch" | "ex" | "cm" | "mm" | "in" | "pt" | "pc";
type CSSLength = "0" | `${number}${CSSUnit}`;

type CSSGapKeyword = "normal" | "inherit" | "initial" | "unset";
type CSSGap = CSSLength | CSSGapKeyword;

type CSSBreakpointUnit = "px" | "em" | "rem";
type CSSBreakpoint = "0" | `${number}${CSSBreakpointUnit}`;

interface IGridGapItem {
    row: CSSGap;
    column: CSSGap;
}
interface IGridGap {
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
interface IGridBreakpoints {
    xs: CSSBreakpoint;
    sm: CSSBreakpoint;
    md: CSSBreakpoint;
    lg: CSSBreakpoint;
    xl: CSSBreakpoint;
    xxl: CSSBreakpoint;
    "3xl": CSSBreakpoint;
    "4xl": CSSBreakpoint;
}
interface IGridConfig extends PropsWithChildren {
    gap: IGridGap | CSSGap;
    breakpoints: Partial<IGridBreakpoints>;
    columns: number;
}
type IGridConfigPartial = Partial<IGridConfig>;
interface IGrid extends PropsWithChildren {
    config?: IGridConfigPartial;
}
interface IGridItemSpan {
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
interface IGridItemConfig extends PropsWithChildren {
    span: IGridItemSpan | number;
}
type IGridItemConfigPartial = Partial<IGridItemConfig>;
interface IGridItem extends PropsWithChildren {
    config?: IGridItemConfigPartial;
}

declare const Grid: {
    (props: IGrid): react_jsx_runtime.JSX.Element;
    Item: (props: IGridItem) => react_jsx_runtime.JSX.Element;
};

export { Grid, type IGrid, type IGridItem };
