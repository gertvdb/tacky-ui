import React, { createContext, PropsWithChildren } from "react";

export interface IContextDrawerId {
    id: string,
}

export interface IContextDrawerIdType {
    id: string;
}

export interface IContextProviderDrawerIdType extends IContextDrawerIdType, PropsWithChildren {}

export const ContextDrawerId  = createContext<IContextDrawerId>({
    id: '',
});

export const ContextProviderDrawerId  = (props: IContextProviderDrawerIdType) => {
    const { children, id } = props;

    let value = {
        id: id,
    };

    return (
        <ContextDrawerId.Provider
            value={value}
        >
            {children}
        </ContextDrawerId.Provider>
    );
};
