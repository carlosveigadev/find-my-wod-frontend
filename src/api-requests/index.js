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

export const SignInRequest = data => {
  const { email, password, passwordConfirmation } = data;
  return axios({
    url: `${URL}/signup`,
    data: JSON.stringify({ email, password, passwordConfirmation }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res).catch(err => err);
};
