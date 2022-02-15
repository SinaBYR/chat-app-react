import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 400px;
  padding: 1rem;
  box-shadow: 0 0 16px #0f0f11;
  border-radius: 5px;
  
  @media (max-width: 30em) {
    width: 95%;
    height: 80vh;
    margin: 1rem;
  }
  
  @media (orientation: landscape) and (max-height: 30em) {
    margin-bottom: 1rem;
  }
`

export const Break = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  margin: 2rem 0;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 5%;
    background-color: ${(props) => props.theme.colors.orange};
    z-index: -1;
  }

  &::after {
    content: 'or';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.orange};
    background-color: ${(props) => props.theme.colors.black};
    padding: 16px;
    font-size: 1.5rem;
  }
`

export const Footer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1rem;
  text-align: center;

  & button {
    color: ${({ theme }) => theme.colors.orange};
    background-color: unset;
    font-size: 1rem;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
`