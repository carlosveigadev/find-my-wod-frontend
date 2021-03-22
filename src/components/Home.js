import React from 'react';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';

const Home = props => {
  const { info } = props;
  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {' '}
        {info.loggedInStatus}
      </h1>
      <Registration />
    </div>
  );
};

Home.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
