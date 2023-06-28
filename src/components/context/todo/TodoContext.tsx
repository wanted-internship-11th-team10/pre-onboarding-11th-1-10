import { createContext } from 'react';
import { Todo } from '../../../api/todo';

type TodoContextValue = {
  todos: Todo[];
  handleCreateTodo: (created: Todo) => void;
  handleUpdateTodo: (updated: Todo) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextValue | null>(null);
