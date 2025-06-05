import { useContext } from "react";
import {ContextGridCols, IContextGridCols} from "@/layouts/grid/context.grid.cols";

export const useGridCols = (): IContextGridCols => {
    const context = useContext(ContextGridCols);
    if (context === undefined) {
        throw new Error("useGridCols must be used within a ContextGridCols item");
    }

    return context;
};
