import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from ".."
import { ThemeProvider } from "../../../theme/ThemeProvider"

export default {
  component: Button,
  decorators: [(Story) => <ThemeProvider>{<Story />}</ThemeProvider>]
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = ({ children, ...props }) => <Button {...props}>{children}</Button>

export const Default = Template.bind({})
Default.args = {
  bgColor: 'orange',
  foreColor: 'black',
  children: 'Button',
}