import { apiInstance } from '.';
import { type Todo } from '../pages/TodoPage';
import { type Status } from './auth';

type GetTodosResponse = Status & {
  data: Todo[];
};

type CreateTodoRequest = Pick<Todo, 'todo'>;
type CreateTodoResponse = Status & {
  data: Todo;
};

type UpdateTodoRequest = Pick<Todo, 'todo' | 'isCompleted'>;
type UpdateTodoResponse = CreateTodoResponse;

type DeleteTodoResponse = Status;

export function getTodos(): Promise<GetTodosResponse> {
  return apiInstance.get('/todos');
}
export function createTodo(body: CreateTodoRequest): Promise<CreateTodoResponse> {
  return apiInstance.post('/todos', body);
}
export function updateTodo(id: number, body: UpdateTodoRequest): Promise<UpdateTodoResponse> {
  return apiInstance.put(`/todos/${id}`, body);
}
export function deleteTodo(id: number): Promise<DeleteTodoResponse> {
  return apiInstance.delete(`/todos/${id}`);
}
