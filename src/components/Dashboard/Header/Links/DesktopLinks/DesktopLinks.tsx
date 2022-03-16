import styled from 'styled-components'
import { Button } from '../../../../utilities'

const UnorderedList = styled.ul`
  display: flex;
  /* background-color: purple; */
  width: 500px;
  list-style: none;
  justify-content: end;
  margin-left: auto;

  @media (max-width: 30em) {
    display: none;
  }
`

const ListItem = styled.li`
  margin-right: 1rem;
`

export function DesktopLinks() {
  return (
    <UnorderedList>
      <ListItem>
        <Button bgColor="black" foreColor="orange">Create</Button>
      </ListItem>
      <ListItem>
        <Button bgColor="black" foreColor="orange">Channels</Button>
      </ListItem>
    </UnorderedList>
  )
}