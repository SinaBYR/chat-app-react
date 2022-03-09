import { Header, Button, CreateIcon, ExploreIcon, Footer, Main, ProfileIcon, UserIcon, Username, Wrapper, LogoutIcon } from "./SidedrawerStyled";

export function Sidedrawer() {
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
        <Button style={{backgroundColor: '#ff3232', color: 'white'}}><LogoutIcon /> Logout</Button>
      </Main>
      <Footer>
        Designed and developed by Sina Beyraghdar &copy; {new Date().getFullYear()}
      </Footer>
    </Wrapper>
  )
}