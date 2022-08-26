import styled from 'styled-components';
import { HTwo } from '../../../utilities';
import { ChannelsList } from '../ChannelsList/ChannelsList';


const Wrapper = styled.aside`
  display: none;
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 118px);
  background-color: #15171a;
  padding: 1rem;
  padding-right: 0.25rem;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export function MobileChannels() {
  console.log('Logged from [MobileChannels.tsx]');
  return (
    <Wrapper>
      <HTwo>Channels</HTwo>
      <ChannelsList />
    </Wrapper>
  )
}