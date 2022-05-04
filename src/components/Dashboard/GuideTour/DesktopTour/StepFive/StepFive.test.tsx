import { render } from '@testing-library/react'
import { ThemeProvider } from '../../../../../theme/ThemeProvider'
import { StepFive } from './StepFive'

test('renders first step of desktop guide tour', () => {
  const next = jest.fn()
  const { container } = render(<ThemeProvider><StepFive next={next}/></ThemeProvider>)

  const successIcon = container.getElementsByTagName('svg')[0]
  const heading = container.getElementsByTagName('h2')[0]
  const paragraph = container.getElementsByTagName('p')[0]
  const nextButton = container.getElementsByTagName('button')[0]

  expect(successIcon).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
  expect(nextButton.tabIndex).toEqual(1)
})