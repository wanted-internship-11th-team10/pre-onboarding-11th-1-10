import { Box, Flex } from '@chakra-ui/react';

import { TodoProvider } from '../context/todo';
import { TodoCreator, TodoList } from '../components';

export function TodoPage() {
  return (
    <TodoProvider>
      <Flex h="100vh" margin="0 auto" flexDirection="column" justifyContent="center">
        <Flex justifyContent="center">
          <Box p="30px" border="3px solid #ececec" borderRadius="10px">
            <h1 style={{ fontWeight: '600', fontSize: '20px' }}>MY TODO</h1>
            <TodoCreator />
            <Box h="300px" overflow="auto">
              <TodoList />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </TodoProvider>
  );
}
