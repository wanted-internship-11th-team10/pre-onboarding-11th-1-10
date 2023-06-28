import { createContext } from 'react';
import { TodoItem } from '../../../api/todo';

type TodoContextValue = {
  todos: TodoItem[];
  handleCreateTodo: (created: TodoItem) => void;
  handleUpdateTodo: (updated: TodoItem) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextValue | null>(null);
