// import styles from './dlayout.module.css';
// import { Todo } from '@myorg/data';
import { Col, Row } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface DLayoutProps {
  cols: number[];
  features: any[];
}

export function DLayout(props: DLayoutProps) {
  return (
    <Row>
      {props.cols.map((e: any, i: number) => {
        if (e === 'z') {
          e = 12;
        } else if (e === '0') {
          e = 10;
        }
        return (
          <Col
            style={{ transition: '350ms', paddingBottom: '25px' }}
            key={`-${i}`}
            lg={e}
          >
            {props.features[i]}
          </Col>
        );
      })}
    </Row>
  );
}

export default DLayout;
