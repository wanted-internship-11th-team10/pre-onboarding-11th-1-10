import { ChangeEvent, useState } from 'react';
import { Todo, updateTodo } from '../../api/todo';
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

  const handleModeChagne = () => {
    setIsUpdateMode(!isUpdateMode);
  };

  const handleUpdatedTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = async () => {
    const data = { ...todo, todo: todoTitle, isCompleted };

    try {
      const result = await updateTodo(data);
      handleUpdateTodo(result.data);
    } catch (err) {
      alert('투두 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
      {!isUpdateMode && (
        <>
          <span>{todo.todo}</span>
          <button onClick={handleModeChagne}>수정</button>
          <button>삭제</button>
        </>
      )}
      {isUpdateMode && (
        <>
          <input type="text" value={todoTitle} onChange={handleUpdatedTodoChange} />
          <button onClick={handleSubmit}>제출</button>
          <button onClick={handleModeChagne}>취소</button>
        </>
      )}
    </div>
  );
};
