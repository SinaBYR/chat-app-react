import styled from 'styled-components'
import { BsPersonSquare } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.black}; */
  /* color: ${({ theme }) => theme.colors.orange}; */
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 4px;
  border-radius: 4px;
  width: 250px;
  height: 65%;
  margin-left: 16px;
  cursor: pointer;

  @media (max-width: 30em) {
    width: auto;
  }
`

const PersonIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`

const Heading = styled.h3``

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  margin-left: auto;
  font-size: 24px;
`

export function User() {
  return (
    <Wrapper>
      <PersonIcon />
      <Heading>Username</Heading>
      <ArrowDownIcon />
    </Wrapper>
  )
}