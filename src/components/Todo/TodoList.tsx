/**
 * Todo 리스트 컴포넌트
 */

import { useEffect, useState } from 'react';
import { getTodoRequest } from '../../api/todo';
import TodoItem from './TodoItem';
import TodoAddInput from './TodoAddInput';

// 모든 Todo 관련 컴포넌트에서 사용할 Todo 타입
export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

function TodoList() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  // Todo 페이지에 진입하면 자신의 Todo 목록을 요청하고 todoList에 저장합니다.
  useEffect(() => {
    getTodoRequest()
      .then((res) => {
        if (res) setTodoList(res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  return (
    <>
      <TodoAddInput todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </>
  );
}

export default TodoList;
