import React, {createContext, PropsWithChildren, useState} from "react";

export type ContextSwitchViews = 'A'|'B';

export interface IContextSwitch {
    activeView: ContextSwitchViews,
    setActiveView: React.Dispatch<React.SetStateAction<ContextSwitchViews>>
}

export interface IContextSwitchType {
    activeView?: ContextSwitchViews,
}

export interface IContextProviderSwitchType extends IContextSwitchType, PropsWithChildren {}

export const ContextSwitch  = createContext<IContextSwitch>({
    activeView: 'A',
    setActiveView: () => {
        console.warn("setActiveView called without a provider");
    },
});

export const ContextProviderSwitch  = (props: IContextProviderSwitchType) => {
    const { activeView, children } = props;
    const [ currentActiveView, setCurrentActiveView] = useState<ContextSwitchViews>(activeView ?? 'A');

    let value = {
        activeView: currentActiveView,
        setActiveView : setCurrentActiveView,
    };

    return (
        <ContextSwitch.Provider
            value={value}
        >
            {children}
        </ContextSwitch.Provider>
    );
};
