import { ButtonWrapper, Textarea, Wrapper } from "./InputBoxStyled";
import { ChangeEventHandler, KeyboardEventHandler, FormEvent } from "react";
import { Button } from "../../../utilities";


interface Props {
  value?: string | number | readonly string[] | undefined;
  onKeyPress: KeyboardEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export function InputBox({ onKeyPress, value, onChange }: Props) {

  function autoGrow(el: FormEvent<HTMLTextAreaElement>) {
    el.currentTarget.style.height = "40px";
    el.currentTarget.style.height = (el.currentTarget.scrollHeight)+"px";
  }

  return (
    <Wrapper>
      <Textarea
        value={value}
        onInput={(e) => {
          autoGrow(e)
        }}
        onKeyPress={onKeyPress}
        onChange={onChange}
        placeholder="Message"/>
        <ButtonWrapper>
          <Button bgColor="orange" foreColor="black" fullWidth>Send</Button>
        </ButtonWrapper>
    </Wrapper>
  )
}