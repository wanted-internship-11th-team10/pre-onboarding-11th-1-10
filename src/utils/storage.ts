export const STORAGE_KEY = {
  AUTH_KEY: 'WANTED_AUTH',
} as const;

export function saveItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getItem(key: string) {
  return localStorage.getItem(key);
}
