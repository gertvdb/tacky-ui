import { useContext } from "react";
import {ContextDrawerId, IContextDrawerId} from "@/layouts/drawer/context.drawer.id";

export const useDrawerId = (): IContextDrawerId => {
    const context = useContext(ContextDrawerId);
    if (context === undefined) {
        throw new Error("useDrawerId must be used within a ContextDrawerId item");
    }

    return context;
};
