import styles from './layout.module.css';
import { LayoutRender } from '@myorg/ui';
/* eslint-disable-next-line */
export interface LayoutProps {
  // jsonData: any[];
  sections: any[];
  jsonData:any[];
}

export function Layout(props: LayoutProps) {


  // const { jsonData, sections } = useSelector(getLayoutState);
  const { sections, jsonData } = props;

  return (
    <>
      {sections.map((e: any, i: any) => (
        <div key={`div-${i}`}>
          <section
            key={`prl-sec-${i}`}
            style={{
              backgroundColor: 'whitesmoke',
              padding: '25px',
              marginBottom: '25px',
            }}
          >
            <h1 key={`prl-sec-h1-${i}`}>{e.title}</h1>
          </section>
          <LayoutRender
            key={`prl-${i}`}
            jsonData={jsonData}
            cols={e.cols}
            featureTypesArry={e.featureTypesArry}
            fluid={e.fluid}
          />
        </div>
      ))}
    </>
  );
}

export default Layout;
