import { ChangeEvent, FormEvent, useState } from 'react';

export function TodoAdder() {
  return (
    <form
      onSubmit={() => {
        console.log;
      }}
    >
      <input data-testid="new-todo-input" />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
