import { apiInstance } from '.';

const TODO = '/todos';

type TodoRequest = {
  todo: string;
};

type TodoResponse = TodoRequest & {
  id: number;
  isCompleted: boolean;
  userId: number;
};

export const createTodo = async (data: TodoRequest): Promise<TodoResponse> => {
  return apiInstance.post(`${TODO}`, data);
};
