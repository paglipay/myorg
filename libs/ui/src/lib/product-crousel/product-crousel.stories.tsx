import { Story, Meta } from '@storybook/react';
import { ProductCrousel, ProductCrouselProps } from './product-crousel';

export default {
  component: ProductCrousel,
  title: 'ProductCrousel',
} as Meta;

const Template: Story<ProductCrouselProps> = (args) => (
  <ProductCrousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cols:[3,3,3,3]
};
