import { TodoProvider } from '../components/context/todo/TodoProvider';
import { TodoForm } from '../components/todo/TodoForm';
import { TodoList } from '../components/todo/TodoList';

export const TodoPage = () => {
  return (
    <>
      <h1>TODO</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
};
