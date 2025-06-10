import {IPortal} from "@/layouts/portal/portal.types";
import React from "react";
import {ContextProviderPortalId} from "@/layouts/portal/context.portal.id";
import {PortalContent} from "@/layouts/portal/components/portal.content";

export const Portal = (props: IPortal) => {
    const {children, id} = props;

    return (
        <ContextProviderPortalId
            id={id}
        >
            <PortalContent>
                {children}
            </PortalContent>
        </ContextProviderPortalId>

    )
}

export type {IPortal} from "@/layouts/portal/portal.types";
