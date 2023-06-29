import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

import { useTodo } from '../../context/todo';

export function TodoCreator() {
  const { onTodoAdder } = useTodo();

  const [todo, setTodo] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo.trim()) return;

    onTodoAdder(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex">
        <Input w="300px" data-testid="new-todo-input" value={todo} onChange={handleChange} autoFocus required />
        <Button type="submit" data-testid="new-todo-add-button">
          추가
        </Button>
      </Box>
    </form>
  );
}
