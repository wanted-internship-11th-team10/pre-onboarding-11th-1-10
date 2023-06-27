import { Navigate } from 'react-router-dom';
import { AuthProps } from './type';
import useToken from '../../hooks/useToken';

export default function PrivateAuth({ component, redirectURL }: AuthProps) {
  const { token } = useToken();

  if (!token) return <Navigate to={redirectURL} />;
  return component();
}
