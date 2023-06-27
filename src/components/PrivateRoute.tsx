/**
 * 로그인 여부에 따른 페이지 리다이렉트를 도와주는 컴포넌트
 */

import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactElement;
  authRequire: boolean;
}

export default function PrivateRoute({ authRequire }: PrivateRouteProps): React.ReactElement | null {
  const isAuthenticated = localStorage.getItem('access_token');

  if (authRequire) {
    // 인증이 반드시 필요한 페이지 (authRequire={true})
    return isAuthenticated === null ? <Navigate to="/signin" /> : <Outlet />;
  } else {
    // 인증이 반드시 필요 없는 페이지 (authRequire={false})
    return isAuthenticated === null ? <Outlet /> : <Navigate to="/todo" />;
  }
}
