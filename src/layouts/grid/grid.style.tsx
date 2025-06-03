import styled from "styled-components";
import {
  IContextGridBreakPoints,
  IContextGridGaps,
} from "./context.grid";
import { IContextGridItemSpan } from "./context.grid.item";

export const StyledGridContainer = styled.div`
  container-type: inline-size;
  container-name: grid;
  width: 100%;
`;

export const StyledGrid = styled.div<{
  $gaps: IContextGridGaps;
  $breakpoints: IContextGridBreakPoints;
  $columns: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, minmax(0, 1fr));
  align-items: flex-start;
  row-gap: ${(props) => props.$gaps.initial.row};
  column-gap: ${(props) => props.$gaps.initial.column};

  @container grid (min-width: ${(props) => props.$breakpoints.xs}) {
    row-gap: ${(props) => props.$gaps.xs.row};
    column-gap: ${(props) => props.$gaps.xs.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.sm}) {
    row-gap: ${(props) => props.$gaps.sm.row};
    column-gap: ${(props) => props.$gaps.sm.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.md}) {
    row-gap: ${(props) => props.$gaps.md.row};
    column-gap: ${(props) => props.$gaps.md.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.lg}) {
    row-gap: ${(props) => props.$gaps.lg.row};
    column-gap: ${(props) => props.$gaps.lg.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.xl}) {
    row-gap: ${(props) => props.$gaps.xl.row};
    column-gap: ${(props) => props.$gaps.xl.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.xxl}) {
    row-gap: ${(props) => props.$gaps.xxl.row};
    column-gap: ${(props) => props.$gaps.xxl.column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["3xl"]}) {
    row-gap: ${(props) => props.$gaps["3xl"].row};
    column-gap: ${(props) => props.$gaps["3xl"].column};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["4xl"]}) {
    row-gap: ${(props) => props.$gaps["4xl"].row};
    column-gap: ${(props) => props.$gaps["4xl"].column};
  }
`;

export const StyledGridItem = styled.div<{
  $spans: IContextGridItemSpan;
  $breakpoints: IContextGridBreakPoints;
}>`
  display: block;
  min-width: 0;
  height: 100%;

  grid-column: span ${(props) => props.$spans.initial} / span
    ${(props) => props.$spans.initial};

  @container grid (min-width: ${(props) => props.$breakpoints.xs}) {
    grid-column: span ${(props) => props.$spans.xs} / span
      ${(props) => props.$spans.xs};
  }

  @container grid (min-width: ${(props) => props.$breakpoints.sm}) {
    grid-column: span ${(props) => props.$spans.sm} / span
      ${(props) => props.$spans.sm};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.md}) {
    grid-column: span ${(props) => props.$spans.md} / span
      ${(props) => props.$spans.md};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.lg}) {
    grid-column: span ${(props) => props.$spans.lg} / span
      ${(props) => props.$spans.lg};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.xl}) {
    grid-column: span ${(props) => props.$spans.xl} / span
      ${(props) => props.$spans.xl};
  }
  @container grid (min-width: ${(props) => props.$breakpoints.xxl}) {
    grid-column: span ${(props) => props.$spans.xxl} / span
      ${(props) => props.$spans.xxl};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["3xl"]}) {
    grid-column: span ${(props) => props.$spans["3xl"]} / span
      ${(props) => props.$spans["3xl"]};
  }

  @container grid (min-width: ${(props) => props.$breakpoints["4xl"]}) {
    grid-column: span ${(props) => props.$spans["4xl"]} / span
      ${(props) => props.$spans["4xl"]};
  }
`;
