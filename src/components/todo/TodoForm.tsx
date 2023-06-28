import { ChangeEvent, FormEvent, useState } from 'react';
import { createTodo } from '../../api/todo';

export const TodoForm = () => {
  const [todoInput, setTodoInput] = useState<string>('');

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await createTodo({ todo: todoInput });
      console.log(result.data);
    } catch (err) {
      alert('투두 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="todo" value={todoInput} onChange={handleTodoInputChange} />
      <button>추가</button>
    </form>
  );
};
