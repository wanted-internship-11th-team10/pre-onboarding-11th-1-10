import { client } from '.';

type SigninRequest = {
  email: string;
  password: string;
};
type SignupRequest = SigninRequest;

type SigninResponse = {
  access_token: string;
};

export async function signup(data: SignupRequest): Promise<void> {
  return client.post('/auth/signup', data);
}

export async function signin(data: SigninRequest): Promise<SigninResponse> {
  const response = await client.post('/auth/signin', data);
  return response.data;
}
