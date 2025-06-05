import React, {PropsWithChildren} from "react";
import {StyledAside} from "@/layouts/collapsable/collapsable.style";
import {useCollapsableSize} from "@/layouts/collapsable/hooks/use-collapsable-size";
import {useCollapsableVisibility} from "@/layouts/collapsable/hooks/use-collapsable-visibility";

export const CollapsableAside = (props: PropsWithChildren) => {
    const { children } = props;

    const {size_collapsed, size_expanded} = useCollapsableSize();
    const {isExpanded} = useCollapsableVisibility();

    return (
        <StyledAside
            $width={isExpanded ? size_expanded : size_collapsed}
        >
            {children}
        </StyledAside>
    );
};
