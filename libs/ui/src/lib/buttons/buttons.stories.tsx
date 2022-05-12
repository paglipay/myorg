import { Story, Meta } from '@storybook/react';
import { Buttons, ButtonsProps } from './buttons';

export default {
  component: Buttons,
  title: 'Buttons',
} as Meta;

const Template: Story<ButtonsProps> = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  todos:[{ title: 'Todo 1' }, { title: 'Todo 2' }],
};
