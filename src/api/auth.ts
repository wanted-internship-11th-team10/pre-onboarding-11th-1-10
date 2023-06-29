import { client } from '.';

type Status = {
  status: number;
};

type SignupRequest = {
  email: string;
  password: string;
};
type SignupResponse = Status;

type SigninRequest = SignupRequest;
type SigninResponse = Status & {
  data: {
    access_token: string;
  };
};

export async function signup(data: SignupRequest): Promise<SignupResponse> {
  return client.post('/auth/signup', data);
}

export async function signin(data: SigninRequest): Promise<SigninResponse> {
  return client.post('/auth/signin', data);
}
