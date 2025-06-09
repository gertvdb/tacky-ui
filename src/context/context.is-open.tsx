import React, {createContext, PropsWithChildren, useState} from "react";

export interface IContextIsOpen {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IContextIsOpenType {
    isOpen?: boolean,
}

export interface IContextProviderIsOpenType extends IContextIsOpenType, PropsWithChildren {}

export const ContextIsOpen  = createContext<IContextIsOpen>({
    isOpen: false,
    setIsOpen: () => {
        console.warn("setIsOpen called without a provider");
    },
});

export const ContextProviderIsOpen  = (props: IContextProviderIsOpenType) => {
    const { isOpen: open, children } = props;
    const [isItemOpen, setIsItemOpen] = useState<boolean>(open ?? false);

    let value = {
        isOpen: isItemOpen,
        setIsOpen : setIsItemOpen,
    };

    return (
        <ContextIsOpen.Provider
            value={value}
        >
            {children}
        </ContextIsOpen.Provider>
    );
};
