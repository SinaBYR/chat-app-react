import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: inline-block;
  margin: 0;
  font-size: 6px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.6em solid rgba(255, 255, 255, 0.2);
  border-right: 0.6em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.6em solid rgba(255, 255, 255, 0.2);
  border-left: 0.6em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: ${animation} 1.1s infinite linear;

  &::after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
  }
`;

export function Spinner(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <Wrapper {...props}>Loading...</Wrapper>
  )
}