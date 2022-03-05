import styled, { css } from 'styled-components'
import { BsPersonSquare } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '../../../utilities'
import { MobileLinks } from '../Links/MobileLinks'
import { DesktopLinks } from '../Links/DesktopLinks'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  z-index: 1;
`

const Upper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
  padding: 4px;
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 30em) {
    width: auto;
  }
`

const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`

const Heading = styled.h3``

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  margin-left: auto;
  font-size: 24px;
`

const Lower = styled.div`
  position: absolute;
  top: 95%;
  left: 0;
  width: calc(100% - 16px);
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 1rem;
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function User({ extended, toggleDropdown } : Props) {
  return (
    <Wrapper>
      <Upper onClick={toggleDropdown}>
        <PersonIcon />
        <Heading>Username</Heading>
        <ArrowDownIcon />
      </Upper>
      {
        extended && (
        <Lower>
          <MobileLinks />
          <Button style={{border: '1px solid #1A1C20'}} bgColor="orange" foreColor="black" fullWidth>Profile</Button>
          <Button bgColor="red" foreColor="white" fullWidth>Logout</Button>
        </Lower>
        )
      }
    </Wrapper>
  )
}