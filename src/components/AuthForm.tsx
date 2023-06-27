import { FormEventHandler } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks';

interface AuthFormProps {
  testId: 'signup' | 'signin';
  title: string;
  onSubmit: (email: string, pw: string) => void;
}

export const AuthForm = ({ testId, title, onSubmit }: AuthFormProps) => {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const isValidated = /@+/i.test(email) && password.length >= 8;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isValidated) {
      onSubmit(email, password);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H2>{title}</H2>
      <label htmlFor="email">Email:</label>
      <Input
        data-testid="email-input"
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="example@domain.com"
      />
      <label htmlFor="password">Password:</label>
      <Input
        data-testid="password-input"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div>
        <Button data-testid={`${testId}-button`} type="submit" disabled={!isValidated}>
          {title}
        </Button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 16px 24px;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  margin: 12px 0 24px;
  padding: 4px;
`;

const Button = styled.button`
  padding: 4px 8px;
  float: right;
`;
