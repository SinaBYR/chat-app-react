import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../../theme/ThemeProvider";
import { DesktopUser } from "./DesktopUser";
import { AppContextProvider } from "../../../../../store/context";

const onClickMock = jest.fn()

test('renders desktop unextended user', () => {
  const { container } = render(<AppContextProvider><ThemeProvider><DesktopUser extended={false} toggleDropdown={onClickMock}/></ThemeProvider></AppContextProvider>)

  const userButton = container.getElementsByTagName('svg')[0]

  expect(userButton.parentElement?.tagName).toBe('BUTTON')
  expect(userButton).toBeInTheDocument()
})

test('renders desktop extended user', () => {
  const { container } = render(<AppContextProvider><ThemeProvider><DesktopUser extended={true} toggleDropdown={onClickMock}/></ThemeProvider></AppContextProvider>)

  const logoutButton = screen.getByText('Logout')
  const profileButton = screen.getByText('Profile')
  
  expect(logoutButton).toBeInTheDocument()
  expect(profileButton).toBeInTheDocument()
})