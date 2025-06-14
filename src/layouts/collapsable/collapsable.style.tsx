import styled from "styled-components";

export const StyledCollapsable = styled.div<{}>`
  display: flex;
  height: 100%;
  align-items: stretch;
  box-sizing: border-box;
    
  * {
    max-width: 100%;
    box-sizing: border-box;
  }  
`

export const StyledAside = styled.div<{
    $width: string;
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
    
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1);
`

export const StyledMain = styled.div<{}>`
    box-sizing: border-box;

    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    
    flex-grow: 1;
    align-self: stretch;
`
