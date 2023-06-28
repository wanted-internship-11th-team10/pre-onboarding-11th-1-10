import { useState } from 'react';
import { TodoItem } from '../api/todo';
import { TodoForm } from '../components/todo/TodoForm';
import { TodoList } from '../components/todo/TodoList';

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <>
      <h1>TODO</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
};
