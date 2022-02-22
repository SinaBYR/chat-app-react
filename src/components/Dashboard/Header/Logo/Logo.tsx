import styled from 'styled-components'
import { BsChatLeftQuoteFill } from 'react-icons/bs'

const Heading = styled.div`
  display: flex;
  
  @media (max-width: 30em) {
    align-items: center;

    & > h1 {
      font-size: 1.2rem;
    }
  }
`

const ChatSVG = styled(BsChatLeftQuoteFill)`
  width: 40px;
  height: 35px;
  margin-top: 5px;
`

export function Logo() {
  return (
    <Heading>
      <ChatSVG />
      <h1>Chat App</h1>
    </Heading>
  )
}