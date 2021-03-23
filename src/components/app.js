import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Routes from '../routes';
import { checkUserSession } from '../api';

const App = () => {
  const [userInfo, setUserInfo] = useState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });

  const updateInfo = data => {
    setUserInfo(data);
  };

  const handleLoggout = () => {
    updateInfo({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });
  };

  useEffect(() => {
    checkUserSession(updateInfo, userInfo);
  }, []);

  return (
    <div className="app">
      <Routes info={userInfo} updateInfo={updateInfo} handleLoggout={handleLoggout} />
    </div>
  );
};

export default App;
