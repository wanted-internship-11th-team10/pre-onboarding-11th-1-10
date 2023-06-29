import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

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
      <Flex>
        <Input w="300px" data-testid="new-todo-input" value={todo} onChange={handleChange} autoFocus required />
        <Button type="submit" data-testid="new-todo-add-button" backgroundColor="teal" color="white" colorScheme="teal">
          추가
        </Button>
      </Flex>
    </form>
  );
}
