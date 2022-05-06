import { useContext } from 'react'
import styled from 'styled-components'
import { AppState } from '../../store/app/types'
import { State, StateContext } from '../../store/context'
import { DesktopChannels } from './Channels/DesktopChannels/DesktopChannels'
import { Feed } from './Feed/Feed'
import { GuideTour } from './GuideTour/GuideTour'
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
  const { app } = useContext(StateContext) as State

  return (
    <Wrapper>
      <Header />
      <DesktopChannels />
      {/* <Feed /> */}
      {app.firstTime && <GuideTour />}
    </Wrapper>
  )
}