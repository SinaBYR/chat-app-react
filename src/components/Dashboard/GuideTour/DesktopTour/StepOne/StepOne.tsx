import styled from 'styled-components'
import { Button } from '../../../../utilities'

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
`

const Heading = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  line-height: 1.4;
`

export function StepOne() {
  return (
    <Wrapper>
      <Heading>Welcome to the Chat App</Heading>
      <Paragraph>This is a quick guide tour, in which we'll walk you through every section of the Chat App. You'll learn about core features that our app offers, and how to use them.</Paragraph>
      <Button bgColor="black" foreColor="orange">Take the tour</Button>
    </Wrapper>
  )
}