import React, {createContext, PropsWithChildren, useState} from "react";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
import {useDrawerId} from "@/layouts/drawer/hooks/use-drawer-id";

export interface IContextDrawer {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

export interface IContextDrawerType {
    isOpen?: boolean,
}

export interface IContextProviderDrawerType extends IContextDrawerType, PropsWithChildren {}

export const ContextDrawer  = createContext<IContextDrawer>({
    isOpen: false,
    setIsOpen: () => {
        console.warn("setIsOpen called without a provider");
    },
});

export const ContextProviderDrawer  = (props: IContextProviderDrawerType) => {
    const { isOpen: open, children} = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(open ?? false);

    const PortalContext = usePortalManager();
    const DrawerIdContext = useDrawerId();

    const onChange = (isOpen: boolean) => {
        setIsDrawerOpen(isOpen);
        if (isOpen) {
            PortalContext.openPortal(DrawerIdContext.id);
        } else {
            PortalContext.closePortal(DrawerIdContext.id);
        }
    }

    let value = {
        isOpen: isDrawerOpen,
        setIsOpen : onChange,
    };

    return (
        <ContextDrawer.Provider
            value={value}
        >
            {children}
        </ContextDrawer.Provider>
    );
};
