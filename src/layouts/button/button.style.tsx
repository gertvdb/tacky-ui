import styled from "styled-components";

export const StyledButton = styled.button<{}>`
    
    all: unset;
    border-radius: 25px;
    
    &:focus-visible {
        outline-offset: 4px;
        outline-color: rgb(2, 156, 253);
        outline-style: solid;
        outline-width: 2px;
    }
`