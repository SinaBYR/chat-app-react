import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../../theme/ThemeProvider"
import { Landing } from "./Landing"

test('render chat app heading', () => {
  render(<ThemeProvider><Landing /></ThemeProvider>)
  const chatHeading = screen.getByText('Chat App')
  expect(chatHeading).toBeInTheDocument()
})