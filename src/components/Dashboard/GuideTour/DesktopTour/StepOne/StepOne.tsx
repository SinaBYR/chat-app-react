import styled from 'styled-components'
import { Button } from '../../../../utilities'
import { IoMdClose } from 'react-icons/io'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 600px;
  height: 300px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: #ffeeee;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  text-align: center;
  border-radius: 4px;
  z-index: 2;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  line-height: 1.4;
`

const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
  
  &:focus {
    outline: 1px solid black;
  }
`

const CloseWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface Props {
  next: () => void
}

export function StepOne({ next }: Props) {
  function closeTourHandler(e: React.MouseEvent<HTMLElement>) {
    console.log(e.currentTarget.tagName)
  }

  return (
    <CloseWrapper onClick={closeTourHandler}>
      <Wrapper>
          <CloseIcon role="button" tabIndex={1} />
          <Heading>Welcome to the Chat App</Heading>
          <Paragraph>Thank you for choosing us. This is a quick guide tour, in which we'll walk you through every section of the Chat App. You'll learn about core features that our app offers, and how to use them.</Paragraph>
          <Button onClick={next} bgColor="black" foreColor="orange" tabIndex={2}>Take the tour</Button>
      </Wrapper>
    </CloseWrapper>
  )
}