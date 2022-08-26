import styled from 'styled-components';
import { useChannels } from '../../../../hooks/useChannels';
import { Link, Spinner } from '../../../utilities';

const Items = styled.div`
  height: calc(100% - 48px);
  overflow-y: auto;
  padding-right: 0.75rem;

  &::-webkit-scrollbar {
    width: 0.25em;
    height: 0.5em;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);

    &:hover {
      background: rgba(255,255,255,0.3);
    }
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

export function ChannelsList() {
  const { channels, loading} = useChannels();

  if(loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}><Spinner /></div>;
  };

  return (
    <Items>
      {channels?.map(({ id, name }) => {
        return (
          <Link
            style={{
              backgroundColor: '#222b38',
              textAlign: 'left',
              overflowX: 'hidden'
            }}
            $navLink
            $foreColor="orange"
            to={"/" + id}
            key={id}
            data-channel={id}>{name}</Link>
        )
      })}
    </Items>
  )
}