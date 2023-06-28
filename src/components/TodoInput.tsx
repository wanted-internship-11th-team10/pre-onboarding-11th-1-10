import { useState } from 'react';
import { postTodoApi } from '../api/todo';

type TodoInputPropsType = {
  getTodo: () => Promise<void>;
};

export const TodoInput = ({ getTodo }: TodoInputPropsType) => {
  const [text, setText] = useState<string>('');
  const postTodo = async () => {
    try {
      await postTodoApi(text);
      getTodo();
      setText('');
    } catch (err) {
      alert('할일 등록에 실패하였습니다.');
    }
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={postTodo}>추가</button>
    </div>
  );
};
