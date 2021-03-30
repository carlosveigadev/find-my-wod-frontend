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

export const getWods = async token => {
  try {
    const response = await axios({
      url: `${URL}/api/v1/wods`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const newData = await response.data;
    return newData;
  } catch (error) {
    return null;
  }
};

export const fetchFavourites = async token => {
  console.log(token);
  try {
    const response = await axios({
      url: `${URL}/api/v1/favourites`,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const newData = await response.data;
    return newData;
  } catch (error) {
    return null;
  }
};

export const favouriteRequest = async (wodId, status, token) => {
  try {
    const response = await axios({
      url: `${URL}/api/v1/wods/${wodId}/${status}`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const newData = await response.data;
    return newData;
  } catch (error) {
    return null;
  }
};
