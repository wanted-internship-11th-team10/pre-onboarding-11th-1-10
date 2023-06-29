import { createContext } from 'react';

import type { Todo } from '../../api';

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoContextType = {
  todos: Todo[];
  onTodoAdder: (todo: string) => void;
  onTodoDelete: (todoId: number) => void;
  onTodoUpdate: (todo: Todo) => void;
};
