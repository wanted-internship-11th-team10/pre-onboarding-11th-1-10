import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/signup" element={<div>Signup</div>} />
      <Route path="/signin" element={<div>Signin</div>} />
      <Route path="/" element={<div>홈</div>} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </ReactRouterRoutes>
  );
};
