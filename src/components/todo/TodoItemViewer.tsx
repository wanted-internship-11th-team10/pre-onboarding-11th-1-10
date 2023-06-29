import { ChangeEvent } from 'react';

import { useTodo } from '../../context/todo';
import { Todo } from '../../api';

type TodoItemViewerProps = {
  todo: Todo;
  onChangeEditMode: () => void;
};
export function TodoItemViewer({ todo, onChangeEditMode }: TodoItemViewerProps) {
  const { onTodoUpdate, onTodoDelete } = useTodo();

  const handleChangeItemCompleted = (event: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = event.target.checked;
    onTodoUpdate({ ...todo, isCompleted });
  };

  const handleTodoDelete = () => {
    onTodoDelete(todo.id);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={todo.isCompleted} onChange={handleChangeItemCompleted} />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={onChangeEditMode}>
        수정
      </button>
      <button data-testid="delete-button" onClick={handleTodoDelete}>
        삭제
      </button>
    </>
  );
}
