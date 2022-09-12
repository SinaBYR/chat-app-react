import { Wrapper } from './ChatStyled';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { ChatMessages } from './ChatMessages/ChatMessages';
import { ChatTextArea } from './ChatTextArea/ChatTextArea';
import { supabase } from '../../../supabase/supabase';
import { useParams } from 'react-router-dom'
import { useSelect } from '../../../store/hooks';

interface Message {
  id: string;
  channel_id: string;
  content: string;
  sender_id: string;
  sender_username: string;
  sent_at: string;
}

export function Chat() {
  const { auth, app } = useSelect();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const params = useParams();

  async function addNewMessage(payload: any) {
    const { data, error } = await supabase
      .from('profile')
      .select('username')
      .eq('id', payload.sender_id);
    
    if(error) {
      return console.log(error.message);
    }

    if(!Array.isArray(data)) {
      return;
    }

    setMessages((prevState) => {
      return [
        ...prevState,
        {
          ...payload,
          sender_username: data[0].username
        }
      ]
    })
  }

  async function sendMessage() {
    // const { error } = await supabase.rpc('send_message', {
    //   content_: message,
    //   sender_id_: auth.session?.user?.id,
    //   channel_id_: params.channelId
    // })

    const { error } = await supabase.from('message').insert({
      content: message,
      sender_id: auth.session?.user?.id,
      channel_id: params.channelId
    })

    if(error) {
      console.log('Message did not send!', error);
    }
  }

  async function fetchMessages() {
    const { data, error } = await supabase.rpc<Message>('fetch_messages', {
      channel_id_: params.channelId
    })

    if(error) {
      return console.log(error.message);
    }

    if(Array.isArray(data)) {
      setMessages(data);
      console.log(data);
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
      .on('INSERT', (payload) => {
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
      <ChatMessages chats={messages}/>
      <ChatTextArea
        value={message}
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        />
    </Wrapper>
  );
}