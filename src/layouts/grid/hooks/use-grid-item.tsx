import { useContext } from "react";
import {
  ContextGridItem,
  IContextGridItemType,
} from "./../context.grid.item";

export const useGridItem = (): IContextGridItemType => {
  const context = useContext(ContextGridItem);
  if (context === undefined) {
    throw new Error("useGridItem must be used within a ContextGridItem");
  }
  return context;
};
