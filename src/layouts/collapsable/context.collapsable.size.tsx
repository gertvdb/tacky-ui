import React, {createContext, PropsWithChildren, useState} from "react";

export interface IContextCollapsableSize {
    size_expanded: string,
    size_collapsed: string
}

export interface IContextCollapsableSizePartial {
    size_expanded?: string,
    size_collapsed?: string
}

export interface IContextCollapsableSizeType extends IContextCollapsableSizePartial, PropsWithChildren {}

export const ContextCollapsableSizeDefault = {
    size_expanded: '20vw',
    size_collapsed: '5vw'
}

export const ContextCollapsableSize  = createContext<IContextCollapsableSize>(ContextCollapsableSizeDefault);

export const ContextProviderCollapsableSize  = (props: IContextCollapsableSizeType) => {
    const { size_expanded , size_collapsed, children } = props;

    return (
        <ContextCollapsableSize.Provider
            value={{
                size_expanded : size_expanded ?? ContextCollapsableSizeDefault.size_expanded,
                size_collapsed: size_collapsed ?? ContextCollapsableSizeDefault.size_collapsed
            }}
        >
            {children}
        </ContextCollapsableSize.Provider>
    );
};