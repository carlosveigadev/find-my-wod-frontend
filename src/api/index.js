import axios from 'axios';

const URL = 'http://localhost:3001';

const submitUserData = object => {
  const { email, password, passwordConfirmation } = object;
  axios.post(`${URL}/registrations`,
    {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    },
    { withCredentials: true }).then(response => {
    if (response.data.status === 'created') {
      return response.data;
    }
    return 'Something went wrong';
  }).catch(error => error);
};

export default submitUserData;
