import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks';
import { RoutePath } from './Routes';

type AuthRedirectProps = {
  redirectPath: RoutePath;
};

export function AuthRedirect({ redirectPath }: AuthRedirectProps) {
  const { isLogin } = useAuth();
  return isLogin ? <Navigate to={redirectPath} replace /> : <Outlet />;
}
