import {PropsWithChildren} from "react";
import {IContextDrawerSizePartial} from "@/layouts/drawer/context.drawer.size";
import {IContextPortalIdType} from "@/layouts/portal/context.portal.id";

export interface IDrawer extends
    IContextPortalIdType,
    IContextDrawerSizePartial,
    IDrawerContent {}

export interface IDrawerContent extends PropsWithChildren {}