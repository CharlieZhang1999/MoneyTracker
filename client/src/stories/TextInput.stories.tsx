import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from '../components/TextInput';
import { InputNumber } from 'antd';

export default {
  title: 'Custom/TextInput',
  component: TextInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const defaultTextnput = Template.bind({});
defaultTextnput.args = {
  value: 0
};

