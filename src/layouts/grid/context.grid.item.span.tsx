import React, {createContext, PropsWithChildren} from "react";
import {ContextGridColsDefault} from "@/layouts/grid/context.grid.cols";

export interface IContextGridItemSpan {
    span: number;
    span_xs: number;
    span_sm: number;
    span_md: number;
    span_lg: number;
    span_xl: number;
    span_xxl: number;
    span_3xl: number;
    span_4xl: number;
}

export interface IContextGridItemSpanPartial {
    span?: number;
    span_xs?: number;
    span_sm?: number;
    span_md?: number;
    span_lg?: number;
    span_xl?: number;
    span_xxl?: number;
    span_3xl?: number;
    span_4xl?: number;
}

export interface IContextGridItemSpanType extends IContextGridItemSpanPartial, PropsWithChildren {}

export const ContextGridItemSpanDefault = {
    span: ContextGridColsDefault.cols,
    span_xs: ContextGridColsDefault.cols,
    span_sm: ContextGridColsDefault.cols,
    span_md: ContextGridColsDefault.cols,
    span_lg: ContextGridColsDefault.cols,
    span_xl: ContextGridColsDefault.cols,
    span_xxl: ContextGridColsDefault.cols,
    span_3xl: ContextGridColsDefault.cols,
    span_4xl: ContextGridColsDefault.cols,
};

export const ContextGridItemSpan = createContext<IContextGridItemSpan>(ContextGridItemSpanDefault);

export const ContextProviderGridItemSpan = (props: IContextGridItemSpanType) => {
    const { span, span_xs, span_sm, span_md, span_lg, span_xl, span_xxl, span_3xl, span_4xl, children } = props;

    return (
        <ContextGridItemSpan.Provider
            value={{
                span: span ?? ContextGridItemSpanDefault.span,
                span_xs: span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_sm: span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_md: span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_lg: span_lg ?? span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_xl: span_xl ?? span_lg ?? span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_xxl: span_xxl ?? span_xl ?? span_lg ?? span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_3xl: span_3xl ?? span_xxl ?? span_xl ?? span_lg ?? span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
                span_4xl: span_4xl ?? span_3xl ?? span_xxl ?? span_xl ?? span_lg ?? span_md ?? span_sm ?? span_xs ?? span ?? ContextGridItemSpanDefault.span,
            }}
        >
            {children}
        </ContextGridItemSpan.Provider>
    );
};
