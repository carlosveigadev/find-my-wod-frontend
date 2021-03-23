import React from 'react';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = props => {
  const { info, updateInfo } = props;

  const handleSuccessfulAuth = data => {
    updateInfo({ loggedInStatus: 'LOGGED_IN', user: data.user });
  };

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {' '}
        {info.loggedInStatus}
      </h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      {/* <Login handleSuccessfulAuth={handleSuccessfulAuth} /> */}
    </div>
  );
};

Home.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
  updateInfo: PropTypes.func.isRequired,
};

export default Home;
