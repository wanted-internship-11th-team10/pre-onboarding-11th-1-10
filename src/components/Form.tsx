import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

export type FormType = {
  [index: string]: string;
  email: string;
  password: string;
};

type Props = {
  page: string;
};

export default function Form({ page }: Props) {
  const [form, setForm] = useState<FormType>(initialForm);
  const isAvailable = form.email.includes('@') && form.password.length >= 8;
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth(form, page).then((res) => {
      if (page === 'signup') {
        res && navigate('/signin');
      }
      if (page === 'signin') {
        res && navigate('/todo');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((item, idx) => (
        <input
          key={idx}
          data-testid={`${item}-input`}
          name={item}
          type={item}
          placeholder={item}
          onChange={handleChange}
          value={form[item]}
        />
      ))}
      <button data-testid={`${page}-button`} disabled={!isAvailable}>
        {page}
      </button>
    </form>
  );
}

const initialForm = { email: '', password: '' };
const inputs = ['email', 'password'];
