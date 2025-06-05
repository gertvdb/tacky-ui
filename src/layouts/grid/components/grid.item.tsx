import React from "react";
import { IGridItem } from "@/layouts/grid";
import { GridItemContent } from "./../components/grid.item.content";
import {ContextProviderGridItemSpan} from "@/layouts/grid/context.grid.item.span";

export const Item = (props: IGridItem) => {
  const {
    span, span_xs, span_sm, span_md, span_lg, span_xl, span_xxl, span_3xl, span_4xl,
    children
  } = props;

  return (
    <ContextProviderGridItemSpan
        span={span}
        span_xs={span_xs}
        span_sm={span_sm}
        span_md={span_md}
        span_lg={span_lg}
        span_xl={span_xl}
        span_xxl={span_xxl}
        span_3xl={span_3xl}
        span_4xl={span_4xl}
    >
        <GridItemContent>{children}</GridItemContent>
    </ContextProviderGridItemSpan>
  );

};
