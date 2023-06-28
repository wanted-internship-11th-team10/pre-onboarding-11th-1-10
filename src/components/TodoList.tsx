import { useEffect, useState } from 'react';
import { getTodo, Todo } from '../api/todo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const handleData = async () => {
    try {
      const result = await getTodo();
      setTodos(result.data);
    } catch (err) {
      alert('목록을 불러오는 데 실패하였습니다.');
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div>
      <ul>
        {todos.length != 0
          ? todos.map((todo, i) => {
              console.log(todo);
              return <TodoItem key={i} props={todo} />;
            })
          : '목록이 비어 있습니다'}
      </ul>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>추가</button>
      </div>
    </div>
  );
};
