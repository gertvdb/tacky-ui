import {IButtonContent} from "@/layouts/button/button.types";
import {StyledButton} from "@/layouts/button/button.style";
import {useButtonState} from "@/layouts/button/hooks/use-button-state";
import {KeyboardEvent, useCallback} from "react";
import {VisuallyHidden} from "@/layouts/visually-hidden";
import {AriaHidden} from "@/layouts/aria-hidden";

export const ButtonContent = (props: IButtonContent) => {
    const {children, ariaLabel} = props;
    const ContextButtonState = useButtonState();
    const {state, setState} = ContextButtonState;

    const handleMouseEnter = useCallback(() => {
        setState('hover');
    }, [setState]);

    const handleMouseLeave = useCallback(() => {
        setState('idle');
    }, [setState]);

    const handleMouseDown = useCallback(() => {
        setState('active');
    }, [setState]);

    const handleMouseUp = useCallback(() => {
        setState('hover');
    }, [setState]);

    const handleFocus = useCallback(() => {
        setState('focus')
    }, [setState]);

    const handleBlur = useCallback(() => {
        setState('idle')
    }, [setState]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            setState('active');
        }
    }, [setState]);

    const handleKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            setState('hover');
        }
    }, [setState]);

    return (
        <StyledButton
            disabled={state === 'disabled'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
        >
            <VisuallyHidden>{ariaLabel}</VisuallyHidden>
            <AriaHidden>{children}</AriaHidden>
        </StyledButton>
    )
}