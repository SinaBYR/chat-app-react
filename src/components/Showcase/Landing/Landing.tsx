import styled, { keyframes } from "styled-components"
import { BsFillChatRightDotsFill, BsChatLeftQuoteFill } from 'react-icons/bs'

const vibration = keyframes`
  from {
    transform: translateY(-10px)
  }

  to {
    transform: translateY(10px)
  }
`

const Wrapper = styled.section`
  position: relative;
  display: flex;
  animation: ${vibration} 2000ms alternate ease-in-out infinite;
`

const ChatLogo = styled(BsChatLeftQuoteFill)`
  width: 180px;
  height: 180px;
`

const TextWrapper = styled.div`
  margin-left: 36px;
`

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 8px;
`

const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
`

export function Landing() {
  return (
    <Wrapper>
      <ChatLogo />
      <TextWrapper>
        <Heading>Chat App</Heading>
        <Paragraph>Hang out with your friends.</Paragraph>
        <Paragraph>Join public channels, or create your own.</Paragraph>
      </TextWrapper>
    </Wrapper>
  )
}