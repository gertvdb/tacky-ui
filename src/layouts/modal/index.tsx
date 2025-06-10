import {Portal} from "@/layouts/portal";
import {IModal} from "@/layouts/modal/modal.types";
import {ModalContent} from "@/layouts/modal/components/modal.content";

export const Modal = (props: IModal) => {
    const {id, children} = props;

    return (
        <Portal
            id={id}
        >
            <ModalContent>
                {children}
            </ModalContent>
        </Portal>
    )
}

export type {IDrawer} from "@/layouts/drawer/drawer.types";
