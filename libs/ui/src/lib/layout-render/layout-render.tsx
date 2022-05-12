import styles from './layout-render.module.css';
// import DLayout from "./DLayout";
import { DLayout } from '@myorg/ui';
import { Container } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface LayoutRenderProps {
  fluid: boolean;
  cols: number[];
  features: any[];
}

export function LayoutRender(props: LayoutRenderProps) {
  return (
    <Container
      fluid={props.fluid}
      // style={{ backgroundColor: 'white', padding: '25px', marginBottom: '25px' }}
    >
      <DLayout cols={props.cols} features={props.features} />
    </Container>
  );
}

export default LayoutRender;
