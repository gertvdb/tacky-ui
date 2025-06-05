import { useContext } from "react";
import {ContextGridBreak, IContextGridBreak} from "@/layouts/grid/context.grid.break";

export const useGridBreak = (): IContextGridBreak => {
  const context = useContext(ContextGridBreak);
  if (context === undefined) {
    throw new Error("useGridBreak must be used within a ContextGridBreak item");
  }

  return context;
};
