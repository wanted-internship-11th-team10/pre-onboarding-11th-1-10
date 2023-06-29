import { TodoProvider } from '../context/todo';
import { TodoAdder, TodoList } from '../components/todo';

export function TodoPage() {
  return (
    <TodoProvider>
      <TodoAdder />
      <TodoList />
    </TodoProvider>
  );
}
