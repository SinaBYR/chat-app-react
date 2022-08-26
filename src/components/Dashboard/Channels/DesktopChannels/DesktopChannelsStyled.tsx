import styled from "styled-components";

export const Wrapper = styled.aside`
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 300px;
  height: calc(100% - 118px);
  background-color: #15171a;
  padding: 1rem;
  padding-right: 0.25rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;