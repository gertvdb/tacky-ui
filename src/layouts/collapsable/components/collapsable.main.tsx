import React, {PropsWithChildren} from "react";
import {StyledMain} from "@/layouts/collapsable/collapsable.style";

export const CollapsableMain = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <StyledMain>
            {children}
        </StyledMain>
    );
};
