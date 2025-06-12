import styled from "styled-components";

export const StyledModal = styled.div<{
    $width: string;
    $transform: string;
}>`
    flex: 0 0 auto;
    align-self: stretch;
    white-space: nowrap;
    box-sizing: border-box;
    
    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
   
    transition: all 0.4s ease; // Low transition since react already delays the transition to open.
    transform: ${(props) => props.$transform};

    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props) => props.$width};
    max-width: min(96vw, ${(props) => props.$width});
    max-height: 96vh;
    overflow-y: scroll;
    
    > * {
        max-width: 100%;
        box-sizing: border-box;
    }
`

export const StyledModalContainer = styled.div<{}>`
    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    position: relative;
`