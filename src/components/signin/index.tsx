import { FormEvent, useEffect, useState } from 'react';
import { isValid } from '../common/utils';
import { signin } from '../../api/auth';
import useInputValue from '../../hooks/useInputValue';
import useToken from '../../hooks/useToken';

export default function SignInForm() {
  const [valid, setValid] = useState(false);
  const [email, handleEmailChange] = useInputValue();
  const [password, handlePasswordChange] = useInputValue();
  const { setToken } = useToken();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await signin({ email, password });
    setToken(response.data.access_token);
  };

  useEffect(() => {
    const result = isValid('email', email) && isValid('password', password);
    setValid(result);
  }, [email, password]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        <button type="submit" disabled={!valid}>
          로그인
        </button>
      </form>
      <div>
        <a href="/signup">회원가입</a>
      </div>
    </>
  );
}
