import * as React from 'react';
import styled from "styled-components";

const Wrapper = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
`;

export function Text({ children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <Wrapper {...rest}>{children}</Wrapper>
}