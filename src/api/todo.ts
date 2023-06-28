import { apiInstance } from '.';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

type Status = {
  status: number;
};

type GetTodoApiResponse = Status & {
  data: Todo[];
};

type UpdateTodoApiRequest = {
  id: Todo['id'];
  todo: Todo['todo'];
  isCompleted: Todo['isCompleted'];
};

export function getTodoApi(): Promise<GetTodoApiResponse> {
  return apiInstance.get('/todos');
}
export function postTodoApi(todo: Todo['todo']) {
  return apiInstance.post('/todos', { todo });
}
export function deleteTodoApi(todo_id: number) {
  return apiInstance.delete(`/todos/${todo_id}`);
}

export function updatedTodoApi(data: UpdateTodoApiRequest) {
  return apiInstance.put(`/todos/${data.id}`, data);
}
