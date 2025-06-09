import React, {createContext, PropsWithChildren} from "react";

export interface IContextDrawerSize {
    sizeExpanded: string,
    sizeCollapsed: string
}

export interface IContextDrawerSizePartial {
    sizeExpanded?: string,
    sizeCollapsed?: string
}

export interface IContextDrawerSizeType extends IContextDrawerSizePartial, PropsWithChildren {}

export const ContextDrawerSizeDefault = {
    sizeExpanded: '20vw',
    sizeCollapsed: '5vw'
}

export const ContextDrawerSize  = createContext<IContextDrawerSize>(ContextDrawerSizeDefault);

export const ContextProviderDrawerSize  = (props: IContextDrawerSizeType) => {
    const { sizeExpanded , sizeCollapsed, children } = props;

    return (
        <ContextDrawerSize.Provider
            value={{
                sizeExpanded : sizeExpanded ?? ContextDrawerSizeDefault.sizeExpanded,
                sizeCollapsed: sizeCollapsed ?? ContextDrawerSizeDefault.sizeCollapsed
            }}
        >
            {children}
        </ContextDrawerSize.Provider>
    );
};