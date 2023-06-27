import axios from 'axios';
import useToken from '../hooks/useToken';

export const apiInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use((config) => {
  const { token } = useToken();

  if (token) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});
