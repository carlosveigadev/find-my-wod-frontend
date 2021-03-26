import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWods } from '../api-requests';

const Wods = ({ userToken }) => {
  const [wods, setWods] = useState([]);

  useEffect(async () => {
    const allWods = await getWods(userToken);
    console.log(allWods);
    setWods(allWods);
  }, []);

  if (wods) {
    console.log(wods);
    return (
      <>
        {wods.map(wod => <div key={wod.id}>{wod.title}</div>)}
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
