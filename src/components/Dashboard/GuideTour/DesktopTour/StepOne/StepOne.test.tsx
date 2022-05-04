import { render } from '@testing-library/react'
import { ThemeProvider } from '../../../../../theme/ThemeProvider'
import { StepOne } from './StepOne'

test('renders first step of desktop guide tour', () => {
  const next = jest.fn()
  const { container } = render(<ThemeProvider><StepOne next={next}/></ThemeProvider>)

  const closeIcon = container.getElementsByTagName('svg')[0]
  const heading = container.getElementsByTagName('h2')[0]
  const paragraph = container.getElementsByTagName('p')[0]
  const nextButton = container.getElementsByTagName('button')[0]

  expect(closeIcon).toBeInTheDocument()
  expect(closeIcon.tabIndex).toEqual(1)
  expect(closeIcon.getAttribute('role')).toEqual('button')
  expect(heading).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
  expect(nextButton.tabIndex).toEqual(2)
})