import { FormEvent } from 'react';
import useInputValue from '../../hooks/useInputValue';

export default function SignInForm() {
  const [email, handleEmailChange] = useInputValue();
  const [password, handlePasswordChange] = useInputValue();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(email + ' ' + password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
        <button type="submit">로그인</button>
      </form>
      <div>
        <a href="/signup">회원가입</a>
      </div>
    </>
  );
}
