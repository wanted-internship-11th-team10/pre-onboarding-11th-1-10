import { PropsWithChildren, useEffect, useState } from 'react';

import { TodoContext } from './TodoContext';
import * as api from '../../api';
import type { Todo } from '../../api';

export function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.getTodos().then(setTodos).catch(console.error);
  }, []);

  const onTodoAdder = async (todo: string) => {
    try {
      const newTodo = await api.createTodo(todo);
      if (newTodo) {
        setTodos((prev) => prev.concat(newTodo));
      }
    } catch (error) {
      alert('생성에 실패했습니다!');
    }
  };

  const onTodoDelete = async (todoId: number) => {
    try {
      await api.deleteTodo(todoId);
      setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      alert('삭제에 실패했습니다!');
    }
  };

  const onTodoUpdate = async (todo: Todo) => {
    try {
      const updatedTodo = await api.updateTodo(todo.id, todo.todo, todo.isCompleted);
      setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    } catch (error) {
      alert('수정에 실패했습니다!');
    }
  };

  return (
    <TodoContext.Provider value={{ todos, onTodoAdder, onTodoUpdate, onTodoDelete }}>{children}</TodoContext.Provider>
  );
}
