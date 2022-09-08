import { ChatBox, Wrapper } from './ChatStyled';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Message } from './Message/Message';
import { InputBox } from './InputBox/InputBox';

export function Chat() {
  const [chats, setChats] = useState<any[]>([
    'HelloHow are ya?How are ya?How are ya?How are ya?How are ya?How are ya?How are',
    'How are ya?\n\nthank you!',
    'sajhd\nJDjs'
  ]);
  const [message, setMessage] = useState<string>('');
  

  function keyPressHandler(e: KeyboardEvent<HTMLTextAreaElement>) {
    if(e.code === 'Enter' && e.ctrlKey) {
      const newChats = [...chats];
      newChats.push(message.replace(/^\s+/, '').replace(/\s+$/, ''));
      setChats(newChats);
      setMessage('');
      e.currentTarget.style.height = "40px";
      e.preventDefault();
    }
  }

  function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

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
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        />
    </Wrapper>
  );
}