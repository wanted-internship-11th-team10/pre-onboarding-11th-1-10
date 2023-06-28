import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { AuthRedirect } from './AuthRedirect';

import { SignupPage } from './SignupPage';
import { SigninPage } from './SigninPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      {/*  GYU-TODO: 가독성이 안좋아 보임 */}
      <Route element={<AuthRedirect redirectPath="/todo" />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Route>

      <Route element={<PrivateRoutes redirectPath="/signin" />}>
        <Route path="/todo" element={<div>TODO</div>} />
      </Route>

      <Route path="/" element={<Navigate to="/todo" />} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </ReactRouterRoutes>
  );
};

export type RoutePath = '/signup' | '/signin' | '/todo';
