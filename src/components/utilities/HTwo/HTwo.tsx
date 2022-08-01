import * as React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export function HTwo({ children, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading {...rest}>{children}</Heading>
}