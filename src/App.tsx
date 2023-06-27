import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TodoList from './pages/TodoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/todo',
    element: <TodoList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
