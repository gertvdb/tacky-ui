import { useContext } from "react";
import {ContextPortalId, IContextPortalId} from "@/layouts/portal/context.portal.id";

export const usePortalId = (): IContextPortalId => {
    const context = useContext(ContextPortalId);
    if (context === undefined) {
        throw new Error("usePortalId must be used within a ContextPortalId item");
    }

    return context;
};
