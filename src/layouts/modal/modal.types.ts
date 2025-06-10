import {PropsWithChildren} from "react";
import {IContextPortalIdType} from "@/layouts/portal/context.portal.id";

export interface IModal extends
    IContextPortalIdType,
    IModalContent {}

export interface IModalContent extends PropsWithChildren {}