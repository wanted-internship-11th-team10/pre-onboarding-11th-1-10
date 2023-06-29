import { useTodoContext } from '../../hooks';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
