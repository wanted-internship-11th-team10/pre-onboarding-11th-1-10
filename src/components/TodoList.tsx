import { useEffect, useState } from 'react';
import { getTodoApi, postTodoApi, Todo } from '../api/todo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const getTodo = async () => {
    try {
      const result = await getTodoApi();
      setTodos(result.data);
    } catch (err) {
      alert('목록을 불러오는 데 실패하였습니다.');
    }
  };

  const postTodo = async () => {
    try {
      await postTodoApi(text);
      getTodo();
      setText('');
    } catch (err) {
      alert('할일 등록에 실패하였습니다.');
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <ul>
        {todos.length != 0
          ? todos.map((todo, i) => {
              console.log(todo);
              return <TodoItem key={i} data={todo} getTodo={getTodo} />;
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
        <button onClick={postTodo}>추가</button>
      </div>
    </div>
  );
};
