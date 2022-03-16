import { render } from "@testing-library/react";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Links } from "./Links";

test('renders header desktop links', () => {
  const { container } = render(<ThemeProvider><Links /></ThemeProvider>)

  const unOrderedList = container.getElementsByTagName('ul')[0]
  const numberOfLinks = container.getElementsByTagName('button').length
  expect(unOrderedList.childElementCount).toEqual(numberOfLinks)
})