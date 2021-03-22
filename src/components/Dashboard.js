import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = props => {
  const { info } = props;
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>
        Status:
        {' '}
        {info.loggedInStatus}
      </h1>
    </div>
  );
};

Dashboard.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dashboard;
