import React, { useState } from 'react';
import Routes from '../routes';

const App = () => {
  const [userInfo, setUserInfo] = useState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });
  return (
    <div className="app">
      <Routes info={userInfo} />
    </div>
  );
};

export default App;
