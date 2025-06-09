import { IGrid } from "./grid.types";
import React from "react";
import { Item } from "./components/grid.item";
import { GridContent } from "./components/grid.content";
import { ContextProviderGridGap } from "@/layouts/grid/context.grid.gap";
import {ContextProviderGridBreak} from "@/layouts/grid/context.grid.break";
import {ContextProviderGridCols} from "@/layouts/grid/context.grid.cols";

export const Grid = (props: IGrid) => {
  const {
    gap, gapXs, gapSm, gapMd, gapLg, gapXl, gapXxl, gap3xl, gap4xl,
    breakXs, breakSm, breakMd, breakLg, breakXl, breakXxl, break3xl, break4xl,
    cols,
    children
  } = props;

  return (
      <ContextProviderGridCols
        cols={cols}
      >
        <ContextProviderGridGap
            gap={gap}
            gapXs={gapXs}
            gapSm={gapSm}
            gapMd={gapMd}
            gapLg={gapLg}
            gapXl={gapXl}
            gapXxl={gapXxl}
            gap3xl={gap3xl}
            gap4xl={gap4xl}
        >
          <ContextProviderGridBreak
              breakXs={breakXs}
              breakSm={breakSm}
              breakMd={breakMd}
              breakLg={breakLg}
              breakXl={breakXl}
              breakXxl={breakXxl}
              break3xl={break3xl}
              break4xl={break4xl}
          >
            <GridContent>{children}</GridContent>
          </ContextProviderGridBreak>
        </ContextProviderGridGap>
      </ContextProviderGridCols>

  );
};

Grid.Item = Item;

export type { IGrid, IGridItem } from "./grid.types";
