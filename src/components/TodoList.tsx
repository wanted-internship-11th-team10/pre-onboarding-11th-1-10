import { useEffect, useState } from 'react';
import { TodoInput, TodoItem } from '.';
import { getTodoApi, Todo } from '../api/todo';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodo = async () => {
    try {
      const result = await getTodoApi();
      setTodos(result.data);
    } catch (err) {
      alert('목록을 불러오는 데 실패하였습니다.');
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <ul>
        {todos.length != 0
          ? todos.map((todo: Todo, i: number) => {
              return <TodoItem key={i} data={todo} getTodo={getTodo} />;
            })
          : '목록이 비어 있습니다'}
      </ul>
      <TodoInput getTodo={getTodo} />
    </div>
  );
};
