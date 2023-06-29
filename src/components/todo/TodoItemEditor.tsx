import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Checkbox, Flex, Input } from '@chakra-ui/react';

import { Todo } from '../../api';
import { useTodo } from '../../context/todo';

type TodoItemEditorProps = {
  todo: Todo;
  onChangeViewMode: () => void;
};
export function TodoItemEditor({ todo, onChangeViewMode }: TodoItemEditorProps) {
  const { onTodoUpdate } = useTodo();

  const [value, setValue] = useState(todo.todo);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmitUpdateTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;

    const updatedTodo = { ...todo, todo: value };
    onTodoUpdate(updatedTodo);
    onChangeViewMode();
  };

  return (
    <form onSubmit={handleSubmitUpdateTodo} style={{ width: '100%' }}>
      <Flex w="100%" mt="10px" justifyContent="space-between">
        <Checkbox size="lg" checked={todo.isCompleted} readOnly />
        <Input w="200px" data-testid="modify-input" value={value} onChange={handleChange} autoFocus required />
        <Button type="submit" data-testid="submit-button">
          제출
        </Button>
        <Button type="button" data-testid="cancel-button" onClick={onChangeViewMode}>
          취소
        </Button>
      </Flex>
    </form>
  );
}
