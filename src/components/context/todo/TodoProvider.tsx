import { PropsWithChildren, useEffect, useState } from 'react';
import { TodoItem, getTodos } from '../../../api/todo';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleCreateTodo = (created: TodoItem) => setTodos((todos) => [...todos, created]);

  const handleUpdateTodo = (updated: TodoItem) => {
    setTodos(
      todos.map((todo) => {
        if (updated.id === todo.id) return updated;
        return todo;
      }),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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

  const value = {
    todos,
    handleCreateTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
