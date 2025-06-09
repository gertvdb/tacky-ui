import React, {ReactElement} from "react";
import {SwitchView} from "@/layouts/switch/components/switch.view";

export interface ISwitch {
    viewA: ReactElement<React.ComponentProps<typeof SwitchView>>;
    viewB: ReactElement<React.ComponentProps<typeof SwitchView>>;
}
