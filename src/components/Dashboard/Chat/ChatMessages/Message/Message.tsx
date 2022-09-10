import { Text } from "../../../../utilities";
import { Wrapper, Time, Username } from "./MessageStyled";

interface Props {
  text: string;
  me: boolean;
}

export function Message({ text, me }: Props) {
  return (
    <Wrapper me={me}>
      <Username me={me}>Boogyman_coming_back</Username>
      <Text style={{ fontSize: '1rem' }}>{text}</Text>
      <Time me={me}>7:23 PM</Time>
    </Wrapper>
  )
}