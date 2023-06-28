import { ChangeEvent, FormEvent, useState } from 'react';

import { Todo } from '../../api';
import { useTodo } from '../../context/todo';

type TodoItemEditorProps = {
  todo: Todo;
  onChangeViewMode: () => void;
};
export function TodoItemEditor({ todo, onChangeViewMode }: TodoItemEditorProps) {
  const { onTodoUpdate } = useTodo();

  const [value, setValue] = useState(todo.todo);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmitUpdateTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;

    const updatedTodo = { ...todo, todo: value };
    onTodoUpdate(updatedTodo);
    onChangeViewMode();
  };

  return (
    <form onSubmit={handleSubmitUpdateTodo}>
      <label>
        <input type="checkbox" checked={todo.isCompleted} readOnly />
        <input data-testid="modify-input" value={value} onChange={handleChange} />
      </label>
      <button type="submit" data-testid="submit-button">
        제출
      </button>
      <button type="button" data-testid="cancel-button" onClick={onChangeViewMode}>
        취소
      </button>
    </form>
  );
}
