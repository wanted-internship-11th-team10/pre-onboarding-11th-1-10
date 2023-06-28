export * from './todo';

import axios from 'axios';
import { useAuth } from '../hooks';

export const apiInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use((config) => {
  const { isLogin, token } = useAuth();

  if (isLogin) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});
