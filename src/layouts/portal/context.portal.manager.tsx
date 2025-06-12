import React, {createContext, PropsWithChildren, useEffect, useState} from "react";

/**
 * Interface for the Portal Manager context
 * Provides methods to manage portals (open, close, check status)
 */
export interface IContextPortalManager {
    /** Record of open portals with their IDs */
    portals: string[]
    /** Opens a portal with the specified ID */
    openPortal: (id: string) => void,
    /** Closes a portal with the specified ID */
    closePortal: (id: string) => void,
    /** Checks if a portal with the specified ID is open */
    isOpen: (id: string) => boolean,
    /** Checks if a portal with the specified ID is the topmost (last opened) */
    isTop: (id: string) => boolean,
}

/**
 * Props for the Portal Manager context provider
 */
export interface IContextProviderPortalManagerType extends PropsWithChildren {
    zIndex: number;
}

/**
 * Context for managing portals
 */
export const ContextPortalManager = createContext<IContextPortalManager>({
    portals: [],
    openPortal: (id: string) => {
        console.warn("openPortal called without a provider");
    },
    closePortal: (id: string) => {
        console.warn("closePortal called without a provider");
    },
    isOpen: (id: string) => {
        return false;
    },
    isTop: (id: string) => {
        return false;
    }
});

/**
 * Provider component for the Portal Manager context
 */
export const ContextProviderPortalManager = (props: IContextProviderPortalManagerType) => {
    const {children} = props;
    const [portals, setPortals] = useState<string[]>([]);

    /**
     * Opens a portal with the specified ID
     * @param id - The ID of the portal to open
     */
    const openPortal = (id: string) => {
        console.log('openPortal');
        console.log('current', portals);
        setPortals(prevPortals => (
            prevPortals.includes(id) ? prevPortals : [...prevPortals, id]
        ));
    }

    /**
     * Closes a portal with the specified ID
     * @param id - The ID of the portal to close
     */
    const closePortal = (id: string) => {
        console.log('closePortal');
        console.log('current', portals);
        setPortals(prevPortals => {
            return prevPortals.filter(item => item !== id);
        });
    }

    /**
     * Checks if a portal with the specified ID is open
     * @param id - The ID of the portal to check
     * @returns True if the portal is open, false otherwise
     */
    const isOpen = (id: string) => {
        return portals.includes(id);
    }

    /**
     * Checks if a portal with the specified ID is the topmost (last opened)
     * @param id - The ID of the portal to check
     * @returns True if the portal is the topmost, false otherwise
     */
    const isTop = (id: string) => {
        const last = portals.pop();
        return id === last;
    }

    const value = {
        portals,
        openPortal,
        closePortal,
        isOpen,
        isTop
    };

    useEffect(() => {
        console.log('useEffect');
        console.log('current', portals);
        if (portals.length > 0) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [portals]);

    return (
        <ContextPortalManager.Provider
            value={value}
        >
            {children}
        </ContextPortalManager.Provider>
    );
};
