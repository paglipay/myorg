import { Story, Meta } from '@storybook/react';
import { DLayout, DLayoutProps } from './dlayout';

export default {
  component: DLayout,
  title: 'DLayout',
} as Meta;

const Template: Story<DLayoutProps> = (args) => <DLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cols: [4, 4, 4, 4],
  features: [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>, <h1>4</h1>],
};
