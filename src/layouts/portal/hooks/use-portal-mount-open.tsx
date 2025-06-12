import {useEffect} from "react";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";

export const usePortalMountOpen = (ids : string[]): void => {
    const ContextPortalManager = usePortalManager();

    useEffect(() => {
        ids.forEach((id) => {
            ContextPortalManager.openPortal(id);
        });
    }, []);
};
