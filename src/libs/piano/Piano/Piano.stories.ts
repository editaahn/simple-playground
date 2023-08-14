import type { Meta, StoryObj } from '@storybook/react';
import { Piano } from '..';

const meta = {
  title: 'Challenge/Piano',
  component: Piano,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Piano>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PianoStory: Story = {
  args: {
    note: ['q', '2', 'w', '3', 'e', '4', 'r', 't', '6', 'y', '7', 'u'],
  },
};
