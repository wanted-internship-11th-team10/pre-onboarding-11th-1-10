/**
 * 수정 버튼을 클릭했을때 보이는 Todo Edit 모드 컴포넌트
 */

import React, { useState } from 'react';
import { TodoType } from './TodoList';
import { updateTodoRequest } from '../../api/todo';

type TodoEditModeProps = {
  todoList: TodoType[];
  todo: TodoType;
  setIsViewMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoEditMode({ todoList, todo, setIsViewMode, setTodoList }: TodoEditModeProps) {
  // 수정된 Todo를 입력받습니다.
  const [newTodo, setNewTodo] = useState(todo.todo);
  const handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

  // 제출 버튼을 클릭하면 updateTodo를 요청하고 변경한 Todo로 기존의 Todo 목록을 업데이트합니다.
  // 또한, Edit 모드는 기존의 View모드로 변경합니다.
  const onClickSubmit = (id: number) => {
    updateTodoRequest(id, { todo: newTodo, isCompleted: todo.isCompleted })
      .then((res) => {
        if (res) {
          setTodoList(
            todoList.map((todo) => {
              if (todo.id === id) {
                todo.todo = newTodo;
              }
              setIsViewMode(true);
              return todo;
            }),
          );
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  // 제출을 하지 않고 취소 버튼을 클릭하는 경우 View 모드로 변경합니다.
  const onClickCancel = () => {
    setIsViewMode(true);
  };

  return (
    <>
      <input data-testid="modify-input" defaultValue={todo.todo} onChange={handleNewTodo} />
      <button data-testid="submit-button" onClick={() => onClickSubmit(todo.id)}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={onClickCancel}>
        취소
      </button>
    </>
  );
}

export default TodoEditMode;
