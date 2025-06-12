import React, {createContext, PropsWithChildren, useState} from "react";

export type ButtonStates = 'idle' | 'hover' | 'active' | 'focus' | 'disabled' | 'visited';

export interface IContextButtonState {
    state: ButtonStates;
    setState: (state: ButtonStates) => void;
}

export interface IContextButtonStateType extends PropsWithChildren {
    disabled: boolean;
}

export const ContextButtonState  = createContext<IContextButtonState>({
    state: 'idle',
    setState: () => {
        console.warn("setState called without a provider");
    },
});

export const ContextProviderButtonState  = (props: IContextButtonStateType) => {
    const { disabled, children } = props;
    const [state, setState] = useState<ButtonStates>(disabled ? 'disabled' : 'idle');

    const updateState = (state: ButtonStates) => {
        if (!disabled) {
            setState(state);
        }
    }

    const value = {
        state : state,
        setState: updateState
    }

    return (
        <ContextButtonState.Provider
            value={value}
        >
            {children}
        </ContextButtonState.Provider>
    );
};