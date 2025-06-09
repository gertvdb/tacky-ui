import React, {createContext, PropsWithChildren, useState} from "react";

export interface IContextCollapsable {
  isExpanded: boolean,
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IContextCollapsableType {
  isExpanded?: boolean,
}

export interface IContextProviderCollapsableType extends IContextCollapsableType, PropsWithChildren {}

export const ContextCollapsable  = createContext<IContextCollapsable>({
    isExpanded: false,
    setIsExpanded: () => {
        console.warn("setExpanded called without a provider");
    },
});

export const ContextProviderCollapsable  = (props: IContextProviderCollapsableType) => {
    const { isExpanded: expanded, children } = props;
    const [isAsideExpanded, setIsAsideExpanded] = useState<boolean>(expanded ?? false);

    let value = {
        isExpanded: isAsideExpanded,
        setIsExpanded : setIsAsideExpanded,
    };

    return (
        <ContextCollapsable.Provider
            value={value}
        >
            {children}
        </ContextCollapsable.Provider>
    );
};
