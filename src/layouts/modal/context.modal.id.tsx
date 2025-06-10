import React, { createContext, PropsWithChildren } from "react";

export interface IContextModalId {
    id: string,
}

export interface IContextModalIdType {
    id: string;
}

export interface IContextProviderModalIdType extends IContextModalIdType, PropsWithChildren {}

export const ContextModalId  = createContext<IContextModalId>({
    id: '',
});

export const ContextProviderModalId  = (props: IContextProviderModalIdType) => {
    const { children, id } = props;

    let value = {
        id: id,
    };

    return (
        <ContextModalId.Provider
            value={value}
        >
            {children}
        </ContextModalId.Provider>
    );
};
