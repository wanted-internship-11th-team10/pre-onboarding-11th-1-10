import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PublicAuth from './components/common/PublicAuth';
import PrivateAuth from './components/common/PrivateAuth';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<PublicAuth component={SignInPage} redirectURL="/todo" />} />
        <Route path="/signup" element={<PublicAuth component={SignUpPage} redirectURL="/todo" />} />
        <Route path="/todo" element={<PrivateAuth component={TodoPage} redirectURL="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}
