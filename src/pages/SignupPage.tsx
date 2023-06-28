import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useSign } from '../hooks';
import { ErrorResponse, signup } from '../apis';

export function SignupPage() {
  const { email, password, isValid, onChange } = useSign();
  const navigate = useNavigate();

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signup(email, password);
      navigate('/signin');
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        name="email"
        data-testid="email-input"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        data-testid="password-input"
        placeholder="password"
        value={password}
        onChange={onChange}
      />
      <button type="submit" data-testid="signup-button" disabled={!isValid}>
        회원가입
      </button>
    </form>
  );
}
