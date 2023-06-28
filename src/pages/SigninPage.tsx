import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useSign } from '../hooks/useSign';
import { ErrorResponse, signin } from '../apis';
import { STORAGE_KEY, saveItem } from '../utils';

export function SigninPage() {
  const { email, password, isValid, onChange } = useSign();
  const navigate = useNavigate();

  const handleSingin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await signin(email, password);
      saveItem(STORAGE_KEY.AUTH_KEY, data.access_token);
      navigate('/todo');
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSingin}>
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
      <button type="submit" data-testid="signin-button" disabled={!isValid}>
        로그인
      </button>
    </form>
  );
}
