import { useNavigate } from 'react-router';
import { AuthForm } from '../components';
import * as api from '../api/auth';

export function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async (email: string, password: string) => {
    try {
      await api.signup({ email, password });
      alert('회원가입에 성공하였습니다.');
      navigate('/signin');
    } catch (err) {
      alert('회원가입에 실패하였습니다.');
    }
  };

  return <AuthForm testId="signup" title="회원가입" onSubmit={handleSubmit} />;
}
