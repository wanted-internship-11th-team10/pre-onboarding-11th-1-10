import { TodoProvider } from '../context/todo';
import { TodoCreator, TodoList } from '../components/todo';

export function TodoPage() {
  return (
    <TodoProvider>
      <TodoCreator />
      <TodoList />
    </TodoProvider>
  );
}
