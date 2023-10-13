import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color', },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// const ButtonTemplate: Story = {
//   render: (args) => <Button {...args} />,
// };
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
  args: {
    children: 'TEST',
    themeButton: ThemeButton.CLEAR,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    themeButton: ThemeButton.SECONDARY,
  },
};
