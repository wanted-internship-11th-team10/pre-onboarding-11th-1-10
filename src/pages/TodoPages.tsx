import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoContextProvider from '../context/TodoContext';

export default function TodoPage() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  );
}
