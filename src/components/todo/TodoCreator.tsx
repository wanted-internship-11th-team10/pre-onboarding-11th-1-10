import { ChangeEvent, FormEvent, useState } from 'react';

import { useTodo } from '../../context/todo';

export function TodoCreator() {
  const { onTodoAdder } = useTodo();

  const [todo, setTodo] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo.trim()) return;

    onTodoAdder(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" value={todo} onChange={handleChange} autoFocus required />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
