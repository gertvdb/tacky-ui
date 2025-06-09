import React, {createContext, PropsWithChildren} from "react";

export interface IContextCollapsableSize {
    sizeExpanded: string,
    sizeCollapsed: string
}

export interface IContextCollapsableSizePartial {
    sizeExpanded?: string,
    sizeCollapsed?: string
}

export interface IContextCollapsableSizeType extends IContextCollapsableSizePartial, PropsWithChildren {}

export const ContextCollapsableSizeDefault = {
    sizeExpanded: '20vw',
    sizeCollapsed: '5vw'
}

export const ContextCollapsableSize  = createContext<IContextCollapsableSize>(ContextCollapsableSizeDefault);

export const ContextProviderCollapsableSize  = (props: IContextCollapsableSizeType) => {
    const { sizeExpanded , sizeCollapsed, children } = props;

    return (
        <ContextCollapsableSize.Provider
            value={{
                sizeExpanded : sizeExpanded ?? ContextCollapsableSizeDefault.sizeExpanded,
                sizeCollapsed: sizeCollapsed ?? ContextCollapsableSizeDefault.sizeCollapsed
            }}
        >
            {children}
        </ContextCollapsableSize.Provider>
    );
};