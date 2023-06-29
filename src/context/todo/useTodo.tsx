import { useContext } from 'react';

import { TodoContext } from './TodoContext';

export const useTodo = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error('Could not find TodoContext');
  }
  return todoContext;
};
