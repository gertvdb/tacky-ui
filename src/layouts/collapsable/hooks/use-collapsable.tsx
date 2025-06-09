import { useContext } from "react";
import {ContextCollapsable, IContextCollapsable} from "@/layouts/collapsable/context.collapsable";

export const useCollapsable = (): IContextCollapsable => {
    const context = useContext(ContextCollapsable);
    if (context === undefined) {
        throw new Error("useCollapsable must be used within a ContextCollapsable item");
    }

    return context;
};
