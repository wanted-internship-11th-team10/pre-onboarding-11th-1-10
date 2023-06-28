import { apiInstance } from '.';

type Status = {
  status: number;
};
export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};
type GetTodoResponse = Status & {
  data: Todo[];
};

export async function getTodo(): Promise<GetTodoResponse> {
  return apiInstance.get('/todos');
}
