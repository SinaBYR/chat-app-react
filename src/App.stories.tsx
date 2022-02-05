import { ComponentMeta, ComponentStory } from '@storybook/react'
import { App } from './App'

export default {
  name: 'components/App',
  component: App,
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: 'red'},
        {name: 'blue', value: 'blue'},
        {name: 'green', value: 'green'},
      ]
    }
  }
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => <App />

export const Default = Template.bind({})