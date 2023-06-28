import { AxiosResponse } from 'axios';
import { apiInstance } from '.';

const TODO = '/todos';

type Todo = { todo: string };

export type TodoItem = Todo & {
  id: number;
  isCompleted: boolean;
  userId: number;
};

type TodoRequest = Todo;

type TodoResponse = AxiosResponse & {
  data: TodoItem;
};

export const getTodos = async () => {
  return apiInstance.get(`${TODO}`);
};

export const createTodo = async (data: TodoRequest): Promise<TodoResponse> => {
  return apiInstance.post(`${TODO}`, data);
};
