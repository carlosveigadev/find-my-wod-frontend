import axios from 'axios';

const URL = 'http://localhost:3001';

export const submitUserData = object => {
  const {
    email, password, passwordConfirmation, handleSuccessfulAuth,
  } = object;
  axios.post(`${URL}/registrations`,
    {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    },
    { withCredentials: true })
    .then(response => {
      if (response.data.status === 'created') {
        handleSuccessfulAuth(response.data);
      }
      return 'Error';
    })
    .catch(error => error);
};

export const loginUserData = object => {
  const {
    email, password, handleSuccessfulAuth,
  } = object;
  axios.post(`${URL}/sessions`,
    {
      user: {
        email,
        password,
      },
    },
    { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data);
      }
      return 'Error';
    })
    .catch(error => error);
};
