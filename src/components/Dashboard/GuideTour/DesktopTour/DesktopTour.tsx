import styled from 'styled-components'
import { StepOne,  } from './StepOne/StepOne'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.75);
  z-index: 2;

  @media (max-width: 30em) {
    display: none;
  }
`

export function DesktopTour() {
  return (
    <Wrapper>
      <StepOne />
    </Wrapper>
  )
}