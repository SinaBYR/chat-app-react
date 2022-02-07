import styled from "styled-components"
import { Auth } from "./Auth/Auth"
import { Landing } from "./Landing/Landing"

const Wrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export function Showcase() {
  return (
    <Wrapper>
      <Landing />
      <Auth />
    </Wrapper>
  )
}