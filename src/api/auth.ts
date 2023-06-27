import { apiInstance } from '.';

interface UserData {
  email: string;
  password: string;
}

export async function signin(data: UserData) {
  return apiInstance.post('/auth/signin', data);
}
