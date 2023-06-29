import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, UpdateRequest, updateTodo } from '../api/todo';
import { Todo } from '../components/TodoList';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  todos: Todo[] | [];
  onCreate: (todo: string) => Promise<void>;
  onUpdate: (id: number, data: UpdateRequest) => void;
  onDelete: (id: number) => void;
};

// useReducer처럼 사용하는 방법밖에 떠오르지 않는데 useReducer안에서는 async함수를 못쓴다고 한다...
const TodoContext = createContext<ContextType>({} as ContextType);

export default function TodoContextProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  // 통신과 state관리를 따로 해야만 통신과 싱크를 맞출수 있는걸까??ㅠㅠㅠㅠ
  const onCreate = async (todo: string) => {
    const newTodo = await createTodo(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const onUpdate = (id: number, data: UpdateRequest) => {
    updateTodo(id, data);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: data.todo, isCompleted: data.isCompleted };
        }
        return todo;
      }),
    );
  };

  const onDelete = (id: number) => {
    deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const todoContext = useContext(TodoContext);
  return todoContext;
}
