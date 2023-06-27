import { Signup, Signin } from './pages';
import { Route, Routes } from 'react-router-dom';
import AuthCheck from './authCheck';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthCheck />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
