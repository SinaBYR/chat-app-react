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
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 400ms;

  &:active {
    transform: scale(0.97);
  }
`

export const Button = ({ children, ...props } : ButtonProps) => <ButtonStyled {...props}>{children}</ButtonStyled>