import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  isNeeded: boolean;
  to: string;
};

export default function ProtectedRoute({ children, isNeeded, to }: Props) {
  const isLoggedIn = localStorage.getItem('JWT');

  if (isNeeded ? !isLoggedIn : isLoggedIn) return <Navigate to={to} replace={true} />;
  return <>{children}</>;
}
