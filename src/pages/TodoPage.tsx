import { TodoProvider } from '../context/todo';
import { TodoCreator, TodoList } from '../components';
import { Box } from '@chakra-ui/react';

export function TodoPage() {
  return (
    <TodoProvider>
      <Box w="500px" h="100vh" margin="0 auto" display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" justifyContent="center">
          <div>
            <TodoCreator />
            <TodoList />
          </div>
        </Box>
      </Box>
    </TodoProvider>
  );
}
