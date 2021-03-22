import axios from 'axios';

const URL = 'http://localhost:3001';

const submitUserData = object => {
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
    .then(response => { handleSuccessfulAuth(response.data); })
    .catch(error => error);
};

export default submitUserData;
