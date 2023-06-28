import { ChangeEvent, FormEvent, useState } from 'react';

export const TodoForm = () => {
  const [todoInput, setTodoInput] = useState<string>('');

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="todo" value={todoInput} onChange={handleTodoInputChange} />
      <button>추가</button>
    </form>
  );
};
