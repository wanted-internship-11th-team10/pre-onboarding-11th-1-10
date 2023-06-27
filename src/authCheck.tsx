import { Outlet } from 'react-router-dom';

const AuthCheck = () => {
  const isLogined = !!window.localStorage.getItem('token');
  return isLogined ? <div>토큰있음</div> : <Outlet />;
};

export default AuthCheck;
