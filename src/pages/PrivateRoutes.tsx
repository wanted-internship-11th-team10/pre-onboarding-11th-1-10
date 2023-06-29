import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '../utils';
import { RoutePath } from './Routes';

type PrivateRoutesProps = {
  redirectPath: RoutePath;
};

export function PrivateRoutes({ redirectPath }: PrivateRoutesProps) {
  const { isLogin } = getAuth();
  return isLogin ? <Outlet /> : <Navigate to={redirectPath} replace />;
}
