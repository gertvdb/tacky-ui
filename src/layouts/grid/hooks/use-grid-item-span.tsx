import { useContext } from "react";
import {ContextGridItemSpan, IContextGridItemSpan} from "@/layouts/grid/context.grid.item.span";

export const useGridItemSpan = (): IContextGridItemSpan => {
  const context = useContext(ContextGridItemSpan);
  if (context === undefined) {
    throw new Error("useGridItemSpan must be used within a ContextGridItemSpan item");
  }

  return context;
};
