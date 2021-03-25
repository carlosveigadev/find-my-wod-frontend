import axios from 'axios';

const URL = 'http://localhost:3001';

export const logInUser = data => axios({
  url: `${URL}/auth/login`,
  data: JSON.stringify(data),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => console.log(res)).catch(err => err);

export const SignInRequest = data => axios({
  url: `${URL}/signup`,
  data: JSON.stringify(data),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => console.log(res)).catch(err => err);
