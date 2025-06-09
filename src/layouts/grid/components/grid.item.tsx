import React from "react";
import { IGridItem } from "@/layouts/grid";
import { GridItemContent } from "./../components/grid.item.content";
import {ContextProviderGridItemSpan} from "@/layouts/grid/context.grid.item.span";

export const Item = (props: IGridItem) => {
  const {
    span, spanXs, spanSm, spanMd, spanLg, spanXl, spanXxl, span3xl, span4xl,
    children
  } = props;

  return (
    <ContextProviderGridItemSpan
        span={span}
        spanXs={spanXs}
        spanSm={spanSm}
        spanMd={spanMd}
        spanLg={spanLg}
        spanXl={spanXl}
        spanXxl={spanXxl}
        span3xl={span3xl}
        span4xl={span4xl}
    >
        <GridItemContent>{children}</GridItemContent>
    </ContextProviderGridItemSpan>
  );

};
