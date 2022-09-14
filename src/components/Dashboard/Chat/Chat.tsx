import { Wrapper } from './ChatStyled';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { ChatMessages } from './ChatMessages/ChatMessages';
import { ChatTextArea } from './ChatTextArea/ChatTextArea';
import { supabase } from '../../../supabase/supabase';
import { useParams } from 'react-router-dom'
import { useSelect } from '../../../store/hooks';
import { MessageObject } from '../../../types';

export function Chat() {
  const { auth } = useSelect();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const params = useParams();

  async function addNewMessage(payload: any) {
    const { data, error } = await supabase
      .from('profile')
      .select('username')
      .eq('id', payload.sender_id);
    
      console.log(data)
    if(error) {
      return console.log(error.message);
    }

    if(!Array.isArray(data)) {
      return;
    }

    setMessages(prevState => {
      const newMessagesArray = [...prevState];
      const newMessage: MessageObject = {
        ...payload,
        sender_username: data[0].username
      };
      newMessagesArray.push(newMessage);
      return [
        ...prevState,
        newMessage
      ]
    })
  }

  async function sendMessage() {
    const { error } = await supabase.rpc('send_message', {
      content_: message,
      sender_id_: auth.session?.user?.id,
      channel_id_: params.channelId
    })

    if(error) {
      console.log('Message did not send!', error);
    }
  }

  async function fetchMessages() {
    const { data, error } = await supabase.rpc<MessageObject>('fetch_messages', {
      channel_id_: params.channelId
    })

    if(error) {
      return console.log(error.message);
    }

    if(Array.isArray(data)) {
      setMessages(data);
    }
  }

  function keyPressHandler(e: KeyboardEvent<HTMLTextAreaElement>) {
    if(e.code === 'Enter' && e.ctrlKey) {
      sendMessage();
      setMessage('');
      e.currentTarget.style.height = "40px";
      e.preventDefault();
    }
  }

  function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    // listen to message table changes
    const subscription = supabase
      .from('message')
      .on('*', (payload) => {
        addNewMessage(payload.new);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription).finally(() => console.log('done'));
    }
  }, []);

  // fetch selected channel messages
  useEffect(() => {
    fetchMessages();
  }, [params.channelId])


  return (
    <Wrapper>
      <ChatMessages messages={messages}/>
      <ChatTextArea
        value={message}
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        />
    </Wrapper>
  );
}