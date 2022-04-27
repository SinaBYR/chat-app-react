import styled from 'styled-components'

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

export function StepTwo() {
  return (
    <>
      <StepTwoExploreChannels>
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
      </StepTwoCreate>
    </>
  )
}