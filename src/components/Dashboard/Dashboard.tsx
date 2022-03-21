import styled from 'styled-components'
import { DesktopChannels } from './Channels/DesktopChannels/DesktopChannels'
import { Feed } from './Feed/Feed'
import { Header } from './Header/Header'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media (max-width: 30em) {
    padding: 0;
  }
`

export function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <DesktopChannels />
      {/* <Feed /> */}
    </Wrapper>
  )
}