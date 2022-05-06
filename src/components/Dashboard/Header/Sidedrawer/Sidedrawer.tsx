import { useContext } from "react";
import { DispatchContext, State, StateContext } from "../../../../store/context";
import { supabase } from "../../../../supabase/supabase";
import { Header, Button, CreateIcon, ExploreIcon, Footer, Main, ProfileIcon, UserIcon, Username, Wrapper, LogoutIcon } from "./SidedrawerStyled";

export function Sidedrawer() {
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
      <Header>
        <UserIcon />
        <Username>{capitalizedUsername}</Username>
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