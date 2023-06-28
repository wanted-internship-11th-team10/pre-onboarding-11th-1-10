import { ChangeEvent, useState } from 'react';

export const TodoForm = () => {
  const [todoInput, setTodoInput] = useState<string>('');

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  return (
    <form>
      <input placeholder="todo" value={todoInput} onChange={handleTodoInputChange} />
      <button>추가</button>
    </form>
  );
};
