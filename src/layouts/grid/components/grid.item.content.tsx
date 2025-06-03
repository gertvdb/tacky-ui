import React, { PropsWithChildren } from "react";
import { StyledGridItem } from "./../grid.style";
import { useGridItem } from "./../hooks/use-grid-item";
import { useGrid } from "./../hooks/use-grid";

export const GridItemContent = (props: PropsWithChildren) => {
  const { children } = props;

  const GridContext = useGrid();
  const GridItemContext = useGridItem();

  return (
    <StyledGridItem
      className={"grid_item"}
      $spans={GridItemContext.span}
      $breakpoints={GridContext.breakpoints}
    >
      {children}
    </StyledGridItem>
  );
};
