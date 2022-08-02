import * as React from "react"
import styled, { css } from "styled-components"

type StyledProps = {
  bgColor: 'orange' | 'black' | 'white' | 'red';
  foreColor: 'orange' | 'black' | 'white';
  fullWidth?: boolean
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyledProps

const ButtonStyled = styled.button<StyledProps>`
  display: block;
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  color: ${({theme, foreColor}) => theme.colors[foreColor]};
  background-color: ${({theme, bgColor}) => theme.colors[bgColor]};
  font-size: 1rem;
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    opacity: 0.6;
  }
`

export const Button = ({ children, ...props } : ButtonProps) => <ButtonStyled {...props}>{children}</ButtonStyled>