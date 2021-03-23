import React, { useState } from 'react';
import Routes from '../routes';

const App = () => {
  const [userInfo, setUserInfo] = useState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });

  const updateInfo = data => {
    setUserInfo(data);
  };

  return (
    <div className="app">
      <Routes info={userInfo} updateInfo={updateInfo} />
    </div>
  );
};

export default App;
