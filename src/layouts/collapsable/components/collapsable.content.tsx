import React, {PropsWithChildren} from "react";
import {StyledCollapsable} from "@/layouts/collapsable/collapsable.style";

export const CollapsableContent = (props: PropsWithChildren) => {
    const {children} = props;

    return (
        <StyledCollapsable>
            {children}
        </StyledCollapsable>
    );
}