import styled from "styled-components";
import {IContextGridGap} from "@/layouts/grid/context.grid.gap";
import {IContextGridBreak} from "@/layouts/grid/context.grid.break";
import {IContextGridCols} from "@/layouts/grid/context.grid.cols";
import {IContextGridItemSpan} from "@/layouts/grid/context.grid.item.span";

export const StyledGridContainer = styled.div`
  container-type: inline-size;
  container-name: grid;

  // This should be added to every layout component
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const StyledGrid = styled.div<{
  $gaps: IContextGridGap;
  $breaks: IContextGridBreak;
  $cols: IContextGridCols;
}>`
  display: grid;
  position: relative;
  
  // This should be added to every layout component
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  // Needed to make sure padding does not cause overflow.
  * {
    box-sizing: border-box;
  }

  grid-template-columns: repeat(${(props) => props.$cols.cols}, minmax(0, 1fr));
  gap: ${(props) => props.$gaps.gap};

  @container grid (min-width: ${(props) => props.$breaks.breakXs}) {
    gap: ${(props) => props.$gaps.gapXs};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakSm}) {
    gap: ${(props) => props.$gaps.gapSm};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakMd}) {
    gap: ${(props) => props.$gaps.gapMd};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakLg}) {
    gap: ${(props) => props.$gaps.gapLg};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakXl}) {
    gap: ${(props) => props.$gaps.gapXl};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakXxl}) {
    gap: ${(props) => props.$gaps.gapXxl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break3xl}) {
    gap: ${(props) => props.$gaps.gap3xl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break4xl}) {
    gap: ${(props) => props.$gaps.gap4xl};
  }
`;

export const StyledGridItem = styled.div<{
  $spans: IContextGridItemSpan;
  $breaks: IContextGridBreak;
}>`
  display: flex; // use flex sincs it is the most versatile and popular default
  position: relative;
  
  min-width: 0;  
  min-height: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  grid-column: span ${(props) => props.$spans.span} / span
    ${(props) => props.$spans.span};

  @container grid (min-width: ${(props) => props.$breaks.breakXs}) {
    grid-column: span ${(props) => props.$spans.spanXs} / span
      ${(props) => props.$spans.spanXs};
  }

  @container grid (min-width: ${(props) => props.$breaks.breakSm}) {
    grid-column: span ${(props) => props.$spans.spanSm} / span
      ${(props) => props.$spans.spanSm};
  }
  @container grid (min-width: ${(props) => props.$breaks.breakMd}) {
    grid-column: span ${(props) => props.$spans.spanMd} / span
      ${(props) => props.$spans.spanMd};
  }
  @container grid (min-width: ${(props) => props.$breaks.breakLg}) {
    grid-column: span ${(props) => props.$spans.spanLg} / span
      ${(props) => props.$spans.spanLg};
  }
  @container grid (min-width: ${(props) => props.$breaks.breakXl}) {
    grid-column: span ${(props) => props.$spans.spanXl} / span
      ${(props) => props.$spans.spanXl};
  }
  @container grid (min-width: ${(props) => props.$breaks.breakXxl}) {
    grid-column: span ${(props) => props.$spans.spanXxl} / span
      ${(props) => props.$spans.spanXxl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break3xl}) {
    grid-column: span ${(props) => props.$spans.span3xl} / span
      ${(props) => props.$spans.span3xl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break4xl}) {
    grid-column: span ${(props) => props.$spans.span4xl} / span
      ${(props) => props.$spans.span4xl};
  }
`;
