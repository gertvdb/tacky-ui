import React, { Children, PropsWithChildren } from "react";
import { StyledGrid, StyledGridContainer } from "./../grid.style";
import {useGridGap} from "@/layouts/grid/hooks/use-grid-gap";
import {useGridBreak} from "@/layouts/grid/hooks/use-grid-break";
import {useGridCols} from "@/layouts/grid/hooks/use-grid-cols";

export const GridContent = (props: PropsWithChildren) => {
  const { children } = props;
  const GridGapContext = useGridGap();
  const GridBreakContext = useGridBreak();
  const GridColsContext = useGridCols();

  const mappedChildren = Children.map(
    children,
    (child: React.ReactNode, index: number) => (
      <React.Fragment key={index}>{child}</React.Fragment>
    ),
  );

  return (
    <StyledGridContainer>
      <StyledGrid
        $breaks={GridBreakContext}
        $gaps={GridGapContext}
        $cols={GridColsContext}
        className={"grid"}
      >
        {mappedChildren}
      </StyledGrid>
    </StyledGridContainer>
  );
};
