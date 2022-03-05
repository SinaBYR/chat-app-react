import styled from 'styled-components'
import { Button } from '../../../utilities'

const Wrapper = styled.div`
  display: none;
  width: 100%;

  & > *:first-child {
    margin-bottom: 1rem;
  }

  @media (max-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export function MobileLinks() {
  return (
    <Wrapper>
      <Button bgColor="orange" style={{border: '1px solid #1A1C20'}} foreColor="black" fullWidth>Create</Button>
      <Button bgColor="orange" style={{border: '1px solid #1A1C20'}} foreColor="black" fullWidth>Channels</Button>
    </Wrapper>
  )
}