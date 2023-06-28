import { useState } from 'react';

import { Todo } from '../../api';
import { TodoItemViewer } from './TodoItemViewer';
import { TodoItemEditor } from './TodoItemEditor';
import styled from 'styled-components';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const [viewMode, setViewMode] = useState(true);

  // GYU-TODO: 선언형이면, react-if 패턴이 더 좋을까!?
  return (
    <TodoItemWrapper>
      {viewMode ? (
        <TodoItemViewer todo={todo} onChangeEditMode={() => setViewMode(false)} />
      ) : (
        <TodoItemEditor todo={todo} onChangeViewMode={() => setViewMode(true)} />
      )}
    </TodoItemWrapper>
  );
}

const TodoItemWrapper = styled.li`
  list-style: none;
  display: flex;
  gap: 0.5rem;
`;
