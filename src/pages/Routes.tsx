import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

import { SignupPage } from './SignupPage';
import { SigninPage } from './SigninPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/" element={<div>홈</div>} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </ReactRouterRoutes>
  );
};
