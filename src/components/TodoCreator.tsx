import { FormEventHandler } from 'react';
import { useInput } from '../hooks';
import { useHandleTodo } from '../context';
import styled from 'styled-components';

export const TodoCreator = () => {
  const [value, handleValueChange, setValue] = useInput('');
  const { createTodo } = useHandleTodo();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (value !== '') {
      createTodo(value);
      setValue('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input data-testid="new-todo-input" value={value} onChange={handleValueChange} placeholder="오늘 할일은?" />
      <Button data-testid="new-todo-add-button" type="submit">
        추가
      </Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 8px;
`;
const Input = styled.input`
  flex: 1;
`;
const Button = styled.button`
  padding: 4px 8px;
`;
