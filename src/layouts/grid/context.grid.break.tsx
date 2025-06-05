import React, {createContext, PropsWithChildren} from "react";

export interface IContextGridBreak {
    break_xs: string;
    break_sm: string;
    break_md: string;
    break_lg: string;
    break_xl: string;
    break_xxl: string;
    break_3xl: string;
    break_4xl: string;
}

export interface IContextGridBreakPartial {
    break_xs?: string;
    break_sm?: string;
    break_md?: string;
    break_lg?: string;
    break_xl?: string;
    break_xxl?: string;
    break_3xl?: string;
    break_4xl?: string;
}

export interface IContextGridBreakType extends IContextGridBreakPartial, PropsWithChildren {}

export const ContextGridBreakDefault = {
    break_xs: "480px", // For very small screens like older phones (e.g., iPhone SE or similar):
    break_sm: "640px", // Mobile (small)
    break_md: "768px", // Tablets (medium)
    break_lg: "1024px", // Small laptops
    break_xl: "1280px", // Desktops
    break_xxl: "1536px", // Large desktops / 2K+
    break_3xl: "1920px", // For ultra-wide monitors (e.g., 4K+ displays or dashboards)
    break_4xl: "2560px", // For ultra-wide monitors (e.g., 4K+ displays or dashboards)
};

export const ContextGridBreak = createContext<IContextGridBreak>(ContextGridBreakDefault);

export const ContextProviderGridBreak = (props: IContextGridBreakType) => {
    const { break_xs, break_sm, break_md, break_lg, break_xl, break_xxl, break_3xl, break_4xl, children } = props;

    return (
        <ContextGridBreak.Provider
            value={{
                break_xs: break_xs ?? ContextGridBreakDefault.break_xs,
                break_sm: break_sm ?? ContextGridBreakDefault.break_sm,
                break_md: break_md ?? ContextGridBreakDefault.break_md,
                break_lg: break_lg ?? ContextGridBreakDefault.break_lg,
                break_xl: break_xl ?? ContextGridBreakDefault.break_xl,
                break_xxl: break_xxl ?? ContextGridBreakDefault.break_xxl,
                break_3xl: break_3xl ?? ContextGridBreakDefault.break_3xl,
                break_4xl: break_4xl ?? ContextGridBreakDefault.break_4xl,
            }}
        >
            {children}
        </ContextGridBreak.Provider>
    );
};
