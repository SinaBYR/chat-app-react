import styled, { css } from "styled-components";
import { Link as RouterLink, NavLink as RouterNavLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type StyledProps = {
  // Each custom prop is optional, because they've got default value.
  $bgColor?: 'orange' | 'black' | 'white' | 'red';
  $foreColor?: 'orange' | 'black' | 'white';
  $fullWidth?: boolean;
  $navLink?: boolean;
};

type LinkProps = RouterLinkProps & StyledProps;

const LinkWrapper = styled(RouterLink)<StyledProps>`
  display: flex;
  align-items: center;
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `};
  color: ${({theme, $foreColor}) => $foreColor && theme.colors[$foreColor]};
  background-color: ${({theme, $bgColor}) => $bgColor && theme.colors[$bgColor]};
  font-size: 1rem;
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    transform: none;
    opacity: 0.6;
  }
`;

const NavLinkWrapper = styled(RouterNavLink)<StyledProps>`
  display: flex;
  align-items: center;
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `};
  color: ${({theme, $foreColor}) => $foreColor && theme.colors[$foreColor]};
  background-color: ${({theme, $bgColor}) => $bgColor && theme.colors[$bgColor]};
  font-size: 1rem;
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    transform: none;
    opacity: 0.6;
  }

  &.active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.orange} !important;
  }
`;

// Internally, React Router's Link passes all its props to an <a> DOM element. Except the ones used by Link, like "to".
// So the styles work because the props are interpreted by Styled Components, but then the same prop is passed again to the inner <a>, which triggers the (harmless) error message.
// Transient props are a new pattern to pass props that are explicitly consumed only by styled components and are not meant to be passed down to deeper component layers.
// Note the dollar sign ($) prefix on the prop; this marks it as transient and styled-components knows not to add it to the rendered DOM element or pass it further down the component hierarchy.

export function Link({
  children,
  $foreColor = "black",
  $bgColor = "orange",
  $fullWidth,
  $navLink = false,
  ...props
}: LinkProps) {
  if($navLink) {
    return <NavLinkWrapper $foreColor={$foreColor} $bgColor={$bgColor} $fullWidth={$fullWidth} {...props}>{children}</NavLinkWrapper>
  }

  return (
    <LinkWrapper $foreColor={$foreColor} $bgColor={$bgColor} $fullWidth={$fullWidth} {...props}>{children}</LinkWrapper>
  )
}