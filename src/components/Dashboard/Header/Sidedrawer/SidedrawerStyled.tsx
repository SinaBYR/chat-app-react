import styled, { keyframes } from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { IoCreateOutline } from 'react-icons/io5'
import { MdTravelExplore, MdLogout } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

export const Animation = keyframes`
  from {
    transform: translateX(250px);
  }
  to {
    transform: translateX(0);
  }
`

export const Wrapper = styled.div`
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  height: 40%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
`

export const UserIcon = styled(FaUserCircle)`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Username = styled.h4``

export const Main = styled.main`
  height: 100%;
  width: 100%;
`

export const Button = styled.button`
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

export const CreateIcon = styled(IoCreateOutline)`
  margin-right: 0.5rem;
`

export const ExploreIcon = styled(MdTravelExplore)`
  margin-right: 0.5rem;
`

export const ProfileIcon = styled(CgProfile)`
  margin-right: 0.5rem;
`

export const LogoutIcon = styled(MdLogout)`
  margin-right: 0.5rem;
`

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.8rem;
  padding-bottom: 1rem;
  margin-top: auto;
  text-align: center;
`