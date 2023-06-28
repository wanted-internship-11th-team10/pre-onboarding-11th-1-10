/**
 * 각각의 Todo를 나타내는 컴포넌트
 */

import React, { useState } from 'react';
import { TodoType } from './TodoList';
import { updateTodoRequest } from '../../api/todo';
import TodoViewMode from './TodoViewMode';
import TodoEditMode from './TodoEditMode';

type TodoItemProps = {
  todoList: TodoType[];
  todo: TodoType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoItem({ todoList, todo, setTodoList }: TodoItemProps) {
  // Edit 모드와 View 모드 상태를 확인합니다.
  const [isViewMode, setIsViewMode] = useState(true);

  // Todo 앞의 체크박스를 클릭하면 Todo 리스트 수정 요청을 보내 기존 Todo 목록을 업데이트합니다.
  const onClickCheck = (id: number) => {
    updateTodoRequest(id, { todo: todo.todo, isCompleted: !todo.isCompleted })
      .then((res) => {
        if (res) {
          setTodoList(
            todoList.map((todo) => {
              if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
              }
              return todo;
            }),
          );
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.isCompleted} onChange={() => onClickCheck(todo.id)} />
      </label>
      {isViewMode ? (
        <TodoViewMode todo={todo} setIsViewMode={setIsViewMode} todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <TodoEditMode todo={todo} setIsViewMode={setIsViewMode} todoList={todoList} setTodoList={setTodoList} />
      )}
    </div>
  );
}

export default TodoItem;
