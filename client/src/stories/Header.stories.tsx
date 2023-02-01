import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Custom/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const defaultHeader = Template.bind({});
defaultHeader.args = {
  title: "Custom Title"
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
