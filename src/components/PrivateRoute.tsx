import { Navigate } from 'react-router-dom';

type PrivateRoutePropsType = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: PrivateRoutePropsType) => {
  const isLogined = !!window.localStorage.getItem('token');
  console.log(isLogined);
  return isLogined ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
