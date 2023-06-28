import { TodoItem } from '../../api/todo';

interface TodoListProps {
  todos: TodoItem[];
}

export const TodoList = () => {
  return (
    <div>
      list
      {/* {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))} */}
    </div>
  );
};
