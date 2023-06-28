import { AuthForm } from '../components';

export const SigninPage = () => {
  const handleSubmit = () => {
    //
  };

  return <AuthForm testId="signin" title="로그인" onSubmit={handleSubmit} />;
};
