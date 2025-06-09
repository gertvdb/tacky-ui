import { IDrawer } from "@/layouts/drawer/drawer.types";
import { DrawerContent } from "@/layouts/drawer/components/drawer.content";
import {ContextProviderDrawerSize} from "@/layouts/drawer/context.drawer.size";
import {ContextProviderDrawerId} from "@/layouts/drawer/context.drawer.id";

export const Drawer = (props: IDrawer) => {
    const {id, isOpen, onCloseRequest, children, sizeExpanded, sizeCollapsed} = props;

    return (
        <ContextProviderDrawerId
            id={id}
        >
            <ContextProviderDrawerSize
                sizeExpanded={sizeExpanded}
                sizeCollapsed={sizeCollapsed}
            >
                <DrawerContent
                    onCloseRequest={onCloseRequest}
                    isOpen={isOpen}
                >
                    {children}
                </DrawerContent>
            </ContextProviderDrawerSize>
        </ContextProviderDrawerId>
    )
}

export type {IDrawer} from "@/layouts/drawer/drawer.types";
