import { ButtonWrapper, Textarea, Wrapper } from "./ChatTextAreaStyled";
import { ChangeEventHandler, KeyboardEventHandler, FormEvent } from "react";
import { Button } from "../../../utilities";

interface Props {
  value?: string | number | readonly string[] | undefined;
  onKeyPress: KeyboardEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export function ChatTextArea({ value, onKeyPress, onChange }: Props) {

  function autoGrow(el: FormEvent<HTMLTextAreaElement>) {
    console.log(el.currentTarget.scrollHeight);
    el.currentTarget.style.height = "40px";
    el.currentTarget.style.height = (el.currentTarget.scrollHeight + 2)+"px";
  }

  return (
    <Wrapper>
      <Textarea
        value={value}
        onInput={autoGrow}
        onKeyPress={onKeyPress}
        onChange={onChange}
        placeholder="Message"/>
        <ButtonWrapper>
          <Button bgColor="orange" foreColor="black" fullWidth>Send</Button>
        </ButtonWrapper>
    </Wrapper>
  )
}