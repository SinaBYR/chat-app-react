import { render } from '@testing-library/react'
import { ThemeProvider } from '../../../../../theme/ThemeProvider'
import { StepTwo } from './StepTwo'

test('renders second step of desktop guide tour', () => {
  const next = jest.fn()
  const { container } = render(<ThemeProvider><StepTwo next={next}/></ThemeProvider>)

  const headingsArr = container.getElementsByTagName('h3')
  const nextButton = container.getElementsByTagName('button')[0]

  expect(headingsArr.length).toEqual(2)
  expect(nextButton).toBeInTheDocument()
})