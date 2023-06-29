import React, { useState } from 'react';

export default function TodoInput() {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // addTodo
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" type="text" onChange={handleChange} value={text} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}
