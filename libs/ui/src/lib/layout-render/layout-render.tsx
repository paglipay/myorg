import styles from './layout-render.module.css';
import React, { useState, useEffect, lazy } from 'react';
// import DLayout from "./DLayout";
import { DLayout } from '@myorg/ui';
import { Container } from 'react-bootstrap';
import { ProductCrousel, ProductPurchaseCard } from '@myorg/ui';
/* eslint-disable-next-line */
export interface LayoutRenderProps {
  fluid: boolean;
  cols: string[];
  // features: any[];
  // components: any[];
  jsonData: any[];
  featureTypesArry: string[];
}

export function LayoutRender(props: LayoutRenderProps) {
  const components = {
    ProductCrousel: ProductCrousel,
    ProductPurchaseCard: ProductPurchaseCard,
  };
  // const result = props.featureTypesArry.map((e) =>
  //   React.createElement(components['ProductPurchaseCard'], { cols: [3, 3, 3, 3] })
  // );
  const result = props.featureTypesArry.map((e) =>
    React.createElement(components['ProductPurchaseCard'], { title: 'Real' })
  );

  return (
    <Container
      fluid={props.fluid}
      // style={{ backgroundColor: 'white', padding: '25px', marginBottom: '25px' }}
    >
      <DLayout cols={['3', '3']} features={result} />
    </Container>
  );
}

export default LayoutRender;
