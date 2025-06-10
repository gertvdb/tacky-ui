import React, { createContext, PropsWithChildren } from "react";

export interface IContextPortalId {
    id: string,
}

export interface IContextPortalIdType {
    id: string;
}

export interface IContextProviderPortalIdType extends IContextPortalIdType, PropsWithChildren {}

export const ContextPortalId  = createContext<IContextPortalId>({
    id: '',
});

export const ContextProviderPortalId  = (props: IContextProviderPortalIdType) => {
    const { children, id } = props;

    let value = {
        id: id,
    };

    return (
        <ContextPortalId.Provider
            value={value}
        >
            {children}
        </ContextPortalId.Provider>
    );
};
