import { Navigate } from 'react-router-dom';

type PublicRoutePropsType = {
  children: JSX.Element;
};
const PublicRoute = ({ children }: PublicRoutePropsType) => {
  const isLogined = !!window.localStorage.getItem('token');
  console.log(isLogined);
  return isLogined ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
