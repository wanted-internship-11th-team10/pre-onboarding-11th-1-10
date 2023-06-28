import { ReactNode, useEffect, useReducer } from 'react';
import * as api from '../api/todo';
import { TodoContext, TodoHandleContext } from './TodoContext';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

type ActionType =
  | { type: 'LOAD'; todos: Todo[] }
  | { type: 'CREATE'; todo: Todo }
  | { type: 'UPDATE'; todo: Todo }
  | { type: 'DELETE'; id: Todo['id'] };

const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case 'LOAD':
      return action.todos;
    case 'CREATE':
      return state.concat(action.todo);
    case 'UPDATE':
      return state.map((prevTodo) =>
        prevTodo.id === action.todo.id
          ? { ...prevTodo, todo: action.todo.todo, isCompleted: action.todo.isCompleted }
          : prevTodo,
      );
    case 'DELETE':
      return state.filter((prevTodo) => prevTodo.id !== action.id);
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    api
      .getTodos()
      .then((res) => {
        dispatch({ type: 'LOAD', todos: res.data });
      })
      .catch((err) => console.error(err));
  }, []);

  const createTodo = async (value: string) => {
    const body = { todo: value };

    try {
      const result = await api.createTodo(body);
      dispatch({ type: 'CREATE', todo: result.data });
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodo = async (item: Todo) => {
    const { id, todo, isCompleted } = item;
    const body = { todo, isCompleted };

    try {
      await api.updateTodo(id, body);
      dispatch({ type: 'UPDATE', todo: item });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await api.deleteTodo(id);
      dispatch({ type: 'DELETE', id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TodoContext.Provider value={todos}>
      <TodoHandleContext.Provider value={{ createTodo, updateTodo, deleteTodo }}>{children}</TodoHandleContext.Provider>
    </TodoContext.Provider>
  );
};
