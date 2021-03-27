import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWods } from '../api-requests';

const Wods = ({ userToken }) => {
  const [wods, setWods] = useState([]);

  useEffect(async () => {
    const allWods = await getWods(userToken);
    setWods(allWods);
  }, []);

  if (wods) {
    return (
      <>
        {wods.map(wod => <Link key={wod.id} to={{ pathname: `/wods/${wod.id}`, state: { wod } }}>{wod.title}</Link>)}
      </>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

const mapStateToProps = state => ({
  userToken: state.userStore.userToken,
});

Wods.propTypes = {
  userToken: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wods);
