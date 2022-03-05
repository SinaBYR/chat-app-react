import styled from 'styled-components'
import { DesktopLinks } from './Links/DesktopLinks'
import { User } from './User/User'
import { Logo } from './Logo/Logo'
import { useState } from 'react'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({theme}) => theme.colors.black};
  padding: 0 1rem;
`

export function Header() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <Logo />
      <DesktopLinks />
      <User extended={isUserDropdownOpen} toggleDropdown={() => setIsUserDropdownOpen(!isUserDropdownOpen)}/>
    </Wrapper>
  )
}