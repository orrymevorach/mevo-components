import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

export default {
  title: 'Nav',
  component: Nav,
};

const Template: ComponentStory<typeof Nav> = args => <Nav {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  navData: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
  ],
  logo: 'https://midnightcookie.ca/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png',
};
