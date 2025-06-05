import React, { PropsWithChildren } from "react";
import { StyledGridItem } from "./../grid.style";
import { useGridBreak } from "@/layouts/grid/hooks/use-grid-break";
import {useGridItemSpan} from "@/layouts/grid/hooks/use-grid-item-span";

export const GridItemContent = (props: PropsWithChildren) => {
  const { children } = props;

  const GridBreakContext = useGridBreak();
  const GridItemSpanContext = useGridItemSpan();

  return (
    <StyledGridItem
      className={"grid-item"}
      $spans={GridItemSpanContext}
      $breaks={GridBreakContext}
    >
      {children}
    </StyledGridItem>
  );
};
