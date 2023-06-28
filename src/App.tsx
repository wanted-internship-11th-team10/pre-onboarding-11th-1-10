import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Signin, Signup } from './pages';

function App() {
  const [accessToken, setAccessToken] = useState(() => window.localStorage.getItem('access_token') ?? '');

  const updateToken = (token: string) => {
    window.localStorage.setItem('access_token', token);
    setAccessToken(token);
  };

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={accessToken ? <Navigate to="/todo" /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={accessToken ? <Navigate to="/todo" /> : <Signup />} />
          <Route
            path="/signin"
            element={accessToken ? <Navigate to="/todo" /> : <Signin updateToken={updateToken} />}
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: antiquewhite;
  border-radius: 6px;
`;

export default App;
