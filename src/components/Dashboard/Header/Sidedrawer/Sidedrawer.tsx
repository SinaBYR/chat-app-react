import { useContext } from "react";
import { DispatchContext, InitialState, StateContext } from "../../../../store/context";
import { supabase } from "../../../../supabase/supabase";
import { Header, Button, CreateIcon, ExploreIcon, Footer, Main, ProfileIcon, UserIcon, Username, Wrapper, LogoutIcon } from "./SidedrawerStyled";

export function Sidedrawer() {
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
      <Header>
        <UserIcon />
        <Username>ThisIsKingdomeCome</Username>
      </Header>
      <Main>
        <Button><CreateIcon /> Create</Button>
        <Button><ExploreIcon /> Explore channels</Button>
        <Button><ProfileIcon /> Profile</Button>
        <Button style={{backgroundColor: '#ff3232', color: 'white'}} onClick={signoutHandler}><LogoutIcon /> Logout</Button>
      </Main>
      <Footer>
        Designed and developed by Sina Beyraghdar &copy; {new Date().getFullYear()}
      </Footer>
    </Wrapper>
  )
}