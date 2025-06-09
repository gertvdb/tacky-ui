import styled from "styled-components";

export const StyledDrawer = styled.div<{
    $width: string;
    $transform: string;
    $maxWidth: string;
}>`
    flex: 0 0 auto;
    align-self: stretch;
    white-space: nowrap;
    box-sizing: border-box;
    
    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
    width: ${(props) => props.$width};
    height: 100%;
   
    transition: all 0.4s ease; // Low transition since react already delays the transition to open.
    transform: ${(props) => props.$transform};
    max-width: ${(props) => props.$maxWidth};

    
    > * {
        max-width: 100%;
        box-sizing: border-box;
    }
`

export const StyledDrawerContainer = styled.div<{}>`
    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`