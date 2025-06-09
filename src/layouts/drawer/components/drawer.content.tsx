import {Portal} from "@/layouts/portal";
import {Backdrop} from "@/layouts/backdrop";
import {IDrawerContent} from "@/layouts/drawer/drawer.types";
import {StyledDrawer, StyledDrawerContainer} from "@/layouts/drawer/drawer.style";
import {useEffect, useState} from "react";
import {useDrawerSize} from "@/layouts/drawer/hooks/use-drawer-size";
import {useFocusTrap} from "@/layouts/drawer/hooks/use-focus-trap";
import {usePortalManager} from "@/layouts/portal/hooks/use-portal-manager";
import {useDrawerId} from "@/layouts/drawer/hooks/use-drawer-id";

export const DrawerContent = (props: IDrawerContent) => {
    const {children, isOpen, onCloseRequest} = props;

    const ContextDrawerSize = useDrawerSize();
    const portalManager = usePortalManager();
    const drawerId = useDrawerId();

    // Delay the opening of the drawer to have the visual slide in effect.
    const [isDelayedOpen, setDelayedOpen] = useState<boolean>(false);
    useEffect(() => {
        if (isOpen) {
            setDelayedOpen(true);
        } else {
            setDelayedOpen(false);
        }
    }, [isOpen]);

    // ESC key handling
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                // Get all open portals
                const portals = portalManager.portals;

                // If there are no portals or this is the only portal, close it
                if (portals.length === 0 || portals.length === 1) {
                    onCloseRequest();
                    return;
                }

                // Find the top portal (the one with the highest z-index)
                const topPortal = portals.reduce((prev, current) => 
                    prev.zIndex > current.zIndex ? prev : current
                );

                // Only close if this drawer is the top one
                if (topPortal.id === drawerId.id) {
                    onCloseRequest();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onCloseRequest, portalManager.portals, drawerId.id]);

    // Use the focus trap hook to trap focus within the drawer when it's open
    const focusTrapRef = useFocusTrap(isDelayedOpen);

    return (
        <Portal
            zIndex={100}
            isVisible={isOpen}
        >
            <Backdrop
                zIndex={100}
            >
                <StyledDrawerContainer
                    className={"drawer-container"}
                    onClick={(e) => {
                        // Prevent clicking on content to trigger 'onClick' on backdrop.
                        // Since this is a div the event would propagate.
                        // It is not good to put a onClick on a div, only clickable elements
                        // like <a> or <button> should have an on click.
                        // But this is a special case where we want clicking on the backdrop
                        // to also close whatever is using the backdrop.
                        // So we put this system into place.
                        if (onCloseRequest) {
                            onCloseRequest();
                            e.stopPropagation();
                        }
                    }}
                >
                        <StyledDrawer
                            className={"drawer"}
                            ref={focusTrapRef}
                            autoFocus={true}
                            tabIndex={isDelayedOpen ? 0 : -1}
                            $transform={isDelayedOpen ? "translateX(0)" : "translateX(-100vw)"}
                            $maxWidth={isDelayedOpen ? "100%" : "0"}
                            $width={isDelayedOpen ? ContextDrawerSize.sizeExpanded : ContextDrawerSize.sizeCollapsed}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            { isOpen ? children : null }
                        </StyledDrawer>
                </StyledDrawerContainer>
            </Backdrop>
        </Portal>
    )
}
