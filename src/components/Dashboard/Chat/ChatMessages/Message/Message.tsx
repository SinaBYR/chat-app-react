import { Text } from "../../../../utilities";
import { Wrapper, Time, Username } from "./MessageStyled";

interface Props {
  content: string;
  isMe: boolean;
  username: string;
  sent_at: string;
}

export function Message({ content, username, sent_at, isMe }: Props) {
  return (
    <Wrapper isMe={isMe}>
      <Username isMe={isMe}>{username}</Username>
      <Text style={{ fontSize: '1rem' }}>{content}</Text>
      <Time isMe={isMe}>{sent_at}</Time>
    </Wrapper>
  )
}