import { render, screen } from '@testing-library/react'
import { Button } from '..'
import { ThemeProvider } from '../../../theme/ThemeProvider'

test('renders a button', () => {
  render(<ThemeProvider><Button bgColor="orange" foreColor="black">This is a button</Button></ThemeProvider>)

  const button = screen.getByText('This is a button')

  expect(button).toBeInTheDocument()
})