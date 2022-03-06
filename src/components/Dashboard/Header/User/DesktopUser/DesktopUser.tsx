import { ArrowDownIcon, ArrowUpIcon, Lower, PersonIcon, Upper, Username, Wrapper } from './DesktopUserStyled'
import { Button } from '../../../../utilities'

interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function DesktopUser({ extended, toggleDropdown } : Props) {
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
          <Button style={{border: '1px solid #1A1C20'}} bgColor="orange" foreColor="black" fullWidth>Profile</Button>
          <Button bgColor="red" foreColor="white" fullWidth>Logout</Button>
        </Lower>
        )
      }
    </Wrapper>
  )
}