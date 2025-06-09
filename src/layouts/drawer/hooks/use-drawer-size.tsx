import { useContext } from "react";
import {ContextDrawerSize, IContextDrawerSize} from "@/layouts/drawer/context.drawer.size";

export const useDrawerSize = (): IContextDrawerSize => {
    const context = useContext(ContextDrawerSize);
    if (context === undefined) {
        throw new Error("useDrawerSize must be used within a ContextDrawerSize item");
    }

    return context;
};
