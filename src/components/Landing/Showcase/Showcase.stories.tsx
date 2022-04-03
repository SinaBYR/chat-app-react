import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Showcase } from "./Showcase"

export default {
  title: 'components/Showcase',
  component: Showcase
} as ComponentMeta<typeof Showcase>

const Template: ComponentStory<typeof Showcase> = () => <Showcase />

export const Default = Template.bind({})