import { CSSProperties, HTMLAttributes } from "react";
import { HiLightBulb } from "react-icons/hi";
import styled from "styled-components";

const CalloutWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 770px;
  color: ${({ theme }) => theme.colors.white};
  background-color: #252525;
  padding: 1rem;
  border-radius: 4px;
`;

const CalloutIcon = styled(HiLightBulb)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.orange};
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  iconStyles?: CSSProperties;
}

export function Callout({ children, iconStyles, ...rest }: Props) {
  return (
    <CalloutWrapper {...rest}>
      <CalloutIcon style={iconStyles} />
      {children}
    </CalloutWrapper>
  )
}