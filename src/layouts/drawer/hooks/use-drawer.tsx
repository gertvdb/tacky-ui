import { useContext } from "react";
import {ContextDrawer, IContextDrawer} from "@/layouts/drawer/context.drawer";

export const useDrawer = (): IContextDrawer => {
    const context = useContext(ContextDrawer);
    if (context === undefined) {
        throw new Error("useDrawer must be used within a ContextDrawer item");
    }

    return context;
};
