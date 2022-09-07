import styled from 'styled-components';
import { useState } from 'react';
import { Message } from './Message/Message';

const Wrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 332px;
  width: calc(100% - 348px);
  height: calc(100% - 118px);
  color: ${({ theme }) => theme.colors.white};
  background-color: #15171a;
  padding: 1rem;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  color: black;
  background-color: #15171a;
  /* background: url('/img/paper.jpg') center center/cover; */
  padding: 1rem;
  overflow-y: auto;
`;

const InputBox = styled.textarea`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  color: gray;
  /* background-color: black; */
  padding: 1rem;
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
`;

export function Chat() {
  const [chats, setChats] = useState<any[]>([
    'HelloHow are ya?How are ya?How are ya?How are ya?How are ya?How are ya?How are',
    'How are ya?\n\nthank you!',
    'sajhd\nJDjs'
  ]);
  const [message, setMessage] = useState<string>('');

  return (
    <Wrapper>
      <ChatBox>
        {chats.map((msg, i) => (
          <Message key={i} text={msg} me={false}/>
        ))}
        <Message text="Hello everybody!" me={true} />
      </ChatBox>
      <InputBox
        value={message}
        onKeyPress={(e) => {
          if(e.code === 'Enter' && e.ctrlKey) {
            const newChats = [...chats];
            newChats.push(message.replace(/^\s+/, '').replace(/\s+$/, ''));
            setChats(newChats);
            setMessage('');
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          // console.log(e.target.innerText);
          setMessage(e.target.value);
        }}/>
    </Wrapper>
  );
}