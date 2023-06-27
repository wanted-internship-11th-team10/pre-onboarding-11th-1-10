import axios from 'axios';
import { PostSignupReqDto, PostSignupResDto, PostSigninReqDto, PostSigninResDto } from './api.dto';

axios.defaults.baseURL = 'https://www.pre-onboarding-selection-task.shop/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const client = axios.create();

const api = {
  postSignup: (body: PostSignupReqDto): Promise<PostSignupResDto> => client.post('/auth/signup', body),
  postSignin: (body: PostSigninReqDto): Promise<PostSigninResDto> => client.post('/auth/signin', body),
};

export default api;
