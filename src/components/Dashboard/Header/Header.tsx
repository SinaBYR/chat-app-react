import styled from 'styled-components'
import { BsChatLeftQuoteFill, BsPersonSquare } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '../../utilities'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({theme}) => theme.colors.black};
  width: 100%;
  height: 70px;
  padding: 0 1rem;
`

const Heading = styled.div`
  display: flex;
  /* align-items: center; */
  /* border: 5px solid purple; */
`

const ChatLogo = styled(BsChatLeftQuoteFill)`
  width: 40px;
  height: 35px;
  margin-top: 5px;
`

const User = styled.div`
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
`

const UserIcon = styled(BsPersonSquare)`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  margin-left: auto;
  /* height: 30px; */
  font-size: 24px;
  /* width: 30px; */
  /* background-color: red; */
`

const Links = styled.ul`
  display: flex;
  /* background-color: purple; */
  width: 500px;
  list-style: none;
  justify-content: end;
  margin-left: auto;

  & > li {
    margin-right: 1rem;
  }
`

export function Header() {
  return (
    <Wrapper>
      <Heading>
        <ChatLogo />
        <h1>Chat App</h1>
      </Heading>

      <Links>
        <li>
          <Button bgColor="black" foreColor="orange">Create</Button>
        </li>
        <li>
          <Button bgColor="black" foreColor="orange">Channels</Button>
        </li>
      </Links>

      <User>
        <UserIcon />
        <h3>Username</h3>
        <ArrowDownIcon />
      </User>
    </Wrapper>
  )
}