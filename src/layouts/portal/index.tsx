import {IPortal} from "@/layouts/portal/portal.types";
import React from "react";
import {StyledPortal} from "@/layouts/portal/portal.style";

export const Portal = (props: IPortal) => {
    const { zIndex, children, isVisible} = props;

    return (
        <StyledPortal
            $zIndex={zIndex}
            $pointerEvents={"auto"}
            $display={isVisible ? 'flex' : 'none'}
        >
            {children}
        </StyledPortal>
    )
}

export type {IPortal} from "@/layouts/portal/portal.types";
export { ContextProviderPortalManager } from "@/layouts/portal/context.portal.manager";

export {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
