import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Sidedrawer } from './Sidedrawer'
test('renders sidedrawer', () => {
  const { container } = render(<ThemeProvider><Sidedrawer /></ThemeProvider>)

  const header = container.getElementsByTagName('header')[0]
  const main = container.getElementsByTagName('main')[0]
  const buttons = main.getElementsByTagName('button')
  const logoutBtn = main.getElementsByTagName('button')[3]
  const footer = container.getElementsByTagName('footer')[0]

  expect(header).toBeInTheDocument()
  expect(buttons.length).toEqual(4)
  expect(logoutBtn.getAttribute('style')).toBe('background-color: rgb(255, 50, 50); color: white;')
  expect(footer).toBeInTheDocument()
})