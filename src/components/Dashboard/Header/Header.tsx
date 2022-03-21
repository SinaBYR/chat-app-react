import styled from 'styled-components'
import { useState } from 'react'
import { Links } from './Links/Links'
import { DesktopUser } from './User/DesktopUser/DesktopUser'
import { Logo } from './Logo/Logo'
import { MobileUser } from './User/MobileUser/MobileUser'
import { Sidedrawer } from './Sidedrawer/Sidedrawer'
import { Backdrop } from '../../utilities/Backdrop/Backdrop'

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
  const [isDesktopUserExtended, setIsDesktopUserExtended] = useState<boolean>(false)
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState<boolean>(false)

  return (
    <Wrapper>
      <Logo />
      <Links />
      <DesktopUser extended={isDesktopUserExtended} toggleDropdown={() => setIsDesktopUserExtended(!isDesktopUserExtended)} />
      <MobileUser openSidedrawer={() => setIsSidedrawerOpen(true)}/>
      {
        isSidedrawerOpen && (
          <>
            <Sidedrawer />
            <Backdrop onClose={() => setIsSidedrawerOpen(false)} />
          </>
        )
      }
    </Wrapper>
  )
}