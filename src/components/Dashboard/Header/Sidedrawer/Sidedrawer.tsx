import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  z-index: 1;
  /* border: 1px solid red; */
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.orange};
  box-shadow: 0 0 8px 4px #15171a;
`

const Header = styled.header`
  
`

const Main = styled.main`
  
`

const Footer = styled.footer`
  
`

export function Sidedrawer() {
  return (
    <Wrapper>
      <Header>

      </Header>
      <Main>

      </Main>
    </Wrapper>
  )
}