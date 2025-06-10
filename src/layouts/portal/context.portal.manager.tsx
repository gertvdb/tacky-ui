import React, {createContext, PropsWithChildren, useState} from "react";

/**
 * Interface for the Portal Manager context
 * Provides methods to manage portals (open, close, check status)
 */
export interface IContextPortalManager {
    /** Record of open portals with their IDs */
    portals: Record<string, string>
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
    portals: {},
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
    const [portals, setPortals] = useState<Record<string, string>>({});

    /**
     * Opens a portal with the specified ID
     * @param id - The ID of the portal to open
     */
    const openPortal = (id: string) => {
        const updatedPortals = { ...portals };
        updatedPortals[id] = id;
        setPortals(updatedPortals);
    }

    /**
     * Closes a portal with the specified ID
     * @param id - The ID of the portal to close
     */
    const closePortal = (id: string) => {
        const item = portals[id] ?? null;

        if (item) {
            const updatedPortals = { ...portals };
            delete updatedPortals[id];
            setPortals(updatedPortals);
        }
    }

    /**
     * Checks if a portal with the specified ID is open
     * @param id - The ID of the portal to check
     * @returns True if the portal is open, false otherwise
     */
    const isOpen = (id: string) => {
        const item = portals[id] ?? null;
        return !!item;
    }

    /**
     * Checks if a portal with the specified ID is the topmost (last opened)
     * @param id - The ID of the portal to check
     * @returns True if the portal is the topmost, false otherwise
     */
    const isTop = (id: string) => {
        const keys = Object.keys(portals);
        if (keys.length === 0) {
            return false;
        }
        const lastKey = keys[keys.length - 1];
        return id === lastKey;
    }

    const value = {
        portals,
        openPortal,
        closePortal,
        isOpen,
        isTop
    };

    return (
        <ContextPortalManager.Provider
            value={value}
        >
            {children}
        </ContextPortalManager.Provider>
    );
};
