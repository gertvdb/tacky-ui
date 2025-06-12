import {PropsWithChildren} from "react";

export interface IButton extends
    PropsWithChildren
    {
        ariaLabel: string;
        disabled?: boolean;
    }

export interface IButtonContent extends PropsWithChildren {
    ariaLabel: string;
}
