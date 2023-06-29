import { TodoProvider } from '../context/todo';
import { TodoCreator, TodoList } from '../components';

export function TodoPage() {
  return (
    <TodoProvider>
      <TodoCreator />
      <TodoList />
    </TodoProvider>
  );
}
