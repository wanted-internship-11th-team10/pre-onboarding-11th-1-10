import AuthClient from '../api/authClient';
import { FormType } from '../components/Form';

export default async function auth(form: FormType, type: string) {
  const auth = new AuthClient();

  if (type === 'signup') {
    return await auth.signup(form).catch(() => alert('이미 존재하는 아이디입니다.'));
  }
  if (type === 'signin') {
    return await auth.signin(form).then((res) => {
      const JWT = res.data.access_token;
      localStorage.setItem('JWT', JWT);
      return '통신 성공!';
    });
  }
}
