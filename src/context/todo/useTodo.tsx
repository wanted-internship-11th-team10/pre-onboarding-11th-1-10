import { useContext } from 'react';

import { TodoContext } from './TodoContext';

export function useTodo() {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error('Could not find TodoContext');
  }
  return todoContext;
}
