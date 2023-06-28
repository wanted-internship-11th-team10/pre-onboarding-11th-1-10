import styled from 'styled-components';
import { TodoItem } from './TodoItem';
import { useTodo } from '../context';

export const TodoList = () => {
  const todos = useTodo();

  return (
    <Ul>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  padding-inline-start: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;
`;
