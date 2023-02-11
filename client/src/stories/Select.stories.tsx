import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../components/Select';

export default {
  title: 'Custom/Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const defaultHeader = Template.bind({});
defaultHeader.args = {
};

