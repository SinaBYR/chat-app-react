import styled from 'styled-components'
import { Button } from '../../utilities'
import { Logo } from '../Header/Logo/Logo'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.75);
  z-index: 2;
`

const StepOne = styled.div`
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
`

const Heading = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  line-height: 1.4;
`

export function GuideTour() {
  return (
    <Wrapper>
      <StepOne>
        <Heading>Welcome to the Chat App</Heading>
        {/* <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi natus similique minima doloribus voluptatum? Ad optio quo voluptate fugit quas perspiciatis!</Paragraph> */}
        <Paragraph>Hello there :) If you want to learn how this app works, consider taking this quick guide tour which important sections of the Chat App is explained and taught.</Paragraph>
        <Button bgColor="black" foreColor="orange">Take the tour</Button>
      </StepOne>
    </Wrapper>
  )
}