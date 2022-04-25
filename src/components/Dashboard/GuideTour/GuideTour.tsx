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
  border-radius: 4px;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  line-height: 1.4;
`
// step 2
const StepTwoExploreChannels = styled.div`
  position: absolute;
  top: 32px;
  right: 310px;
  /* bottom: 16px; */
  width: 108px;
  /* height: calc(100% - 118px); */
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
`

const StepTwoExploreChannelsLine = styled.div`
  position: absolute;
  top: 36px;
  left: 50px;
  width: 2px;
  height: 366px;
  background-color: white;
`

const StepTwoExploreChannelsLineTwo = styled.div`
  position: absolute;
  top: 400px;
  left: -200px;
  width: 250px;
  height: 2px;
  background-color: white;
`

const StepTwoExploreChannelsContent = styled.div`
  position: absolute;
  top: 360px;
  right: 292%;
  width: 400px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

const StepTwoCreate = styled.div`
  position: absolute;
  top: 32px;
  right: 425px;
  width: 90px;
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
  `

const StepTwoCreateLine = styled.div`
  position: absolute;
  top: 36px;
  left: 42px;
  width: 2px;
  height: 200px;
  background-color: white;
`
const StepTwoCreateLineTwo = styled.div`
  position: absolute;
  top: 234px;
  left: -156px;
  width: 200px;
  height: 2px;
  background-color: white;
`

const StepTwoCreateContent = styled.div`
  position: absolute;
  top: 190px;
  right: 220%;
  width: 400px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

const StepThree = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 300px;
  height: calc(100% - 118px);
  border: 2px solid white;
  border-radius: 4px;
`

const StepThreeLine = styled.div`
  position: absolute;
  top: 200px;
  left: 100%;
  width: 200px;
  height: 2px;
  background-color: white;
`

const StepThreeContent = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% + 200px);
  width: 400px;
  /* height: 200px; */
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

const StepFour = styled.div`
  position: absolute;
  top: 28px;
  right: 32px;
  width: 250px;
  height: 46px;
  border: 2px solid white;
  border-radius: 4px;
`

const StepFourLine = styled.div`
  position: absolute;
  top: 42px;
  left: 42px;
  width: 2px;
  height: 200px;
  background-color: white;
`

const StepFourLineTwo = styled.div`
  position: absolute;
  top: 240px;
  left: -156px;
  width: 200px;
  height: 2px;
  background-color: white;
`

const StepFourContent = styled.div`
  position: absolute;
  top: 200px;
  right: 150%;
  width: 400px;
  /* height: 00px; */
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 4px 4px black;
  border-radius: 4px;
  line-height: 1.4;
`

export function GuideTour() {
  return (
    <Wrapper>
      {/* <StepOne>
        <Heading>Welcome to the Chat App</Heading>
        <Paragraph>Hello there :) If you want to learn how this app works, consider taking this quick guide tour which important sections of the Chat App is explained and taught.</Paragraph>
        <Button bgColor="black" foreColor="orange">Take the tour</Button>
      </StepOne> */}

      {/* <StepTwoExploreChannels>
        <StepTwoExploreChannelsLine />
        <StepTwoExploreChannelsLineTwo />
        <StepTwoExploreChannelsContent>
          <h3>Explore already existed open-to-join channels and meet new people.</h3>
        </StepTwoExploreChannelsContent>
      </StepTwoExploreChannels>

      <StepTwoCreate>
        <StepTwoCreateLine />
        <StepTwoCreateLineTwo />
        <StepTwoCreateContent>
          <h3>Create your own channels and invite people to join.</h3>
        </StepTwoCreateContent>
      </StepTwoCreate> */}

      {/* <StepThree>
        <StepThreeLine />
        <StepThreeContent>
          <h3>Channels you've joined will appear here. Hang out and spend your time with the people you want by selecting a channel.</h3>
          <h2></h2>
        </StepThreeContent>
      </StepThree> */}

      <StepFour>
        <StepFourLine />
        <StepFourLineTwo />
        <StepFourContent>
          <h3>See your profile here and update your account's information.</h3>
        </StepFourContent>
      </StepFour>
    </Wrapper>
  )
}