/**
 * 인증 관련 API 요청 및 후처리 로직을 정의하는 곳
 * 1. signUpRequest - 회원가입 요청
 * 2. signInRequest - 로그인 요청
 */

import axios from 'axios';
import { FormType } from '../components/Form';

export default class Axios {
  private useAxios = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/',
    headers: { 'Content-Type': 'application/json' },
  });

  async signUpRequest(formData: FormType) {
    return await this.useAxios.post('auth/signup', formData).catch((error) => {
      alert(error.response.data.message);
    });
  }

  async signInRequest(formData: FormType) {
    return await this.useAxios.post('auth/signin', formData).catch((error) => {
      alert(error.response.data.message);
    });
  }
}
