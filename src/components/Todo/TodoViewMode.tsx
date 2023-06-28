/**
 * Todo View 모드 컴포넌트 (default state)
 */

import React from 'react';
import { TodoType } from './TodoList';
import { deleteTodoRequest } from '../../api/todo';

type TodoViewModeProps = {
  todoList: TodoType[];
  todo: TodoType;
  setIsViewMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoViewMode({ todoList, todo, setIsViewMode, setTodoList }: TodoViewModeProps) {
  // 수정 버튼을 클릭하면 Edit 모드로 변경합니다.
  const onClickChangeEditMode = () => {
    setIsViewMode(false);
  };

  // 삭제 버튼을 클릭하면 해당 Todo의 삭제를 요청하고 Todo 목록을 업데이트합니다.
  const onClickDelete = (id: number) => {
    deleteTodoRequest(id)
      .then((res) => {
        if (res) {
          setTodoList([...todoList]);
          setTodoList(todoList.filter((todo) => todo.id !== id));
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <span style={{ marginRight: '10px' }}>{todo.todo}</span>
      <button data-testid="modify-button" onClick={onClickChangeEditMode}>
        수정
      </button>
      <button data-testid="delete-button" onClick={() => onClickDelete(todo.id)}>
        삭제
      </button>
    </>
  );
}

export default TodoViewMode;
