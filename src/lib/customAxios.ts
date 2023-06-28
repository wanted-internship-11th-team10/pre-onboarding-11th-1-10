import axios from 'axios';

const token = window.localStorage.getItem('token');
const BACKEND_URL = process.env.REACT_APP_PUBLIC_BACKEND_URL;

// 토큰 유효성 검사 필요 api
export const authAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

// 토큰 유효성 검사 불필요 api
export const notAuthAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 회원가입 api
export const postMemberApi = (id: string, pw: string) => {
  return notAuthAxios.post('/auth/signup', {
    email: id,
    password: pw,
  });
};

// 윈도우 객체가 감지하지 못하는 token 값에 대해 인터셉터로 요청 전 갱신
export const setAuthAxiosHeaders = (_token: string) => {
  authAxios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${_token}`;
    return config;
  });
};
// 로그인 api
export const loginMemberApi = async (id: string, pw: string) => {
  const loginApiRes = await notAuthAxios.post('/auth/signin', {
    email: id,
    password: pw,
  });
  setAuthAxiosHeaders(loginApiRes.data.access_token);
  // localstorage token 저장
  window.localStorage.setItem('token', loginApiRes.data.access_token);
  return loginApiRes;
};
