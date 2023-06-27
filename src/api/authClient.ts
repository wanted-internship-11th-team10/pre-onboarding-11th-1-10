import axios from 'axios';
import { FormType } from '../components/Form';

export default class AuthClient {
  private httpClient = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/',
    headers: { 'Content-Type': 'application/json' },
  });

  async signup(params: FormType) {
    return this.httpClient.post('auth/signup', params);
  }

  async signin(params: FormType) {
    return this.httpClient.post('auth/signin', params);
  }
}
