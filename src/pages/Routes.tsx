import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { AuthRedirect } from './AuthRedirect';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<AuthRedirect redirectPath="/todo" />}>
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/signin" element={<div>Signin</div>} />
      </Route>

      <Route element={<PrivateRoutes redirectPath="/signin" />}>
        <Route path="/todo" element={<div>TODO</div>} />
      </Route>

      <Route path="/" element={<Navigate to="/todo" replace />} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </ReactRouterRoutes>
  );
};

export type RoutePath = '/signup' | '/signin' | '/todo';
