import styled from 'styled-components';
import { TodoProvider } from '../context';
import { TodoCreator, TodoList } from '../components';

export const TodoPage = () => {
  return (
    <TodoProvider>
      <Container>
        <Title>할일 목록</Title>
        <TodoCreator />
        <TodoList />
      </Container>
    </TodoProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 24px;
`;

const Title = styled.h2`
  text-align: center;
`;
