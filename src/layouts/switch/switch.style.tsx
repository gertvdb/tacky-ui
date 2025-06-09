import styled from "styled-components";

export const StyledSwitch = styled.div<{}>`
  display: flex;
  align-items: stretch;

  // This should be added to every layout component
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;

  * {
    max-width: 100%;
    box-sizing: border-box;
  }
`

export const StyledSwitchView = styled.div<{}>`
    flex: 0 0 auto;
    align-self: stretch;
    white-space: nowrap;
    box-sizing: border-box;
    
    // This should be added to every layout component
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1);
`