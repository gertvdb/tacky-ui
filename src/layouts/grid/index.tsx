import { IGrid } from "./grid.types";
import React from "react";
import { Item } from "./components/grid.item";
import { ContextProviderGrid } from "./context.grid";
import {GridContent} from "./components/grid.content";

export const Grid = (props: IGrid) => {
  const { config, children } = props;

  return (
      <ContextProviderGrid
          gap={config ? config.gap : undefined}
          breakpoints={config ? config.breakpoints : undefined}
          columns={config ? config.columns : undefined}
      >
        <GridContent>{children}</GridContent>
      </ContextProviderGrid>
  );
};

Grid.Item = Item;

export type { IGrid, IGridItem } from "./grid.types";
