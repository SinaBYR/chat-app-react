import styled, { keyframes } from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { IoCreateOutline } from 'react-icons/io5'
import { MdTravelExplore, MdLogout } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

const Animation = keyframes`
  from {
    transform: translateX(250px);
  }
  to {
    transform: translateX(0);
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${Animation} 400ms ease-in-out forwards;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  height: 40%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
`

const UserIcon = styled(FaUserCircle)`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Username = styled.h4``

const Main = styled.main`
  height: 100%;
  width: 100%;
`

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  padding: 1.5rem 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  background-color: unset;
  color: ${({ theme }) => theme.colors.orange};
  background-color: #15171a;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  text-align: left;
  
  &:active {
    background-color: #1f2227;
  }
`

const CreateIcon = styled(IoCreateOutline)`
  margin-right: 0.5rem;
`

const ExploreIcon = styled(MdTravelExplore)`
  margin-right: 0.5rem;
`

const ProfileIcon = styled(CgProfile)`
  margin-right: 0.5rem;
`

const LogoutIcon = styled(MdLogout)`
  margin-right: 0.5rem;
`

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.8rem;
  padding-bottom: 1rem;
  margin-top: auto;
  text-align: center;
`

export function Sidedrawer() {
  return (
    <Wrapper>
      <Header>
        <UserIcon />
        <Username>ThisIsKingdomeCome</Username>
      </Header>
      <Main>
        <Button><CreateIcon /> Create</Button>
        <Button><ExploreIcon /> Explore channels</Button>
        <Button><ProfileIcon /> Profile</Button>
        <Button style={{backgroundColor: '#ff3232', color: 'white'}}><LogoutIcon /> Logout</Button>

      </Main>
      <Footer>
        Designed and developed by Sina Beyraghdar &copy; {new Date().getFullYear()}
      </Footer>
    </Wrapper>
  )
}