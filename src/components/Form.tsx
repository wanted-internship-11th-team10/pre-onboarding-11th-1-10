/**
 * 회원가입 및 로그인 화면에 사용할 공통 입력 폼 컴포넌트
 */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from '../api/auth';

export type FormType = {
  email: string;
  password: string;
};

function Form() {
  const authRequest = new Axios();
  const navigate = useNavigate();

  // 현재 url 위치를 파악 (/signin, /signup)
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState<string>('');

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  // 사용자의 이메일 및 패스워드 상태
  const [email, setEmail] = useState<FormType['email']>('');
  const [password, setPassword] = useState<FormType['password']>('');

  // 사용자의 이메일 및 패스워드 상태 변경
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 이메일 및 패스워드 데이터 전송
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentLocation === '/signup') {
      authRequest.signUpRequest({ email, password }).then((res) => {
        if (res) navigate('/signin');
      });
    }

    if (currentLocation === '/signin') {
      authRequest.signInRequest({ email, password }).then((res) => {
        if (res) {
          localStorage.setItem('access_token', res.data.access_token);
          navigate('/todo');
        }
      });
    }
  };

  // 이메일 및 패스워드의 입력 검증
  const isValidated = email.includes('@') && password.length >= 8;

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid={'email-input'}
        name={'email'}
        type={'email'}
        placeholder={'이메일'}
        onChange={handleEmail}
        value={email}
      />
      <input
        data-testid={'password-input'}
        name={'password'}
        type={'password'}
        placeholder={'비밀번호'}
        onChange={handlePassword}
        value={password}
      />
      {currentLocation === '/signin' ? (
        <button data-testid={`${currentLocation}-button`} disabled={!isValidated}>
          로그인
        </button>
      ) : currentLocation === '/signup' ? (
        <button data-testid={`${currentLocation}-button`} disabled={!isValidated}>
          회원가입
        </button>
      ) : (
        ''
      )}
    </form>
  );
}

export default Form;
