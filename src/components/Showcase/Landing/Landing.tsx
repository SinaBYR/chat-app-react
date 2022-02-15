import styled, { keyframes } from "styled-components"
import { BsFillChatRightDotsFill, BsChatLeftQuoteFill, BsChevronDoubleDown } from 'react-icons/bs'

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
  color: ${(props) => props.theme.colors.orange};
  animation: ${vibration} 2000ms alternate ease-in-out infinite;

  @media (max-width: 30em) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    animation: unset;
  }

  @media (orientation: landscape) and (max-height: 30em) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    animation: unset;
  }
`

const ChatLogo = styled(BsChatLeftQuoteFill)`
  width: 180px;
  height: 180px;

  @media (max-width: 30em) {
    width: 100px;
    height: 100px;
    max-width: 100px;
    margin: 0 auto;
  }

  @media (orientation: landscape) and (max-height: 30em) {
    width: 100px;
    height: 100px;
    max-width: 100px;
    margin: 0 auto;
  }
`

const TextWrapper = styled.div`
  margin-left: 36px;

  @media (max-width: 30em) {
    margin-left: 0;
    text-align: center;
  }

  @media (orientation: landscape) and (max-height: 30em) {
    margin-left: 0;
    text-align: center;
  }
`

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 8px;

  @media (max-width: 30em) {
    font-size: 3rem;
  }

  @media (orientation: landscape) and (max-height: 30em) {
    font-size: 3rem;
  }
`

const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
`

const MobileOnlyScrollDownAnimation = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
`

const MobileOnlyScrollDown = styled.div`
  display: none;
  
  @media (max-width: 30em) {
    display: block;
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
    animation: ${MobileOnlyScrollDownAnimation} 3000ms infinite;
  }
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
      <MobileOnlyScrollDown>
        <BsChevronDoubleDown />
      </MobileOnlyScrollDown>
    </Wrapper>
  )
}