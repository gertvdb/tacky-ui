import {ICollapsable} from "@/layouts/collapsable/collapsable.types";
import {ContextProviderCollapsableVisibility} from "@/layouts/collapsable/context.collapsable.visibility";
import {CollapsableContent} from "@/layouts/collapsable/components/collapsable.content";
import {CollapsableAside} from "@/layouts/collapsable/components/collapsable.aside";
import {CollapsableMain} from "@/layouts/collapsable/components/collapsable.main";
import React from "react";
import {ContextProviderCollapsableSize} from "@/layouts/collapsable/context.collapsable.size";

export const Collapsable = (props: ICollapsable) => {
    const {aside, main, position, isExpanded, size_expanded, size_collapsed} = props;

    return (
        <ContextProviderCollapsableSize
            size_expanded={size_expanded}
            size_collapsed={size_collapsed}
        >
            <ContextProviderCollapsableVisibility isExpanded={isExpanded}>
                <CollapsableContent>
                    {position && position === 'right' ? main : aside}
                    {position && position === 'right' ? aside : main}
                </CollapsableContent>
            </ContextProviderCollapsableVisibility>
        </ContextProviderCollapsableSize>

    )
}

Collapsable.Aside = CollapsableAside;
Collapsable.Main = CollapsableMain;
