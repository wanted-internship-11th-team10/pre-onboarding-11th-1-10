import { AuthForm } from '../components';

export const SignupPage = () => {
  const handleSubmit = () => {
    //
  };

  return <AuthForm testId="signup" title="회원가입" onSubmit={handleSubmit} />;
};
