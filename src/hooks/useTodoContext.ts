import { useContext } from 'react';
import { TodoContext } from '../components/context/todo/TodoContext';

export const useTodoContext = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw Error('Context has not been provided!');
  }

  return todoContext;
};
