import styled from 'styled-components'
import { Button } from '../../../../utilities'

const UnorderedList = styled.ul`
  display: none;
  width: 100%;
  list-style: none;

  & > *:first-child {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 30em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ListItem = styled.li``

export function MobileLinks() {
  return (
    <UnorderedList>
      <ListItem>
        <Button bgColor="orange" style={{border: '1px solid #1A1C20'}} foreColor="black" fullWidth>Create</Button>
      </ListItem>
      <ListItem>
        <Button bgColor="orange" style={{border: '1px solid #1A1C20'}} foreColor="black" fullWidth>Channels</Button>
      </ListItem>
    </UnorderedList>
  )
}