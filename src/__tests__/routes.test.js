import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userReducer from '../redux/reducers/user';
import favouriteReducer from '../redux/reducers/favourites';
import Home from '../components/Home';
import Login from '../containers/Login';
import WodsId from '../containers/WodsId';
import Favourites from '../containers/Favourites';
import About from '../components/About';
import SignIn from '../containers/SignIn';

describe('Check if routes work ', () => {
  it('renders Home page correctly in the proper route.', () => {
    const rootReducer = combineReducers(
      { userStore: userReducer, favouriteStore: favouriteReducer },
    );
    const store = createStore(rootReducer);

    const home = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  it('renders About page correctly in the proper route.', () => {
    const about = renderer
      .create(
        <BrowserRouter>
          <About />
        </BrowserRouter>,
      )
      .toJSON();
    expect(about).toMatchSnapshot();
  });

  it('renders Login page correctly in the proper route.', () => {
    const rootReducer = combineReducers(
      { userStore: userReducer, favouriteStore: favouriteReducer },
    );
    const store = createStore(rootReducer);
    const login = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(login).toMatchSnapshot();
  });

  it('renders SingUp page correctly in the proper route.', () => {
    const rootReducer = combineReducers(
      { userStore: userReducer, favouriteStore: favouriteReducer },
    );
    const store = createStore(rootReducer);
    const signup = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <SignIn />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(signup).toMatchSnapshot();
  });

  it('renders WodId page correctly in the proper route.', () => {
    const rootReducer = combineReducers(
      { userStore: userReducer, favouriteStore: favouriteReducer },
    );
    const store = createStore(rootReducer);
    const props = { state: { wod: { title: 'test', description: 'test', image: 'test' } } };
    const wodsid = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <WodsId location={props} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(wodsid).toMatchSnapshot();
  });

  it('renders Favourites page correctly in the proper route.', () => {
    const rootReducer = combineReducers(
      { userStore: userReducer, favouriteStore: favouriteReducer },
    );
    const store = createStore(rootReducer);
    const favourites = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Favourites />
          </BrowserRouter>
        </Provider>,

      )
      .toJSON();
    expect(favourites).toMatchSnapshot();
  });
});
