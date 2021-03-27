import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

const Favourites = ({ favouriteWods }) => {
  const history = useHistory();
  if (favouriteWods.length !== 0) {
    return (
      <>
        {favouriteWods.map(wod => <Link key={wod.id} to={{ pathname: `/wods/${wod.id}`, state: { wod } }}>{wod.title}</Link>)}
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
      </>
    );
  }
  return (
    <>
      <h1>You have no favorite wods...</h1>
      <h1>
        Click
        {' '}
        <Link to="/">Here</Link>
        {' '}
        to go trough the Dashboard.
        {' '}
      </h1>
    </>
  );
};

Favourites.propTypes = {
  favouriteWods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favouriteWods: state.favouriteStore,
});

export default connect(mapStateToProps, null)(Favourites);
