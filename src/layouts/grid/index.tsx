import { IGrid } from "./grid.types";
import React from "react";
import { Item } from "./components/grid.item";
import { GridContent } from "./components/grid.content";
import { ContextProviderGridGap } from "@/layouts/grid/context.grid.gap";
import {ContextProviderGridBreak} from "@/layouts/grid/context.grid.break";
import {ContextProviderGridCols} from "@/layouts/grid/context.grid.cols";

export const Grid = (props: IGrid) => {
  const {
    gap, gap_xs, gap_sm, gap_md, gap_lg, gap_xl, gap_xxl, gap_3xl, gap_4xl,
    break_xs, break_sm, break_md, break_lg, break_xl, break_xxl, break_3xl, break_4xl,
    cols,
    children } = props;

  return (
      <ContextProviderGridCols
        cols={cols}
      >
        <ContextProviderGridGap
            gap={gap}
            gap_xs={gap_xs}
            gap_sm={gap_sm}
            gap_md={gap_md}
            gap_lg={gap_lg}
            gap_xl={gap_xl}
            gap_xxl={gap_xxl}
            gap_3xl={gap_3xl}
            gap_4xl={gap_4xl}
        >
          <ContextProviderGridBreak
              break_xs={break_xs}
              break_sm={break_sm}
              break_md={break_md}
              break_lg={break_lg}
              break_xl={break_xl}
              break_xxl={break_xxl}
              break_3xl={break_3xl}
              break_4xl={break_4xl}
          >
            <GridContent>{children}</GridContent>
          </ContextProviderGridBreak>
        </ContextProviderGridGap>
      </ContextProviderGridCols>

  );
};

Grid.Item = Item;

export type { IGrid, IGridItem } from "./grid.types";
