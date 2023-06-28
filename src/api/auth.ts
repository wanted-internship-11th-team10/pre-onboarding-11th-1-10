import { apiInstance } from '.';

export type Status = {
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
  return apiInstance.post('/auth/signup', data);
}

export async function signin(data: SigninRequest): Promise<SigninResponse> {
  return apiInstance.post('/auth/signin', data);
}
