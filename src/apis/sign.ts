import axios from 'axios';

export async function signup(email: string, password: string): Promise<null> {
  const response = await axios.post(`/auth/signup`, { email, password });
  return response.data;
}

export async function signin(email: string, password: string): Promise<SigninBody> {
  const response = await axios.post<SigninBody>(`/auth/signin`, { email, password });
  return response.data;
}
type SigninBody = {
  access_token: string;
};
