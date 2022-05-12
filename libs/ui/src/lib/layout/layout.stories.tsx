import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './layout';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  jsonData: [
    {
      code: '1',
      componentType: 'ProductCrousel',
      props: {
        title: "ColsForm",
      },
    },
  ],
  sections: [
    {
      title: 'Section Title',
      fluid: true,
      cols: ['3', '3', '3', '3'],
      featureTypesArry: ['1', '1'],
    },
  ],
};
