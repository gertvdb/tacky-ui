import styled from "styled-components";

export const StyledPortal = styled.div<{
    $pointerEvents: string,
    $zIndex: number,
    $display: string,
}>`
  height: 100vh;
  width: 100vw;
  max-width: 100%; // !!! needed since 100vw has a bug with scrollbars : https://caniuse.com/viewport-units
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  pointer-events: ${(props) => props.$pointerEvents};
  z-index: ${(props) => props.$zIndex};
  display: ${(props) => props.$display};
`;
