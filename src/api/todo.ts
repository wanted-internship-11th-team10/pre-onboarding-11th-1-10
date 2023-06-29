import { apiInstance } from '.';
import { Todo } from './../components/TodoList';

type CreateResponse = Todo & {
  userId: number;
};

type GetRespnse = CreateResponse[];

export type UpdateRequest = {
  todo: string;
  isCompleted: boolean;
};
type UpdateResponse = CreateResponse;

export async function createTodo(todo: string): Promise<CreateResponse> {
  const response = await apiInstance.post('/todos', { todo });
  return response.data;
}

export async function getTodos(): Promise<GetRespnse> {
  return await apiInstance.get('/todos').then((res) => res.data);
}

export async function updateTodo(id: number, data: UpdateRequest): Promise<UpdateResponse> {
  return await apiInstance.put(`/todos/${id}`, data);
}

export async function deleteTodo(id: number): Promise<void> {
  apiInstance.delete(`/todos/${id}`);
}
