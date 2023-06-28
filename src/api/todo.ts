import { apiInstance } from '.';

/** Request Type */
type CreateTodoRequest = {
  todo: string;
};

type UpdateTodoRequest = {
  todo: string;
  isCompleted: boolean;
};

/** Response Type */
type Status = {
  status: number;
};

type TodoResponse = {
  status: Status;
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

/** 실제 API 요청 */
export async function getTodoRequest(): Promise<TodoResponse[]> {
  const response = await apiInstance.get('/todos');
  return response.data;
}

export async function createTodoRequest(data: CreateTodoRequest): Promise<TodoResponse> {
  const response = await apiInstance.post('/todos', data);
  return response.data;
}

export async function updateTodoRequest(id: number, data: UpdateTodoRequest): Promise<TodoResponse> {
  return apiInstance.put(`/todos/${id}`, data);
}

export async function deleteTodoRequest(id: number): Promise<Status> {
  return apiInstance.delete(`/todos/${id}`);
}
