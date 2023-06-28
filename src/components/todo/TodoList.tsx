import { useTodoContext } from '../../hooks';

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </div>
  );
};
