import { getByTestId, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { SignIn } from "./SignIn";

test('renders SignIn component', () => {
  const { container } = render(<ThemeProvider><SignIn loading={false}/></ThemeProvider>)

  const heading = screen.getByText('Login with Email')
  const labels = container.getElementsByTagName('label')
  const inputs = container.getElementsByTagName('input')

  expect(heading).toBeInTheDocument()
  expect(labels).toHaveLength(2)
  expect(inputs).toHaveLength(2)
})

test('email input', () => {
  render(<ThemeProvider><SignIn loading={false}/></ThemeProvider>)

  const input = screen.getByTestId('signin-email')
  expect(input).toHaveAttribute('type', 'email')
  expect(input).toHaveAttribute('name', 'email')
  expect(input).toHaveAttribute('placeholder', ' ')
})

test('password input', () => {
  render(<ThemeProvider><SignIn loading={false}/></ThemeProvider>)

  const input = screen.getByTestId('signin-password')
  expect(input).toHaveAttribute('type', 'password')
  expect(input).toHaveAttribute('name', 'password')
  expect(input).toHaveAttribute('placeholder', ' ')
})