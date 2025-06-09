import {IBackdrop} from "@/layouts/backdrop/backdrop.types";
import {StyledBackdrop, StyledBackdropContent} from "@/layouts/backdrop/backdrop.style";

export const Backdrop = (props: IBackdrop) => {
    const {children, zIndex} = props;
    return (
        <StyledBackdrop
            $pointerEvents={"auto"}
            $zIndex={zIndex}
            $background={"#D0D0D04D"}
        >
            <StyledBackdropContent
                $zIndex={zIndex}
            >
                {children}
            </StyledBackdropContent>
        </StyledBackdrop>
    )
}

export type {IBackdrop} from "@/layouts/backdrop/backdrop.types";
