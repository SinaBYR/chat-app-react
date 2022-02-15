import styled from "styled-components"
import { Auth } from "./Auth/Auth"
import { Landing } from "./Landing/Landing"

const Wrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: auto;

  @media (max-width: 30em) {
    flex-direction: column;
  }

  @media (orientation: landscape) and (max-height: 30em) {
    flex-direction: column;
  }
`

export function Showcase() {
  return (
    <Wrapper>
      <Landing />
      <Auth />
    </Wrapper>
  )
}