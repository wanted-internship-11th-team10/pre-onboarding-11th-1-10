import { FormEventHandler } from 'react';
import { useSign } from '../hooks';

interface AuthFormProps {
  testId: 'signup' | 'signin';
  title: string;
  onSubmit: (email: string, pw: string) => void;
}

export const AuthForm = ({ testId, title, onSubmit }: AuthFormProps) => {
  const { email, password, isValid, onChange } = useSign();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isValid) {
      onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <label htmlFor="email">Email:</label>
      <input
        data-testid="email-input"
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="example@domain.com"
        autoFocus
      />
      <label htmlFor="password">Password:</label>
      <input
        data-testid="password-input"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <div>
        <button data-testid={`${testId}-button`} type="submit" disabled={!isValid}>
          {title}
        </button>
      </div>
    </form>
  );
};
