import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  background-color: red;
  /* width: 100vw; */
`

export function Feed() {
  return (
    <Wrapper>
      <h1>Welcome</h1>
    </Wrapper>
  )
}