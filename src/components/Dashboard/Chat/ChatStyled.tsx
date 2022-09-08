import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 332px;
  width: calc(100% - 348px);
  height: calc(100% - 118px);
  color: ${({ theme }) => theme.colors.white};
  background-color: #15171a;
  padding: 1rem;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 93%;
  color: black;
  background-color: #15171a;
  /* background: url('/img/paper.jpg') center center/cover; */
  padding: 1rem;
  overflow-y: auto;
`;