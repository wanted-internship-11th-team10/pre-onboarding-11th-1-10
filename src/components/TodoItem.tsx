import { useState } from 'react';
import { deleteTodoApi, Todo, updatedTodoApi } from '../api/todo';

type TodoItemPropsType = {
  data: Todo;
  getTodo: () => Promise<void>;
};

export const TodoItem = ({ data, getTodo }: TodoItemPropsType) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>('');

  const deleteTodo = async () => {
    try {
      await deleteTodoApi(data.id);
      getTodo();
    } catch (err) {
      alert('할일 삭제에 실패하였습니다.');
    }
  };
  const checkedTodo = async () => {
    try {
      await updatedTodoApi({ id: data.id, todo: data.todo, isCompleted: !data.isCompleted });
      getTodo();
    } catch (err) {
      alert('할일 수정에 실패하였습니다.');
    }
  };

  const updatedTodo = async () => {
    try {
      await updatedTodoApi({ id: data.id, todo: newTodo, isCompleted: data.isCompleted });
      getTodo();
      setIsEdit(false);
    } catch (err) {
      alert('할일 수정에 실패하였습니다.');
    }
  };
  return (
    <li key={data.id}>
      {/* 가독성과 기능 분리를 위해 컴포넌트화가 필요해보임. 하지만 드릴링이 깊어지는 데..*/}
      <div>
        {isEdit ? (
          <input
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewTodo(e.target.value);
            }}
          />
        ) : (
          <>
            <input id={`checkbox-${data.id}`} type="checkbox" onChange={checkedTodo} checked={data.isCompleted} />
            <label htmlFor={`checkbox-${data.id}`}>{data.todo}</label>
          </>
        )}
      </div>
      {isEdit ? (
        <div>
          <button onClick={updatedTodo}>제출</button>
          <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setNewTodo(data.todo);
              setIsEdit(true);
            }}
          >
            수정
          </button>
          <button onClick={deleteTodo}>삭제</button>
        </div>
      )}
    </li>
  );
};
