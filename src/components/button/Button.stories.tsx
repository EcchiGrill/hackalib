import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Button>

export const Primary: Story = {
  args: { children: 'Click me', color: 'red' },
}

export default meta
