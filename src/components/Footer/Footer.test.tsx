import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../theme/ThemeProvider"
import { Footer } from "./Footer"

test('renders footer section', () => {
  render(<ThemeProvider><Footer /></ThemeProvider>)

  const paragraph = screen.getByText('Designed and developed by Sina Beyraghdar © 2022')
  expect(paragraph).toBeInTheDocument()
})