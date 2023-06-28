import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks';
import { RoutePath } from './Routes';

type PrivateRoutesProps = {
  redirectPath: RoutePath;
};

export function PrivateRoutes({ redirectPath }: PrivateRoutesProps) {
  const { isLogin } = useAuth();
  return isLogin ? <Outlet /> : <Navigate to={redirectPath} replace />;
}
