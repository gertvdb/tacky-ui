import React, {PropsWithChildren} from "react";
import {StyledAside} from "@/layouts/collapsable/collapsable.style";
import {useCollapsableSize} from "@/layouts/collapsable/hooks/use-collapsable-size";
import {useCollapsable} from "@/layouts/collapsable/hooks/use-collapsable";

export const CollapsableAside = (props: PropsWithChildren) => {
    const { children } = props;

    const {sizeCollapsed, sizeExpanded} = useCollapsableSize();
    const {isExpanded} = useCollapsable();

    // When 0px don't render children when not expanded.
    // This way we don't render unused content and prevent tabbing into it.
    // We do render the div to keep the animation
    return (
        <StyledAside
            $width={isExpanded ? sizeExpanded : sizeCollapsed}
        >
            {
                !isExpanded && ['0px', '0'].includes(sizeCollapsed) ?
                    null :
                    children
            }
        </StyledAside>
    );
};
