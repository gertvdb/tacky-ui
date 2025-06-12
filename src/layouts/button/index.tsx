import {IButton} from "@/layouts/button/button.types";
import {ContextProviderButtonState} from "@/layouts/button/context.button.state";
import {ButtonContent} from "@/layouts/button/components/button.content";

export const Button = (props: IButton) => {
    const {disabled, children, ariaLabel} = props;
    const isDisabled = disabled ?? false;

    return (
        <ContextProviderButtonState
            disabled={isDisabled}
        >
            <ButtonContent
                ariaLabel={ariaLabel}
            >
                {children}
            </ButtonContent>
        </ContextProviderButtonState>
    );
};