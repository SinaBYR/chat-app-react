import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppContextProvider } from "../../../store/context";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import { Header } from "./Header";

test('renders logo title', () => {
  // Wrap renderd component inside AppContextProvider to be able to use useSelect custom hook
  const { container } = render(<AppContextProvider><ThemeProvider><MemoryRouter><Header /></MemoryRouter></ThemeProvider></AppContextProvider>)

  const heading = container.getElementsByTagName('h1')[0]
  expect(heading).toHaveTextContent('Chat App')
})

test('renders 2 header buttons', () => {
  const { container } = render(<AppContextProvider><ThemeProvider><MemoryRouter><Header /></MemoryRouter></ThemeProvider></AppContextProvider>)

  const buttonsWrapper = container.getElementsByTagName('ul')
  const buttons = buttonsWrapper[0].getElementsByTagName('a')
  expect(buttons.length).toEqual(2)
})