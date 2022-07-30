import * as React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export function HTwo({ children }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading>{children}</Heading>
}