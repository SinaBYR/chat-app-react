import { Wrapper } from './DesktopChannelsStyled';
import { HTwo } from '../../../utilities';
import { ChannelsList } from '../ChannelsList/ChannelsList';

export function DesktopChannels() {
  return (
    <Wrapper>
      <HTwo>Channels</HTwo>
      <ChannelsList />
    </Wrapper>
  )
}