import { TodoItem } from './TodoItem';
import { useTodo } from '../../context/todo';

export function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
