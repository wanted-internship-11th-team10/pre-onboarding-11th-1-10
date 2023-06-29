import { useState } from 'react';
import { Todo } from './TodoList';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  return (
    <li>
      <div>
        <input type="checkbox" name={todo.id.toString()} id={todo.id.toString()} />
        {isEditing ? <input data-testid="modify-input" value={text} /> : <p>{todo.todo}</p>}
      </div>
      {isEditing ? (
        <div>
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button">취소</button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </div>
      )}
    </li>
  );
}
