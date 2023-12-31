import { client } from './index';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export async function createTodo(todo: string): Promise<Todo> {
  const response = await client.post('/todos', { todo });
  return response.data;
}

export async function getTodos(): Promise<Todo[]> {
  const response = await client.get('/todos');
  return response.data;
}

// GYU-TODO: 인자 여러개 말고 단순하게 받을 수 있도록 고민하기
export async function updateTodo(todoId: number, todo: string, isCompleted: boolean): Promise<Todo> {
  const response = await client.put(`/todos/${todoId}`, { todo, isCompleted });
  return response.data;
}

export function deleteTodo(todoId: number): Promise<null> {
  return client.delete(`/todos/${todoId}`);
}
