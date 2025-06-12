import {IAriaHidden} from "@/layouts/aria-hidden/aria-hidden.types";
import {StyledAriaHidden} from "@/layouts/aria-hidden/aria-hidden.style";

export const AriaHidden = (props: IAriaHidden) => {
    const {children} = props;

    return (
        <StyledAriaHidden>
            {children}
        </StyledAriaHidden>
    )
}

export type {IVisuallyHidden} from "@/layouts/visually-hidden/visually-hidden.types";
