import {ReactElement} from "react";
import {
    IContextProviderCollapsableVisibilityPartial
} from "@/layouts/collapsable/context.collapsable.visibility";
import {Collapsable} from "@/layouts/collapsable/index";
import {IContextCollapsableSizePartial} from "@/layouts/collapsable/context.collapsable.size";

export type CollapsablePosition = 'left' | 'right';

export interface ICollapsable extends
    IContextProviderCollapsableVisibilityPartial,
    IContextCollapsableSizePartial {
        aside: ReactElement<typeof Collapsable.Aside>;
        main: ReactElement<typeof Collapsable.Main>;
        position?: CollapsablePosition;
    }

