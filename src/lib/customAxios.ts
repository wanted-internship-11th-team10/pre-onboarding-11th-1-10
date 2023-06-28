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
// 투두 조회 api
export const getTodoApi = () => {
  return authAxios.get('/todos');
};

// 투두 등록 api
export const postTodoApi = (text: string) => {
  return authAxios.post('/todos', { todo: text });
};

// 투두 삭제 api
export const deleteTodoApi = (todo_id: number) => {
  return authAxios.delete(`/todos/${todo_id}`);
};

// 투두 수정 api
export const updatedTodoApi = (todo_id: number, todo: string, isCompleted: boolean) => {
  return authAxios.put(`/todos/${todo_id}`, {
    todo,
    isCompleted,
  });
};

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
