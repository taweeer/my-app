import React from "react";
import styled from "styled-components";

type Props = {
    children: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'third'
}

export const Button:React.FC <Props> = ({children , variant}) => {
    return <ButtonWrapper type="button">{children}</ButtonWrapper>;

};


const ButtonWrapper = styled.button`

`;
    
    

