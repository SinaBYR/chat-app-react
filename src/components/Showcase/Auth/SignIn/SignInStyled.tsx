import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    transform: translateX(10px);
  }
  to {
    transform: translateX(0);
  }
`

export const Form = styled.form`
  display: block;
  animation: ${animation} 350ms;
`

export const Heading = styled.h2`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1.5rem;
  text-align: center;
`