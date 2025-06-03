import React, { Children, PropsWithChildren } from "react";
import { StyledGrid, StyledGridContainer } from "./../grid.style";
import { useGrid } from "./../hooks/use-grid";

export const GridContent = (props: PropsWithChildren) => {
  const { children } = props;
  const GridContext = useGrid();

  const mappedChildren = Children.map(
    children,
    (child: React.ReactNode, index: number) => (
      <React.Fragment key={index}>{child}</React.Fragment>
    ),
  );

  return (
    <StyledGridContainer>
      <StyledGrid
        $breakpoints={GridContext.breakpoints}
        $gaps={GridContext.gap}
        $columns={GridContext.columns}
        className={"grid"}
      >
        {mappedChildren}
      </StyledGrid>
    </StyledGridContainer>
  );
};
