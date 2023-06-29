import { TodoProvider } from '../context/todo';
import { TodoCreator, TodoList } from '../components';
import { Box } from '@chakra-ui/react';

export function TodoPage() {
  return (
    <TodoProvider>
      <Box h="100vh" margin="0 auto" display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" justifyContent="center">
          <Box p="30px" border="3px solid #ececec" borderRadius="10px">
            <h1>MY TODO</h1>
            <TodoCreator />
            <Box h="300px" overflow="scroll">
              <TodoList />
            </Box>
          </Box>
        </Box>
      </Box>
    </TodoProvider>
  );
}
