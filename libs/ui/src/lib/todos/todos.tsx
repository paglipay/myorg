import { Todo } from '@myorg/data';
import './todos.module.css';
import { Table } from 'react-bootstrap';
export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <Table>
      {props.todos.map((t) => (
        <tr className={'todo'}><td>{t.title}</td></tr>
      ))}
    </Table>
  );
}

export default Todos;