import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  width: 580px;
  /* height: 300px; */
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: #ffeeee;
  padding: 1rem;
  padding-bottom: 2rem;
  box-shadow: 0 0 4px 4px black;
  text-align: center;
  border-radius: 4px;
`

const SuccessIcon = styled(AiFillCheckCircle)`
  font-size: 3rem;
  margin: 0 auto;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  line-height: 1.4;
`

export function StepFive() {
  return (
    <Wrapper>
      <SuccessIcon />
      <Heading>Thank you for your time!</Heading>
      <Paragraph>We hope the guide tour was helpful. You can find answers to the questions we get asked the most here. If you have any other question, feel free to ask us in the Help section.</Paragraph>
    </Wrapper>
  )
}