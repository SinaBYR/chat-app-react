import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 332px;
  bottom: 16px;
  width: calc(100% - 348px);
  height: calc(100% - 118px);
  color: ${({ theme }) => theme.colors.white};
  background-color: #15171a;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    position: static;
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;