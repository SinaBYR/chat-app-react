import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
  z-index: 0;
`

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  display: block;
  color: #515866;
  transition: all 400ms;
  z-index: 1;
  pointer-events: none;
`

const InputStyled = styled.input<{ fullWidth?: boolean }>`
  display: block;
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  font-size: 1.3rem;
  padding: 0.5rem 0.75rem;
  background-color: #f7f7f7;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: none;
  transition: margin-top 400ms;

  &:focus, :not(&:placeholder-shown) {
    margin-top: 0.5rem;
  }

  :is(&:focus, :not(&:placeholder-shown)) + ${Label} {
    top: -16px;
    left: 0;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.9rem;
  }
`

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  fullWidth?: boolean;
}

export function Input({ label, name, fullWidth, ...rest }: InputProps) {
  return (
    <Wrapper>
      <InputStyled fullWidth={fullWidth} id={name} {...rest}/>
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  )
}