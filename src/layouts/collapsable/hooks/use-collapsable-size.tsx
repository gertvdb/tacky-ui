import { useContext } from "react";
import {ContextCollapsableSize, IContextCollapsableSize} from "@/layouts/collapsable/context.collapsable.size";

export const useCollapsableSize = (): IContextCollapsableSize => {
    const context = useContext(ContextCollapsableSize);
    if (context === undefined) {
        throw new Error("useCollapsableSize must be used within a ContextCollapsableSize item");
    }

    return context;
};
