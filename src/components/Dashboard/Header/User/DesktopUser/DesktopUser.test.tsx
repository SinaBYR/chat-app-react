import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../../theme/ThemeProvider";
import { DesktopUser } from "./DesktopUser";

const onClickMock = jest.fn()

test('renders desktop unextended user', () => {
  const { container } = render(<ThemeProvider><DesktopUser extended={false} toggleDropdown={onClickMock}/></ThemeProvider>)

  const userButton = container.getElementsByTagName('svg')[0]

  expect(userButton.parentElement?.tagName).toBe('BUTTON')
  expect(userButton).toBeInTheDocument()
})

test('renders desktop extended user', () => {
  const { container } = render(<ThemeProvider><DesktopUser extended={true} toggleDropdown={onClickMock}/></ThemeProvider>)

  const logoutButton = screen.getByText('Logout')
  const profileButton = screen.getByText('Profile')
  
  expect(logoutButton).toBeInTheDocument()
  expect(profileButton).toBeInTheDocument()
})