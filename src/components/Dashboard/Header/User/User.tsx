import { ArrowDownIcon, ArrowUpIcon, Lower, PersonIcon, Upper, Username, Wrapper } from './UserStyled'
import { Button } from '../../../utilities'
import { MobileLinks } from '../Links/MobileLinks'

interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function User({ extended, toggleDropdown } : Props) {
  return (
    <Wrapper>
      <Upper onClick={toggleDropdown}>
        <PersonIcon />
        <Username>ThisIsTheKingdomCome</Username>
        {extended ? <ArrowUpIcon /> : <ArrowDownIcon />}
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