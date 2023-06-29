import { useState } from 'react';
import styled from 'styled-components';

import { Todo } from '../../api';
import { TodoItemViewer } from './TodoItemViewer';
import { TodoItemEditor } from './TodoItemEditor';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const [viewMode, setViewMode] = useState(true);

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
