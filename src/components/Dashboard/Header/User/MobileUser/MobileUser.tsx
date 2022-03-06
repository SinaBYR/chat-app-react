import { BsPersonSquare } from 'react-icons/bs'
import styled from 'styled-components'

const Wrapper = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  z-index: 1;
`

const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  font-size: 8rem;
  margin-left: 4px;
` 
interface Props {
  extended: boolean
  toggleDropdown: () => void
}

export function MobileUser() {
  return (
    <Wrapper>
      <PersonIcon />
    </Wrapper>
  )
}