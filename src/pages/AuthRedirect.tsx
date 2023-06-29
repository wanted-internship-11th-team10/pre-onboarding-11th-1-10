import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '../utils';
import { RoutePath } from './Routes';

type AuthRedirectProps = {
  redirectPath: RoutePath;
};

export function AuthRedirect({ redirectPath }: AuthRedirectProps) {
  const { isLogin } = getAuth();
  return isLogin ? <Navigate to={redirectPath} replace /> : <Outlet />;
}
