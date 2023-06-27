import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValid } from '../common/utils';
import { signup } from '../../api/auth';
import useInputValue from '../../hooks/useInputValue';

export default function SignUpForm() {
  const [valid, setValid] = useState(false);
  const [email, handleEmailChange] = useInputValue();
  const [password, handlePasswordChange] = useInputValue();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signup({ email, password });

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다!');
        navigate('/signin');
      }
    } catch (err) {
      alert('회원가입에 실패했습니다. 다시 시도해주세요. ');
    }
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
          회원가입
        </button>
      </form>
      <div>
        <a href="/signin">로그인</a>
      </div>
    </>
  );
}
