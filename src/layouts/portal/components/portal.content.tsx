import {IPortalContent} from "@/layouts/portal/portal.types";
import React from "react";
import {StyledPortal} from "@/layouts/portal/portal.style";
import {usePortalId} from "@/layouts/portal/hooks/use-portal-id";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";

export const PortalContent = (props: IPortalContent) => {
    const {children} = props;

    const ContextPortalId = usePortalId();
    const ContextPortalManager = usePortalManager();
    const isOpen = ContextPortalManager.isOpen(ContextPortalId.id);

    return (
        <StyledPortal
            $zIndex={2000}
            $pointerEvents={"auto"}
            $display={isOpen ? 'flex' : 'none'}
        >
            {children}
        </StyledPortal>
    )

}