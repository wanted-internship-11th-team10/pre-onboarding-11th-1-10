import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Todo } from './TodoList';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo: { id, todo, isCompleted } }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(isCompleted);
  const [text, setText] = useState('');
  const { onUpdate, onDelete } = useTodo();

  console.log(id);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleCheck = () => {
    setChecked(!checked);
    onUpdate(id, { todo, isCompleted: !checked });
  };

  const handleUpdate = () => {
    onUpdate(id, { todo: text, isCompleted });
    setText('');
    setIsEditing(false);
  };

  const changeEditStatus = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setText('');
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <div>
        <input type="checkbox" name={id.toString()} id={id.toString()} checked={checked} onChange={handleCheck} />
        {isEditing ? <input data-testid="modify-input" value={text} onChange={handleChangeInput} /> : <p>{todo}</p>}
      </div>
      {isEditing ? (
        <div>
          <button data-testid="submit-button" onClick={handleUpdate}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={changeEditStatus}>
            취소
          </button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button" onClick={changeEditStatus}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}
