import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import userReducer from './redux/reducers/user';
import favouriteReducer from './redux/reducers/favourites';

const rootReducer = combineReducers({
  userStore: userReducer,
  favouriteStore: favouriteReducer,
});
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const persistor = persistStore(store);

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root'),
);
