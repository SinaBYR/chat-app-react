import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Landing } from "./Landing"

export default {
  title: 'components/Landing',
  component: Landing
} as ComponentMeta<typeof Landing>

const Template: ComponentStory<typeof Landing> = () => <Landing />

export const Default = Template.bind({})