import { createContext, useContext } from 'react';
import { type Todo } from '../context';

export const TodoContext = createContext<Todo[]>([]);
export const TodoHandleContext = createContext<{
  createTodo: (value: string) => void;
  updateTodo: (item: Todo) => void;
  deleteTodo: (id: number) => void;
} | null>(null);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useHandleTodo = () => {
  const context = useContext(TodoHandleContext);
  if (context == null) {
    throw new Error('No TodoHandleContext');
  }
  return context;
};
