import { useContext } from "react";
import {ContextButtonState, IContextButtonState} from "@/layouts/button/context.button.state";

export const useButtonState = (): IContextButtonState => {
    const context = useContext(ContextButtonState);
    if (context === undefined) {
        throw new Error("useButtonState must be used within a ContextButtonState item");
    }

    return context;
};
