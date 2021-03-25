import axios from 'axios';

const URL = 'http://localhost:3001';

export const logInUser = data => axios({
  url: `${URL}/auth/login`,
  data: JSON.stringify(data),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res).catch(err => err);

export const SignInRequest = async data => axios({
  url: `${URL}/signup`,
  data: JSON.stringify({
    email: data.emailSignIn,
    password: data.passwordSignIn,
    password_confirmation: data.password_confirmation,
  }),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res).catch(err => err);
