import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Routes from '../routes';

const App = () => {
  const [userInfo, setUserInfo] = useState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });

  const updateInfo = data => {
    setUserInfo(data);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log(response);
        console.log(userInfo);
        if (response.data.logged_in && userInfo.loggedInStatus === 'NOT_LOGGED_IN') {
          updateInfo(
            { loggedInStatus: 'LOGGED_IN', user: response.data.user },
          );
        } else if (!response.data.logged_in && userInfo.loggedInStatus === 'LOGGED_IN') {
          updateInfo(
            { loggedInStatus: 'NOT_LOGGED_IN', user: {} },
          );
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="app">
      <Routes info={userInfo} updateInfo={updateInfo} />
    </div>
  );
};

export default App;
