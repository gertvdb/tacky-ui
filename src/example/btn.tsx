import React, {PropsWithChildren, useContext} from "react";
import {ContextIsOpen} from "@/context/context.is-open";

export interface IBtnExample extends PropsWithChildren {
    onClick: () => void
}

export const BtnExample = (props: IBtnExample) => {

    const {onClick, children} = props;
    return (
        <button
            onClick={onClick}
            style={{
                padding: "8px 16px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    )
}