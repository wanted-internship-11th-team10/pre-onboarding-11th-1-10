import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/** pages */
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route element={<PrivateRoute authRequire={false} />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute authRequire={false} />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute authRequire={true} />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
