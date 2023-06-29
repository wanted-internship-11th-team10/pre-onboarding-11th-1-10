import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export default function TodoList() {
  return <ul></ul>;
}
