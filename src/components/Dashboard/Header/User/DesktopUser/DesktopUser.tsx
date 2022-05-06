import { ArrowDownIcon, ArrowUpIcon, Lower, PersonIcon, Upper, Username, Wrapper } from './DesktopUserStyled'
import { Button } from '../../../../utilities'
import { supabase } from '../../../../../supabase/supabase'
import { useContext, useEffect } from 'react'
import { DispatchContext, State, StateContext } from '../../../../../store/context'

interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function DesktopUser({ extended, toggleDropdown } : Props) {
  const { auth } = useContext(StateContext) as State
  const dispatch = useContext(DispatchContext)

  async function signoutHandler() {
    try {
      await supabase.auth.signOut()
      dispatch({ type: 'SIGN_OUT' })
    } catch(err) {
      console.log(err)
    }
  }


  const capitalizedUsername = auth.session?.user?.user_metadata.username.slice(0, 1).toUpperCase() + auth.session?.user?.user_metadata.username.slice(1)

  return (
    <Wrapper>
      <Upper onClick={toggleDropdown}>
        <PersonIcon />
        {/* <Username>ThisIsTheKingdomCome</Username> */}
        <Username>{capitalizedUsername}</Username>
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