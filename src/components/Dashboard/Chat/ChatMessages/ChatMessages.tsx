import { Wrapper } from "./ChatMessagesStyled";
import { Message } from "./Message/Message";

export function ChatMessages({ chats }: { chats: any }) {
  return (
    <Wrapper>
      {chats.map((msg: string, i: number) => (
        <Message key={i} text={msg} me={false}/>
      ))}
      <Message text="Hello everybody!" me={true} />
    </Wrapper>
  )
}