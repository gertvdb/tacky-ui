import styled from "styled-components";
import {IContextGridGap} from "@/layouts/grid/context.grid.gap";
import {IContextGridBreak} from "@/layouts/grid/context.grid.break";
import {IContextGridCols} from "@/layouts/grid/context.grid.cols";
import {IContextGridItemSpan} from "@/layouts/grid/context.grid.item.span";

export const StyledGridContainer = styled.div`
  container-type: inline-size;
  container-name: grid;

  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
`;

export const StyledGrid = styled.div<{
  $gaps: IContextGridGap;
  $breaks: IContextGridBreak;
  $cols: IContextGridCols;
}>`
  display: grid;
  position: relative;

  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  
  grid-template-columns: repeat(${(props) => props.$cols.cols}, minmax(0, 1fr));
  gap: ${(props) => props.$gaps.gap};

  @container grid (min-width: ${(props) => props.$breaks.break_xs}) {
    gap: ${(props) => props.$gaps.gap_xs};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_sm}) {
    gap: ${(props) => props.$gaps.gap_sm};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_md}) {
    gap: ${(props) => props.$gaps.gap_md};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_lg}) {
    gap: ${(props) => props.$gaps.gap_lg};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_xl}) {
    gap: ${(props) => props.$gaps.gap_xl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_xxl}) {
    gap: ${(props) => props.$gaps.gap_xxl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_3xl}) {
    gap: ${(props) => props.$gaps.gap_3xl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_4xl}) {
    gap: ${(props) => props.$gaps.gap_4xl};
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
  
  grid-column: span ${(props) => props.$spans.span} / span
    ${(props) => props.$spans.span};

  @container grid (min-width: ${(props) => props.$breaks.break_xs}) {
    grid-column: span ${(props) => props.$spans.span_xs} / span
      ${(props) => props.$spans.span_xs};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_sm}) {
    grid-column: span ${(props) => props.$spans.span_sm} / span
      ${(props) => props.$spans.span_sm};
  }
  @container grid (min-width: ${(props) => props.$breaks.break_md}) {
    grid-column: span ${(props) => props.$spans.span_md} / span
      ${(props) => props.$spans.span_md};
  }
  @container grid (min-width: ${(props) => props.$breaks.break_lg}) {
    grid-column: span ${(props) => props.$spans.span_lg} / span
      ${(props) => props.$spans.span_lg};
  }
  @container grid (min-width: ${(props) => props.$breaks.break_xl}) {
    grid-column: span ${(props) => props.$spans.span_xl} / span
      ${(props) => props.$spans.span_xl};
  }
  @container grid (min-width: ${(props) => props.$breaks.break_xxl}) {
    grid-column: span ${(props) => props.$spans.span_xxl} / span
      ${(props) => props.$spans.span_xxl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_3xl}) {
    grid-column: span ${(props) => props.$spans.span_3xl} / span
      ${(props) => props.$spans.span_3xl};
  }

  @container grid (min-width: ${(props) => props.$breaks.break_4xl}) {
    grid-column: span ${(props) => props.$spans.span_4xl} / span
      ${(props) => props.$spans.span_4xl};
  }
`;
