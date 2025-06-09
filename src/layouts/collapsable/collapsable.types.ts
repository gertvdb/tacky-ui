import React, {ReactElement} from "react";
import {IContextCollapsableSizePartial} from "@/layouts/collapsable/context.collapsable.size";
import {CollapsableAside} from "@/layouts/collapsable/components/collapsable.aside";
import {CollapsableMain} from "@/layouts/collapsable/components/collapsable.main";

export type CollapsablePosition = 'left' | 'right';

export interface ICollapsable extends
    IContextCollapsableSizePartial {
        aside: ReactElement<React.ComponentProps<typeof CollapsableAside>>;
        main: ReactElement<React.ComponentProps<typeof CollapsableMain>>;
        position?: CollapsablePosition;
    }
