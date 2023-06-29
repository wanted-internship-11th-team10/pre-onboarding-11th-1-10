import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoInput() {
  const [text, setText] = useState('');
  const { onCreate } = useTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" type="text" onChange={handleChange} value={text} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}
