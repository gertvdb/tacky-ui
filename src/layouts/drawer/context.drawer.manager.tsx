import React, {createContext, PropsWithChildren, useState} from "react";

export interface IContextDrawerManager {
    stack: string[],
}

export interface IContextDrawerType {
    stack: string[],
}

export interface IContextProviderDrawerType extends IContextDrawerType, PropsWithChildren {}

export const ContextDrawerManager  = createContext<IContextDrawerManager>({
    stack: [],
});

export const ContextProviderDrawer  = (props: IContextProviderDrawerType) => {
    const { isOpen: open, children} = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(open ?? false);

    let value = {
        stack: isDrawerOpen,
    };

    return (
        <ContextDrawerManager.Provider
            value={value}
        >
            {children}
        </ContextDrawerManager.Provider>
    );
};
