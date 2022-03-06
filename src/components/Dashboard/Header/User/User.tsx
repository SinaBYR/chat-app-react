import styled from 'styled-components'
import { BsPersonSquare } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '../../../utilities'
import { MobileLinks } from '../Links/MobileLinks'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  z-index: 1;
`

const Upper = styled.button`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange};
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 30em) {
    width: auto;
    width: 200px;
  }
`

const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  font-size: 8rem;
  margin-left: 4px;
`

const Username = styled.h3`
  margin-left: 8px;
  margin-right: auto;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 70%;
`

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  font-size: 24px;
`

const Lower = styled.div`
  position: absolute;
  top: 95%;
  left: 0;
  width: calc(100% - 16px);
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 0.5rem;
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
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
        {/* <Username>ThisIsTheKingdomCome</Username> */}
        <Username>Username</Username>
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