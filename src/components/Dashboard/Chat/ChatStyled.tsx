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