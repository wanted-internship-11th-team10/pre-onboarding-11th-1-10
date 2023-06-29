import { PropsWithChildren, useEffect, useState } from 'react';

import { TodoContext } from './TodoContext';
import { createTodo, deleteTodo, getTodos, Todo, updateTodo } from '../../api';

export function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  const onTodoAdder = async (todo: string) => {
    const newTodo = await createTodo(todo);
    newTodo && setTodos((prev) => prev.concat(newTodo));
  };

  const onTodoDelete = async (todoId: number) => {
    await deleteTodo(todoId);
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const onTodoUpdate = async (todo: Todo) => {
    const updatedTodo = await updateTodo(todo.id, todo.todo, todo.isCompleted);
    setTodos((prev) => prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  return (
    <TodoContext.Provider value={{ todos, onTodoAdder, onTodoUpdate, onTodoDelete }}>{children}</TodoContext.Provider>
  );
}
