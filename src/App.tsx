import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectAuth';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TodoList from './pages/TodoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute isNeeded={false} to="/todo">
        <Signup />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <ProtectedRoute isNeeded={false} to="/todo">
        <Signup />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signin',
    element: (
      <ProtectedRoute isNeeded={false} to="/todo">
        <Signin />
      </ProtectedRoute>
    ),
  },
  {
    path: '/todo',
    element: (
      <ProtectedRoute isNeeded={true} to="/signin">
        <TodoList />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
