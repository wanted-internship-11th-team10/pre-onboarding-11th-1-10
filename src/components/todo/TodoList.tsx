import { TodoItem } from '../../api/todo';

interface TodoListProps {
  todos: TodoItem[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};
