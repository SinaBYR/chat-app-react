import styled from 'styled-components'
import { Button } from '../../../utilities'

const Wrapper = styled.ul`
  display: none;
  /* background-color: purple; */
  width: 500px;
  list-style: none;
  justify-content: end;
  margin-left: auto;

  & > li {
    margin-right: 1rem;
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
      <li>
        <Button bgColor="black" foreColor="orange">Create</Button>
      </li>
      <li>
        <Button bgColor="black" foreColor="orange">Channels</Button>
      </li>
    </Wrapper>
  )
}