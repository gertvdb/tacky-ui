import React, {PropsWithChildren} from "react";

export interface IBoxExample extends PropsWithChildren {
   shadow?: boolean;
   dark?: boolean;
   border?: boolean;
}

export const BoxExample = (props: IBoxExample) => {
    const {children, shadow = true, dark = false, border = false} = props;

    console.log(border);

    return (
        <div
            style={{
                boxShadow: shadow ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)": "none",
                background: dark ? "#EEE" : "#FFF",
                width: "100%",
                height: "100%",
                padding: "10px",
                border: border ?
                    "1px solid #CCCCCC" :
                    "1px solid transparent"
            }}
        >
            {children}
        </div>
    );
}