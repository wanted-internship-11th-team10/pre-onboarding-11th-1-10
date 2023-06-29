import { ChangeEvent, useState } from 'react';

export function useSign() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.target.value;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const email = value.email;
  const password = value.password;
  const isValid = checkValid(email, password);

  return { email, password, isValid, onChange };
}

function checkValid(email: string, password: string) {
  return !(!email.includes('@') || password.length < 8);
}
