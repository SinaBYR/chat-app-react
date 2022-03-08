import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  z-index: 1;
  /* border: 1px solid ${({ theme }) => theme.colors.black}; */
  /* padding: 1rem; */
  background-color: ${({ theme }) => theme.colors.black};
  /* color: ${({ theme }) => theme.colors.orange}; */
  /* box-shadow: 0 0 8px 4px #15171a; */
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
`

const UserIcon = styled(FaUserCircle)`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Username = styled.h4``

const Main = styled.main`
  
`

const Footer = styled.footer`
  
`

export function Sidedrawer() {
  return (
    <Wrapper>
      <Header>
        <UserIcon />
        <Username>ThisIsKingdomeCome</Username>
      </Header>
      <Main>

      </Main>
    </Wrapper>
  )
}