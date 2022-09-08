import styled from "styled-components";

export const Wrapper = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 1rem;
  background-color: #2f3339;
  background-color: #23272c;
  width: 100%;
  height: 7%;
`;

export const Textarea = styled.textarea`
  position: absolute;
  left: 8px;
  bottom: 0;
  width: 884px;
  width: 540px;
  transform: translateY(-9px);
  height: 40px;
  max-height: 8rem;
  color: gray;
  background-color: ${({ theme }) => theme.colors.black};
  background-color: #15171a;
  /* background-color: gray; */
  font-size: 1rem;
  padding: 0.5rem;
  /* margin-left: auto; */
  margin-right: 1rem;
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
  resize: none;
  line-height: 1.4rem;
  overflow-y: auto;
  border: none;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.white};
    /* border: 1px solid ${({ theme }) => theme.colors.white}; */
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 564px;
  display: flex;
  align-items: center;
  width: 120px;
  height: 100%;
`;