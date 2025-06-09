import React, {createContext, PropsWithChildren, useCallback, useState} from "react";

export interface IPortalInfo {
  id: string;
  zIndex: number;
}

export interface IContextPortalManager {
  portals: IPortalInfo[];
  registerPortal: (id: string, zIndex?: number) => void;
  openPortal: (id: string, zIndex?: number) => void;
  closePortal: (id: string) => void;
  closeAllPortals: () => void;
  getPortalZIndex: (id: string) => number;
}

export interface IContextPortalManagerProviderProps extends PropsWithChildren {}

export const ContextPortalManager = createContext<IContextPortalManager>({
  portals: [],
  registerPortal: () => {
    console.warn("registerPortal called without a provider");
  },
  openPortal: () => {
    console.warn("openPortal called without a provider");
  },
  closePortal: () => {
    console.warn("closePortal called without a provider");
  },
  closeAllPortals: () => {
    console.warn("closeAllPortals called without a provider");
  },
  getPortalZIndex: () => {
    console.warn("getPortalZIndex called without a provider");
    return 100; // Default z-index
  },
});

export const ContextProviderPortalManager = (props: IContextPortalManagerProviderProps) => {
  const { children } = props;
  const [portals, setPortals] = useState<IPortalInfo[]>([]);
  const [baseZIndex] = useState(100); // Starting z-index for portals

  const registerPortal = useCallback((id: string, zIndex?: number) => {
    setPortals((prevPortals) => {
      // Check if portal already exists
      const existingPortal = prevPortals.find(portal => portal.id === id);

      if (existingPortal) {
        // If z-index is provided, update it
        if (zIndex) {
          return prevPortals.map(portal => 
            portal.id === id ? { ...portal, zIndex } : portal
          );
        }
        // Otherwise, keep the existing portal as is
        return prevPortals;
      }

      // Calculate new z-index if not provided
      const newZIndex = zIndex || baseZIndex + prevPortals.length;

      // Add the portal to the list
      return [...prevPortals, {id, zIndex: newZIndex}];
    });
  }, [baseZIndex]);

  const openPortal = useCallback((id: string, zIndex?: number) => {
    // This function is a more explicit way to open a portal
    // It uses registerPortal internally
    registerPortal(id, zIndex);
  }, [registerPortal]);


  const closePortal = useCallback((id: string) => {
    setPortals((prevPortals) => 
      prevPortals.filter(portal => portal.id !== id)
    );
  }, []);

  const closeAllPortals = useCallback(() => {
    setPortals([]);
  }, []);

  const getPortalZIndex = useCallback((id: string) => {
    const portal = portals.find(portal => portal.id === id);
    return portal?.zIndex || baseZIndex;
  }, [portals, baseZIndex]);

  const value = {
    portals,
    registerPortal,
    openPortal,
    closePortal,
    closeAllPortals,
    getPortalZIndex,
  };

  return (
    <ContextPortalManager.Provider value={value}>
      {children}
    </ContextPortalManager.Provider>
  );
};
