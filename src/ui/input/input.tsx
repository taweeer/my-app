import React from "react";
import { styled } from "styled-components";

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  disable?: boolean;
};

export const Input: React.FC<inputProps> = ({ labelText, disabled }) => {
    return (
        <Label>
          <LabelText>{labelText}</LabelText>
          <InputWrapper
            
          /> 
        </Label>
      );
};

const Label = styled.div`
  display: block;
  width: 40%;
`;

const LabelText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  box-sizing: border-box;
  border: 3px solid ${({ $borderColor }) => $borderColor || "transparent"};
  background-color: white;
  line-height: 30px;
  width: 100%;
  padding: 10px;
  &:focus {
    border: 3px solid ${({ $borderColor }) => $borderColor || "gray"};
  }
  &:active {
    border: 3px solid ${({ $borderColor }) => $borderColor || "transparent"};
  }
  &:disabled {
    cursor: none;
    opacity: 0.67;
    background: lightgray;
    color: gray;
  }
`;
