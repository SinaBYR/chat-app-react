import styled from 'styled-components'
import { Button } from '../../../../utilities'

const Wrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 32px;
  width: 250px;
  height: 46px;
  border: 2px solid white;
  border-radius: 4px;
`

const StepFourLine = styled.div`
  position: absolute;
  top: 42px;
  left: 42px;
  width: 2px;
  height: 200px;
  background-color: white;
`

const StepFourLineTwo = styled.div`
  position: absolute;
  top: 240px;
  left: -156px;
  width: 200px;
  height: 2px;
  background-color: white;
`

const StepFourContent = styled.div`
  position: absolute;
  top: 200px;
  right: 150%;
  width: 400px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

interface Props {
  next: () => void
}

export function StepFour({ next }: Props) {
  return (
    <Wrapper>
      <StepFourLine />
      <StepFourLineTwo />
      <StepFourContent>
        <h3>See your profile here and update your account's information.</h3>
        <Button
          bgColor="black"
          foreColor="white"
          style={{ marginLeft: 'auto'}}
          onClick={next}>Next</Button>
      </StepFourContent>
    </Wrapper>
  )
}