import { ArrowDownIcon, ArrowUpIcon, Lower, PersonIcon, Upper, Username, Wrapper } from './DesktopUserStyled'
import { Button } from '../../../../utilities'
import { supabase } from '../../../../../supabase/supabase'
import { useContext } from 'react'
import { DispatchContext, InitialState, StateContext } from '../../../../../store/context'

interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function DesktopUser({ extended, toggleDropdown } : Props) {
  const { auth } = useContext(StateContext) as InitialState
  const dispatch = useContext(DispatchContext)

  async function signoutHandler() {
    try {
      await supabase.auth.signOut()
      dispatch({ type: 'SIGN_OUT' })
    } catch(err) {
      console.log(err)
    }
  }

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
          <Button bgColor="red" foreColor="white" fullWidth onClick={signoutHandler}>Logout</Button>
        </Lower>
        )
      }
    </Wrapper>
  )
}