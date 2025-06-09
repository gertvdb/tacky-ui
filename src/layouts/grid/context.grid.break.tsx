import React, {createContext, PropsWithChildren} from "react";
import {GlobalBreakpoints} from "@/globals/Breakpoints";

export interface IContextGridBreak {
    breakXs: string;
    breakSm: string;
    breakMd: string;
    breakLg: string;
    breakXl: string;
    breakXxl: string;
    break3xl: string;
    break4xl: string;
}

export interface IContextGridBreakPartial {
    breakXs?: string;
    breakSm?: string;
    breakMd?: string;
    breakLg?: string;
    breakXl?: string;
    breakXxl?: string;
    break3xl?: string;
    break4xl?: string;
}

export interface IContextGridBreakType extends IContextGridBreakPartial, PropsWithChildren {}

export const ContextGridBreak = createContext<IContextGridBreak>(GlobalBreakpoints);

export const ContextProviderGridBreak = (props: IContextGridBreakType) => {
    const { breakXs, breakSm, breakMd, breakLg, breakXl, breakXxl, break3xl, break4xl, children } = props;

    return (
        <ContextGridBreak.Provider
            value={{
                breakXs: breakXs ?? GlobalBreakpoints.breakXs,
                breakSm: breakSm ?? GlobalBreakpoints.breakSm,
                breakMd: breakMd ?? GlobalBreakpoints.breakMd,
                breakLg: breakLg ?? GlobalBreakpoints.breakLg,
                breakXl: breakXl ?? GlobalBreakpoints.breakXl,
                breakXxl: breakXxl ?? GlobalBreakpoints.breakXxl,
                break3xl: break3xl ?? GlobalBreakpoints.break3xl,
                break4xl: break4xl ?? GlobalBreakpoints.break4xl,
            }}
        >
            {children}
        </ContextGridBreak.Provider>
    );
};
