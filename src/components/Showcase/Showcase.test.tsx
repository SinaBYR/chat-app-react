import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../theme/ThemeProvider'
import { Showcase } from './Showcase'

test('renders showcase with styles', () => {
  const { container } = render(<ThemeProvider><Showcase /></ThemeProvider>)

  const mainTag = container.getElementsByTagName('main')
  expect(mainTag[0]).toBeInTheDocument()
})