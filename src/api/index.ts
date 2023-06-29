export * from './todo';

import axios from 'axios';
import { getAuth } from '../utils';

export const client = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const { isLogin, token } = getAuth();

  if (isLogin) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});
