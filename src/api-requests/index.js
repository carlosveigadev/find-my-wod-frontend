import axios from 'axios';

const URL = 'https://find-my-wod-api.herokuapp.com';

export const logInUser = data => axios({
  url: `${URL}/authentication`,
  data: JSON.stringify(data),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res).catch(err => err);

export const SignInRequest = async data => axios({
  url: `${URL}/users`,
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

export const favouriteCreate = async (wodId, token) => {
  try {
    const response = await axios({
      url: `${URL}/api/v1/favourites/${wodId}/`,
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

export const favouriteDelete = async (wodId, token) => {
  try {
    const response = await axios({
      url: `${URL}/api/v1/favourites/${wodId}/`,
      method: 'DELETE',
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
