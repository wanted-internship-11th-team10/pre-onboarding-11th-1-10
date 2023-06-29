import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import { Routes } from './pages/Routes';

function App() {
  return <Routes />;
}

const Layout = styled.main`
  margin: 0 auto;
  width: 500px;
  background-color: antiquewhite;
  border-radius: 6px;
`;

export default App;
