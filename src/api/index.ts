export * from './todo';

import axios from 'axios';
import { useAuth } from '../hooks';

export const client = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const { isLogin, token } = useAuth();

  if (isLogin) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});
