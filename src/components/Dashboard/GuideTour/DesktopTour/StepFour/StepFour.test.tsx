import { render } from '@testing-library/react'
import { ThemeProvider } from '../../../../../theme/ThemeProvider'
import { StepFour } from './StepFour'

test('renders fourth step of desktop guide tour', () => {
  const next = jest.fn()
  const { container } = render(<ThemeProvider><StepFour next={next}/></ThemeProvider>)

  const heading = container.getElementsByTagName('h3')[0]
  const nextButton = container.getElementsByTagName('button')[0]

  expect(heading).toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
})