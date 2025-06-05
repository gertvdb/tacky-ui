import React, {createContext, PropsWithChildren, useState} from "react";

export interface IContextCollapsableVisibility {
  isExpanded: boolean,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IContextProviderCollapsableVisibilityPartial {
    isExpanded?: boolean,
}

export interface IContextProviderCollapsableVisibility extends IContextProviderCollapsableVisibilityPartial, PropsWithChildren {}

export const ContextCollapsableVisibility  = createContext<IContextCollapsableVisibility>({
    isExpanded: false,
    setIsExpanded: () => {
        console.warn("setExpanded called without a provider");
    },
});

export const ContextProviderCollapsableVisibility  = (props: IContextProviderCollapsableVisibility) => {
    const { isExpanded: expanded , children } = props;
    const [isAsideExpanded, setIsAsideExpanded] = useState<boolean>(expanded ?? false);

    const value = {
        isExpanded: isAsideExpanded,
        setIsExpanded: setIsAsideExpanded,
    };

    return (
        <ContextCollapsableVisibility.Provider
            value={value}
        >
            {children}
        </ContextCollapsableVisibility.Provider>
    );
};
