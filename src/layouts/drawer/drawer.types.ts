import {PropsWithChildren} from "react";
import {IContextDrawerSizePartial} from "@/layouts/drawer/context.drawer.size";
import {IContextDrawerId} from "@/layouts/drawer/context.drawer.id";

export interface IDrawer extends
    IContextDrawerId,
    IContextDrawerSizePartial,
    IDrawerContent {
    isOpen: boolean;
    onCloseRequest: () => void;
}

export type DrawerElement = 'backdrop' | 'content';

export interface IDrawerContent extends PropsWithChildren {
    isOpen: boolean;
    onCloseRequest: () => void;
}