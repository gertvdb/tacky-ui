import {ISwitch} from "@/layouts/switch/switch.types";
import {StyledSwitch} from "@/layouts/switch/switch.style";
import {SwitchView} from "@/layouts/switch/components/switch.view";
import {ContextProviderSwitch} from "@/layouts/switch/context.switch";
import {useSwitch} from "@/layouts/switch/hooks/use-switch";

export const Switch = (props: ISwitch) => {
    const {viewA, viewB} = props;

    const ContextSwitch = useSwitch();

    return (
        <StyledSwitch>
            {ContextSwitch.activeView === 'A' ? viewA : null}
            {ContextSwitch.activeView === 'B' ? viewB : null}
        </StyledSwitch>
    )
}

Switch.View = SwitchView;

export type {ISwitch} from "@/layouts/switch/switch.types";

ContextProviderSwitch