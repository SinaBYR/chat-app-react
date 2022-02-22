import styled from 'styled-components'
import { Feed } from './Feed/Feed'
import { Header } from './Header/Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export function Dashboard() {
  return (
    <Wrapper>
      <Header />
      {/* <Feed /> */}
    </Wrapper>
  )
}