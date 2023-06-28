import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components';
import { loginMemberApi } from '../api/auth';
import { STORAGE_KEY, saveItem } from '../utils';

export const SigninPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (email: string, password: string) => {
    try {
      const result = await loginMemberApi({ email, password });
      alert('로그인에 성공하였습니다.');
      saveItem(STORAGE_KEY.AUTH_KEY, result.data.access_token);
      navigate('/todo');
    } catch (err) {
      alert('로그인에 실패하였습니다.');
    }
  };

  return <AuthForm testId="signin" title="로그인" onSubmit={handleSubmit} />;
};
