import { AxiosResponse } from 'axios';
import { apiInstance } from '.';

const TODO = '/todos';

type TodoTitle = { todo: string };

export type Todo = {
  todo: string;
  id: number;
  isCompleted: boolean;
  userId: number;
};

type TodoRequest = TodoTitle;

type TodoResponse = AxiosResponse & {
  data: Todo;
};

export const getTodos = async () => {
  return apiInstance.get(`${TODO}`);
};

export const createTodo = async (data: TodoRequest): Promise<TodoResponse> => {
  return apiInstance.post(`${TODO}`, data);
};
