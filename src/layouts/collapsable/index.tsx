import {ICollapsable} from "@/layouts/collapsable/collapsable.types";
import {CollapsableContent} from "@/layouts/collapsable/components/collapsable.content";
import {CollapsableAside} from "@/layouts/collapsable/components/collapsable.aside";
import {CollapsableMain} from "@/layouts/collapsable/components/collapsable.main";
import {ContextProviderCollapsableSize} from "@/layouts/collapsable/context.collapsable.size";

// Create the Collapsable component
export const Collapsable = (props: ICollapsable) => {
    const {aside, main, position, sizeExpanded, sizeCollapsed} = props;

    return (
        <ContextProviderCollapsableSize
            sizeExpanded={sizeExpanded}
            sizeCollapsed={sizeCollapsed}
        >
            <CollapsableContent>
                {position && position === 'right' ? main : aside}
                {position && position === 'right' ? aside : main}
            </CollapsableContent>
        </ContextProviderCollapsableSize>
    );
};

Collapsable.Aside = CollapsableAside;
Collapsable.Main = CollapsableMain;

export { ContextProviderCollapsable } from "@/layouts/collapsable/context.collapsable";
export { useCollapsable } from "@/layouts/collapsable/hooks/use-collapsable";
