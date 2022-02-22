import styled from 'styled-components'
import { Button } from '../../../utilities'

const Links = styled.ul`
  display: flex;
  /* background-color: purple; */
  width: 500px;
  list-style: none;
  justify-content: end;
  margin-left: auto;

  & > li {
    margin-right: 1rem;
  }
`

export function DesktopLinks() {
  return (
    <Links>
      <li>
        <Button bgColor="black" foreColor="orange">Create</Button>
      </li>
      <li>
        <Button bgColor="black" foreColor="orange">Channels</Button>
      </li>
    </Links>
  )
}