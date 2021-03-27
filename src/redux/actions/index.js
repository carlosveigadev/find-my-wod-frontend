const USER_DATA = 'USER_DATA';
const FAVOURITE_DATA = 'FAVOURITE_DATA';

const userData = data => ({
  type: USER_DATA,
  payload: data,
});

const favouriteData = data => ({
  type: FAVOURITE_DATA,
  payload: data,
});

export {
  USER_DATA, FAVOURITE_DATA, userData, favouriteData,
};
