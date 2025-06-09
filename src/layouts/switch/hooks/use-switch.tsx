import { useContext } from "react";
import {ContextSwitch, IContextSwitch} from "@/layouts/switch/context.switch";

export const useSwitch = (): IContextSwitch => {
    const context = useContext(ContextSwitch);
    if (context === undefined) {
        throw new Error("useSwitch must be used within a ContextSwitch item");
    }

    return context;
};
