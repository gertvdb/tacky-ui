import { useContext } from "react";
import {ContextGridGap, IContextGridGap} from "@/layouts/grid/context.grid.gap";

export const useGridGap = (): IContextGridGap => {
  const context = useContext(ContextGridGap);
  if (context === undefined) {
    throw new Error("useGridGap must be used within a ContextGridGap item");
  }

  return context;
};
