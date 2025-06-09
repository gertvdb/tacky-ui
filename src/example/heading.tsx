import React, {PropsWithChildren} from "react";

export const HeadingExample = (props: PropsWithChildren) => {
    const {children} = props;

    return (
        <h3 style={{
            margin: "0 0 16px 0",
            color: "#333333",
            fontFamily: "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
            fontSize: "24px",
        }}>
            {children}
        </h3>
    );
}