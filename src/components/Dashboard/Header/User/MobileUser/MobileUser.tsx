import styled from 'styled-components'
import { BsPersonSquare } from 'react-icons/bs'

const Wrapper = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;

  @media (max-width: 30em) {
    display: flex;
  }
`

const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 8rem;
` 

interface Props {
  openSidedrawer: () => void
}

export function MobileUser({ openSidedrawer }: Props) {
  return (
    <Wrapper onClick={openSidedrawer}>
      <PersonIcon />
    </Wrapper>
  )
}