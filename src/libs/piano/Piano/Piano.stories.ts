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
    note: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'],
  },
};
