import { useContext } from 'react';
import { TodoContext } from '../components/context/todo/TodoContext';

export const useTodoContext = () => {
  return useContext(TodoContext);
};
