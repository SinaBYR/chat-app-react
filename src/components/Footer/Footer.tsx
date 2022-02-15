import styled from 'styled-components'

const Wrapper = styled.footer`
  color: ${({ theme }) => theme.colors.orange};
  /* border: 1px solid red; */
  padding: 1rem;
  margin-top: auto;
  text-align: center;
`

export function Footer() {
  return (
    <Wrapper>
      <p>Designed and developed by Sina Beyraghdar &copy; {new Date().getFullYear()}</p>
    </Wrapper>
  )
}