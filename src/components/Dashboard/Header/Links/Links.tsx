import styled from 'styled-components'
import { Link } from '../../../utilities'

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

export function Links() {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="/create" $bgColor="black" $foreColor="orange">Create</Link>
      </ListItem>
      <ListItem>
        <Link to="/" $bgColor="black" $foreColor="orange">Channels</Link>
      </ListItem>
    </UnorderedList>
  )
}