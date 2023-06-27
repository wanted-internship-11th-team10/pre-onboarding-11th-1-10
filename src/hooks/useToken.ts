const STORAGE_KEY = 'ACCESS_TOKEN';

export default function useToken() {
  const token = localStorage.getItem(STORAGE_KEY);

  const setToken = (newToken: string) => {
    localStorage.setItem(STORAGE_KEY, newToken);
  };

  return { token, setToken };
}
