import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  logInUser, SignInRequest, getWods, fetchFavourites, favouriteDelete, favouriteCreate,
} from '../api-requests';

describe('Test the API requests', () => {
  const mock = new MockAdapter(axios);
  test('logInUser is working and returns an object', async () => {
    mock.onGet('https://find-my-wod-api.herokuapp.com/auth/login').reply(200, {
      res: { data: { auth_token: 'test' } },
    });
    const data = { user: 'test@test.com', password: '123' };

    const result = await logInUser(data);
    expect(typeof result).toBe('object');
  });

  test('SignInRequest is working and returns an object', async () => {
    mock.onPost('https://find-my-wod-api.herokuapp.com/signup').reply(200, {
      res: { data: { auth_token: 'test' } },
    });
    const data = { user: 'test@test.com', password: '123', password_confirmation: '123' };

    const result = await SignInRequest(data);
    expect(typeof result).toBe('object');
  });

  test('getWods is working and returns an object', async () => {
    mock.onGet('https://find-my-wod-api.herokuapp.com/api/v1/wods').reply(200, {
      res: { wods: {} },
    });
    const token = 'test';

    const result = await getWods(token);
    expect(typeof result).toBe('object');
  });

  test('fetchFavourites is working and returns an object', async () => {
    mock.onGet('https://find-my-wod-api.herokuapp.com/api/v1/favourites').reply(200, {
      res: { wods: { } },
    });
    const token = 'test';

    const result = await fetchFavourites(token);
    expect(typeof result).toBe('object');
  });

  test('favouriteCreate is working and returns an object', async () => {
    mock.onPost('https://find-my-wod-api.herokuapp.com/api/v1/api/v1/wods/1/favourite').reply(200, {
      res: { },
    });
    const token = 'test';

    const result = await favouriteCreate(token);
    expect(typeof result).toBe('object');
  });

  test('favouriteDelete is working and returns an object', async () => {
    mock.onPost('https://find-my-wod-api.herokuapp.com/api/v1/api/v1/wods/1/unfavourite').reply(200, {
      res: { },
    });
    const token = 'test';

    const result = await favouriteDelete(token);
    expect(typeof result).toBe('object');
  });
});
