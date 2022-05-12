import styles from './buttons.module.css';
import { Todo } from '@myorg/data';
import { Table, Button } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface ButtonsProps {
  todos: Todo[];
}
export function Buttons(props: ButtonsProps) {
  return (
    <Table>
      {props.todos.map((t) => (
        <tr className={'todo'}><td><Button>{t.title}</Button></td></tr>
      ))}
    </Table>
  );
}

export default Buttons;
