import styled from 'styled-components'

const Wrapper = styled.footer`
  color: ${({ theme }) => theme.colors.orange};
  padding-bottom: 1rem;
  text-align: center;
  margin-top: auto;

  @media (max-width: 30em) {
    display: none;
  }
`

export function Footer() {
  return (
    <Wrapper>
      <p>Designed and developed by Sina Beyraghdar &copy; {new Date().getFullYear()}</p>
    </Wrapper>
  )
}