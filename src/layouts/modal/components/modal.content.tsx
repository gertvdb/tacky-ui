import {IModalContent} from "@/layouts/modal/modal.types";
import {usePortalId} from "@/layouts/portal/hooks/use-portal-id";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
import {KeyboardEvent, useEffect, useState} from "react";
import {useFocusTrap} from "@/layouts/drawer/hooks/use-focus-trap";
import {Backdrop} from "@/layouts/backdrop";
import {StyledModal, StyledModalContainer} from "@/layouts/modal/modal.style";

/**
 * ModalContent component renders a modal with content
 * Uses portal system for managing visibility and focus trap for accessibility
 * @param props - Component props of type IModalContent
 */
export const ModalContent = (props: IModalContent) => {
    const {children} = props;

    const ContextPortalId = usePortalId();
    const ContextPortalManager = usePortalManager();

    const id = ContextPortalId.id;
    const isOpen = ContextPortalManager.isOpen(id);

    // Delay the opening of the drawer to have the visual slide in effect.
    const [isDelayedOpen, setDelayedOpen] = useState<boolean>(false);
    useEffect(() => {
        if (isOpen) {
            setDelayedOpen(true);
        } else {
            setDelayedOpen(false);
        }
    }, [isOpen]);

    // Use the focus trap hook to trap focus within the drawer when it's open
    const focusTrapRef = useFocusTrap(isDelayedOpen);

    /**
     * Handles keyboard events for the drawer
     * Closes the modal when Escape key is pressed
     * @param e - Keyboard event
     */
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape' && isOpen) {
            if (e.ctrlKey) {
                // On CTRL we don't stop propagation, so all other portals will close too.
                if (ContextPortalManager.isTop(id)) {
                    ContextPortalManager.closePortal(id);
                }
            } else {
                // On just "Esc" we close the top one.
                e.stopPropagation();
                if (ContextPortalManager.isTop(id)) {
                    ContextPortalManager.closePortal(id);
                }
            }
        }
    };

    return (
        <Backdrop
            zIndex={100}
        >
            <StyledModalContainer
                className={"drawer"}
                onKeyDown={onKeyDown}
                onClick={(e) => {
                    // Prevent clicking on content to trigger 'onClick' on backdrop.
                    // Since this is a div the event would propagate.
                    // It is not good to put a onClick on a div, only clickable elements
                    // like <a> or <button> should have an on click.
                    // But this is a special case where we want clicking on the backdrop
                    // to also close whatever is using the backdrop.
                    // So we put this system into place.
                    e.stopPropagation();
                    ContextPortalManager.closePortal(id);
                }}
            >
                <StyledModal
                    className={"drawer-content"}
                    ref={focusTrapRef}
                    autoFocus={true}
                    tabIndex={isDelayedOpen ? 0 : -1}
                    $transform={isDelayedOpen ? "translate(-50%, -50%)" : "translate(-50%, 100%)"}
                    $width={'800px'}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    { isOpen ? children : null }
                </StyledModal>
            </StyledModalContainer>
        </Backdrop>
    )
}