import styled from 'styled-components'
import { StepFive } from './StepFive/StepFive'
import { StepFour } from './StepFour/StepFour'
import { StepOne,  } from './StepOne/StepOne'
import { StepThree } from './StepThree/StepThree'
import { StepTwo } from './StepTwo/StepTwo'

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

interface Props {
  step: 0|1|2|3|4|5
  next: () => void
}

export function DesktopTour({ step, next }: Props) {
  let content

  switch (step) {
    case 0: {
      content = <StepOne next={next}/>
      break
    }
    case 1: {
      content = <StepTwo next={next}/>
      break
    }
    case 2: {
      content = <StepThree next={next}/>
      break
    }
    case 3: {
      content = <StepFour next={next}/>
      break
    }
    case 4: {
      content = <StepFive next={next}/>
      break
    }
    default: {
      content = <StepOne next={next}/>
    }
  }
  
  return <Wrapper>{content}</Wrapper>
}