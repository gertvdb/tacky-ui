import React, {PropsWithChildren} from "react";
import {StyledSwitchView} from "@/layouts/switch/switch.style";

export const SwitchView = (props: PropsWithChildren) => {
    const {children} = props;

    return (
        <StyledSwitchView>
            {children}
        </StyledSwitchView>
    );
}