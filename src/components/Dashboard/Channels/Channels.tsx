import styled from 'styled-components'
import React, { useState } from 'react'

const Wrapper = styled.aside`
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 300px;
  height: calc(100% - 118px);
  background-color: #15171a;
  padding: 1rem;
`

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Items = styled.div`
  height: calc(100% - 48px);
  overflow-y: auto;
  padding-right: 4px;

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
`

const ButtonStyled = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.orange};
  background-color: #222b38;
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export function Channels() {
  const [channel, setChannel] = useState<string>('')
  const channelsArr = ['Family', 'Work', 'Personal channel']

  function channelSetHandler(e: React.MouseEvent<HTMLElement>) {
    // setChannel()
    console.log(e.currentTarget.dataset)
  }

  return (
    <Wrapper>
      <Heading>Channels</Heading>
      <Items>
        {channelsArr.map(channel => (
          <ButtonStyled onClick={channelSetHandler} data-channel={channel}>{channel}</ButtonStyled>
        ))}
      </Items>
    </Wrapper>
  )
}