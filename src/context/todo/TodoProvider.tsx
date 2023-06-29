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
    const newTodo = await api.createTodo(todo);
    newTodo && setTodos((prev) => prev.concat(newTodo));
  };

  const onTodoDelete = async (todoId: number) => {
    await api.deleteTodo(todoId);
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const onTodoUpdate = async (todo: Todo) => {
    const updatedTodo = await api.updateTodo(todo.id, todo.todo, todo.isCompleted);
    setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  return (
    <TodoContext.Provider value={{ todos, onTodoAdder, onTodoUpdate, onTodoDelete }}>{children}</TodoContext.Provider>
  );
}
