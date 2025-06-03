import { useContext } from "react";
import { ContextGrid, IContextGridType } from "./../context.grid";

export const useGrid = (): IContextGridType => {
  const context = useContext(ContextGrid);
  if (context === undefined) {
    throw new Error("useGrid must be used within a ContextGrid item");
  }

  return context;
};
