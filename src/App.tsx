import styled from 'styled-components';
import { Routes } from './pages/Routes';

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

const Layout = styled.main`
  margin: 0 auto;
  width: 500px;
  background-color: antiquewhite;
  border-radius: 6px;
`;

export default App;
