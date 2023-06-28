import { TodoItem } from './TodoItem';
import { Todo } from '../../api/todo';

const todos: Todo[] = [
  {
    id: 1,
    todo: 'react',
    userId: 1,
    isCompleted: false,
  },
  {
    id: 2,
    todo: 'typescript',
    userId: 1,
    isCompleted: false,
  },
  {
    id: 3,
    todo: 'nextjs',
    userId: 1,
    isCompleted: true,
  },
];
export function TodoList() {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
