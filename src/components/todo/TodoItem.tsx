import { ChangeEvent, useState } from 'react';
import { Todo, deleteTodo, updateTodo } from '../../api/todo';
import { useTodoContext } from '../../hooks';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(todo.todo);
  const { handleUpdateTodo, handleDeleteTodo } = useTodoContext();

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  const handleUpdateMode = () => {
    setIsUpdateMode(true);
  };

  const handleUpdateCancle = () => {
    setIsUpdateMode(false);
    setTodoTitle(todo.todo);
  };

  const handleTodoTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = async () => {
    const data = { ...todo, todo: todoTitle, isCompleted };

    try {
      const result = await updateTodo(data);
      handleUpdateTodo(result.data);
      setIsUpdateMode(false);
    } catch (err) {
      alert('투두 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleDelete = () => {
    try {
      deleteTodo(todo.id);
      handleDeleteTodo(todo.id);
    } catch (err) {
      alert('투두 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <li>
      {!isUpdateMode && (
        <>
          <label>
            <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={handleUpdateMode}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </>
      )}
      {isUpdateMode && (
        <>
          <label>
            <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
          </label>
          <input data-testid="modify-input" type="text" value={todoTitle} onChange={handleTodoTitleChange} />
          <button data-testid="submit-button" onClick={handleSubmit}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={handleUpdateCancle}>
            취소
          </button>
        </>
      )}
    </li>
  );
};
