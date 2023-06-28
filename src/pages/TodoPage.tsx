import { useEffect, useState } from 'react';
import { TodoItem, getTodos } from '../api/todo';
import { TodoForm } from '../components/todo/TodoForm';
import { TodoList } from '../components/todo/TodoList';

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await getTodos();
        setTodos(result.data);
      } catch (err) {
        alert('투두를 불러올 수 없습니다.');
      }
    };

    fetchTodos();
  }, []);

  return (
    <>
      <h1>TODO</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
};
