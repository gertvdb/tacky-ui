import React, {createContext, PropsWithChildren} from "react";

export interface IContextGridCols {
    cols: number
}

export interface IContextGridColsPartial {
    cols?: number;
}

export interface IContextGridColsType extends IContextGridColsPartial, PropsWithChildren {}

export const ContextGridColsDefault = {
    cols: 24,
};

export const ContextGridCols = createContext<IContextGridCols>(ContextGridColsDefault);

export const ContextProviderGridCols = (props: IContextGridColsType) => {
    const { cols, children } = props;

    return (
        <ContextGridCols.Provider
            value={{
                cols: cols ?? ContextGridColsDefault.cols
            }}
        >
            {children}
        </ContextGridCols.Provider>
    );
};
