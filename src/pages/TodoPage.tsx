import styled from 'styled-components';
import { TodoList } from '../components/TodoList';

export const TodoPage = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

const Layout = styled.div``;
