import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Input } from ".."
import { ThemeProvider } from "../../../theme/ThemeProvider"
import { InputProps } from "./Input"

export default {
  component: Input,
  decorators: [(Story) => <ThemeProvider><Story /></ThemeProvider>]
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Input name',
  fullWidth: true
}