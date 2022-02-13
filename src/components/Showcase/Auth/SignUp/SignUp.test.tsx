import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../../../theme/ThemeProvider"
import { SignUp } from "./SignUp"

test('renders labels and inputs', () => {
  const { container } = render(<ThemeProvider><SignUp loading={false}/></ThemeProvider>)
  const labels = container.getElementsByTagName('label')
  const inputs = container.getElementsByTagName('input')

  expect(labels.length).toBe(3)
  expect(inputs.length).toBe(3)
})

test('email input', () => {
  render(<ThemeProvider><SignUp loading={false}/></ThemeProvider>)
  const input = screen.getByTestId('signup-email')

  expect(input).toHaveAttribute('type', 'email')
  expect(input).toHaveAttribute('name', 'email')
  expect(input).toHaveAttribute('value')
})

test('password input', () => {
  render(<ThemeProvider><SignUp loading={false}/></ThemeProvider>)
  const input = screen.getByTestId('signup-password')

  expect(input).toHaveAttribute('type', 'password')
  expect(input).toHaveAttribute('name', 'password')
  expect(input).toHaveAttribute('value')
})

test('confirm input', () => {
  render(<ThemeProvider><SignUp loading={false}/></ThemeProvider>)
  const input = screen.getByTestId('signup-confirm')
  
  expect(input).toHaveAttribute('type', 'password')
  expect(input).toHaveAttribute('name', 'confirm')
  expect(input).toHaveAttribute('value')
})

test('submit button', () => {
  render(<ThemeProvider><SignUp loading={false}/></ThemeProvider>)
  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('Sign up')
  expect(button).toHaveAttribute('type', 'submit')
})

test('submit button has loading', () => {
  render(<ThemeProvider><SignUp loading={true}/></ThemeProvider>)
  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('Loading')
  expect(button).toHaveAttribute('type', 'submit')
})