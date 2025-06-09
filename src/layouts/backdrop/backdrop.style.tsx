import styled from "styled-components";

export const StyledBackdrop = styled.div<{
    $pointerEvents: string,
    $zIndex: number,
    $background: string,
}>`
  height: 100%;
  width: 100%;
  max-width: 100%; // !!! needed since 100vw has a bug with scrollbars : https://caniuse.com/viewport-units
  position: relative;
  top: 0;
  left: 0;
  pointer-events: ${(props) => props.$pointerEvents};
  z-index: ${(props) => props.$zIndex};
  background: ${(props) => props.$background};
  transition: all 225ms cubic-bezier(0.4, 0, 0.6, 1);
`;

export const StyledBackdropContent = styled.div<{
    $zIndex: number,
}>`
  height: 100%;
  width: 100%;
  display: flex;
  z-index: ${(props) => props.$zIndex};
  position: relative;
`;

