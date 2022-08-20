import styled, { keyframes } from "styled-components";
import { MdDone } from "react-icons/md";

const successAnimation = keyframes`
  10% {
    opacity: 0;
  }
  35% {
    opacity: 1;
    transform: translateX(0);
  }
  80% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-10px);
  }
`;

const Wrapper = styled.div`
  opacity: 0;
  transform: translateX(-40px);
  animation: ${successAnimation} 2500ms forwards;
`;

const SuccessIcon = styled(MdDone)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.orange};
  margin: 0 8px;
`;

export function SuccessIndicator() {
  return (
    <Wrapper>
      <SuccessIcon />
    </Wrapper>
  )
}