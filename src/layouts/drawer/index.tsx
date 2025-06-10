import { IDrawer } from "@/layouts/drawer/drawer.types";
import { DrawerContent } from "@/layouts/drawer/components/drawer.content";
import {ContextProviderDrawerSize} from "@/layouts/drawer/context.drawer.size";
import {Portal} from "@/layouts/portal";

export const Drawer = (props: IDrawer) => {
    const {id, children, sizeExpanded, sizeCollapsed} = props;

    return (
        <Portal
            id={id}
        >
            <ContextProviderDrawerSize
                sizeExpanded={sizeExpanded}
                sizeCollapsed={sizeCollapsed}
            >
                <DrawerContent>
                    {children}
                </DrawerContent>
            </ContextProviderDrawerSize>
        </Portal>
    )
}

export type {IDrawer} from "@/layouts/drawer/drawer.types";
