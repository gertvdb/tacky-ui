import {PropsWithChildren} from "react";

export interface IPortal extends PropsWithChildren {
    zIndex: number;
    isVisible: boolean;
}
