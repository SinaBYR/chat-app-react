import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../../theme/ThemeProvider"
import { Showcase } from "./Showcase"

test('render chat app heading', () => {
  render(<ThemeProvider><Showcase /></ThemeProvider>)
  const chatHeading = screen.getByText('Chat App')
  expect(chatHeading).toBeInTheDocument()
})