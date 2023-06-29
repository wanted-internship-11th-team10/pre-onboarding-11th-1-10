import { Routes } from './pages/Routes';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex w="100vw" h="100vh" align="center" justify="center" direction="column">
        <Container w="500px">
          <Routes />
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
