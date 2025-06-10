import { useContext } from "react";
import {ContextPortalManager, IContextPortalManager} from "@/layouts/portal/context.portal.manager";

export const usePortalManager = (): IContextPortalManager => {
    const context = useContext(ContextPortalManager);
    if (context === undefined) {
        throw new Error("usePortalManager must be used within a ContextPortalManager item");
    }

    return context;
};
