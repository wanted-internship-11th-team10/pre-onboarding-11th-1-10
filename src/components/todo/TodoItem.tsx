import { useState } from 'react';

import { Todo } from '../../api';
import { TodoItemViewer } from './TodoItemViewer';
import { TodoItemEditor } from './TodoItemEditor';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const [viewMode, setViewMode] = useState(true);

  return (
    <li style={{ listStyle: 'none' }}>
      {viewMode ? (
        <TodoItemViewer todo={todo} onChangeEditMode={() => setViewMode(false)} />
      ) : (
        <TodoItemEditor todo={todo} onChangeViewMode={() => setViewMode(true)} />
      )}
    </li>
  );
}
