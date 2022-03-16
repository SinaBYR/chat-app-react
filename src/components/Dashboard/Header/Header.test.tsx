import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import { Header } from "./Header";

test('renders logo title', () => {
  const { container } = render(<ThemeProvider><Header /></ThemeProvider>)

  const heading = container.getElementsByTagName('h1')[0]
  expect(heading).toHaveTextContent('Chat App')
})

test('renders 2 header buttons', () => {
  const { container } = render(<ThemeProvider><Header /></ThemeProvider>)

  const buttonsWrapper = container.getElementsByTagName('ul')
  const buttons = buttonsWrapper[0].getElementsByTagName('button')
  expect(buttons.length).toEqual(2)
})