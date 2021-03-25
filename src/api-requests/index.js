import axios from 'axios';

const URL = 'http://localhost:3001';

const logInUser = data => {
  console.log(data);
  return axios({
    url: `${URL}/auth/login`,
    data: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => console.log(res)).catch(err => console.log(err));
};

export default logInUser;
