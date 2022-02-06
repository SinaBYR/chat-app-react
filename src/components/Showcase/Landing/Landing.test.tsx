import { render, screen } from "@testing-library/react"
import { Landing } from "./Landing"

test('render chat app heading', () => {
  render(<Landing />)
  const chatHeading = screen.getByText('Chat App')
  expect(chatHeading).toBeInTheDocument()
})