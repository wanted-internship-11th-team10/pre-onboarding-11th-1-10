import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { AuthRedirect } from './AuthRedirect';
import { SigninPage } from './SigninPage';
import { SignupPage } from './SignupPage';
import { TodoPage } from './TodoPage';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route element={<AuthRedirect redirectPath="/todo" />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Route>

      <Route element={<PrivateRoutes redirectPath="/signin" />}>
        <Route path="/todo" element={<TodoPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/todo" replace />} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </ReactRouterRoutes>
  );
}

export type RoutePath = '/signup' | '/signin' | '/todo';
