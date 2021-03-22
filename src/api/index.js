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
    console.log('resgistration res', response);
  }).catch(error => {
    console.log('reg error', error);
  });
};

export default submitUserData;
