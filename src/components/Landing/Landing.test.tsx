import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../theme/ThemeProvider'
import { Landing } from './Landing'

test('renders showcase with styles', () => {
  const { container } = render(<ThemeProvider><Landing /></ThemeProvider>)

  const mainTag = container.getElementsByTagName('main')
  expect(mainTag[0]).toBeInTheDocument()
})