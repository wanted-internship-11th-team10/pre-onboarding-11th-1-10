import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
