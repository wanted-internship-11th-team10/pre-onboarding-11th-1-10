import { FormEvent } from 'react';

export function TodoAdder() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
