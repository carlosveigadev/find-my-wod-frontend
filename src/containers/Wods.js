import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWods, fetchFavourites } from '../api-requests';
import { favouriteData } from '../redux/actions';

const Wods = ({ userToken, favouriteData }) => {
  const [wods, setWods] = useState([]);

  useEffect(async () => {
    const allWods = await getWods(userToken);
    setWods(allWods);
  }, []);

  useEffect(async () => {
    const newData = await fetchFavourites(userToken);
    favouriteData(newData);
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

const mapDispatch = {
  favouriteData,
};

const mapStateToProps = state => ({
  userToken: state.userStore.userToken,
});

Wods.propTypes = {
  userToken: PropTypes.string.isRequired,
  favouriteData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Wods);
