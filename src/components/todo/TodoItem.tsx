import { Todo } from '../../api/todo';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  return <li>{todo.todo}</li>;
}
