import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div<{fullWidth?: boolean}>`
  width: 400px;
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
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

const Error = styled.p`
  position: absolute;
  right: 0;
  bottom: -59%;
  padding: 0px 10px 4px 10px;
  color: red;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 30px;
  border: 1px solid red;
  border-top: none;
`

const InputStyled = styled.input<{ isError: boolean }>`
  display: block;
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem 0.75rem;
  background-color: #f7f7f7;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: ${({ isError }) => isError ? '1px solid red' : 'none'};
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
  error?: string | null;
}

export function Input({ label, name, error, fullWidth, ...rest }: InputProps) {
  return (
    <Wrapper fullWidth={fullWidth}>
      <InputStyled name={name} id={name} {...rest} isError={error !== null}/>
      <Label htmlFor={name}>{label}</Label>
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}