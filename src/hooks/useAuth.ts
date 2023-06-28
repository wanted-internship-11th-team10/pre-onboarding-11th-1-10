import { getItem, STORAGE_KEY } from '../utils';

/**
 * @desc 로그인 여부를 파악하는 hooks
 * @returns
 * - isLogin: 로그인 여부
 * - token: 로그인시 jwt accessToken
 */
export function useAuth() {
  const token = getItem(STORAGE_KEY.AUTH_KEY);
  return {
    isLogin: !!token,
    token: token,
  };
}
