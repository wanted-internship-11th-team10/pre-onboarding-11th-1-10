import { ChangeEvent } from 'react';
import { Box, Button, Checkbox } from '@chakra-ui/react';

import { useTodo } from '../../context/todo';
import { Todo } from '../../api';

type TodoItemViewerProps = {
  todo: Todo;
  onChangeEditMode: () => void;
};
export function TodoItemViewer({ todo, onChangeEditMode }: TodoItemViewerProps) {
  const { onTodoUpdate, onTodoDelete } = useTodo();

  const handleChangeItemCompleted = (event: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = event.target.checked;
    onTodoUpdate({ ...todo, isCompleted });
  };

  const handleTodoDelete = () => {
    onTodoDelete(todo.id);
  };

  return (
    <Box w="100%" mt="10px" display="flex" justifyContent="space-between">
      <Checkbox size="lg" checked={todo.isCompleted} onChange={handleChangeItemCompleted}>
        {todo.todo}
      </Checkbox>
      <Box>
        <Button mr="5px" data-testid="modify-button" onClick={onChangeEditMode}>
          수정
        </Button>
        <Button data-testid="delete-button" onClick={handleTodoDelete}>
          삭제
        </Button>
      </Box>
    </Box>
  );
}
