import React from "react";
import { IGridItem } from "./../grid.types";
import { ContextProviderGridItem } from "./../context.grid.item";
import { GridItemContent } from "./../components/grid.item.content";

export const Item = (props: IGridItem) => {
  const { config, children } = props;
  return (
    <ContextProviderGridItem span={config ? config.span : undefined}>
      <GridItemContent>{children}</GridItemContent>
    </ContextProviderGridItem>
  );
};
