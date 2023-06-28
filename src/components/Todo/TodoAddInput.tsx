/**
 * Todo를 추가하는 입력 폼 컴포넌트
 */

import React, { useState } from 'react';
import { createTodoRequest } from '../../api/todo';
import { TodoType } from './TodoList';

type TodoInputAddProps = {
  todoList: TodoType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoAddInput({ todoList, setTodoList }: TodoInputAddProps) {
  // 새로운 Todo를 입력받습니다.
  const [todo, setTodo] = useState('');
  const todoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // 추가 버튼을 클릭하면 기존의 Todo 목록에 생성한 Todo를 추가합니다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      createTodoRequest({ todo: todo })
        .then((res) => {
          if (res) setTodoList([...todoList, res]);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }

    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" value={todo} onChange={todoInputChange} placeholder="할 일을 입력해주세요." />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}

export default TodoAddInput;
