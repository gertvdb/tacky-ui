import { useContext } from "react";
import {
    ContextCollapsableVisibility,
    IContextCollapsableVisibility
} from "@/layouts/collapsable/context.collapsable.visibility";

export const useCollapsableVisibility = (): IContextCollapsableVisibility => {
    const context = useContext(ContextCollapsableVisibility);
    if (context === undefined) {
        throw new Error("useCollapsableVisibility must be used within a ContextCollapsableVisibility item");
    }

    return context;
};
