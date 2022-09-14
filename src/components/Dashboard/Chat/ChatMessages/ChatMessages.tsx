import { useSelect } from "../../../../store/hooks";
import { MessageObject } from "../../../../types";
import { Wrapper } from "./ChatMessagesStyled";
import { Message } from "./Message/Message";

export function ChatMessages({ messages }: { messages: MessageObject[] }) {
  const { auth } = useSelect();

  return (
    <Wrapper>
      {messages.map(({
        id,
        content,
        sender_id,
        sender_username,
        sent_at
      }) => (
        <Message
          key={id}
          content={content}
          username={sender_username}
          isMe={sender_id === auth.session?.user?.id}
          sent_at={sent_at}
          />
      ))}
    </Wrapper>
  )
}