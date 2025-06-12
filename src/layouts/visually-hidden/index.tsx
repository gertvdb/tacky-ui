import {StyledVisuallyHidden} from "@/layouts/visually-hidden/visually-hidden.style";
import {IVisuallyHidden} from "@/layouts/visually-hidden/visually-hidden.types";

export const VisuallyHidden = (props: IVisuallyHidden) => {
    const {children} = props;

    return (
        <StyledVisuallyHidden>
            {children}
        </StyledVisuallyHidden>
    )
}

export type {IVisuallyHidden} from "@/layouts/visually-hidden/visually-hidden.types";
