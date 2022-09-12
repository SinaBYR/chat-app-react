import styled, { css } from "styled-components";

interface Props {
  isMe: boolean;
}

export const Username = styled.div<Props>`
  position: absolute;
  top: -25px;
  left: 0;
  ${({ isMe }) => isMe && css`
    display: none;
  `}
  width: 180px;
  color: #bbb0b0;
  margin-right: 1rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div<Props>`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-style: italic;
  opacity: 0.7;

  ${({ isMe }) => isMe && css`
    left: auto;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.9;
  `}
`;

export const Wrapper = styled.div<Props>`
  position: relative;
  align-self: flex-start;
  max-width: 500px;
  min-width: 100px;
  color: ${({ theme }) => theme.colors.white};
  background-color: #2b2e35;
  ${({ isMe }) => isMe && css`
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.orange};
  `}
  padding: 0.75rem;
  padding-bottom: 1.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 4px black;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;