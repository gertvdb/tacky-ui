import React, {createContext, PropsWithChildren} from "react";
import {ContextGridColsDefault} from "@/layouts/grid/context.grid.cols";

export interface IContextGridItemSpan {
    span: number;
    spanXs: number;
    spanSm: number;
    spanMd: number;
    spanLg: number;
    spanXl: number;
    spanXxl: number;
    span3xl: number;
    span4xl: number;
}

export interface IContextGridItemSpanPartial {
    span?: number;
    spanXs?: number;
    spanSm?: number;
    spanMd?: number;
    spanLg?: number;
    spanXl?: number;
    spanXxl?: number;
    span3xl?: number;
    span4xl?: number;
}

export interface IContextGridItemSpanType extends IContextGridItemSpanPartial, PropsWithChildren {}

export const ContextGridItemSpanDefault = {
    span: ContextGridColsDefault.cols,
    spanXs: ContextGridColsDefault.cols,
    spanSm: ContextGridColsDefault.cols,
    spanMd: ContextGridColsDefault.cols,
    spanLg: ContextGridColsDefault.cols,
    spanXl: ContextGridColsDefault.cols,
    spanXxl: ContextGridColsDefault.cols,
    span3xl: ContextGridColsDefault.cols,
    span4xl: ContextGridColsDefault.cols,
};

export const ContextGridItemSpan = createContext<IContextGridItemSpan>(ContextGridItemSpanDefault);

export const ContextProviderGridItemSpan = (props: IContextGridItemSpanType) => {
    const { span, spanXs, spanSm, spanMd, spanLg, spanXl, spanXxl, span3xl, span4xl, children } = props;

    return (
        <ContextGridItemSpan.Provider
            value={{
                span: span ?? ContextGridItemSpanDefault.span,
                spanXs: spanXs ?? span ?? ContextGridItemSpanDefault.span,
                spanSm: spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                spanMd: spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                spanLg: spanLg ?? spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                spanXl: spanXl ?? spanLg ?? spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                spanXxl: spanXxl ?? spanXl ?? spanLg ?? spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                span3xl: span3xl ?? spanXxl ?? spanXl ?? spanLg ?? spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
                span4xl: span4xl ?? span3xl ?? spanXxl ?? spanXl ?? spanLg ?? spanMd ?? spanSm ?? spanXs ?? span ?? ContextGridItemSpanDefault.span,
            }}
        >
            {children}
        </ContextGridItemSpan.Provider>
    );
};
