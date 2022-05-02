import styled from 'styled-components'
import { Button } from '../../../../utilities'

const Wrapper = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 300px;
  height: calc(100% - 118px);
  border: 2px solid white;
  border-radius: 4px;
`

const StepThreeLine = styled.div`
  position: absolute;
  top: 200px;
  left: 100%;
  width: 200px;
  height: 2px;
  background-color: white;
`

const StepThreeContent = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% + 200px);
  width: 370px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

interface Props {
  next: () => void
}

export function StepThree({ next }: Props) {
  return (
    <Wrapper>
      <StepThreeLine />
      <StepThreeContent>
        <h3>Once you created a channel or joined one, it will appear here. Hang out and spend your time with the people you want by selecting a channel.</h3>
        <Button
          bgColor="black"
          foreColor="white"
          style={{ marginLeft: 'auto'}}
          onClick={next}>Next</Button>
      </StepThreeContent>
    </Wrapper>
  )
}