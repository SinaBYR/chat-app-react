import styled from 'styled-components'
import { Button } from '../../../../utilities'

const ExploreChannels = styled.div`
  position: absolute;
  top: 32px;
  right: 310px;
  width: 108px;
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
`

const ExploreChannelsLine = styled.div`
  position: absolute;
  top: 36px;
  left: 50px;
  width: 2px;
  height: 366px;
  background-color: white;
`

const ExploreChannelsLineTwo = styled.div`
  position: absolute;
  top: 400px;
  left: -200px;
  width: 250px;
  height: 2px;
  background-color: white;
`

const ExploreChannelsContent = styled.div`
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

const Create = styled.div`
  position: absolute;
  top: 32px;
  right: 425px;
  width: 90px;
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
  `

const CreateLine = styled.div`
  position: absolute;
  top: 36px;
  left: 42px;
  width: 2px;
  height: 200px;
  background-color: white;
`
const CreateLineTwo = styled.div`
  position: absolute;
  top: 234px;
  left: -156px;
  width: 200px;
  height: 2px;
  background-color: white;
`

const CreateContent = styled.div`
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

interface Props {
  next: () => void
}

export function StepTwo({ next }: Props) {
  return (
    <>
      <ExploreChannels>
        <ExploreChannelsLine />
        <ExploreChannelsLineTwo />
        <ExploreChannelsContent>
          <h3>Explore already existed open-to-join channels and meet new people.</h3>
          <Button
            bgColor="black"
            foreColor="white"
            style={{ marginLeft: 'auto'}}
            onClick={next}>Next</Button>
        </ExploreChannelsContent>
      </ExploreChannels>

      <Create>
        <CreateLine />
        <CreateLineTwo />
        <CreateContent>
          <h3>Create your own channels and invite people to join.</h3>
        </CreateContent>
      </Create>
    </>
  )
}